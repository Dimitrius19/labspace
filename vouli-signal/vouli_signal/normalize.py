"""Greek text normalisation + speaker/party helpers.

Accent folding lets the keyword taxonomy match regardless of tonos/case.
"""
from __future__ import annotations

import re
import unicodedata

from . import config

_GREEK_FINAL_SIGMA = {"ς": "σ"}


def fold(text: str) -> str:
    """Lowercase, strip accents/diacritics, normalise final sigma & whitespace."""
    if not text:
        return ""
    text = unicodedata.normalize("NFD", text)
    text = "".join(c for c in text if unicodedata.category(c) != "Mn")
    text = unicodedata.normalize("NFC", text).lower()
    text = "".join(_GREEK_FINAL_SIGMA.get(c, c) for c in text)
    return re.sub(r"\s+", " ", text).strip()


def canonical_party(raw: str) -> str:
    folded_raw = fold(raw)
    for alias, canon in config.PARTY_ALIASES.items():
        if fold(alias) in folded_raw:
            return canon
    for canon in config.PARTIES:
        if fold(canon) in folded_raw:
            return canon
    return raw.strip()


def is_opposition(party: str) -> bool:
    return config.PARTIES.get(canonical_party(party), True)


def match_ministry(text: str) -> tuple[str, str]:
    """Return (ministry_id, ministry_name) for the best keyword hit, else ('','')."""
    f = fold(text)
    best, best_hits = None, 0
    for m in config.MINISTRIES:
        hits = sum(1 for kw in m["keywords"] if kw in f)
        if hits > best_hits:
            best, best_hits = m, hits
    return (best["id"], best["name"]) if best else ("", "")


# Quantities worth surfacing: €amounts, plain counts, years, % and regions.
_QTY_PATTERNS = [
    r"€\s?[\d\.\,]+(?:\s?(?:εκατ\.?|δισ\.?|χιλ\.?))?",
    r"\b\d[\d\.\,]*\s?(?:εκατ\.?|δισ\.?)\s?(?:ευρω|€)?",
    r"\b\d{1,3}(?:\.\d{3})+\b",         # 1.000 style counts
    r"\b\d{1,2}[,\.]\d+\s?%\b",
    r"\b20\d{2}\b",
]


def extract_quantities(text: str) -> list[str]:
    out: list[str] = []
    for pat in _QTY_PATTERNS:
        out.extend(m.group(0).strip() for m in re.finditer(pat, text))
    # de-dup, keep order, cap
    seen, uniq = set(), []
    for q in out:
        if q not in seen:
            seen.add(q)
            uniq.append(q)
    return uniq[:8]


# Speaker turn label in plenary minutes, e.g. "ΓΕΩΡΓΙΟΣ ΠΑΠΑΣ (Βουλευτής):"
_SPEAKER_RE = re.compile(r"^([Α-ΩΆΈΉΊΌΎΏΪΫ][Α-ΩΆΈΉΊΌΎΏΪΫ\.\s\-]{4,}?)\s*(?:\(([^)]+)\))?\s*:")


def split_turns(transcript: str) -> list[dict]:
    """Best-effort segmentation of a plenary transcript into speaker turns."""
    turns: list[dict] = []
    cur = None
    for line in transcript.splitlines():
        m = _SPEAKER_RE.match(line.strip())
        if m:
            if cur:
                turns.append(cur)
            cur = {"speaker": m.group(1).strip(),
                   "role": (m.group(2) or "").strip(),
                   "text": line[m.end():].strip()}
        elif cur is not None:
            cur["text"] += " " + line.strip()
    if cur:
        turns.append(cur)
    return turns
