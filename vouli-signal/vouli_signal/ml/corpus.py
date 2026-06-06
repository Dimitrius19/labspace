"""Assemble a unified document corpus for ML from the pipeline's outputs.

Sources, in priority order:
  1. harvested plenary turns (data/plenary/index.json -> attack-shaped turns)
  2. classified grievances (out/grievances.json)
The result is a flat list of {id, text, meta{ministry, party, date, topic, ...}}.
"""
from __future__ import annotations

import json
import os

OUT = os.environ.get("VOULI_OUT", "out")


def _load(path):
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else []


def load_documents(max_docs: int = 0) -> list[dict]:
    docs: list[dict] = []

    # Plenary turns (the big corpus, when harvested)
    try:
        from ..plenary import INDEX_PATH
        from .. import extract
        if os.path.exists(INDEX_PATH):
            for q in extract.corpus_to_questions(INDEX_PATH):
                docs.append({"id": q.id, "text": f"{q.title}\n{q.text}",
                             "meta": {"party": q.party, "date": q.date,
                                      "source": "plenary", "mps": q.mps}})
    except Exception as e:
        print(f"[ml.corpus] plenary load skipped: {e}")

    # Classified grievances (always available after `pipeline all`)
    for g in _load(os.path.join(OUT, "grievances.json")):
        docs.append({"id": g["source_id"], "text": f"{g['summary']}\n{g.get('topic','')}",
                     "meta": {"ministry": g.get("ministry_id", ""), "party": g.get("party", ""),
                              "date": g.get("date", ""), "topic": g.get("topic", ""),
                              "ab": g.get("ab_class", ""), "source": "grievance"}})

    if max_docs:
        docs = docs[:max_docs]
    print(f"[ml.corpus] {len(docs)} documents")
    return docs
