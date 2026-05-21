# Business Plan

**Company (working title):** Sintaxis Copilot — a T-Life Capital portfolio venture building agentic drafting tooling for EFKA caseworkers.

**Thesis.** Greece's pension-calculation backlog is not a labour-supply problem and it is not a data-availability problem. It is a drafting-and-reconciliation problem: every case requires a caseworker to reconcile fragmented contribution history across pre-2017 funds (IKA, OAEE, OGA, NAT, public-sector funds), apply the correct transitional regime under Law 4387/2016 and its amendments, and produce a Greek-language justification memo with paragraph-level citations. The bottleneck is the memo, not the arithmetic. Sintaxis ships a copilot that drafts the memo and renders the calculation table, while leaving every signature and every adverse-decision authority with the named EFKA caseworker.

**Architectural moat — the split that makes this defensible and shippable.** The arithmetic runs on a deterministic rules engine, not an LLM. The drafting runs on an LLM, bounded by templates and citation enforcement. Provenance is captured at the line level: every figure in the table links back to a specific contribution record, every paragraph in the memo links back to a specific law article. This three-layer split — deterministic-arithmetic + LLM-drafting + line-level provenance — is the entire pitch. It is the architectural lesson the Netherlands DPA wrote into European law when it sanctioned UWV in 2023 for an unlawful fraud algorithm: keep the consequential decision logic deterministic and auditable, keep the LLM on language and retrieval, and keep a named human in the loop on every output. The split converts EU AI Act high-risk exposure into a decision-support classification, neutralises the "AI got the pension wrong" parliamentary attack, and carves an engineering surface where a Greek-focused team can outbuild any multinational. The rules engine is auditable line by line by an actuary; the LLM never touches a number that lands in a decision.

**Market and buyer.** The economic buyer is the EFKA Governor. The secondary buyer is the General Secretary for Social Insurance at the Ministry of Labour and Social Security. The user-inside-the-ministry is the caseworker (υπάλληλος ασφαλιστικού φορέα) at a regional pension directorate. Backlog volumes are in the hundreds of thousands of pending decisions; wait times run 18–36 months; the political cost of the backlog is measured weekly in parliamentary questions. Greek pension delays are a top-three grievance in every Eurobarometer-Greece cut. The Governor's career incentive — visible on the calendar this summer — is to compress wait times without exposing the agency to an AI-on-pensions incident before the August 2026 RRF milestone on EFKA modernisation.

**Why now (the timing window).** Four facts converge on summer 2026. First, the EFKA modernisation milestone under Greece's Recovery-and-Resilience Plan is due August 2026; the Governor and the General Secretary need a deliverable that demonstrates motion. Second, the EU AI Act Annex III enforcement date was deferred to 2 December 2027 in the Omnibus deal struck on 7 May 2026, giving us a clean eighteen-month runway to deploy under the current decision-support classification and have the conformity-assessment posture ready well before the new date. Third, the precedent base is now mature: HMRC rolled out an internal copilot to 28,000 staff in April 2026; the UK's Caddy is operational at Citizens Advice with an 80% response-approval rate in the SCVO 2025 randomised controlled trial; France's Assistant IA is in production for 10,000 French civil servants after the Albert generalisation at France Services was paused in January 2026; the France-Germany sovereign-AI agreement signed for 2026-2030 (Mistral and SAP at the centre) puts public-sector LLM infrastructure on a continental footing. Fourth, the Netherlands UWV 2023 DPA enforcement action gives us the textbook architectural counter-example to point at when sceptics raise the welfare-AI horror stories — and our architecture is the answer to it.

**Product.** A web copilot embedded next to the EFKA back-office workflow. The agent pulls AMKA and full contribution timeline from EFKA and pre-merger fund archives, classifies the case (old-age, disability bridge, survivor, transitional), selects the applicable legal regime with citations, computes the deterministic calculation table via the rules engine, drafts the Greek-language justification memo with paragraph-level citations to law articles and to specific contribution records, flags every judgement-call assumption, produces a side-by-side diff against any prior provisional calculation, and hands a signed package to the caseworker — no autonomous submission, ever.

**Revenue model and pricing.** Direct contract with EFKA via the Ministry of Labour. Tier 1: €45–60k for an eight-week 200-case parallel-run pilot in one regional directorate with an actuarial-audit firm of EFKA's choice scoring agent-drafted vs. caseworker-drafted output side by side. Tier 2: €250–500k year-one rollout across three to five directorates on a per-seat SaaS-plus-implementation model (≈€2.4–3.6k per caseworker per year). Tier 3: national subscription with SLA-backed throughput targets, mid-six-figure to low-seven-figure annual contract value.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider, with a contractual path to the Mistral/SAP infrastructure that the France-Germany agreement is standing up through 2030. Marginal inference cost per case in the €0.40–0.80 range at current sovereign-LLM pricing; rules-engine cost is rounding error. Per-caseworker ACV at scale 10–25× variable cost. Gross margin target 70%+ after support and EFKA-specific integration overhead.

**Capital plan and milestones.** Pre-seed €600k–€800k (T-Life Capital + one Greek strategic angel) to fund the founding team for nine months through the pilot. Milestones: (1) signed pilot LoI within 90 days; (2) parallel-run pilot complete with audit report at month six; (3) Tier-2 contract signed at month nine. Seed round €2.5–3.5M at the Tier-2 signing, used to staff a customer-success function and a second product line (the EFKA Pension-Appeal Response Drafting Agent — adjacent buyer, same moat).

**Team and hires.** Three founding hires: (1) technical founder with Greek legal-tech background, owns the rules engine and the citation-enforcement layer; (2) ex-EFKA actuary as co-founder — credibility with the Governor, owns the rules-engine specification and the actuarial-audit relationship; (3) senior ML lead with Greek-NLP experience, owns the drafting layer. First three hires post-pilot: a former EFKA caseworker as design partner, a Greek-legal-NER engineer, and a customer-success lead with public-sector procurement scars.

**Risks.** (1) EU AI Act re-classification — mitigated by the deterministic-arithmetic split and a published conformity-assessment posture, with the December 2027 deferral giving a clean window to deploy and prepare the file. (2) Political incident from a rubber-stamped bad draft — mitigated by calibrated per-line confidence scores, mandatory caseworker signature on every output, and the UWV-DPA architectural counter-example as the public-facing answer. (3) Performance Technologies and Cosmote sit inside EFKA on managed-services contracts; positioning is pilot partner on an agentic layer they cannot ship, not displacement. (4) Union pushback on "AI and pension in the same sentence" — mitigated by framing as caseworker productivity rather than caseworker replacement, with the actuarial-audit firm as the trusted third party.

---

# Pitch Deck

## Slide 1 — Sintaxis Copilot
- T-Life Capital portfolio venture, Athens
- EFKA pension-calculation copilot for caseworkers
- Drafts the calculation with full Greek-law provenance; the caseworker reviews, edits, and signs
- Pilot-ready, eight weeks to first signed parallel-run

## Slide 2 — Problem
- 18–36 months from application to final pension decision
- Multi-year backlog is the parliamentary attack line of every news cycle
- Each case: reconcile pre-2017 funds (IKA, OAEE, OGA, NAT, public-sector), apply transitional law, compute pensionable earnings, assemble a justification memo
- The bottleneck is the memo and the reconciliation, not the arithmetic
- Top-three Eurobarometer-Greece grievance, every cut

## Slide 3 — Why Now
- EFKA modernisation milestone under the Greek Recovery-and-Resilience Plan falls in August 2026 — the Governor needs a visible deliverable
- HMRC rolled a copilot to 28,000 staff in April 2026; UK Caddy at Citizens Advice is operational with 80% response-approval (SCVO 2025 RCT); France Assistant IA is in production for 10,000 civil servants
- France-Germany sovereign-AI agreement (Mistral/SAP) for 2026-2030 puts public-sector LLM infrastructure on a continental footing — Greece plugs in
- EU AI Act Annex III enforcement deferred to 2 December 2027 (Omnibus, 7 May 2026) — clean eighteen-month deployment window
- Netherlands UWV 2023 DPA action is the architectural counter-example we point at — our split is the answer

## Slide 4 — Solution
- Three-layer split is the moat: deterministic rules engine for arithmetic + LLM for drafting + line-level provenance
- The split defuses the regulatory and political risk in one architectural choice — and it is the lesson Dutch DPA enforcement wrote into European practice
- Paragraph-level citations to Law 4387/2016 and to contribution records; every figure hyperlinks to a contribution row
- Calibrated per-line-item confidence scores; the caseworker signs

## Slide 5 — Demo
- Live walkthrough on a synthetic case with three pre-merger funds (IKA + OAEE + public-sector)
- Side-by-side: agent-drafted memo vs. blank caseworker draft, with the rules-engine table identical in both
- Hover any sentence in the memo, see the citation to the contribution row or the law article
- Diff view against a prior provisional calculation
- Caseworker edit + sign

## Slide 6 — Market
- Greek primary market: EFKA, ≈hundreds of thousands of pending decisions, ≈4,000–5,000 caseworker seats addressable
- Adjacent product line: EFKA appeals-directorate drafting agent (same moat, separate budget line)
- Lateral expansion: ΣΕΠΕ (Spain's Herramienta Lucha contra el Fraude under the Spanish Strategic Labour Inspection Plan 2025-2027 is the direct precedent), ΔΥΠΑ, OPEKA — same Greek-legal-corpus moat
- Long-term: replicable into Cyprus social insurance with modest localisation

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.55, passed hostile qualification re-pass (May 2026)
- Founding actuary candidate identified (ex-EFKA, 12+ years on transitional-law cases)
- Two regional pension directorates expressing pilot interest under NDA
- Greek-legal-NER tuning corpus assembly begun

## Slide 8 — Business Model
- Tier 1 pilot: €45–60k, eight weeks, one regional directorate
- Tier 2 rollout: €250–500k year-one across three to five directorates
- Tier 3 national subscription: SLA-backed, mid-six-figure to low-seven-figure ACV
- Per-seat SaaS-plus-implementation, ≈€2.4–3.6k per caseworker per year at scale

## Slide 9 — Competition & Moat
- No multinational ships a Greek pension-law copilot — corpus assembly is uneconomic for them
- Performance Technologies and Cosmote run the EFKA back-office plumbing but do not ship LLM-native drafting; we sit on top of their pipes
- Moat: Greek legal NER + fund-specific terminology + ΣτΕ jurisprudence + actuarial-audit relationships + three-to-five-year defensibility window
- Architectural moat: deterministic rules engine + LLM drafting + line-level provenance — the post-UWV architecture European regulators are now expecting

## Slide 10 — Team
- Technical founder — Greek legal-tech engineering background
- Ex-EFKA actuary co-founder — owns rules-engine specification and Governor credibility
- Senior ML lead — Greek-NLP and retrieval-augmented drafting
- Advisor bench: former General Secretary for Social Insurance, actuarial-audit-firm partner

## Slide 11 — Ask
- €600k–€800k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through the Tier-2 signing
- Investor introductions sought: EFKA Governor's office, Ministry of Labour chief of staff, named actuarial-audit firm

---

# Go-to-Market Plan

**Champion identification.** Two named primary champions: the EFKA Governor (economic buyer, career incentive to compress backlog without an AI-on-pensions incident, and a personal stake in the August 2026 RRF milestone) and the General Secretary for Social Insurance at the Ministry of Labour (policy buyer, owns the Recovery-and-Resilience commitments on pension modernisation). Secondary champion: the Minister of Labour's chief of staff, the audience of this memo, who controls the calendar slot through which the primary champions are reachable in week one. Operational champion at the regional level: the director of one pilot pension directorate — typically a 25-year career official who personally feels the backlog as a daily reputational burden.

**First-meeting choreography.** Forty-five minutes with the Governor, ex-EFKA actuary co-founder physically in the room, technical founder for the architecture slide only. Open with the political diagnosis (the backlog is the attack line, not the headcount), not the product. Spend ten minutes on the deterministic-arithmetic + LLM-drafting + line-level-provenance split — this is the only architectural moment the Governor needs to internalise, because it is the answer to every objection that follows. Cite the UWV 2023 DPA action explicitly: our architecture is the post-UWV architecture European supervisors are now writing into guidance. Spend ten minutes on the actuarial-audit posture: name a candidate audit firm, name a candidate regional directorate, name a candidate eight-week window timed to deliver an audit report before the August 2026 RRF reporting cycle. Close on the pilot offer below. Do not ask for a decision in the room. Ask for one follow-up: a 30-minute working session with the EFKA legal-counsel and the IT director.

**Pilot offer (the buyer hook).** A 200-case parallel-run in one regional directorate, eight weeks, under €60k, with the actuarial-audit firm of EFKA's choice scoring agent-drafted vs. caseworker-drafted output side by side on three measures: arithmetic correctness, legal-citation precision, and time-to-draft. Every output is signed by an EFKA caseworker as it would be in production; no autonomous submission. The audit report is owned by EFKA and published or withheld at the Governor's discretion. If the audit fails on arithmetic or citation precision, we tear up the invoice. Reference numbers in the room: HMRC's April 2026 rollout to 28,000 staff and Caddy's 80% response-approval rate at Citizens Advice in the 2025 SCVO RCT — these are the throughput-and-quality benchmarks the Governor will be asked about by the Minister.

**Expansion path.** Pilot pass → Tier-2 contract for three-to-five-directorate rollout at €250–500k year-one, per-seat ACV thereafter. Concurrent product expansion to the EFKA appeals-directorate drafting agent (adjacent buyer at EFKA, separate budget line, same moat, same founder, same actuarial-audit firm relationship). National rollout from year two on an SLA-backed subscription. Lateral expansion to ΣΕΠΕ inspection prioritisation (Spain's Herramienta Lucha contra el Fraude under the Strategic Labour Inspection Plan 2025-2027 is the direct precedent the Special Secretary will recognise) and OPEKA family-benefits drafting from year three — same Greek-legal-corpus moat, different ministries.

**Procurement vehicle.** Tier 1 is a direct EFKA contract under the threshold for open competitive tender — the standard procurement instrument for an eight-week pilot at this budget tier, and the only instrument with a calendar compatible with the August 2026 RRF milestone. Tier 2 is a competitive tender we expect to win on the actuarial-audit evidence and the deployed Tier-1 caseworker NPS; we begin tender-document shaping with EFKA procurement in parallel with the pilot. We will accept and welcome Performance Technologies or Cosmote as a prime contractor on Tier 3, with Sintaxis as the agentic-layer subcontractor — this is the path of least political resistance and protects the incumbent relationships.

**PR and comms.** No press release at pilot signature. No press release during the parallel-run. One pre-briefed Kathimerini long-form on the day the audit report is shared with the Governor, framed around caseworker productivity and citizen wait-time reduction, with the audit-firm partner quoted and HMRC + Caddy + Assistant IA cited as the international comparator set. Greek union briefings (POS-EFKA, OTOE-aligned representatives) held in person and ahead of any press contact — the message is caseworker copilot, never caseworker replacement, and the audit firm is the trusted third party. Brussels-facing comms: a posted AI Act conformity-assessment posture document on day one, citing the deterministic-arithmetic + provenance split and the UWV-DPA precedent — pre-empts any EDPS or Commission inquiry and gets ahead of the 2 December 2027 Annex III enforcement date. We do not publish per-caseworker productivity numbers without the Governor's written consent; the audit report's release calendar is the Governor's.
