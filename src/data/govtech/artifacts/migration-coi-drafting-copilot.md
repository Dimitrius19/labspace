# Business Plan

## Company thesis
A focused agentic-AI company that ships a Greek-language Country-of-Origin Information (COI) drafting copilot for first-instance asylum officers at the Greek Asylum Service. The product is a strict decision-support tool: it retrieves, clusters and drafts COI passages from a whitelisted source registry, surfaces contradictions, and hands a tracked-changes draft into the officer's Alkyoni workspace. The officer decides; the agent drafts; the agent never assesses credibility, never writes the merits decision, never issues the operative act. The wedge is the time sink (4-8 hours per case on COI), the moat is Greek administrative-law register over English/French/German sources, and the defensibility is a per-case audit trail engineered from day one for EUAA quality review and judicial appeal. The structural legal cover is the European Commission's February 2026 high-risk AI guidance, which carves preparatory translation and structured summarisation out of Annex III high-risk scope — COI drafting sits squarely inside that carve-out and we design every interaction to keep it there.

## Market & buyer
Primary buyer: the Asylum Service (Υπηρεσία Ασύλου) of the Ministry of Migration & Asylum. The signing authority is the Secretary General for Asylum (Γ.Γ. Ασύλου), with the Asylum Service Director as the operational sponsor. The UNHCR Greece Representative is briefed pre-signature as observer-stakeholder, not as buyer. Users are caseworkers (χειριστές αιτημάτων ασύλου) at Athens, Thessaloniki, Lesvos, Samos, Chios, Kos and Leros regional asylum offices, plus the quality-assurance unit at HQ. Greece is the front-line EU asylum jurisdiction; the Alkyoni backlog runs in the tens of thousands; COI drafting is one of the three largest per-case time sinks. Beyond Greece, the addressable market is every southern-EU and front-line member state running EUAA-aligned procedures in a non-English administrative register (Italy, Spain, Cyprus, Malta, Bulgaria) — but the Greek deployment is the only one we underwrite in the seed plan.

## Product (COI drafting agent loop)
The agent ingests case metadata from Alkyoni (claimed nationality, region of origin, claimed protection ground, claim date) plus the officer's free-text COI questions. It queries a whitelisted source registry — EUAA COI Portal, UNHCR Refworld, ACCORD ecoi.net, Landinfo, UK Home Office CPIN, BAMF country reports, Greek-translated press feeds — constrained to a date window appropriate for the claim. It clusters passages by sub-question (security situation, treatment of group X, internal-flight alternative, state-protection availability), deduplicates, ranks for source authority and recency, then drafts a Greek-language COI section with per-claim citations, explicit date stamps and a side-by-side original-language excerpt where the source is non-Greek. It flags contradictions between sources and produces an officer-facing "what to ask the applicant next" question list. Output lands in the officer's Alkyoni workspace as a tracked-changes document; the officer accepts, edits, or rejects each cited claim. Every prompt, retrieval, source URL, snippet hash, model version and officer edit is logged into an immutable audit trail keyed to the case ID, exportable as a court-admissible PDF.

## Revenue model & pricing
Two-layer commercial model. Layer one: a per-seat subscription for active caseworkers, priced in the €1,800-2,400 per seat per year band on the Greek pilot, with volume discounts at full national rollout (~350-500 active seats). Layer two: a per-case audit-bundle fee (€2-4 per case) for any case where the audit trail is exported for a judicial-appeal or EUAA quality review. The pilot is a fixed-fee contract of €60-120k for twelve months at one regional office (apevtheias anathesi, innovation-procurement framework). Expansion to all regional asylum offices is modelled at €350-600k annual contract value once the pilot converts.

## Unit economics
Marginal cost per case is dominated by frontier-model inference over retrieved passages; we model €0.35-0.80 of inference and retrieval cost per case at scale, against a €4-8 per-case price-equivalent at full subscription. Gross margin at full deployment is targeted at 70-78%. Customer acquisition cost is high in absolute terms (a 9-12 month sales cycle into the Secretary General's office) but is amortised across the entire Asylum Service once the first contract signs.

## Capital plan & milestones
Seed round of €1.8-2.5M sized to reach a signed national-rollout contract. Milestones: month 0-3, refugee-law co-founder onboarded and fundamental-rights impact assessment scoped with UNHCR Greece input; month 3-6, closed pilot at one regional office under a memorandum of understanding; month 6-9, audit-trail tooling and EUAA quality-review export reach production; month 9-12, pilot conversion to €60-120k contract; month 12-18, expansion to three regional offices and EU AI Act conformity-assessment file complete (using the ~16 additional months of design runway granted by the Omnibus 7 May 2026 deferral of Annex III migration provisions to 2 December 2027); month 18-24, signed national-rollout contract.

## Team & hires
A refugee-law co-founder is essential, not optional, and must be signed before the first ministry conversation. Candidates: a former Asylum Service official, a senior Greek Council for Refugees lawyer, or a refugee-law academic with EUAA standing. This person owns the source-whitelist policy, the FRIA, the UNHCR relationship, and the public defence of the decision-support boundary. Around that, a Greek-Athens technical founder, an ML engineer with production RAG experience, a Greek-language NLP engineer for administrative-register tuning, and a civil-society advisory board (HumanRights360, Refugee Support Aegean, Greek Council for Refugees). Total headcount at seed: 6-8.

## Risks
The original memo overclaimed precedent: the Switzerland SEM internal COI drafting pilot is not publicly re-confirmed for 2025-2026 (SEM's 2025 public posture has shifted to smartphone-data extraction), and the BAMF MILo-as-LLM characterisation was overclaimed — MILo remains primarily a country-knowledge platform. The honest precedent stack is BAMF DIAS dialect recognition (live, verifiable as the most concrete BAMF AI in the asylum pipeline), USCIS RAIO Liberty plus the AI Interview Simulator (documented in the DHS use-case inventory, 2024), and the UK Home Office asylum-interview transcription procurement (2024). None of these is a direct Greek-language COI drafting analogue; the company is building the reference deployment, not following one. This is the framing risk the memo now acknowledges, and it is the reason the qualification dropped from PASS to CONDITIONAL.

The structural legal risk — EU AI Act Annex III treatment of asylum-examination AI as high-risk — is materially softened by two 2026 developments. First, the European Commission's February 2026 draft high-risk guidance explicitly carves preparatory translation and structured summarisation out of Annex III scope; the COI agent is the canonical preparatory tool and we ship inside that carve-out. Second, the Omnibus 7 May 2026 deferred the Annex III migration, asylum and border-control provisions to 2 December 2027, granting roughly sixteen additional months of design runway for the conformity-assessment file. Survivability still requires conformity assessment, post-market monitoring, mandatory human-in-the-loop logging, a published FRIA, and strict decision-support framing in every artefact the company produces. UNHCR Greece and Greek NGOs will scrutinise; mitigation is observer access to the audit log, an open source whitelist, and a public FRIA. A hallucinated citation surfacing on judicial appeal three years post-decision is the loss-of-company event; the audit-trail export is the structural mitigation. Greek SI incumbents (Intracom, Byte, Performance) have not touched COI workflows and are partners-of-convenience for case-management integration, not competitors.

# Pitch Deck

## Slide 1 — COI Drafting Copilot for Asylum Officers
- Greek-language decision-support agent for the Asylum Service
- Audit-ready COI sections drafted inside the officer's Alkyoni case file
- Whitelisted EUAA / UNHCR / ACCORD / Landinfo / CPIN / BAMF country reports only
- Designed inside the European Commission's February 2026 preparatory-task carve-out
- T-Life Capital, Athens

## Slide 2 — The problem
- Greek asylum officers spend 4-8 hours per case drafting the COI section
- They consult EUAA, Refworld, ACCORD, Landinfo, UK CPIN, BAMF country reports and Greek-translated press by hand
- Quality is uneven across officers; citations drift; EUAA quality reviews flag inconsistency
- Alkyoni backlog runs in the tens of thousands; COI is one of the three largest per-case time sinks

## Slide 3 — Why now
- European Commission February 2026 high-risk AI draft guidance carves preparatory translation and structured summarisation out of Annex III
- Omnibus 7 May 2026 deferred Annex III migration provisions to 2 December 2027 — sixteen additional months of design runway
- EUAA quality framework now treats COI traceability as auditable
- Frontier models can read English/French/German sources and draft in Greek administrative register
- No Greek-language COI drafting deployment exists in any EU member state

## Slide 4 — Solution: strict decision-support, never decision-maker
- Agent drafts; the asylum officer accepts, edits or rejects each cited claim
- No autonomous action: every output lands as tracked changes in Alkyoni for officer review
- The agent does not assess credibility, does not write the merits decision, does not issue the operative act
- Decision-support framing is contractually bound — in the procurement scope, the UI labelling, the audit-trail schema and the FRIA
- Designed to remain inside the Commission February 2026 preparatory-task carve-out; conformity-assessment file pre-built for the December 2027 enforcement date

## Slide 5 — Demo
- Live: a synthetic Afghan case opens in Alkyoni
- Agent pulls 14 EUAA / UNHCR / ACCORD / Landinfo passages, clusters by sub-question, ranks by recency
- Drafts a Greek COI section with per-claim citations, original-language excerpts side-by-side
- Flags two contradictions between Landinfo and ACCORD; surfaces three follow-up questions for the applicant interview
- Officer accepts five claims, edits two, rejects one; every action lands in the immutable audit log

## Slide 6 — Market
- Primary: 350-500 active caseworker seats at the Greek Asylum Service across mainland and Aegean island offices
- Adjacent: quality-assurance unit at HQ; Appeals Authority rapporteurs as a stretched scope
- EU-comparable buyers in Italy, Spain, Cyprus, Malta, Bulgaria with EUAA-aligned procedures and non-English administrative register
- Greek pilot underwrites the seed; EU expansion is upside, not base case

## Slide 7 — Precedent stack (honest version)
- BAMF DIAS dialect recognition (live, verifiable) is the most concrete BAMF AI in the asylum pipeline today; the earlier "BAMF MILo-as-LLM" framing was overclaimed and is retired from this memo
- USCIS RAIO Liberty plus the AI Interview Simulator (DHS use-case inventory, 2024) is the US decision-support reference
- UK Home Office asylum-interview transcription procurement (2024) signals an open EU-adjacent buyer market for asylum-pipeline AI
- Switzerland SEM is NOT a re-verified 2025-2026 COI precedent — SEM's public 2025 posture has shifted to smartphone-data extraction; we no longer cite SEM as the canonical reference and any pitch deck slide that did so is corrected
- We are building the reference Greek-language COI drafting deployment, not following one — that is the conditional in the qualification and it is honest in the room

## Slide 8 — Business model
- Per-seat subscription, €1.8-2.4k per active caseworker per year
- Per-case audit-bundle fee, €2-4 per case on export for appeal or EUAA quality review
- Pilot fixed-fee €60-120k for twelve months at one regional office (apevtheias anathesi)
- Expansion to all regional asylum offices modelled at €350-600k annual contract value

## Slide 9 — EU AI Act compliance and UNHCR observer access (the strongest slide)
- European Commission February 2026 high-risk AI draft guidance: preparatory translation and structured summarisation are explicitly carved out of Annex III high-risk scope. COI drafting is the canonical preparatory task and the product is designed inside that carve-out — this is the lead compliance argument and it is the structural legal cover
- Omnibus 7 May 2026 deferred Annex III migration, asylum and border-control provisions to 2 December 2027 — sixteen additional months of design runway for the conformity-assessment file
- Strict decision-support framing: agent does not assess credibility, does not write the merits decision, does not issue the operative act — bound contractually in the procurement scope, the UI labelling, the audit-trail schema and the FRIA
- Conformity assessment, post-market monitoring and fundamental-rights impact assessment delivered at contract signature regardless of the carve-out — we conform to the higher standard
- UNHCR Greece has contractual observer access to anonymised audit logs as a binding term, briefed pre-signature; source whitelist published openly; civil-society advisory board (HumanRights360, Refugee Support Aegean, Greek Council for Refugees) seated by seed close
- Audit-trail export bundled as a court-admissible PDF: every source URL, retrieval timestamp, snippet hash, model version, officer edit, and final accepted text — the structural mitigation against the loss-of-company event

## Slide 10 — Competition & moat
- No Greek-language COI agent exists today; EUAA COI Portal is a search index, not a drafting tool
- Multinational tools cannot ship Greek administrative-law register without Greek tuning
- Greek SIs (Intracom, Byte, Performance) have not touched COI workflows — low-margin buyer for them, perfect carve-out for us
- Moat compounds: source whitelist policy + FRIA + EUAA-aligned audit format + Greek register + UNHCR observer access + Commission carve-out alignment

## Slide 11 — Team
- Greek-Athens founder, technical, prior agentic-AI build
- Refugee-law co-founder: former Asylum Service official, Greek Council for Refugees veteran, or refugee-law academic with EUAA standing — signed BEFORE the first ministry conversation, not after
- ML engineer with production RAG experience; Greek-language NLP engineer for administrative-register tuning
- Civil-society advisory board: HumanRights360, Refugee Support Aegean, Greek Council for Refugees

## Slide 12 — Ask
- €1.8-2.5M seed to a signed national-rollout contract in 24 months
- Use of funds: refugee-law co-founder, ML / RAG engineering, FRIA and conformity-assessment file, pilot delivery at one regional office
- Conversations open with Secretary General for Asylum and UNHCR Greece Representative (the briefing is the cover, not the bottleneck)
- Co-investors with EU govtech credibility welcomed

# Go-to-Market Plan

## Champion identification
The signing champion is the Secretary General for Asylum (Γ.Γ. Ασύλου). The operational sponsor is the Asylum Service Director. The credibility-gating stakeholder, briefed before any pilot signature, is the UNHCR Greece Representative as observer-stakeholder — not a buyer, not a veto, but a relationship that must exist on the record before the Secretary General will sign. A secondary track runs through the Director of the EUAA Information Analysis Sector to validate that our source whitelist and audit-format align with EUAA quality review. The refugee-law co-founder owns each of these relationships; the technical founder does not lead them. The co-founder must be signed before the first ministry conversation — pitching without that credibility shield is a wasted shot and is the first qualification blocker.

## First-meeting choreography
The first meeting with the Secretary General is forty-five minutes and is built around the buyer objection: "If the European Commission, UNHCR or an Athens administrative court finds that one of your citations was a hallucination, we are on the front page of every newspaper." We walk in with four artefacts: a synthetic live demo on an Afghan case with tracked-changes output in Alkyoni layout; a one-page court-admissible audit-bundle PDF for that case; a draft fundamental-rights impact assessment scoped against EU AI Act Annex III; and a one-page legal-positioning note that walks the Commission February 2026 carve-out language line by line, showing that the agent's interaction surface is preparatory translation and structured summarisation, not examination of the asylum application. We do not promise time savings as the headline; we promise auditability, the Commission-carve-out alignment, and the strict decision-support boundary. The ask out of the meeting is a follow-on with the Asylum Service Director and a separate briefing slot for the UNHCR Greece Representative within four weeks.

## Pilot offer
Twelve-month pilot at a single regional asylum office. Recommended site is a mid-volume mainland office (Thessaloniki or Athens) rather than an island office, so that interpreter and operational variance does not contaminate the COI evaluation. Fixed fee €60-120k via apevtheias anathesi under the innovation-procurement framework. Scope: 20-30 caseworker seats, integration into Alkyoni as a tracked-changes document, audit-trail export to PDF, weekly source-whitelist review by the refugee-law co-founder with civil-society advisors, monthly metrics review with the Asylum Service Director. Pilot success metrics agreed up front: median COI-drafting time per case, EUAA quality-review pass rate on the sampled cohort, audit-log completeness rate, and a qualitative officer-satisfaction survey. Failure conditions agreed up front in writing: any hallucinated citation surfaced in a sampled case auto-triggers a pause, a root-cause review with UNHCR observer access, and a published remediation note.

## Expansion path
On pilot conversion, expand to three regional offices in months 12-18 (one additional mainland, two islands) at a renewed contract of €180-300k. Full national rollout to all regional asylum offices at €350-600k annual contract value targeted in months 18-24. The 2 December 2027 Annex III enforcement date for migration provisions is the design horizon for the conformity-assessment file, which we deliver on national-rollout signature. Adjacent scope earned by trust, not pitched at first contract: quality-assurance unit at HQ, then Appeals Authority rapporteur drafting. We do not pitch merits-drafting; that adjacency is a kill-zone (sibling idea migration-decision-letter-merits-drafting, killed in the qualification) and the company never approaches it.

## Procurement vehicle
Pilot signs as apevtheias anathesi (direct award) under the innovation-procurement framework available to the Ministry of Migration & Asylum at the €60-120k tier. National rollout requires an open tender; we structure the pilot deliverables (audit-log schema, FRIA, EUAA-aligned export format, Commission-carve-out compliance memo) so that the tender specification effectively encodes our moat — Greek register, EUAA whitelist, FRIA-on-signature, UNHCR observer access, preparatory-task framing — without naming us. The refugee-law co-founder reviews the tender draft with the ministry legal office to ensure compliance.

## PR/comms strategy (proactive on fundamental rights)
We do not let the press define this product. Before the first pilot output reaches a case file, we publish: the source whitelist, a plain-language description of the agent loop, the FRIA, the legal-positioning note on the Commission February 2026 carve-out, and a one-page note on the strict decision-support boundary. UNHCR Greece is offered a co-bylined statement or, failing that, an on-record observer quote. We brief the National Commission for Human Rights and the Hellenic Data Protection Authority pre-launch. We treat HumanRights360, Refugee Support Aegean and the Greek Council for Refugees as critical-friend stakeholders, not adversaries, with quarterly briefings on audit-log findings. We will be asked about the UK Government Digital Service Redbox sunset in December 2025; our answer is that Redbox was a horizontal civil-service chatbot, that DBT Assist is now the relevant UK precedent for departmental specialisation, and that COI drafting is a vertical decision-support tool with a wholly different surface than a horizontal chatbot — the lesson we have taken from Redbox is that vertical, source-bounded, audit-logged deployments are what survive. The narrative we own: this is the first asylum-officer AI deployment in Europe that opened its audit log to UNHCR observation, the first to publish its FRIA pre-launch, the first to bind itself contractually to the Commission February 2026 preparatory-task framing, and the first to bind itself contractually to decision-support framing. If a hallucinated citation ever surfaces, our remediation note is published within seventy-two hours under the same byline that announced the pilot.
