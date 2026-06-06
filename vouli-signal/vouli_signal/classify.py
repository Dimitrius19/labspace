"""Classify a Question into a Grievance.

Uses Claude when ANTHROPIC_API_KEY is set (richer summary + A/B judgement);
otherwise a transparent keyword heuristic. Both paths return the same schema,
so the rest of the pipeline is identical.
"""
from __future__ import annotations

import json
import os

from . import config, normalize
from .models import Grievance, Question

_MODEL = os.environ.get("VOULI_MODEL", "claude-haiku-4-5-20251001")


# --- heuristic path ----------------------------------------------------------

def _heuristic(q: Question) -> Grievance:
    blob = f"{q.title} {q.text} {q.ministry_target}"
    f = normalize.fold(blob)
    mid, mname = normalize.match_ministry(blob)

    throughput = sum(1 for k in config.THROUGHPUT_MARKERS if k in f)
    political = sum(1 for k in config.POLITICAL_MARKERS if k in f)
    controls = any(k in f for k in config.CONTROLS_MARKERS)
    ai_addressable = throughput > political
    ab = "A" if ai_addressable else "B"

    party = normalize.canonical_party(q.party)
    return Grievance(
        source_id=q.id, date=q.date, party=party,
        is_opposition=normalize.is_opposition(party), mps=q.mps,
        ministry_id=mid, ministry_name=mname,
        topic=_topic_slug(f, mid), summary=q.title.strip(),
        quantities=normalize.extract_quantities(blob),
        ab_class=ab, ai_addressable=ai_addressable, controls_theme=controls,
        classifier="heuristic", url=q.url,
    )


def _topic_slug(folded: str, mid: str) -> str:
    table = {
        "αναπληρωτ": "anaplirotes-vacancies", "κενα": "anaplirotes-vacancies",
        "κεδασυ": "kedasy-waitlists", "ειδικη αγωγη": "special-education",
        "ελιδεκ": "elidek-evaluation", "ερευνα": "research-funding",
        "ακριβει": "cost-of-living", "διμεα": "market-surveillance",
        "οπεκεπε": "eu-funds-controls", "ταμειο ανακαμψ": "rrf-controls",
        "εσπα": "espa-absorption", "συνταξ": "pensions",
    }
    for k, slug in table.items():
        if k in folded:
            return slug
    return mid or "general"


# --- LLM path ----------------------------------------------------------------

_PROMPT = """You analyse Greek parliamentary questions for a govtech venture studio.
Return ONLY a JSON object with keys:
  ministry_id  (one of: {ministries}, or "")
  topic        (short english slug, e.g. "kedasy-waitlists")
  summary      (one concrete sentence, Greek, naming quantities/regions if present)
  ab_class     ("A" if it is an administrative-throughput/forecasting/triage/
                drafting/audit problem an AI agent could measurably improve,
                "B" if it is a pure funding/price/ideological problem)
  controls_theme (true if it is about EU-funds mismanagement / transparency /
                  audit / "who got what" / OPEKEPE-style controls)

Question:
\"\"\"{body}\"\"\""""


def _llm(q: Question) -> Grievance | None:
    try:
        import anthropic  # type: ignore
    except Exception:
        return None
    if not os.environ.get("ANTHROPIC_API_KEY"):
        return None
    try:
        client = anthropic.Anthropic()
        ids = ", ".join(m["id"] for m in config.MINISTRIES)
        prompt = _PROMPT.format(ministries=ids,
                                body=f"{q.title}\n{q.text}\nΑποδέκτης: {q.ministry_target}")
        msg = client.messages.create(
            model=_MODEL, max_tokens=400,
            messages=[{"role": "user", "content": prompt}],
        )
        raw = msg.content[0].text.strip()
        raw = raw[raw.find("{"): raw.rfind("}") + 1]
        data = json.loads(raw)
    except Exception:
        return None

    mid = data.get("ministry_id", "") or ""
    mname = next((m["name"] for m in config.MINISTRIES if m["id"] == mid), "")
    party = normalize.canonical_party(q.party)
    return Grievance(
        source_id=q.id, date=q.date, party=party,
        is_opposition=normalize.is_opposition(party), mps=q.mps,
        ministry_id=mid, ministry_name=mname,
        topic=data.get("topic", mid or "general"),
        summary=data.get("summary", q.title).strip(),
        quantities=normalize.extract_quantities(f"{q.title} {q.text}"),
        ab_class=data.get("ab_class", "B"),
        ai_addressable=data.get("ab_class", "B") == "A",
        controls_theme=bool(data.get("controls_theme", False)),
        classifier="llm", url=q.url,
    )


def classify(q: Question) -> Grievance:
    return _llm(q) or _heuristic(q)


def classify_all(questions: list[Question]) -> list[Grievance]:
    return [classify(q) for q in questions]
