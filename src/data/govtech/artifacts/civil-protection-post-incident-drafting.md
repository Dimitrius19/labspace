# Business Plan

**Company (working title):** Μετά-Συμβάντος — T-Life Capital portfolio venture building the post-incident drafting agent for the General Secretariat for Civil Protection (Γενική Γραμματεία Πολιτικής Προστασίας, ΓΓΠΠ).

**Thesis.** Every major Greek civil-protection incident — the 2018 Mati wildfire, the August 2023 Evros and Rhodes wildfires, the Daniel/Elias floods in Thessaly that month, the 2023 Tempi train crash that detonated the political year — generates a months-long drafting job once the fire is out. The ΓΓΠΠ planning directorate owes parliament an official Έκθεση Συμβάντος, a Μητρώο Ζημιών that reconciles to arogi.gov.gr, a Διδάγματα (lessons-learned) annex, and a Συνοπτικό για τον Υπουργό. These documents land six to nine months late — which is why the lessons never feed the next fire season. The bottleneck is drafting against a rigid template, with paragraph-level citation discipline, in Greek officialese, from heterogeneous sources (radio logs, 112 alerts, Πυροσβεστικό Σώμα δελτία, drone imagery, mayoral statements, ΕΛΣΤΑΤ admin-unit data). Μετά-Συμβάντος drafts the pack in hours, every paragraph clickable to source, with a named ΓΓΠΠ analyst on the signature line.

**Architectural moat — the split that makes this defensible and shippable.** The agent is decision-support, not autonomous decision. A retrieval-and-timeline layer normalises every artefact against a deterministic timeline schema. A drafting layer composes against the ΓΓΠΠ template library. A citation-enforcement layer rejects any paragraph that does not trace to a source artefact — no claim leaves the system without a hyperlink. A reviewer-in-the-loop interface forces the analyst to adjudicate every cross-source inconsistency the agent flags. This split converts the political risk ("Πώς θα είμαι σίγουρος ότι η έκθεση που θα πάει στη Βουλή δεν θα έχει επινοημένα στοιχεία;") into an engineering invariant: an uncited paragraph cannot exist in the document. It also keeps us cleanly under the EU AI Act high-risk threshold — no real-time safety decision, no autonomous trigger, no biometric processing, named human signs.

**Market and buyer.** Economic buyer: the General Secretary for Civil Protection at the Ministry of Climate Crisis and Civil Protection. Policy buyer: the Minister's chief of staff, who answers to parliament every time a post-incident report is late. User: the ΓΓΠΠ planning-directorate analyst — typically a mid-career civil servant who today drafts in Word from a paper folder. Secondary buyers year two: Πυροσβεστικό Σώμα operations for after-action reports, and the regional περιφερειακή πολιτική προστασία offices. A typical fire-and-flood year produces 15-30 full packs plus dozens of smaller-incident δελτία.

**Why now.** Five dated facts converge on autumn 2026. First, Greek Law 5299/2026 governs AI and data rules in the Greek public sector — its decision-support carve-out is exactly this product's framing. Second, EU AI Act Annex III enforcement was deferred to 2 December 2027, giving an 18-month window to deploy under decision-support classification and prepare a conformity-assessment posture before the new date. Third, the precedent base is mature: HMRC rolled an internal copilot to 28,000 staff in April 2026 (the current UK comparator after the Redbox sunset); UK Caddy is operational at Citizens Advice and DBT; the Italian Dipartimento della Protezione Civile standardised post-incident templates after the 2023 Emilia-Romagna floods; FEMA's AAR programme is the federal institutional reference. Fourth, the Hellenic Data Protection Authority's Smart Policing ruling has narrowed biometric and CCTV processing on Greek streets — a back-office post-incident drafter touches no live citizen data and sits cleanly outside that envelope. Fifth, the parliamentary memory of Tempi (February 2023) and Mati (July 2018) is still live; the Minister wants the next post-incident report to arrive in weeks, not the following summer.

**Product.** A web application next to the ΓΓΠΠ planning-directorate workflow. The analyst opens a new case, points the agent at the incident folder (NAS share or upload), and the agent: normalises artefacts and builds a deterministic incident timeline; drafts each document against the ΓΓΠΠ template library in official register; flags every cross-source inconsistency for the analyst to adjudicate; produces a citations sidebar (hover a sentence, see the source); exports to Word/PDF in ministry house style; pushes lessons-learned items as structured tickets to next year's planning. No autonomous submission. Civil Protection Single Number 112 alert logs and ΕΜΑΚ deployment records are first-class artefact types — parliamentary committees ask about them by name.

**Revenue and pricing.** Direct contract with ΓΓΠΠ via ministerial discretion under Law 5299/2026 procurement carve-outs for innovation pilots. Tier 1: €60-120k for a 12-week closed-historical-incident pilot drafting against Evros/Rhodes/Thessaly 2023 incident folders (public materials), with a named analyst signing every output and a second analyst scoring quality side by side. Tier 2: €200-400k year-one production rollout, 12 months of declared incidents, ≈40-60 analyst seats at ≈€2.5-4k per seat per year. Tier 3: national subscription with SLA-backed throughput targets, mid-six-figure ACV, with Πυροσβεστικό Σώμα after-action reports as a second product line.

**Unit economics.** Hosted on Greek/EU sovereign cloud, with a contractual path to the Mistral-aligned European public-sector LLM stack. Marginal inference cost €15-40 per drafted pack — long documents, bounded volume. Per-seat ACV at scale 15-30× variable cost. Gross margin target 75%+ after support and template-maintenance overhead.

**Capital plan.** Pre-seed €500-700k (T-Life Capital + one Greek strategic angel with civil-protection or defence-tech network) for a nine-month runway through the pilot. Milestones: (1) signed pilot LoI within 90 days; (2) closed-historical-incident demo on Rhodes 2023 public materials at month four; (3) Tier-2 contract signed at month nine, timed to brief the Minister ahead of fire season 2027. Seed €2.0-3.0M at Tier-2 signing, used to staff customer success and the sibling Πυρόπολις field-officer dictation product line — same champion, same template library.

**Team.** Three founding hires: technical founder with Greek legal-tech and civil-service-drafting taste (ex-UK GDS i.AI or ex-Albert France engineer with Greek); ex-ΓΓΠΠ planning-directorate analyst as co-founder for General-Secretary credibility and template-library ownership; senior ML lead with Greek-NLP and retrieval-augmented drafting experience (Athena RC, ILSP). Advisor bench: former General Secretary for Civil Protection (post-Mati cohort); parliamentary-committee secretariat veteran; arogi.gov.gr integration lead.

**Risks.** (1) ΓΓΠΠ procurement calendar slippage — mitigated by pricing Tier 1 under the discretionary ceiling and anchoring to the fire-season 2026 debrief cycle. (2) Hallucination in a parliamentary submission — mitigated by the citation-enforcement layer, mandatory analyst signature, and per-paragraph confidence flags. (3) Netcompany/Intracom incumbency on AEGIS-style dashboards — non-overlap: they ship numbers, we ship narrative; positioning is drafting-layer partner, not substrate displacer. (4) Smart-Policing-style HDPA scrutiny — mitigated by back-office post-incident scope (no live citizen data), DPIA published day one, and a Law 5299/2026 alignment memo handed to ministry legal counsel before pilot signature.

---

# Pitch Deck

## Slide 1 — Μετά-Συμβάντος
- T-Life Capital portfolio venture, Athens, founded May 2026
- Post-incident drafting agent for the General Secretariat for Civil Protection (ΓΓΠΠ)
- Drafts the full ΓΓΠΠ pack — Έκθεση Συμβάντος, Μητρώο Ζημιών, Διδάγματα, Συνοπτικό για τον Υπουργό — with paragraph-level citations
- Pilot-ready, 12 weeks to first signed closed-historical-incident draft

## Slide 2 — Problem
- Every major incident — Tempi 2023, Evros and Rhodes wildfires August 2023, Thessaly Daniel/Elias floods September 2023, Attica 2024 — generates a months-long drafting job
- Official post-incident reports arrive 6-9 months late; lessons-learned never feed the next fire season
- ΓΓΠΠ planning-directorate analysts hand-assemble each pack from radio logs, 112 alerts, Πυροσβεστικό Σώμα δελτία, ΕΜΑΚ deployment records, drone imagery, mayoral statements, ΕΛΣΤΑΤ admin units
- Parliamentary committees grill the ministry on these exact documents — politically explosive in every cycle since Mati 2018

## Slide 3 — Why Now
- Greek Law 5299/2026 governs AI and data in the Greek public sector — decision-support carve-out fits this product exactly
- EU AI Act Annex III enforcement deferred to 2 December 2027 — clean 18-month deployment window under decision-support classification
- HMRC copilot rolled to 28,000 staff in April 2026 (current UK comparator after Redbox sunset); UK Caddy operational at Citizens Advice and DBT
- Italian Dipartimento della Protezione Civile standardised post-Emilia-Romagna 2023 templates; FEMA AAR programme institutional reference
- Parliamentary memory of Tempi and Mati still live; Minister needs to demonstrate that the next post-incident report arrives in weeks, not in the following summer

## Slide 4 — Solution
- Retrieval-and-timeline layer normalises every artefact in the incident folder
- Drafting layer composes against the ΓΓΠΠ template library in official register
- Citation-enforcement layer rejects any paragraph without a source hyperlink — a sentence without a citation cannot exist in the document
- Reviewer-in-the-loop adjudicates every inconsistency the agent flags between sources
- Post-incident, back-office, no live-safety trigger, no biometric processing — outside the HDPA Smart-Policing envelope by design
- Human in the loop on every fire, flood, and earthquake report — the agent drafts, the analyst signs

## Slide 5 — Demo
- Closed historical incident: Rhodes wildfire August 2023, public materials only
- Agent ingests 60+ artefacts (radio logs, 112 alert log, ΕΜΑΚ deployment record, municipal damage estimates, ΕΛΣΤΑΤ population data, press timeline) — 8 minutes
- Produces the four-document pack: Έκθεση Συμβάντος, Μητρώο Ζημιών, Διδάγματα, Συνοπτικό για τον Υπουργό
- Hover any sentence — see the source artefact and the line it cites
- Inconsistency panel: 14 cross-source conflicts flagged for analyst adjudication
- Export to Word/PDF in ministry house style; lessons-learned items pushed as structured tickets

## Slide 6 — Market & Buyer
- Economic buyer: General Secretary for Civil Protection (ΓΓΠΠ)
- Policy buyer: Minister of Climate Crisis and Civil Protection, chief of staff
- User: ΓΓΠΠ planning-directorate analyst, ≈40-60 seats addressable in Athens + regional offices
- Adjacent buyers year two: Πυροσβεστικό Σώμα operations for after-action reports, regional περιφερειακή πολιτική προστασία offices
- Greek civil-protection volume: 15-30 declared-incident packs per year, dozens of smaller PE δελτία

## Slide 7 — Architecture & Moat
- Three-layer split: retrieval + drafting + citation-enforcement; reviewer-in-the-loop on top
- Citation-enforcement is the architectural answer to the parliamentary objection — no paragraph exists without a source
- Template-library moat: ΓΓΠΠ Έκθεση Συμβάντος, Μητρώο Ζημιών, Διδάγματα, Συνοπτικό, with embedded references to Ν.3013/2002 and Law 5299/2026
- Greek-officialese moat: passive voice, specific verb forms, ΕΛΣΤΑΤ admin-unit conventions — multinational tools do not ship this
- 18-month defensibility window before EU AI Act Annex III enforcement kicks in; conformity-assessment posture in place before December 2027

## Slide 8 — Business Model
- Tier 1 pilot: €60-120k, 12 weeks, closed-historical-incident parallel draft
- Tier 2 production rollout: €200-400k year-one, 12 months of declared incidents, 40-60 analyst seats
- Tier 3 national subscription: SLA-backed throughput, mid-six-figure ACV, Πυροσβεστικό Σώμα after-action reports as second product line
- Per-seat SaaS-plus-implementation: ≈€2.5-4k per analyst per year at scale
- Marginal inference cost €15-40 per drafted pack; gross margin target 75%+

## Slide 9 — Competition
- No Greek incumbent ships a drafting agent — Intracom, Netcompany, Space Hellas built the AEGIS-style operations dashboards; they ship numbers, not narrative documents
- No multinational ships Greek-officialese post-incident reporting — the corpus is uneconomic for them
- UK GDS i.AI Caddy and HMRC copilot are the international comparators, not the competitors — they do not deploy in Greece and do not localise to ΓΓΠΠ templates
- Hampshire Police "Bobbi" is often misattributed in the GovTech press — we do not cite it; HMRC is the live comparator
- Architectural moat: citation-enforcement layer; template-library moat: ΓΓΠΠ pack

## Slide 10 — Team
- Technical founder — ex-UK GDS i.AI or ex-Albert France engineering background, Greek-speaking
- Ex-ΓΓΠΠ planning-directorate analyst co-founder — credibility with the General Secretary, owns the template library
- Senior ML lead — Greek-NLP, retrieval-augmented drafting (Athena RC, ILSP)
- Advisor bench: former General Secretary for Civil Protection (post-Mati cohort); parliamentary-committee secretariat veteran; arogi.gov.gr integration lead

## Slide 11 — Roadmap
- Q3 2026: pilot LoI with ΓΓΠΠ; closed-historical-incident demo on Rhodes 2023 public materials
- Q4 2026: 12-week pilot in production; one declared-incident pack delivered to parliament under analyst signature
- Q1 2027: Tier-2 production contract; 40-60 analyst seats live across ΓΓΠΠ Athens and regional offices
- Q2 2027: Πυροσβεστικό Σώμα after-action reports as second product line; EU AI Act conformity-assessment posture published
- Q3 2027: national subscription; lateral expansion conversations with Πολιτικής Προστασίας Κύπρου

## Slide 12 — The Ask
- €500-700k pre-seed, T-Life Capital lead, one Greek strategic angel
- Nine-month runway through Tier-2 contract signature
- Introductions sought: General Secretary for Civil Protection; Minister of Climate Crisis chief of staff; arogi.gov.gr team lead; former post-Mati General Secretary for advisor bench

---

# Go-to-Market Plan

**Named champion.** Economic buyer: the Γενικός Γραμματέας Πολιτικής Προστασίας (General Secretary, ΓΓΠΠ) — owns the post-incident drafting workflow and answers to parliament on every late report. Policy buyer: the Minister's chief of staff, who controls the calendar slot and feels the parliamentary heat. Operational champion: the head of the ΓΓΠΠ planning directorate, a 20+ year career official who personally signs the packs. Sponsor for political cover: the Αρχηγός Πυροσβεστικού Σώματος, who benefits in year two when we add Π.Σ. after-action drafting.

**30-day plan.** Days 1-10: warm intro to the Minister's chief of staff via T-Life Capital network; 45-minute meeting with the ex-ΓΓΠΠ co-founder in the room; open with the political diagnosis (lateness is the attack line, not headcount), close with a pilot offer pre-priced under €120k. Days 11-20: working sessions with the planning-directorate head and ministry legal counsel; deliver a one-page Law 5299/2026 alignment memo and a draft DPIA; secure an Evros or Rhodes 2023 sample incident folder under NDA. Days 21-30: deliver the closed-historical-incident demo on Rhodes 2023 public materials, full four-document pack in under 10 minutes live; obtain a pilot LoI signed by the General Secretary with kick-off inside fire-season 2026.

**60-day plan.** Pilot kickoff with the planning-directorate analyst team; template library hardened against ΓΓΠΠ house style; citation-enforcement tuned against Tempi 2023, Mati 2018, Attica 2024 folders under data-processing addendum. Working group with arogi.gov.gr on the Μητρώο Ζημιών integration API. First active-cycle incident pack delivered under analyst signature; second analyst scores side by side against the equivalent paper draft. Legal counsel signs off on the DPIA and on the EU AI Act conformity-assessment posture.

**90-day plan.** Two more production packs delivered; analyst NPS packaged; throughput KPI (median days from incident closure to signed pack) baselined against the prior cycle. Brief the Αρχηγός Πυροσβεστικού Σώματος on the Π.Σ. after-action extension as a Tier-2 add-on. Begin tender-document shaping with ΓΓΠΠ procurement for Tier-2, timed to sign ahead of fire-season 2027. Press posture: no release at signature or during the pilot; one pre-briefed Kathimerini long-form on the day the first parliamentary submission lands, framed around lessons-learned arriving in time for the next fire season, with the planning-directorate head quoted and HMRC and UK Caddy cited as comparators.

**Pricing tiers.** Tier 1: €60-120k, 12 weeks, one closed-historical-incident parallel draft plus one active-cycle production draft under analyst signature — inside the Law 5299/2026 discretionary-contract ceiling. Tier 2: €200-400k year-one production rollout across 40-60 analyst seats, ≈€2.5-4k per seat per year. Tier 3: national subscription, SLA-backed throughput (median 14 days from incident closure to signed pack), mid-six-figure ACV, includes Πυροσβεστικό Σώμα after-action drafting.

**Lead-generation.** Three channels: (1) direct champion engagement at ΓΓΠΠ via warm intros — the only channel that matters for Tier 1; (2) conference presence at the Civil Protection Single Number 112 anniversary event and the Hellenic National Defence General Staff civil-emergency seminar, producing περιφερειακή πολιτική προστασία introductions for Tier 2; (3) co-authored case-study with the planning directorate (only with General-Secretary consent), generating inbound from ΕΜΑΚ leadership and Π.Σ. regional commanders ahead of Tier 3.

**Success metrics.** Pilot: full four-document pack drafted in under 15 minutes; 100% paragraph-citation coverage; analyst-signed output within 14 days of incident closure; ≥80% analyst NPS on the second cycle. Tier 2: median closure-to-signed-pack reduced from 180+ days to under 30 days; zero parliamentary correction requests on agent-drafted submissions. Tier 3: SLA throughput met across 12 consecutive months; Π.Σ. after-action adoption across at least three Πυροσβεστικές Περιφέρειες.

**Expansion path.** Pilot pass → Tier-2 ΓΓΠΠ contract → Πυροσβεστικό Σώμα after-action product line (same template moat, separate budget) → περιφερειακή πολιτική προστασία regional addenda → ΕΜΑΚ debrief drafting → Πολιτικής Προστασίας Κύπρου lateral expansion. Long-horizon: shared platform with the sibling Πυρόπολις field-officer dictation agent — a unified ΓΓΠΠ drafting substrate from field intake to parliamentary submission, both sold through the same champion and same procurement vehicle.

**Defensive moat.** Four layers. (1) Template library — Έκθεση Συμβάντος, Μητρώο Ζημιών, Διδάγματα, Συνοπτικό για τον Υπουργό — built against ministry house style and signed off by the planning-directorate head; a competitor would redo from scratch. (2) Citation-enforcement tuned on Greek officialese plus law-citation conventions (Ν.3013/2002, Law 5299/2026, EU Civil Protection Mechanism); multinationals do not ship this register. (3) Champion-relationship moat — switching costs scale with template iteration depth. (4) Conformity-assessment posture published in 2026 ahead of the 2 December 2027 EU AI Act Annex III enforcement date — first-mover on the audit posture European supervisors will be writing into guidance. Combined: a three-to-five-year defensibility window inside which we add adjacent product lines under the same champion before any competitor reaches Tier-1 conversation.
