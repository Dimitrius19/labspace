# Scoring rubric — Greek Government Agentic Ventures

Each idea is scored 1-5 on six axes. Use the anchors below — don't pick from a gut feeling.

## 1. Agentic fit (weight 0.25)

Does the value come from an **agent that does the work**, or just a dashboard / chatbot?

- **5** — Agent runs an end-to-end loop (read inputs → call N tools → produce decision/draft) that *replaces named person-hours*. Civil servant reviews output, doesn't drive it.
- **3** — Copilot model: civil servant still drives, agent assists 30-50% of the work.
- **1** — Chatbot or dashboard with LLM features bolted on. No autonomous tool use.

## 2. Blue ocean (weight 0.20)

How crowded is the field — globally and in Greece?

- **5** — No deployed precedent worldwide. Or precedents exist but no Greek incumbent has touched it.
- **3** — Adjacent deployments exist abroad; one weak Greek incumbent.
- **1** — Multiple Greek SIs (Intracom, Singular, Cosmote, Space Hellas, Performance, Byte) already sell into this surface area.

## 3. Time to pilot (weight 0.15)

How fast can we get a paid pilot signed?

- **5** — Demo this quarter, signed pilot within 6 months. Single decision-maker. No public tender required for pilot tier (<€60k).
- **3** — 12-month pilot path; requires inter-departmental sign-off but no full tender.
- **1** — 18+ months; major public tender (€500k+) with full ΕΣΗΔΗΣ procedure.

## 4. Political tailwind (weight 0.15)

Is this ministry under public pressure to "do something" about this problem right now?

- **5** — Active PM-directive pressure; the minister has named this as a priority within the last 3 months; press coverage is hostile.
- **3** — Persistent slow-burn problem (e.g. judicial backlog). Ministry knows but no urgent move.
- **1** — Niche operational issue with no public-discourse visibility.

## 5. Capital efficiency (weight 0.10)

How much capital to first commercial milestone?

- **5** — <€300k to a paid pilot. Founder + 1-2 engineers + cheap LLM calls.
- **3** — €1-3M to first pilot — needs domain hires, data licensing, on-prem deployment.
- **1** — Defence-tech / heavy-data, €5M+ to first contract.

## 6. Greek-language moat (weight 0.15)

How much does Greek-language admin/legal corpus matter for defensibility?

- **5** — Core moat — Greek legal/admin language, KAK/Διαύγεια/case-law corpora, Greek named-entity recognition are make-or-break. Multinational incumbents cannot ship.
- **3** — Greek tuning helps but English-capable agents would get to "good enough."
- **1** — Language-agnostic; multinational tooling beats us.

## Composite

`composite = 0.25·agenticFit + 0.20·blueOcean + 0.15·timeToPilot + 0.15·politicalTailwind + 0.10·capitalEfficiency + 0.15·greekLanguageMoat`

## Verdict thresholds

- **composite ≥ 3.8** AND **agenticFit ≥ 4** AND **no kill-severity red-team finding** → `promote` (becomes memo-ready candidate)
- **composite 3.0-3.79**, OR salvageable red-team findings → `park`
- **composite < 3.0**, OR any kill-severity red-team finding that can't be designed around → `kill`

A red-team **kill** finding overrides any composite score. We don't promote ideas that have a structural blocker we don't have a thesis on.
