"""Render scored signals into a markdown digest."""
from __future__ import annotations

import datetime as _dt

from .models import Signal


def render(signals: list[Signal]) -> str:
    today = _dt.date.today().isoformat()
    lines = [
        f"# Βουλή Demand-Signal Digest — {today}",
        "",
        "Govtech-addressable opposition attacks, ranked by opportunity score.",
        "Score = AI-addressable × cross-party × frequency × controls-tailwind × "
        "existing-thesis × recency.",
        "",
    ]

    actionable = [s for s in signals if s.ai_addressable]
    political = [s for s in signals if not s.ai_addressable]

    lines.append(f"## 🎯 Actionable (AI-addressable) — {len(actionable)}")
    lines.append("")
    lines.append("| Score | Ministry | Topic | Parties | Theses | Latest |")
    lines.append("|---|---|---|---|---|---|")
    for s in actionable:
        theses = ", ".join(f"`{t}`" for t in s.matched_theses) or "—"
        flag = " 🔥controls" if s.controls_theme else ""
        lines.append(
            f"| **{s.score}** | {s.ministry_name} | {s.topic}{flag} | "
            f"{', '.join(s.parties)} | {theses} | {s.latest_date} |"
        )
    lines.append("")

    lines.append("### Detail")
    for s in actionable:
        lines.append(f"- **[{s.score}] {s.ministry_name} · {s.topic}** "
                     f"({', '.join(s.parties)}, latest {s.latest_date})")
        lines.append(f"  - {s.summary}")
        if s.matched_theses:
            lines.append(f"  - ➜ existing thesis: {', '.join(s.matched_theses)}")
    lines.append("")

    lines.append(f"## 🧱 Political / non-AI (context) — {len(political)}")
    for s in political:
        lines.append(f"- [{s.score}] {s.ministry_name} · {s.topic} "
                     f"({', '.join(s.parties)})")
    lines.append("")
    return "\n".join(lines)
