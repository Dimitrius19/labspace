# Business Plan

**Company (working title):** Ergani Risk Lens — a T-Life Capital portfolio venture building an agentic inspection-prioritisation layer for ΣΕΠΕ (the Greek Labour Inspectorate, now operating within the unified labour-and-social-security inspection authority ΥΠΕΚΥΠ).

**Thesis.** Greek labour inspection is a data-rich, signal-poor operation. ΕΡΓΑΝΗ captures every contract change, shift declaration, overtime hour, and termination in the country in close to real time. EFKA holds contribution-anomaly signals. AADE's myDATA holds payroll-to-revenue ratios. ΣΕΠΕ's intake desk receives thousands of worker complaints a year. None of these signals are fused into the inspection-planning workflow. Inspectors still build weekly rounds from sector campaigns, complaint backlogs, and personal heuristics. The result is that Cyclades hoteliers running half-declared seasonal crews, Manolada strawberry growers cycling posted workers through fictitious contracts, and Athens delivery platforms re-classifying staff out of dependent employment all sit in plain sight of the data and outside the field of view of the next inspection. Ergani Risk Lens ships a transparency-first agent that fuses these signals nightly, ranks employers on a published multi-factor risk index, and produces a justified inspection queue plus a pre-inspection briefing memo for each ΣΕΠΕ regional team. The inspector picks, the inspector overrides, the inspector signs.

**Architectural moat — transparency-first by construction.** Risk scoring of employers is a political third rail in every European jurisdiction where it has surfaced; the Netherlands toeslagenaffaire and the UK DWP fraud-detection findings are the canonical anti-precedents. Ergani Risk Lens is built so that every factor in the score is published in Greek, every factor cite-able to the regulation or KPI it operationalises, every threshold tunable by the central planning office (Διεύθυνση Προγραμματισμού Ελέγχων), and every employer's score reproducible from the same public methodology a journalist or business association could read. The scoring layer is a deterministic feature pipeline with weighted, monotone risk factors — not an opaque deep model — because the score must survive a parliamentary question, a SEV/GSEVEE complaint, and an ΑΠΔΠΧ (Hellenic DPA) inquiry on the same day. The LLM layer sits strictly on top of the score: it drafts the Greek pre-inspection briefing memo, it translates risk factors into operational language, and it summarises post-inspection outcomes into the feedback loop. This split keeps the system on the limited-risk side of EU AI Act Annex III (the LLM is decision-support to a named human inspector, never a sanction engine), keeps it on the right side of Greek Law 5299/2026, and keeps the methodology defensible to the parties most likely to attack it.

**Market and buyer.** The economic buyer is the ΣΕΠΕ Special Secretary (Ειδικός Γραμματέας Επιθεώρησης Εργασίας), operating within the unified ΥΠΕΚΥΠ inspection structure created by the 2023–2025 reforms that merged labour-inspection with social-security inspection. The policy buyer is the General Secretary for Labour at the Ministry of Labour and Social Security. The user inside the ministry is the regional inspector (επιθεωρητής εργασίας) and, at headquarters, the central planning office that builds the weekly inspection calendar. Greece has ≈900 labour inspectors fielded across 15 regional inspection directorates; the addressable seat count is small but the political-tailwind multiplier is large. Undeclared work, posted-worker fraud in agriculture, and tourism-sector working-time violations are the three buyer pains that show up in every quarterly briefing to the Minister and in the European Commission's country-specific recommendations on the Greek labour market.

**Why now (the timing window).** Four facts converge on summer and autumn 2026. First, Spain's Herramienta Lucha contra el Fraude is the direct 1:1 international analogue: the Inspección de Trabajo y Seguridad Social has been using a risk-scoring system to prioritise inspections since 2018, and it is now being expanded under the Spanish Strategic Labour Inspection Plan 2025–2027 with published methodology and outcome metrics. The ΣΕΠΕ Special Secretary's peers across Madrid are this year's case study. Second, the ΥΠΕΚΥΠ merger has produced an internal mandate to demonstrate that the unified body delivers more inspection value per inspector-day than the predecessor bodies combined did separately — the political deadline for that demonstration is the first national report on the merger, due in the 2027 budget cycle. Third, the EU AI Act Annex III enforcement window for employment-related decisions was deferred to 2 December 2027, giving an eighteen-month runway to deploy under decision-support framing while we ready the conformity-assessment posture. Fourth, Greek Law 5299/2026 sets the domestic AI/data regime, and a transparency-first published-methodology architecture is exactly the deployment posture it favours.

**Product.** A web application embedded in the ΣΕΠΕ workflow, ingesting nightly ΕΡΓΑΝΗ diffs and producing a regional weekly inspection queue by Monday 07:00. The agent loop: pull last-30-day ΕΡΓΑΝΗ deltas (contract changes, shift declarations, overtime declarations, terminations) per region; cross-reference ΣΕΠΕ complaint intake (including the citizen-facing complaint channel and the Σ.Ε.Π.Ε.-Direct line), EFKA contribution-anomaly signals, and AADE myDATA payroll-to-revenue ratios; score each employer on the published multi-factor risk index with every factor cite-able in writing; rank a queue per inspector specialisation (working-time, posted-worker, undeclared-work, occupational-safety) with the top-three risk drivers per employer named in Greek; draft a one-page pre-inspection briefing memo per employer; capture post-inspection outcome via a structured form and feed it into next week's weights; surface sector-level heatmaps for the central planning office, with Cyclades-and-Crete seasonal-tourism overlays from May to October and Northern-Greece-agriculture overlays from March to September.

**Revenue model and pricing.** Direct contract with ΣΕΠΕ via the Ministry of Labour. Tier 1: €40–55k for a 12-week single-region parallel-run pilot — likely Crete or South Aegean for tourism-season relevance, or Western Greece (the Ileia ΠΕ that covers Manolada) for the agriculture cycle. Tier 2: €200–400k national rollout across all 15 regional directorates on a per-region SaaS-plus-implementation basis. Tier 3: a multi-year framework with throughput SLAs and an annual public methodology audit, low-seven-figure annual contract value. Per-inspector ACV at scale ≈€700–1,000/year, anchored against the documented productivity uplift of risk-targeted inspection campaigns in the Spanish, UK HMRC, and Dutch Arbeidsinspectie programmes.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider, with a contractual path to the Mistral/SAP infrastructure that the France-Germany sovereign-AI agreement is standing up through 2030. The scoring pipeline is cheap to run (tabular features over the ΕΡΓΑΝΗ delta volume; a few hundred euro of compute per region per month). The LLM-drafting layer is the cost driver, at €0.10–0.20 per pre-inspection briefing memo at current sovereign-LLM pricing. Per-region ACV at Tier-2 scale is 30–60× variable cost. Gross margin target 75%+ after Greek-language NER tuning and ΕΡΓΑΝΗ-integration support.

**Capital plan and milestones.** Pre-seed €500k–€700k (T-Life Capital + one Greek strategic angel with public-sector procurement scars) to fund the founding team for nine months through the Tier-1 pilot and into Tier-2 procurement. Milestones: (1) signed pilot LoI with the ΣΕΠΕ Special Secretary within 120 days; (2) pilot region chosen and ΕΡΓΑΝΗ data-sharing agreement signed at month three; (3) 12-week parallel-run complete with a published outcome report at month six; (4) Tier-2 tender shaped jointly with ΣΕΠΕ procurement at month nine. Seed round €2.0–3.0M at Tier-2 signature, used to staff regional customer-success, a published-methodology engineering team, and a second product line (Ergani Anomaly Lens for the EFKA contribution-fraud desk — adjacent buyer at the merged ΥΠΕΚΥΠ, same data pipes).

**Team and hires.** Three founding hires: (1) technical founder with applied-ML or labour-economics background, owns the scoring pipeline and the published-methodology document; (2) Greek-NLP engineer, owns Greek complaint-text classification, Greek sector-code mapping, and parsing of sectoral collective-bargaining agreements (συλλογικές συμβάσεις εργασίας); (3) ex-ΣΕΠΕ inspector as senior advisor or co-founder — the gating dependency, supplies operational legitimacy and the ΥΠΕΚΥΠ relationship. Post-pilot hires: a labour-economist for the outcome-evaluation layer, a data engineer to harden the ΕΡΓΑΝΗ-EFKA-AADE pipelines, and a public-sector customer-success lead.

**Risks.** (1) "Algorithmic harassment of employers" — SEV (Hellenic Federation of Enterprises) and GSEVEE (small-business confederation) will scrutinise any risk-scoring of employers. Mitigation: every factor published in Greek, every threshold disclosed, every inspector override logged, methodology open to external audit, and an advisory consultation with SEV and GSEVEE in the design phase. (2) "Black box" objection from inspectors themselves — mitigated by displaying the top-three drivers per employer in Greek on the inspector's queue, by allowing inspector override with one click and a free-text justification, and by feeding inspector feedback into the weekly weight tune. (3) Greek Law 5299/2026 and EU AI Act compliance — the transparency-first architecture is the answer; the system is decision-support, never a sanction engine. (4) Data-sharing agreements across ΕΡΓΑΝΗ, EFKA, AADE — the ΥΠΕΚΥΠ merger has reduced this friction inside the labour-and-social-security perimeter but the AADE myDATA tap requires a formal protocol with the Independent Authority; we treat that protocol as a Tier-1 deliverable, not a Tier-2 problem. (5) Founder-market-fit — the ex-ΣΕΠΕ inspector advisor is the gating hire; the pre-seed is contingent on that name being signed.

---

# Pitch Deck

## Slide 1 — Ergani Risk Lens
- T-Life Capital portfolio venture, Athens
- ΣΕΠΕ labour-inspection prioritisation agent on top of ΕΡΓΑΝΗ
- Ranks inspection targets daily; every factor published in Greek; the inspector picks from a justified queue
- Pilot-ready, 12 weeks to first parallel-run with the ΣΕΠΕ Special Secretary's chosen region

## Slide 2 — Problem
- ΣΕΠΕ inspectors plan rounds from complaints, sector campaigns, and heuristics; ΕΡΓΑΝΗ is data-rich but feeds almost no signal back
- Undeclared work in tourism (Cyclades, Crete), posted-worker fraud in agriculture (Manolada strawberries), and working-time violations in food service are the three documented buyer pains
- EFKA contribution anomalies and AADE myDATA payroll-revenue ratios sit unused in inspection planning
- ΥΠΕΚΥΠ merger has created an internal mandate to demonstrate per-inspector productivity gains by the 2027 budget cycle

## Slide 3 — Why Now
- Spain's Herramienta Lucha contra el Fraude is the direct 1:1 analogue, operational since 2018 and being expanded under the 2025–2027 Strategic Labour Inspection Plan with published methodology — the ΣΕΠΕ Special Secretary's peers in Madrid are this year's reference
- UK HMRC National Minimum Wage enforcement and the Dutch Arbeidsinspectie both run published risk models with documented outcomes
- EU AI Act Annex III employment-decisions enforcement deferred to 2 December 2027 — clean 18-month deployment window under decision-support framing
- Greek Law 5299/2026 favours transparency-first deployment posture
- ΥΠΕΚΥΠ unified-inspection mandate creates a measurable internal deadline

## Slide 4 — Solution
- Multi-factor risk score with every factor published in Greek and cite-able in writing
- Deterministic monotone scoring pipeline + LLM drafting layer on top — not the other way around
- Inspector queue with top-three risk drivers per employer named in Greek, one-click override with logged justification
- Pre-inspection briefing memo per employer, drafted by the LLM under template constraint
- Outcome capture feeds the next week's weights — the system gets sharper every cycle

## Slide 5 — Demo
- Live walkthrough on a synthetic Cyclades hotel cluster, three employers ranked
- Hover any risk factor, see the published methodology and the underlying ΕΡΓΑΝΗ delta
- Open the inspector queue, override one entry with a justification, send the pre-inspection memo to the field tablet
- Outcome form post-inspection: violation found / not found, type, severity → flows into the weekly retune

## Slide 6 — Market
- Greek primary market: ΣΕΠΕ ≈900 inspectors across 15 regional directorates
- Tier-2 ACV per region €15–25k; national TAM low-seven-figure annual recurring
- Adjacent product line at the merged ΥΠΕΚΥΠ: Ergani Anomaly Lens for the EFKA contribution-fraud desk (same data pipes, separate budget)
- Lateral: ΕΦΕΤ food-safety inspection prioritisation, OPEKEPE CAP-compliance prioritisation (same risk-fusion architecture, different ministries)
- Long-term: replicable to Cyprus and to Greek-speaking jurisdictions with light localisation

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.20, passed hostile qualification re-pass (May 2026), zero kill findings
- Ex-ΣΕΠΕ inspector advisor candidate identified (15+ years field, tourism-and-agriculture campaigns lead)
- Two ΣΕΠΕ regional directorates expressing pilot interest under NDA (one tourism, one agriculture)
- Greek-NLP complaint-text classification proof-of-concept on a 5,000-document seeded corpus

## Slide 8 — Business Model
- Tier 1 pilot: €40–55k, 12 weeks, one region (Crete or Western Greece)
- Tier 2 national rollout: €200–400k across all 15 regional directorates
- Tier 3 multi-year framework with throughput SLAs and annual published-methodology audit
- Per-inspector ACV ≈€700–1,000/year at scale

## Slide 9 — Competition & Moat
- No deployed agentic prioritisation layer exists for Greek labour inspections — ΕΡΓΑΝΗ exists, complaints exist, the fusion layer does not
- Incumbent ΕΡΓΑΝΗ vendors are forms-and-database; they do not ship a risk-fusion agent
- Moat: Greek complaint-text classification, Greek sector-code mapping, parsing of Greek sectoral collective-bargaining agreements, and the ΥΠΕΚΥΠ inside-relationship
- Architectural moat: transparency-first published methodology is the post-toeslagenaffaire architecture European supervisors are now writing into guidance

## Slide 10 — Team
- Technical founder — applied-ML or labour-economics background, owns the scoring pipeline and the methodology document
- Greek-NLP engineering co-founder — owns complaint-text classification and collective-bargaining-agreement parsing
- Ex-ΣΕΠΕ inspector advisor — gating dependency, supplies ΥΠΕΚΥΠ relationship and operational legitimacy
- Advisor bench: a former General Secretary for Labour, a labour-law academic, an SEV/GSEVEE liaison

## Slide 11 — Ask
- €500k–€700k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through the Tier-2 tender
- Introductions sought: ΣΕΠΕ Special Secretary's office, Ministry of Labour chief of staff, AADE governor's office for myDATA protocol shaping

---

# Go-to-Market Plan

**Champion identification.** Primary champion: the ΣΕΠΕ Special Secretary (Ειδικός Γραμματέας Επιθεώρησης Εργασίας), operating within the unified ΥΠΕΚΥΠ structure. The Special Secretary owns the inspection-strategy document the Minister briefs to Parliament and to the European Commission, and carries the internal mandate to demonstrate that the merger has produced per-inspector productivity gains. Secondary champion: the General Secretary for Labour at the Ministry of Labour and Social Security, who controls the procurement calendar and the Recovery-and-Resilience reporting line that touches labour-inspection modernisation. Operational champion at the regional level: the director of one pilot regional inspection directorate — Crete and South Aegean are the natural tourism-season pilots, Western Greece (the Ileia ΠΕ that covers the Manolada strawberry corridor) is the natural agriculture pilot. Headquarters operational champion: the head of the Διεύθυνση Προγραμματισμού Ελέγχων, who will be the daily user of the central heatmap.

**First-meeting choreography.** Forty-five minutes with the Special Secretary, ex-ΣΕΠΕ inspector advisor physically in the room (this is the credibility multiplier; without it, the meeting does not happen), technical founder for the methodology slide only. Open with the Spanish precedent — Herramienta Lucha contra el Fraude under the Strategic Labour Inspection Plan 2025–2027 — and the documented per-inspection-day productivity numbers from Madrid. Spend ten minutes on the transparency-first architecture: every factor published in Greek, every threshold disclosed, every inspector override logged. Cite the toeslagenaffaire as the explicit anti-precedent the architecture is built against. Spend ten minutes on the seasonal pilots: name Crete or South Aegean for tourism (Cyclades hospitality undeclared work peaks July–August), Western Greece for agriculture (Manolada posted-worker fraud peaks April–June and the harvest is the operational crisis), and offer the choice. Close on the pilot offer. Do not ask for a decision in the room. Ask for one follow-up: a 30-minute working session with the head of the Διεύθυνση Προγραμματισμού Ελέγχων and the ΥΠΕΚΥΠ IT director.

**Pilot offer (the buyer hook).** A 12-week parallel-run in one region, under €55k, scored against the directorate's current inspection plan on three measures: violations found per inspection-day, severity-weighted violation index, and inspector NPS. Every factor in the risk score is published in Greek on day one — the SEV and GSEVEE briefings are part of the pilot deliverable, not an afterthought. Inspector override is mandatory and logged; the inspector signs every inspection plan, ours or theirs. Outcome report published at the Special Secretary's discretion. If the parallel-run does not show ≥30% improvement on violations-per-inspection-day or any erosion of the inspector NPS, we tear up the invoice and the published methodology stays with ΣΕΠΕ for internal use. The pilot timing is sequenced to the seasonal pain: a tourism-pilot scoped May–July for the high-season peak, or an agriculture-pilot scoped March–May for the strawberry harvest in Ileia.

**Expansion path.** Pilot pass → Tier-2 national tender across all 15 regional directorates at €200–400k year-one, per-region ACV thereafter. Concurrent product expansion to Ergani Anomaly Lens at the EFKA contribution-fraud desk inside the same ΥΠΕΚΥΠ perimeter — adjacent buyer, separate budget line, same data pipes, same published-methodology architecture. Lateral expansion from year two: ΕΦΕΤ food-safety inspection prioritisation, OPEKEPE CAP-compliance prioritisation. The risk-fusion + transparency-first architecture is the platform; ministries are the customers.

**Procurement vehicle.** Tier 1 is a direct ΣΕΠΕ contract under the threshold for open competitive tender (απευθείας ανάθεση within an innovation-pilot framework, calibrated to the <€60k threshold), the standard procurement instrument for a 12-week pilot at this budget tier and the only one with a calendar that matches a seasonal pilot window. Tier 2 is a competitive tender we expect to win on the pilot outcome report and on the per-region productivity numbers; we begin tender-document shaping with the Ministry of Labour procurement office in parallel with the pilot. We assume and welcome the existing ΕΡΓΑΝΗ vendor stack as the integration counterparty, with Ergani Risk Lens as the agentic-layer subcontractor on Tier 3 if procurement prefers a prime-plus-sub structure.

**PR and comms.** No press release at pilot signature. No press release during the parallel-run. The published-methodology document goes live on day one of the pilot on a ΣΕΠΕ subdomain — the SEV and GSEVEE briefings reference it directly, and the Hellenic DPA (ΑΠΔΠΧ) receives a courtesy copy alongside the data-sharing agreement. Trade-union briefings (GSEE, OIYE, and the sectoral federations for hospitality and agriculture) held in person ahead of any press contact — the message is inspector productivity and worker protection in tourism and agriculture, never inspector replacement. The first press contact comes on the day the outcome report is shared with the Special Secretary: one pre-briefed Kathimerini long-form, framed around violations-found-per-inspection-day in tourism and agriculture, with the published methodology cited and the Spanish, UK HMRC, and Dutch Arbeidsinspectie precedents as the international comparator set. Brussels-facing comms: a posted EU AI Act conformity-assessment posture document on day one, citing the transparency-first decision-support architecture and the post-toeslagenaffaire Dutch reset as the precedent the system is built against — this pre-empts any European supervisor inquiry and positions the system cleanly inside the limited-risk classification ahead of the 2 December 2027 Annex III enforcement date. We do not publish per-employer scores. We do not publish per-inspector productivity numbers without the Special Secretary's written consent. The audit calendar is the Special Secretary's.
