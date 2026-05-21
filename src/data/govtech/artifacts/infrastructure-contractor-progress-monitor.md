# Business Plan

**Company (working title):** Έργο-Watch — T-Life Capital portfolio venture, agentic oversight layer for major-project contractor monitoring inside Υπουργείο Υποδομών & Μεταφορών (ΥΠΥΜΕ).

**Thesis.** Greek major-project oversight is not a contractor-information problem. It is a reconciliation-and-drafting problem. Every week, on every active major project — Metro Line 4, Πάτρα-Πύργος, Ελληνικό, Egnatia upgrades, the North Road Axis concessions — the Επιβλέπων Μηχανικός and the Διευθύνουσα Υπηρεσία receive a thick PDF contractor report in Greek, a photo dump, sometimes drone footage and IoT telemetry. They reconcile it by hand against the approved Χρονοδιάγραμμα, the concession KPI grid and ν.4412/2016 Άρθρο 148 timelines, then draft the weekly oversight memo in civil-service Greek. Six to ten engineer-hours per project per week disappear into a memo nobody outside the directorate reads — until it becomes the only audit evidence the Commission accepts for an RRF disbursement. Έργο-Watch drafts that memo end-to-end with line-level citations to the contractor file, the photo evidence, the sensor feed and the contract article, and leaves the signature with the named engineer.

**Architectural moat — the ministry-side split.** Three layers. One: deterministic reconciliation — contractor-claimed progress per work-package parsed into a structured ledger and diffed against the approved baseline, no LLM in the arithmetic path. Two: multimodal evidence validation — a vision model scores claims against site photos and drone frames (TBM advance, earthworks volumes, deck pours), with calibrated per-claim confidence and an explicit "insufficient evidence" output that never resolves to a numeric override. Three: Greek-language drafting under the structured Διευθύνουσας memo form mandated by ν.4412/2016 and the concession-specific KPI grids, with paragraph-level citations to the source PDF page, the photo frame, the contract article. This is the post-Tempi architecture the Greek civil service can defend in front of a parliamentary committee: the agent never speaks for the ministry, never lands on a contractor's dashboard, and never issues a finding — it drafts an internal memo that a named engineer signs. The moat is not the model; it is the Greek civil-service voice plus the ν.4412/2016 citation engine plus the structural conflict-of-interest that prevents ΓΕΚ ΤΕΡΝΑ, AVAX, Άκτωρ and Mytilineos Energy & Infrastructure from ever building the watchdog that watches them.

**Market and buyer.** Economic buyer: the Γενικός Γραμματέας Υποδομών — owns RRF milestone evidence, fronts the Commission on audits. Secondary: the head of the major-project oversight directorate (ΕΥΔΕ / Διεύθυνση Έργων Παραχωρήσεων). User-inside-the-ministry: the Επιβλέπων Μηχανικός and the Διευθύνων Υπηρεσίας on each active project. The contractor landscape — ΕΓΝΑΤΙΑ ΟΔΟΣ Α.Ε., Άκτωρ, ΓΕΚ ΤΕΡΝΑ, AVAX, Mytilineos Energy & Infrastructure — is intentionally not our buyer; the agent is the ministry-side instrument and never bids against contractor PM dashboards. Procurement substrate: ΕΣΗΔΗΣ above the απευθείας ανάθεση threshold.

**Why now.** Five facts converge on H2 2026. (1) RRF infrastructure milestones close August 2026; Greece is at 53% completion (Feb 2026); ΥΠΥΜΕ is under the hardest deadline pressure of any ministry and every milestone needs a defensible evidence pack for DG REGIO. (2) The 2023 Tempi train crash and the subsequent parliamentary committee on infrastructure-monitoring failures created a durable political tailwind — "we did not see it in time" is the institutional wound the new oversight unit has been built around. (3) Greek Law 5299/2026 governs national AI rules and accommodates internal civil-service decision-support; the EU AI Act Annex III enforcement date was deferred to 2 December 2027 — eighteen clean months to deploy. (4) International precedent is fresh: Network Rail's Bentley-built Severn Tunnel digital twin and the North & East Route SaaS twin procurement (deadline 9 Dec 2025) in the UK; NHAI's mandatory monthly drone uploads to its Data Lake across 100+ highway projects (2025); FHWA InfoBridge plus the FHWA-HRT-24-055 construction-analytics pilots (2024). (5) EU public-procurement directives and Greek Law 4412/2016 already mandate the weekly Διευθύνουσας memo in a fixed structured form — we automate an existing duty.

**Product.** A web copilot embedded next to the ΕΥΔΕ workflow. The agent pulls the weekly contractor PDF, photo archive and any telemetry feed (ΕΣΗΔΗΣ-linked where available); extracts claimed progress per work-package and reconciles against the approved Χρονοδιάγραμμα; runs the vision model to score claims; cross-references the previous four weekly memos to surface silent slippage; flags penalty triggers under ν.4412/2016 Άρθρο 148 and concession KPI articles with citations; drafts the Greek-language memo with a per-work-package traffic-light, a recommended action list and a parallel RRF/CEF milestone-evidence pack. No autonomous submission. No contractor-facing output. Ever.

**Revenue model and pricing.** Direct ΥΠΥΜΕ contract via the General Secretariat. Tier 1: €80–150k four-month pilot triplet (one metro, one road axis, one concession), απευθείας ανάθεση under the innovation-pilot framework. Tier 2: €1.2M ESPA-funded year-one across 12 major projects, per-project SaaS-plus-implementation. Tier 3: ΕΣΗΔΗΣ open tender for national coverage, SLA-backed subscription, mid-seven-figure ACV.

**Unit economics.** Greek/EU sovereign cloud. Marginal inference cost per weekly memo €4–9 including multimodal passes; rules-engine cost rounding error. Per-project ACV at scale 15–30× variable cost. Gross margin target 70%+ after customer-success overhead and per-concession contract-grid onboarding.

**Capital plan and milestones.** Pre-seed €700k–€900k (T-Life Capital + one Greek strategic angel from public works) for nine months through pilot. Milestones: (1) pilot LoI within 90 days; (2) four-month pilot triplet with audit-grade evaluation by month six; (3) Tier-2 ESPA contract by month nine; (4) ΑΕΠΠ-defensible procurement file built in parallel. Seed €2.5–3.5M at Tier-2 signing.

**Team.** Three founding hires: (1) civil-engineer co-founder, NTUA, 5+ years inside an ΕΥΔΕ oversight directorate — owns the ν.4412/2016 citation grid and concession KPI mappings; (2) LLM/vision engineer co-founder — owns the multimodal evidence validator and drafting layer; (3) product founder with ΕΣΗΔΗΣ procurement experience. Post-pilot: a former Διευθύνων Υπηρεσίας as design partner, a Greek-legal-NER engineer, a customer-success lead with public-works scars.

**Risks and mitigations.** (1) Contractor reframing — ΓΕΚ ΤΕΡΝΑ, AVAX, Άκτωρ, Mytilineos Energy & Infrastructure will try to absorb Έργο-Watch into contractor-side PM. Mitigation: GS-Υποδομών air cover that the agent reports only to the Διευθύνουσα Υπηρεσία; written firewall that no agent output ever lands on a contractor dashboard. (2) Concession-dispute risk — naming delays on Πάτρα-Πύργος or the North Road Axis touches multi-year reputation-protection clauses. Mitigation: every memo is marked "internal civil-service draft"; the agent never issues a "finding." (3) Vision-validation precision — TBM advance and earthworks scoring is the technically hardest sub-loop. Mitigation: scoped work-package list, calibrated confidence with explicit insufficient-evidence outputs, named engineer signs every memo. (4) Tempi-era third-rail risk — "AI on infrastructure" framing invites attack. Mitigation: decision-support for a named civil servant, RRF/CEF evidence-pack first.

---

# Pitch Deck

## Slide 1 — Έργο-Watch
- T-Life Capital portfolio venture, Athens
- Ministry-side agent for major-project contractor oversight at ΥΠΥΜΕ
- Drafts the weekly Διευθύνουσας Υπηρεσίας memo end-to-end with full ν.4412/2016 provenance
- The engineer reviews, edits, and signs. The agent never speaks for the ministry.
- Pilot-ready, four-month triplet across one metro, one road axis, one concession

## Slide 2 — Problem
- Every active major project (Metro Line 4, Πάτρα-Πύργος, Ελληνικό, Egnatia, North Road Axis) ships a weekly contractor PDF + photo dump + sometimes telemetry — in Greek, against a structured ν.4412/2016 memo template
- The Επιβλέπων Μηχανικός loses 6–10 hours a week reconciling claims against the Χρονοδιάγραμμα baseline, the concession KPI grid and Άρθρο 148 timelines
- Silent slippage is structurally invisible until it lands as an RRF milestone audit finding from DG REGIO
- The 2023 Tempi crash made "we did not see it in time" the institutional wound

## Slide 3 — Why Now
- RRF infrastructure milestones close August 2026; Greece is at 53% completion (February 2026); ΥΠΥΜΕ is under the hardest deadline pressure of any ministry
- Greek Law 5299/2026 sets the national AI rules and accommodates internal decision-support; EU AI Act Annex III enforcement deferred to 2 December 2027 — eighteen clean months
- Network Rail Severn Tunnel digital twin (Bentley) plus North & East Route SaaS twin procurement (deadline 9 Dec 2025) — live UK precedent
- NHAI Data Lake mandates monthly drone uploads across 100+ Indian highway projects (2025) — live India precedent
- FHWA InfoBridge + FHWA-HRT-24-055 construction-analytics pilots — live US precedent
- ν.4412/2016 + EU public-procurement directives already mandate the memo — we automate an existing legal duty

## Slide 4 — Solution
- Three-layer split: deterministic reconciliation against Χρονοδιάγραμμα + multimodal evidence validation against photos and drone frames + Greek-language drafting under ν.4412/2016 structured form
- Per-work-package traffic-light with paragraph-level citations to the PDF page, the photo frame, the contract article
- Parallel RRF/CEF milestone-evidence pack auto-generated from the same source — every memo doubles as the audit-trail artifact for DG REGIO
- No autonomous submission. No contractor-facing output. Ever.

## Slide 5 — Demo
- Live walkthrough on a sanitised Metro Line 4 work-package (TBM advance + station shell + MEP fit-out)
- Side-by-side: agent-drafted memo vs. blank engineer draft; same Χρονοδιάγραμμα diff in both
- Hover any sentence — citation to the contractor PDF page, the dated photo frame, the Άρθρο 148 paragraph
- Vision-validation confidence per claim; "insufficient evidence" overlay where the model declines
- Diff against last four weeks; silent-slippage flag triggered

## Slide 6 — Market
- ΥΠΥΜΕ major-project oversight: 30+ active major projects, ≈€11B+ RRF-tracked envelope
- Per-project ACV €30–80k at Tier-2 scale; per-ministry ACV mid-seven-figure at national coverage
- Adjacent: ΕΓΝΑΤΙΑ ΟΔΟΣ Α.Ε. asset-condition oversight (state-owned, same moat)
- Lateral: Climate Crisis & Civil Protection (post-disaster reconstruction), Development (ESPA OPS audit-trail), Maritime (port construction) — same ν.4412/2016 corpus
- Long-term: replicable into Cyprus public works and Romanian/Bulgarian RRF oversight

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack; rubric composite 4.40, hostile second-pass composite 4.50, qualification PASS (21 May 2026)
- Founding civil-engineer candidate identified — NTUA, 6 years inside an ΕΥΔΕ oversight directorate
- LLM/vision co-founder identified — production experience on multimodal document-AI
- Two project directorates expressing pilot interest under NDA (one metro, one road axis)
- ν.4412/2016 + Άρθρο 148 citation corpus assembly begun

## Slide 8 — Business Model
- Tier 1 pilot: €80–150k, four months, triplet of three projects, απευθείας ανάθεση
- Tier 2 rollout: €1.2M ESPA-funded year-one across 12 projects
- Tier 3 national: ΕΣΗΔΗΣ open tender, SLA-backed subscription, mid-seven-figure ACV
- Per-project SaaS-plus-implementation, €30–80k per project per year at scale

## Slide 9 — Competition & Moat
- Greek SIs (Singular, Byte, Uni, Netcompany, Intracom) ship MIS-Έργα project-management software; none ships a ministry-side agent that drafts oversight memos
- Major contractors (ΓΕΚ ΤΕΡΝΑ, AVAX, Άκτωρ, Mytilineos Energy & Infrastructure) sell their own PM dashboards — structural conflict-of-interest blocks them from building the watchdog
- Multinationals (Bentley, Procore, Autodesk) sell platforms, not Greek civil-service drafting in ν.4412/2016 voice
- Moat: ΚΑΚ terminology + ν.4412/2016 citation grid + concession-contract corpora + ΕΥΔΕ embedding + the contractor firewall

## Slide 10 — Team
- Civil-engineer co-founder — NTUA, 5+ years in ΕΥΔΕ oversight; owns ν.4412/2016 citation grid and concession KPI mappings
- LLM/vision co-founder — multimodal document-AI background, owns the evidence validator and the drafting layer
- Product founder — ΕΣΗΔΗΣ procurement scars
- Advisor bench: former Γενικός Γραμματέας Υποδομών, former ΕΓΝΑΤΙΑ ΟΔΟΣ Α.Ε. board member, named ν.4412/2016 procurement counsel

## Slide 11 — Ask
- €700k–€900k pre-seed, T-Life Capital lead, one Greek strategic angel from the public-works ecosystem
- Use of funds: nine-month runway through the Tier-2 ESPA signing
- Investor introductions sought: GS-Υποδομών office, ΕΥΔΕ major-project directorate director, ΕΓΝΑΤΙΑ ΟΔΟΣ Α.Ε. CEO

## Slide 12 — Roadmap and Risk
- Month 0–3: pilot LoI, triplet selection, ν.4412/2016 citation grid live, vision-validation on first work-package
- Month 3–6: parallel-run on three projects, weekly memo audit by ΕΥΔΕ director
- Month 6–9: Tier-2 ESPA file shaped, ΑΕΠΠ-defensible procurement memo drafted, RRF evidence-pack validated by DG REGIO desk officer
- Month 9–18: 12-project rollout, customer-success build-out, second product line in alpha
- Risk: contractor reframing, concession dispute, vision-precision tail, Tempi-era third-rail — each mitigated by the ministry-side firewall and named-engineer signature

---

# Go-to-Market Plan

**Champion identification.** Primary champion: the Γενικός Γραμματέας Υποδομών — owns RRF milestone evidence, fronts DG REGIO, absorbs the political cost of any silent slippage. Secondary: the director of the major-project oversight directorate (ΕΥΔΕ / Διεύθυνση Έργων Παραχωρήσεων) — feels the weekly memo backlog. Tertiary: the chief of staff to the Υπουργός Υποδομών & Μεταφορών — calendar gatekeeper. Every champion operates under the post-Tempi institutional wound that "we did not see it in time."

**First-meeting choreography.** Forty-five minutes with the Γενικός Γραμματέας, civil-engineer co-founder in the room, LLM/vision co-founder for the architecture slide only. Open with the political diagnosis (Tempi made "we did not see it in time" the institutional wound; the August 2026 RRF deadline made it operational), not the product. Ten minutes on the three-layer split — emphasising that the agent never speaks for the ministry, never lands on a contractor dashboard, never issues a finding. Ten minutes on procurement and evidence posture: name three candidate pilot projects (one Metro Line 4 work-package, one Πάτρα-Πύργος segment, one Egnatia upgrade), a four-month window timed so the audit-grade evaluation lands before the August 2026 RRF reporting cycle, an external evaluator. Close on the pilot offer. Ask for one follow-up: 30 minutes with the ΕΥΔΕ director and the ministry's ν.4412/2016 procurement counsel.

**Pilot offer (the buyer hook).** A four-month parallel-run across three projects (one metro, one road axis, one concession), under €150k, απευθείας ανάθεση under the Greek innovation-pilot framework. Every weekly Διευθύνουσας memo is drafted by Έργο-Watch and reviewed by the named Επιβλέπων Μηχανικός as it would be in production; no autonomous submission. An external evaluation scores agent-drafted vs. engineer-drafted memos on three measures — ν.4412/2016 citation precision, evidence-claim accuracy under vision validation, and time-to-draft. In parallel, every memo exports an RRF/CEF milestone-evidence pack that the ministry submits to DG REGIO; this is the buyer hook. If the evaluation fails on citation precision or evidence accuracy, we tear up the invoice.

**30-60-90 day plan.** Day 0–30: lock pilot triplet with GS-Υποδομών; pre-draft απευθείας ανάθεση memo at €80–150k tier; recruit the NTUA civil-engineer co-founder from the ΕΥΔΕ alumni list; produce same-week demo on a sanitised Metro Line 4 work-package. Day 30–60: pilot LoI signed; ν.4412/2016 citation grid live across three projects; vision-validation calibrated on first month of photo archives; first weekly memo drafted on each pilot project. Day 60–90: weekly memos in production-shadow across all three projects; mid-pilot review with the ΕΥΔΕ director; RRF/CEF evidence-pack export validated with the GS-Υποδομών RRF desk officer; Tier-2 ESPA file shaping begun.

**Pricing tiers.** Tier 1 — pilot: €80–150k, four-month three-project parallel-run, απευθείας ανάθεση, single ministerial signature, no ΕΣΗΔΗΣ tender. Tier 2 — ESPA year-one rollout: €1.2M across 12 projects, ESPA digital-transformation envelope, competitive process pre-shaped to recognise the pilot evaluation. Tier 3 — national subscription: ΕΣΗΔΗΣ open tender, SLA-backed, mid-seven-figure ACV, full ΥΠΥΜΕ coverage. Tier 4 — adjacent ministries: ESPA extensions into Climate Crisis & Civil Protection, Development (ESPA OPS), Maritime — each 6–12 months behind Tier-2 signature.

**Expansion path.** Pilot pass → Tier-2 ESPA contract for 12-project rollout. Concurrent expansion to ΕΓΝΑΤΙΑ ΟΔΟΣ Α.Ε. asset-condition oversight (state-owned, same voice, same ν.4412/2016 substrate). Year two: ΕΣΗΔΗΣ open tender for national coverage. Year three: lateral expansion into Climate Crisis & Civil Protection (post-disaster reconstruction), Development (ESPA OPS audit-trail), Maritime (port-construction oversight) — each a separate ministerial buyer, single corpus moat. We welcome a Greek SI (Netcompany, Intracom, Performance Technologies) as prime contractor on Tier 3 with Έργο-Watch as the agentic-layer subcontractor — least political resistance, cleanest protection of incumbent relationships.

**Defensive moat.** Four reinforcing layers. (1) Structural conflict-of-interest: ΓΕΚ ΤΕΡΝΑ, AVAX, Άκτωρ and Mytilineos Energy & Infrastructure cannot credibly ship the watchdog that watches them; the watchdog must sit on the ministry side, and that is the surface no contractor will ever bid for. (2) Greek-language ΚΑΚ terminology, ν.4412/2016 citation grid and concession-contract corpora — uneconomic for any multinational to assemble for a single jurisdiction. (3) ΕΥΔΕ workflow embedding — once the weekly memo is drafted by the agent on a project, switching cost is a full re-shadowing month plus the loss of RRF evidence-pack continuity. (4) Regulatory posture: deterministic-reconciliation + named-engineer-signature sits cleanly inside Greek Law 5299/2026 and pre-empts the 2 December 2027 EU AI Act Annex III enforcement; a published conformity-assessment posture on day one gives the GS-Υποδομών a written defence against any post-Tempi parliamentary attack.

**PR and comms.** No press release at pilot signature; no press release during the parallel-run. One pre-briefed Καθημερινή long-form on the day the evaluation report is shared with GS-Υποδομών, framed around RRF milestone evidence and engineer productivity, with Network Rail's Severn Tunnel digital twin and NHAI's Data Lake cited as the international comparator set. TEE engineering-chamber briefings held in person ahead of any press contact — the message is engineer copilot, never engineer replacement. Brussels-facing: a posted conformity-assessment posture document on day one citing Greek Law 5299/2026 and the deterministic-reconciliation split, pre-empting any DG REGIO inquiry well ahead of 2 December 2027.
