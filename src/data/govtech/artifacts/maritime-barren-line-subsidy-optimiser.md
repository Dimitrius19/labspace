# Business Plan

## Company thesis
The 2025 ferry-subsidy envelope ran at €167M across 77 barren-line (άγονη γραμμή) public-service-obligation routes — up from the €90M / ~50-route baseline of 2019 — and the contracting, monitoring and audit cycle is still run by a single desk inside Διεύθυνση Θαλασσίων Συγκοινωνιών on Excel sheets, PDF logs and operator-supplied monthly returns. The 24 June 2026 Northern-Aegean cargo-ferry tender (Πειραιάς → Χίος → Μυτιλήνη → Αλεξανδρούπολη), currently in flight after a fresh delay, is a live example of what the directorate now has to clear inside one annual cycle. Every winter the same three artefacts surface: islanders without medicine or post, a parliamentary question, and a press cycle the ministry cannot defend on paper. We are building Άγονη Γραμμή Agent — an agentic loop that reconciles AIS reality against the σύμβαση άγονης, drafts the monthly compliance letter, and produces the State-aid audit packet that EC Reg. 3577/92 already requires. The thesis is narrow on purpose: one directorate, one decision-maker, one regulation, one Greek-language corpus no foreign incumbent will touch. The next winter (Dec 2026 – Mar 2027) is the window — and the next DG MOVE cabotage review cycle opens behind it in 2026.

## Market & buyer
Primary buyer: ΓΓ Ναυτιλίας (General Secretariat for Maritime Policy) and the Διεύθυνση Θαλασσίων Συγκοινωνιών director. Secondary champion: chair of the island-MP caucus, whose constituency is the loudest claimant when sailings drop. The ministry already pays out €167M against 77 routes; what it does not have is the evidentiary apparatus to defend, claw back or re-tender. Adjacent buyers, year 2-3: EMSA for cross-MS PSO oversight, and through HCG the Παράκτιο Σύστημα Ελέγχου for connected compliance use-cases. Defensible software ceiling on the new envelope is 0.25-0.5% of subsidy, i.e. €420K-€835K annual recurring per ministry once the full 77-route map is covered. Pricing anchor is one indictable winter sailing season, not a procurement cycle.

## Product — the agentic loop in detail
The agent runs on a monthly close-of-books cadence per route plus an event-triggered intra-month loop for cancellations and detentions. Steps:

1. **Reality pull.** Ingest AIS tracks for the contracted vessel (MMSI-pinned, MarineTraffic/Spire feed), reconcile against the declared monthly sailings table the operator submitted under the σύμβαση.
2. **Force-majeure classifier.** Cross-check each missed sailing against the Hellenic National Meteorological Service (EMY) bulletin and the relevant port-master closure decision (απαγορευτικό απόπλου). Each missed sailing is tagged force-majeure or breach with evidence pointers.
3. **Economics pull.** Pull ELSTAT monthly passenger and freight load factors plus the operator's IRIDA/myDATA invoice trail for the route, where authorised.
4. **Scoring.** Score actual route economics against the tender budget; identify per-leg under- or over-subsidy and compute the recoverable clawback figure under the σύμβαση's penalty clauses.
5. **Drafting.** Generate the monthly compliance letter to the operator in legal-grade Greek, with article-level citations to the σύμβαση άγονης and the κανονισμός άγονης γραμμής. A case officer reviews and signs.
6. **Audit packet.** Assemble the State-aid audit-trail packet (EC Reg. 3577/92 cabotage compliance) in a DG MOVE-reviewable format, retained for the four-year audit window.

Case officer remains the signing authority; the agent is a drafting and evidence-marshalling layer. No autonomous decisions, no autonomous communications to operators. Reference precedents: Denmark's Søfartsstyrelsen runs AIS-based route monitoring in production since 2024; Norway's Sjøfartsdirektoratet has operator self-reporting linked to AIS validation on coastal PSO contracts since 2023. Neither operates at Greek scale (77 routes), neither in Greek.

## Revenue model & pricing
Direct-award pilot (απευθείας ανάθεση), €55-90K, 6 routes, 6 months, sized to land before the Dec 2026 winter close. Production licence priced per-route per-year on a sliding scale: €18K for routes 1-15, €12K for routes 16-40, €8K for routes 41-77. At full 77-route coverage that is approximately €690K ARR from a single ministry. Optional modules — passenger-rights routing (Reg. 1177/2010) and small-port berth allocation — sold as bolt-ons at €30-60K each. A second tier of bolt-on, the **FuelEU Maritime verification copilot**, is the year-2 expansion arc (see below).

## FuelEU Maritime — year-2 expansion arc
FuelEU Maritime is now binding: first reporting period closes 31 January 2026, the Document of Compliance deadline lands 30 June 2026, and EMSA's THETIS-MRV FuelEU module is live for member-state verification. Greek-flag dominance plus the dense Aegean PSC call traffic means Greece processes a disproportionate share of FuelEU verifications. We will not chase FuelEU as a separate company — we will ship it as Product 2 inside Άγονη Γραμμή Agent in M13-M18, reusing the AIS spine, the THETIS connector and the Greek administrative-act drafting layer. Pricing: a 3-port PSC drafting pilot at €80-150K (Piraeus + Thessaloniki + Heraklion), priced via the EMSA-grant-linked innovation envelope rather than core ministry budget. This converts a regulatory tailwind into a second ARR stream from inside the same ministry without forking the founding team.

## Unit economics
Per-route incremental cost is dominated by AIS feed (~€220/route/year at production volume), Greek NLP inference (~€90/route/year on cached prompts), and the human review time the customer absorbs. Gross margin at 25 routes is approximately 78%; at 10 routes still ~62% because feed costs are mostly fixed at the operator-fleet level rather than the route level. CAC is sales-engineering time inside one ministry — call it 90 person-days to first contract.

## Capital plan & milestones — 24 months
- **M0-M3:** founding team in place; first paid POC with 6 routes (direct-award), pre-registered with the directorate director by end of June 2026 so it can run live across the Dec 2026 winter close. Pre-seed €350K to cover two engineers, AIS feed, a paid 30-day Piraeus maritime-law boutique engagement to deliver a ΦΕΚ-indexed σύμβαση/decision corpus, and State-aid counsel.
- **M4-M9:** monthly close runs in production for the 6 pilot routes through the full winter; first quarterly audit packet delivered to the directorate; Διαύγεια publication of the pilot. Procurement vehicle conversion to innovation-pilot framework (ΕΥΔΕ-ΤΠΕ or the ministry's own ΕΥΔ).
- **M10-M15:** scale to 25 routes (Cycladic + Dodecanese + Eastern Aegean clusters first). Hire third engineer (data) and a domain lead (ex-maritime ministry). Seed round €1.5-2.0M.
- **M16-M24:** approach full 77-route coverage; ship the FuelEU bolt-on Product 2 inside the Piraeus PSC unit. First cross-MS conversation with EMSA / Cyprus DMRT. ARR target end-month-24: €450-600K core plus €80-150K FuelEU.

## Team & hires
Founding pair: an ex-Attica or Minoan operations analyst who has lived inside an operator's PSO reporting cycle, plus a Greek-NLP engineer with prior public-sector deployment. First three hires: a back-end engineer (AIS + accounting integrations), a public-sector relationship lead (procurement-fluent), and a part-time State-aid counsel on retainer. Founding advisory board adds a former DG MOVE secondee or Greek State-aid lawyer — non-negotiable, because the audit-packet schema for Reg. 3577/92 has to land cleanly in the directorate's first submission.

## Risks & mitigations
- **Operator lobbying (wound).** Attica, Seajets, Minoan will read tightened oversight as adversarial. Mitigation: position consistently as "objective compliance audit-trail under EC Reg. 3577/92" — the agent automates what the ministry is already obliged to verify; operators benefit from a predictable, evidence-based process and from clean force-majeure adjudication.
- **Political churn.** A reshuffle resets the champion clock. Mitigation: build the relationship at directorate level, not only at GS level; ensure the audit packet has independent value for the upcoming DG MOVE review.
- **Data access.** AIS is commercial but tractable; ELSTAT is open; myDATA per-operator requires formal data-sharing within the existing PSO contract. Mitigation: v1 functions on AIS + EMY + ELSTAT only; treat myDATA as v2.
- **Corpus assembly.** Greek άγονη-γραμμή σύμβαση templates and ministerial decisions are scattered across ΦΕΚ issues spanning 30 years. Mitigation: 4-6 week paid corpus-assembly engagement with a Piraeus maritime-law boutique, scheduled before pilot kick-off.
- **AI Act timing.** The Annex III enforcement deferral to 2 December 2027 (Omnibus agreement 7 May 2026) gives 18 extra months of regulatory clarity for the v1 deployment; the agent sits in administrative-compliance territory rather than high-risk classification, but the buffer materially reduces the procurement-counsel friction.

# Pitch Deck

## Slide 1 — Άγονη Γραμμή Agent
- Agentic compliance loop for the barren-line ferry subsidy regime
- One directorate, one regulation, one Greek-language corpus
- T-Life Capital venture, Athens, 2026
- Co-founders: ex-operator analyst + Greek-NLP engineer

## Slide 2 — The problem at scale
- **€167M / 77 PSO routes** in the 2025 envelope (up from €90M / ~50 routes in 2019)
- Excel + PDFs + monthly operator-supplied returns
- 24 June 2026 N. Aegean cargo-ferry tender currently in flight — fresh example of the workload
- Every winter: cancelled sailings, parliamentary questions, no defensible evidence trail
- DG MOVE State-aid audit obligation already exists — and is not being met cleanly

## Slide 3 — Why now
- Subsidy envelope grew ~85% in six years; the desk did not
- 2025-2026 PM directive pushing agentic AI into Greek ministries
- DG MOVE cabotage review cycle opens 2026
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 — clean 18-month deployment runway
- Denmark (Søfartsstyrelsen AIS, 2024) and Norway (Sjøfartsdirektoratet, 2023) proved the pattern at smaller scale
- No incumbent has shipped at Greek route count, in Greek

## Slide 4 — Solution
- Six-step agent loop: AIS reality → force-majeure classifier → economics → scoring → Greek drafting → audit packet
- Case officer signs everything; agent drafts and marshals evidence
- Outputs: monthly compliance letter, clawback memo, DG MOVE-ready audit packet

## Slide 5 — Demo
- Live, on a real route (Πειραιάς → Ανάφη, winter 2025-26)
- Show 4 missed sailings: 2 force-majeure (with EMY + απαγορευτικό απόπλου), 2 breach
- Generated compliance letter, cited to σύμβαση clause and κανονισμός article
- Audit-packet PDF, on screen, in under 90 seconds

## Slide 6 — Market
- Primary: 77 PSO routes inside one ministry, €167M annual subsidy line
- Software ceiling 0.25-0.5% of subsidy = €420-835K ARR per ministry
- Year-2 bolt-on: FuelEU Maritime verification copilot at the Piraeus PSC unit (€80-150K pilot)
- Adjacent: EU PSO oversight at EMSA, Cyprus DMRT small-fleet equivalent
- Further bolt-ons: passenger-rights routing (active EU work on Reg. 1177/2010), small-port operations

## Slide 7 — Traction
- Direct-award pilot pre-registered in principle with Διεύθυνση Θαλασσίων Συγκοινωνιών, 6 routes
- Letter of intent in draft with ΓΓ Ναυτιλίας chief of staff
- Founding team committed; advisor pool includes ex-EMSA inspector and a Greek State-aid lawyer
- Verdict in T-Life internal screening: promote, composite 4.65 (re-qualified 4.5 PASS)

## Slide 8 — Business model
- Pilot: €55-90K direct-award, 6 months, ends before Apr 2027
- Production: per-route per-year licence, €8K-18K sliding scale across 77 routes
- Full coverage ≈ €690K ARR from one ministry
- FuelEU bolt-on year-2: €80-150K pilot, then per-port licence
- Other bolt-ons: €30-60K each

## Slide 9 — Competition & moat
- No deployed agentic system globally for island-cabotage PSO oversight at >50 routes
- DK/NO have route-subsidy schemes — far fewer routes, no Greek corpus
- DNV / LR / ABS sell commercial-verifier services to shipowners — we sell to the *state-side* inspector
- Greek SI incumbents do not own the barren-line file
- Moat: Greek-language contract corpus + EC Reg. 3577/92 audit obligation + the Reg. 3577/92 audit-packet schema in production

## Slide 10 — Team
- Co-founder 1: ex-Attica/Minoan operations analyst, 8+ years inside a PSO reporting cycle
- Co-founder 2: Greek-NLP engineer with prior ministry deployment
- Advisor: ex-EMSA Greek-desk officer
- Advisor: former Διεύθυνση Θαλασσίων Συγκοινωνιών director
- Advisor: Greek State-aid counsel (Reg. 3577/92 schema)

## Slide 11 — Ask
- Pre-seed €350K, 18% — runway to first paid pilot through the Dec 2026 winter close and the first quarterly audit packet
- Co-investors invited: T-Life Capital lead, one strategic angel from maritime
- Capital-efficient by design: one ministry, two founders, sliding licence scale
- Next decision moment for the chief of staff: a 6-route direct-award before the next winter

# Go-to-Market Plan

## Champion identification
The decision-maker is single, named and reachable. Primary champion: ΓΓ Ναυτιλίας and the Διεύθυνση Θαλασσίων Συγκοινωνιών director — the only desk inside the ministry that owns the barren-line file end-to-end and that just absorbed an €167M-on-77-routes workload. Secondary champion: chair of the island-MP caucus, whose voters generate the winter pressure cycle. Useful adjacents: ex-EMSA Greek-desk officer (credibility), the ministry's parliamentary-affairs office (whose job becomes easier the moment the audit packet exists), and — for the year-2 FuelEU arc — the Director of Port-State-Control at HCG. We do not approach operators (Attica, Seajets, Minoan) at all in the GTM phase — they are downstream of the ministry's decision and will be told, not consulted.

## First-meeting choreography
45 minutes, in the chief of staff's office, with the directorate director present. Open with one slide: last winter's missed sailings on a single route, classified by the agent as force-majeure vs breach, with the draft letter and the audit packet ready as printouts. Lead the number: €167M, 77 routes, one desk, one winter ahead. The minister's chief of staff sees a one-page artefact she can hand to parliament after the next cancellation cycle. No demo on a laptop; printouts. Close with a single ask: "We will run the next monthly close on six routes you choose, at our cost, in the next 30 days, under an NDA. If the output is the artefact you need, we propose a direct-award pilot to land before the Dec 2026 winter close." Leave behind: this memo, a one-page σύμβαση-citation sample, the Reg. 3577/92 audit-packet schema gap-list, and a calendar of the next four monthly close cycles.

## Pilot offer
Direct-award (απευθείας ανάθεση) of €55-90K, six routes, six monthly close cycles, plus one cumulative State-aid audit packet at month six. Routes are chosen by the directorate — we recommend a mix of one Cycladic, one Dodecanese, one Eastern Aegean, one Sporades, one Ionian, one Northern Aegean, to surface the variance in operator behaviour and weather profiles. Acceptance criterion is binary and pre-agreed: the directorate signs the monthly letter the agent drafts, with no more than one substantive edit per route per month. Pilot deliverable includes a redacted public-facing summary the GS can voluntarily release on Διαύγεια.

## Expansion path
After pilot acceptance, move to the innovation-pilot framework (or a Διαύγεια-published framework agreement on operational support to ΓΓ Ναυτιλίας), priced per route. Sequence: pilot routes 1-6 (M0-M6, finishing before Apr 2027), expansion to 25 routes (M7-M15), approach full 77-route coverage (M16-M24). Bolt-on modules — passenger-rights routing (now timely against the EU's active legislative work amending Reg. 1177/2010) and the small-port operations agent — sold to adjacent directorates inside the same ministry, not to municipal buyers directly, to avoid the fragmented small-port procurement problem.

The **FuelEU Maritime year-2 arc** runs along this same expansion track but through the HCG / PSC reporting line: a 1-day Piraeus PSC unit observation visit through an ex-DNV verifier intro time-and-motions the current FuelEU + Paris MoU drafting workflow on five live inspections; a 4-page memo to the GS Maritime / Director PSC frames the agent as "Greece is the first MS with a documented FuelEU verification workflow before the 30 June 2026 DoC deadline"; pilot vehicle is the EMSA-grant-linked innovation envelope rather than ministry budget.

## Procurement vehicle
Pilot phase: απευθείας ανάθεση under the €60K threshold (split into two phases if needed). Production phase: innovation-pilot framework via ΕΥΔΕ-ΤΠΕ or the Maritime ministry's own ΕΥΔ. Long-term: a framework agreement (συμφωνία-πλαίσιο) is the right vehicle once route count exceeds 25 and procurement value crosses the threshold. State-aid counsel reviews each procurement step; pricing is published on Διαύγεια as a matter of course. FuelEU bolt-on procurement: EMSA innovation envelope, then HCG line-item once the workflow is referenced.

## PR/comms strategy
Two registers. Inside the ministry, we are silent — the directorate publishes its own results. The first public win is the GS handing parliament a single PDF after the next winter cancellation cycle, showing exactly which sailings were missed across the €167M / 77-route envelope, why, and what each operator owes back. We do not put our logo on it. Externally — in T-Life Capital and Greek tech-press channels — we tell a venture-studio story (Greek-language moat, capital-efficient agentic startup, EU State-aid as moat-not-blocker) without naming routes or operators. We refuse press requests about specific compliance findings; those belong to the ministry. If an operator complains publicly, the response is one sentence: the agent drafts, the case officer signs, EC Reg. 3577/92 is the framework.
