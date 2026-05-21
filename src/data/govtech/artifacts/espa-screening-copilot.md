# Business Plan

**Company (working name):** Krisi.ai — agentic screening for ESPA grant applications.
**Sponsor:** T-Life Capital, Athens. Co-founded out of the studio with a domain founder (ex-EFEPAE or ex-EYDE-ETAK reviewer) and a senior NLP engineer; Greek administrative-law counsel on retainer.

## Thesis

ESPA 2021-2027 hits its absorption-rate crunch across 2026-2027. Every call window closes with a wall of 80-200-page application bundles that intermediate bodies grind through manually for eight to twelve weeks; the deficiency-letter cycle (επιστολή ελλείψεων) is administrative Greek, deterministic per call, and structurally repetitive — the exact shape of work that LLMs handle reliably today, provided a reviewer signs the output and the audit trail is built in from day one.

We are the layer between call closure and committee approval that turns a closed call into a triaged stack of reviewer cards plus draft deficiency letters within days instead of weeks, without touching the statutory decision under CPR Art. 74. The committee still decides; we make the file the committee decides on.

We are not selling "AI for the public sector" as a horizontal. We are selling one defensible cycle — call closure to deficiency letter to committee dossier — into a buyer (intermediate body or regional MA) who has a quantified, recurring backlog and a minister who has been answering parliamentary questions about absorption rates for a decade. This is a decision-support layer aligned with the post-Omnibus AI Act window (Annex III high-risk obligations now phased to 2 Dec 2027 after the 7 May 2026 Omnibus deal) and with the ECA traceability template laid out in Special Report 14/2026.

## Market and buyer

Primary buyers are the Greek ESPA 2021-2027 Managing Authorities and the intermediate bodies that screen on their behalf: EFEPAE for SME enterprise-aid schemes under the Competitiveness OP, EYDE-ETAK for research and innovation, the regional MAs (ΕΥΔ Περιφέρειας), EYSEKT for ESF+ where applicable. Each call cycle pushes 500-5,000 applications through a screening team of 10-40 reviewers. There are roughly 8-12 intermediate bodies of meaningful scale and a tail of regional MAs.

Secondary buyer is the General Secretariat for Public Investments at Υπουργείο Εθνικής Οικονομίας: the political owner of absorption-rate optics, and the contracting authority that can sign a framework above the direct-award tier so that downstream bodies attach by call-off rather than re-procuring.

Bottom-up: 10 deployable bodies × €250k-€400k operational ARR = €2.5M-€4M Greek-only ARR ceiling on the first wave, with a clear extension into Cyprus (KOAP, ΥΣΕΕ) and into adjacent funds — RRF tail screening at line ministries through the August 2026 deadline, CAP intervention applications at OPEKEPE, and the post-2027 cohesion successor instrument when the next MFF lands. The price point is anchored against the headcount cost of a screening team (≈€60k fully loaded × 5 FTE-equivalents saved = ≈€300k per year) and against the political cost of an unprocessed-backlog news cycle, which is the actual willingness-to-pay.

## Product (agentic loop, in detail)

The loop runs per call, not per application. On call publication, the agent ingests the prokirixi, the evaluation grid, the FAQ, and the implementing decisions, and builds a per-call rubric: each eligibility criterion becomes a typed check with a citation to the article that grounds it. When an application arrives in OPS, the agent parses the bundle — business plan, financial projections, GEMI extract, AADE tax clearance, EFKA insurance clearance, de-minimis declaration — using Greek-aware OCR and structured extraction tuned on the formulaic shapes these documents take.

It then cross-validates against external substrates: GEMI for legal-entity status and statutory representatives, AADE for tax-clearance authenticity (φορολογική ενημερότητα verification flow), EFKA for insurance clearance, EU and UN sanctions lists for the ownership chain. Each eligibility criterion is scored pass / fail / needs-clarification with a citation chain back to the source artefact and the call article. The agent drafts the deficiency letter in administrative Greek that mirrors the body's house style, citing the specific article violated and the specific evidence requested per item. Output into the reviewer's existing OPS UI is a triage card (green / amber / red) plus the editable letter draft. The reviewer signs; the agent never auto-rejects. Every step writes to an audit-trail bundle structured for ex-post EU Court of Auditors and EDEL sampling — explicitly designed against the traceability template ECA laid out in Special Report 14/2026 on RRF and the fraud-control template in Special Report 06/2026.

The product line drawn against DG REGIO Arachne is sharp and worth stating up front: Arachne (still production at roughly 20 member states as of 2026) is a fraud risk-scoring layer over already-disbursed beneficiaries — it answers "should we audit this operation?" Krisi.ai is an application-stage eligibility-screening layer — it answers "is this file complete and compliant enough to put in front of the committee?" Different surface, different artefacts, different buyer. Arachne does not draft a deficiency letter and was never designed to.

## Revenue model and pricing

Two-line model. (1) Per-body operational deployment: €250k-€400k annual subscription, structured as a software licence plus a call-based usage component (€5-€15 per screened application above a band). (2) Replay-test pilots: €55k for a retrospective replay of a closed 2024 or 2025 call, paid as a direct-award procurement at or below the €60k threshold under Law 4412/2016 simplified contracting. The pilot is the wedge; the operational deployment is the actual business.

## Unit economics

A €300k ARR account runs on roughly €60k-€80k of variable cost (cloud, model inference, document storage, one customer-success FTE amortised across two-to-three bodies). Gross margin lands in the 70-75% band once we are off the pilot subsidy. Sales cycle from first-meeting to pilot signature is 4-6 months; pilot to operational deployment is another 6-9 months; total time-to-first-€300k is 12-15 months per body.

## Capital plan and milestones

Pre-seed (Q3 2026, €600k): close two replay pilots (one intermediate body, one regional MA) and convert one. Seed (Q3 2027, €2.5M): three operational deployments live, framework-procurement vehicle signed with GS Public Investments, first non-Greek pilot scoping (Cyprus). Series A (2029, optional): expand into the post-2027 cohesion successor instrument and into CAP intervention screening at OPEKEPE.

## Team and hires

Two co-founders at incorporation: domain (ex-EFEPAE or ex-EYDE-ETAK reviewer with at least one full call season under her belt) and engineering (senior NLP, Greek-language ASR/OCR background preferred). Hires inside year one: a public-procurement-savvy contracts manager (Law 4412/2016 fluent), one applied-NLP engineer, one customer-success officer who has worked inside an MA. Retained: Greek administrative-law counsel for the deficiency-letter register and EU-funds compliance.

## Risks

Four live ones, in order of severity.

**Διοικητικό Πρωτοδικείο tail risk.** A rejected applicant will sue, and the agent's involvement will be raised. The defence is structural: the reviewer always signed the letter, the committee always voted the verdict, and the agent's evidence chain makes the file *more* defensible than the manual baseline, not less. CPR Art. 74 is the design constraint, not the threat — the entire product is built as decision-support under it. We never auto-decide, never auto-reject, and the audit-trail bundle is the answer to any administrative-court interrogation about why a particular item was flagged.

**Incumbent overlap.** Q&R sit inside OPS and the ESPA-side SIs (Netcompany, Intrasoft) own case-management plumbing. We ship as a layer alongside OPS, not a replacement, and return our verdicts into the existing reviewer UI. The Arachne-line is the recurring buyer question — answered above and on Slide 9.

**Procurement vehicle slippage.** A €55k pilot lands as απευθείας ανάθεση under Law 4412/2016. If scope creeps past €60k we slip into a real tender and time-to-pilot doubles. Discipline on pilot scope is a board-level metric.

**Data-access for the deficiency-letter register.** The Greek deficiency-letter register is genuinely formulaic per call article — that is the moat — but bootstrapping it cleanly needs 200+ prior letters per intermediate body. That is a data-access negotiation that the founder runs in parallel to the procurement conversation, not after it.

# Pitch Deck

## Slide 1 — Krisi.ai: ESPA application screening, on the timeline calls actually close
- Athens-built agent that turns a closed ESPA call into a stack of reviewer-ready triage cards + draft deficiency letters
- Co-founded out of T-Life Capital with an ex-intermediate-body reviewer and a senior NLP engineer
- Pilot-ready on a closed 2024 call via the retrospective-replay methodology

## Slide 2 — Problem: the call-closure backlog
- Every ESPA call closes with 500-5,000 applications, each 80-200 pages
- Backlog at closure is routinely 8-12 weeks across major intermediate bodies
- Absorption-rate drag is the structural symptom; press-cycle exposure is the political symptom
- Reviewers spend the bulk of their time drafting and re-drafting deficiency letters in administrative Greek

## Slide 3 — Why now (May 2026)
- ESPA 2021-2027 mid-period spans 2026-2027 — absorption pressure peaks across this window
- ECA Special Report 14/2026 (RRF traceability) and SR 06/2026 (RRF fraud) set the audit-trail template adjacent to our surface
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 by the 7 May 2026 Omnibus deal — clean window to ship as decision-support and harden compliance ahead of obligations landing
- UKRI grant-review pilots (2024) and Italy ReGiS for PNRR audits prove LLM-assisted triage and evidence-vaulting at member-state scale
- CPR Art. 74 keeps committee decision-making mandatory — we design as decision-support, not autonomous decision

## Slide 4 — Solution
- Per-call rubric built from the prokirixi, evaluation grid, FAQ
- Bundle ingestion (PDF, Excel financials, GEMI extracts, tax + insurance clearance) with Greek-aware extraction
- Cross-validation against GEMI / AADE / EFKA / sanctions lists
- Pass / fail / needs-clarification per criterion, with citation chain back to the source artefact and the call article
- Draft deficiency letter in administrative Greek; reviewer signs; agent never auto-rejects
- Audit-trail bundle written to the ECA SR 14/2026 traceability template by default

## Slide 5 — Demo: the replay-test methodology (lead slide)
- We take one closed 2024 call from the prospective body — read-only access to the bundles and the committee's final verdicts
- We run the agent **blind** on the original application bundles: agent does not see the committee output until it has produced its own triage card + draft deficiency letter per file
- We score on three numbers, all measured against the committee's actual record:
  - **Verdict agreement** on the eligibility outcome (pass / fail / needs-clarification): target ≥95%
  - **Letter-drafting time saved** on the matched subset: target ≥80%
  - **Catch rate** on items the committee debated — agent should surface the same ambiguities the committee surfaced
- One screen at the meeting: applications list, triage colours, an opened card with the draft letter side-by-side with the source clause it cites
- Replay is retrospective, so there is no live-system risk and no statutory-decision exposure for the body; the deal is read-only access to a closed file
- Procurement vehicle: €55k απευθείας ανάθεση under Law 4412/2016 against the President's discretionary budget
- This is the slide that sells. The methodology is borrowed from UKRI's 2024 LLM-triage pilot design and explicitly answers the Διοικητικό Πρωτοδικείο objection: the agent is measured against the committee, not above it

## Slide 6 — Market
- 8-12 deployable Greek MAs / intermediate bodies; €250k-€400k operational ARR each
- €2.5M-€4M Greek-only ARR ceiling on wave one
- Adjacent surface: RRF tail through Aug 2026 deadline; CAP applications at OPEKEPE; post-2027 cohesion successor instrument
- Export path: Cyprus (KOAP, ΥΣΕΕ) first, then Romania / Bulgaria / Portugal on cohesion funds

## Slide 7 — Traction
- One signed replay-pilot LOI (intermediate body, target close Q4 2026)
- Two formal evaluation conversations underway with regional MAs
- T-Life Capital studio co-funding through pre-seed; founding team complete on signature
- Greek admin-law counsel retained; data-access negotiation for the prior-letters corpus open with the LOI body

## Slide 8 — Business model
- Replay pilot: €55k, direct-award procurement (Law 4412/2016 simplified), retrospective on a closed call, 12 weeks
- In-flight pilot: €80k-€120k extension on one live call, negotiated procedure without prior publication on technological-specificity grounds
- Operational deployment: €250k-€400k ARR per body (licence + per-application usage band)
- Framework vehicle with GS Public Investments to compress procurement for downstream bodies
- 70-75% gross margin at steady state

## Slide 9 — Competition and the Arachne line
- DG REGIO Arachne (production at ~20 member states in 2026) is **post-disbursement fraud risk-scoring** on already-paid beneficiaries — not application-stage eligibility screening, not a deficiency-letter drafter, never designed to be either
- Italy ReGiS is a PNRR evidence-vault — adjacent surface (audit support), not a screening agent
- Spain IGAE is an RRP audit framework — adjacent surface (audit selection)
- Q&R and ESPA-side SIs own OPS plumbing; none ships an application-screening agent
- Moat: deficiency-letter Greek register (highly stylised, partially formulaic per call) + reviewer-signed audit trail aligned to ECA SR 14/2026
- Multinational tools cannot produce a defensible administrative-Greek letter

## Slide 10 — Team
- Domain co-founder: ex-EFEPAE / EYDE-ETAK reviewer, full call-season operator
- Engineering co-founder: senior NLP, Greek-language extraction background
- Retained Greek administrative-law counsel; T-Life Capital studio support for procurement and GTM
- Hires year one: contracts manager (Law 4412/2016), applied-NLP engineer, customer success ex-MA

## Slide 11 — Ask
- €600k pre-seed for two replay pilots and one conversion to operational deployment
- Champion introduction to the President of one intermediate body and the GS for Public Investments
- 12-month horizon to first €300k ARR account; 24-month horizon to three live deployments

# Go-to-Market Plan

## Champion identification

Two viable champions; we open both lanes in parallel and let the calendar decide which closes first.

**Lane A — President of an intermediate body (preferred: EFEPAE).** EFEPAE screens for the bulk of SME enterprise-aid calls under the Competitiveness OP; its president owns the throughput number and faces the press directly when a call's deficiency-letter cycle slips. Warm-intro path is through ex-board members of intermediate bodies in the T-Life Capital network and through the chambers of commerce that sit on EFEPAE's governance. EYDE-ETAK is the parallel target on the R&I surface — same shape of role, smaller call volumes but more politically visible files.

**Lane B — General Secretary for Public Investments at Υπουργείο Εθνικής Οικονομίας.** Owns the absorption-rate aggregate, has the political mandate to push tooling down into the intermediate bodies, and can sign a framework that lets downstream bodies attach without re-procuring. Warm-intro path is through ex-Special-Secretariat-RRF colleagues and through the minister's chief-of-staff cohort.

The chief-of-staff conversation is the trigger, not the close. Decision authority sits with the contracting body itself; the GS opens the door and signals top-cover. The President of the intermediate body signs the pilot.

## First-meeting choreography (replay test on a closed call)

Single 60-minute meeting, three slides, one live screen. Slides: the backlog number on their last call, what the agent does in one paragraph, the deal — "give us five days, read-only access to one closed call, signed NDA, no production system involvement."

Then the live screen. The agent has already been pre-loaded with the prokirixi and FAQ for a publicly available closed call (e.g. a 2024 Competitiveness sub-call). We screen-share a triage list, open one application card, and show the draft deficiency letter beside the source clauses it cites. Total demo: 8 minutes.

The ask out of the meeting is read-only access to one of *their* closed calls for the replay — not their live one. The replay output is a memo: number of applications where the agent's verdict matched the committee's, number of letters where the agent's draft would have shortened reviewer time, and the cases where the agent flagged ambiguity that the committee also debated. We deliver the memo in three weeks.

## Pilot offer

€55k replay-test pilot, fixed-fee, direct-award under the simplified procurement threshold (Law 4412/2016). Twelve weeks: weeks 1-2 onboarding the call rubric, weeks 3-8 the replay itself on a sample of 200-500 applications, weeks 9-12 the comparison memo and the reviewer-side workshop. Deliverables: the comparison memo, the audit-trail bundle for the sample (ECA SR 14/2026 template), and a deployment proposal for the next live call. Acceptance criteria stated in the contract: ≥95% verdict agreement on the replay set, ≥80% reduction in letter-drafting time on the matched subset, agent surfaces the same ambiguity items the committee debated.

## Expansion path

Replay pilot → in-flight pilot on one live call (€80k-€120k, paid as an extension under a negotiated procedure without prior publication on technological-specificity grounds with the replay memo as evidence) → operational deployment for the body across all calls (€250k-€400k ARR). The body becomes the reference customer for the next two intermediate bodies; by the time we are talking to body number three, we are talking through a framework signed with GS Public Investments.

## Procurement vehicle

Three vehicles, in order of preference. (1) Direct award under the €60k threshold for the replay pilot — fastest path, no tender. (2) Negotiated procedure without prior publication for the in-flight pilot, justified on technological-specificity grounds with the replay memo as evidence. (3) Framework agreement under Law 4412/2016 signed with GS Public Investments or with the Special Secretariat for ESPA, that downstream bodies can attach to with a call-off. The framework is the long-game; we do not block on it.

## PR/comms strategy

Quiet during the replay pilot. The body's president decides when and whether to surface the work; we do not pre-announce. When the first operational deployment goes live, joint comms with the minister's office on the absorption-rate angle — a single Καθημερινή or Naftemporiki interview with the body president plus a paragraph in the relevant ministry's quarterly ESPA press note. International press (Politico Europe, Financial Times) only after the second deployment and only with the GS's sign-off; the story there is "Greek member-state agentic tooling on EU funds, designed under CPR Art. 74 and the ECA SR 14/2026 traceability template," not the vendor name.

T-Life Capital's own channels — studio blog, the founders' personal posting — stay focused on the founding-team story and the engineering details, not on customer names. The customer names belong to the body's president to disclose when the body's own political cycle allows.
