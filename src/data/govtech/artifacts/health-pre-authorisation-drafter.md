# Business Plan

**Company (working title):** Prograde Health — a T-Life Capital portfolio venture building the agentic drafting layer for ΕΟΠΥΥ pre-authorisation of high-cost therapies.

**Thesis.** The bottleneck in Greek high-cost-therapy access — biologics, oncology regimens beyond first line, transplant maintenance, rare-disease enzyme replacement — is not clinical evidence and not funding envelope. It is the αίτηση προέγκρισης (pre-authorisation file) the hospital specialist must assemble for ΕΟΠΥΥ on every prescription: extract diagnosis evidence, prior-line failures, contraindication screens, and match them to the live ΕΟΠΥΥ positive-list criterion and the corresponding ΕΟΦ Summary of Product Characteristics. Errors send the file back; start-of-therapy slips by weeks; specialist time is gone. Prograde ships a copilot that drafts the αίτηση and the rejection-appeal letter, leaving every clinical interpretation and every signature with the named specialist. Buyer: ΕΟΠΥΥ Governor. Users: the ΕΟΠΥΥ pre-auth caseworker (committee side) and the ΕΣΥ hospital admin / specialist (submission side).

**Architectural moat — the split that makes this defensible and shippable.** Eligibility runs on a deterministic rules engine, not an LLM. The clinical narrative runs on an LLM, bounded by templates and citation enforcement. The caseworker signs every output. Provenance is captured at the line level: every criterion-match in the eligibility table links back to a specific positive-list line and the underlying Ministry of Health (MoH) circular; every paragraph in the narrative links back to a specific patient-record entry. This three-layer split — deterministic-eligibility + LLM-narrative + caseworker-signed-output — is the architectural lesson the Netherlands DPA wrote into European law when it sanctioned UWV in 2023 for an unlawful welfare-fraud algorithm: keep the consequential decision logic deterministic and auditable, keep the LLM on language and retrieval, and keep a named human on every output. The split converts EU AI Act high-risk exposure into a decision-support classification, neutralises the "AI denied my cancer drug" parliamentary attack, and carves an engineering surface where a Greek-focused team can outbuild any multinational.

**Market and buyer.** Economic buyer: ΕΟΠΥΥ Governor — single national payer, single rule set, single procurement vehicle. Secondary buyer: General Secretary for Public Health Services at the Ministry of Health, who owns the positive-list publication chain. User-inside-the-payer: the pre-auth caseworker on the ΕΟΠΥΥ committee. User-on-the-hospital-side: ΕΣΥ specialist (rheumatologist, oncologist, neurologist, transplant physician) plus hospital pharmacist who frequently assembles the file on the specialist's behalf. Annual pre-auth volume across high-cost biologics, oncology and rare-disease portfolios is in the low six figures; rejection-and-resubmit cycles inflate actual file-touch count meaningfully above that. Each touched file is roughly 30–90 minutes of specialist or pharmacist time. Political cost of delay is measured in patient-association press cycles and parliamentary questions following every oncology start-of-therapy news segment.

**Why now.** Four facts converge on the back half of 2026. First, Greek Law 5299/2026 sets the national AI/data rules under which ΕΟΠΥΥ can lawfully embed an agent against its own caseworker workstations and against the hospital HIS — framework fresh, implementing decisions open, ΕΟΠΥΥ leadership in a procurement mood. Second, EU AI Act Annex III enforcement deferred to 2 December 2027 — clean eighteen-month runway to deploy under decision-support and stand up the conformity-assessment posture. Third, the precedent base is mature on the structurally identical category: Cohere Health is operational at scale on US-payer prior-auth; Salesforce Health Cloud Pre-Auth ships to US insurers; Olive AI's 2023 collapse is the architectural counter-example we engineer against. Fourth, ΕΟΠΥΥ positive-list changes now publish through Διαύγεια bulletins on a regular cadence — machine-readable inputs to a regression-test harness exist for the first time.

**Product.** A web copilot embedded next to the ΕΟΠΥΥ caseworker workstation (committee-side) and next to the hospital HIS / AHFY workflow (submission-side). The agent identifies the proposed therapy, pulls the current ΕΟΠΥΥ positive-list criterion and the matching ΕΟΦ SPC, extracts diagnosis evidence and prior-line treatment history from the patient record, runs the contraindication screen, and produces three artefacts: (1) a deterministic eligibility table — diff-against-formulary, criterion by criterion, with green/red flags and explicit gap markers ("missing PPD test result", "missing prior MRI date"); (2) a Greek-language αίτηση narrative with paragraph-level citations to MoH circulars and patient-record entries; (3) on rejection, an appeal letter naming the specific positive-list criterion ΕΟΠΥΥ misjudged and citing the patient-record evidence against it. No autonomous submission to the ΕΟΠΥΥ portal in v1: PDF-out plus human submission until the portal-integration contract is signed.

**Revenue model and pricing.** Direct contract with ΕΟΠΥΥ via the Ministry of Health. Tier 1: €60–120k for a 90-day single-department pilot — one oncology or rheumatology department in one ΕΣΥ hospital, plus a parallel-run on one ΕΟΠΥΥ pre-auth committee desk. Tier 2: €300–600k year-one rollout across three to six ΕΣΥ departments and the corresponding ΕΟΠΥΥ committee desks, per-seat SaaS-plus-implementation at roughly €2.4–3.6k per user per year. Tier 3: national subscription with SLA-backed throughput targets, mid-six-figure to low-seven-figure annual contract value, covering all high-cost-therapy specialties across ΕΣΥ.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider compliant with Law 5299/2026 data-residency rules. Marginal inference cost per pre-auth file in the €0.30–0.70 range at current sovereign-LLM pricing; rules-engine + retrieval cost is rounding error. Per-seat ACV at scale 10–20× variable cost. Gross margin target 70%+ after support and ΕΟΠΥΥ-specific integration overhead.

**Capital plan and milestones.** Pre-seed €600k–€800k (T-Life Capital + one Greek strategic angel from the hospital-pharmacy world) to fund the founding team for nine months through the pilot. Milestones: (1) signed pilot LoI from the ΕΟΠΥΥ Governor's office within 90 days; (2) 90-day parallel-run pilot complete with measured days-to-approval and rejection-rate delta at month six; (3) Tier-2 contract signed at month nine. Seed round €2.5–3.5M at the Tier-2 signing, used to staff a clinical customer-success function, harden the portal-integration path, and stand up the adjacent product line (the ΕΟΠΥΥ rejection-appeal drafting agent at higher volume).

**Team and hires.** Three founding hires: (1) technical founder with Greek health-IT background, owns the rules engine and the Διαύγεια-watcher; (2) hospital pharmacist or ex-ΕΟΠΥΥ pre-auth committee member as co-founder — credibility with the Governor, owns the positive-list rules specification; (3) senior ML lead with Greek-NLP experience, owns the narrative-drafting layer and the citation-enforcement scaffold. First three hires post-pilot: a clinician advisor (rheumatologist or oncologist with active high-cost-therapy practice), a Greek-medical-NER engineer, and a customer-success lead with ΕΣΥ hospital procurement scars.

**Risks.** (1) ΕΟΠΥΥ rules change quarterly — mitigated by a regression-test harness against Διαύγεια bulletins, demoed in the first pitch, that retrieves positive-list updates automatically and red-flags drifted criteria before any agent draft reaches a caseworker queue. (2) Olive AI collapse contagion — mitigated by explicit architectural disavowal: deterministic-rules + LLM-narrative + caseworker-signed, not autonomous payer-side decisioning; Cohere Health and Salesforce Health Cloud Pre-Auth are the live comparators, Olive the counter-example. (3) EU AI Act re-classification — mitigated by the deterministic-eligibility split and a published conformity-assessment posture, with the 2 December 2027 deferral giving a clean window. (4) ΕΟΠΥΥ portal integration — v1 ships PDF-out plus human submission; API contract negotiated in parallel with Tier-2. (5) MDR posture — administrative drafting on the clinician's behalf is not MDR-regulated; the agent never makes a clinical decision; caseworker signs every output (the UWV-DPA counter-example as written defence).

---

# Pitch Deck

## Slide 1 — Prograde Health

- T-Life Capital portfolio venture, Athens
- ΕΟΠΥΥ pre-authorisation copilot for high-cost therapies — biologics, oncology, transplant maintenance, rare disease
- Drafts the αίτηση and the appeal with full positive-list and MoH-circular provenance; the caseworker and the specialist review, edit, and sign
- Pilot-ready, 90 days to first signed parallel-run

## Slide 2 — Problem

- High-cost-therapy αίτηση προέγκρισης eats 30–90 specialist-minutes per file
- Rejection-and-resubmit cycles inflate file-touch count and slip start-of-therapy dates by weeks
- Each file: pull diagnosis evidence + prior-line failures + contraindication screen, diff against the live ΕΟΠΥΥ positive-list criterion, cite the matching ΕΟΦ SPC and MoH circular
- The bottleneck is the diff-against-formulary and the narrative, not the prescribing decision
- Patient-association press cycles and parliamentary questions follow every oncology delay

## Slide 3 — Why Now

- Greek Law 5299/2026 sets the national AI/data framework — implementing decisions still open, ΕΟΠΥΥ in a procurement mood
- EU AI Act Annex III enforcement deferred to 2 December 2027 — clean eighteen-month deployment window
- Cohere Health operational at scale on US-payer prior-auth; Salesforce Health Cloud Pre-Auth shipping; Olive AI's 2023 collapse is the architectural counter-example we point at
- ΕΟΠΥΥ positive-list updates now publish through Διαύγεια bulletins on a regular cadence — machine-readable inputs to a regression-test harness exist for the first time
- ΕΟΠΥΥ is a single national payer = single-buyer leverage, single set of rules, single procurement vehicle

## Slide 4 — Solution

- Three-layer split is the moat: deterministic eligibility rules engine + LLM clinical narrative + caseworker-signed output
- The split defuses regulatory and political risk in one architectural choice — and is the lesson Dutch DPA enforcement wrote into European practice (UWV 2023)
- Diff-against-formulary: criterion-by-criterion table, green/red flags, explicit gap markers ("missing PPD", "missing prior MRI date")
- Greek-language αίτηση narrative with paragraph-level citations to MoH circulars and to patient-record entries
- On rejection: appeal letter that names the specific positive-list criterion ΕΟΠΥΥ misjudged
- Calibrated per-line-item confidence scores; the caseworker signs

## Slide 5 — Demo

- Live walkthrough on a synthetic case: anti-TNF biologic for rheumatoid arthritis after methotrexate failure
- Side-by-side: agent-drafted αίτηση vs. blank specialist draft, with the eligibility table identical in both
- Hover any sentence in the narrative, see the citation to the patient-record entry or the MoH circular
- Διαύγεια-watcher demo: show a positive-list criterion that drifted last week, agent flags it, prior-week regression-test result on screen
- Specialist edit + sign; ΕΟΠΥΥ caseworker view of the same packet

## Slide 6 — Market

- Greek primary market: ΕΟΠΥΥ — single national payer for the pre-auth surface, low-six-figure annual file volume across high-cost portfolios
- Specialist + pharmacist + caseworker seats addressable across ΕΣΥ and ΕΟΠΥΥ committees
- Adjacent product line: ΕΟΠΥΥ rejection-appeal drafting agent at higher per-file volume — same buyer, separate budget line
- Lateral expansion: ΕΟΠΥΥ KEN-DRG hospital-billing reconciliation, ΕΟΦ pharmacovigilance reporting — same Greek-policy moat
- Long-term: replicable into Cypriot health insurance with modest localisation

## Slide 7 — Traction

- Source idea documented in T-Life Capital ministries pack with composite rubric 4.45; passed hostile second-pass qualification (May 2026)
- Founding pharmacist candidate identified (ex-ΕΟΠΥΥ pre-auth committee, biologics specialty)
- One ΕΣΥ oncology department and one rheumatology department expressing pilot interest under NDA
- Greek-medical-NER tuning corpus assembly begun; Διαύγεια positive-list scraper at prototype

## Slide 8 — Business Model

- Tier 1 pilot: €60–120k, 90 days, one ΕΣΥ department + one ΕΟΠΥΥ committee desk
- Tier 2 rollout: €300–600k year-one across three to six departments and committee desks
- Tier 3 national subscription: SLA-backed, mid-six-figure to low-seven-figure ACV
- Per-seat SaaS-plus-implementation, ≈€2.4–3.6k per user per year at scale

## Slide 9 — Competition & Moat

- No multinational ships a Greek pre-auth copilot — positive-list rules are uniquely Greek and uniquely Greek-language
- Cohere Health and Salesforce Health Cloud Pre-Auth are US-payer products against US payer policies — non-portable
- Olive AI is the public failure mode the architecture is engineered against — explicit defence in every conversation
- Hospital pharmacy software vendors (Computer Solutions, Performance Tech) do paperwork support, not LLM-native diff-against-formulary drafting
- Architectural moat: deterministic eligibility + LLM narrative + caseworker-signed — the post-UWV architecture European supervisors are now writing into guidance
- Moat depth: Greek medical NER + ΕΟΠΥΥ positive-list corpus + ΕΟΦ SPC corpus + MoH circular index + Διαύγεια regression-test harness + clinical-pharmacist advisor bench

## Slide 10 — Team

- Technical founder — Greek health-IT engineering background
- Hospital pharmacist / ex-ΕΟΠΥΥ committee member co-founder — owns positive-list rules and Governor credibility
- Senior ML lead — Greek-NLP and retrieval-augmented drafting with citation enforcement
- Advisor bench: former ΕΟΠΥΥ Governor, rheumatology and oncology chiefs at named ΕΣΥ hospitals, clinical-pharmacology advisor

## Slide 11 — Ask

- €600k–€800k pre-seed, T-Life Capital lead, one Greek strategic angel from the hospital-pharmacy ecosystem
- Use of funds: nine-month runway through the Tier-2 signing
- Investor introductions sought: ΕΟΠΥΥ Governor's office, Ministry of Health General Secretariat for Public Health Services, named ΕΣΥ oncology and rheumatology chiefs

---

# Go-to-Market Plan

**Champion identification.** Primary: the ΕΟΠΥΥ Governor — economic buyer, owns the pre-auth committee and the procurement vehicle, carries the public weight of every press cycle on a delayed start-of-therapy. Secondary: the General Secretary for Public Health Services at the Ministry of Health, who controls the MoH circular publication chain that becomes the agent's authoritative citation source. Tertiary (paired with the Governor for AHFY data-pull permissions): the IDIKA CEO, custodian of the patient-record substrate. Operational champion at hospital level: the chief of an oncology or rheumatology department who will host the pilot — a clinician who personally feels pre-auth burden as a daily clinical-pace drag. Patient-association alignment: a quiet briefing of the largest oncology and rheumatology associations before any public step — they are the political amplifier whose support neutralises union resistance.

**First-meeting choreography.** Forty-five minutes with the ΕΟΠΥΥ Governor; the ex-committee pharmacist co-founder physically in the room, technical founder for the architecture slide only. Open with the political diagnosis (start-of-therapy delays are the attack line, not the funding envelope), not the product. Ten minutes on the deterministic-eligibility + LLM-narrative + caseworker-signed split — the architectural moment the Governor needs to internalise, because it is the answer to every objection that follows. Cite UWV 2023 DPA explicitly as the European reference architecture; Olive AI as the failure mode the split engineers around; Cohere Health and Salesforce Health Cloud Pre-Auth as the live US-payer comparators. Ten minutes on the Διαύγεια regression-test harness, demoed on a positive-list criterion that drifted last week — direct answer to the "rules change quarterly" objection. Ten minutes on the diff-against-formulary table and MoH-circular citation chain with one worked anti-TNF example. Close on the pilot offer. Do not ask for a decision in the room; ask for a 30-minute follow-up with ΕΟΠΥΥ legal counsel and the head of the pre-auth committee, plus an introduction to a named oncology or rheumatology chief.

**Pilot offer (the buyer hook).** A 90-day parallel-run pilot in one ΕΣΥ oncology or rheumatology department plus one ΕΟΠΥΥ pre-auth committee desk, under €120k, measuring three things: days-from-prescription-to-approval, rejection rate, and specialist time per file. Every αίτηση is signed by the ΕΣΥ specialist or the hospital pharmacist as it would be in production; every committee-side decision is signed by the ΕΟΠΥΥ caseworker. No autonomous submission to the ΕΟΠΥΥ portal in v1 — PDF-out plus human submission. The audit instrument is the ΕΟΠΥΥ committee's own quality-review process: agent-drafted αιτήσεις are scored against caseworker-drafted αιτήσεις on the same three measures. If the audit fails on accuracy or citation precision, we tear up the invoice. Reference numbers in the room: Cohere Health's deployment scale at US payers and Salesforce Health Cloud Pre-Auth's payer-side throughput — these are the international comparators the Governor will be asked about by the Minister.

**Expansion path.** Pilot pass → Tier-2 three-to-six department + committee-desk rollout at €300–600k year-one, per-seat ACV thereafter. Concurrent product expansion to the rejection-appeal drafting agent (same buyer, separate budget line, higher per-file volume). National rollout year two on SLA-backed subscription. Year-three lateral expansion to ΕΟΠΥΥ KEN-DRG hospital-billing reconciliation and ΕΟΦ pharmacovigilance reporting — same Greek-policy corpus moat, adjacent budget lines.

**Procurement vehicle.** Tier 1 sits well under the ΕΣΗΔΗΣ public-tender threshold — direct ΕΟΠΥΥ contract under the innovation-pilot framework, the only instrument with a calendar compatible with the back-half-of-2026 deliverable cycle. Tier 2 is a competitive tender we expect to win on the parallel-run audit evidence and the Tier-1 caseworker / specialist NPS; tender-document shaping with ΕΟΠΥΥ procurement begins in parallel. Tier 3 we welcome Performance Technologies or Cosmote as prime contractor with Prograde as the agentic-layer subcontractor — least political resistance, protects incumbent ΕΟΠΥΥ-IT relationships.

**PR and comms.** No press release at pilot signature, none during the parallel-run. One pre-briefed Kathimerini long-form on the day audit measurements are shared with the Governor, framed around start-of-therapy compression and specialist time recovery, pilot department chief quoted, Cohere Health + Salesforce Health Cloud Pre-Auth cited as the international comparators, Olive AI cited explicitly as the architectural counter-example. Union briefings (ΟΕΝΓΕ, ΕΙΝΑΠ, pharmacist association) in person ahead of any press contact — specialist copilot, never specialist replacement; caseworker copilot, never caseworker replacement. Patient-association briefings in parallel — asymmetric political amplifier on a start-of-therapy story. Brussels-facing: a posted AI Act conformity-assessment posture document on day one, citing the deterministic-eligibility + provenance split and the UWV-DPA precedent — pre-empts EDPS or Commission inquiry and gets ahead of the 2 December 2027 Annex III enforcement date. No per-specialist or per-caseworker productivity numbers without the Governor's written consent.
