# Business Plan

**Company (working title):** KTEO-Sentinel — a T-Life Capital portfolio venture building an anomaly- and fraud-pattern detection agent for the Greek vehicle-inspection network, sold into the General Secretariat for Transport.

**Thesis.** ΚΤΕΟ (Κέντρο Τεχνικού Ελέγχου Οχημάτων) fraud is a documented Greek-public-finance leakage point that combines a road-safety body count with a tax-revenue line item. Across the ~1,200-centre mixed public-and-private inspection network, "fictitious passes" — inspections recorded without the vehicle present, or rubber-stamped against template-copied photographs — produce both unroadworthy vehicles on the roads and unbilled fees that bypass the proper tax channel. The Δ/νση Τεχνικού Ελέγχου has the legal authority and the post-Tempi political tailwind, but no analytic surface. KTEO-Sentinel is that surface: a Greek-language agent that reads the daily inspection-report feed, scores each centre against statistical baselines, cross-references odometer histories with insurance and customs records, runs a vision model over inspection photographs for template re-use, clusters suspected ring patterns, and drafts an evidence-grade memo for the Δ/ντή Τεχνικού Ελέγχου to dispatch a regional transport directorate auditor (περιφερειακός ελεγκτής) on a targeted, defensible inspection. Reproducible-threshold audit trail on every flag. No autonomous enforcement. No public ranking.

**Architectural moat — the split that makes this defensible and shippable.** The scoring layer is deterministic and reproducible: a published methodology defines >3σ baselines (per-centre pass-rate, per-inspector defect mix, mean inspection time, per-VIN odometer monotonicity, per-photo template hash distance) and produces a fixed numeric score for any given record set. The drafting layer is an LLM, bounded by templates and citation enforcement, producing a Greek-language memo with paragraph-level citations to the specific records that triggered each flag. The vision layer is a narrow classifier trained on photo template re-use — similarity score against the centre's own prior photographs, not a "fraud" label. This three-layer split — deterministic-scoring + LLM-drafting + per-flag provenance — is the architectural answer to the buyer's only killer question: if we act on this memo and a private KTEO sues, can we defend it in court? Greek Law 5299/2026 requires that any agentic system used in an enforcement context demonstrate human-in-the-loop, reproducible thresholds, and documented data lineage. Our architecture is built to that bar from day one. The EU AI Act Annex III enforcement date was deferred to 2 December 2027 — an eighteen-month deployment window under current decision-support classification, and our conformity posture ships on day one.

**Market and buyer.** The economic buyer is the General Secretary for Transport (Γενικός Γραμματέας Μεταφορών). The co-buyer for the data pipeline is the General Secretariat for Information Systems & Digital Governance (ΓΓΠΣΨΔ), which owns the cross-ministry bus through which KTEO, insurance and AADE customs records are reconciled. The operational champion is the Δ/ντής Τεχνικού Ελέγχου, whose career incentive is to convert post-Tempi political pressure into visible enforcement throughput without exposing the directorate to a defamation suit from a politically connected private-KTEO operator. The user is the regional transport directorate auditor at one of the thirteen περιφέρειες, who today triages ad-hoc complaint dossiers from 1555 and ΕΛΑΣ Τροχαίας by hand. Annual inspection volume is in the low millions; the addressable analyst seat count is small (40–80 directorate auditors plus the central inspectorate) but per-seat contract value is high — the alternative is no analytic capacity at all.

**Why now (the timing window).** Four facts converge on autumn 2026. The 2023 Tempi rail crash has reset Greek tolerance for transport-safety modernisation — every transport-adjacent reform now travels with cross-bench parliamentary cover; that appetite has not yet been spent on KTEO. UK DVSA MOT analytics has produced public guidance and enforcement actions since 2023 — a clean, deployed comparator the Δ/ντής can cite to the GS without speculation. Greek Law 5299/2026 provides the legal substrate for public-interest cross-ministry data processing and explicitly anticipates agentic decision-support in regulated administrative contexts. The EU AI Act Annex III deferral to 2 December 2027 gives a clean eighteen-month deployment window before the new date binds.

**Product.** A web console embedded in the inspectorate's intranet plus a regional auditor tablet view. The agent ingests the nightly KTEO feed; runs the deterministic scoring layer to produce per-centre, per-inspector and per-VIN anomaly scores; cross-checks high-score records against the previous KTEO entry, active insurance file and import-customs declaration; runs the vision model against the centre's own historical photo set; clusters cross-centre coordination patterns; drafts a weekly Greek-language top-20 memo with numeric scores, contributing records and law-article basis. The regional auditor receives the same evidence pack on dispatch. No autonomous flagging. No public leaderboards.

**Revenue model and pricing.** Direct contract with the General Secretariat for Transport. Tier 1: €100k four-month pilot, Attica plus two περιφέρειες, internal memos only, NTUA Transport Systems Lab + AUEB Management Science panel adjudicating reproducibility of scores, precision of flagged anomalies confirmed by on-the-road inspection, and time-to-memo. Tier 2: €1.5M year-one national rollout, per-seat across the central inspectorate plus thirteen regional auditor seats, plus ΓΓΠΣΨΔ pipeline integration. Tier 3: five-year SLA-backed framework at low-seven-figure ACV, jointly procured with ΓΓΠΣΨΔ.

**Unit economics.** Greek/EU sovereign infrastructure under the ΓΓΠΣΨΔ shared-services framework. Marginal inference cost per report well under €0.05 at national volume; vision model runs overnight in batch. Per-seat ACV 15–30× variable cost. Gross margin above 70% after pipeline integration and a DPIA-coordinator headcount that we treat as cost-of-goods — the regulatory posture is the product.

**Capital plan and milestones.** Pre-seed €700k–€900k (T-Life Capital lead, one Greek automotive-strategic angel) for ten months through pilot and audit. Milestones: (1) pilot LoI with the Δ/νση Τεχνικού Ελέγχου within 120 days; (2) DPIA filed with the Hellenic DPA before day 1; (3) NTUA/AUEB-signed audit by month seven; (4) Tier-2 at month ten. Seed €3M–€4M at Tier-2 signing for thirteen-περιφέρεια customer success and adjacent surfaces — odometer-fraud-on-import with AADE customs and ΟχημαDocs vehicle-registry intake.

**Team and hires.** Three founding hires. (1) Technical founder — fraud/anomaly-detection data scientist with public-sector pipeline experience; owns scoring layer and vision model. (2) Automotive-domain co-founder — ex-Δ/νση Τεχνικού Ελέγχου analyst or ex-public-KTEO supervisor; owns methodology, defect-code dictionary, Δ/ντής relationship. (3) Senior backend engineer with ΓΓΠΣΨΔ pipeline experience; owns the AADE-insurance-customs cross-reference and photo ingestion. Post-pilot: DPIA-credentialed legal-tech officer, ex-περιφερειακός ελεγκτής as design partner, customer-success lead with περιφερειακή procurement scars.

**Risks.** (1) Defamation defensibility — the single live blocker named in qualification — mitigated by deterministic scoring + per-flag provenance, the human-confirms boundary, published thresholds, and a prohibition on public rankings. (2) Politically backed private-KTEO operators — mitigated by strictly internal outputs, by pilot scope in lower-private-concentration περιφέρειες, and by routing communications through the Δ/ντής. (3) DPIA timeline under Law 5299/2026 — mitigated by engaging the Hellenic DPA before day 1; DPIA acceptance is a hard pilot-go gate. (4) Precedent freshness — DVSA MOT analytics is real but thinly documented; the buyer hook leans on post-Tempi mandate and parliamentary-question pressure. (5) Public-versus-private KTEO dynamics — public-centre staff are unionised and structurally favour scrutiny of the private network; we engineer that asymmetry into the champion strategy by briefing public-KTEO representatives early.

---

# Pitch Deck

## Slide 1 — KTEO-Sentinel
- T-Life Capital portfolio venture, Athens
- Anomaly- and fraud-pattern detection agent for the Greek vehicle-inspection network
- Reads daily KTEO inspection feed across 1,200+ public and private centres; drafts evidence-grade weekly memos to the Δ/ντή Τεχνικού Ελέγχου
- Pilot-ready, four months to a NTUA/AUEB-signed audit report

## Slide 2 — Problem
- "Fictitious passes" — inspections recorded without the vehicle present, or rubber-stamped against template-copied photos — are a documented Greek-public-finance leakage point
- Both a road-safety body-count problem and a tax-revenue line item: unroadworthy vehicles on the road and inspection fees that bypass the proper tax channel
- The Δ/νση Τεχνικού Ελέγχου has the legal authority and the post-Tempi political cover, but no analytic surface; regional auditors triage by hand
- KTEO scandals are a recurring parliamentary-question topic with no current technical answer

## Slide 3 — Why Now
- 2023 Tempi crash converted transport-safety modernisation into cross-bench political capital — the appetite has not been spent on KTEO
- Greek Law 5299/2026 provides the legal substrate for public-interest cross-ministry data processing with explicit anticipation of agentic decision-support
- EU AI Act Annex III enforcement deferred to 2 December 2027 — clean eighteen-month deployment window
- UK DVSA MOT analytics (since 2023) is the deployed precedent the GS can cite in a memo without speculation
- Public-versus-private KTEO competition dynamics are at their most receptive — the public-centre union has a structural interest in scrutiny of the private network

## Slide 4 — Solution
- Three-layer moat: deterministic scoring engine + LLM-drafted Greek memos + per-flag provenance
- Reproducible-threshold methodology published with the contract; every flag carries underlying scores and contributing records
- Cross-reference layer joins KTEO with insurance and AADE customs under the Law 5299/2026 public-interest basis
- Vision model returns a photo-similarity score against the centre's own corpus — not a "fraud" label
- Human inspector confirms before any enforcement; no autonomous enforcement path

## Slide 5 — Demo
- Walkthrough on a sanitised retrospective slice of public-KTEO statistics, one περιφέρεια
- Three to five historical anomalies surfaced — per-centre pass-rate >3σ, per-inspector defect-mix outliers, template-photo clusters
- Side-by-side agent memo vs. blank draft; hover any sentence to surface the contributing record and threshold breach
- Regional auditor tablet view with dispatch evidence pack
- Audit-trail export to a court-admissible PDF with cryptographic record-hashing

## Slide 6 — Market
- Primary: Δ/νση Τεχνικού Ελέγχου + thirteen regional auditor seats + central inspectorate analyst pool — small seat count, high per-seat ACV
- Adjacents: odometer-fraud-on-import (joint with AADE customs); ΟχημαDocs vehicle-registry intake (same pipeline)
- Lateral: Cyprus and Bulgaria operate analogous mixed networks under EU Directive 2014/45/EU
- Long-term: deterministic-scoring + provenance as a reference pattern for any Greek regulator inspecting a private-operator network

## Slide 7 — Traction
- Idea sourced in T-Life Capital ministries pack at original composite 4.20; passed hostile second-pass at 4.17 (May 2026), no kill finding
- Founding automotive-domain co-founder candidate identified — ex-Δ/νση Τεχνικού Ελέγχου analyst, twelve years on the regulatory file
- Δ/ντής Τεχνικού Ελέγχου's office briefed at GS level; 60-minute scoping meeting offered
- Retrospective-anomaly demo prepared on sanitised public-KTEO statistics

## Slide 8 — Business Model
- Tier 1: €100k, four months, Attica + two περιφέρειες, internal memos only, NTUA/AUEB-adjudicated
- Tier 2: €1.5M year-one, per-seat across the inspectorate and thirteen regional auditor seats, plus ΓΓΠΣΨΔ pipeline integration
- Tier 3: five-year SLA-backed subscription, low-seven-figure ACV, jointly procured with ΓΓΠΣΨΔ
- Per-seat ACV at scale 15–30× variable cost; gross margin above 70%

## Slide 9 — Competition & Moat
- No Greek SI sells fraud-pattern analytics into KTEO oversight — clean blue ocean, twice confirmed
- TÜV Süd and DEKRA run internal QA tooling on the German private network, not productised; ITV/DGT pilots in Spain are not productised either
- Moat: Greek defect-code dictionary + per-inspector behavioural baselines + Greek photo corpus + Δ/ντής institutional trust earned in pilot
- Architectural moat: deterministic-scoring + per-flag provenance is the posture that survives the first defamation challenge

## Slide 10 — Team
- Technical founder — fraud/anomaly-detection data scientist with public-sector pipeline experience
- Automotive-domain co-founder — ex-Δ/νση Τεχνικού Ελέγχου analyst; owns methodology and Δ/ντής relationship
- Senior backend engineer with ΓΓΠΣΨΔ pipeline experience
- Advisors: former GS for Transport; NTUA Transport Systems Lab principal; ex-AADE customs investigator for the odometer adjacency

## Slide 11 — Ask
- €700k–€900k pre-seed, T-Life Capital lead plus one Greek automotive-strategic angel
- Ten-month runway through Tier-2 signing; DPIA filing and NTUA/AUEB audit treated as cost-of-goods
- Intros sought: Δ/ντή Τεχνικού Ελέγχου's office, GS for Transport chief of staff, President of NTUA Transport Systems Lab, Hellenic DPA point of contact

---

# Go-to-Market Plan

**Champion identification.** Primary operational champion is the Δ/ντής Τεχνικού Ελέγχου & Εγκαταστάσεων Εξυπηρέτησης Οχημάτων — the buyer with the directly addressable parliamentary-question burden and the authority to dispatch regional auditors. Primary political champion is the General Secretary for Transport, whose post-Tempi incentive is to be seen converting safety pressure into measurable enforcement throughput without inviting a defamation suit. Co-champion for the data pipeline is ΓΓΠΣΨΔ, without whose cooperation the KTEO + insurance + AADE customs cross-reference cannot run; ΓΓΠΣΨΔ is partnership-friendly because populating their substrate with a deployed agentic layer is the brief they need vendors to fulfil. Regional-level champion: one περιφερειακός ελεγκτής from each pilot περιφέρεια — typically a fifteen-to-twenty-year career official whose endorsement becomes the operational reference for Tier 2.

**First-meeting choreography.** Sixty minutes with the Δ/ντή Τεχνικού Ελέγχου, automotive-domain co-founder in the room, technical founder for the architecture slide only. Open on the political diagnosis — every KTEO scandal is a parliamentary question — and on the post-Tempi mandate, not the product. Twelve minutes on the deterministic-scoring + LLM-drafting + per-flag provenance architecture; this is the moment the Δ/ντής needs to internalise to handle the lawyer's question in the next meeting: "If we act on this memo and a private KTEO sues us for defamation, what's our defensibility?" Walk the retrospective demo — three to five historical anomalies with clean numeric audit trail. Ten minutes on Law 5299/2026 posture and the DPIA pre-brief plan. Ten minutes on the pilot offer. Cite UK DVSA MOT analytics by name. Do not ask for a decision in the room; ask for two follow-ups — a working session with Δ/νση legal counsel and the ΓΓΠΣΨΔ pipeline lead, and an introduction to NTUA Transport Systems Lab as audit-panel candidate.

**Pilot offer (the buyer hook).** Four-month closed pilot, Attica plus two περιφέρειες, under €100k, strictly internal prioritisation memos, NTUA Transport Systems Lab + AUEB Management Science joint statistical panel adjudicating reproducibility of the methodology against an independent re-run, precision of flagged anomalies as confirmed by on-the-road inspection, and time-to-memo. Every memo signed by a named inspectorate analyst; no autonomous flagging; no public leaderboard. Audit report owned by the Δ/νση Τεχνικού Ελέγχου, published or withheld at their discretion. If the panel finds the methodology not reproducible or precision below the agreed threshold, we tear up the invoice. Reference numbers in the room: UK DVSA MOT enforcement actions since 2023, and the public KTEO scandal volume since 2023-2024 — the benchmarks the GS will be asked about by the Minister.

**Procurement vehicle.** Tier 1 is απευθείας ανάθεση with the General Secretariat for Transport — the standard instrument for a four-month pilot at this budget, and the only one with a calendar compatible with the autumn 2026 political window. DPIA acceptance from the Hellenic DPA is a hard gate. Tier 2 is a competitive tender we expect to win on audit-panel evidence and Tier-1 regional-auditor endorsement; tender-document shaping with the General Secretariat and ΓΓΠΣΨΔ runs in parallel with the pilot. We welcome a Greek systems integrator as prime contractor on Tier 3 with KTEO-Sentinel as agentic-layer subcontractor — the path of least political resistance and the cleanest route to the ΓΓΠΣΨΔ master-data envelope.

**Public versus private KTEO competition dynamics.** The most delicate layer of the go-to-market. The mixed network produces an asymmetric political topology: public-centre staff are unionised state employees whose incentive is scrutiny that levels the playing field with the concentrated private sector; certain private operators have documented political backing and will read any analytical scrutiny as a competitive attack. KTEO-Sentinel manages this by (a) strictly internal outputs — never public rankings, never draft lists outside the inspectorate; (b) early briefings of public-KTEO staff associations as a tool that protects compliant centres of either sector; (c) no demos on identified live private-centre data — only sanitised retrospective slices and the pilot περιφέρειες under direct inspectorate authority; (d) any leak of a draft list during the pilot is a contractual termination event. Political risk is mitigated by architecture and contract, not avoidance.

**Expansion path.** Pilot pass → Tier-2 national contract at €1.5M year-one across the central inspectorate and thirteen regional auditor seats. Concurrent adjacents: odometer-fraud-on-import with AADE customs (same VIN cross-reference, separate budget) and ΟχημαDocs vehicle-registry intake. Year three: Cyprus and Bulgaria under EU Directive 2014/45/EU. Year four: other Greek regulator-on-private-operator inspection surfaces on the deterministic-scoring + provenance reference pattern.

**PR and comms.** No press release at signature. No press release during the pilot. One pre-briefed Kathimerini long-form when the audit report is delivered to the GS, framed around inspectorate productivity and road-safety enforcement throughput, NTUA/AUEB panel quoted and UK DVSA cited — never around any specific flagged centre. Greek union briefings (public-KTEO associations, regional auditor representatives) in person ahead of any press contact — message is auditor copilot, never replacement, never witch-hunt. Brussels-facing: a posted Law 5299/2026 + AI Act conformity-assessment posture document on day one citing the deterministic-scoring + per-flag provenance split, the DPIA filing date and the human-in-the-loop boundary — pre-empts EDPS or Commission inquiry well ahead of the 2 December 2027 Annex III date. No anomaly counts, centre names or precision numbers published without the Δ/ντή's written consent.
