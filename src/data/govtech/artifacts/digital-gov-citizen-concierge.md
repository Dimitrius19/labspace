# Business Plan

## Company thesis
T-Life Capital is launching **Concierge.gr** (working title) to deliver a Greek-language agentic front door on top of gov.gr. The thesis is narrow: mitos.gov.gr already publishes a structured graph of 1,800+ procedures across 20 ministries, but no consumer-facing agent traverses that graph to compose end-to-end citizen journeys. The substrate is built; the conductor is missing. We sell the conductor — a Greek NLU + process-graph traversal runtime — to ΓΓΠΣΨΔ inside the **renamed Ministry of Digital Governance and AI** (renamed July 2025 to absorb the new Special Secretariat for AI and Data Governance) as a 6-month innovation pilot, and grow it into the operating layer behind gov.gr's "one front door" promise.

Notably, an early working MVP of this agent is **already running inside T-Life's labspace prototype environment** today (2026-05-21) and is the demo we walk into ministry meetings with. We are not asking the chief of staff to imagine the product.

## Market & buyer
Primary buyer: General Secretary for Information Systems & Digital Governance (ΓΓΠΣΨΔ) and the gov.gr product owner. Secondary champions: the new Special Secretariat for AI and Data Governance (created July 2025, the natural sponsor for an "agentic completion" mandate), the KEP general directorate (whose foot-traffic this reduces) and KED (which already signs completion receipts). Plausible escalation to minister level: the PM has personally championed gov.gr and the ministerial brief explicitly asks for agentic completion of journeys.

Market sizing is bounded by political will, not user demand. ~9M registered TaxisNet identities, ~12M Wallet.gov.gr activations, ~40% session-abandon rate on gov.gr today, ~5M Greek diaspora as a secondary corridor (especially for civil-status and tax procedures requested from abroad). The buyer's KPI is twofold: drop in KEP foot traffic in pilot peripheries, and end-to-end completion rate on the top-20 cross-ministerial journeys (e.g. "open a wine retailer in Paros," "register a baby," "change tax residence").

## Product (agentic loop in detail)
The agent runs as a chat surface inside gov.gr (and a back-channel embeddable widget for KEP officers). Loop:

1. **Intent capture** — Citizen types or speaks colloquial Greek ("πάω να ανοίξω επιχείρηση που πουλά κρασί στην Πάρο"). The NLU does not translate; it resolves directly into the mitos process ontology.
2. **Process composition** — The agent walks the mitos graph and assembles the journey: GEMI registration → AADE activity start → tourism AMA → wine-region licence → municipal store-front permit. Each node carries its mitos process ID, owning ministry, SLA, and required artefacts.
3. **Wallet pre-fetch** — The agent reads, with consent, the citizen's Wallet credentials (TaxisNet auth, AMKA, address, existing licences) and pre-fills the joined application bundle. Where αυτεπάγγελτη αναζήτηση applies, the agent triggers it instead of asking the citizen.
4. **Delta-only questioning** — The citizen is asked only for what is missing, in plain Greek, with a clear checklist and per-ministry SLAs.
5. **Submission** — Each sub-application is filed via the corresponding ministry endpoint with the full mitos process ID and an audit-trail entry. Every submission carries a human-in-loop confirmation (EU AI Act compliance — note the Omnibus deal of 7 May 2026 deferred Annex III obligations to 2 Dec 2027, giving us a clean 18-month runway to harden conformity without missing a deadline).
6. **Status orchestration** — The agent polls per-ministry status, pushes consolidated updates to the citizen's Wallet inbox, and escalates stuck steps to the responsible KEP officer.
7. **Completion** — A single KED-signed receipt is archived in Wallet.gov.gr and the journey closes.

The defensible layer is the **Greek bureaucratic NLU + legal-citation parser** that maps colloquial Greek onto the mitos ontology. The orchestrator itself is conventional; the language model is the moat.

## Revenue model & pricing
Three lines:
- **Platform licence** to ΓΓΠΣΨΔ — annual subscription for the agent runtime, Greek NLU, and mitos-graph composer. Pilot tier €150k-€400k for 6-9 months; production tier €0.8M-€1.5M ARR once journeys exceed top-50.
- **Per-journey metering** — usage-priced add-on (e.g. €0.20-€0.40 per completed cross-ministerial journey) above a threshold; aligns vendor incentive with citizen completion.
- **KEP officer seats** — back-office assist for KEP supervisors (€30-€60/seat/month equivalent), bundled into KEDE framework for municipal multi-buyer expansion.

## Unit economics
At full scale, marginal cost per completed journey is dominated by LLM inference (~€0.05-€0.12 with caching and Greek-tuned smaller models for routine intents) and ministry-endpoint queueing. Gross margin target 75-80% at €0.30 blended price. Pilot revenue is fixed-price; the elastic upside is per-journey metering after the gov.gr team sees abandonment drop.

## Capital plan & milestones
- **Pre-seed (now)**: €600k from T-Life. Hire 3 founders, ship MVP (already live in labspace), close pilot LOI with ΓΓΠΣΨΔ.
- **Seed (M9)**: €2.5-€3.5M after pilot signed. Build the Greek NLU evaluation harness (open-sourced to ministry as goodwill), ISO 42001 ops, security clearance pathway.
- **Milestones**: M3 pilot contract signed; M6 first 5 journeys live in restricted cohort; M9 top-20 journeys live; M12 measurable KEP foot-traffic delta in 3 pilot peripheries; M18 production contract; M24 EU-export readiness (Cyprus first).

## Team & hires
Founders (3, EU-based, security-cleared): Greek operator (commercial), ex-GRNet/gov.gr engineer (substrate trust), Greek-NLP researcher from ARC/ILSP lineage (language moat). First three hires: bureaucratic-Greek annotator/linguist, applied-NLP engineer, public-sector delivery lead with KEP relationships.

## Risks
- **Incumbent overlap (wound)** — Netcompany (ex-Intrasoft) built parts of the gov.gr backend and will argue this is theirs. Mitigation: pitch as innovation-pilot carve-out, contract for runtime + Greek NLU, not portal.
- **EU AI Act art. 6 (wound)** — "Access to essential public services" makes this high-risk. The 7 May 2026 Omnibus deferred Annex III high-risk obligations to 2 Dec 2027; we use the runway to ship human-in-loop on every submission, ISO 42001-style ops, and a transparency notice from day one, rather than treating compliance as optional.
- **API rate limits per ministry** — manageable via queueing; not existential.
- **Political turnover** — anchor inside ΓΓΠΣΨΔ permanent staff and the Special Secretariat for AI, not the political cabinet; ship the open-sourced NLU eval harness as institutional asset.

# Pitch Deck

## Slide 1 — gov.gr Citizen Concierge
- A Greek-language agent that turns one citizen ask into the right multi-ministry workflow.
- Built on top of mitos.gov.gr. Submits via existing ministry endpoints.
- T-Life Capital venture, Athens. Working MVP available today inside labspace.
- Pitched into the renamed Ministry of Digital Governance and AI (July 2025).

## Slide 2 — The Problem
- gov.gr has 1,800+ procedures across 20 ministries.
- Citizens guess at bureaucratic names ("αντίγραφο ποινικού μητρώου") and chain 3-7 sub-requests by hand.
- ~40% of gov.gr sessions abandon. KEP foot traffic stays high.
- Mitos maps the procedures. No agent uses that map.

## Slide 3 — Why Now
- PM has personally championed gov.gr; ministerial brief explicitly asks for agentic completion.
- Ministry renamed July 2025 to include "AI"; new Special Secretariat for AI and Data Governance owns the agentic mandate.
- EU AI Act Annex III obligations **deferred to 2 Dec 2027** (Omnibus, 7 May 2026) — 18 months of runway to ship while peers stall.
- Mitos process graph is stable and queryable; Wallet.gov.gr has the credentials.

## Slide 4 — Our Solution
- A Greek-language NLU that resolves colloquial intent against the mitos ontology.
- A composer that builds the multi-ministry journey, pre-fills via Wallet, asks only deltas.
- A submitter that files each sub-application with mitos IDs and a full audit trail.
- A KED-signed single completion receipt archived in Wallet.

## Slide 5 — Working MVP (Demo)
- **Live MVP running today inside T-Life Capital's labspace environment** — we will run it in this meeting.
- End-to-end traversal on "πάω να ανοίξω επιχείρηση που πουλά κρασί στην Πάρο": intent → 5-step journey → delta checklist → sandbox submissions with mitos process IDs visible.
- Same codebase is the starting point for the pilot contract. No greenfield procurement risk.
- Chief of staff supplies the prompt; we type nothing in advance.

## Slide 6 — Market & Users
- Primary buyer: ΓΓΠΣΨΔ + gov.gr product owner; sponsor: Special Secretariat for AI.
- Users: ~9M TaxisNet identities, ~12M Wallet activations, ~5M Greek diaspora.
- Top-20 cross-ministerial journeys cover the long-tail abandonment.

## Slide 7 — Traction
- **Live MVP in T-Life labspace** — two reference journeys (business start-up in Paros; change-of-residence) running end-to-end against a mitos sandbox. Demoable today.
- LOI conversations underway with ΓΓΠΣΨΔ via the ex-GRNet co-founder's network; intro path opened to the Special Secretariat for AI.
- Founding team: Greek operator + ex-GRNet engineer + ILSP-lineage Greek NLP researcher; ISO 42001 ops plan drafted.
- Open-sourced Greek NLU evaluation harness is in-repo and ready to hand to the ministry as a goodwill asset.

## Slide 8 — Business Model
- Platform licence to ΓΓΠΣΨΔ: €150k-€400k pilot, €0.8M-€1.5M ARR at production.
- Per-journey metering above threshold (€0.20-€0.40/completed journey).
- KEP officer seats via KEDE for municipal multi-buyer expansion.

## Slide 9 — Competition & Moat
- Netcompany owns parts of gov.gr backend — we are the agent runtime on top, not the portal.
- Microsoft Copilot Studio is English-first; cannot ship Greek bureaucratic NLU at our depth in <12 months.
- Greek bureaucratic register + mitos-graph traversal + KED audit trail = 12-18 month structural lead.
- We open-source the Greek NLU evaluation harness to the ministry — they audit us; competitors can't dodge it.

## Slide 10 — International Precedents (refreshed May 2026)
- **Estonia Bürokratt 2026 roadmap** — personalised per-institution agents ("Kratid") now actively deployed across 18 organisations. We adopt the per-institution-agent pattern.
- **UAE TAMM AutoGov** — "world's first AI public servant," launched at GITEX October 2025. Sets the global benchmark for agentic citizen services.
- **UK** — Redbox sunset December 2025, replaced by **DBT "Assist"** specialised workflows (February 2026); HMRC rolled out a separate copilot to **28,000 staff in April 2026**. The scale signal is the lesson, not the product.
- **France** — DINUM confirmed January 2026 that Albert at France Services will **not** be generalised as-is; pivoted to **"Assistant IA"** with **10,000 civil servants** (Acteurs Publics). We design around their failure mode (front-line task fit + cost).

## Slide 11 — Team
- Greek operator (commercial, KEP/civil-servant network).
- Ex-GRNet/gov.gr engineer (substrate trust, security clearance pathway).
- Greek-NLP researcher (ARC/ILSP alum) — language moat.
- All EU-based, all security-clearable.

## Slide 12 — The Ask
- 6-month pilot, €150k-€400k, on the top-20 cross-ministerial journeys in 3 pilot peripheries.
- Measured by: KEP foot-traffic delta + end-to-end completion rate.
- We bring the **live MVP**, the ISO 42001 ops plan, and the open-sourced Greek NLU eval harness as ministerial assets.
- Decision point requested within 8 weeks; signing window aligned to FY26 innovation envelope.

# Go-to-Market Plan

## Champion identification
The champion is the **General Secretary for Information Systems & Digital Governance** and the **gov.gr product owner** sitting underneath. The GS controls the innovation-procurement envelope and owns the public KPI (gov.gr completion rate, KEP foot traffic). The product owner is the implementer who can sandbox us against mitos APIs without a framework tender. We map a third anchor — a KEP general-directorate official — who supplies the "this saves my officers' time" testimony when the GS needs internal cover. Because the Ministry was renamed in July 2025 and now contains a Special Secretariat for AI and Data Governance, we also brief that secretariat early; they are the policy cover the GS will look for when this lands on the minister's desk.

Approach order: founder-to-founder warm intro from the ex-GRNet co-founder into the gov.gr product team first (technical credibility), then a coordinated meeting with the GS once the product team is interested, then a policy-only briefing with the Special Secretariat for AI. We avoid going minister-direct in week one; the GS must own the narrative.

## First-meeting choreography (use MVP demo as wedge)
The meeting is structured around one live demo, not a slide deck. 30 minutes:
- **Minute 0-3** — Frame: "We are not selling you a portal. We are selling you the agent runtime that traverses the mitos graph you already published."
- **Minute 3-13** — Live demo from the **labspace MVP**. We type a real colloquial Greek request the chief of staff supplies on the spot. The agent resolves it into a 5-7 step journey across ministries, shows the mitos process IDs, pre-fills against a sandbox Wallet, and produces the delta-only checklist. If they want, we attempt a sandbox submission live.
- **Minute 13-20** — Show the audit trail, the human-in-loop submission gates, and the AI Act compliance posture (referencing the Annex III deferral to Dec 2027 as headroom, not exemption). Show the open-sourced Greek NLU evaluation harness — "you can audit our model anytime, here is the repo."
- **Minute 20-27** — Pilot scope conversation: which 20 journeys, which 3 peripheries, what KPIs. Reference UK HMRC's 28,000-staff April 2026 rollout and UAE TAMM AutoGov as scale anchors.
- **Minute 27-30** — The ask. One page, one signature, one decision in 8 weeks.

The MVP demo is the wedge because it dissolves the "wrapper" objection on contact. The chief of staff sees that the agent already works.

## Pilot offer
- **Duration**: 6 months, with a 3-month optional extension.
- **Scope**: Top-20 cross-ministerial journeys, prioritised by ΓΓΠΣΨΔ telemetry.
- **Geography**: 3 pilot peripheries (suggest Αττική, Νότιο Αιγαίο, Κρήτη — high tourism/SME density, measurable KEP volume).
- **Price**: €150k-€400k under innovation procurement (Άρθρο 200, N. 4912 / equivalent innovation-partnership vehicle).
- **Deliverables**: agent runtime, Greek NLU model with eval harness, ministry-endpoint connectors, KEP escalation back-channel, monthly KPI report to the GS, AI Act conformity dossier aligned to the Dec 2027 deadline.
- **Exit**: open-source contribution of the eval harness to ΓΓΠΣΨΔ regardless of contract outcome — converts a possible "no" into reputational capital.

## Expansion path
Three vectors after pilot:
1. **Vertical depth** — top-50 → top-200 journeys. Each new journey is a smaller marginal build because the mitos traversal generalises. Mirrors Estonia's Kratid per-institution agent pattern (2026 roadmap).
2. **Channel expansion** — Wallet app surface, gov.gr 1555 voice channel, Viber/WhatsApp official-channel pilots, KEP officer seats via KEDE.
3. **Diaspora corridor** — Greek consulates abroad; civil-status, tax-residency, AMKA-from-abroad journeys. Foreign Ministry as second buyer.

## Procurement vehicle
- **Phase 1 (pilot)**: Innovation procurement (καινοτόμα προμήθεια), single-vendor justified by the Greek-language NLU and mitos-graph specificity. Budget €150k-€400k, fits inside ΓΓΠΣΨΔ innovation envelope without framework tender.
- **Phase 2 (production)**: Either (a) framework agreement carve-out for "agent runtime services" as a distinct lot, or (b) GRNet-hosted SaaS via inter-ministerial cooperation if the GS prefers in-state hosting. We architect for both from day one.
- **EU funding overlay**: Greece 2.0 / Recovery and Resilience Facility digital-transformation envelope is still live; the pilot fits the "citizen-facing digital service" pillar and can be co-funded.

## PR/comms strategy
- **Quiet first 90 days** — no press; founder credibility built inside the ministry, not on LinkedIn.
- **Pilot signing** — coordinated press release through ΓΓΠΣΨΔ communications office, framed as "Greek-built agentic completion for gov.gr." Minister-led, vendor-supporting. We are the engine, the ministry is the brand.
- **First measurable KPI delivery (M9-M12)** — one outlet only (Kathimerini or To Vima digital desk), with the GS as the named source and a real KEP foot-traffic number.
- **EU stage** — apply to Bürokratt/Kratid peer-review forums and the EU GovTech Stargate showcase once the pilot is in production. Positions Greece as a peer of Estonia (18 organisations) and a credible response to UAE's TAMM AutoGov benchmark.
- **ESAmEA and accessibility press** — coordinated with the parallel accessibility venture; lets the minister tell a "front door for everyone" story.
- **Negative-press playbook** — pre-write a transparency briefing for the case of a single failed journey: full audit trail, AI Act compliance posture (with the Dec 2027 Annex III deferral context), ISO 42001 ops. Hand it to the ministry comms team before they need it.
