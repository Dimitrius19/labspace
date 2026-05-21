# Business Plan

**Company (working title):** Epistolē — a T-Life Capital portfolio venture building a Greek-language patient-correspondence drafting agent for ΕΣΥ outpatient clinics, layered on the myHealth gov.gr inbox.

**Thesis.** ΕΣΥ outpatient clinics have a correspondence vacuum. A patient who walks out of an Athens public hospital after an MRI, a colonoscopy, or a cardiology consultation typically receives one of two things: nothing, or a coded clinician report in medical Greek that the patient cannot parse. Patients re-book scarce outpatient slots to ask "what does my report mean"; phone lines clog; specialists dictate copy-paste follow-up text at the end of clinic, when they dictate at all. ΗΔΙΚΑ already runs the rail — myHealth gov.gr is the statutory citizen inbox underneath every ΕΣΥ encounter and every η-Συνταγογράφηση line — but the rail carries almost no human-readable correspondence today. Epistolē closes that gap with an agent that drafts plain-Greek follow-up letters, test-result explanations, and referral text from the patient's record and the responsible clinician's interpretation, ready for the named specialist or ΠΦΥ GP to review and sign. No autonomous send, ever.

**Architectural posture — clinician is the sole author of record.** Every artifact Epistolē produces is a draft. The clinician's interpretation is the upstream input the agent restates and translates; the agent never substitutes its own clinical reading. This is the architectural commitment that defines the regulatory and political posture: the output is the named clinician's letter, signed by the clinician, sent under the clinician's name through myHealth. Epistolē sits on the safe side of the MDR/AI Act line by being a correspondence-drafting tool, not a decision-support system. The rule — restate, do not interpret — is enforced in prompt scaffolding, in template structure, and in a citation gate linking every clinical statement back to a specific source line in the report or the clinician's interpretation note. NHS Coventry & Warwickshire's Tortus pilot in 2024 and NHS Northumbria's letter-drafting pilot established the deployed pattern in the UK; Caddy at Citizens Advice and Albert at France Travail prove the same caseworker-drafts, human-approves architecture in adjacent domains. Epistolē is the Greek-language, outpatient-clinic version.

**Market and buyer.** The economic buyer is the General Secretariat for Public Health at the Ministry of Health, co-sponsored by ΗΔΙΚΑ (the e-government health agency that owns myHealth and η-Συνταγογράφηση) and ΕΟΠΥΥ (the national health insurer that owns the outpatient reimbursement perimeter). The primary champion is the ΗΔΙΚΑ CEO — a permanent statutory authority whose role survives a government change, owning a statutory citizen inbox that no government will displace. Lock-in risk on the rail is the lowest in the entire ΕΣΥ portfolio. The user inside the ministry is the ΕΣΥ outpatient specialist (καρδιολόγος, γαστρεντερολόγος, ακτινολόγος, παθολόγος) and the ΠΦΥ γενικός ιατρός. Addressable surface: ~130 ΕΣΥ public hospitals, several thousand outpatient specialists running clinics across them, and the ΠΦΥ ΤοΜΥ network across seven υγειονομικές περιφέρειες. ΕΣΥ outpatient volumes run to millions of encounters per year; the share that today receives a citizen-readable follow-up letter is in the low single digits.

**Why now.** Four facts converge on summer 2026. First, the buyer architecture is unusually clean: ΗΔΙΚΑ owns myHealth; ΕΟΠΥΥ owns outpatient reimbursement; the GS for Public Health owns the political mandate — one coordinated triad. Second, the regulatory frame is settled enough to underwrite a pilot: Greek Law 5299/2026 sets the operational AI/data rules, the EU AI Act Annex III enforcement date has been deferred to 2 December 2027, and our drafting-with-clinician-approval architecture sits below the high-risk line. Third, the precedent base has matured into measured pilots: NHS Coventry & Warwickshire (Tortus, 2024), NHS Northumbria's letter-drafting pilot, Albert in production at France Travail and France Services, Caddy operational at Citizens Advice — four reference points the ΗΔΙΚΑ CEO and the GS will recognise. Fourth, the comparator set is now the NHS clinical-correspondence cohort, not the US payer-side prior-auth vendors that headlined the previous cycle.

**Product.** A web copilot embedded next to the ΕΣΥ outpatient and ΠΦΥ clinician workflow. The agent is triggered when a test result, imaging report, specialist letter, or hospital-day-clinic note lands in the patient's Atomic Health File (AHFY) outbox via the ΗΔΙΚΑ rail. The agent reads the new artifact and relevant prior history, composes a structured Greek-language follow-up letter at a Β1 reading level, with three required components — (1) plain-Greek restatement of the clinician's interpretation, (2) the next step (book follow-up, repeat test in X weeks, refer to specialty Y, no further action), (3) a "questions to ask your doctor" bullet list. Where a referral is implied, the agent drafts the referral letter in clinical Greek for the receiving specialist alongside the citizen-facing letter. The draft posts to the responsible clinician's inbox; the clinician reviews, edits, approves. On approval, the letter is pushed to the patient's myHealth gov.gr inbox; with patient opt-in, an SMS notification fires. Every edit feeds tone-quality tuning.

**Revenue model and pricing.** Direct contract with ΗΔΙΚΑ on a per-letter or per-clinician-seat basis, with the Ministry of Health and ΕΟΠΥΥ co-signing the MoU. Tier 1: €50–100k for a 90-day three-clinic pilot. Tier 2: €200–400k year-one across one full υγειονομική περιφέρεια, per-clinician SaaS-plus-implementation at ~€1.8–2.4k per seat per year. Tier 3: national subscription tied to myHealth letter throughput, low-seven-figure ACV.

**Unit economics.** Hosted on an EU sovereign-cloud provider on the ΗΔΙΚΑ-preferred deployment posture. Marginal inference cost per letter €0.10–0.25; fully-loaded cost under €0.50; value per letter (clinician time saved + avoided re-contact + ΕΟΠΥΥ-side encounter savings) conservatively €4–7. Gross margin target 75%+.

**Capital plan and milestones.** Pre-seed €400k–€600k (T-Life Capital + one Greek strategic angel with ΗΔΙΚΑ-adjacent credibility) for nine-month runway through the pilot. Milestones: (1) signed three-party pilot MoU within 90 days; (2) 90-day pilot complete with outcomes report at month seven; (3) Tier-2 contract signed at month nine. Seed round €2–3M at Tier-2 signing, used for customer-success across υγειονομικές περιφέρειες and a second product line (in-clinic ambient scribe drafting the upstream clinician interpretation).

**Team.** Three founding hires: (1) Greek health-comms / patient-experience lead with patient-association or gov.gr/myHealth track record — owns the Β1 register and the tone-vs-content boundary; (2) senior ML engineer with Greek-NLP experience — owns the drafting layer, citation gate, edit-feedback loop; (3) clinician advisor on retainer (ΕΣΥ outpatient chief) — owns clinical safety review and the doctor-union narrative. Post-pilot: former ΗΔΙΚΑ engineer for myHealth API depth, Greek-medical-NER engineer, customer-success lead.

**Risks and mitigations.** (1) Regulatory drift — if any letter strays from restatement into independent clinical interpretation, MDR posture flips. Mitigation: the citation gate is a hard product rule; periodic Greek notified-body legal review against Law 5299/2026 and the December-2027 AI Act date. (2) Political third-rail — ΟΕΝΓΕ / ΕΙΝΑΠ may frame as "AI talking to my patients." Mitigation: clinician signs every letter, doctors are beneficiaries (30 minutes back per clinic), union briefings precede press. (3) Tone failure on a serious finding — an under-explained cancer-suspicion letter is a national story. Mitigation: red-flag taxonomy; specific severities (κόκκινες σημαίες) trigger an enhanced template mandating in-person follow-up booking before the letter sends, plus enhanced clinician sign-off. (4) Incumbent overlap — Greek HIS vendors (Computer Solutions, Olympus, Performance Technologies, Intracom) sit in ΕΣΥ on managed-services contracts. Positioning: Epistolē is a thin agentic layer on top of their pipes via ΗΔΙΚΑ APIs and FHIR-style reads, not a replacement.

---

# Pitch Deck

## Slide 1 — Epistolē

- T-Life Capital portfolio venture, Athens
- Patient-correspondence drafting agent for ΕΣΥ outpatient clinics and ΠΦΥ
- Drafts plain-Greek follow-up letters and referrals from the clinician's interpretation; the named clinician signs; myHealth is the rail
- Pilot-ready, 90 days to first signed three-clinic deployment

## Slide 2 — Problem

- ΕΣΥ outpatient clinics either send no follow-up correspondence at all, or send terse coded reports patients cannot read
- Patients re-book scarce outpatient slots to ask "what does my MRI mean"; phone lines clog
- Specialists dictate follow-up letters in copy-paste medical Greek at the end of clinic, when they dictate them at all
- myHealth gov.gr exists as the statutory citizen inbox and carries almost no human-readable letters today
- ΠΦΥ γενικοί ιατροί spend evenings on follow-up text the GP receptionist used to handle

## Slide 3 — Why Now

- Buyer architecture is unusually clean: ΗΔΙΚΑ owns myHealth, ΕΟΠΥΥ owns outpatient reimbursement, GS for Public Health owns the mandate — one coordinated triad
- Greek Law 5299/2026 sets the operational AI/data ground rules; the EU AI Act Annex III enforcement date deferred to 2 December 2027 gives an eighteen-month deployment window under the current classification
- International deployed precedents matured into measured pilots: NHS Coventry & Warwickshire (Tortus, 2024), NHS Northumbria (letter-drafting pilot), Albert at France Travail (production), Caddy at Citizens Advice (operational)
- ΗΔΙΚΑ CEO is the most digitally-fluent named buyer in Greek health and is reachable in weeks, not quarters

## Slide 4 — Solution

- Restate, do not interpret — the clinician is the sole author of record, every clinical statement traces to a source line via a citation gate
- Structured Β1 Greek letter: plain-Greek restatement + next step + "questions to ask your doctor" bullets
- Red-flag taxonomy triggers an enhanced template and an enhanced sign-off for severities that must not be soft-pedalled
- myHealth gov.gr is the rail in; SMS is the patient nudge; the clinician's signed letter is the artifact

## Slide 5 — Demo

- Walkthrough on a synthetic case: 58-year-old man, abdominal-ultrasound report with an incidental 2.1 cm liver lesion, the gastroenterologist has interpreted "probable haemangioma, recommend MRI for confirmation"
- Side-by-side: the agent draft vs. a blank clinician dictation prompt
- Hover any sentence — the source line in the clinician interpretation or the imaging report highlights
- Red-flag template variant on a separate synthetic case (suspicious pulmonary nodule)
- Clinician edits a phrase, signs, letter posts to myHealth, SMS fires

## Slide 6 — Market

- Primary: ~130 ΕΣΥ public hospitals × outpatient clinics each; ΠΦΥ ΤοΜΥ network across seven υγειονομικές περιφέρειες; clinician seats in the thousands
- Adjacent: in-clinic ambient scribe that drafts the upstream clinician interpretation feeding Epistolē
- Lateral: ΕΟΠΥΥ patient-facing correspondence, KEP-Health citizen-side correspondence on public-health programmes
- Long-term: Cyprus public health and EU member states with structural ΗΔΙΚΑ-equivalents

## Slide 7 — Traction

- Composite rubric 4.10; passed hostile qualification re-pass 2026-05-21 (compositeNew 4.25, pilot procurability 5/5)
- Pilot budget €50–100k is the lowest in the ΕΣΥ portfolio, below every public-tender threshold
- ΗΔΙΚΑ CEO and one Athens flagship hospital outpatient chief identified as named champions

## Slide 8 — Business Model

- Tier 1: €50–100k, 90 days, three outpatient clinics
- Tier 2: €200–400k year-one, per-clinician SaaS-plus-implementation at €1.8–2.4k per seat per year
- Tier 3: low-seven-figure national subscription tied to myHealth letter throughput
- Marginal inference €0.10–0.25 per letter; gross margin target 75%+

## Slide 9 — Competition & Moat

- No multinational ships a Greek-language patient-correspondence drafter; English-first scribes (Tortus, Heidi, Abridge, Anima) have not localised
- Greek HIS vendors ship the records, not the LLM-native correspondence layer; we sit on top via ΗΔΙΚΑ
- Moat: Β1 health-literacy register + Greek medical NER + myHealth API integration + ΗΔΙΚΑ relationship + clinician-edit feedback corpus
- Architectural moat: the restatement-and-citation gate — the post-NHS-pilot architecture European supervisors will increasingly expect

## Slide 10 — Team

- Greek health-comms and patient-experience founding lead — Β1 health-literacy register, tone-vs-content boundary
- Senior ML engineer, Greek-NLP — drafting layer, citation gate, edit-feedback loop
- Clinician advisor on retainer — ΕΣΥ outpatient specialist, clinical safety review, doctor-union narrative
- Advisor bench: former ΗΔΙΚΑ engineering lead, a senior outpatient chief at an Athens flagship hospital, a Greek notified-body partner

## Slide 11 — Ask

- €400k–€600k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through the Tier-2 signing
- Introductions sought: ΗΔΙΚΑ CEO, GS for Public Health, ΕΟΠΥΥ Governor, two Athens outpatient chiefs

---

# Go-to-Market Plan

**Champion identification.** Three named champions in coordinated sequence. The primary economic and substrate champion is the ΗΔΙΚΑ CEO — owns the myHealth inbox into which every Epistolē letter is delivered, owns the AHFY rail Epistolē reads from, runs the η-Συνταγογράφηση operations team, and sits in a permanent statutory role that survives government change. The policy champion is the General Secretary for Public Health Services at the Ministry of Health — owns the political mandate to compress patient-correspondence latency and demonstrate visible ΕΣΥ patient-experience gains. The operational champion is the director of an outpatient department at one Athens flagship hospital (Ευαγγελισμός, Αττικόν, Σωτηρία, Λαϊκό) with a digital-friendly reputation — the chief who personally feels the daily letter-dictation burden. ΕΟΠΥΥ is a fourth signature on the MoU rather than a separate champion: the Governor signs because outpatient correspondence intersects the reimbursement perimeter, but the operational pull is from ΗΔΙΚΑ and the hospital.

**First-meeting choreography.** Forty-five minutes with the ΗΔΙΚΑ CEO. Health-comms founding-lead and clinician advisor in the room; ML engineer for the architecture slide only. Open on the diagnosis the CEO will already recognise: myHealth runs underneath every ΕΣΥ encounter and is structurally empty of human-readable correspondence today. Spend ten minutes on restate-do-not-interpret and the citation gate — the architectural moment that closes regulatory and political risk in one design choice. Cite Greek Law 5299/2026 and the 2 December 2027 EU AI Act Annex III date; show that our posture sits cleanly under the current classification and is forward-compatible. Spend ten minutes on the international precedent set — NHS Coventry & Warwickshire's Tortus pilot (2024), NHS Northumbria's letter-drafting pilot, Albert at France Travail, Caddy at Citizens Advice — the four references the CEO will be asked about. Close on the pilot offer; ask for one follow-up — a 30-minute working session with ΗΔΙΚΑ's myHealth API team and one nominated outpatient chief.

**Pilot offer (the buyer hook).** A 90-day pilot across three outpatient sites — one Athens flagship hospital outpatient department, one regional hospital, one Attica ΤοΜΥ — under €100k via απευθείας ανάθεση. Measured on three outcomes scored by an independent ΕΣΥ patient-experience evaluator (NSPH or a Greek patient-experience research group): (1) clinician dictation/correspondence minutes recovered per clinic, (2) patient re-contact rate (call-back to clinic phone within 14 days) on covered encounters versus matched controls, (3) clinician edit-rate per letter and sign-off latency. Reference benchmarks in the room: NHS Coventry & Warwickshire's Tortus pilot on clinician time recovered, NHS Northumbria's letter-drafting pilot on edit and approval characteristics. If outcomes do not move in the expected direction, we tear up the Tier-2 conversation.

**Expansion path.** Pilot pass → Tier-2 contract for one full υγειονομική περιφέρεια at €200–400k year-one, per-clinician ACV thereafter, same independent evaluator on quarterly review. Concurrent product expansion to the in-clinic ambient scribe that drafts the underlying clinician interpretation feeding Epistolē — adjacent product, same buyer, same moat. National rollout from year two on an SLA-backed subscription tied to myHealth letter throughput. Lateral expansion to ΕΟΠΥΥ patient-facing correspondence (reimbursement and pre-auth outcomes in plain Greek) and to KEP-Health citizen-side correspondence (vaccination reminders, screening invitations) from year three. Each lateral move uses the same Β1 health-literacy moat and the same myHealth rail.

**Procurement vehicle.** Tier 1 is a direct ΗΔΙΚΑ contract under the απευθείας ανάθεση threshold — the only vehicle with a calendar compatible with a 90-day pilot. Tier 2 is a competitive process we expect to win on the Tier-1 evaluator report and deployed clinician NPS; tender-document shaping begins in parallel with the pilot. Tier 3 is full ΕΣΗΔΗΣ; we will welcome an established Greek HIS prime (Computer Solutions, Performance Technologies, Intracom) as prime contractor with Epistolē as the agentic-layer subcontractor — protects incumbent relationships, neutralises HIS-community pushback, lowest-friction path to national.

**Comms.** The single greatest political risk is the framing "AI is talking to my patients" — pre-empted before any press touches the file. ΟΕΝΓΕ and ΕΙΝΑΠ briefings in person, ahead of any media: the named clinician signs every letter, the agent is a correspondence assistant for doctors, doctors get back 30 minutes per clinic. Patient-association briefings (ΚΕΦΙ, Greek Association of Diabetics, others as relevant to pilot specialties): patients will finally receive a follow-up letter they can read, the clinician remains responsible, opt-out is at myHealth level. A Greek notified-body opinion grounded in Law 5299/2026 and the December-2027 AI Act timeline is commissioned before pilot signing and published on day one as the public conformity-assessment posture. No press release at pilot signature or during the pilot. One pre-briefed Καθημερινή or Το Βήμα long-form on the day the evaluator report is shared with the ΗΔΙΚΑ CEO and the GS, framed on patient experience and clinician productivity, evaluator quoted, NHS/Albert/Caddy comparator set explicit. Per-clinician productivity numbers are not published without ΗΔΙΚΑ and the outpatient chiefs' written consent. Brussels-facing comms: conformity-assessment posture document on day one, citing the restate-do-not-interpret architecture, the citation gate, Law 5299/2026, and the 2 December 2027 Annex III date.
