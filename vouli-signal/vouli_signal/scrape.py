"""Scrape the live tail: urgent-questions bulletin + plenary minutes listing.

Selectors are best-effort heuristics over the rendered page. The exact DOM is
behind Akamai (so it can't be enumerated offline); run `scrape --save-html` once
you have a working fetch to capture the real markup and tighten the parser.
The pipeline degrades to demo data if a scrape yields nothing, so it never breaks.
"""
from __future__ import annotations

import datetime as _dt
import re
import uuid

from . import config
from .fetch import fetch
from .models import Question


def _text_from_html(html: str) -> str:
    """Visible text, dependency-light (selectolax if present, else regex strip)."""
    try:
        from selectolax.parser import HTMLParser  # type: ignore
        return HTMLParser(html).text(separator="\n")
    except Exception:
        no_script = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html,
                           flags=re.S | re.I)
        return re.sub(r"<[^>]+>", " ", no_script)


def _links(html: str, pattern: str) -> list[str]:
    return re.findall(rf'href="([^"]*{pattern}[^"]*)"', html, flags=re.I)


# "ΕΠΙΚΑΙΡΗ ΕΡΩΤΗΣΗ ... του βουλευτή X (ΚΟΜΜΑ) προς τον Υπουργό Y"
_Q_BLOCK = re.compile(
    r"(ΕΠΙΚΑΙΡΗ ΕΡΩΤΗΣΗ|ΕΡΩΤΗΣΗ|ΑΝΑΦΟΡΑ|ΕΠΕΡΩΤΗΣΗ)(.{20,900}?)"
    r"(?=ΕΠΙΚΑΙΡΗ ΕΡΩΤΗΣΗ|ΕΡΩΤΗΣΗ|ΑΝΑΦΟΡΑ|ΕΠΕΡΩΤΗΣΗ|\Z)",
    flags=re.S,
)
_PARTY_RE = re.compile(r"\(([^)]{2,40})\)")
_MP_RE = re.compile(r"(?:βουλευτ\w+|του|της|των)\s+([Α-ΩΆ-Ώ][\wΆ-ώ\.\-]+\s+[Α-ΩΆ-Ώ][\wΆ-ώ\.\-]+)")
_DATE_RE = re.compile(r"(\d{1,2})[/.-](\d{1,2})[/.-](20\d{2})")


def _parse_date(text: str) -> str:
    m = _DATE_RE.search(text)
    if m:
        d, mo, y = map(int, m.groups())
        try:
            return _dt.date(y, mo, d).isoformat()
        except ValueError:
            pass
    return _dt.date.today().isoformat()


def parse_questions(text: str, url: str) -> list[Question]:
    out: list[Question] = []
    for m in _Q_BLOCK.finditer(text):
        kind, body = m.group(1), m.group(2).strip()
        if len(body) < 30:
            continue
        party_m = _PARTY_RE.search(body)
        party = party_m.group(1).strip() if party_m else ""
        mps = list(dict.fromkeys(_MP_RE.findall(body)))[:4]
        target = ""
        tm = re.search(r"προς\s+(τον|την|τους)\s+([^.,\n]{4,80})", body)
        if tm:
            target = tm.group(0).strip()
        out.append(Question(
            id=str(uuid.uuid4())[:8],
            date=_parse_date(body),
            doc_type="epikairi_erotisi" if "ΕΠΙΚΑΙΡΗ" in kind else "erotisi",
            mps=mps, party=party, ministry_target=target,
            title=body[:120].replace("\n", " "), text=body, url=url,
        ))
    return out


def scrape_questions(save_html: bool = False) -> list[Question]:
    url = config.ENDPOINTS["epikairi_bulletin"]
    html = fetch(url)
    if not html:
        return []
    if save_html:
        with open("out/_last_bulletin.html", "w", encoding="utf-8") as fh:
            fh.write(html)
    return parse_questions(_text_from_html(html), url)


def scrape_plenary_index() -> list[str]:
    """Return candidate transcript URLs from the plenary-minutes listing."""
    html = fetch(config.ENDPOINTS["plenary_minutes"])
    if not html:
        return []
    return list(dict.fromkeys(_links(html, r"Synedriasi|Praktik|\.pdf")))
