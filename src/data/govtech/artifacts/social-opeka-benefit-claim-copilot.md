# Business Plan

**Company (working title):** Pronoia Copilot — a T-Life Capital portfolio venture building a Greek-language benefit-decision drafting copilot for caseworkers at Οργανισμός Προνοιακών Επιδομάτων (OPA — Organisation for Welfare Benefits, the 2026 successor to the former ΟΠΕΚΑ).

**Thesis.** Greek welfare benefits are not failing on rules or volume. They are failing on drafting. An OPA caseworker handling 40–80 active claims spends most of every shift cross-checking EFKA contribution history, AADE income (E1/E9) and Interior Μητρώο Πολιτών composition against a household's declared status; selecting the correct ministerial decision (Κοινή Υπουργική Απόφαση — KYA) and income ceiling; and writing a Greek justification letter whose reasoning will survive an ενδικοφανής (administrative appeal). When appeals overturn an OPA decision, the fault is almost always the letter, not the rule. Pronoia Copilot drafts the letter and renders the eligibility verdict with paragraph-level KYA citations, leaving signature and adverse-decision authority with the named caseworker. Wedge benefit: επίδομα παιδιού A21 — the Feb-Mar 2026 application window has just closed and the post-window backlog is the Governor's most visible operational headache.

**Architectural moat.** The eligibility verdict runs on a deterministic rules engine, never an LLM. Letter drafting runs on an LLM bounded by KYA templates and citation enforcement. Provenance is captured at clause level: every income ceiling and household test links to the exact ΦΕΚ-published KYA article; every figure links to the AADE/EFKA/Interior record. The three-layer split — deterministic-rules + LLM-drafting + line-level provenance — is the architectural lesson the Netherlands UWV 2023 DPA enforcement wrote into European practice. It converts EU AI Act Annex III exposure into a decision-support classification and gives the OPA Governor a clean answer to «Αν το γράμμα είναι λάθος και πάει σε ενδικοφανή, ποιος φταίει — εμείς ή το εργαλείο σας;» — the caseworker signs, the rules engine is auditable line by line, the LLM never touches an eligibility determination.

**Market and buyer.** Economic buyer: the OPA Governor. Secondary: the General Secretary of Social Cohesion & Family at ΥΕΚΑ (Υπουργείο Κοινωνικής Συνοχής & Οικογένειας). User: the OPA caseworker (υπάλληλος προνοιακών επιδομάτων) — 40–80 active claims, drafting load measured in hours per shift. Welfare-benefit volume runs to millions of decisions per year (A21 child benefit alone covers 800,000+ family records); addressable seat count is in the low four-figures across central and regional directorates. The political cost of post-window OPA backlogs is measured in weekly parliamentary questions; the Governor's incentive is to compress days-to-decision without an AI-on-welfare incident in Kathimerini.

**Why now.** Four dated facts converge on May 2026. First, ΟΠΕΚΑ was renamed and restructured into OPA in the 2026 reorganisation; the new Governor needs an early-tenure operational win and the contract-template re-papering is the cleanest moment to slot in a copilot procurement. Second, Greek Law 5299/2026 has set the domestic public-sector AI frame and EU AI Act Annex III enforcement was deferred to 2 December 2027 in the Digital Omnibus deal (7 May 2026) — clean 18-month deployment window. Third, the precedent stack is fresh: HMRC's internal copilot rolled to 28,000 staff in April 2026; UK i.AI Caddy reached 40+ Citizens Advice offices in 2025 with an SCVO RCT reporting 80% caseworker-approval and drafting time halved; France's Albert at France Services was paused January 2026 and the current French GA is Assistant IA at 10,000 civil servants — an unimpeachable comparator set. Fourth, the Netherlands UWV 2023 DPA action is the welfare-AI cautionary tale every DPO knows, and our split is the textbook answer.

**Product.** A web copilot embedded next to the OPA case-management workflow. The agent pulls the claim record and applicant identity from Μητρώο Πολιτών; cross-queries EFKA, AADE (E1/E9), and Interior (household composition) under formal L.4624/2019 inter-agency agreements; applies the relevant KYA via the deterministic rules engine to produce a structured eligibility verdict; drafts the Greek-language decision letter in caseworker voice with paragraph-level KYA citations and an audit-trail panel showing which data fields triggered each clause; flags conflicts (AADE income inconsistent with declared household status); and hands a signed package to the caseworker — no autonomous submission, ever. A21 is the wedge; KEA (Ελάχιστο Εγγυημένο Εισόδημα), επίδομα στέγασης and the disability income supplement are the immediate adjacencies.

**Revenue model and pricing.** Direct contract with OPA via απευθείας ανάθεση. Tier 1: €55k, 10-caseworker, 8-week pilot in one regional directorate, A21 only, three locked KPIs (days-to-decision 90→30, draft-time halved, appeal-overturn flat). Tier 2: €280–480k year-one across three directorates and two benefit families on per-seat SaaS-plus-implementation (≈€2,800/caseworker/year). Tier 3: national OPA subscription, SLA-backed, €1.1–1.6M ACV at full deployment.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider with a contractual path to the Mistral/SAP infrastructure of the France-Germany 2026-2030 sovereign-AI agreement. Marginal inference cost per drafted decision €0.35–0.70; rules-engine cost rounding error. Per-caseworker ACV ≈12–18× variable cost. Gross margin target 72%+ after support, KYA-corpus maintenance and OPA integration overhead.

**Capital plan and milestones.** Pre-seed €650k–€800k (T-Life Capital + one Greek strategic angel) for nine months through pilot and Tier-2 signing. Milestones: (1) signed Tier-1 LoI within 60 days; (2) parallel-run pilot with caseworker-NPS and KPI report at month four; (3) Tier-2 contract signed by month nine. Seed €2.8–3.5M at Tier-2 signing, used to staff customer-success, expand to KEA + disability supplement, and file the AI Act conformity-assessment package ahead of 2 December 2027 enforcement.

**Team and hires.** Three founding hires. Founder #1: ex-OPEKA/OPA caseworker or Greek public-administration lawyer — owns rules-engine specification and Governor relationship. Founder #2: applied-ML engineer with Greek-NLP and retrieval-augmented-drafting experience — owns the LLM layer and the citation-enforcement module. Founder #3: technical lead with Greek legal-tech and ΦΕΚ ingestion background — owns the deterministic rules engine, provenance graph, and OPA/EFKA/AADE integrations. Post-pilot hires: a former OPA appeals-directorate lawyer as design partner, a Greek-legal-NER engineer, and a customer-success lead with EFKA/AADE rollout scars.

**Risks.** (1) EU AI Act re-classification — mitigated by the deterministic-rules split, a day-one published conformity-assessment posture, and the 2 December 2027 deferral. (2) Politically damaging draft — mitigated by mandatory caseworker signature, calibrated per-clause confidence scores, and the UWV-DPA counter-example as the public-facing answer. (3) Tier-1 SI absorption (Netcompany/Intrasoft on OPA case-management) — mitigated by Governor-level air cover on a productivity-layer carve-out and an explicit Tier-3 subcontractor path. (4) Inter-agency clearance under L.4624/2019 is the real critical path — mitigated by scoping Tier-1 to A21 (already cross-pulled). (5) Cabinet reshuffle removes the Governor — mitigated by parallel sponsorship into the GS for Social Cohesion at ΥΕΚΑ.

---

# Pitch Deck

## Slide 1 — Pronoia Copilot
- T-Life Capital portfolio venture, Athens
- OPA benefit-claim drafting copilot for caseworkers
- Drafts the eligibility verdict and the Greek-language decision letter with paragraph-level KYA citations; the caseworker reviews, edits, signs
- Wedge benefit: επίδομα παιδιού A21; 10-caseworker pilot, 8 weeks, under €60k απευθείας ανάθεση

## Slide 2 — Problem
- OPA caseworkers carry 40–80 active claims and spend the bulk of every shift drafting boilerplate decision letters
- Manual cross-check across EFKA / AADE / Interior Μητρώο Πολιτών on every claim
- Appeal overturns at ενδικοφανής are almost always blamed on poor letter reasoning, not the underlying rule
- Days-to-decision on A21 runs to 90+ post-window; the parliamentary question cycle is weekly
- KYAs change yearly with new income ceilings and household-composition rules

## Slide 3 — Why Now
- ΟΠΕΚΑ → OPA reorganisation in 2026 is the procurement re-papering window — slot the copilot in
- Greek Law 5299/2026 sets the domestic public-sector AI frame; EU AI Act Annex III enforcement deferred to 2 December 2027 (Omnibus, 7 May 2026) — clean 18-month deployment runway
- HMRC's internal copilot rolled to 28,000 staff in April 2026; UK i.AI Caddy at 40+ Citizens Advice offices with an SCVO 2025 RCT reporting 80% caseworker approval and drafting time halved
- France's Albert at France Services paused January 2026; current French GA is Assistant IA at 10,000 civil servants — the comparator set is unimpeachable
- France-Germany sovereign-AI agreement (Mistral/SAP) for 2026-2030 puts public-sector LLM infrastructure on a continental footing
- Netherlands UWV 2023 DPA enforcement is the welfare-AI counter-example — our architecture is the answer

## Slide 4 — Solution
- Three-layer split is the moat: deterministic rules engine for eligibility + LLM for letter drafting + line-level provenance
- The split defuses regulatory and political risk in one architectural choice — and it is the post-UWV architecture European DPAs are now writing into guidance
- Paragraph-level citations to ΦΕΚ-published KYAs; every figure in the eligibility table hyperlinks to the AADE / EFKA / Interior record
- Calibrated per-clause confidence scores; conflicts (e.g. AADE income vs. declared household composition) flagged; the caseworker signs every output

## Slide 5 — Demo
- Live walkthrough on a synthetic A21 case with a contested household-composition flag
- Side-by-side: agent-drafted decision letter vs. blank caseworker template, with the rules-engine verdict identical in both
- Hover any sentence in the letter, see the citation to the KYA article and the data field that triggered it
- Conflict-flag panel showing the AADE/Interior discrepancy and the suggested next-step
- Caseworker edit + sign + file to OPA case system

## Slide 6 — Market & Buyer
- Greek primary market: OPA, >800k A21 family records as the wedge, low-four-figure caseworker seat count across central + regional directorates
- Economic buyer: OPA Governor (απευθείας ανάθεση authority on innovation-pilot tier)
- Secondary buyer: GS Social Cohesion & Family at ΥΕΚΑ
- Adjacent products: KEA (Ελάχιστο Εγγυημένο Εισόδημα), επίδομα στέγασης, disability income supplement — same rules-engine pattern, same caseworker base
- Lateral expansion: EFKA pension drafting (T-Life portfolio overlap), ΔΥΠΑ jobseeker correspondence, Migration & Asylum decision-drafting

## Slide 7 — Architecture / Moat
- Deterministic rules engine — every KYA income ceiling and household-composition test encoded as auditable code; never an LLM call
- LLM drafting layer — Greek-NLP fine-tuned on the OPA letter corpus, bounded by KYA templates and citation enforcement
- Provenance graph — every clause linked to a ΦΕΚ article, every figure linked to a source record
- Greek-language moat — KYA citation discipline + Greek admin voice; multinational copilots are structurally weaker here
- DPIA + AI Act traceability log designed in from day one; conformity-assessment file ready before the 2 December 2027 enforcement date

## Slide 8 — Business Model
- Tier 1 pilot: €55k, 8 weeks, 10 caseworkers, one regional directorate, A21 only — απευθείας ανάθεση
- Tier 2 rollout: €280–480k year-one across three directorates and two benefit families — per-seat SaaS-plus-implementation
- Tier 3 national: €1.1–1.6M ACV at full OPA seat deployment, SLA-backed
- ≈€2,800 per caseworker per year at scale; 72%+ gross margin

## Slide 9 — Competition
- No multinational ships a Greek-language KYA-citing benefit-letter drafter — corpus assembly is uneconomic for them
- Netcompany / Intrasoft run the OPA case-management plumbing on Tier-1 SI contracts but do not ship LLM-native drafting; we sit on top of their pipes and welcome them as Tier 3 prime
- France CAF and UK DWP have advisor copilots — neither speaks Greek admin language
- Caddy at Citizens Advice (40+ offices, 80% approval) is the closest comparator; Assistant IA at 10,000 French civil servants is the scale comparator
- Architectural moat post-UWV: deterministic rules + LLM drafting + line-level provenance is what European DPAs now expect

## Slide 10 — Team
- Founder #1 — ex-OPEKA/OPA caseworker or Greek public-administration lawyer; owns rules-engine specification + Governor relationship
- Founder #2 — applied-ML lead with Greek-NLP and retrieval-augmented-drafting experience
- Founder #3 — technical lead, Greek legal-tech and ΦΕΚ ingestion background; owns provenance graph and OPA/EFKA/AADE integrations
- Advisor bench: former GS Social Cohesion, OPA appeals-directorate lawyer, a Greek DPO

## Slide 11 — Roadmap
- Month 0–2: 60-day pilot LoI, KYA corpus ingestion for A21, OPA case-system sandbox integration
- Month 2–6: 10-caseworker parallel-run, KPI report (days-to-decision 90→30, draft-time halved, appeal-overturn flat)
- Month 6–9: Tier-2 contract, expand to KEA + στέγασης, three directorates
- Month 9–18: national OPA Tier-3 negotiation, AI Act conformity-assessment file submitted
- Month 18–24: adjacent ministry expansion (ΔΥΠΑ, Migration & Asylum)

## Slide 12 — The Ask
- €650k–€800k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through the Tier-2 signing
- Investor introductions sought: OPA Governor's office (warm intro via Social Cohesion advisor), ΥΕΚΑ chief of staff, a named Greek DPO with public-sector practice, the OPA Tier-1 SI primes (Netcompany/Intrasoft) for the Tier-3 subcontractor path

---

# Go-to-Market Plan

**Champion identification.** Primary economic buyer: the OPA Governor (Διοικητής ΟΠΑ), who owns the απευθείας ανάθεση signature at the innovation-pilot tier, the post-window A21 backlog, and the early-tenure operational-win incentive — three converging reasons to take a 45-minute meeting in May–June 2026. Policy buyer: the General Secretary for Social Cohesion & Family at ΥΕΚΑ, owner of the welfare-throughput KPI. Regional operational champion: the director of one OPA regional directorate, the natural pilot site. Warm-intro route: a senior advisor at ΥΕΚΑ Social Cohesion.

**30-60-90 day plan.** Days 0–30 — book the 45-minute Governor meeting through the Social Cohesion advisor warm intro. In parallel, lock the candidate regional directorate (selection criterion: post-window A21 queue length), recruit one named ex-OPEKA/OPA caseworker as founding advisor, and have a Greek public-sector DPO in writing on the engagement letter. Open KYA-corpus ingestion on the A21 ruleset (ΦΕΚ-published KYAs, yearly income-ceiling table, household-composition matrix). Days 30–60 — first Governor meeting; deliver the LoI on the 10-caseworker, 8-week, €55k απευθείας ανάθεση pilot scoped to A21 in one directorate with three locked KPIs (days-to-decision 90→30, draft-time halved, appeal-overturn flat). Ten-minute architecture moment: deterministic rules + LLM drafting + line-level provenance — cite UWV 2023, Caddy 80% / SCVO 2025 RCT, HMRC 28,000-staff April 2026, Assistant IA 10,000 civil servants. Days 60–90 — sign LoI, integrate to OPA case-system sandbox under an L.4624/2019 data-sharing extension, ship the first parallel-run cohort.

**Pricing tiers.** Tier 1 — €55k, 8 weeks, 10 caseworkers, one directorate, A21 only, απευθείας ανάθεση. Three KPIs in writing, signed off by an OPA-chosen legal-audit firm. Miss arithmetic or citation precision, we tear up the invoice. Tier 2 — €280–480k year-one across three directorates and two benefit families (A21 + KEA), per-seat SaaS-plus-implementation at ≈€2,800/caseworker/year. Tier 3 — €1.1–1.6M ACV national OPA subscription, SLA-backed, Netcompany or Intrasoft welcomed as Tier-1 SI prime with Pronoia as agentic-layer subcontractor.

**Lead-gen.** No outbound press. Three private vectors: (1) the Social Cohesion advisor warm intro into the Governor's calendar — highest-leverage channel, named in the qualification memo's next-30-days plan; (2) a ΥΕΚΑ chief-of-staff briefing framed around the HMRC + Caddy + Assistant IA comparator set; (3) a one-page architecture brief shared bilaterally with one Greek public-sector DPO — pre-empts any Aρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα objection by getting the deterministic-rules + provenance split into circulation early.

**Success metrics.** Three pilot KPIs in writing, signed off by an OPA-chosen audit firm: median days-to-decision on A21 from 90 to 30; draft-to-issue median halved (today multi-hour per case); appeal-overturn rate held flat or improved (the critical defensive metric — if appeals worsen we have built a liability, not a productivity tool). Adoption KPI: per-caseworker accept-without-edit rate above 60% by week six, calibrated against the Caddy SCVO 80% benchmark. Qualitative KPI: caseworker-NPS ≥+40, surfaced through individual 30-minute interviews owned by the founding advisor, not a vendor survey.

**Expansion path.** Pilot pass → Tier-2 three-directorate, two-benefit-family rollout (A21 + KEA) at €280–480k year-one. Concurrent product expansion to OPA appeals-directorate drafting (adjacent OPA buyer, separate budget line, same KYA corpus). National OPA Tier-3 from year two. Lateral expansion year three: ΔΥΠΑ jobseeker correspondence (France Travail / Albert precedent), Migration & Asylum decision drafting on Alkyoni (UK Caddy + Switzerland SEM precedents), and EFKA pension drafting (T-Life portfolio synergy with Sintaxis Copilot) — same Greek-legal-corpus moat, shared rules-engine and provenance infrastructure.

**Defensive moat vs incumbents.** Against multinationals (Microsoft, Salesforce, Palantir, IBM): corpus assembly for a 1k–4k caseworker market is uneconomic for them; the Greek admin-voice fine-tune and ΦΕΚ ingestion pipeline are real engineering moats. Against Tier-1 Greek SIs (Netcompany, Intrasoft, Performance Technologies): we sit on top of their case-management plumbing as productivity layer, never replacement, and proactively offer them the Tier-3 prime seat with Pronoia as agentic-layer subcontractor — the only path the OPA procurement office will fast-track. Against future imitators: audit-firm relationship and OPA-issued caseworker-NPS data become exclusive moats by year two; the 18-month head-start on KYA corpus engineering and the deterministic-rules library compound with every yearly KYA amendment cycle. Against the regulator: the post-UWV deterministic-rules + LLM-drafting + line-level provenance architecture is what European DPAs now expect; our DPIA and AI Act traceability log are designed in from day one; the 2 December 2027 Annex III deferral gives a clean runway to file the conformity-assessment package before enforcement.
