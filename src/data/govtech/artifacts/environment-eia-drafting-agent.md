# Business Plan

**Company thesis.** Every infrastructure permit, every non-REAA renewable, every data centre, every motorway concession, every cement-plant retrofit and every Just Transition redevelopment in Greece passes through the same chokepoint — a ΜΠΕ (Μελέτη Περιβαλλοντικών Επιπτώσεων) filed under Law 4014/2011 and reviewed by ΔΙΠΑ inside the General Directorate of Environmental Policy at ΥΠΕΝ. Law 5299/2026 took the RES happy path off the table by exempting projects inside Renewable Energy Acceleration Areas, but left the entire Category A1/A2 backlog — every project outside a REAA, every Cat A1 industrial installation, every data centre, every airport and port expansion — squarely inside L.4014/2011 with no relief. The 2024-2025 amendments shortened mandatory consultation windows, compressing the reviewer's drafting time without adding reviewers; the throughput problem just got worse. We build the agentic copilot that lives on the ΔΙΠΑ side of the desk: a structured deficiency-report drafter that opens any incoming ΜΠΕ, classifies it against L.4014/2011 + JMD 1958/2012, draws the green/yellow/red grid against the statutory template, flags weak baselines and missing chapters, and outputs a Greek-language drafted reviewer's opinion with every flag traced to statute and to a specific page in the filing. The reviewer reads, edits, signs the ΑΕΠΟ (Απόφαση Έγκρισης Περιβαλλοντικών Όρων). The State, not the consultancy that filed the study, owns the verdict.

**Market & buyer.** Two-sided, sold one side only at first. The buyer is the Γενική Διευθύντρια Περιβαλλοντικής Πολιτικής inside ΥΠΕΝ — slow-burn, technocratic, the cleanest operational seat in the ministry, no entrenched SI on the review side. The user is split: ΔΙΠΑ reviewer first; private-market ΜΠΕ consultant (LDK / ENVECO / ECOS / Draxis) second. We sell only the ministry side at the beachhead. The consultancy lobby reads any drafting-side product as a vector to their service revenue; we will not touch the drafting side until the ΔΙΠΑ reference is signed and a reviewer-NPS number is public. After the reference, the consultancy lane becomes a quiet B2B SaaS — same engine, opposite seat, with a moat the lobby cannot replicate because we hold the only Greek-language EIA-deficiency eval set with reviewer signatures attached.

**Why now.** Three forces converged in the eleven months before this memo. First, L.5299/2026 (ΦΕΚ, 5 May 2026) exempted REAA-internal projects but preserved the L.4014/2011 regime for everything else — the Cat A1/A2 backlog is unchanged in volume and harder in mix. Second, the 2024-2025 amendments to L.4014/2011 shortened public-consultation periods; Aarhus floors hold for citizen-input duration, but the reviewer's internal turnaround was the variable that gave way. Third, ESPA 2021-2027 + RRF Component 1.4 + Just Transition Fund disbursement all hinge on ΑΕΠΟ throughput — every quarter ΔΙΠΑ misses on a flagship file is an EU-tracked political event. EU AI Act Annex III enforcement was deferred to 2 December 2027 by the Omnibus deal (7 May 2026), giving an eighteen-month air-cover window for a limited-risk administrative-assist tool that never decides. The Aarhus floor is respected by design — the agent never touches public input; it only compresses the reviewer's drafting time on data the public already saw.

**Product — the agentic loop.** A single intake endpoint receives the ΜΠΕ packet (PDF narrative, KML/SHP geometry, baseline annexes, cover letter). The agent (1) classifies the file under L.4014/2011 + JMD 1958/2012 (Cat A1, A2, B; activity sub-category; applicable annex set); (2) extracts and structures every chapter against the L.4014 template, measuring completeness and mandatory sub-headings; (3) cross-checks the claimed environmental baseline (air quality, noise, hydrology, soil, biodiversity) against open data — geodata.gov.gr, EMEP/CEIP, Copernicus CAMS, HCMR water-quality series, Δασικός Χάρτης, Natura 2000, archaeological declared zones; (4) surfaces template-compliant boilerplate that lacks site-specific data, with the exact paragraph quoted; (5) cross-references the alternatives-analysis chapter against L.4014/2011 minima and EU EIA Directive 2014/52/EU; (6) compares cumulative-impact treatment against any prior ΑΕΠΟ within a configurable radius (Διαύγεια-published); (7) drafts a Greek-language deficiency report — green/yellow/red per chapter, every flag hyperlinked to statute and to the specific page in the filing; (8) outputs a reviewer-facing checklist mapped to L.4014/2011 §3-§12 the reviewer can paste into the draft ΑΕΠΟ. No autonomous action; the agent never approves, never rejects, never publishes.

**Revenue model & pricing.** Three layers. (1) Annual platform licence to ΥΠΕΝ ΔΙΠΑ: €120k-€220k/year, sold under L.4014/2011 implementation tooling and EU-funds-absorption KPIs. (2) Per-file processing fee at scale (€60-€140 on Cat A1, €30-€70 on Cat A2) via RRF Component 1.4 then ESPA. (3) Consultancy B2B SaaS (post-reference, year 2+): €18k-€42k/year per firm seat-pool, sold as self-QA — the consultancy buys the right to see their filing through the reviewer's eyes before they file. Year-1 ARR target: €180k (ΔΙΠΑ-only pilot). Year-2: €600k. Year-3: €1.4M. Gross margin > 78% steady-state.

**Unit economics.** Per Cat A1 file: ~€11-€18 compute and ground-data. Reviewer time saved 4-7 weeks per Cat A1 at fully-loaded €68k/yr ≈ €5.2k-€9.1k; at €90/file billed, contribution margin ~85%. The State's value-per-file is dominated by ΑΕΠΟ throughput and EU-funds-absorption, not reviewer hours — every data centre or transmission line cleared a quarter earlier is €4-€18M of accelerated capex.

**Capital plan & milestones.** Seed: €900k via T-Life Capital plus co-investors, 24-month runway. M0: co-founder hunt opens. M2: co-founder signed. M3: retro-pilot to ΔΙΠΑ — 10 closed Cat A2 files in-kind under NDA, benchmark report. M6: paid pilot signed under innovation procurement, sub-€180k. M9: 50 files processed, reviewer-NPS published internally. M12: full ΔΙΠΑ deployment, Ephorate module scoped. M15: first three consultancy logos. M18: RRF Component 1.4 anchor contract, €700k+ ARR. M24: Series A on EU export thesis (Italy, Spain, Bulgaria/Romania).

**Team & hires.** Founder-recruit-bound and we know it. Pair: (a) environmental engineer with 5+ years at LDK / ENVECO / ECOS / Draxis with prior ΔΙΠΑ exposure — owns the corridor, the L.4014/2011 reading, the Greek engineering eval set; (b) LLM + RAG engineer with prior Greek-language deployment — owns the agentic stack, deficiency engine, chapter classifier. First three hires: second LLM engineer (statute-traceability), GIS engineer (fused intersection layer), customer-success engineer with public-sector procurement scar tissue. T-Life Capital supplies the corridor, the Bernitsas/Rokas legal-engineering oversight, and the co-founding cap-table. Athens pool is 15-25 credible names; equity package modelled before approach.

**Risks.** Four live ones. (1) **Consultancy lobby attack.** LDK / ENVECO / ECOS sell ΜΠΕ drafting and read a ministry-side review copilot as a vector into their market. Mitigation: ring-fence to ΔΙΠΑ-side, no drafting-side framing until the ministry reference is signed, brief the lobby that the SaaS comes later as self-QA. (2) **ΣτΕ challenge risk.** If the first ΑΕΠΟ citing the tool gets challenged and the flag is cited as decisive, the reference dies. Mitigation: every flag traceable to statute clause and filing page, reviewer signs as decision-maker, methodology note co-published with ΔΙΠΑ pre-issuance, red-team three sample opinions with a ΣτΕ-side litigator pre-kickoff. (3) **Founder timeline.** If M2 slips, M3 retro-pilot slips. Mitigation: parallel-track three named candidates from day 1; T-Life partner sponsors the equity conversation. (4) **No fresh international precedent.** UK Planning Inspectorate and Ireland An Bord Pleanála are still manual review. Mitigation: lean the "why now" on L.4014 backlog metrics and EU-funds visibility, not on a peer-government EIA agent. Blue ocean is real; absence of precedent is a feature in pricing power.

# Pitch Deck

## Slide 1 — Cover
- T-Life Capital | ΜΠΕ Drafting & Review Agent for ΔΙΠΑ
- The L.4014/2011 reviewer's deficiency report, drafted in minutes, signed by the engineer
- Pitch to: General Directorate of Environmental Policy, ΥΠΕΝ
- May 2026

## Slide 2 — Problem
- Every infrastructure and non-REAA RES permit in Greece passes through a ΜΠΕ under Law 4014/2011 — Cat A1, A2, B files run 200-400 pages of largely templated content.
- L.5299/2026 (ΦΕΚ, 5 May 2026) only exempted REAA-internal projects; the entire Cat A1/A2 backlog — data centres, large industrial, infrastructure, non-REAA renewables — stays in the L.4014/2011 pipe.
- The 2024-2025 amendments shortened mandatory consultation windows; the reviewer's drafting time was the variable that gave way.
- ESPA + RRF + Just Transition Fund disbursement all depend on ΑΕΠΟ throughput.

## Slide 3 — Why Now
- L.5299/2026 leaves the Cat A1/A2 backlog intact — the bottleneck moved to ΔΙΠΑ, not to the RES Directorate.
- L.4014/2011 + JMD 1958/2012 categorisation is uniquely Greek; annual amendment churn makes templated automation more valuable, not less.
- EU EIA Directive 2014/52/EU sets the harmonised baseline — Greek implementation is the bottleneck, EU export thesis is real.
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 (Omnibus deal, 7 May 2026) — eighteen-month air-cover window for a limited-risk administrative-assist tool that never decides.
- Aarhus Convention floor respected by design — agent never touches public input; it accelerates only the reviewer's drafting time on data the public already saw.
- No deployed Greek-language EIA agent. UK Planning Inspectorate and Ireland An Bord Pleanála are still manual review. Blue ocean.

## Slide 4 — Solution
- One intake endpoint; one structured Greek-language deficiency report out.
- Chapter-by-chapter green/yellow/red against the L.4014/2011 template; every flag hyperlinked to statute and to the specific filing page.
- Open-data baseline cross-check (geodata.gov.gr, Natura 2000, Δασικός Χάρτης, EMEP/CEIP, Copernicus CAMS, HCMR, declared archaeological zones).
- Reviewer is decision-maker — agent is a draftsman; reviewer signs the ΑΕΠΟ.
- 4-7 week first-pass review compressed to ~6 hours of reviewer time per Cat A1 file.

## Slide 5 — Demo
- 38 MW data centre in Attica, Cat A1. Filing: 312 pages, six annexes, 18 MB geometry. Output: 12-page deficiency report in 9 minutes.
- Green on alternatives and emissions baseline; yellow on cumulative impact (one prior ΑΕΠΟ within 4.2 km, unaddressed; page and Διαύγεια link surfaced); red on hydrology (claimed baseline contradicts HCMR series, contradiction quoted verbatim) with L.4014/2011 §7 citation; structured checklist mapped to L.4014/2011 §3-§12 ready for paste into the draft ΑΕΠΟ.

## Slide 6 — Market
- **Primary buyer:** ΥΠΕΝ ΔΙΠΑ. Champion: Γενική Διευθύντρια Περιβαλλοντικής Πολιτικής. Low thousands of files/yr across Cat A1, A2, B.
- **Secondary user (year-2):** Greek environmental-engineering consultancies (LDK, ENVECO, ECOS, Draxis, ~12-20 firms) as B2B self-QA SaaS.
- **Adjacent ministry:** Υπ. Πολιτισμού Ephorate opinion-drafting.
- **EU export:** Italy, Spain, Bulgaria/Romania. EIA Directive 2011/92/EU + 2014/52/EU is the glue.

## Slide 7 — Traction
- Co-founder hunt opens this week: 90-day structured pass across LDK / ENVECO / ECOS / Draxis senior bench with prior ΔΙΠΑ exposure.
- Retro-pilot offer drafted: 10 closed Cat A2 files re-processed in-kind under NDA, benchmark report at M3.
- T-Life Capital co-founding terms set; €900k seed committed.
- RRF Component 1.4 envelope confirmed available for innovation procurement under L.4014/2011 implementation tooling.

## Slide 8 — Business Model
- Annual platform licence to ΥΠΕΝ ΔΙΠΑ: €120k-€220k.
- Per-file fee at scale: €60-€140 (Cat A1), €30-€70 (Cat A2).
- Consultancy B2B SaaS (year 2+): €18k-€42k/yr per firm, self-QA positioning.
- Module expansion: Ephorate opinion-drafting, ΑΕΠΟ post-issuance monitoring.
- Gross margin > 78%; payback < 14 months per directorate.

## Slide 9 — Competition & Moat
- No deployed Greek-language EIA agent today. UK Planning Inspectorate and Ireland An Bord Pleanála are manual review.
- LDK / ENVECO / ECOS sell ΜΠΕ drafting to applicants — opposite seat, sold the SaaS later as self-QA, not replacement.
- Netcompany / Intracom sell ΥΠΕΝ systems but not opinion-drafting copilots; if they move on an L.4014/2011 tender the data-access window narrows — we move now.
- **Moat:** Greek environmental-legal corpus + L.4014/2011 amendment delta tracker; ΔΙΠΑ-signed deficiency-report eval set; fused Δασικός Χάρτης + Natura 2000 + archaeology + HCMR + geodata intersection layer with Greek toponyms; reviewer-side ground truth the consultancy lobby cannot replicate.

## Slide 10 — Team
- **Co-founder A:** environmental engineer, 5+ years LDK / ENVECO / ECOS / Draxis, prior ΔΙΠΑ exposure (hunt opens this week; three named candidates pre-identified).
- **Co-founder B:** LLM + RAG engineer with prior Greek-language agentic deployment.
- **Backed by T-Life Capital** — Athens venture studio, agentic-AI for Greek ministries; legal-engineering oversight via Bernitsas/Rokas.
- Three-hire plan: second LLM engineer (statute-traceability), GIS engineer (fused layer), customer-success engineer.

## Slide 11 — Ask
- **Retro-pilot at M3:** 10 closed Cat A2 files, in-kind under NDA. No money exchanged.
- **Paid pilot at M6:** €120k-€180k under innovation procurement. Six months, 50 mixed Cat A1/A2 files, two named reviewers, weekly cadence.
- **Standing data access:** Διαύγεια ΑΕΠΟ corpus, geodata.gov.gr, Δασικός Χάρτης, Natura 2000, declared archaeological zones, HCMR.
- **Decision today:** approve the retro-pilot scoping conversation; name one ΔΙΠΑ reviewer as point-of-contact.

## Slide 12 — Closing
- L.5299/2026 cleared the RES happy path; everything else still routes through ΔΙΠΑ.
- The 2024-2025 amendments shortened the public-consultation clock; the reviewer's drafting time gave way.
- We draft the deficiency report. The reviewer reads, edits, signs the ΑΕΠΟ. The throughput becomes the State's.
- Decision today: open the retro-pilot. First 10 files cost zero euros and four reviewer-hours.

# Go-to-Market Plan

**Champion identification.** Single named buyer: the Γενική Διευθύντρια Περιβαλλοντικής Πολιτικής inside ΥΠΕΝ, with the ΔΙΠΑ Director as operational champion. Cleanest technocratic seat in the ministry — slow-burn pain, no entrenched SI on the review side, lower political heat than the RES Directorate. We do not approach the Minister's office, nor the Γενικό Γραμματέα Ενέργειας (that corridor is reserved for the sibling RES Permit Cross-Checker), nor the consultancies until the ΔΙΠΑ reference is signed. The corridor opens via the environmental-engineer co-founder's existing ΔΙΠΑ relationships — which is exactly why the founder hunt is the binding constraint and the first 90 days. T-Life partner sponsors the equity conversation; Bernitsas/Rokas underwrites the L.4014/2011 reading credibility. No GS-level approach until both (i) co-founder signed and (ii) M3 retro-pilot benchmark in hand.

**First-meeting choreography.** 45 minutes, ΔΙΠΑ Director's office, co-founder present. Open in Greek on the chokepoint: "Ο L.5299/2026 έκλεισε τον δρόμο για τις ΑΠΕ μέσα στις ΖΕΑ· όλα τα υπόλοιπα — data centres, υποδομές, μεγάλη βιομηχανία — μένουν στην ΔΙΠΑ, με μικρότερο χρόνο και ίδιους ανθρώπους." Walk one anonymised Cat A1 file end-to-end: 312-page filing in, 12-page Greek deficiency report out in 9 minutes, every flag traced to statute and page. Pre-empt the canonical objection — "Έχουμε ήδη συμβούλους που τις γράφουν τις μελέτες" — with the positioning: we do not produce studies, we triage them; the reviewer sees a structured deficiency report in 60 seconds; consultancies stay on the drafting side. Close with a free ask: 10 closed Cat A2 files, NDA-bound, in-kind, six weeks, benchmark co-authored with one named reviewer.

**Retro-pilot offer (M3, in-kind, NDA-bound).** Six weeks. 10 closed Cat A2 files supplied by ΔΙΠΑ under NDA. Output: same-quality-in-25%-time benchmark, jointly authored with one named reviewer, internal-only. KPIs: (a) blind reviewer-rated quality vs. the original manual deficiency report; (b) time-to-first-draft reduction; (c) statute-citation traceability (target: 100%); (d) false-flag rate (target: < 4%). No money, no procurement, no political exposure. Forcing function for the founder recruit: the offer goes out the day the co-founder signs.

**Paid pilot offer (M6).** Six months, innovation procurement, sub-tender threshold. Tier: €120k-€180k all-in. Deliverables: drafted deficiency reports on 50 mixed Cat A1/A2 files, signed reviewer acceptance per file, co-authored methodology note, two quantified deltas — first-pass reviewer-hours reduction (target: 4-7x on Cat A1) and statute-traceability rate (target: 100%). KPI gates at month 2 (15 files) and month 4 (35 files). Clean exit at month 4 if reviewer-NPS < 0; ΔΙΠΑ keeps the methodology note.

**Expansion path.** Four vectors, strict sequencing. (1) **Within ΥΠΕΝ:** post-issuance ΑΕΠΟ monitoring (compliance against issued conditions), then the Cat B simplified-commitments lane. (2) **Υπ. Πολιτισμού Ephorate side:** opinion-drafting copilot for archaeological-impact assessments — same corpus, opposite seat — opens only after the ΔΙΠΑ reference is published. (3) **Consultancy B2B SaaS (year 2+):** post-reference, self-QA positioning. Strict rule: zero consultancy sales activity before the ΔΙΠΑ reference; zero drafting-side framing ever. (4) **EU export:** Italy (D.Lgs. 152/2006) and Spain (Ley 21/2013) first on the EIA Directive substrate; Bulgaria/Romania next. No EU outreach before a signed Greek reference plus a published reviewer-hours-reduction number.

**Procurement vehicle.** Primary: RRF Component 1.4 ("Greece 2.0") innovation-procurement carve-out, sub-€250k threshold avoiding open tender. Secondary: ESPA 2021-2027 via ΚτΠ AE. Tertiary: ΥΠΕΝ research-and-innovation budget, direct contract under €60k for any retro-pilot payment. Contract title is anchored as "L.4014/2011 deficiency-report tooling — ΔΙΠΑ reviewer copilot" to pre-empt any reframing Netcompany/Intracom could absorb under their ΥΠΕΝ framework relationships.

**PR/comms strategy.** Strict silence during the retro-pilot and the first three months of the paid pilot — the directorate must not read about itself before it chooses to. After the month-4 KPI gate, a co-authored methodology note in a Greek environmental-engineering venue (ΤΕΕ bulletin or DSL Environmental Law journal) under the "reviewer copilot under L.4014/2011" frame — never "AI reviews environmental impact assessments". Pre-brief one Greek environmental-policy journalist and one EU-EIA outlet. Red-team the announcement copy with one ΣτΕ-side administrative-law litigator before publication. No social-first announcement. Aarhus floor is named explicitly in every public comm: the agent does not touch public input, it accelerates the reviewer's drafting time only.
