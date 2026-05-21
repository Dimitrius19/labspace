# Business Plan

## Company thesis
T-Life Capital is launching **Mitos Co-Pilot** (working title) as a Greek-language back-office agent inside the civil servant's daily desktop. mitos.gov.gr is a structured registry of 1,800+ procedures across 20 ministries, yet civil servants keep procedures in personal Word files and email threads, re-discovering compound workflows every time a new hire rotates in. The substrate is published; the daily user is unassisted. We sell the assistive layer — a bureaucratic-Greek NLU, a mitos-graph composer, and a βεβαίωση/απόφαση drafter with KAK citations and Διαύγεια pre-fill — to **ΓΓΠΣΨΔ** inside the renamed Ministry of Digital Governance and AI (**ΥΨΗΔ**, renamed July 2025 to fold in the Special Secretariat for AI and Data Governance). Multi-tenant by design: one runtime, per-directorate tuning, cross-ministry from day one.

Position is explicit: this is **not** a competitor to Microsoft 365 Copilot, which is being rolled out across the Greek public sector via the Azure Athens landed-zone deal. We sit **inside** M365 Copilot as the Greek-public-administration competence plug-in — the layer that knows mitos, writes proper βεβαίωση format, and files to Διαύγεια. The horizontal copilot ships the chat surface; we ship the Greek civil-service brain. An MVP is already running inside T-Life's labspace prototype environment and is the demo we walk into ministry meetings with.

## Market & buyer
Primary buyer: General Secretary of ΓΓΠΣΨΔ inside ΥΨΗΔ. Secondary champions: the Special Secretariat for AI and Data Governance (the policy cover that lets the GS green-light an agent procurement under Law 5299/2026), the KEP general directorate, and KEDE (which aggregates the 332-municipality long tail).

The user is any mid-tier Greek civil servant: a directorate officer drafting βεβαιώσεις, a KEP supervisor handling compound permits, a δημοτικός υπάλληλος chasing missing documents for a citizen who moved across periphery boundaries. The latent base: roughly **560,000 central-government civil servants** plus municipal staff, of whom we estimate **150,000-220,000** do enough mitos-procedure work daily to justify a seat. Productivity dispersion is the headline pain — handling time on the same compound procedure varies 3-5x between officers in the same office. The buyer's KPI is twofold: median handling-time reduction on a defined basket of procedures, and inter-officer variance compression.

International scale anchors validate the seat-economics. Singapore Pair is at **60,000+ civil-servant users with 46% admin-time savings**. HMRC's internal copilot scaled to **28,000 staff in April 2026**. France's DINUM **paused Albert at France Services in January 2026** and pivoted to **Assistant IA at 10,000 civil servants**. The lesson from the France pause is product-shape, not feasibility: front-line task fit and per-seat cost killed Albert there. We design around that failure mode by anchoring on back-office composition with hard handling-time KPIs, not front-line chit-chat.

## Product (agentic loop in detail)
The agent runs as a desktop pane (web app + M365 Copilot plug-in + Teams side-panel) inside the civil servant's authenticated session. Loop:

1. **Intent capture** — Officer types intent in Greek: "θέλω να εκδώσω βεβαίωση Χ για την κυρία Υ που μετακόμισε από Πάτρα." The NLU resolves administrative-Greek register, including καθαρευουσιάνικη legalese, into a candidate mitos procedure with disambiguation prompts.
2. **Citizen pull-through** — Citizen master data via the authorised back-office channel (TaxisNet/AMKA broker, role-based access, DPIA-approved scope). Civil-service permissions, not citizen credentials, gate the call.
3. **Document marshalling** — Required artefacts listed against the mitos node; those already in gov.gr/Wallet or available via αυτεπάγγελτη αναζήτηση are auto-fetched; only gaps surface to the officer.
4. **Draft generation** — Standard decision letter (βεβαίωση/απόφαση) drafted in proper administrative Greek, with correct KAK citations, the directorate's signature block, and house style learned from previous signed acts.
5. **Διαύγεια pre-fill** — If publishable-by-default, the agent pre-fills the Διαύγεια metadata bundle (ΑΔΑ slot, θεματικές κατηγορίες, signatory hierarchy) for one-click publication after signature. Publishability rules encoded as guard checks.
6. **Hierarchical routing** — Routed for hierarchical signature (Τμηματάρχης → Διευθυντής → ΓΓ) with full audit trail. The officer remains the signatory; the agent is decision-support (limited-risk under EU AI Act art. 6).
7. **Office memory** — Reusable patterns persisted per-directorate; new hires inherit team muscle instead of rediscovering it.

The defensible layer is the **bureaucratic-Greek NLU + KAK-citation parser + Διαύγεια publishability ruleset**. Horizontal copilots cannot ship this depth in Greek register; that is the moat. The orchestration and RAG are conventional.

## Revenue model & pricing
- **Per-seat subscription** to ΓΓΠΣΨΔ: €18-€32/seat/month at scale, bundled in cohorts of 500-2,000 per directorate. Pilot €100k-€300k for 2-3 directorates over 6 months; production €1.2M-€2.4M ARR as ministries onboard.
- **M365 Copilot plug-in licence** for buyers on the landed-zone tenant. Revenue-share or pass-through with Microsoft Greece.
- **KEDE municipal package** — discounted seat bundles for δήμοι via KEDE framework, opening the 332-municipality corridor without per-municipality procurement.

## Unit economics
Marginal cost per active seat at scale is dominated by LLM inference (~€2-€5/seat/month with Greek-tuned smaller models for routine drafting and a larger model for ambiguous compound procedures), plus mitos-graph index and Διαύγεια schema upkeep. Gross margin target 70-78% at the €18-€32 blended price.

## Capital plan & milestones
- **Pre-seed (now)**: €600k from T-Life. Hire 3 founders, harden the labspace MVP, close pilot LOI with ΓΓΠΣΨΔ.
- **Seed (M9)**: €2.5-€3.5M after pilot signed. Build office-memory, ship the M365 Copilot plug-in, harden Law 5299/2026 conformity and ISO 42001 ops.
- **Milestones**: M3 pilot signed in 2-3 directorates; M6 first 500 seats live with handling-time delta; M9 first KEDE municipal pilot; M12 production conversion with documented variance compression; M18 4,000-8,000 seats; M24 EU-export readiness (Cyprus first reference).

## Team & hires
Founders (3, EU-based, security-clearable): an **ex-civil-servant or KEP operations lead** (change-management spine — engineer-only is the predicted failure mode), a **Greek-NLP engineer** with bureaucratic-Greek corpus experience (ILSP/ARC lineage), and a **product designer** with enterprise-productivity track record. First three hires: bureaucratic-Greek annotator/linguist, public-administration legal counsel, directorate-level deployment lead.

## Risks
- **M365 Copilot dominance (wound)** — M365 Copilot is the dominant procurement narrative inside ΥΨΗΔ via the Azure Athens landed-zone. Mitigation: explicit plug-in posture, validated with Microsoft Greece before pilot signing; co-sell motion, not competitive bid.
- **France Services Albert failure pattern (wound)** — DINUM paused Albert in January 2026. Internalised lesson: pitch as back-office composer with hard handling-time KPIs, never as a generic front-line Q&A bot.
- **Law 5299/2026 conformity (clear)** — Greece's domestic AI/data regime for public-sector AI is the compliance floor. The EU AI Act Annex III deferral to **2 December 2027** (Omnibus, 7 May 2026) provides additional runway, not exemption. We ship human-in-loop, transparency notice, and ISO 42001 ops from day one.
- **Διαύγεια pre-fill** — administrative acts have specific publishability rules; the ruleset is a versioned legal asset, signed off by in-house counsel before any draft reaches a Διαύγεια endpoint.
- **Change management** — civil-servant adoption is harder than the tech; we anchor on a named ex-civil-servant operations lead and pilot in directorates whose GS has personally requested the tool.
- **Incumbent overlap** — Netcompany and other SIs will frame this as adjacent to their estates; we sit on top of their systems via mitos APIs and contract for the Greek competence layer only.

# Pitch Deck

## Slide 1 — Mitos Co-Pilot for Civil Servants
- A Greek-language back-office agent for every civil servant inside ΥΨΗΔ and beyond.
- "I need to do X for citizen Y" → mitos-resolved procedure, auto-pulled documents, drafted βεβαίωση, Διαύγεια-ready metadata.
- T-Life Capital venture, Athens. Working MVP available today inside labspace.
- Designed as the Greek competence plug-in **inside** Microsoft 365 Copilot, not against it.

## Slide 2 — The Problem
- 1,800+ mitos procedures across 20 ministries. Civil servants keep them in personal Word files.
- Per-procedure handling time varies 3-5x between officers in the same office.
- New hires and rotators re-discover compound workflows from scratch every time.
- KAK citations and Διαύγεια pre-fill drafted by hand; βεβαιώσεις re-typed in ten subtly different formats.

## Slide 3 — Why Now
- Ministry renamed to ΥΨΗΔ (July 2025); Special Secretariat for AI and Data Governance owns the agentic mandate.
- Law 5299/2026 codifies the public-sector AI compliance regime — we are built to it.
- EU AI Act Annex III obligations **deferred to 2 Dec 2027** (Omnibus, 7 May 2026): 18 months of runway.
- M365 Copilot is being rolled out via the Azure Athens landed-zone. The Greek competence plug-in surface is now valuable, defined, and inevitable.

## Slide 4 — Our Solution
- Bureaucratic-Greek NLU resolves officer intent against the mitos ontology.
- Composer pulls citizen master data and pre-fetched documents; lists only the gaps.
- Drafter writes the βεβαίωση/απόφαση in proper administrative Greek with KAK citations.
- Διαύγεια publishability ruleset pre-fills metadata for one-click publication after signature.
- Office-memory layer learns the directorate's house style and reusable patterns over weeks.

## Slide 5 — Working MVP (Demo)
- **Live MVP running today inside T-Life Capital's labspace environment** — we will run it in this meeting.
- Two reference flows: a residency-change βεβαίωση and a compound municipal permit. The officer types their own intent on the spot.
- Same codebase is the starting point for the pilot contract; no greenfield procurement risk.
- The chief of staff sees the audit trail, the KAK citations, the Διαύγεια metadata, and the human-in-loop signature gate.

## Slide 6 — Market & Users
- ~560,000 Greek civil servants; 150,000-220,000 in scope for daily mitos-procedure work.
- Primary buyer: ΓΓΠΣΨΔ inside ΥΨΗΔ; sponsor: Special Secretariat for AI; second corridor: KEDE for municipal seats.
- Productivity dispersion (3-5x intra-office) is the policy lever; variance compression is the headline KPI.

## Slide 7 — Traction
- **Live MVP in T-Life labspace**, demoable end-to-end on two reference procedures.
- LOI conversations underway with ΓΓΠΣΨΔ via the founding team's KEP network; intro path opened to the Special Secretariat for AI.
- Law 5299/2026 and ISO 42001 conformity plan in-repo; Διαύγεια ruleset drafted with outside counsel.
- Microsoft Greece account-exec conversation scheduled to validate the plug-in extensibility path.

## Slide 8 — Business Model
- Per-seat subscription: €18-€32/seat/month at scale; €100k-€300k pilot in 2-3 directorates.
- M365 Copilot plug-in licensing for buyers on the landed-zone tenant.
- KEDE municipal package for the 332-municipality long tail.
- Production target: €1.2M-€2.4M ARR by M18 with 4,000-8,000 seats live.

## Slide 9 — Competition & Moat
- M365 Copilot is the horizontal substrate; we are the Greek public-administration brain. Complement, not competitor.
- Tier-1 SIs sell case-management forms; they do not ship bureaucratic-Greek NLU.
- Greek register + KAK parser + Διαύγεια ruleset + office-memory = 12-18 month structural lead.
- Open-sourced eval harness handed to ΥΨΗΔ; competitors cannot dodge it.

## Slide 10 — International Precedents (refreshed May 2026)
- **UK** — Redbox sunset December 2025; **HMRC internal copilot rolled out to 28,000 staff in April 2026**. Caddy at UK Citizens Advice (via SCVO) returned **80% response-approval rate** in the 2025 RCT — the back-office-assist evidence base.
- **France** — Albert at France Services **paused January 2026**; DINUM pivoted to **Assistant IA at 10,000 civil servants**. We design around the front-line failure mode; back-office composition with handling-time KPIs is the survivable shape.
- **Singapore** — Pair at **60,000+ civil servants**, **46% admin-time savings** measured.
- **Estonia** — Bürokratt/Kratid per-institution agent rollout (2026 roadmap) validates the multi-tenant pattern.

## Slide 11 — Team
- Ex-civil-servant or KEP operations lead (change-management spine).
- Greek-NLP engineer (ILSP/ARC lineage) — bureaucratic-Greek register moat.
- Product designer with enterprise-productivity track record.
- All EU-based, all security-clearable; legal counsel on Law 5299/2026 retained.

## Slide 12 — The Ask
- 6-month pilot, €100k-€300k, in 2-3 directorates inside ΥΨΗΔ plus one KEP corridor.
- Measured by handling-time reduction and inter-officer variance compression.
- We bring the **live MVP**, Law 5299/2026 conformity dossier, open-sourced eval harness, validated M365 plug-in path.
- Decision within 8 weeks; signing aligned to FY26 innovation envelope.

# Go-to-Market Plan

## Champion identification
The champion is the **General Secretary of ΓΓΠΣΨΔ** inside ΥΨΗΔ. The GS controls the innovation-procurement envelope and owns the civil-service-productivity KPI the ministry has publicly committed to. We map two operational anchors underneath: a **directorate director** in a friendly mid-tier directorate (registry or licensing, with measurable per-procedure volume) supplying the "this saves my officers' time" testimony, and a **KEP general-directorate official** who underwrites the second cohort and opens the KEDE municipal corridor. We brief the **Special Secretariat for AI and Data Governance** early; under Law 5299/2026 they are the policy cover the GS will look for before signing.

A third stakeholder is **Microsoft Greece**: the Azure Athens landed-zone deal makes M365 Copilot the dominant procurement narrative, so we validate the plug-in extensibility model with their account exec before the GS meeting and answer "why not just M365 Copilot?" with a co-sell story rather than a defensive one.

Approach order: warm intro from the ex-civil-servant co-founder into the directorate director, then a coordinated GS meeting, then a policy briefing with the Special Secretariat, then the Microsoft Greece co-sell. We avoid going minister-direct in week one; the GS must own the narrative.

## First-meeting choreography (MVP demo as wedge)
30 minutes structured around one live demo, not a slide deck:

- **Minute 0-3** — Frame: "We are not selling you a chat product. We are selling the Greek public-administration competence layer that sits inside M365 Copilot and turns mitos into a daily-use asset."
- **Minute 3-13** — Live demo from the **labspace MVP**. The directorate director supplies a real intent on the spot. The agent resolves to a mitos node, pulls citizen master data via the back-office channel, lists artefacts with αυτεπάγγελτη auto-fetch, drafts the βεβαίωση with KAK citations, and shows the Διαύγεια metadata ready for one-click publication after signature.
- **Minute 13-20** — Audit trail, human-in-loop signature gate, Law 5299/2026 conformity posture, open-sourced Greek-administrative-language evaluation harness. "You can audit our model anytime; here is the repo."
- **Minute 20-27** — Pilot scope: which directorates, which procedure basket, what KPIs, what seat count. Reference Singapore Pair (60,000+ users, 46% admin-time savings) and HMRC (28,000 staff, April 2026); cite the Albert pause as the failure mode we design around.
- **Minute 27-30** — The ask. One page, one signature, one decision in 8 weeks.

The MVP demo dissolves the "wrapper" objection on contact.

## Pilot offer
- **Duration**: 6 months, 3-month optional extension.
- **Scope**: 2-3 directorates inside ΥΨΗΔ plus one KEP corridor; procedure basket of 30-50 mitos nodes by handling-time volume.
- **Seats**: 300-800 named users.
- **Price**: €100k-€300k under innovation procurement (καινοτόμα προμήθεια, Άρθρο 200 N. 4912).
- **Deliverables**: agent runtime (web + M365 Copilot plug-in), Greek NLU + eval harness, KAK parser, Διαύγεια publishability ruleset, hierarchical signature routing with audit trail, monthly GS KPI report, Law 5299/2026 conformity dossier aligned to the Dec 2027 AI Act Annex III deadline.
- **KPIs**: median handling-time reduction ≥30%; inter-officer variance compression ≥40%; officer-reported draft-approval rate ≥75% (benchmarked against Caddy/SCVO's 80% at UK Citizens Advice).
- **Exit**: open-source contribution of the bureaucratic-Greek eval harness to ΥΨΗΔ regardless of contract outcome — converts a possible "no" into reputational capital.

## Expansion path
Three vectors after pilot:

1. **Vertical depth** — procedure-basket from 30-50 mitos nodes to 200-400. Each new procedure is a smaller marginal build because the traversal and KAK parser generalise. Office-memory compounds over the same officer cohorts.
2. **Ministry breadth** — multi-tenant cross-ministerial expansion. Migration & Asylum and Labour/EFKA caseworkers are the natural second wave (mitos-heavy, politically funded). The Special Secretariat for AI is the bridge.
3. **Municipal corridor** — KEDE framework agreement converts the 332-municipality long tail into an aggregated seat pipeline at a discounted tier.

## Procurement vehicle
- **Phase 1 (pilot)**: Innovation procurement (καινοτόμα προμήθεια), single-vendor justified by Greek NLU and mitos-graph specificity. €100k-€300k fits inside the ΓΓΠΣΨΔ innovation envelope without framework tender.
- **Phase 2 (production)**: either a framework-agreement carve-out for "civil-service agentic productivity" as a distinct lot, or bundled into the Azure Athens landed-zone M365 Copilot procurement as a Greek competence plug-in.
- **EU funding overlay**: Greece 2.0 / RRF "public-administration modernisation" pillar can co-fund.

## PR/comms strategy
- **Quiet first 90 days** — no press; founder credibility built inside ΥΨΗΔ, not on LinkedIn.
- **Pilot signing** — coordinated release through ΥΨΗΔ comms, framed minister-led as "Greek-built civil-service productivity layer."
- **First KPI delivery (M9-M12)** — one outlet only (Kathimerini or To Vima digital desk), GS as named source, real handling-time number from a pilot directorate.
- **EU stage** — Bürokratt/Kratid peer-review forums and EU GovTech Stargate showcase after production conversion. Positions Greece as a peer of Singapore Pair (60,000+ seats) and a credible response to UK HMRC.
- **Microsoft co-sell** — joint case study with Microsoft Greece once the plug-in path is signed, distributed through the partner channel.
- **Negative-press playbook** — pre-written transparency briefing (audit trail, human-in-loop signature record, Law 5299/2026 conformity, AI Act Annex III headroom). Hand it to ΥΨΗΔ comms before they need it.
