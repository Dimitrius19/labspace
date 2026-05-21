# Business Plan

**Company (working title):** ΔίπλωμαFlow — a T-Life Capital portfolio venture building an end-to-end agentic scheduler that runs the Greek driving-test booking loop on behalf of the Περιφερειακές Διευθύνσεις Μεταφορών and the Δ/νση Οδικής Κυκλοφορίας του ΥΠΥΜΕ.

**Thesis.** The 6-to-12-month wait for a Greek driving test is not a slot-supply problem. It is an *allocation* problem with a Greek-specific overlay: examiner availability is constrained by per-περιφέρεια union work-rules encoded only in Greek collective agreements and ministerial decisions on Διαύγεια; σχολές οδηγών bot-scalp the limited slots that appear; no-shows cascade because rebooking is manual; and the 1555 call-centre absorbs the political pressure that the scheduler should be absorbing operationally. The bottleneck is the *loop*, not the booking UI. ΔίπλωμαFlow ships the loop: a constraint-satisfaction optimiser fused with a Greek-language candidate-communication agent that decides slots, sends offers via gov.gr, handles accepts/declines/no-shows, reroutes examiners, and drafts the weekly throughput memo for the Δ/ντή Οδικής Κυκλοφορίας. The Γενική Γραμματεία Μεταφορών gets a measurable wait-time KPI on the PM-office quarterly scorecard; the citizen gets a slot offer in days, not seasons.

**Architectural moat — the split that makes this defensible and shippable.** Three layers, deliberately separated. The optimiser is a deterministic constraint-satisfaction solver — examiner-union hours, geographic mobility limits, vehicle-and-instructor availability, candidate eligibility windows, KTEO-pass requirements, and περιφέρεια-specific work-rules are encoded as hard constraints, not preferences. The communication layer is an LLM bounded by Greek-civil-service templates and 1555-script provenance — every citizen-facing message links back to the slot decision and the regulatory basis. The audit layer captures every allocation, every rebook, every union-constraint check, with timestamps and a reproducible decision trace. This is the post-DVSA architecture: the UK Driver and Vehicle Standards Agency learned in 2022-2024 that bot-mitigation alone is insufficient and that the Kainos-built Driver Services Platform replacing the 20-year-old TARS system is a *system-of-record rebuild*, not an *agentic loop*. We ship the loop on top of the existing περιφέρεια backends.

**Market and buyer.** The economic buyer is the Γενικός Γραμματέας Μεταφορών at ΥΠΥΜΕ. The policy buyer is the Δ/ντής Οδικής Κυκλοφορίας, who owns the throughput KPI that lands on the PM-office gov.gr citizen-satisfaction scorecard. The operational user is the Περιφερειακή Διεύθυνση Μεταφορών scheduling officer — typically a long-tenured civil servant doing slot-allocation in Excel under daily pressure from candidates, driving-school owners, and the 1555 escalation queue. Volumes: roughly 250,000 practical-test candidates per year nationally with multi-attempt rates pushing exam events past 400,000; current median wait in Attica and Thessaloniki has hovered between 6 and 12 months across 2024-2026. Driving-test wait-time has been a top-five 1555 complaint category every quarter since the scorecard launched.

**Why now (the timing window).** Four facts converge on summer-autumn 2026. First, DVSA's May 2026 reform — Kainos-built Driver Services Platform replacing TARS, learner-only booking, bot-mitigation, dynamic slot-release — is the freshest credible international precedent, and crucially it is *not yet* a full agentic scheduler. Greece can leapfrog the SI-rebuild generation. Second, Greek Law 5299/2026 governs AI and data rules domestically and gives a clean compliance posture for decision-support systems with named human approvers; the EU AI Act Annex III enforcement date was deferred to 2 December 2027, giving an eighteen-month runway to deploy as decision-support and have the conformity-assessment file ready well before the new date. Third, σχολή-οδηγών bot-scalping of slots is now documented in Greek press and 1555 logs, which converts the lobby's defence of scarcity into a consumer-protection problem — the minister's political cover. Fourth, the per-περιφέρεια union work-rule complexity is the corpus moat: any foreign vendor will fail the first reschedule that violates a collective agreement, and the Greek-specific rule-encoding is uneconomic for a multinational to assemble.

**Product.** A web agent embedded next to the περιφέρεια scheduling officer, with a citizen-facing layer plumbed into gov.gr notifications and the 1555 desktop. The optimiser pulls candidate applications and required exam types from the gov.gr / περιφέρεια backend, computes examiner availability against union hard-constraints and Αυτοκίνητο-agency vehicle availability, runs a weekly optimisation that maximises slots-per-week subject to geographic and work-rule constraints, generates offer slots via gov.gr notifications, handles accepts/declines, rebooks no-shows automatically, drafts the Greek-language 1555 script when a candidate calls, and produces a weekly throughput memo per περιφέρεια with bottleneck analysis. The σχολή-οδηγών interface is a constrained channel: schools see allocated slots for their registered candidates only, never aggregate slot inventory — bot-scalping surface area collapses to zero.

**Revenue model and pricing.** Direct contract with ΥΠΥΜΕ via the Γενική Γραμματεία Μεταφορών under απευθείας ανάθεση for the first περιφέρεια. Tier 1: €60k for a 90-day single-περιφέρεια pilot (Attica or Thessaloniki) with a published median-wait-time baseline and weekly throughput memos. Tier 2: €700k year-one national rollout across all 13 περιφέρειες via the ESPA / RRF digital-transformation envelope, structured as deployment-plus-subscription. Tier 3: multi-year national subscription with SLA-backed throughput targets, low-seven-figure annual contract value, plus optional modules (theory-test scheduling, professional-driver licence renewals, motorcycle category expansion).

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider. The optimiser runs in batches per περιφέρεια; marginal cost per allocation event is rounding error. LLM inference cost is bounded by the citizen-communication and memo-drafting layers — €0.10-0.20 per candidate touched per cycle at current sovereign-LLM pricing. Per-περιφέρεια ACV at Tier 3 is 15-30× annual variable cost. Gross margin target 75%+ after support and per-περιφέρεια integration overhead.

**Capital plan and milestones.** Pre-seed €500k-€700k (T-Life Capital + one Greek strategic angel with operations-research credibility) to fund the founding team for nine months through the Tier-1 pilot. Milestones: (1) signed pilot LoI within 60 days; (2) single-περιφέρεια pilot live at day 90 with weekly memos to the Δ/ντή Οδικής Κυκλοφορίας; (3) Tier-2 national-rollout tender shaping with ΥΠΥΜΕ procurement by month nine. Seed round €2.5-3.5M on Tier-2 signature, used to scale customer-success and to ship the adjacent product line — Αυτοκίνητο vehicle-fleet and instructor-vehicle availability agent, same buyer, same moat.

**Team and hires.** Three founding hires: (1) operations-research / scheduling-optimisation founder from the AUEB Management Science or NTUA OR pipeline, owns the constraint-satisfaction solver and the union-rule encoding; (2) ex-Δ/νση Οδικής Κυκλοφορίας advisor or ex-περιφερειακή scheduling officer as domain co-founder — credibility with the GS and the operational scheduler, owns the rule corpus and the examiner-union liaison; (3) product engineer with gov.gr integration experience (mitos.gov.gr process registry, Wallet.gov.gr notifications). First three hires post-pilot: a Greek-NLP engineer for the 1555 communication layer, a customer-success lead with περιφερειακή-administration scars, and a second OR engineer for the multi-περιφέρεια solver.

**Risks.** (1) Driving-school lobby framing the pilot as "the state is taking slots from schools" — mitigated by minister-led "reducing wait-times" framing, by preserving school-allocated quotas, and by reframing bot-scalping as consumer protection. (2) Examiner-union veto if the optimiser violates a collective agreement — mitigated by encoding union work-rules as *hard* constraints, by an examiners' representative on the steering committee, and by guaranteeing no allocation reduces contracted hours. (3) gov.gr integration latency across heterogeneous περιφέρεια backends — mitigated by picking a single API-reachable περιφέρεια and working with the ΓΓΠΣΨΔ gov.gr product team. (4) "Why not just rebuild the booking system like DVSA did with Kainos" — mitigated by a clear agent-layer narrative: the loop sits on top of any backend and ships in 90 days, not 36 months.

---

# Pitch Deck

## Slide 1 — ΔίπλωμαFlow
- T-Life Capital portfolio venture, Athens
- Agentic driving-test scheduler for ΥΠΥΜΕ — runs the loop, not just the booking UI
- Decides slots, sends offers via gov.gr, rebooks no-shows, drafts 1555 scripts and throughput memos
- 90-day pilot-ready, single περιφέρεια, απευθείας ανάθεση

## Slide 2 — Problem
- 6-to-12-month wait for a practical driving test in Attica and Thessaloniki
- Σχολές οδηγών bot-scalp the limited slots that surface; no-shows cascade because rebooking is manual
- Περιφερειακή scheduling officers run allocation in Excel under daily pressure from candidates, schools and 1555 escalations
- Wait-time has been a top-five 1555 complaint every quarter since the PM-office scorecard launched
- Bottleneck is the loop, not the front-end UI

## Slide 3 — Why Now
- DVSA's May 2026 reform (Kainos-built Driver Services Platform, learner-only booking, bot-mitigation) is the freshest international precedent — *not yet* a full agentic scheduler
- Greek Law 5299/2026 gives a clean compliance posture for decision-support agents with a named human approver
- EU AI Act Annex III enforcement deferred to 2 December 2027 — clean eighteen-month deployment window
- Driving-school bot-scalping of slots now documented in Greek press and 1555 logs — converts the lobby's defence of scarcity into a consumer-protection problem the minister can attack
- Spanish DGT centralised optimiser cut median wait-time in pilot provinces (2023); Estonia Maanteeamet fully digitised booking (2022) — the direction of travel is settled

## Slide 4 — Solution
- Three-layer split is the moat: deterministic constraint-satisfaction optimiser + LLM communication layer + audit-grade decision trace
- Examiner-union hours, geographic mobility, σχολή-vehicle availability, KTEO-pass eligibility encoded as hard constraints
- Citizen-facing layer plumbed into gov.gr notifications and the 1555 desktop
- Σχολή-οδηγών interface sees allocated slots for registered candidates only — bot-scalping surface area collapses to zero

## Slide 5 — Demo
- Live walkthrough on a synthetic Attica week with 800 candidates, 14 examiners, 6 σχολή-fleet vehicles
- Solver run: median wait-time before vs. after, no-show rebook latency, examiner-utilisation rate
- Citizen view: gov.gr offer notification in Greek with the slot, the centre, the examiner pool, and the reschedule path
- 1555 script: agent drafts the Greek-language explanation of wait-time and next-best slot for the operator to read
- Throughput memo: weekly Greek-language draft for the Δ/ντή Οδικής Κυκλοφορίας with bottleneck analysis per περιφέρεια

## Slide 6 — Market
- Greek primary market: ΥΠΥΜΕ, 13 περιφέρειες, ~250,000 practical-test candidates per year, ~400,000 exam events including retakes
- Adjacent product line: Αυτοκίνητο agency vehicle-fleet and instructor-vehicle availability agent — same buyer, same moat
- Lateral expansion: theory-test scheduling, professional-driver (CPC) renewals, motorcycle and heavy-vehicle categories
- Long-term: replicable into Cyprus driving-test administration with modest localisation; the per-jurisdiction union corpus is the only friction

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.25, passed hostile qualification re-pass (May 2026) with new composite 4.33
- OR/scheduling-optimisation co-founder candidate identified in the AUEB Management Science pipeline
- Ex-Δ/νση Οδικής Κυκλοφορίας advisor candidate identified for the rule-corpus and union-liaison role
- One περιφέρεια (Attica) expressing pilot interest via the Δ/ντή Οδικής Κυκλοφορίας

## Slide 8 — Business Model
- Tier 1 pilot: €60k, 90 days, single περιφέρεια, απευθείας ανάθεση
- Tier 2 national rollout: €700k year-one across 13 περιφέρειες via ESPA / RRF
- Tier 3 national subscription: SLA-backed throughput targets, low-seven-figure ACV
- Per-περιφέρεια ACV at Tier 3 is 15-30× annual variable cost; gross margin target 75%+

## Slide 9 — Competition & Moat
- No deployed Greek scheduler at this layer; ministerial portals are static
- DVSA Kainos rebuild is system-of-record; we ship the loop on top of any backend
- Greek SIs (Singular, Byte, Uni) sell scheduling UIs, not agentic loops with Greek union-rule encoding
- Moat: per-περιφέρεια union work-rule corpus + Greek-language candidate communication + gov.gr integration + examiner-union liaison + three-to-five-year defensibility window
- Architectural moat: deterministic optimiser + LLM communication + audit-grade decision trace — the post-DVSA architecture

## Slide 10 — Team
- OR/scheduling-optimisation founder — AUEB or NTUA pedigree, owns the solver
- Ex-Δ/νση Οδικής Κυκλοφορίας advisor as co-founder — owns the rule corpus and the examiner-union and σχολή-οδηγών relationships
- Product engineer with gov.gr integration experience
- Advisor bench: ex-Γενικός Γραμματέας Μεταφορών, ΚΤΕΟ examiner-union representative, σχολή-οδηγών federation contact

## Slide 11 — Ask
- €500k-€700k pre-seed, T-Life Capital lead, one Greek strategic angel with operations-research credibility
- Use of funds: nine-month runway through Tier-2 signature
- Investor introductions sought: Γενικός Γραμματέας Μεταφορών office, Δ/ντή Οδικής Κυκλοφορίας, ΓΓΠΣΨΔ gov.gr product team

---

# Go-to-Market Plan

**Champion identification.** Two named primary champions inside ΥΠΥΜΕ. The Γενικός Γραμματέας Μεταφορών is the economic buyer — owns the wait-time KPI on the PM-office gov.gr citizen-satisfaction scorecard and has personal political exposure on 1555 complaint volumes. The Δ/ντής Οδικής Κυκλοφορίας is the policy buyer — owns operational throughput, signs the throughput memos the agent drafts, and is the official the minister's office calls when a press cycle starts. Operational champion at the regional level: the Περιφερειακός Διευθυντής Μεταφορών of the pilot περιφέρεια. Secondary stakeholders to neutralise, not convert: the σχολή-οδηγών federation, the ΚΤΕΟ examiners' union representatives, and the Αυτοκίνητο agency on fleet vehicles. The ΚΤΕΟ examiners' union is decisive — if they read the optimiser as a threat to contracted hours, the pilot dies in week one.

**First-meeting choreography.** Forty-five minutes with the Γενικός Γραμματέας Μεταφορών, ex-Δ/νση Οδικής Κυκλοφορίας co-founder physically in the room, OR founder for the constraint-satisfaction architecture slide only. Open with the political diagnosis (the 6-12 month wait is the attack line, bot-scalping by σχολές οδηγών is the consumer-protection wedge, and the 1555 escalation queue is the operational symptom), not the product. Spend ten minutes on the three-layer split — deterministic optimiser with union work-rules as *hard* constraints, LLM communication layer for gov.gr notifications and 1555 scripts, audit-grade decision trace — and explicitly name this as the post-DVSA architecture: DVSA's Kainos-built rebuild is system-of-record; we ship the loop on top. Spend ten minutes on the examiner-union posture: the optimiser will not reduce contracted hours, will not reroute examiners across περιφέρειες without consent, and will publish a weekly examiner-utilisation report that the union can audit. Close on the pilot offer below. Do not ask for a decision in the room. Ask for two follow-ups: a thirty-minute working session with the Δ/ντή Οδικής Κυκλοφορίας on the rule-encoding scope, and a separate session with the ΓΓΠΣΨΔ gov.gr product team on notification plumbing.

**Pilot offer (the buyer hook).** A 90-day pilot in a single περιφέρεια (Attica preferred, Thessaloniki second), under €60k απευθείας ανάθεση, with three measurable KPIs published weekly to the Δ/ντή Οδικής Κυκλοφορίας: median candidate wait-time from application to scheduled exam, no-show rebook latency, examiner-utilisation rate against union-contracted hours. Hard guarantee: not a single examiner-union work-rule violation across the pilot — every allocation traceable to a constraint-satisfaction proof. Hard guarantee: zero σχολή-οδηγών slot inventory exposed — schools see allocated slots for their registered candidates only. Reference numbers in the room: DVSA's May 2026 reform reduced bot-scalping but has not yet collapsed wait-times because Kainos is still building the Driver Services Platform replacement; Spanish DGT's centralised optimiser cut median wait-time in pilot provinces from 2023; Estonia Maanteeamet has fully digital booking since 2022. The agent's weekly throughput memo lands on the Δ/ντή's desk with a draft 1555 script for the call-centre, a draft press-line for the minister's office, and a constraint-violation log of zero entries.

**Expansion path.** Pilot pass → Tier-2 national-rollout tender shaped with ΥΠΥΜΕ procurement during months 6-9 of the pilot, structured as a 13-περιφέρεια deployment-plus-subscription on the ESPA / RRF envelope at €700k year-one. Concurrent product expansion to the Αυτοκίνητο agency vehicle-fleet and instructor-vehicle availability agent — same buyer, separate budget line, same examiner-union relationship. National rollout from year two on SLA-backed subscription, with optional modules for theory-test scheduling, CPC renewals, motorcycle and heavy-vehicle categories. Lateral from year three: ΚΤΕΟ examiner scheduling and Cypriot driving-test administration.

**Procurement vehicle.** Tier 1 is απευθείας ανάθεση by ΥΠΥΜΕ to ΔίπλωμαFlow at €60k — the standard instrument for a 90-day pilot at this budget tier, and the only instrument with a calendar compatible with delivering a published wait-time KPI before the PM-office quarterly scorecard cycle. Tier 2 is a competitive tender we expect to win on Tier-1 KPI evidence, ESPA / RRF digital-transformation envelope eligibility, and the union-liaison record. Tier 3 is a multi-year national subscription contracted directly with ΥΠΥΜΕ or via a Greek prime contractor (Singular, Byte, Uni, or one of the SIs already inside ΥΠΥΜΕ on managed-services) with ΔίπλωμαFlow as the agentic-layer subcontractor — this is the path of least political resistance and protects incumbent SI relationships.

**PR and comms.** No press release at pilot signature. No press release during the parallel-run. One pre-briefed Kathimerini or To Vima long-form on the day pilot KPIs are shared with the Γενικός Γραμματέας Μεταφορών, framed around citizen wait-time reduction and bot-scalping elimination, with the Δ/ντή Οδικής Κυκλοφορίας quoted, the examiner-union representative quoted on the zero-violations record, and DVSA + DGT + Maanteeamet as comparator set. Σχολή-οδηγών federation briefing held ahead of press — registered schools keep their allocated slot pools; bot-scalping was a small group of bad actors the agent neutralises for the legitimate sector. Examiner-union briefing held ahead of σχολή-οδηγών — contracted hours preserved, geographic mobility opt-in only, weekly utilisation report as audit substrate. Brussels-facing: a posted Law 5299/2026 and AI Act conformity-assessment file on day one, citing the deterministic-optimiser + LLM-communication + audit-trace split, pre-empting any DPA or Commission inquiry ahead of the 2 December 2027 Annex III enforcement date. We do not publish examiner-level utilisation numbers without the union's written consent; the KPI publication calendar is the Δ/ντή's.
