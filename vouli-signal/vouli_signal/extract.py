"""Convert harvested transcripts to text, segment into speaker turns, and derive
attack-shaped Question records for the classify -> signal -> digest path.

Format handling: .txt direct; .docx via python-docx; .pdf via pypdf then pdfminer;
.doc via `antiword`/libreoffice if available (best-effort).
"""
from __future__ import annotations

import json
import os
import subprocess
import uuid

from . import members, normalize
from .models import Question

# Grievance markers that flag a debate turn as an opposition-style attack.
_ATTACK_MARKERS = [
    "καθυστερ", "κενα", "εκκρεμ", "λιστα αναμον", "σκανδαλ", "ανισχυρ",
    "αποτυχ", "ευθυνη", "κυβερνησ", "αδιαφανει", "οπεκεπε", "υποστελεχ",
    "δεν εχει", "ουδεν", "προχειροτητ", "κοροιδι", "εμπαιγμ",
]


def to_text(path: str, ext: str | None = None) -> str:
    ext = (ext or path.rsplit(".", 1)[-1]).lower()
    try:
        if ext == "txt":
            for enc in ("utf-8", "cp1253", "iso-8859-7"):
                try:
                    return open(path, encoding=enc).read()
                except UnicodeDecodeError:
                    continue
            return open(path, encoding="utf-8", errors="ignore").read()
        if ext == "docx":
            from docx import Document  # type: ignore
            return "\n".join(p.text for p in Document(path).paragraphs)
        if ext == "pdf":
            try:
                from pypdf import PdfReader  # type: ignore
                return "\n".join((pg.extract_text() or "") for pg in PdfReader(path).pages)
            except Exception:
                from pdfminer.high_level import extract_text  # type: ignore
                return extract_text(path)
        if ext == "doc":
            for cmd in (["antiword", path],
                        ["libreoffice", "--headless", "--cat", path]):
                try:
                    return subprocess.run(cmd, capture_output=True, text=True,
                                          timeout=120).stdout
                except Exception:
                    continue
    except Exception as e:
        print(f"[extract] {path}: {e}")
    return ""


def segment(path: str, ext: str | None = None) -> list[dict]:
    return normalize.split_turns(to_text(path, ext))


def _looks_like_attack(text: str) -> bool:
    f = normalize.fold(text)
    return len(text) > 200 and any(m in f for m in _ATTACK_MARKERS)


def corpus_to_questions(index_path: str, max_files: int = 0,
                        max_turns: int = 0) -> list[Question]:
    """Walk the harvested index, segment, keep attack-shaped turns as Questions.

    Party attribution uses `members.party_for` (curated seed of current
    front-benchers + optional data/members.json for historical depth).
    """
    if not os.path.exists(index_path):
        print(f"[extract] no index at {index_path} — run `harvest` first")
        return []
    index = json.load(open(index_path, encoding="utf-8"))
    out: list[Question] = []
    for i, entry in enumerate(index):
        if max_files and i >= max_files:
            break
        for turn in segment(entry["path"], entry.get("ext")):
            if not _looks_like_attack(turn["text"]):
                continue
            party = members.party_for(turn["speaker"])
            out.append(Question(
                id=str(uuid.uuid4())[:8], date=entry.get("date", ""),
                doc_type="praktika", mps=[turn["speaker"]], party=party,
                ministry_target="", title=turn["text"][:120].replace("\n", " "),
                text=turn["text"][:2000], url=entry["url"],
            ))
            if max_turns and len(out) >= max_turns:
                return out
    print(f"[extract] {len(out)} attack-shaped turns from {len(index)} transcripts")
    return out
