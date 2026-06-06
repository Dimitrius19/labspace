"""Member -> party attribution for plenary turns.

Ships a curated seed of the current (Κ΄ period, elected 2023) opposition
front-benchers who actually file the attacks we care about, keyed by folded
surname. Optionally merged with a fuller historical map at data/members.json
(e.g. derived from the ParlaMint-GR / greparl members tables).

Surname keying is coarse (rare collisions possible) but enough to give the
demand-signal scorer real cross-party attribution out of the box.
"""
from __future__ import annotations

import json
import os

from .normalize import fold

# folded surname -> canonical party (see config.PARTIES)
SEED: dict[str, str] = {
    # ΠΑΣΟΚ - ΚΙΝΑΛ
    "νικητιαδης": "ΠΑΣΟΚ", "παραστατιδης": "ΠΑΣΟΚ", "ανδρουλακης": "ΠΑΣΟΚ",
    "κατρινης": "ΠΑΣΟΚ", "πουλας": "ΠΑΣΟΚ", "παρασκευαιδης": "ΠΑΣΟΚ",
    "γερουλανος": "ΠΑΣΟΚ", "δουδωνης": "ΠΑΣΟΚ",
    # ΣΥΡΙΖΑ
    "φαμελλος": "ΣΥΡΙΖΑ", "μαμουλακης": "ΣΥΡΙΖΑ", "παναγιωτοπουλος": "ΣΥΡΙΖΑ",
    "καραμερος": "ΣΥΡΙΖΑ", "βεττα": "ΣΥΡΙΖΑ", "πολακης": "ΣΥΡΙΖΑ",
    "αχτσιογλου": "ΣΥΡΙΖΑ", "ξανθος": "ΣΥΡΙΖΑ",
    # ΝΕΑ ΑΡΙΣΤΕΡΑ
    "χαριτσης": "ΝΕΑ ΑΡΙΣΤΕΡΑ", "περκα": "ΝΕΑ ΑΡΙΣΤΕΡΑ",
    "αναγνωστοπουλου": "ΝΕΑ ΑΡΙΣΤΕΡΑ", "τζουφη": "ΝΕΑ ΑΡΙΣΤΕΡΑ",
    "φωτιου": "ΝΕΑ ΑΡΙΣΤΕΡΑ", "ηλιοπουλος": "ΝΕΑ ΑΡΙΣΤΕΡΑ",
    # ΚΚΕ
    "συντυχακης": "ΚΚΕ", "κουτσουμπας": "ΚΚΕ", "δελης": "ΚΚΕ",
    # ΕΛΛΗΝΙΚΗ ΛΥΣΗ
    "βελοπουλος": "ΕΛΛΗΝΙΚΗ ΛΥΣΗ",
    # ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ
    "κωνσταντοπουλου": "ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ",
    # ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ (governing — so turns are defence, not demand signal)
    "μητσοτακης": "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ", "ζαχαρακη": "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ",
    "καλαφατης": "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ", "θεοδωρικακος": "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ",
}

# Re-fold seed keys so final-sigma normalisation (ς->σ) matches folded speakers.
SEED = {fold(k): v for k, v in SEED.items()}

_EXTERNAL: dict[str, str] | None = None


def _external() -> dict[str, str]:
    global _EXTERNAL
    if _EXTERNAL is None:
        path = os.path.join(os.environ.get("VOULI_DATA", "data"), "members.json")
        _EXTERNAL = ({fold(k): v for k, v in json.load(open(path, encoding="utf-8")).items()}
                     if os.path.exists(path) else {})
    return _EXTERNAL


def party_for(speaker: str) -> str:
    """Best-effort party for a transcript speaker label ('ΟΝΟΜΑ ΕΠΩΝΥΜΟ')."""
    f = fold(speaker)
    if not f:
        return ""
    ext = _external()
    if f in ext:
        return ext[f]
    # try each token as a surname against the seed + external map
    for tok in reversed(f.split()):
        if tok in SEED:
            return SEED[tok]
        if tok in ext:
            return ext[tok]
    return ""
