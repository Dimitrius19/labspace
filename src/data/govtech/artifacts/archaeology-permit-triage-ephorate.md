# Business Plan

## Company thesis
The 28 regional Εφορείες Αρχαιοτήτων are the single documented bottleneck on every Greek infrastructure, RES, real-estate, and EU-cofunded project. No road, no substation, no wind farm, no high-rise, no port concession moves until a named archaeologist at the regional Ephorate signs a γνωμοδότηση under Law 4858/2021. Median turnaround is 4-9 months and the queue is published as a structural constraint on the National Energy & Climate Plan. We build an agentic drafting copilot — authored-by-archaeologist, never auto-issued — that gives a senior archaeologist back four to six hours per opinion. Solve this surface and the cross-ministerial dividend (Υποδομές, ΥΠΕΝ, Ναυτιλίας, Τουρισμού) is larger than the Culture pilot itself. This is the highest-leverage govtech surface we have surfaced and the keystone idea in the T-Life portfolio (compositeNew 4.5 on hostile second-pass qualification).

## Why now — the May 2026 window
Three forcing functions converge in the next 90 days:
1. **RRF Culture envelope drawdown deadline is 26 August 2026** — every Greece 2.0 milestone must close by that date. With three months of pilot procurement window left, this is the last sprint for an απευθείας ανάθεση inside the RRF Culture line; anything that slips falls into ESPA 2027+ on slower terms.
2. **€27.3M ODAP (Organisation for the Management & Development of the Cultural Resources) digital overhaul of museums and archaeological sites** is actively procuring — the proof that the RRF Culture envelope is genuinely spending and that the YPPO procurement plumbing is warm.
3. **EU AI Act Annex III enforcement was deferred to 2 December 2027** (Omnibus deal, 7 May 2026). Permit-drafting copilots have a clean 18-month build-and-deploy runway before the high-risk regime activates — and our authored-by-archaeologist architecture is designed to land on the right side of Annex III when it does.

## Market & buyer
Primary buyer: the Γενική Γραμματεία Πολιτισμού (GS for Antiquities & Cultural Heritage) at YPPO, with a forward-leaning regional Ephorate Director as pilot site signatory. Air-cover buyer: PM-office RRF reform desk and the Υπουργείο Επικρατείας digital-governance leadership. Addressable workload: ~10k-30k opinions/year/region across 28 Ephorates — ~400k-500k opinions/year nationally, concentrated in Western Attica, Boeotia, the Cyclades, and Thessaloniki. Adjacent (downstream) buyers once we prove value: ΥΠΕΝ permit desks, RAE, Ministry of Infrastructure DGs, and the TSO/DSO concessionaires (ΑΔΜΗΕ, ΔΕΔΔΗΕ) who pay the time-cost of every delay.

## Product — the agentic loop
One loop per incoming works/excavation request:

1. **Ingest.** Works request + parcel polygon (KTHMA cadastre) + project description + applicant dossier.
2. **Retrieve.** Geo-query against the Archaeological Cadastre, the Ephorate's local archive, declared/scheduled sites (ΦΕΚ-published), historical-monument zones, and adjacent Αρχαιολογικόν Δελτίον entries. Pull prior γνωμοδοτήσεις from the same micro-area and indexed unpublished excavation reports.
3. **Score.** Risk classifier: *clear / surveillance / trial-trench / full-excavation required*, with each step traced to specific archival hits.
4. **Draft.** γνωμοδότηση in the Ephorate's house style, with citations, conditions, and standard clauses, explicitly marked *agent-drafted* and routed to the named archaeologist's queue.
5. **Edit & sign.** Track-changes view; the archaeologist edits and signs. The agent never auto-issues — Law 4858/2021 reserves the act to the named archaeologist.
6. **Dispatch & log.** Publish via Διαύγεια, update the local archive, write an immutable per-opinion provenance trail for audit and for ΚΑΣ on appeal.

## Defusing the "AI already does this" objection
- **DeepMind Aeneas (Nature, July 2025, open-source at predictingthepast.com)** is restoration of damaged inscriptions — not permit drafting. We use the existence of Aeneas as proof that frontier models can read Greek archaeological corpus; we are explicit that Aeneas is not a competitor and ships in a different layer of the stack.
- **Italy MiC × Europeana (Dec 2025, targeting 10M records by end 2026)** is registry/catalogue federation — adjacent, not competitive. We can later sit on top of it; it cannot draft a γνωμοδότηση.
- **POP relaunched 15 Dec 2025 (France)** and **SIGECweb / Arches-for-HERs** remain registry/casework backbones — none ship an agentic Greek-corpus drafting layer.

## Revenue model & pricing
Two-tier SaaS-with-services:
- **Pilot tier (Ephorate-site licence):** €80k-€250k per Ephorate per year — απευθείας ανάθεση or RRF innovation-pilot envelope.
- **Rollout tier (per-Ephorate licence + per-opinion meter):** €300k-€600k base + €8-€15 per signed opinion. National rollout at 28 Ephorates: ~€20M ARR on a five-year horizon.
- **Adjacent revenue:** permit-search API to ΥΠΕΝ / Υποδομές / TSOs at €50k-€150k/year per buyer.

## Unit economics
Marginal cost per opinion is retrieval (Greek-language vector store + geo) plus a single drafting pass on a frontier model — €0.40-€1.20 in compute. At pilot price (€10/opinion blended) gross margin > 85%. The expensive line is corpus-ingest engineering and the Greek-archaeological evaluation harness, both one-time per Ephorate.

## Capital plan & milestones
- **Pre-seed €600k (closed by month 2):** T-Life Capital + one Greek family office + one strategic angel from the Athens archaeological community. 18-month runway, team of 5.
- **Month 0-3:** founder-finalist signed (binding hire is the archaeologist); corpus ingest for one pilot Ephorate; ΣΕΑ-observable evaluation harness built with three senior archaeologists.
- **Month 3-6:** held-out side-by-side study against the archaeologist's own prior drafts on the same case; απευθείας ανάθεση signed inside the RRF Culture window (before 26 Aug 2026).
- **Month 6-9:** pilot site live; signed γνωμοδοτήσεις in production with named-archaeologist authorship.
- **Month 9-12:** publish pilot metrics; sign second Ephorate; open Series A.
- **Series A €4-6M (month 12-14):** national rollout via RRF/ESPA 2027 framework tender.

## Team & hires
Defensibility lives in the team:
1. **Ex-ΣΕΑ archaeologist co-founder.** Non-negotiable; two finalists identified (one post-retirement αρχαιολόγος Α' βαθμού, one on-secondment senior). Sign within 30 days.
2. **ML/retrieval lead** with Greek-NLP and RAG production experience.
3. **Geo/cadastre engineer** with prior KTHMA / Archaeological Cadastre work.
4. **Government-relations partner** (T-Life GP).
5. Hires 5-8: two junior archaeologists for corpus annotation, one DevOps, one product designer, one customer-success lead.

## Risks
- **Political third-rail (wound):** ΣΕΑ will oppose any framing that smells like "AI approves antiquity permits". Mitigation is structural — ΣΕΑ-observable evaluation built into the protocol, opt-in per Ephorate, authored-by-archaeologist framing in every external mention.
- **Regulatory (wound):** Law 4858/2021 reserves opinion-issuance to the named archaeologist. Mitigation: the agent only drafts.
- **RRF window:** if απευθείας ανάθεση slips past 26 Aug 2026, procurement moves to ESPA 2027+ — six months added to time-to-pilot.
- **Founder concentration:** the binding hire is single-point-of-failure until signed.
- **Corpus access:** unpublished excavation reports and Ephorate local archives are not uniformly digitised; ingest cost is real.

# Pitch Deck

## Slide 1 — T-Life Capital · Ephorate Permit-Triage Agent
- Athens-based venture studio, co-founding agentic-AI companies for Greek ministries
- Pitch for the GS Antiquities & Cultural Heritage at YPPO
- Authored-by-archaeologist drafting copilot for γνωμοδοτήσεις under Law 4858/2021
- Pilot-ready inside the RRF Culture window (before 26 Aug 2026)

## Slide 2 — The cross-ministerial bottleneck
- 28 regional Εφορείες issue ~400k-500k opinions/year — every Greek works project waits on one
- Median turnaround 4-9 months — published constraint on the National Energy & Climate Plan
- ΥΠΕΝ, Υποδομές, Ναυτιλίας, Τουρισμού, RES developers, RRF projects — all queue behind Culture
- One ministry's reform unlocks every other ministry's pipeline. This is the highest-leverage point in Greek govtech.

## Slide 3 — Why now (the 90-day window)
- RRF Culture envelope drawdown deadline: 26 August 2026 — three months of pilot procurement window
- €27.3M ODAP digital overhaul proves the YPPO procurement plumbing is live and spending
- EU AI Act Annex III deferred to 2 Dec 2027 (Omnibus, 7 May 2026) — 18 months of clean runway
- Two founder finalists in hand; binding archaeologist hire signs in 30 days

## Slide 4 — Solution
- Agent reads every incoming request, cross-references the Ephorate archive + Archaeological Cadastre + Αρχαιολογικόν Δελτίον
- Drafts the γνωμοδότηση in house style with citations and conditions
- Archaeologist edits, signs, dispatches via Διαύγεια — agent never auto-issues
- Target: 4-6 hours back per opinion, 50%+ median turnaround reduction

## Slide 5 — Why Aeneas, MiC×Europeana and POP are NOT the competition
- DeepMind Aeneas (Nature, Jul 2025, open-source predictingthepast.com) is *restoration of damaged inscriptions* — not permit drafting. Different stack, different buyer.
- Italy MiC × Europeana (Dec 2025, 10M records by end 2026) is *registry federation* — we sit on top of it, we are not displaced by it.
- France POP relaunched 15 Dec 2025 — *casework backbone*, no agentic Greek-corpus drafting layer.
- The Greek-language + KN 5351 / Law 4858 + Αρχαιολογικόν Δελτίον moat is irreducible and language-only.

## Slide 6 — Demo
- Side-by-side: same parcel, same applicant, same micro-region
- Left: archaeologist's hand-drafted γνωμοδότηση from 2024
- Right: agent draft with citation trail back to ΑΔ XLIII volume + two prior opinions
- Panel of three senior archaeologists scoring on completeness, citation discipline, house style — ΣΕΑ as observer

## Slide 7 — Market
- 28 Ephorates × ~€1-2M/year fully rolled-out = ~€20-30M ARR addressable in Culture alone
- Adjacent permit-search API for ΥΠΕΝ, Υποδομές, TSOs: another €5-10M ARR
- EU export: Italy MiC, France POP, UK Historic England all run heritage-permit pipelines and none ships an agentic drafting layer
- ODAP €27.3M is the proof that RRF Culture is genuinely procuring at scale

## Slide 8 — Traction
- Three forward-leaning Ephorate Directors in conversation (Western Attica, Boeotia, one Cycladic)
- Two former ΣΕΑ board members in advisory dialogue
- Letter-of-intent from one regional Ephorate Director pending evaluation-harness demo
- Two founder finalists identified; one closes in 30 days

## Slide 9 — Business model
- Pilot tier €80k-€250k per Ephorate (απευθείας ανάθεση + RRF innovation-pilot envelope)
- Rollout tier €300k-€600k base + €8-€15 per signed opinion
- Gross margin >85% post-ingest
- Procurement vehicle: RRF Culture envelope before 26 Aug 2026, ESPA/RRF-2027 framework thereafter

## Slide 10 — Competition & moat
- No Greek SI shipping here; international precedents (SIGECweb, Arches-for-HERs, POP) are registry/casework, not agentic
- Moat 1: Greek archaeological corpus — Αρχαιολογικόν Δελτίον, unpublished Ephorate archives, Δελτία απογραφής
- Moat 2: Greek archaeological vocabulary and house-style — language-only and deep
- Moat 3: ΣΕΑ-observable evaluation harness — politically defensible incumbency under Law 4858/2021

## Slide 11 — Team
- Founding archaeologist: ex-ΣΕΑ senior, αρχαιολόγος Α' βαθμού, 10+ years Ephorate (two finalists, sign in 30 days)
- Founding engineer: Greek-NLP + RAG production lead (committed)
- T-Life Capital GP as government-relations partner
- Advisory: two former Ephorate Directors + one ex-General-Secretary for Antiquities

## Slide 12 — Ask
- €600k pre-seed, T-Life Capital leading
- One pilot Ephorate signed before 26 Aug 2026, inside the RRF Culture window
- Series A €4-6M at month 12-14 for national rollout
- From the minister's office: a single sentence of institutional cover and a named pilot Ephorate

# Go-to-Market Plan

**Champion identification.** The institutional champion is the GS for Antiquities & Cultural Heritage at YPPO; the operational pilot champion is one forward-leaning regional Ephorate Director, and we pick exactly one. Best candidates: the Director of the Εφορεία Αρχαιοτήτων Δυτικής Αττικής (highest workload pressure on the Attica industrial axis, permanent backlog) and the Director of the Εφορεία Αρχαιοτήτων Βοιωτίας (largest by declared-site area in central Greece, RES/wind-farm permit queue concentrated there). Both have publicly complained about throughput in ICOMOS-Hellas and Ephorate-Directors-association proceedings within the last 18 months — they are *self-identified* as under-pressure. The Cycladic Ephorate Director stays warm as the third option given island-tourism permit pressure.

**Pre-meeting hygiene (next 30 days).** Sign the archaeologist co-founder. Without that signed offer, do not request the first GS-level meeting — the political third-rail mitigation cannot be a hypothetical co-founder. In parallel, pre-table a memo with the GS for Antiquities + one Ephorate Director, scoped to ~1,000 retro γνωμοδοτήσεις, sized to fit απευθείας ανάθεση inside the RRF innovation-pilot line, with ΣΕΑ-observable evaluation in the protocol.

**First-meeting choreography.** First meeting is 45 minutes, not a pitch. Three slides only. Slide 1: "We are not here to replace your judgement — we are here to give you four hours of your week back." Slide 2: the side-by-side held-out demo, with the archaeologist's own prior opinion as one of the two columns. Slide 3: the ΣΕΑ-observable evaluation proposal. We bring the founding archaeologist co-founder and the T-Life GP — not the engineer. We ask one question: "Would your Ephorate be willing to nominate three senior archaeologists to score a held-out evaluation of our drafts against your own past opinions, with ΣΕΑ as observer?" If the answer is yes, we are 80% of the way to a pilot.

**Pilot offer (RRF-window-sized).** Six-month paid pilot at one Ephorate, €120k-€180k via απευθείας ανάθεση under the RRF Culture innovation envelope. Procurement signature must close before 26 August 2026 — that is the binding constraint on the calendar. Scope: corpus ingest, evaluation harness built and run, live drafting for one permit category (we recommend RES/wind-farm requests — highest political tailwind and best-bounded corpus). Deliverable: a published evaluation report co-signed by the Ephorate, the founding archaeologist, and the ΣΕΑ observer. We commit to no-fee continuation if the panel scores agent drafts below archaeologist baseline.

**Expansion path.** Pilot Ephorate goes to full-coverage at month 9; second and third Ephorates sign at months 10-12 on the strength of the published evaluation; YPPO central tenders a rollout framework at month 14-18 funded out of RRF-successor / ESPA 2027 lines. The SaaS-with-meter model unlocks at month 18 once three Ephorates are live. The cross-ministry play (ΥΠΕΝ permit-search API) opens at month 12-15 once we have a defensible "we are the company that unblocked Culture" narrative.

**Procurement vehicle.** Stage 1 pilot: RRF innovation-pilot απευθείας ανάθεση under the Υπουργείο Επικρατείας digital-governance envelope or the YPPO Culture digitisation line — both open and signed off by the PM-office reform desk, both must close before 26 Aug 2026. Stage 2 rollout: ESPA 2027 / RRF-successor competitive tender, multi-Ephorate framework with per-Ephorate call-offs. Stage 3 cross-ministry: ΕΟΠΠΥ/ΓΓΠΣ inter-ministerial framework once value is proven.

**PR/comms strategy.** Defensive first, offensive second. *Defensive:* the company never speaks publicly about "AI approving permits". Every external mention frames the product as "the archaeologist's drafting assistant — like a junior researcher who reads the archive at 3 a.m." Every press piece names the founding archaeologist, not the engineer. ΣΕΑ is briefed before any media. When asked about Aeneas, the answer is rehearsed: "Aeneas restores damaged inscriptions; we draft γνωμοδοτήσεις. Different problem, different stack, both useful." *Offensive:* one Kathimerini long-read at month 9 co-authored by the founding archaeologist and the pilot Ephorate Director, framed as "how the Ephorate unblocked the National Energy & Climate Plan." One TEDxAthens-style talk by the founding archaeologist at month 12. International press (FT, Politico EU) at month 15 once two Ephorates are live, as the EU heritage-permit-modernisation case study and the proof point for AI Act Annex III pre-compliance.
