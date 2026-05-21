# Business Plan

## Company thesis
FuelEU Maritime (EU 2023/1805) entered force 1 January 2025; first reporting period closed 31 January 2026; the inaugural Document of Compliance (DoC) deadline lands 30 June 2026 — five weeks out. EMSA's THETIS-MRV FuelEU module is operational, EU ETS coverage of maritime emissions has run two full years, and Greece — world's largest flag-of-domicile by tonnage and a Paris MoU port state with dense Aegean call traffic — sits at the intersection of both regimes. The state side of that intersection is the Λιμενικό Σώμα Port-State-Control (PSC) inspector at Piraeus, Thessaloniki and Heraklion, who today drafts a Paris MoU deficiency report in English, a διοικητική πράξη in Greek where detention is recommended, and a FuelEU-verification note with no settled template. We are building **PSC Copilot Hellas** — an agentic drafting and verification assistant that ingests the vessel's pre-arrival packet, computes the GHG-intensity delta against the FuelEU trajectory, classifies deficiencies under the Paris MoU codes, drafts both the English report and the Greek act, and pushes the structured output into THETIS-EU and the HCG case-file. Thesis is narrow on purpose: one cadre (state-side PSC inspectors), one binding regulation (FuelEU plus the converging ETS-maritime overlay), one Greek-language drafting layer no foreign verifier will touch. The window opens at the 30 June 2026 DoC deadline and stays open through the −6% step in 2030.

## Market & buyer
Primary buyer: ΥΝΑΝΠ (Υπουργείο Ναυτιλίας & Νησιωτικής Πολιτικής — historically ΥΕΝ) acting through the Λιμενικό Σώμα PSC directorate. Operational champion: Director of PSC inside HCG. Political champion: ΓΓ Ναυτιλίας, whose minister carries Greek-flag credibility into every EMSA Administrative Board meeting. Secondary: EMSA Greek-desk officer, since FuelEU is monitored at EMSA before any DG MOVE bilateral. We do not approach DNV, LR or ABS — they sell to shipowners and sit on the other side of the inspection counter; we sell to the state.

Volume: Greek PSC units run ~1,200-1,500 Paris MoU inspections per year across Piraeus, Thessaloniki, Heraklion and the smaller scheduled ports. From the 2026 cycle each inspection acquires a FuelEU verification layer, and ~40-50% of port calls touch a pooling-agreement vessel whose mathematics changes year-on-year as the trajectory ramps from −2% (2025) → −6% (2030) → −14.5% (2035) — every step a re-templating event. Defensible software ceiling at full deployment: €420K-€780K ARR from the ministry buyer alone, before EMSA-grant-linked or cross-MS expansion. Pricing anchor: the political cost of one missed FuelEU verification on a Greek-flagged vessel during the first DG MOVE review.

## Product — the agentic loop in detail
The agent runs per-inspection (event-triggered by pre-arrival notification, ~24-72h lead) plus a monthly close against THETIS-MRV. Steps:

1. **Pre-arrival ingestion.** Pull the vessel's MRV monitoring plan and last 12-month FuelEU pooling declarations from THETIS-MRV via the EMSA interface; pull Paris MoU inspection history (SIRE / RightShip / Equasis) for priority scoring.
2. **GHG-intensity computation.** Reproduce the FuelEU well-to-wake GHG-intensity calculation with energy-content factors and banking / borrowing rules; compute the delta against the applicable trajectory step; flag deficiency categories per FuelEU Annex IV.
3. **ETS-FuelEU cross-check.** Reconcile the FuelEU intensity result against the ETS surrendered-allowance position for the same voyages, surfacing vessels where the two regimes diverge (RFNBO sub-target, biofuel double-counting, pooling overlap).
4. **Priority scoring.** Combine FuelEU deficiency severity, Paris MoU NIR history, flag-state risk band and last inspection date to recommend inspection scope (full / partial / FuelEU-only).
5. **Drafting — English.** Generate the Paris MoU deficiency report in standard template with action codes (17 / 30 / 50), descriptions and rectification deadlines, citing the FuelEU article and Annex IV deficiency code.
6. **Drafting — Greek.** Generate the διοικητική πράξη in legal-grade Greek where detention or formal action is recommended, citing the relevant άρθρο and Greek Law 5299/2026 audit-trail clauses.
7. **Filing.** Push the structured deficiency record into THETIS-EU in the EMSA-mandated schema; mirror into the HCG case-management estate; emit the audit packet for the FuelEU annual EMSA review.

The PSC inspector signs both the English report and the Greek act — the agent drafts, computes and marshals evidence. No autonomous decision, no autonomous filing. Model versioning is pinned to EMSA's annual FuelEU guidance and the Paris MoU code list; the rule-set is data, not fine-tune.

## Revenue model & pricing
Pilot: €80-150K innovation envelope, three ports (Piraeus + Thessaloniki + Heraklion), six months, sized to cover the first post-DoC inspection cycle (July-December 2026). Απευθείας ανάθεση works at the lower bound; the clean vehicle is the EMSA-grant-linked innovation envelope, which the GS Maritime can convene. Production: per-port-per-year licence on a sliding scale — €60K Piraeus, €40K Thessaloniki, €30K Heraklion, €15-20K per smaller scheduled port. Full PSC-network coverage (8-10 ports) ~€280-360K ARR core. Year-2 cross-sell: EMSA cross-MS FuelEU benchmarking dashboard (€60-100K, EMSA-funded), and HCG case-management drafting bolt-on (€80-120K). Pricing anchor: one indictable FuelEU compliance miss on a Greek-flagged vessel before the first DG MOVE review.

## Unit economics
Per-inspection incremental cost is dominated by Greek + English NLP inference (~€7-12 per drafted report on cached prompts), negligible THETIS-MRV API queries, and the inspector review time the customer absorbs. Gross margin at three ports ~71%; at full PSC-network footprint ~80%, since feed and EMSA-interface costs are nearly fixed. CAC is sales-engineering inside one cadre — ~70 person-days to first signed pilot, lower than the barren-line venture because the buyer is single and named.

## Capital plan & milestones — 24 months
- **M0-M3:** founding team in place; 1-day Piraeus PSC observation visit (warm intro via ex-DNV verifier alumni) to time-and-motion the current FuelEU + Paris MoU workflow on five live inspections. 4-page memo to GS Maritime / Director PSC: *Greece is the first Member State with a documented FuelEU verification workflow before the 30 June 2026 DoC deadline*. Pre-seed €400K: two engineers, senior PSC-domain advisor, EMSA-interface integration, counsel time on innovation-envelope paperwork.
- **M4-M9:** pilot live at Piraeus across the first post-DoC inspection cycle; first 50 drafted Paris MoU reports and 10-15 διοικητικές πράξεις signed by inspectors. Extension to Thessaloniki and Heraklion in M7. Quarterly EMSA review packet delivered.
- **M10-M15:** scale to all scheduled PSC ports; ship the EMSA cross-MS benchmarking dashboard as Product 2. Hire third engineer (regulatory-data) and a senior maritime regulator (ex-EMSA or ex-Paris MoU secretariat). Seed round €1.8-2.2M.
- **M16-M24:** prepare for the FuelEU −6% step and 2030 RFNBO sub-target re-templating; open conversations with Cyprus DMRT and Malta MMSA. ARR target end-M24: €280-360K core plus €60-100K EMSA bolt-on.

## Team & hires
Founding pair: ex-DNV / Lloyd's Register Piraeus verifier (deep FuelEU + Paris MoU domain — Piraeus bench is unusually deep) plus a senior EU-regulation engineer with prior public-sector deployment. First three hires: back-end engineer (THETIS-EU / THETIS-MRV integrations), Greek administrative-law drafter on retainer, part-time former HCG PSC officer. Advisory board adds an ex-EMSA Greek-desk officer and a former Director of PSC — both warm-introducible from the Piraeus class-society network.

## Risks & mitigations
- **Class-society pushback (wound).** DNV, LR and ABS will frame the agent as "second-guessing" their issued FuelEU DoC. Mitigation: position as a *state-side* drafting and audit tool — the agent assists the PSC inspector; the DoC stays the class society's product; the agent verifies it against the inspection record.
- **HCG IT governance.** PSC IT sits inside the Hellenic Coast Guard estate; networking and auth thread through HCG governance, slower than ministry-side. Mitigation: v1 as a sidecar reachable from an HCG-issued laptop with read-only THETIS-MRV; cross-network integration is a v2 milestone.
- **Greek-language moat is partial.** Paris MoU report is English; Greek moat is the administrative-act layer plus the audit-trail packet. Mitigation: defensibility comes from three places — Greek administrative-law drafting, THETIS-EU schema lock-in, HCG case-management embedding.
- **Regulation-version drift.** FuelEU pooling mathematics changes year-on-year (banking / borrowing across −2% → −6% → −14.5%; RFNBO sub-target stepping in 2030 and 2034). Mitigation: rule-set as data, not fine-tune; annual maintenance line in the licence; ex-EMSA officer on the advisory board.
- **Procurement vehicle.** €80-150K is at the upper edge of απευθείας ανάθεση for a Coast Guard procurement. Mitigation: EMSA-grant-linked innovation envelope is the cleaner vehicle; the GS Maritime is the convener; 2-3 months of paperwork are deal-construction, not delay.
- **EU AI Act timing.** Annex III enforcement deferred to 2 December 2027 (Omnibus, 7 May 2026) gives an 18-month runway. PSC drafting is administrative-compliance territory, not high-risk; Greek Law 5299/2026 governs audit-trail and data-handling clauses inside the same window.

# Pitch Deck

## Slide 1 — PSC Copilot Hellas
- Agentic FuelEU + Paris MoU drafting assistant for the Hellenic Coast Guard PSC cadre
- One cadre of users, one binding regulation, one Greek-flag fleet at stake
- T-Life Capital venture, Athens, 2026
- Co-founders: ex-Piraeus class-society verifier + EU-regulation engineer

## Slide 2 — The problem at scale
- **1,200-1,500 Paris MoU inspections per year** through Piraeus / Thessaloniki / Heraklion
- FuelEU Maritime in force since 1 Jan 2025; first DoC deadline **30 June 2026**
- THETIS-MRV FuelEU module live at EMSA — but no draft-generation layer
- PSC inspector today: English deficiency report + Greek διοικητική πράξη + FuelEU note, all by hand
- World's largest Greek-flag tonnage = political weight at the next DG MOVE review

## Slide 3 — Why now
- FuelEU trajectory ramps −2% (2025) → −6% (2030) → −14.5% (2035): each step re-templates the math
- EU ETS extension to maritime (2024) + FuelEU = two converging compliance regimes
- 2025-2026 PM directive pushing agentic AI into Greek ministries
- Greek Law 5299/2026 sets the AI/data audit-trail floor we build on
- EU AI Act Annex III deferred to 2 Dec 2027 — clean 18-month deployment runway
- Denmark Søfartsstyrelsen (2025) and Singapore MPA digitalPORT@SG (2023) prove pieces of the pattern; nobody has integrated the loop

## Slide 4 — Solution
- Seven-step agent loop: pre-arrival ingestion → GHG-intensity computation → ETS cross-check → priority scoring → English Paris MoU report → Greek διοικητική πράξη → THETIS-EU filing
- Inspector signs everything; agent drafts, computes and marshals evidence
- Outputs: signed deficiency report, signed administrative act, EMSA audit packet

## Slide 5 — Demo
- Live, on a real Aegean port call (Piraeus, Q2 2026)
- Show a Greek-flagged tanker with a FuelEU intensity deficit and one missing RFNBO declaration
- Generated English Paris MoU report with codes 17 / 30 and rectification deadlines
- Generated Greek διοικητική πράξη citing άρθρο references and Greek Law 5299/2026 evidence clauses
- THETIS-EU-ready structured packet on screen in under 90 seconds

## Slide 6 — Market
- Primary: PSC cadre at 3-10 Greek ports under ΥΝΑΝΠ / Λιμενικό Σώμα
- Software ceiling at full coverage = €420-780K ARR per ministry
- Year-2 cross-sell: EMSA cross-MS FuelEU benchmarking dashboard (€60-100K)
- Year-2 bolt-on: HCG case-management drafting beyond FuelEU (€80-120K)
- Adjacent (M16+): Cyprus DMRT, Malta MMSA — Greek-flag-heavy Paris MoU port states

## Slide 7 — Traction
- 1-day Piraeus PSC observation visit booked via ex-DNV verifier intro
- 4-page memo to GS Maritime / Director PSC in draft
- EMSA Greek-desk sounding-out scheduled
- Verdict in T-Life internal screening: promote, composite 4.0 (re-qualified 4.17 PASS)

## Slide 8 — Business model
- Pilot: €80-150K innovation envelope, 6 months, 3 ports, ends before Dec 2026
- Production: per-port per-year licence, €15-60K sliding scale
- Full PSC network ≈ €280-360K ARR core
- EMSA cross-MS dashboard bolt-on: €60-100K
- HCG broader case-management bolt-on: €80-120K

## Slide 9 — Competition & moat
- DNV / Lloyd's Register / ABS sell **commercial-verifier services** to shipowners — we sell to the state-side PSC inspector
- No deployed agentic FuelEU drafting system in any EU member state; EMSA THETIS-MRV provides plumbing, not generation
- Denmark Søfartsstyrelsen pilot is Maersk-driven and shipowner-side; Singapore MPA is port-throughput, not compliance drafting
- Moat: Greek administrative-act drafting layer + THETIS-EU schema integration + HCG case-file embedding + EMSA guidance versioning

## Slide 10 — Team
- Co-founder 1: ex-DNV / LR Piraeus verifier, 8+ years on FuelEU + Paris MoU files
- Co-founder 2: EU-regulation engineer with prior public-sector deployment
- Advisor: ex-EMSA Greek-desk officer
- Advisor: former Director of Port-State-Control, Λιμενικό Σώμα
- Advisor: senior Greek administrative-law counsel

## Slide 11 — Ask
- Pre-seed €400K, 18% — runway to first signed innovation-envelope pilot across the post-DoC inspection cycle
- Co-investors invited: T-Life Capital lead, one strategic angel from Piraeus maritime
- Capital-efficient by design: one cadre, two founders, sliding licence scale, EMSA-funded year-2 bolt-on
- Next decision moment for the GS Maritime: a 3-port innovation-envelope pilot before the next FuelEU reporting cycle

# Go-to-Market Plan

## Champion identification
Decision-maker is layered. Operational: Director of PSC inside Λιμενικό Σώμα. Political-cover: ΓΓ Ναυτιλίας inside ΥΝΑΝΠ. The two must move together — the GS provides EMSA-deadline cover and convenes the innovation envelope; the PSC Director provides operational sign-off and inspector access. Useful adjacents: ex-DNV / LR Piraeus verifiers as warm-intro brokers, an EMSA Greek-desk officer for cross-MS framing, and senior Greek administrative-law counsel for the διοικητική πράξη layer. We do not approach DNV, LR or ABS as buyers — they are not the buyer and a meeting would only telegraph the play. Shipowners (Angelicoussis, Procopiou, Tsakos) are downstream of the inspection and will be told, not consulted.

## First-meeting choreography
45 minutes in the GS Maritime's office, PSC Director present, EMSA Greek-desk officer dialled in if possible. Open with one slide: a real Q1 2026 Aegean port call, the inspector's current artefacts on paper (Paris MoU draft, Greek act draft, FuelEU note), and beside them the agent's generated equivalents, citation-checked. Lead the number: 30 June 2026 DoC deadline, first DG MOVE review behind it, Greek-flag tonnage exposure, no documented verification workflow yet in any EU member state. The GS sees a one-page artefact she can hand to the EMSA Administrative Board. No laptop demo; printouts. Close with one ask: *we draft, side-by-side with a Piraeus inspector, the next five FuelEU-touching inspections at our cost, in 30 days, under NDA. If the output is the artefact your inspectors would sign, we propose a three-port innovation-envelope pilot before the end of the 2026 inspection cycle.* Leave behind: this memo, a sample διοικητική πράξη citing Greek Law 5299/2026 audit-trail clauses, the THETIS-EU schema gap-list, calendar of the next four inspection windows.

## Pilot offer
Innovation envelope (EMSA-grant-linked) of €80-150K, three ports (Piraeus + Thessaloniki + Heraklion), six months, six monthly inspection-cycle closes, plus one cumulative EMSA-ready audit packet at month six. €80K reachable through απευθείας ανάθεση if the GS prefers; €150K requires the innovation-envelope vehicle. Acceptance criterion is binary and pre-agreed: PSC inspectors sign the agent-drafted reports and acts, ≤1 substantive edit per inspection on average. Deliverable includes a redacted public summary the GS can release at the next EMSA Administrative Board, framing Greece as the first Member State with a documented FuelEU verification workflow.

## Expansion path
After pilot acceptance, move to a συμφωνία-πλαίσιο priced per-port-per-year across the PSC network. Sequence: pilot at three ports (M0-M6), expansion to all scheduled PSC ports (M7-M15), EMSA cross-MS dashboard as Product 2 (M10-M18), HCG case-management bolt-on (M16-M24). Cross-MS arc — Cyprus DMRT and Malta MMSA as second and third Greek-flag-heavy Paris MoU port states — runs from M18 through the EMSA Greek-desk, not bilateral ministry approaches. We do not bid into the shipowner-side commercial-verifier market; that is DNV / LR / ABS territory and a strategic distraction.

## Procurement vehicle
Pilot: EMSA-grant-linked innovation envelope is the cleanest vehicle; απευθείας ανάθεση under €60K is the fallback. Production: συμφωνία-πλαίσιο once port count crosses three; in parallel, an innovation-pilot framework via the ministry's ΕΥΔ for the HCG bolt-on. Long-term: multi-year licence inside the HCG IT estate once the THETIS-EU integration is referenceable. Counsel reviews each step; pricing is published on Διαύγεια; Greek Law 5299/2026 governs audit-trail and data-handling clauses across all stages.

## PR/comms strategy
Two registers, asymmetric. Inside the ministry and HCG we are silent — the PSC directorate publishes its own results. The first public win is the GS Maritime presenting at the EMSA Administrative Board (or the next DG MOVE bilateral) a one-page artefact showing the Greek FuelEU verification workflow as the EU's first documented end-to-end loop; we do not put our logo on it. Externally — T-Life Capital and Greek tech-press — a venture-studio story (Piraeus class-society talent, capital-efficient agentic startup, EU regulation as moat-not-blocker) without naming vessels, operators or findings. Press requests on compliance outcomes are refused; those belong to HCG. If a class society or shipowner objects publicly, the response is one sentence: *the agent drafts, the inspector signs, FuelEU Maritime and the Paris MoU are the frameworks.* The political weight of the world's largest Greek-flag tonnage carries the framing — Greece is not catching up to FuelEU; Greece is showing the EU how FuelEU verification gets done at scale, in the language of the inspection counter at Piraeus.
