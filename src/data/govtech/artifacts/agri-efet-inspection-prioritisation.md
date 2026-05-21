# Business Plan

**Company (working title):** Trofima Sentinel — a T-Life Capital portfolio venture building agentic inspection-prioritisation and εντολή-ελέγχου drafting tooling for ΕΦΕΤ field inspectors.

**Thesis.** Greek food safety is not a manpower problem and it is not a sensor-availability problem. It is a prioritisation-and-drafting problem. ΕΦΕΤ fields roughly 250 inspectors against tens of thousands of business operators across olive-oil bottlers, feta dairies, ouzo distilleries, beekeepers, fish landings and import warehouses. Today the next-day inspection list is assembled by hand from yesterday's RASFF alerts, citizen complaints and the inspector's own pattern memory, and the εντολή ελέγχου that authorises each visit is hand-drafted in administrative Greek. Trofima Sentinel ships a copilot that fuses RASFF, the national complaint log, ΑΑΔΕ/myDATA supply-chain flows (within the lawful perimeter) and prior inspection history into a ranked next-day workload for each Περιφερειακή Διεύθυνση, drafts the εντολή ελέγχου per visit, and after the visit drafts the inspection report from the inspector's voice or text notes. Every signature stays with the named ΕΦΕΤ inspector and the regional Διευθυντής.

**Architectural moat — the split that makes this defensible.** The risk-scoring runs on a deterministic, parameterised model whose features and weights are inspectable by an ΕΦΕΤ analyst — same lineage as the UK FSA LightGBM Food Hygiene Rating Scheme model whose Algorithmic Transparency Record was published in 2025. The Greek-language drafting (εντολή ελέγχου, post-visit report) runs on an LLM bounded by template and citation enforcement. Provenance is line-level: every rank position links to the alerts, complaints and inspection-history rows that drove it, and every paragraph of the εντολή links back to the registry record or RASFF notification cited. Deterministic-scoring + LLM-drafting + line-level provenance is the entire pitch and is the architectural answer European supervisors are now writing into post-Annex-III guidance under Greek Law 5299/2026.

**Market and buyer.** The economic buyer is the ΕΦΕΤ Governor (Πρόεδρος ΕΦΕΤ). The policy buyer is the Secretary General for Food and Agro-business inside ΥΠΑΑΤ — the warm-intro path the Governor's office expects. The operational user is the field inspector and, above them, the regional Διευθυντής Περιφερειακής Διεύθυνσης who owns the daily plan. Total addressable user base inside ΕΦΕΤ is on the order of 250 inspectors and ~12 regional directorates; that is small, deliberately, because the same agent loop generalises laterally into ΑΑΔΕ customs ICISnet food-import flagging, ΕΛΓΟ ΔΗΜΗΤΡΑ PDO control and the regional ΔΑΟΚ certification offices — same Greek-language corpus, same evidence-chain primitives, three further budget lines after the ΕΦΕΤ wedge lands.

**Why now (the timing window).** Four facts converge on summer-autumn 2026. First, food-safety scandal pressure is at a decade peak: the 2025-2026 olive-oil adulteration cases, repeated feta PDO fraud actions inside and outside Greece, ouzo provenance disputes around export shipments, and the recurrent Greek-honey adulteration stories give the Governor explicit political cover to be seen acting. Second, the international precedent is now textbook: the UK FSA published the Algorithmic Transparency Record for its risk-rating LightGBM model in 2025 and the FSA has publicly extended AI into meat inspection (PublicTechnology, Feb 2025); Netherlands NVWA has been operating risk-based inspection targeting since 2023; DG SANTE risk profiling is the EU policy backdrop. Third, the regulatory clock is generous: EU AI Act Annex III enforcement was deferred to 2 December 2027, and Greek Law 5299/2026 governs the domestic AI/data interface — which means an eighteen-month deployment window under a decision-support classification, with full conformity-assessment posture filed well before the new date. Fourth, the political surface is clean in a way no other agri-adjacent idea in T-Life's portfolio currently is: OPEKEPE was merged into ΑΑΔΕ on 1 January 2026 and its successor OPA carries the CAP-subsidy contagion; ΕΦΕΤ is a separate, food-safety mandate that the post-OPEKEPE narrative reflexively rewards rather than punishes.

**Product.** A web copilot operated next to the existing ΕΦΕΤ back-office. The agent (1) ingests yesterday's RASFF and national alerts each morning; (2) cross-references the active business-operator registry by product category and Περιφέρεια; (3) pulls myDATA supply-chain flows for operators inside flagged chains within the lawful perimeter; (4) scores each operator by risk delta against prior inspection date and complaint pattern; (5) emits a ranked next-day inspection list per region with one-paragraph rationale per operator and visible feature attributions; (6) drafts the Greek-language εντολή ελέγχου populated from registry data and the cited alert; (7) post-visit, ingests the inspector's voice or text note and drafts the administrative-Greek inspection report. No autonomous step is escalated to enforcement — the Διευθυντής signs the plan, the inspector signs the εντολή and the report.

**Revenue model and pricing.** Direct contract with ΕΦΕΤ. Tier 1: €50-60k απευθείας ανάθεση for an eight-week pilot covering one Περιφερειακή Διεύθυνση (Attica or Central Macedonia), with a side-by-side scoring of the agent's recommended next-day list against the actual list ΕΦΕΤ ran that week, plus a measured time-to-draft delta on the εντολή ελέγχου. Tier 2: €250-450k year-one rollout across three to five regional directorates on a per-seat SaaS-plus-implementation model (≈€1.8-2.6k per inspector per year). Tier 3: national subscription with SLA-backed daily-list throughput targets, mid-six-figure annual contract value.

**Unit economics.** Hosted on Greek/EU sovereign cloud, with line-level audit logs co-located with ΕΦΕΤ's data of record. Inference cost per inspector-day is in single-digit euro cents; scoring is essentially free at this volume. Per-seat ACV at scale 15-25× variable cost. Gross margin target 72%+ after ΕΦΕΤ-specific integration overhead and the Greek-corpus tuning work that has to be redone whenever ΕΦΕΤ updates its product taxonomy.

**Capital plan and milestones.** Pre-seed €500k-€700k (T-Life Capital lead plus one Greek strategic angel from the food-supply-chain world) funds a founding team of three for nine months through pilot. Milestones: (1) signed pilot LoI within 90 days; (2) Tier-1 deployed and the eight-week side-by-side scored by month six; (3) Tier-2 contract signed by month nine. Seed round €2.0-3.0M at Tier-2 signing, used to staff customer success, harden the post-visit dictation pipeline and open Product 2 (olive-oil-fraud forensics for the ΕΦΕΤ olive-oil unit and for the ΕΛΓΟ ΔΗΜΗΤΡΑ liaison — adjacent buyer, same moat).

**Team and hires.** Three founding hires: (1) technical founder with Greek food-supply-chain or food-tech background, owns the risk-scoring model and the data integrations; (2) ex-ΕΦΕΤ inspector as co-founder — credibility with the Governor's office and authorship of the εντολή-ελέγχου templates, sourced through the PASEGES network as scoped in the next-30-days plan; (3) senior ML lead with Greek-NLP and retrieval-augmented drafting experience. First three post-pilot hires: a former regional Διευθυντής as design partner, a Greek legal-NER engineer, and a customer-success lead with public-sector procurement scars.

**Risks and mitigations.** (1) ΕΦΕΤ Governor seat rotates with ministerial reshuffles — mitigated by building the SecGen Food and Agro-business path in parallel so the relationship survives. (2) Founder bench shallower than the pitch implies; ΕΦΕΤ inspectors rarely move to startups — mitigated by a gated 60-90 day bench-building exercise targeting one ex-inspector through PASEGES before the first Governor meeting. (3) Buyer objection that the FSA precedent is "ranking, not drafting" — mitigated by leading the demo with the εντολή-ελέγχου draft, not the ranking. (4) myDATA cross-reference perimeter — mitigated by treating myDATA as a feature flag, off by default, switched on only on a written ΕΦΕΤ-counsel lawfulness opinion per use case. (5) Incumbent overlap — none material; Greek SIs do not have a meaningful ΕΦΕΤ footprint.

---

# Pitch Deck

## Slide 1 — Trofima Sentinel
- T-Life Capital portfolio venture, Athens
- ΕΦΕΤ inspection-prioritisation and εντολή-ελέγχου drafting copilot
- Ranks the next-day inspection list and drafts the orders; the regional Διευθυντής and the inspector sign
- Pilot-ready, eight weeks to first side-by-side scored against the actual ΕΦΕΤ weekly list

## Slide 2 — Problem
- ~250 ΕΦΕΤ inspectors against tens of thousands of operators across olive oil, feta, ouzo, honey, fish, imports
- Next-day prioritisation is reactive and is reconstructed by hand from RASFF, complaints and inspector memory
- The εντολή ελέγχου is hand-drafted per visit in administrative Greek
- Post-visit report is again hand-drafted
- 2025-2026 olive-oil adulteration cases, feta PDO fraud, ouzo provenance disputes, honey adulteration: political tailwind is at a decade peak

## Slide 3 — Why Now
- UK FSA Food Hygiene Rating Scheme LightGBM model with public Algorithmic Transparency Record (2025); FSA AI in meat inspection (PublicTechnology, Feb 2025)
- Netherlands NVWA risk-based inspection targeting in production since 2023
- DG SANTE risk profiling is the EU policy backdrop
- OPEKEPE merged into ΑΑΔΕ Jan 2026 — successor OPA carries the CAP contagion; ΕΦΕΤ sits cleanly outside the OPEKEPE wound
- EU AI Act Annex III enforcement deferred to 2 December 2027; Greek Law 5299/2026 sets the domestic AI/data interface — clean eighteen-month deployment window

## Slide 4 — Solution
- Deterministic risk-scoring (LightGBM-style, FSA-precedent) + Greek-language LLM drafting + line-level provenance
- Ranked next-day list per Περιφερειακή Διεύθυνση with one-paragraph rationale per operator and visible feature attributions
- εντολή ελέγχου drafted from the registry record and the cited RASFF/complaint
- Post-visit: inspector dictates, agent drafts the administrative-Greek report
- Decision-support classification under Annex III; Governor and inspectors retain every signature

## Slide 5 — Demo (the buyer hook)
- Side-by-side: yesterday's actual regional inspection plan vs the agent's ranked list on a single Περιφέρεια (Attica)
- Lead with the εντολή-ελέγχου draft on screen — answers the "FSA is ranking, not drafting" objection in the first minute
- Surface one operator the human team missed and the RASFF chain that flagged them
- Live the post-visit dictation flow: a thirty-second voice note in becomes a draft inspection report out

## Slide 6 — Market
- Greek primary market: ΕΦΕΤ, ~250 inspectors across ~12 Περιφερειακές Διευθύνσεις
- Adjacent budget line at ΕΦΕΤ: olive-oil-fraud forensics module (Product 2)
- Lateral expansion: ΑΑΔΕ customs ICISnet food-import flagging, ΕΛΓΟ ΔΗΜΗΤΡΑ PDO control, ΔΑΟΚ regional certification — same Greek-language corpus, same evidence-chain primitives
- Long-term: Cypriot food-safety authority replication with modest localisation

## Slide 7 — Traction
- Hostile second-pass qualification cleared 2026-05-21, composite 4.33, top-5 idea fully insulated from OPEKEPE political contagion
- UK FSA LightGBM Algorithmic Transparency Record cited in qualification dossier as direct precedent
- Founding ex-ΕΦΕΤ inspector candidate scoped through PASEGES network
- Warm-intro path to the ΕΦΕΤ Governor via SecGen Food and Agro-business identified

## Slide 8 — Business Model
- Tier 1 pilot: €50-60k απευθείας ανάθεση, eight weeks, one Περιφέρεια
- Tier 2 rollout: €250-450k year-one across three to five Περιφερειακές Διευθύνσεις
- Tier 3 national subscription: SLA-backed daily-list throughput, mid-six-figure ACV
- Per-seat SaaS-plus-implementation, ≈€1.8-2.6k per inspector per year at scale

## Slide 9 — Competition & Moat
- No deployed Greek-language food-safety triage agent; Greek SIs are not in food-safety analytics
- Multinational risk-rating tools cannot draft administrative-Greek εντολές or read regional product nomenclature
- Moat: Greek inspection terminology, regional product taxonomy, complaint-text dialect, ΕΦΕΤ-specific workflow context
- Architectural moat: deterministic scoring + LLM drafting + line-level provenance — the post-Annex-III, Law-5299/2026-compliant pattern

## Slide 10 — Team
- Technical founder — Greek food-supply-chain engineering background
- Ex-ΕΦΕΤ inspector co-founder — owns εντολή-ελέγχου templates and Governor credibility
- Senior ML lead — Greek-NLP and retrieval-augmented drafting
- Advisor bench: former SecGen Food and Agro-business, one PASEGES board member, one ΕΛΓΟ ΔΗΜΗΤΡΑ certification lead

## Slide 11 — Ask
- €500k-€700k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through Tier-2 signing, including the 60-90 day inspector bench-building gate
- Investor introductions sought: ΕΦΕΤ Governor's office, ΥΠΑΑΤ SecGen Food and Agro-business, PASEGES leadership

---

# Go-to-Market Plan

**Champion identification.** Primary champion: the ΕΦΕΤ Governor (Πρόεδρος ΕΦΕΤ) — single-decision-maker on a benign political surface, with a career stake in being seen acting on the 2025-2026 olive-oil and feta PDO scandal cycle and the recurring Greek-honey adulteration story. Policy champion: the Secretary General for Food and Agro-business inside ΥΠΑΑΤ (Υπουργείο Αγροτικής Ανάπτυξης & Τροφίμων) — owns the warm-intro path the qualification dossier names, and is the resilience layer if the Governor seat rotates. Operational champion: the Διευθυντής of one Περιφερειακή Διεύθυνση — a career food-scientist or veterinarian who feels the daily prioritisation burden. We open through the SecGen, present to the Governor with the SecGen hand-off in the room, and seal the operational pilot with the regional Διευθυντής.

**The 60-90 day bench-building gate.** Before the first Governor meeting we do not pitch. First 30 days: identify a named ex-ΕΦΕΤ inspector with 10+ years of field experience and at least one olive-oil or feta-PDO investigation on their record, sourced through PASEGES. Next 30-60 days: sign them in principle as co-founder and assemble a single side-by-side artefact (one Περιφέρεια, yesterday's actual plan vs the agent's recommended list, on ΕΦΕΤ-shape data). This gate is mandatory because the qualification dossier flags the founder bench as the shallowest constraint, and because the Governor will price the entire pitch on the inspector being physically in the room.

**First-meeting choreography.** Forty-five minutes with the Governor, SecGen Food and Agro-business making the warm hand-off, ex-ΕΦΕΤ inspector co-founder in the room, technical founder for the architecture slide only. Open with the scandal-cycle diagnosis (olive oil, feta PDO, ouzo, honey) and the question the Governor is asked weekly by the press — not with the product. Ten minutes on the deterministic-scoring + LLM-drafting + line-level-provenance split — the architectural moment the Governor needs to internalise because it is the answer to every objection. Cite the UK FSA Food Hygiene Rating Scheme Algorithmic Transparency Record and the FSA's 2025 extension into meat inspection: the precedent European supervisors are pointing at under Annex III. Lead the demo with the εντολή ελέγχου, not the ranking — pre-empts the only credible hostile objection. Close on the pilot offer. Do not ask for a decision in the room. Ask for one follow-up: a 30-minute session with ΕΦΕΤ legal counsel and the IT director on the myDATA perimeter and the Law 5299/2026 conformity-assessment posture.

**Pilot offer (the buyer hook).** Eight-week deployment on one Περιφερειακή Διεύθυνση (Attica for volume and political visibility; Central Macedonia as backup), under €60k απευθείας ανάθεση. The agent ingests the prior month's RASFF and complaints; produces a daily ranked list and pre-drafted εντολές; runs alongside the existing manual planning so nothing in the inspection programme depends on it until the Διευθυντής chooses to lean on it. Three scored measures at week eight: (a) coverage delta — operators the agent ranked into the top-N that the human team would have missed, and the share producing findings on visit; (b) εντολή-ελέγχου drafting-time delta in inspector-minutes; (c) post-visit report drafting time. Audit firm of ΕΦΕΤ's choice scores the package; ΕΦΕΤ owns the report. If coverage delta is zero or negative we tear up the invoice.

**Expansion path.** Pilot pass → Tier-2 contract for three-to-five-regional rollout at €250-450k year-one, per-seat ACV thereafter. Concurrent Product 2: olive-oil-fraud forensics module — the qualification dossier flags it as the stronger Product 2 than chasing TRACES drafting, and it borrows the same evidence-chain primitives. National rollout from year two on SLA-backed subscription. Lateral expansion to ΑΑΔΕ customs ICISnet food-import flagging, ΕΛΓΟ ΔΗΜΗΤΡΑ PDO control and ΔΑΟΚ regional certification from year three.

**Procurement vehicle.** Tier 1 sits cleanly inside απευθείας ανάθεση at €50-60k — the qualification dossier scored pilot procurability 5/5 because ΕΦΕΤ has the budget envelope and the legal cover without a competitive tender, and because the eight-week calendar fits a 2026-Q4 deployment giving the Governor a tangible deliverable inside the current political cycle. Tier 2 will be a competitive tender we expect to win on Tier-1 audit evidence and per-inspector NPS; tender-document shaping starts in parallel with the pilot. We will accept a Greek SI as prime on Tier 3 if procurement prefers a framework vehicle — no incumbent has a meaningful ΕΦΕΤ footprint to defend.

**PR and comms.** No press release at pilot signature; no press release during the eight-week run. One pre-briefed Καθημερινή or Το Βήμα long-form on the day the audit report is shared with the Governor, framed around inspector productivity and citizen food-safety outcomes, with the audit-firm partner quoted and the UK FSA Algorithmic Transparency Record cited as the international comparator. PASEGES briefing held in person and ahead of any press contact — food safety is a politically aligned posture for PASEGES (protects PDO producers from adulterated competitors) and the network was the founder-sourcing channel anyway, so the dynamic is collaborative rather than defensive. Brussels-facing comms: a posted Annex-III / Law 5299/2026 conformity-assessment posture document on day one of deployment, citing the deterministic-scoring + LLM-drafting + line-level-provenance split and the FSA precedent; this pre-empts any DG SANTE or EDPS inquiry well before the 2 December 2027 enforcement date. We do not publish per-operator findings without the Governor's written consent; the audit-report release calendar is the Governor's.
