# Business Plan

**Company (working title):** Sýmvoulos Copilot — a T-Life Capital portfolio venture building agentic inspection-report drafting tooling for the Σύμβουλος Εκπαίδευσης / Συντονιστής Εκπαιδευτικού Έργου (ΣΕΕ).

**Thesis.** Greek school inspection is not a methodology problem and it is not a content problem. It is a drafting problem. Each ΣΕΕ runs dozens of school visits per term and then spends the majority of available desk time turning observation notes, myschool indicators, and prior-year reports into a structured pedagogical-inspection document written against the ΙΕΠ-owned template and the relevant εγκύκλιοι. The advisor is the value-creating asset, not the typist. Sýmvoulos ships a drafting copilot that ingests visit notes, myschool snapshots, and the circular corpus, and produces a fully cited draft inside the ministry's template — signed and edited by the advisor, never autonomous. The product is the closest 1:1 analogue in Greek government to UK GDS Caddy and Redbox, and it is the cleanest pilot-to-procurement path in T-Life's Education portfolio.

**Architectural moat — the split that makes this defensible and shippable.** Three layers, kept separate by design. Layer one is a deterministic structuring engine that maps the ΣΕΕ's notes and the school's myschool record onto the ΙΕΠ inspection-report schema (sections, indicators, evidence slots). Layer two is an LLM drafting layer constrained by section-level templates that the ΣΕΕ community has been writing against since Π.Δ.79/2017 and the ΠΕΚΕΣ structure of 2018. Layer three is paragraph-level provenance: every claim in the draft links back either to a specific εγκύκλιος (with article-level citation), to a specific myschool indicator, or to a tagged span of the advisor's own notes. The advisor sees the trail and can disagree with any sentence in one click. This split is what allows us to ship an advisor-side drafting tool in 2026 under EU AI Act decision-support classification and have the conformity-assessment posture ready well before the Annex III enforcement date of 2 December 2027. The agent does not evaluate teachers. The advisor evaluates teachers. The agent drafts.

**Market and buyer.** The economic buyer is the Γενική Γραμματεία Πρωτοβάθμιας & Δευτεροβάθμιας Εκπαίδευσης at ΥΠΑΙΘ. The methodology owner and indispensable pilot co-signer is ΙΕΠ. The operational champion is a ΠΕΚΕΣ coordinator (Περιφερειακό Κέντρο Εκπαιδευτικού Σχεδιασμού) in Attica or Thessaloniki. The user inside the ministry is the Σύμβουλος Εκπαίδευσης / ΣΕΕ — roughly 750 ΣΕΕ posts country-wide and ~1,000 effective seats including ΠΕΚΕΣ coordinators and reviewers. The adjacent buyer is ΑΔΙΠΠΔΕ, which under the school self-evaluation regime introduced by Law 4823/2021 and its successor variations owns the meta-evaluation layer. For higher education the analogous body is ΕΘΑΑΕ — out of immediate scope but a year-three lateral move.

**Why now (the timing window).** Four facts converge on summer 2026. First, Greek Law 5299/2026 codified the national AI and data-governance regime — a single Greek statute to point at when procurement asks for the AI/data baseline. Second, EU AI Act Annex III enforcement for education evaluation was deferred to 2 December 2027 in the Omnibus deal of 7 May 2026, giving an eighteen-month runway to deploy under decision-support classification and prepare the conformity-assessment file. Third, the precedent base is mature: UK GDS i.AI's Caddy at Citizens Advice and DBT, Redbox at the Cabinet Office, DINUM's Albert at France Travail and France Services, Singapore's Pair and OGP-built drafting copilots across ministries. Ofsted (UK) and HMI (Scotland) are the natural international comparators for inspection-report drafting, and their inspector-productivity narratives are the public anchor. Fourth, the school self-evaluation cycle reformed under Law 4823/2021 has created a measurable, repeating workload pattern at ΠΕΚΕΣ level — there is now a calendar to attach a pilot to.

**Product.** A web copilot the ΣΕΕ opens after a school visit. The agent ingests the advisor's notes (typed or voice-memo dictated in Greek), the school's myschool snapshot for the relevant cycle, and the prior-year inspection report. It retrieves applicable εγκύκλιοι from the ΙΕΠ and ΥΠΑΙΘ corpus, drafts each section of the ΣΕΕ report against the ministry template, cites every claim inline at paragraph level, flags inconsistencies between the advisor's observations and the myschool indicators (and refuses to silently reconcile them), produces a side-by-side diff against any prior provisional draft, and hands a Word/PDF in the ministry's exact template ready for advisor review and signature. No autonomous submission. The advisor signs.

**Revenue model and pricing.** Direct contract with ΥΠΑΙΘ via the General Secretariat, with ΙΕΠ as methodology co-signer. Tier 1: €40–60k for a single-term proof of concept with 20 ΣΕΕ advisors in one ΠΕΚΕΣ (Attica or Thessaloniki), measured on reports-filed-on-time and median time-per-report. Tier 2: €200–300k year-one for a national ΠΕΚΕΣ rollout across all 13 regional centres at a per-seat SaaS-plus-implementation rate of roughly €350–450 per advisor per year. Tier 3: ministry-wide subscription extended to ΑΔΙΠΠΔΕ meta-evaluation drafting and to school self-evaluation reporting (Law 4823/2021 cycle), SLA-backed, mid-six-figure annual contract value.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider, model selection biased toward European-jurisdiction LLMs (Mistral via the France-Germany sovereign-AI track is the default reference). Marginal inference cost per report in the €0.20–0.50 range; structuring-engine cost is rounding error. Per-advisor ACV at scale is 15–30× variable cost. Gross margin target 75%+ after support and ministry-specific integration overhead with myschool.

**Capital plan and milestones.** Pre-seed €500k–€700k (T-Life Capital + one Greek strategic angel close to ΥΠΑΙΘ) to fund the founding team for nine months through the pilot. Milestones: (1) signed pilot LoI with one ΠΕΚΕΣ within 75 days; (2) single-term PoC delivered with quantitative report at month six; (3) Tier-2 national-ΠΕΚΕΣ contract signed at month nine. Seed round €2.0–3.0M at Tier-2 signing, used to staff a customer-success function for ΣΕΕ onboarding and to spin up the second product line (ΑΔΙΠΠΔΕ meta-evaluation drafting — adjacent buyer, same corpus, same moat).

**Team and hires.** Three founding hires: (1) technical founder with Greek NLP / RAG background, owns the structuring engine and the citation-enforcement layer; (2) ex-ΣΕΕ or retired school-advisor co-founder with an active ΠΕΚΕΣ network — credibility with the General Secretariat, owns the template specification and the methodology relationship with ΙΕΠ; (3) senior ML lead with Greek-NLP experience, owns the drafting layer. First three hires post-pilot: a Greek pedagogical-NER engineer, a customer-success lead with public-sector procurement scars, and a former ΥΠΑΙΘ secondee for ministry navigation.

**Risks.** (1) Union pushback — ΟΛΜΕ and ΔΟΕ are AI-skeptical; mitigated by the advisor-side framing (the agent never touches teacher evaluation; it drafts on behalf of the advisor, who is already the authorised evaluator). (2) AI Act re-classification — mitigated by the architectural split and a published conformity-assessment posture, with the 2 December 2027 deferral as the deployment window. (3) GRNet / ΕΔΥΤΕ substrate jealousy — mitigated by positioning as a desktop copilot, not a myschool replacement; we read myschool, never displace it. (4) "Just-another-template-tool" objection (the literal buyer objection logged in qualification) — mitigated by Tier-1 quantitative measurement of reports-filed-on-time and median time-per-report with ΠΕΚΕΣ-signed metrics, not demo theatre.

---

# Pitch Deck

## Slide 1 — Sýmvoulos Copilot
- T-Life Capital portfolio venture, Athens
- Inspection-report drafting copilot for the Σύμβουλος Εκπαίδευσης / ΣΕΕ
- Drafts the structured ΙΕΠ-template report with paragraph-level εγκύκλιος citations; advisor reviews, edits, signs
- Pilot-ready, single-term PoC inside one ΠΕΚΕΣ under απευθείας ανάθεση

## Slide 2 — Problem
- ΣΕΕ advisors run dozens of school visits per term and spend the majority of desk time writing reports against the ΙΕΠ template
- Notes + myschool indicators + prior-year report + applicable εγκύκλιοι have to be reconciled by hand
- ΠΕΚΕΣ structure (2018) and the school self-evaluation regime under Law 4823/2021 made the workload heavier, not lighter
- The bottleneck is the draft, not the visit
- Operational consequence: fewer classroom hours, late report submission, weaker meta-evaluation evidence for ΑΔΙΠΠΔΕ

## Slide 3 — Why Now
- Greek Law 5299/2026 sets the AI/data baseline — a single Greek statute to point at in procurement
- EU AI Act Annex III enforcement for education evaluation deferred to 2 December 2027 (Omnibus, 7 May 2026) — eighteen-month deployment window under decision-support classification
- UK GDS Caddy and Redbox, French DINUM Albert at France Travail, Singapore Pair/OGP — Caddy-pattern drafting copilots are now standard practice in OECD government
- Ofsted/HMI inspector-productivity narratives give the General Secretariat the international story it needs
- Law 4823/2021 self-evaluation cycle has a calendar — the pilot attaches to a real reporting deadline

## Slide 4 — Solution
- Three-layer split is the moat: deterministic structuring engine + LLM drafting + paragraph-level provenance
- The agent drafts; the advisor decides — the split defuses the regulatory and political risk in one architectural choice
- Paragraph-level citations to εγκύκλιοι, to myschool indicators, and to tagged spans of the advisor's own notes
- Inconsistency flags between observation and myschool data; agent never silently reconciles
- Output is a Word/PDF in the ΥΠΑΙΘ template, signed by the ΣΕΕ

## Slide 5 — Demo
- Live walkthrough on a synthetic primary-school visit in an Attica ΠΕΚΕΣ
- Advisor dictates ten minutes of post-visit notes in Greek; the agent drafts the full structured report
- Hover any sentence in the draft, see the citation: εγκύκλιος article, myschool indicator, or note span
- Inconsistency flag fires on a mismatch between observed practice and the school's self-evaluation declaration
- Diff view against the prior-year report
- Advisor edits, signs, exports

## Slide 6 — Market
- Greek primary market: ~750 ΣΕΕ posts plus ΠΕΚΕΣ coordinators and reviewers — call it 1,000 seats addressable across the ΥΠΑΙΘ network
- Adjacent product line: ΑΔΙΠΠΔΕ meta-evaluation drafting (same corpus, separate budget line)
- School self-evaluation cycle (Law 4823/2021): every school files; that output also benefits from drafting support
- Lateral expansion: ΕΘΑΑΕ-side higher-education quality-assurance drafting from year three (different vocabulary, same architecture)
- Long-term: replicable into Cyprus inspection regime with modest localisation

## Slide 7 — Traction
- Source idea documented in T-Life Capital education ministries-pack with composite 4.25
- Passed hostile qualification re-pass (May 2026) — strongest idea in the Education portfolio across reachability/procurement/political axes
- Founding ex-ΣΕΕ candidate identified with active ΠΕΚΕΣ network
- One Attica ΠΕΚΕΣ coordinator + one Thessaloniki ΠΕΚΕΣ coordinator on the warm-introduction list for July
- Pedagogical-corpus NER tuning corpus assembly begun

## Slide 8 — Business Model
- Tier 1 PoC: €40–60k, one term, one ΠΕΚΕΣ, ~20 advisors — απευθείας ανάθεση
- Tier 2 national ΠΕΚΕΣ rollout: €200–300k year-one
- Tier 3 ministry-wide subscription extended to ΑΔΙΠΠΔΕ and the Law 4823/2021 self-evaluation cycle: mid-six-figure ACV
- Per-seat SaaS-plus-implementation, ~€350–450 per advisor per year at scale

## Slide 9 — Competition & Moat
- No Greek SI ships an LLM-native drafting agent on the pedagogical-circular corpus
- Performance Technologies, Cosmote, Singular Logic run ministry plumbing but do not ship LLM-native drafting; we sit on top of their pipes
- GRNet/ΕΔΥΤΕ owns the educational network substrate (e-class, photodentro, myschool reads) — we are a desktop copilot for the advisor, not a substrate competitor, by design
- Moat: ΣΕΕ template + εγκύκλιος corpus + ΠΕΚΕΣ workflow vocabulary + paragraph-provenance architecture — three-to-five-year defensibility window
- Multinationals (UK/US/FR drafting vendors) cannot assemble this Greek corpus economically

## Slide 10 — Team
- Technical founder — Greek NLP / RAG engineering background
- Ex-ΣΕΕ co-founder — owns ΙΕΠ relationship and the template specification, brings ΠΕΚΕΣ credibility
- Senior ML lead — Greek-language drafting and retrieval-augmented generation
- Advisor bench: former General Secretary for Primary & Secondary Education; a ΠΕΚΕΣ coordinator who has run Law 4823/2021 self-evaluation cycles; a Greek-data-protection counsel for the AI Act conformity file

## Slide 11 — Ask
- €500k–€700k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through the Tier-2 contract signing
- Investor introductions sought: General Secretariat for Primary & Secondary Education, ΙΕΠ President's office, one Attica ΠΕΚΕΣ coordinator, ΑΔΙΠΠΔΕ Director

---

# Go-to-Market Plan

**Champion identification.** Two named primary champions: the Γενικός Γραμματέας Πρωτοβάθμιας & Δευτεροβάθμιας Εκπαίδευσης at ΥΠΑΙΘ (economic buyer, owns the Tier-1 budget line under απευθείας ανάθεση and the political narrative around inspector productivity) and the President of ΙΕΠ (methodology owner — without ΙΕΠ co-sign the pilot does not survive the first week of internal review). Secondary champion: the Minister of Education's chief of staff, who controls the calendar slot through which the primary champions are reachable in week one. Operational champion: a ΠΕΚΕΣ coordinator in Attica or Thessaloniki — a 20+ year career educator who personally feels the report-drafting burden, has the local authority to designate the 20 pilot ΣΕΕ advisors, and is on the warm-introduction list before 1 July 2026 per the qualification next-30-days.

**First-meeting choreography.** Forty-five minutes with the General Secretary, ex-ΣΕΕ co-founder physically in the room, technical founder for the architecture slide only. Open with the operational diagnosis (the advisor spends desk-time drafting, not visiting classrooms — and Ofsted/HMI inspector-productivity narratives are the international frame), not the product. Spend ten minutes on the deterministic-structuring + LLM-drafting + paragraph-provenance split — this is the only architectural moment the General Secretary needs to internalise, because it is the answer to every objection from union, ΙΕΠ, and Brussels. Spend ten minutes on the pilot design: name the ΠΕΚΕΣ, name the 20 advisor seats, name the single-term window timed to deliver evidence inside the Law 4823/2021 self-evaluation reporting cycle, name a quantitative measurement plan (reports-filed-on-time and median time-per-report) signed off by the ΠΕΚΕΣ coordinator. Close on the pilot offer below. Do not ask for a decision in the room. Ask for one follow-up: a 30-minute working session with ΙΕΠ leadership to confirm methodology co-sign.

**Pilot offer (the buyer hook).** A single-term, 20-advisor, one-ΠΕΚΕΣ PoC under απευθείας ανάθεση at €40–60k, with two pre-agreed quantitative measures: (a) percentage of inspection reports filed on time during the term against the prior-year baseline for the same ΠΕΚΕΣ, (b) median time-per-report measured by the agent's own session telemetry and corroborated by ΣΕΕ self-report. Qualitative measures: ΙΕΠ scoring of citation precision on a stratified random sample of drafts. Every report is signed by the ΣΕΕ as it would be in production; no autonomous submission. Output ownership sits with ΥΠΑΙΘ; publication or withholding of the PoC report is at the General Secretary's discretion. If the agent fails on citation precision below a pre-agreed threshold or fails to improve the reports-filed-on-time metric, we tear up the invoice. International reference numbers in the room: Caddy at Citizens Advice and Redbox at the Cabinet Office (UK GDS), Albert at France Travail (DINUM), Pair at Singapore MOE — these are the comparator deployments the General Secretary will be asked about by the Minister and by Brussels.

**Expansion path.** PoC pass → Tier-2 national-ΠΕΚΕΣ rollout at €200–300k year-one across the 13 regional centres, per-seat ACV thereafter. Concurrent product expansion to ΑΔΙΠΠΔΕ meta-evaluation drafting (adjacent buyer, same εγκύκλιος corpus, separate budget line) — pitched to the ΑΔΙΠΠΔΕ Director in month six, contracted in month twelve. School self-evaluation drafting under Law 4823/2021 is the year-two land-and-expand into the school principal as a secondary user — same product, lighter UI, same provenance layer. Year three: lateral move to ΕΘΑΑΕ-side higher-education quality-assurance drafting with a higher-education vocabulary pack. Year three+: replicable into Cyprus's inspection regime with modest localisation.

**Procurement vehicle.** Tier 1 is a direct ΥΠΑΙΘ contract under the απευθείας ανάθεση threshold — the standard procurement instrument for a single-term, sub-€60k pedagogical PoC, and the only instrument with a calendar compatible with starting in autumn 2026 inside the Law 4823/2021 cycle. Tier 2 is a competitive tender we expect to win on the PoC's quantitative evidence and ΠΕΚΕΣ-signed ΣΕΕ NPS; we begin tender-document shaping with ΥΠΑΙΘ procurement in parallel with the PoC. We will accept and welcome a Greek SI (Performance Technologies, Singular Logic, Cosmote) as a prime contractor on Tier 3, with Sýmvoulos as the agentic-layer subcontractor — this is the path of least political resistance and protects the incumbent ministry-plumbing relationships. We do not pursue an open ΕΣΗΔΗΣ tender against GRNet on any substrate question; our procurement story stays on the desktop side of the advisor.

**PR and comms.** No press release at PoC signature, none during the term. One pre-briefed Kathimerini long-form on the day the quantitative PoC report is shared with the General Secretary, framed around advisor productivity and the return of classroom hours to the inspection role, with the ΠΕΚΕΣ coordinator quoted and UK Caddy/Redbox, French Albert, and Singapore Pair as the international comparator set. Ofsted/HMI inspector-productivity work cited as the inspection-specific narrative anchor. Greek union briefings (ΟΛΜΕ, ΔΟΕ) held in person ahead of any press contact — the message is advisor-side drafting copilot, never teacher evaluation. Brussels-facing comms: a posted AI Act conformity-assessment posture document on day one citing the architectural split and the decision-support classification under the Annex III deferral to 2 December 2027 — pre-empts any EDPS or Commission inquiry. We do not publish per-advisor productivity numbers without the General Secretary's written consent; the release calendar is the General Secretary's.
