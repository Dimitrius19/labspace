"""Schema for the pipeline. Plain dataclasses with JSON (de)serialisation."""
from __future__ import annotations

import json
from dataclasses import dataclass, field, asdict
from typing import Any


@dataclass
class RawDoc:
    """A fetched parliamentary artefact before any analysis."""
    id: str
    source: str                 # endpoint key, e.g. "epikairi_bulletin"
    doc_type: str               # epikairi_erotisi | erotisi | praktika
    url: str
    date: str                   # ISO yyyy-mm-dd (best effort)
    text: str = ""
    fetched_at: str = ""


@dataclass
class Question:
    """A structured parliamentary-control item (the highest-signal stream)."""
    id: str
    date: str
    doc_type: str
    mps: list[str] = field(default_factory=list)
    party: str = ""
    is_opposition: bool = True
    ministry_target: str = ""    # free text as written ("προς τον Υπουργό …")
    title: str = ""
    text: str = ""
    url: str = ""


@dataclass
class Grievance:
    """A classified complaint — the unit the signal index aggregates."""
    source_id: str
    date: str
    party: str
    is_opposition: bool
    mps: list[str]
    ministry_id: str             # mapped to govtech taxonomy
    ministry_name: str
    topic: str                   # short slug/label
    summary: str                 # one-line concrete grievance
    quantities: list[str] = field(default_factory=list)  # €/counts/regions/dates
    ab_class: str = "B"          # "A" throughput (AI-addressable) | "B" political
    ai_addressable: bool = False
    controls_theme: bool = False
    classifier: str = "heuristic"  # heuristic | llm
    url: str = ""


@dataclass
class Signal:
    """An aggregated, scored demand signal per (ministry, topic)."""
    ministry_id: str
    ministry_name: str
    topic: str
    summary: str
    score: float
    frequency: int
    parties: list[str]
    ai_addressable: bool
    controls_theme: bool
    matched_theses: list[str] = field(default_factory=list)
    latest_date: str = ""
    examples: list[str] = field(default_factory=list)


def to_json(objs: list[Any]) -> str:
    return json.dumps([asdict(o) for o in objs], ensure_ascii=False, indent=2)


def write_json(path: str, objs: list[Any]) -> None:
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(to_json(objs))
