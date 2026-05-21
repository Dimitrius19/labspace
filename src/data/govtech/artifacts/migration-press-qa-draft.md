# Business Plan

## Company thesis
A focused agentic-AI company shipping a Greek-language press-Q&A and parliamentary-question drafting copilot for the Press Office (Γραφείο Τύπου) of the Ministry of Migration & Asylum (ΥΜΑ). The product is internal-only: it ingests an incoming journalist query or a κοινοβουλευτική ερώτηση, retrieves the latest official figures from a whitelisted source registry (Alkyoni, Citizen Protection, Coast Guard, Eurostat, EUAA, Διαύγεια), pulls every prior public ministry statement on the topic, and drafts a Greek-language response in ministerial register with a one-line summary, a three-bullet talking-point block and a long-form draft suitable for a written parliamentary answer. The press officer reviews, edits and dispatches; the agent never speaks publicly. The wedge is the daily time sink (60-90 minutes per query at dozens of queries per week, hours-long lead times on politically explosive topics). The moat is migration-specific source integrations plus Greek ministerial register. The defensibility is the consistency check against the ministry's own prior public statements — the feature no horizontal civil-service chatbot ships. Legal cover is straightforward: internal drafting with a human dispatcher is outside EU AI Act Annex III scope, the 2 December 2027 Annex III deferral is irrelevant to this surface, and Greek Law 5299/2026 obligations are met through standard GDPR-aligned processing of internal ministry data.

## Market & buyer
Primary buyer: the Press Office (Γραφείο Τύπου) of ΥΜΑ, with Parliamentary-Affairs as co-user and the minister's chief-of-staff as sign-off. Single-decision-maker procurement — the Press Office head champions an apevtheias anathesi at the €30-60k tier under the innovation-procurement framework, chief-of-staff providing cover. The buyer is reachable: the press office is small (~6-10 staff), has lived under daily flashpoint pressure since the Pylos shipwreck of June 2023 reshaped the migration press cycle, through the Samos floating-barrier debate, Lesbos and Chios hotspot tensions, and a steady drumbeat of κοινοβουλευτικές ερωτήσεις tabled under Άρθρο 130 του Κανονισμού της Βουλής. Adjacent market: press offices at every line ministry living under a flashpoint cycle (Citizen Protection, Climate Crisis, Health, Maritime Affairs). The migration vertical underwrites the seed and defends us if Digital Governance ships horizontal first.

## Product (press-Q&A drafting agent loop)
The agent ingests the press query or parliamentary question and classifies the topic against a controlled taxonomy (arrivals, asylum decisions, returns, integration, EU-cooperation, detention, specific incident at a named site). It pulls the latest official figures from a whitelisted source registry: Alkyoni public dashboard, Citizen Protection arrivals data, Coast Guard published arrivals notes (non-operational portions only), Eurostat migration tables, EUAA dashboards, and Διαύγεια-published administrative acts of ΥΜΑ. It retrieves prior public ministry statements from the ministry's statement corpus — speeches, press releases, prior parliamentary answers, minister interviews — and runs a consistency check. It drafts in Greek ministerial register as a one-line summary, a three-bullet talking-point block, and a long-form draft suitable for a written κοινοβουλευτική απάντηση. Diverging sentences are flagged inline with the prior statement surfaced for reconciliation. The press officer reviews, edits, signs off and dispatches. On dispatch, the final approved text archives back into the corpus, tightening tomorrow's check. Every source citation, prior-statement match, model version and officer edit lands in an immutable internal audit log keyed to the query ID.

## Revenue model & pricing
A ministry-tier annual licence covering the press office and the Parliamentary-Affairs office at ΥΜΑ, priced at €40-70k year one and rising to €80-140k at full deployment as users and source integrations harden. Add-on per-ministry licences at €40-80k for adjacent buyers (Citizen Protection, Climate Crisis, Maritime Affairs) once the migration vertical is referenceable. A cross-ministry horizontal expansion via Digital Governance partnership is modelled at €100-200k ACV — upside, not base case. The pilot is a fixed-fee €30-60k for nine months (apevtheias anathesi tier), with an explicit option for the ministry to convert to the licence at pilot end without re-tender.

## Unit economics
Marginal cost per drafted response is dominated by frontier-model inference over a small retrieval window (20-50 source passages, 5-20 prior-statement matches). We model €0.08-0.20 inference and retrieval cost per response against an effective €4-8 price at full licence. Gross margin at full deployment is 80-86%. CAC is low — Press Office head plus chief-of-staff is a two-meeting close once founders are credible — but the cycle is paced by the political calendar. Greek statement-corpus assembly is the one-time cost that compounds into the moat.

## Capital plan & milestones
Seed of €1.0-1.4M sized to a signed national licence at ΥΜΑ and a first horizontal-expansion conversation with Digital Governance. Months 0-2: advisor onboarded, source-registry mapped, statement-corpus ingestion scoped. Months 2-4: demo on synthetic Pylos/Samos/Lesbos-class queries to the Press Office head, apevtheias anathesi at €30-60k signed. Months 4-9: pilot delivery, monthly metrics review. Months 9-12: pilot converts to €40-70k annual licence. Months 12-18: expansion to the chief-of-staff communications cell, first adjacent-ministry conversation. Months 18-24: signed second-ministry contract or horizontal Digital Governance partnership.

## Team & hires
A former ΥΜΑ press-office staffer or parliamentary-affairs official as advisor or co-founder is essential — the credibility shield that opens the Press Office head's calendar and knows the unwritten conventions of ministerial register and parliamentary-answer drafting. Around that: a Greek-Athens technical founder with prior agentic-AI build experience; an ML engineer with production RAG experience owning the source-registry and statement-corpus pipeline; a Greek-language NLP engineer for register tuning; a media/political-comms generalist for adjacent-ministry expansion from month 12. Headcount at seed: 4-5.

## Risks
The first-order risk is incumbent-overlap with a horizontal Digital Governance product. The UK precedent cuts both ways: GDS Redbox sunset in 2025 and DBT Assist's vertical-specialisation thesis. If Greek Digital Governance launches a Greek-equivalent of Albert or Assist in 2026-2027, our defence is that we have already shipped migration-specific source integrations (Alkyoni, EUAA, Coast Guard, Διαύγεια) and a statement-corpus consistency check a horizontal chatbot will not replicate for two product cycles. Speed-to-deploy is the mitigation; a nine-month pilot is the speed we need. HMRC's internal copilot rollout to 28,000 staff in April 2026 is now the canonical government press-and-correspondence comparator: it confirms the buyer pattern at scale and gives every Greek chief-of-staff a single sentence of cover.

The second-order risk is the disclosure question. The Secretary General's stated objection — "I do not want the headline that the ministry is using AI to write parliamentary answers" — is also the strongest pitch we have. Internal-only tool, minister remains the speaker of every public word, press officer remains drafter of record, no external footprint, no studio marketing of a named deployment without written consent. The third risk is political-third-rail content: drafts on Pylos, the Samos floating barrier, Lesbos and Chios hotspot conditions — topics where a sloppy figure or prior-statement inconsistency becomes its own news story. The consistency check is the structural mitigation; we never auto-publish; the human officer is the last edit. The fourth risk is HDPA caution after the Smart Policing ruling: operational details from Coast Guard and Citizen Protection sources are excluded from retrieval by design, and the source registry is whitelisted to published, non-operational portions only.

# Pitch Deck

## Slide 1 — Press-Q&A and Parliamentary-Question Draft Agent for ΥΜΑ
- Greek-language drafting agent for the Press Office (Γραφείο Τύπου) of the Ministry of Migration & Asylum
- Same-day responses to journalist queries and parliamentary questions on migration
- Grounded only in official ministry data, prior public statements and published EU/UNHCR figures
- Internal-only, no external footprint
- T-Life Capital, Athens

## Slide 2 — The problem
- ΥΜΑ press office and Parliamentary-Affairs office field daily queries on the most politically explosive file in the cabinet
- Each response reconciles Alkyoni stats, Citizen Protection arrivals, Coast Guard data, Eurostat, EUAA and prior ministry statements — by hand
- Flashpoints (Pylos June 2023, Samos floating-barrier debate, Lesbos/Chios hotspot tensions) compress hours-long lead times further
- Inconsistency with a prior ministry statement becomes its own news story
- 60-90 minutes saved per query, dozens of queries per week

## Slide 3 — Why now
- HMRC internal copilot rolled to 28,000 staff in April 2026 — the canonical government press-and-correspondence comparator
- UK GDS Redbox sunset 2025; DBT Assist successor proves vertical specialisation beats horizontal civil-service chatbots
- France DINUM Albert and Singapore GovTech Pair confirm the sovereign-cloud ministerial-drafting template
- Greek Law 5299/2026 sets the AI/data baseline; press-office surface is unambiguously inside it
- EU AI Act Annex III is irrelevant — internal drafting with a human dispatcher is outside scope; the 2 December 2027 deferral is a non-issue for this product
- No Greek-ministry press-office drafting agent is operational today

## Slide 4 — Solution: internal-only, single-decision-maker buyer
- One press query or κοινοβουλευτική ερώτηση in; one three-layer draft out (one-line summary, three-bullet talking points, long-form parliamentary answer)
- Whitelisted source registry: Alkyoni, Citizen Protection arrivals, Coast Guard published data, Eurostat, EUAA, Διαύγεια
- Prior-statement consistency check: every diverging sentence flagged with the prior statement surfaced inline
- The press officer reviews, edits, signs off and dispatches — the agent never speaks publicly
- Internal-only, no external footprint, ministry retains full disclosure discretion

## Slide 5 — Demo
- Live synthetic journalist query on Lesbos hotspot conditions
- Agent pulls 18 source passages (EUAA dashboard, Eurostat table, a Διαύγεια act, three Coast Guard published notes, eight prior ministry statements from the last 18 months)
- Drafts in Greek ministerial register: one-line summary, three-bullet talking points, 280-word long-form κοινοβουλευτική απάντηση
- Flags two sentences diverging from prior ministry statements; surfaces the prior statement inline; suggests reconciliation language
- Press officer signs off; final text archives into the corpus and tightens tomorrow's consistency check

## Slide 6 — Market
- Primary: Press Office (~6-10 staff) and Parliamentary-Affairs office of ΥΜΑ; chief-of-staff sign-off
- Adjacent in-ministry: communications staff supporting the minister's public schedule
- Horizontal expansion: press offices at Citizen Protection, Climate Crisis, Health, Maritime Affairs
- Migration vertical underwrites the seed; horizontal expansion is upside

## Slide 7 — Precedent stack
- HMRC internal copilot, 28,000 staff, April 2026 — canonical comparator, single-sentence cover for the chief-of-staff
- UK GDS i.AI: Redbox sunset 2025, DBT Assist successor — vertical-specialisation lesson built into positioning
- France DINUM Albert at France Travail and France Services — sovereign-cloud ministerial-drafting template
- Singapore GovTech Pair — civil-service drafting copilot with documented press-office-style use cases
- We are the first Greek-ministry deployment; the conditional is fundable on this precedent stack

## Slide 8 — Business model
- Ministry-tier annual licence: €40-70k year one, €80-140k at full deployment within ΥΜΑ
- Pilot fixed-fee €30-60k for nine months, apevtheias anathesi
- Adjacent-ministry licences at €40-80k per ministry once migration vertical is referenceable
- Horizontal Digital Governance partnership at €100-200k ACV as upside

## Slide 9 — Compliance and disclosure posture
- Internal drafting with a human dispatcher is outside EU AI Act Annex III scope; 2 December 2027 deferral irrelevant
- Greek Law 5299/2026 obligations met through standard GDPR-aligned processing of internal ministry data
- HDPA Smart Policing ruling treated as binding caution: operational Coast Guard and Citizen Protection details excluded from retrieval by design; only published, non-operational portions whitelisted
- Source whitelist reviewed quarterly with press office and ministry legal office
- Disclosure of agent use at ministry discretion; no studio marketing of named deployment without written ministry consent
- Immutable internal audit log: every source citation, prior-statement match, model version and officer edit keyed to query ID

## Slide 10 — Competition & moat
- No Greek-ministry press-office drafting agent operational today
- Greek SIs (Intracom, Byte, Performance) do not play in press-office tooling
- Multinational tools cannot ship Greek ministerial or parliamentary-question register without Greek tuning
- Moat compounds: Alkyoni + EUAA + Coast Guard + Διαύγεια integrations, ministry statement corpus, Greek register, consistency check
- If Digital Governance ships horizontal, vertical depth is two product cycles away

## Slide 11 — Team
- Greek-Athens technical founder, prior agentic-AI build, RAG production experience
- Former ΥΜΑ press-office or parliamentary-affairs advisor or co-founder — signed before the first Press Office head meeting
- ML engineer (RAG); Greek-language NLP engineer (ministerial-register tuning)
- Media/political-comms generalist for adjacent-ministry expansion from month 12

## Slide 12 — Ask
- €1.0-1.4M seed to a signed national licence at ΥΜΑ and a first horizontal-expansion conversation in 24 months
- Use of funds: advisor retainer, ML/RAG engineering, source-registry and statement-corpus ingestion, pilot delivery
- Conversations open with the Press Office head with chief-of-staff sign-off; the demo opens the meeting
- Co-investors with EU govtech credibility welcomed

# Go-to-Market Plan

## Champion identification
The signing champion is the head of the Press Office (Γραφείο Τύπου) of ΥΜΑ. Political cover is the minister's chief-of-staff, who blesses the apevtheias anathesi at the €30-60k tier. The operational co-user is the head of Parliamentary-Affairs, whose κοινοβουλευτική ερώτηση drafting is the second-highest-volume use of the tool. The former-press-officer advisor owns each relationship; the technical founder accompanies but does not lead. The advisor must be signed before the first meeting — the Greek press-office community is small enough that the wrong introduction closes the door for a year. The minister is not pitched; the chief-of-staff briefs them at their own pace.

## First-meeting choreography
A thirty-minute meeting with the Press Office head built around the buyer objection: "I do not want the headline that the ministry is using AI to write parliamentary answers. How do we keep this invisible?" Three artefacts. First, a synthetic live demo on a Lesbos-hotspot press query, end-to-end in under ninety seconds, with the consistency check flagging two divergences against ministry statements from the prior eighteen months. Second, a one-page audit-log sample showing every source citation and prior-statement match. Third, a one-page disclosure-posture note: internal-only, no external footprint, ministry retains full discretion, no studio marketing without written consent, HMRC April 2026 as the single-sentence cover line for the chief-of-staff. We do not promise time savings as the headline; we promise consistency-against-prior-statements and the invisible-tool framing. The ask: a follow-on with Parliamentary-Affairs and a separate chief-of-staff briefing within three weeks.

## Pilot offer
Nine-month pilot at the Press Office and Parliamentary-Affairs office. Fixed fee €30-60k via apevtheias anathesi. Scope: 6-10 press-office seats, 2-4 parliamentary-affairs seats, statement-corpus ingestion plus weekly deltas, integrations across Alkyoni, Citizen Protection arrivals, Coast Guard published notes, Eurostat, EUAA and Διαύγεια. Weekly source-registry review with the advisor; monthly metrics with the chief-of-staff. Success metrics agreed up front: median drafting time, prior-statement consistency rate, audit-log completeness, officer satisfaction, and "saved inconsistencies" — sentences the check caught before dispatch. Failure conditions in writing: any dispatched draft carrying an inconsistency the check failed to flag triggers an immediate pause and root-cause review.

## Expansion path
On conversion, expand within ΥΜΑ to the chief-of-staff communications cell at a renewed €80-140k contract. Adjacent-ministry sequence in months 12-18: Citizen Protection (overlapping press cycle), then Climate Crisis (flashpoint cycle post-Mati and post-Thessaly), then Maritime Affairs (Coast Guard adjacency). A horizontal partnership with Digital Governance is initiated only after at least one adjacent-ministry licence is signed, so we negotiate as the de facto vertical incumbent. Justice, Interior and Foreign Affairs press offices are out-of-scope for the seed window.

## Procurement vehicle
Pilot signs as apevtheias anathesi at the €30-60k tier. Pilot-to-licence conversion to €40-70k is structured into the contract as an option, exercisable without re-tender. Cross-ministry expansion at €40-80k stays inside apevtheias anathesi limits for most line ministries. Horizontal Digital Governance scope above €60k requires a competitive process; we structure the migration-vertical deliverables (Alkyoni integration, Coast Guard whitelist, statement-corpus schema, consistency-check audit log, HDPA-aligned source whitelist) so the tender specification encodes our moat without naming us. The advisor reviews every procurement draft with the ministry legal office.

## PR/comms strategy (invisible by design)
We do not market around a named ministry deployment. Studio external comms describe product capability — Greek-language ministerial drafting with prior-statement consistency check, migration-vertical depth, internal audit surface — and do not name ΥΜΑ without written consent. The disclosure question is the ministry's, not ours. We brief the HDPA pre-launch on the source-whitelist design and the exclusion of operational Coast Guard and Citizen Protection details, in line with the Smart Policing caution. We treat opposition press-office staff as future buyers-of-record, not adversaries; the product drafts ministerial press responses grounded in official data, not political talking points, and the source whitelist enforces that distinction structurally. If the ministry discloses agent use publicly, we provide a one-page plain-language description of the agent loop, the source whitelist and the consistency check, with HMRC and DBT Assist referenced for context. If a journalist or an opposition κοινοβουλευτική ερώτηση ever asks whether ΥΜΑ uses AI to draft responses, the recommended ministry answer is the honest one: an internal drafting copilot grounded in official data and checked against prior public statements; the press officer is the drafter of record; the minister remains the speaker of every public word. That answer is robust under any follow-up. The wedge becomes the bridge — once the press office trusts the tool, the same studio is the natural partner for the higher-stakes sibling products in the ministry portfolio.
