# Business Plan

## Company thesis
A Greek-language residence-permit backlog triage agent for caseworkers at the Directorate-General for Migration Policy and the decentralised permit offices. The product sits on top of the case-management substrate and does the first thirty to sixty minutes of work that consumes every file: classify the permit category, run a Law 5038/2023 completeness checklist, detect expired documents and missing translations, pre-fetch inter-agency dependencies via the ΥΜΑ and ΑΦΜ-keyed integrations, fast-lane renewals, route incomplete files to a Greek deficiency-letter draft. The agent never issues the final administrative act; the caseworker reviews, edits, signs. Wedge: the chronic political pain of the residence-permit backlog at the Decentralised Administrations. Moat: the Greek immigration-law rule engine and the Greek deficiency-letter register. Defensibility: a contractually-bound fairness posture — nationality, religion and ethnicity hard-banned as routing inputs, rule set published openly in Greek, independent fairness audits at month 3 and month 12, Hellenic Data Protection Authority review on file. Legal cover: the 2 December 2027 deferral of EU AI Act Annex III migration provisions gives nineteen months to deploy as decision-support, build the conformity-assessment file, and bank throughput evidence the buyer needs to defend the procurement in Parliament.

## Market & buyer
Primary buyer: the General Secretariat for Migration Policy at the Ministry of Migration & Asylum. Signing authority: the Secretary General for Migration Policy. Operational sponsor: the Director-General for Migration Policy. Platform partner: the Digital Governance ministry, the only credible inter-agency-API broker for AADE, EFKA, and gov.gr / Wallet integrations. Users: residence-permit caseworkers (στελέχη Τμημάτων Αδειών Διαμονής) at the central directorate in Athens and the decentralised permit offices across Attica, Central Macedonia, Thessaly, Crete, the Peloponnese and the Aegean. Active permit holders run in the high hundreds of thousands; live pipeline in the tens of thousands. EU adjacency: Italy and Spain — but the Greek deployment is the only one we underwrite in the seed. Four streams carry the volume: employment (including digital nomad), family reunification, long-term resident renewals, and the Golden Visa file (still active post-2024 threshold reforms, disproportionate in revenue and political visibility). Each has its own Law 5038/2023 checklist; each is in scope from day one.

## Product (triage agent loop)
The agent pulls the next file and classifies it against the Law 5038/2023 taxonomy (employment, family reunification, student, long-term resident, humanitarian, EU Blue Card, digital nomad, Golden Visa). It runs a category-specific completeness checklist: required documents, valid translations, integration evidence where applicable (Greek-language certificate Α2 for long-term resident), proof of means, ΑΦΜ and ΥΜΑ records, criminal-record certificate. It detects expired documents and stale dependencies, and pre-fetches inter-agency state where APIs exist — AADE tax-clearance keyed to ΑΦΜ, EFKA insurance status, criminal-record certificate from Justice, gov.gr / Wallet credentials. It fast-lanes renewals when triggers are clear, routes first-issues to substantive review, and sends incomplete files to a Greek deficiency-letter draft that lists what is missing, cites the Law 5038/2023 basis, and sets a regulated deadline. Output lands in the caseworker's queue as a tracked-changes document. Every classification, triggered rule, officer override and letter version is logged into an immutable audit trail keyed to the application ID, exportable as a court-admissible PDF for the Hellenic Data Protection Authority, the National Commission for Human Rights, or judicial appeal.

## Revenue model & pricing
Two layers. Per-seat subscription at €1,500-2,000 per active caseworker per year on the Greek pilot, volume discounts at full national rollout (~300-450 seats). Throughput-based annual escalator pegged to triaged files above a contracted baseline — aligns vendor and buyer to the public backlog metric the press will track. Pilot fixed fee €80-180k for twelve months at two permit offices under apevtheias anathesi. Full decentralised rollout modelled at €400-800k annual contract value.

## Unit economics
Marginal cost per triaged file is dominated by OCR (the watch-item on aged or low-quality scans) plus light frontier-model inference over the structured checklist and the deficiency-letter draft. We model €0.25-0.55 per file at scale against a €3-6 per-file price-equivalent at full subscription. Gross margin at full deployment targeted 72-80%. CAC is high (9-12 month sales cycle through the Secretary General's office plus a parallel Digital Governance track) but amortises across the entire decentralised network once the first contract signs and the API substrate is open.

## Capital plan & milestones
Seed €1.4-2.0M sized to reach a signed national-rollout contract. Month 0-3: co-founder onboarded, rule-engine spec drafted for three permit categories, Digital Governance ministry briefed on the inter-agency-API broker ask. Month 3-6: closed pilot at one central office under MoU. Month 6-9: audit-trail tooling shipped, Hellenic Data Protection Authority review concluded, month 3 audit published. Month 9-12: pilot expanded to second office, pilot conversion to €80-180k contract, month 12 audit published. Month 12-18: expansion to four decentralised offices, conformity-assessment file complete ahead of 2 December 2027. Month 18-24: signed national-rollout contract.

## Team & hires
An immigration-law co-founder is the structural credibility hire and must be in place before the first ministry conversation. Candidates: a former Migration Policy Directorate official, a 4251/2014-and-5038/2023-fluent practitioner with a litigation track record on permit deficiencies, or a Greek administrative-law academic with standing on residence-permit policy. This person owns the rule-engine spec, the fairness-audit ToRs, the Hellenic Data Protection Authority relationship, and the public defence of the operational-versus-adjudicative boundary. Around that: a Greek-Athens technical founder with case-management background, an engineering lead with gov.gr / KED / Wallet API experience, a Greek-document OCR engineer, a Greek-language NLP engineer, and a civil-society advisory seat for Generation 2.0, Greek Council for Refugees, and HumanRights360. Headcount at seed: 6-8.

## Risks
Three risks. First, UK Home Office Streaming Tool history is the non-negotiable narrative risk: JCWI retired the original tool on fairness grounds, and any Greek "triage" the press frames as "streaming by nationality" loses political room before it ships. Mitigation is structural: nationality, religion, ethnicity hard-banned as routing inputs in both rule engine and inference layer; rule set published openly in Greek at contract signature; two fairness audits at month 3 and month 12 in procurement scope; Hellenic Data Protection Authority briefed pre-launch; the UWV-DPA action as architectural counter-example — decisions stay deterministic, the LLM only drafts. Second, incumbent-SI access: Intracom and Byte hold the case-management substrate; without their API cooperation the agent cannot read state. Mitigation: the Digital Governance track runs in parallel from month one as the only authority that can broker inter-agency-API exposure horizontally. Third, Greek-document OCR floor on aged scans of foreign-issued documents; we ship a per-document confidence score and route low-confidence documents to mandatory human re-scan before any rule fires. EU AI Act exposure is manageable, not existential — operational triage with hard-banned routing inputs is the safest fundamental-rights posture in the May 2026 sweep; the agent never issues the final administrative act; the 2 December 2027 deferral gives runway; the UK HMRC caseworker copilot (28,000 staff, April 2026) is the live precedent that caseworker tooling at this scale is procurable in a democratic administration.

# Pitch Deck

## Slide 1 — Residence-Permit Backlog Triage Agent
- Greek-language triage agent for residence-permit caseworkers
- Law 5038/2023 rule engine; deficiency-letter drafting in Greek administrative register
- Inter-agency dependencies (AADE / ΑΦΜ, EFKA, gov.gr, ΥΜΑ) pre-fetched where APIs exist
- Operational triage only — never the final administrative act
- T-Life Capital, Athens

## Slide 2 — The problem
- Residence-permit backlog at the Decentralised Administrations is a chronic political pain across governments
- Caseworkers spend the first 30-60 minutes of every file on completeness and classification
- Renewals sit in the same queue as first-issues; Golden Visa, digital nomad and family-reunification each have their own checklists
- Greek-document OCR, Α2-certificate verification, expired-document and missing-translation detection all manual today
- Inconsistency across decentralised offices is itself a political risk

## Slide 3 — Why now
- Greek Law 5038/2023 reformed the regime — single current rules-engine target
- Greek Law 5299/2026 sets the AI / data baseline; compliant by construction
- EU AI Act Annex III deferred to 2 December 2027 — nineteen months of decision-support runway
- UK HMRC caseworker copilot (28,000 staff, April 2026) — live comparator at scale
- UWV-DPA — architectural counter-example: decisions deterministic, LLM only for drafting
- No Greek-language residence-permit triage deployment exists today

## Slide 4 — Solution: operational triage, never adjudication
- Agent classifies, checks completeness, pre-fetches inter-agency dependencies, drafts the deficiency letter
- Caseworker reviews tracked changes, edits, signs — final administrative act stays with a named human officer
- Hard-banned routing inputs: nationality, religion, ethnicity — enforced in rule engine and inference layer
- Deterministic rule engine on Law 5038/2023; LLM scoped to Greek deficiency-letter drafting only (UWV lesson)
- Deploys now as decision-support; conformity file ready ahead of 2 December 2027

## Slide 5 — Demo
- Synthetic family-reunification file opens in the caseworker queue
- Agent classifies, runs the checklist, detects two missing translations and an expired ΑΦΜ tax-clearance
- Pre-fetches AADE tax-clearance via the Digital Governance broker; requests translations via the ΥΜΑ flow
- Drafts a Greek deficiency letter citing the relevant Law 5038/2023 articles with a regulated deadline
- Caseworker accepts routing, edits one sentence, signs; every action lands in the immutable audit log

## Slide 6 — Market
- Primary: 300-450 caseworker seats across central directorate and decentralised offices
- Adjacent: Golden Visa unit, digital nomad visa, long-term-resident Α2-certificate verification
- EU adjacency: Italy and Spain — Greek pilot underwrites the seed, EU expansion is upside

## Slide 7 — Precedent stack
- UK HMRC caseworker copilot, April 2026, 28,000 staff — live comparator at scale
- UK Home Office Streaming Tool retirement after JCWI review — structural design input
- IND Netherlands case-triage post-toeslagenaffaire — operational productivity with strong fairness scrutiny
- Migrationsverket process automation 2020-2025 — positive EU reference for non-adjudicative gains
- UWV-DPA action — counter-example: decisions deterministic, LLM scoped to drafting only

## Slide 8 — Business model
- Per-seat subscription €1.5-2.0k per active caseworker per year
- Throughput escalator pegged to triaged-file volume above contracted baseline
- Pilot €80-180k for twelve months at two permit offices (apevtheias anathesi)
- Decentralised rollout modelled at €400-800k annual contract value

## Slide 9 — Fairness posture and EU AI Act compliance
- Operational triage with hard-banned routing inputs (nationality, religion, ethnicity) — safest fundamental-rights posture in May 2026 sweep
- Streaming Tool history baked into contract: published rule set, two audits at month 3 and month 12, Hellenic Data Protection Authority review on file
- Annex III deferred to 2 December 2027 — deploys as decision-support; conformity file at national-rollout signature
- Greek Law 5299/2026 baseline met by construction; UWV architectural lesson applied throughout
- Audit-trail PDF for Hellenic Data Protection Authority, National Commission for Human Rights, and judicial appeal

## Slide 10 — Competition & moat
- No Greek-language residence-permit triage agent exists today
- Multinationals cannot ship Law 5038/2023 rule engine + Greek deficiency-letter register + ΥΜΑ / AADE / EFKA integrations
- Greek SIs (Intracom, Byte) own case-management but have not shipped agentic completeness-checking with letter drafting
- Moat compounds: rule engine + Greek register + Digital Governance broker + fairness-audit cadence + audit trail

## Slide 11 — Team
- Greek-Athens technical founder with workflow-automation and case-management background
- Immigration-law co-founder — signed before the first ministry conversation
- Engineering lead with gov.gr / KED / Wallet API experience; Greek-document OCR engineer; Greek-language NLP engineer
- Civil-society advisory seat: Generation 2.0, Greek Council for Refugees, HumanRights360

## Slide 12 — Ask
- €1.4-2.0M seed to a signed national-rollout contract in 24 months
- Use of funds: co-founder, rule-engine, OCR, Greek-NLP, fairness-audit infrastructure, pilot delivery
- Conversations open with the Secretary General for Migration Policy and the Digital Governance ministry in parallel

# Go-to-Market Plan

## Champion identification
Signing champion: the Secretary General for Migration Policy. Operational sponsor: the Director-General for Migration Policy. Platform partner — without which the agent has no inter-agency state to read — is the Digital Governance ministry, specifically ΓΓΠΣΨΔ as inter-agency-API broker. Credibility-gating stakeholders briefed before pilot signature: Hellenic Data Protection Authority and National Commission for Human Rights. Civil-society stakeholders (Generation 2.0, Greek Council for Refugees, HumanRights360) briefed in the same window as critical-friend observers. The co-founder owns these relationships and must be signed before the first ministry conversation — the Streaming Tool history makes any pitch without immigration-law credibility a single-meeting kill.

## First-meeting choreography
Forty-five minutes with the Secretary General, built around the qualification's buyer objection: "How do I prove to Parliament that this is not a backdoor decision-making system?" Five artefacts. One: a synthetic live demo on a family-reunification file — classification, completeness check, AADE pre-fetch keyed to ΑΦΜ, tracked-changes deficiency letter in Greek. Two: the Law 5038/2023 rule-engine spec for three permit categories, openly readable in Greek. Three: a one-page fairness contract — hard-banned routing inputs, published rule set, two audits at month 3 and month 12, Hellenic Data Protection Authority review — ready to bind into procurement. Four: a one-page positioning memo on the UK Streaming Tool retirement, the IND post-toeslagenaffaire architecture, the UWV-DPA action, and how each is encoded in our design. Five: the UK HMRC caseworker copilot brief as evidence at scale today. We lead with auditability, the fairness contract, the operational-only boundary, and the HMRC reference. The ask: a follow-on with the Director-General and a parallel introduction to the Digital Governance General Secretary within four weeks.

## Pilot offer
Twelve-month pilot at two permit offices — one central (Athens or Thessaloniki) and one decentralised. Fixed fee €80-180k via apevtheias anathesi. Scope: 20-30 caseworker seats, rule engine on three categories (employment, family reunification, long-term resident renewals) with Golden Visa and digital nomad added in the second half, AADE and EFKA pre-fetch via the Digital Governance broker, ΥΜΑ flow for missing-document follow-up, audit-trail PDF export, two fairness audits at month 3 and month 12. Success metrics agreed up front: median triage time per file, deficiency-letter accuracy on a sampled cohort reviewed by the co-founder and civil-society advisors, audit-log completeness, caseworker-satisfaction survey. Failure conditions in writing: a deficiency letter citing a Law 5038/2023 article incorrectly triggers a pause and root-cause review; a fairness audit finding of nationality-correlated routing triggers a pause, public remediation note, and re-audit before resumption.

## Expansion path
On pilot conversion, expand to four decentralised offices in months 12-18 (Attica, Central Macedonia, Crete, the Aegean) at €220-400k. Full national rollout in months 18-24 at €400-800k. The 2 December 2027 Annex III enforcement date is the design horizon for the conformity-assessment file, delivered on national-rollout signature. Adjacent scope earned by trust: Golden Visa as a dedicated stream, digital nomad visa, long-term-resident Α2-certificate verification. We never extend into adjudicative scope; that is a kill-zone.

## Procurement vehicle
Pilot signs as apevtheias anathesi at the €80-180k tier. The Digital Governance ministry signs a parallel MoU for inter-agency-API broker exposure — a platform-enablement act, not a procurement, and the second precondition for the pilot. National rollout requires open tender; we structure the pilot deliverables (rule-engine spec, audit-log schema, fairness-audit ToRs, published rule set, Hellenic Data Protection Authority review record, UWV-architecture compliance memo) so the tender encodes our moat — Greek register, Law 5038/2023 fluency, deterministic-rule-engine architecture, hard-banned routing inputs, fairness-audit cadence — without naming us. The co-founder reviews the tender with the ministry and Digital Governance legal offices to ensure compliance with Greek Law 5299/2026 and the EU AI Act conformity track ahead of December 2027.

## PR/comms strategy (proactive on Streaming Tool history)
We do not let the press define this product. Before the first triage decision lands on a real file, we publish the Law 5038/2023 rule set in Greek, a plain-language description of the agent loop, the hard-banned routing inputs, the fairness-audit ToRs, and a one-page note on the operational-versus-adjudicative boundary. The UK Streaming Tool history is addressed head-on in the launch note — what was retired and why, and how this design is structurally different: deterministic rule engine, no proxy inputs for nationality, published rules, two independent audits, never the final administrative act. The Hellenic Data Protection Authority and the National Commission for Human Rights are briefed pre-launch; Generation 2.0, the Greek Council for Refugees and HumanRights360 are critical-friend stakeholders with quarterly briefings on audit-log findings. The narrative we own: the first Greek residence-permit triage deployment to hard-ban nationality, religion and ethnicity as routing inputs in writing; the first to publish its rule set openly in Greek; the first to bind itself contractually to two independent fairness audits and the operational-only boundary; the first to deliver an EU AI Act conformity-assessment file ahead of December 2027. HMRC is our affirmative anchor; UWV-DPA is our architectural pledge — the LLM never decides, the rule engine never speculates, the caseworker always signs. If a fairness audit ever surfaces a finding, our remediation note is published within seventy-two hours under the same byline that announced the pilot.
