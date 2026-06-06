"""Vouliwatch adapter — real, structured Greek parliamentary data via its JSON API.

Discovered endpoints (vouliwatch.gr, no Akamai block, robots allows):
  /api/current_members                              -> 330 MPs incl. party path
  /api/docviews/votings/votings?page&per_page       -> votings metadata
                                                       (title, outcome, topic, date,
                                                        anonymous flag, slug)

What we wire:
  * members.json  — the real 330-MP -> party map (powers party attribution
    across the whole pipeline; replaces the curated seed)
  * votings.json  — voting metadata for topic/temporal analysis

Per-MP roll-call breakdowns are NOT exposed by the public API (the slug-detail
endpoint returns the list), so the graph tier keeps its synthetic fallback until
a Vouliwatch data partnership or the official ονομαστικές-ψηφοφορίες feed
(hellenicparliament.gr, GR-IP) provides them. Prefer partnering over scraping —
this adapter only reads the public JSON API, politely.
"""
from __future__ import annotations

import json
import os
import re

from ..normalize import fold

BASE = "https://vouliwatch.gr/api"
DATA = os.environ.get("VOULI_DATA", "data")

# party _path slug -> canonical party (see config.PARTIES)
PARTY_PATH = {
    "nea_dimokratia": "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ",
    "pasok": "ΠΑΣΟΚ - ΚΙΝΑΛ", "kinima_allagis": "ΠΑΣΟΚ - ΚΙΝΑΛ",
    "syriza": "ΣΥΡΙΖΑ", "nea_aristera": "ΝΕΑ ΑΡΙΣΤΕΡΑ", "kke": "ΚΚΕ",
    "elliniki_lysi": "ΕΛΛΗΝΙΚΗ ΛΥΣΗ",
    "plefsi_eleftherias": "ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ", "pleysi_eleutherias": "ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ",
    "dimokratiko_patriotiko_kinima_niki": "ΝΙΚΗ", "niki": "ΝΙΚΗ",
    "foni_logikis": "ΦΩΝΗ ΛΟΓΙΚΗΣ", "spartiates": "ΣΠΑΡΤΙΑΤΕΣ",
    "ellinikos_palmos": "ΕΛΛΗΝΙΚΟΣ ΠΑΛΜΟΣ", "no_party": "",
}


def _get(path: str):
    from curl_cffi import requests as creq
    s = creq.Session(impersonate="chrome")
    r = s.get(BASE + path, headers={"Accept": "application/json",
                                    "Accept-Language": "el-GR,el;q=0.9"}, timeout=30)
    return r.json() if r.status_code == 200 else None


def _canon_party(path: str) -> str:
    if not path:
        return ""
    slug = path.rsplit(".", 1)[-1]
    return PARTY_PATH.get(slug, slug.replace("_", " ").upper())


def fetch_members() -> dict[str, str]:
    """Write data/members.json: {member name variant -> canonical party}."""
    data = _get("/current_members")
    members = (data or {}).get("results", []) if isinstance(data, dict) else (data or [])
    out: dict[str, str] = {}
    for m in members:
        last = (m.get("last_name") or "").strip()
        first = re.sub(r"\(.*?\)", "", m.get("first_name") or "").strip()
        pp = m.get("@political_party_member") or {}
        party = _canon_party(pp.get("_path", "") if isinstance(pp, dict) else pp)
        if not last:
            continue
        for key in {f"{first} {last}", f"{last} {first}", last}:
            out[key.strip()] = party
    os.makedirs(DATA, exist_ok=True)
    path = os.path.join(DATA, "members.json")
    json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    parties = {p for p in out.values() if p}
    print(f"[vouliwatch] {len(members)} MPs -> {path}  ({len(parties)} parties)")
    return out


def fetch_votings(pages: int = 20, per_page: int = 50) -> list[dict]:
    """Write data/votings.json: voting metadata (title/outcome/topic/date/slug)."""
    rows: list[dict] = []
    for pg in range(1, pages + 1):
        data = _get(f"/docviews/votings/votings?page={pg}&per_page={per_page}")
        recs = (data or {}).get("results", []) if isinstance(data, dict) else []
        if not recs:
            break
        for r in recs:
            rows.append({
                "slug": r.get("_slug"), "title": r.get("title"),
                "outcome": (r.get("summary") or {}).get("outcome"),
                "topic": (r.get("@topics") or "").lstrip("#"),
                "date": r.get("voted_at", "")[:10],
                "subject_type": r.get("subject_type"),
                "anonymous": r.get("anonymous", True),
            })
    os.makedirs(DATA, exist_ok=True)
    path = os.path.join(DATA, "votings.json")
    json.dump(rows, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    named = sum(1 for r in rows if not r["anonymous"])
    print(f"[vouliwatch] {len(rows)} votings ({named} named/roll-call) -> {path}")
    return rows


if __name__ == "__main__":
    import sys
    cmd = sys.argv[1] if len(sys.argv) > 1 else "members"
    if cmd in ("members", "all"):
        fetch_members()
    if cmd in ("votings", "all"):
        fetch_votings()
