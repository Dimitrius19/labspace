"""Aggregate grievances into scored demand signals."""
from __future__ import annotations

import datetime as _dt
from collections import defaultdict

from . import config
from .models import Grievance, Signal


def _recent(date_iso: str, days: int = 30) -> bool:
    try:
        d = _dt.date.fromisoformat(date_iso)
    except ValueError:
        return False
    return (_dt.date.today() - d).days <= days


def build_signals(grievances: list[Grievance]) -> list[Signal]:
    groups: dict[tuple[str, str], list[Grievance]] = defaultdict(list)
    for g in grievances:
        if not g.is_opposition:        # demand signal = opposition pressure
            continue
        groups[(g.ministry_id, g.topic)].append(g)

    signals: list[Signal] = []
    for (mid, topic), gs in groups.items():
        parties = sorted({g.party for g in gs if g.party})
        ai = any(g.ai_addressable for g in gs)
        controls = any(g.controls_theme for g in gs)
        latest = max(g.date for g in gs)
        theses = config.THESIS_INDEX.get(mid, []) if ai else []

        w = config.WEIGHTS
        score = (
            w["ai_addressable"] * (1 if ai else 0)
            + w["cross_party"] * len(parties)
            + w["frequency"] * len(gs)
            + w["controls_theme"] * (1 if controls else 0)
            + w["has_thesis"] * (1 if theses else 0)
            + w["recency"] * (1 if _recent(latest) else 0)
        )
        signals.append(Signal(
            ministry_id=mid, ministry_name=gs[0].ministry_name or mid,
            topic=topic, summary=gs[0].summary, score=round(score, 1),
            frequency=len(gs), parties=parties, ai_addressable=ai,
            controls_theme=controls, matched_theses=theses,
            latest_date=latest, examples=[g.summary for g in gs[:3]],
        ))
    return sorted(signals, key=lambda s: s.score, reverse=True)
