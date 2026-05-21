# Business Plan

**Company (working title):** Πυρόπολις — a T-Life Capital portfolio venture building a Greek-language, voice-first field-reporting agent for the Πυροσβεστικό Σώμα (ΠΣ) and the Γενική Γραμματεία Πολιτικής Προστασίας (ΓΓΠΠ).

**Thesis.** A fire-service officer on a Mediterranean front line spends 30–60 minutes per shift writing the same documents — Δελτίο Συμβάντος, after-action notes, damage logs — by hand or via WhatsApp/SMS, after twelve hours next to running engines and smoke masks. The operations centre then re-keys it into AEGIS-style dashboards. Πυρόπολις turns the post-shift report into a 90-second dictation: the officer presses talk on a ruggedised mobile app, speaks Greek into their handset, and receives a structured ΓΓΠΠ-format report in 30 seconds, geo-stamped, ready for the duty officer. The agent never triggers an alert, never dispatches a unit — it structures the officer's own words into the official register. Decision support of the lowest-risk class under Greek Law 5299/2026, well below the EU AI Act Annex III high-risk threshold whose enforcement was deferred to 2 December 2027.

**Architectural moat — the split that makes this defensible and shippable.** Three layers. (1) A Greek-operational ASR layer fine-tuned on ΠΣ radio-corpus archives on top of Helsinki-NLP whisper-medium-el and GR-Whisper — the dispatch register ("ρέμα", "αυχένας", "οικισμός", coded resource references) is a vocabulary no generic Whisper, no Otter.ai, no Axon Draft One ships in 2026. (2) A schema-bound extractor that maps free speech to the ΓΓΠΠ Δελτίο Συμβάντος schema with deterministic field validation and a 1–2-question voice clarification loop when a mandatory field is missing. (3) A privacy-by-construction audio layer: on-device transcription where the handset allows, ephemeral audio purged the moment the officer confirms the text, written under HDPA Smart Policing guidance and Law 5299/2026 — no biometric processing, no covert recording, no third-party data sharing. The officer's own voice transcribing the officer's own report is the lowest-risk class of processing under Greek and EU law in 2026, and the architecture makes that defensibility explicit.

**Market and buyer.** The economic buyer is the Αρχηγός ΠΣ for operational adoption, with the Γενικός Γραμματέας Πολιτικής Προστασίας as the political sponsor and the Minister's chief of staff as the calendar gatekeeper. The user inside the ministry is the field-tier πυροσβέστης and the civil-protection field officer — older cohort, glove-wearing, often near smoke, for whom voice beats typing. The secondary user is the operations-centre duty officer who consumes the cleaned report; their pain (late, inconsistent, missing-field reports re-keyed by hand) is the political case. Addressable seat count: ~12,000 ΠΣ operational staff plus ~3,000 ΓΓΠΠ regional officers and ΕΜΑΚ rescue specialists; high-utilisation cohort is the ~6,000–7,000 filing Δελτία in a fire season. Thirty to sixty minutes per officer per shift across a 120-day fire season is a multi-thousand-shift recovery per region.

**Why now (the timing window).** Four facts converge on the summer 2026 fire season. First, Greek-language ASR is production-grade in 2026: Helsinki-NLP whisper-medium-el and GR-Whisper give a baseline a Greek-speech-ML team out of Athena RC or ILSP can fine-tune on ΠΣ radio archives in a quarter. Second, the international precedent base is mature: Axon Draft One has rolled out across hundreds of US police departments for body-cam narrative drafting; UK police voice-dictation pilots at Suffolk Constabulary and West Midlands Police run the same audio-in / structured-text-out pattern; GDS i.AI Minute is the open-source meeting-minutes analogue. Third, Greek Law 5299/2026 governs AI/data rules and voice-to-text dictation of an officer's own report sits outside the high-risk class; the HDPA Smart Policing ruling restricts biometric processing but is not in scope here. Fourth, EU AI Act Annex III enforcement was deferred to 2 December 2027 — eighteen months of clean runway. The next political moment is the post-2026-fire-season debrief in October–November; we need to be inside one Πυροσβεστική Περιφέρεια by then.

**Product.** A push-to-talk mobile app for Android and iOS, ruggedised for gloves and smoke masks, offline-first for areas with no carrier coverage. ASR runs on-device for clean audio and falls back to a secure Greek/EU sovereign-cloud endpoint when the link is good. The agent extracts structured fields against the ΓΓΠΠ Δελτίο Συμβάντος schema, auto-attaches geo-context from phone GPS plus officer pin on a map, asks one or two voice follow-up questions in Greek when a mandatory field is missing, drafts the formal report in official register, and surfaces a one-line summary for the duty officer. On confirm, the report is pushed to the operations-centre system (the AEGIS-style substrate operated by Intracom, Netcompany or Space Hellas) over an integration contract; a copy is archived with the audio and edit trail. Strictly never triggers 112, never dispatches resources, never overrides the duty officer.

**Revenue model and pricing.** Direct contract with ΓΓΠΠ via the Ministry of Climate Crisis & Civil Protection. Tier 1: €80–150k pilot in one Πυροσβεστική Περιφέρεια (Αττική or Θεσσαλονίκη as obvious candidates) across one full fire season, measuring time-to-draft, completeness of mandatory fields, and operations-centre re-keying time. Tier 2: €600k–1.2M year-one rollout across three to five περιφέρειες on a per-seat SaaS-plus-implementation model (≈€350–500 per officer per year at deployed scale). Tier 3: national subscription with SLA-backed availability through the fire season, low-seven-figure annual contract value.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider with on-device fallback for offline operation. Marginal inference cost per report in the €0.05–0.15 range at current sovereign-LLM pricing once the ASR model is fine-tuned and small; schema extraction is sub-cent on a 7B-class Greek-tuned model. Per-officer ACV at scale is 25–50× variable cost. Gross margin target 75%+ after on-call support during fire-season peaks.

**Capital plan and milestones.** Pre-seed €700k–€900k (T-Life Capital + one Greek strategic angel with civil-protection or defence-industry credibility) for a ten-month runway through the 2026 fire season pilot. Milestones: (1) signed pilot LoI with the Αρχηγού ΠΣ office within 90 days; (2) ΠΣ-radio-corpus access agreement with ΓΓΠΠ legal counsel under a written DPIA at month three; (3) ruggedised field MVP in officers' hands by start of fire season at month four; (4) pilot complete with documented report-time delta at month ten. Seed €2.5–3.5M at the Tier-2 signing, used for a customer-success function in Athens, a helmet-mic integration line, and the adjacent Μετά-Συμβάντος post-incident drafting agent on the same ΓΓΠΠ buyer relationship.

**Team and hires.** Three founding hires: (1) speech-ML lead from Athena RC or ILSP with Whisper-derivative fine-tuning experience on noisy Greek audio; (2) ex-ΠΣ operations officer co-founder — ideally a reservist who worked Mati 2018, Evros/Rhodes 2023, or the Attica 2024 fires — for credibility with the Αρχηγείο, ΕΜΑΚ liaison, and the union conversation; (3) mobile-systems engineer with offline-first rugged-handset experience. First three hires post-pilot: data-protection counsel on HDPA filings, a ΠΣ-union liaison on a defined consulting engagement, and a customer-success lead with public-sector procurement scars.

**Risks.** (1) Union position on body-worn microphones and audio retention — mitigated by self-dictation framing (officer's own voice, no covert recording, no body-cam audio), ephemeral audio purged on confirmation, and a written ΠΟΕΥΠΣ briefing before any pilot signature. (2) ASR accuracy on noisy field audio — mitigated by ΠΣ-radio-corpus fine-tuning, push-to-talk noise-gating, and a confidence-gated voice clarification loop. (3) Incumbent overlap — Intracom, Netcompany and Space Hellas operate AEGIS-style dashboards but do not build field-mobile dictation; we sit on their substrate and offer an integration contract, never displacement. (4) Buyer objection "οι πυροσβέστες μου δεν θα κρατάνε κινητό σε πύρινο μέτωπο" — addressed by the buyer-hook demo: the report is dictated *after* the front, in the truck or at base, replacing the paper Δελτίο, not during active firefighting.

---

# Pitch Deck

## Slide 1 — Πυρόπολις
- T-Life Capital portfolio venture, Athens
- Greek-language, voice-first field-reporting agent for the ΠΣ and ΓΓΠΠ
- Field officer dictates in Greek; agent returns a structured ΓΓΠΠ Δελτίο Συμβάντος in 30 seconds
- Pilot-ready in one Πυροσβεστική Περιφέρεια across the 2026 fire season

## Slide 2 — Problem
- ΠΣ field officers write Δελτία Συμβάντος, after-action notes, damage logs on paper or via WhatsApp/SMS
- 30–60 minutes per officer per shift on report drafting in fire season
- Operations centre re-keys everything into AEGIS-style dashboards — another 2–3 hours per officer-shift lost
- Reports arrive late, inconsistent, with missing mandatory fields — the duty officer's daily pain
- Post-Mati, post-Thessaly, parliamentary committees grade ΓΓΠΠ on exactly the quality and timeliness of these reports

## Slide 3 — Why Now
- Greek ASR is production-ready in 2026: Helsinki-NLP whisper-medium-el and GR-Whisper give a baseline a Greek speech-ML team can fine-tune on ΠΣ radio archives in a single quarter
- Axon Draft One deployed across hundreds of US police departments; UK police voice-dictation pilots at Suffolk Constabulary and West Midlands Police running the same audio-in / text-out pattern; GDS i.AI Minute open-source proof point
- Greek Law 5299/2026 governs AI/data rules; HDPA Smart Policing ruling restricts biometric processing — self-dictation of an officer's own report is decision-support, low-risk, explicitly out of scope
- EU AI Act Annex III enforcement deferred to 2 December 2027 — eighteen-month clean runway
- The political window is the post-2026-fire-season debrief in October–November

## Slide 4 — Solution
- Push-to-talk mobile app, ruggedised for gloves and smoke masks, offline-first
- Greek-operational ASR fine-tuned on ΠΣ radio corpus — handles dispatch register no generic Whisper covers
- Schema-bound extractor maps speech to the ΓΓΠΠ Δελτίο Συμβάντος schema with 1–2-question voice clarification
- Agent drafts in official register; duty officer gets a one-line summary; full audio + edit trail archived
- Never triggers 112, never dispatches resources — strictly decision support on the officer's own report

## Slide 5 — Demo
- 90-second video: a real ΠΣ reservist officer dictates a wildfire report next to a running engine
- Agent returns a complete Δελτίο Συμβάντος with geo, resources deployed, severity in 28 seconds
- Same report on paper takes 7 minutes; agent draft is reviewed and signed by the officer
- Side-by-side: free-speech dictation → schema-bound structured fields → official-register paragraph

## Slide 6 — Market
- Greek primary market: ~12,000 ΠΣ operational staff + ~3,000 ΓΓΠΠ field officers and ΕΜΑΚ rescue specialists
- High-utilisation cohort: ~6,000–7,000 officers filing Δελτία in a fire season
- Adjacent product line on the same buyer: Μετά-Συμβάντος post-incident drafting agent (same ΓΓΠΠ relationship, separate budget line, same Greek-officialese moat)
- Lateral expansion: ΕΛΑΣ police-report drafting (Citizen Protection ministry, same dictation pattern), Coast Guard incident logging — same Greek-language moat

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.55
- Passed hostile qualification re-pass May 2026 — highest studio-fit in the climate-civil-protection portfolio
- Founding ex-ΠΣ operations officer candidate identified (Mati 2018 / Evros 2023 response history)
- Athena RC / ILSP speech-ML founding-lead conversations open
- Two ΠΣ Περιφέρειες (Αττική, Θεσσαλονίκη) flagged as warm via the studio's reservist network

## Slide 8 — Business Model
- Tier 1 pilot: €80–150k, one fire season, one Πυροσβεστική Περιφέρεια
- Tier 2 rollout: €600k–1.2M year-one across three to five περιφέρειες
- Tier 3 national subscription: SLA-backed availability, low-seven-figure ACV
- Per-officer SaaS-plus-implementation, ≈€350–500 per officer per year at scale

## Slide 9 — Competition & Moat
- No Greek SI ships a voice-first, Greek-tuned, field-officer-facing reporting agent — Netcompany, Intracom and Space Hellas build dashboards, not the dictation layer
- Pano AI and 4Earth own commercial wildfire-AI globally but on the satellite/sensor side, not back-office reporting
- Otter.ai, Rev, Axon Draft One do not ship Greek — let alone Greek operational dispatch register
- Moat: Greek-operational ASR fine-tuned on ΠΣ radio archives + schema-bound extractor + on-device privacy posture + ΠΣ reservist co-founder credibility

## Slide 10 — Team
- Speech-ML lead — Athena RC or ILSP background, Whisper-derivative fine-tuning
- Ex-ΠΣ operations officer co-founder — Mati / Evros / Attica response history, ΕΜΑΚ liaison, union credibility
- Mobile-systems engineer — offline-first, ruggedised handset, push-to-talk noise-gating
- Advisor bench: former Γενικός Γραμματέας Πολιτικής Προστασίας; HDPA / Law 5299 data-protection counsel

## Slide 11 — Ask
- €700k–€900k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: ten-month runway through the 2026 fire-season pilot and the Tier-2 signing
- Investor introductions sought: Αρχηγείο ΠΣ, Γενικός Γραμματέας Πολιτικής Προστασίας, Minister's chief of staff, ΠΣ-radio-corpus access via ΓΓΠΠ legal counsel

---

# Go-to-Market Plan

**Champion identification.** Two named primary champions: the Αρχηγός ΠΣ (operational buyer, owns adoption across ΠΣ Περιφέρειες, sets the union conversation) and the Γενικός Γραμματέας Πολιτικής Προστασίας (political buyer, accountable to minister and parliament on report quality). Calendar gatekeeper: the Minister of Climate Crisis & Civil Protection's chief of staff, controlling the slot through which the primary champions are reachable between the 2026 fire-season debrief and the 2027 season prep cycle. Regional champion: the Περιφερειακός Διοικητής ΠΣ in Αττική or Θεσσαλονίκη — feels every late Δελτίο as a daily reputational cost. Secondary sponsor: an ΕΜΑΚ commander, where post-mission narrative reporting on collapsed-structure rescues and flood evacuations is an even harder writing job.

**First-meeting choreography.** Forty-five minutes with the Αρχηγείο ΠΣ, ex-ΠΣ co-founder physically in the room, speech-ML lead for the architecture slide only. Open with the 90-second video — a real reservist officer next to a running engine, finished Δελτίο on screen in 28 seconds — before any slide. Spend ten minutes on the moat split: Greek-operational ASR fine-tuned on ΠΣ radio corpus + schema-bound extractor + on-device audio purged on confirm. Cite Axon Draft One and the UK Suffolk Constabulary and West Midlands Police voice-dictation pilots as the international comparator set — do not cite "Bobbi" or Hampshire, which is misattributed. Spend ten minutes on the HDPA / Law 5299 / EU AI Act posture: self-dictation is decision-support, low-risk, biometric processing out of scope, December 2027 Annex III deferral gives a clean deployment window. Close on the pilot offer below. Ask for one follow-up: a 30-minute working session with ΠΣ legal counsel, the ΠΟΕΥΠΣ union representative, and the IT director of the candidate Περιφέρεια.

**Pilot offer (the buyer hook).** A one-fire-season pilot in one Πυροσβεστική Περιφέρεια (Αττική or Θεσσαλονίκη), €80–150k, fitted under the discretionary tender threshold. ~200 officers equipped with the ruggedised app from the start of the season. Measured weekly against three pre-agreed metrics: (1) median officer time-to-draft for a Δελτίο Συμβάντος (baseline 7–12 minutes on paper, target sub-90 seconds), (2) operations-centre re-keying time eliminated per shift (baseline 2–3 hours per officer-shift, target zero), (3) completeness of mandatory fields at first submission (baseline ~70%, target >95%). The audit is run by an independent operations-research firm of the Αρχηγείου's choice; the report belongs to ΓΓΠΠ and is published or withheld at the General Secretary's discretion. If we miss the time-to-draft target by more than 25%, we tear up the invoice. Reference numbers in the room: Axon Draft One deployment scale and Suffolk Constabulary's published throughput numbers — these are the comparators a minister will be asked about.

**Expansion path.** Pilot pass → Tier-2 rollout across three to five Πυροσβεστικές Περιφέρειες (€600k–1.2M year-one), per-officer ACV thereafter. Concurrent product expansion on the same buyer: the Μετά-Συμβάντος post-incident drafting agent (ΓΓΠΠ planning directorate, separate budget line, fits as a Tier-2 add-on for €60–120k). National rollout from year two on an SLA-backed subscription with fire-season availability commitments. Year-three lateral expansion: ΕΛΑΣ police-report drafting under Citizen Protection (same dictation pattern, same privacy posture) and Λιμενικό Σώμα incident logging on the maritime side.

**Procurement vehicle.** Tier 1 fits under the απευθείας ανάθεση threshold — the standard innovation-pilot instrument with a calendar compatible with the 2026 fire-season window. Tier 2 is a competitive tender we expect to win on the audit report and deployed officer NPS; we begin tender-document shaping with ΓΓΠΠ procurement in parallel with the pilot. We accept Intracom, Netcompany or Space Hellas as prime on Tier 3 with Πυρόπολις as dictation-layer subcontractor — protects the AEGIS-substrate relationships. RRF Civil-Protection envelope is a Tier-3 funding fallback.

**PR and comms.** No press release at pilot signature. None during the fire season. One pre-briefed Καθημερινή long-form on the day the audit report is shared with the General Secretary, framed around officer time recovered and duty-officer reporting quality — never around "AI in the fire service." Quoted voices: the audit-firm partner, the ex-ΠΣ co-founder, and the Περιφερειακός Διοικητής ΠΣ of the pilot region. Comparator set: Axon Draft One, Suffolk Constabulary, West Midlands Police, GDS i.AI Minute. ΠΟΕΥΠΣ union briefings held in person ahead of any press contact — message is officer-time-recovery and officer-own-voice-only, never surveillance, never replacement; ephemeral audio purged on confirm and on-device transcription are the technical undertakings on record. Brussels-facing: an HDPA-aligned DPIA posted day-one, citing Law 5299/2026, the Smart Policing ruling's scoping of biometric processing, and the schema-bound self-dictation architecture — pre-empts any DPA inquiry and gets ahead of the 2 December 2027 Annex III enforcement date. Per-officer productivity numbers are never published without the Αρχηγείου's written consent; the audit report's release calendar is the General Secretary's.
