"""Harvest born-digital plenary transcripts (~2022→present) at scale.

Implements the structure proven by the greparl crawler:
  listing  = /Praktika/Synedriaseis-Olomeleias?pageNo=N   (paginated)
  each row = <tr class="odd|even"> with 4 cols (date, period, session, sitting)
             and <a href> links whose document URLs contain "/UserFiles/"
Files are static, so we GET them directly (no Selenium) — preferring txt>docx>doc>pdf.

NOTE: the main host geo-blocks datacenter/non-GR IPs at the Akamai edge. Run this
from a Greek/residential IP, or set VOULI_PROXY to a GR residential proxy or a
scraping-API endpoint. The fetch layer routes through it transparently.
"""
from __future__ import annotations

import datetime as _dt
import json
import os
import re
import urllib.parse

from . import config
from .fetch import fetch, fetch_bytes

DATA_DIR = os.environ.get("VOULI_DATA", "data")
RAW_PLENARY = os.path.join(DATA_DIR, "plenary")
INDEX_PATH = os.path.join(RAW_PLENARY, "index.json")

_DATE_RE = re.compile(r"(\d{1,2})[/.\-](\d{1,2})[/.\-](20\d{2})")


def _parse_listing_rows(html: str) -> list[dict]:
    """Extract sitting rows from one listing page. Uses bs4 if present, else regex."""
    rows: list[dict] = []
    try:
        from bs4 import BeautifulSoup  # type: ignore
        soup = BeautifulSoup(html, "html.parser")
        body = soup.find("tbody")
        trs = body.find_all("tr", {"class": ["odd", "even"]}) if body else []
        for tr in trs:
            cols = [td.get_text(strip=True) for td in tr.find_all("td")[:4]]
            files = {}
            for a in tr.find_all("a", href=True):
                href = a["href"]
                if config.PLENARY_FILE_MARKER in href:
                    files[href.rsplit(".", 1)[-1].lower()] = href
            if cols and files:
                rows.append({"cols": cols, "files": files})
        return rows
    except Exception:
        # Dependency-light fallback: split on row markers, pull /UserFiles/ links.
        for chunk in re.split(r'<tr[^>]*class="(?:odd|even)"', html)[1:]:
            cols = re.findall(r"<td[^>]*>(.*?)</td>", chunk, flags=re.S)[:4]
            cols = [re.sub(r"<[^>]+>", "", c).strip() for c in cols]
            files = {}
            for href in re.findall(r'href="([^"]*' + re.escape(config.PLENARY_FILE_MARKER) + r'[^"]*)"', chunk):
                files[href.rsplit(".", 1)[-1].lower()] = href
            if cols and files:
                rows.append({"cols": cols, "files": files})
        return rows


def _pick(files: dict[str, str]) -> tuple[str, str]:
    for ext in config.PLENARY_FORMAT_PREFERENCE:
        if ext in files:
            return ext, files[ext]
    ext = next(iter(files))
    return ext, files[ext]


def _iso_date(s: str) -> str:
    m = _DATE_RE.search(s)
    if m:
        d, mo, y = map(int, m.groups())
        try:
            return _dt.date(y, mo, d).isoformat()
        except ValueError:
            pass
    return ""


def _abs(href: str) -> str:
    return href if href.startswith("http") else config.PLENARY_DOMAIN + href


def harvest(max_pages: int = 60, since: str | None = None) -> list[dict]:
    """Crawl listing pages, download the best-format transcript per sitting.

    `since` (ISO date) stops early once rows predate it (newest pages first).
    Resumable: skips files already on disk; appends to index.json.
    """
    os.makedirs(RAW_PLENARY, exist_ok=True)
    index: list[dict] = []
    if os.path.exists(INDEX_PATH):
        index = json.load(open(INDEX_PATH, encoding="utf-8"))
    seen = {e["url"] for e in index}

    for page in range(1, max_pages + 1):
        url = config.PLENARY_LISTING.format(page=page)
        html = fetch(url, use_cache=False)
        if not html:
            print(f"[plenary] page {page}: no HTML (blocked? set VOULI_PROXY) — stopping")
            break
        rows = _parse_listing_rows(html)
        if not rows:
            print(f"[plenary] page {page}: 0 rows — stopping")
            break
        print(f"[plenary] page {page}: {len(rows)} sittings")

        stop = False
        for row in rows:
            date_iso = _iso_date(row["cols"][0])
            if since and date_iso and date_iso < since:
                stop = True
                continue
            ext, href = _pick(row["files"])
            file_url = _abs(href)
            if file_url in seen:
                continue
            fname = urllib.parse.unquote(href.rsplit("/", 1)[-1])
            safe = f"{date_iso or 'undated'}_{re.sub(r'[^A-Za-z0-9._-]', '_', fname)}"
            dest = os.path.join(RAW_PLENARY, safe)
            if fetch_bytes(file_url, dest):
                entry = {"date": date_iso, "period": row["cols"][1] if len(row["cols"]) > 1 else "",
                         "session": row["cols"][2] if len(row["cols"]) > 2 else "",
                         "sitting": row["cols"][3] if len(row["cols"]) > 3 else "",
                         "ext": ext, "url": file_url, "path": dest}
                index.append(entry)
                seen.add(file_url)
                print(f"    ✓ {date_iso} {safe}")
        json.dump(index, open(INDEX_PATH, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=2)
        if stop:
            print(f"[plenary] reached since={since} — stopping")
            break

    print(f"[plenary] index: {len(index)} transcripts -> {INDEX_PATH}")
    return index
