# Business Plan

**Company thesis.** Sixteen days ago, on 5 May 2026, Law 5299/2026 entered the Government Gazette and rewrote the operating constraint of every RES permit in Greece. The new framework compresses wind-farm licensing from roughly ten years to eighteen months and — critically — binds ΥΠΕΝ engineers to statutory deadlines (30 days for exemption certificates inside Renewable Energy Acceleration Areas, 20 days for the technical screening, hard service-of-process windows for the outside-REAA four-corner review). The bottleneck has moved overnight from "queue" to "throughput per engineer-day", and the queue did not shrink first. We build the agentic copilot that delivers the L.5299/2026 deadlines: a single intake that triages exemption certificates inside REAAs and drafts the full Natura 2000 / archaeology / forestry / grid opinion outside REAAs, with every claim cited to primary source. The engineer signs. The deadline is met. The State, not a vendor, owns the throughput.

**Market & buyer.** The first and only buyer is the General Secretariat for Energy & Mineral Resources inside ΥΠΕΝ — specifically the RES Directorate and the new REAA exemption-certificate cell that L.5299/2026 stood up. Champion: the Γενικός Γραμματέας Ενέργειας, who now owns the deadline-miss risk personally and reports it to the PM office on a monthly cadence. Secondary stakeholder: RAAEY, downstream of our output but never our buyer. We do not sell to HEDNO/IPTO, we do not sell to developers — both positions are politically untenable. Beachhead is small in licence count, enormous in political weight: every unblocked GW is RRF-tracked and EU-visible. After a credible Greek reference, Spain's MITERD (RDL 6/2022 + RDL 7/2026), Italy's PNIEC-aligned regions, Germany's BNetzA / EnWG §43 accelerated procedures, and the UK NESO TMO4+ adjacent surface become the export shape.

**Product — the agentic loop, in detail.** A single intake endpoint accepts the permit packet (PDF narrative + KML/SHP geometry + applicant metadata). The agent (1) classifies the file into REAA-exempt vs. outside-REAA against the L.5299/2026-mandated acceleration-area map; (2) for REAA cases, runs the abbreviated exemption-certificate triage against the 30-day clock — siting consistency, technology eligibility, applicant validity, statutory carve-out compliance — and drafts the certificate; (3) for outside-REAA cases, geo-intersects the project footprint with the Natura 2000 layer, the Δασικός Χάρτης, and the archaeological declared-zones registry; (4) queries the relevant Ephorate's published opinions corpus and surfaces the top-3 precedent decisions with citations; (5) pulls grid-capacity status at the nearest HEDNO/IPTO substation from the published capacity tables (T+1 freshness in phase 1, live feed in phase 2); (6) cross-checks the applicant against ΓΕΜΗ and Διαύγεια-published RAAEY prior decisions; (7) drafts a structured Greek-language opinion with green/yellow/red per axis and primary-source citations; (8) flags items requiring inter-agency referral. No autonomous action; the agent is a draftsman.

**Revenue model & pricing.** Three layers. (1) Annual platform licence to ΥΠΕΝ: €180k–€350k/year per directorate seat-pool, under L.5299/2026 implementation-tooling lines. (2) Per-file processing fee at scale (€40–€90/file) once volume justifies it — paid via the RRF Component 1.4 envelope and later ESPA. (3) Adjacent modules: ΜΠΕ review copilot for ΔΙΠΑ (outside-REAA Cat A1/A2), post-licence monitoring, RAAEY decision-drafting support. Year-1 ARR target: €250k (pilot). Year-3 ARR target: €1.6M (full ΥΠΕΝ deployment + one EU comparator). Gross margin > 75% after pilot.

**Unit economics.** Per file processed: ~€8–€14 compute and storage. Engineer time saved 6–8 weeks per outside-REAA file at fully-loaded €70k/yr salary ≈ €8k–€11k; for REAA exemption certificates, the saved time is smaller per file but the deadline-miss cost is the binding constraint. At €60/file billed, contribution margin is ~80%. The State's value-per-file is dominated by L.5299/2026 deadline compliance and avoided GW-slip, not engineer time — a single 50 MW solar park unblocked one quarter earlier is ~€2–3M of accelerated capex into the economy.

**Capital plan & milestones.** Seed: €1.2M raised by T-Life Capital plus co-investors, 24-month runway. M0 (now): two co-founders + two engineers, contract negotiated with ΥΠΕΝ. M3: pilot signed under innovation procurement; €120k–€250k initial tranche. M6: 50 files processed; signed engineer-side NPS > +30; first L.5299/2026 statutory deadline met-on-time stat reported. M12: full RES Directorate deployment; ΜΠΕ module scoped. M18: RRF Component 1.4 anchor contract; €1M+ ARR. M24: Series A on the EU export thesis.

**Team & hires.** Founding pair: (a) energy-regulatory lawyer with ΥΠΕΝ/RAAEY background — owns the corridor and the legal reading of L.5299/2026; (b) GIS + LLM engineer — owns the agentic stack and the geo-intersection layer. First three hires: second LLM engineer (RAG + Greek-language eval), permit-domain specialist seconded from a midcap RES developer, customer-success engineer with public-sector procurement scar tissue. T-Life Capital supplies the corridor and the co-founding cap-table.

**Risks.** Three live ones. (1) Incumbent overlap — if Netcompany or Intracom move first on the L.5299/2026 implementation tender, the data-access window narrows; mitigation is to lock the engineer-copilot positioning in the first GS meeting and refuse any framing that scores private applicants. (2) Political third-rail — citizen opposition to RES siting is bipartisan; the agent is never marketed as approving, only as drafting under engineer signature. (3) Data access — Ephorate opinions corpus and live Δασικός Χάρτης revisions need OFYPEKA / Υπ. Πολιτισμού cooperation; mitigation is to start with the published 80% and earn the live feeds after the pilot proves uptake.

# Pitch Deck

## Slide 1 — Cover
- T-Life Capital | RES Permit Cross-Checker Agent
- The L.5299/2026 deadline, met on time, by the engineer who signs
- Pitch to: General Secretariat for Energy & Mineral Resources, ΥΠΕΝ
- May 2026

## Slide 2 — Problem
- **Law 5299/2026 (ΦΕΚ, 5 May 2026)** cuts wind-farm licensing from ~10 years to 1.5 years and imposes binding deadlines on ΥΠΕΝ engineers — 30 days for REAA exemption certificates, 20 days for technical screening, hard windows for the outside-REAA four-corner review.
- The four-corner check (Natura 2000, Ephorate archaeology, Δασικός Χάρτης, HEDNO/IPTO grid) is still driven by a single permit-evaluation engineer opening GIS portals one at a time.
- The queue did not shrink the day L.5299/2026 entered force; the throughput per engineer-day did not change.
- The deadline-miss risk now sits personally with the Γενικό Γραμματέα, monthly-reported to the PM office.

## Slide 3 — Why Now
- **L.5299/2026 binding deadlines on ΥΠΕΝ engineers** went live 16 days ago — the clock has started, the throughput has not.
- REAA carve-out under L.5299/2026 creates two operational lanes: exemption-certificate triage inside REAAs (30-day clock) and full four-corner review outside REAAs — the agent serves both.
- EU RED III Article 16 (2024) mandates RES go-to-areas mapping — substrate the agent consumes.
- Revised Water Framework Directive (EU) 2026/805 entered force 11 May 2026 — adjacent acceleration tailwind across ΥΠΕΝ surfaces.
- UK NESO TMO4+ approved April 2025, gate-2 offers issuing early 2026; Spain RDL 6/2022 + RDL 7/2026 live; Germany EnWG §43 / LNG-Beschleunigungsgesetz pattern (2023–2025). The acceleration playbook is operational across the EU; Greece needs a deployable agent.
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 (Omnibus deal, 7 May 2026) — regulatory air-cover window for limited-risk administrative-assist agents.

## Slide 4 — Solution
- One intake endpoint; two lanes — REAA exemption-certificate triage (30 days) and outside-REAA full four-corner opinion.
- Structured Greek-language output: green/yellow/red per axis, every claim hyperlinked to primary source.
- Engineer remains the decision-maker — the agent is a draftsman under binding L.5299/2026 deadlines.
- 8-week first-pass review compressed to ~8 hours of engineer time per outside-REAA file; REAA certificates drafted same-day for review.

## Slide 5 — Demo
- Live walk-through: a 70 MW solar park in Western Macedonia, inside a designated REAA.
- Lane A — REAA classification confirmed; exemption-certificate draft produced in 6 minutes against the 30-day statutory clock.
- Lane B — counter-example: a 110 MW wind project on a Natura-adjacent site outside any REAA. Geo-intersect surfaces a 220 m overlap with an SCI and one declared archaeological zone. Ephorate corpus returns the three nearest precedents — two clearing, one objecting. Output: 6-page drafted opinion, yellow on archaeology, green on the other three axes, with inter-agency referral list.

## Slide 6 — Market
- Primary: ΥΠΕΝ RES Directorate + new L.5299/2026 REAA exemption-certificate cell (~12–20 engineers, thousands of files/yr).
- Adjacent: ΜΠΕ review for ΔΙΠΑ (outside-REAA Cat A1/A2 backlog under L.4014/2011), post-licence monitoring, RAAEY decision support.
- Export: Spain (MITERD RDL 6/2022 + RDL 7/2026), Italy, Portugal, Germany (BNetzA / EnWG §43). Same four-corner stack, different national overlays; RED III is the EU glue.

## Slide 7 — Traction
- LOI in negotiation with the General Secretariat scoped to L.5299/2026 implementation tooling (pilot: 200 files, 6 months, mixed REAA/outside-REAA).
- Two co-founders signed; founding engineering hires identified from the Atypon / NTUA bench.
- T-Life Capital co-founding terms set; €1.2M seed committed.
- RRF Component 1.4 ("Greece 2.0") envelope confirmed available for innovation procurement.

## Slide 8 — Business Model
- Annual platform licence to ΥΠΕΝ: €180k–€350k.
- Per-file fee at scale: €40–€90.
- Module expansion: ΜΠΕ review, post-licence monitoring.
- Gross margin > 75% post-pilot; payback < 12 months on each new directorate.

## Slide 9 — Competition & Moat
- No deployed Greek-language agentic L.5299/2026 implementation tool exists today.
- geodata.gov.gr is a viewer, not a drafter; legacy SIs (Netcompany, Intracom) sell systems, not opinions; if they move first on the L.5299/2026 implementation tender the data-access window narrows — we move now.
- Moat: Ephorate opinions corpus + Δασικός Χάρτης Greek toponyms + signed engineer eval data + REAA-classifier ground truth.
- We do not compete with HEDNO/IPTO — we consume their published capacity tables.

## Slide 10 — Team
- Co-founder A: energy-regulatory lawyer, ex-ΥΠΕΝ / RAAEY corridor, reads L.5299/2026 line-by-line.
- Co-founder B: GIS + LLM engineer, prior agentic deployments.
- Backed by T-Life Capital — Athens venture studio, agentic-AI for Greek ministries.
- Three-hire plan: second LLM engineer, permit-domain specialist, customer-success engineer.

## Slide 11 — Ask
- Pilot signature under innovation procurement: €180k–€250k, 6 months, 200 files (mixed REAA / outside-REAA), framed as L.5299/2026 implementation tooling.
- One named engineer per lane (REAA cell + outside-REAA RES Directorate) as pilot users; weekly review cadence with the GS office.
- Standing data-access for Διαύγεια, ΓΕΜΗ, geodata.gov.gr, HEDNO capacity tables, REAA map.
- Decision: signed term sheet within 8 weeks; deployment within 12.

## Slide 12 — Closing
- L.5299/2026 set the deadline. The State must meet it.
- We draft. The engineer signs. The deadline is met. The throughput becomes the State's.
- Decision today: name the pilot engineer per lane and we open the corridor.

# Go-to-Market Plan

**Champion identification.** The single named buyer is the Γενικός Γραμματέας Ενέργειας & Ορυκτών Πρώτων Υλών inside ΥΠΕΝ. Sixteen days after L.5299/2026 entered force, he carries personal accountability to the PM office for deadline-miss risk on the new statutory clocks. We do not approach the Minister's office first — wrong door for a pilot of this size. We do not approach RAAEY — downstream and politically more exposed. The champion path is: T-Life Capital partner → corridor introduction via the energy-regulatory lawyer co-founder (NTUA Energy Policy bench or Bernitsas/Rokas energy regulatory partner network) → 30-minute briefing with the GS chief of staff → second meeting with the GS himself plus the RES Directorate director plus the head of the new REAA exemption-certificate cell.

**First-meeting choreography.** 45 minutes, GS office. Open in Greek and on the law: "Ο Νόμος 5299/2026 σας έδωσε δεσμευτικές προθεσμίες· εμείς σας δίνουμε το throughput να τις πιάνετε." Walk one real anonymised file end-to-end on the laptop — Lane A REAA exemption certificate in 6 minutes against the 30-day clock; Lane B outside-REAA four-corner opinion, 4 minutes per axis, citations live. Pre-empt the standard objection — "πώς θα διασφαλίσετε ότι δεν θα γίνει υποκατάστατο της κρίσης του μηχανικού;" — with the explicit governance model: engineer reads, edits, signs; every claim hyperlinked to a primary source; no autonomous action on any axis. Close with a concrete ask: name one engineer per lane, give us 200 files, give us six months. Leave a one-page Greek brief on L.5299/2026 implementation tooling and a single named follow-up contact.

**Pilot offer.** Six-month pilot under innovation procurement, sub-tender threshold. Tier: €180k all-in. Deliverables: drafted REAA exemption certificates + outside-REAA four-corner opinions on 200 mixed files, signed acceptance per lane, a co-authored methodology note with the directorate, and two quantified deltas — deadline-met-on-time rate against the L.5299/2026 statutory clocks (target: 95%+ on the REAA 30-day window) and first-pass engineer-hours reduction (target: 5x). KPI gates at month 2 (50 files) and month 4 (120 files). Clean exit at month 4 if NPS < 0 — directorate keeps the methodology.

**Expansion path.** Three vectors. (1) Within ΥΠΕΝ: add the ΜΠΕ review module for ΔΙΠΑ (outside-REAA Cat A1/A2 backlog under L.4014/2011 — large industrial, data centres, infrastructure), then post-licence monitoring. (2) Adjacent ministry: Υπ. Πολιτισμού's Ephorate side — same corpus, opposite seat. (3) EU export: Spain (MITERD RDL 6/2022 + RDL 7/2026) and Italy first; Germany BNetzA / EnWG §43 next; UK NESO TMO4+ as an adjacent reference rather than a buyer (system-operator owned). Strict sequencing — no EU outreach before a signed Greek reference plus a published L.5299/2026 deadline-met-on-time number.

**Procurement vehicle.** Primary vehicle: RRF Component 1.4 (digital transformation of public administration) under the "Greece 2.0" envelope, which has an innovation-procurement carve-out and a sub-€250k threshold that avoids open tender. We frame the contract title as "L.5299/2026 implementation tooling — engineer copilot for REAA + outside-REAA pathways" to anchor it to the law and pre-empt any reframing by Netcompany or Intracom on their RAAEY framework relationships. Secondary vehicle: ESPA 2021–2027 digital-transformation programmes via ΚτΠ AE. Fallback: direct ΥΠΕΝ budget under research-and-innovation lines.

**PR/comms strategy.** Silence during the pilot; the directorate must not read about itself before it chooses to. After the month-4 KPI gate, a co-authored methodology note in a technical venue (energypress, RAAEY publications) under the "engineer copilot under binding L.5299/2026 deadlines" frame — never "AI approves wind farms". After the month-6 close, a single joint announcement with ΥΠΕΝ tied to the L.5299/2026 first-anniversary scorecard, with the deadline-met-on-time number, the engineer-NPS number, and the explicit "the engineer signs, the agent drafts" line. Pre-brief two friendly energy-beat journalists and one EU-policy outlet. No social-media-first announcements. Red-team the announcement with one ΣτΕ-side litigator and one citizen-opposition stakeholder before publication.
