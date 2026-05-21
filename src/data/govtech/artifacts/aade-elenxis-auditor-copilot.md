# Business Plan

## Company thesis

T-Life Capital is co-founding **Ελεγκτής-Copilot**, an agentic copilot that sits as an authorised overlay on top of ΑΑΔΕ's ELENXIS case-management system. The product takes the bottom 40-60% of an auditor's working week — drafting κλήσεις σε ακρόαση, σημειώματα διαπιστώσεων, εκθέσεις ελέγχου and cross-pulling data from myDATA, TAXISnet, ΕΡΓΑΝΗ and the land registry — and converts it into a one-click review-and-sign workflow. The thesis is narrow and defensible: the politically defensible win for ΑΑΔΕ in 2026-2028 is not a bigger headcount, it is "auditors do more, not different". A Greek-language ΚΦΔ-fluent agent that drafts and cites statutes inside the existing ELENXIS case file is the cheapest, fastest way to move the Governor's published audit-recovery number — and the canonical comparable is now public: **HMRC signed a £175M five-year sovereign-AI tax-fraud contract with Quantexa in March 2026**, settling the question of whether a Western tax authority will commit at scale to in-house AI on enforcement data. Greece's answer should be a Greek-language, Greek-statute-fluent equivalent built around the auditor, not a foreign black box bolted to the side of ELENXIS.

## Market & buyer

The decision-maker is the **AADE Governor** (Διοικητής), with the **ΓΓ Διοίκησης AADE** as the operational co-sponsor and the **Director of ΚΕΦΟΜΕΠ** as the pilot host. The minister's chief of staff is the political cover, but the Governor owns the parliamentary line: euros assessed and euros recovered, published. The buyer cares about exactly two numbers — closed cases per auditor per quarter and euros assessed per case — and is correctly sceptical of agentic-AI rhetoric. The total addressable surface inside ΑΑΔΕ is a few thousand auditors (ΚΕΦΟΜΕΠ, ΚΕΜΕΕΠ, ΔΟΥ audit departments, ΥΕΔΔΕ), with the deep pilot pool at ΚΕΦΟΜΕΠ/ΚΕΜΕΕΠ being only a few hundred — small enough to instrument tightly. Adjacency expansion just landed in our lap: **ΟΠΕΚΕΠΕ was dissolved and merged into ΑΑΔΕ on 1 January 2026**, adding 624 staff and the entire CAP-disbursement substrate to the Governor's perimeter. The same agentic-drafting infrastructure can be re-pointed at OPEKEPE caseworkers within 24 months without leaving the AADE org chart.

## Product — the agentic loop

For each open ELENXIS case on the auditor's Tuesday-morning queue, the agent runs the following loop, end to end:

1. **Read** the open case file in ELENXIS (taxpayer ΑΦΜ, audit scope, prior letters, deadline).
2. **Pull** the taxpayer's myDATA invoice ledger, TAXISnet declarations, ΕΡΓΑΝΗ payroll, land-registry holdings and prior ELENXIS findings via authorised APIs.
3. **Run anomaly templates** (input-VAT > output-VAT for >3 quarters, supplier-buyer ratio drift, gross-margin outside sector band) and surface the top 5 line items to review.
4. **Draft the next required document** in the Greek civil-service register (κλήση, σημείωμα διαπιστώσεων, ερωτηματολόγιο) citing exact ledger lines and statute (ν. 4174/2013, ν. 4987/2022 ΚΦΔ).
5. **Suggest the next three investigative steps** each with an effort-versus-recovery estimate, so the auditor picks one with a click.
6. **Log** every action, citation and prompt to an audit trail attached to the ELENXIS case for AI-Act high-risk traceability.

Hard rule: copilot only. The auditor signs every output. No automated risk-scoring of natural persons without inspector sign-off. The architectural template is the **Belastingdienst post-toeslagenaffaire stack** — ten AI systems in production at the Dutch tax authority, each with strict human-in-the-loop boundaries — and we cite that template explicitly in the DPIA.

## Revenue model & pricing

Per-seat annual SaaS license, billed via the public-sector vehicle (innovation-pilot direct award initially, framework after). **Indicative: €4,800/auditor/year** at production scale, with a 90-day pilot priced as a fixed-fee €80-150k engagement covering 10 auditors at ΚΕΦΟΜΕΠ. A second revenue line is the AI-Act traceability/audit-trail module sold to the ΑΑΔΕ Διεύθυνση Συμμόρφωσης, which is required infrastructure regardless of the copilot adoption rate. The **EU AI Act Annex III enforcement deadline was deferred to 2 December 2027** under the Omnibus deal signed 7 May 2026, giving us an extra 16 months of conformity-engineering runway and shifting the AI-Act module from "blocking" to "selling" inside the procurement window.

## Unit economics

Conservative pilot arithmetic:

- ΚΕΦΟΜΕΠ auditor closes ~6 cases/quarter today. Pilot target: +25% to 7.5 cases/quarter at constant quality.
- Median euros assessed per ΚΕΦΟΜΕΠ case is published in the €200-400k band; take the midpoint €300k.
- 1.5 incremental cases × €300k = €450k incremental euros assessed/auditor/quarter; €1.8M/year/auditor.
- License at €4,800/auditor/year → payback in days, not months, even at a 30% recovery rate against the assessed figure.
- 200-auditor expansion across ΚΕΦΟΜΕΠ + ΚΕΜΕΕΠ + selected ΔΟΥ teams → €960k ARR, ~85% gross margin once Greek-LLM retrieval stack and ΚΦΔ register are amortised.

## Capital plan & milestones

Seed €1.5M to reach the ΚΕΦΟΜΕΠ pilot signed and the 90-day measured uplift. Series A €4-6M at pilot conversion to lift to 200 auditors, finish AI-Act conformance documentation, and open the ΚΕΜΕΕΠ and TP-audit adjacencies (note: the Transfer-Pricing Review Agent shares this infrastructure and Spain's AEAT 2026 Tax Control Plan now mandates AI for TP risk analytics, providing live procurement cover for the second product).

Milestones, 18 months:
- Month 3: signed innovation-pilot apevtheias anathesi at ΚΕΦΟΜΕΠ, 10 auditors, pre-registered metrics.
- Month 6: pilot results memo to the Governor.
- Month 9: framework procurement notice or ESPA innovation-pilot extension.
- Month 12: 50 auditors live.
- Month 18: 200 auditors, parliamentary-report mention.

## Team & hires

Founding pair (Greek-citizen lead required for ΑΑΔΕ security clearance):

1. **Domain founder** — ex-ΑΑΔΕ auditor (ideally ex-ΚΕΦΟΜΕΠ supervisor) or ex-Big-4 Greek tax-controversy partner with ΚΦΔ drafting fluency.
2. **Technical founder** — senior ML engineer with retrieval-augmented-generation and legal-LLM background; ELENXIS contractor-status eligible.

First five hires: Greek-LLM evaluation lead, ΑΑΔΕ-cleared backend engineer, DPIA/AI-Act counsel (fractional first, then in-house), a former ΚΦΔ instructor as content lead, and a customer-success lead seconded from ΚΕΦΟΜΕΠ on a one-year deputation.

## Risks

The wounds are known. Netcompany-Intrasoft owns ELENXIS and will object to any vendor "inside" the workflow — mitigated by positioning as an authorised overlay calling ELENXIS APIs, never a replacement module, and routing procurement via innovation pilot not framework tender. AI-Act high-risk classification and GDPR DPIA are mandatory — the Belastingdienst's published architecture is our reference, and the Annex III deferral to December 2027 gives us a real conformity runway. The new incumbency objection from the buyer is "why not Quantexa, since HMRC just signed £175M?" — mitigated by Greek-language ΚΦΔ register, ELENXIS-native overlay, and on-prem deployment inside the AADE data centre. Founder-fit risk on the auditor side is real; the recruit list is short and we should start it now.

# Pitch Deck

## Slide 1 — Cover

- **Ελεγκτής-Copilot**
- Agentic copilot for ΑΑΔΕ auditors, on top of ELENXIS
- T-Life Capital, Athens — May 2026
- Audience: AADE Governor, ΓΓ Διοίκησης AADE, Director ΚΕΦΟΜΕΠ
- Ask: 90-day, 10-auditor pilot at ΚΕΦΟΜΕΠ

## Slide 2 — Problem

- ΑΑΔΕ auditors spend 40-60% of an audit cycle on **drafting** (κλήση, σημείωμα διαπιστώσεων, εκθέσεις ελέγχου)
- Junior auditors close fewer than **6 cases/quarter**
- ELENXIS is form-driven, not assistive — auditors burn hours in Word
- Political directive: more audits closed, more euros recovered, **without 1,000 new auditors**

## Slide 3 — Why now

- **HMRC signed £175M / 5-year sovereign-AI contract with Quantexa in March 2026** — the canonical fresh precedent that a Western tax authority will commit at scale to in-house AI on enforcement data; Greece must answer with a Greek-language, Greek-statute equivalent
- **Spain's AEAT 2026 Tax Control Plan** formalises AI for Transfer Pricing — adjacent precedent that pulls our second product into the same procurement window
- **Italy's VeRA + 2026 Budget Law AI VAT chatbot** at Agenzia Entrate — Southern-EU adjacency
- **EU AI Act Annex III enforcement deferred to 2 December 2027** (Omnibus deal, 7 May 2026) — adds 16 months to conformity work, turns the AI-Act module from blocker to revenue line
- **myDATA full coverage since 2024** — the data lake the agent reads is real and live
- **ΟΠΕΚΕΠΕ merged into ΑΑΔΕ on 1 Jan 2026** — 624 staff and the CAP-disbursement substrate now inside the Governor's perimeter

## Slide 4 — Solution

- Authorised **overlay** on ELENXIS (no replacement of Netcompany-Intrasoft module)
- Reads case file → pulls myDATA / TAXISnet / ΕΡΓΑΝΗ / κτηματολόγιο → flags anomalies → **drafts the next ΚΦΔ document** in Greek with statute citation → suggests next three audit steps
- Every output **signed by the auditor**; full audit trail for AI-Act
- Greek ΚΦΔ register native — not a translated multinational product
- Architectural template: **Belastingdienst** human-in-the-loop stack, ten AI systems in production post-toeslagenaffaire

## Slide 5 — Demo

- Live: open a ΚΕΦΟΜΕΠ case in ELENXIS sandbox
- One click: agent pulls myDATA + prior findings, surfaces 5 anomaly lines
- One click: drafts σημείωμα διαπιστώσεων in Greek, cites ν. 4174/2013 articles, references ledger lines
- Auditor edits two sentences, signs — total elapsed time **~8 minutes vs ~3 hours**

## Slide 6 — Market

- ΑΑΔΕ audit footprint: a few thousand auditors across ΚΕΦΟΜΕΠ, ΚΕΜΕΕΠ, ΥΕΔΔΕ, ΔΟΥ
- Deep pilot pool: ~few hundred at ΚΕΦΟΜΕΠ + ΚΕΜΕΕΠ
- Adjacency expansion 2026: **ΟΠΕΚΕΠΕ → ΑΑΔΕ merger** adds 624 caseworkers on the same human-in-the-loop drafting pattern
- Pricing at **€4,800/auditor/year** → addressable Greek ARR ~€10M
- Adjacency: same stack runs the TP Review Agent for ΚΕΦΟΜΕΠ — already on T-Life's promote list, with Spain AEAT 2026 cover

## Slide 7 — Traction & precedent

- **UK HMRC × Quantexa £175M / 5-yr sovereign-AI tax-fraud contract**, signed March 2026 — canonical comparable for sovereign-scale tax-authority AI
- **UK Caddy caseworker copilot** operational at Citizens Advice with 80% response-approval RCT (SCVO 2025); scaling nationally
- **Netherlands Belastingdienst** runs 10 AI systems post-toeslagenaffaire with strict human-in-the-loop architecture — our architectural template
- **Spain AEAT 2026 Tax Control Plan** formalises AI for Transfer Pricing
- **Italy VeRA + 2026 Budget Law AI VAT chatbot** at Agenzia Entrate — Southern-EU adjacency
- No Greek-language ΚΦΔ-fluent equivalent shipped today

## Slide 8 — Business model

- Per-seat SaaS: **€4,800/auditor/year**
- 90-day fixed-fee pilot: **€80-150k** for 10 auditors at ΚΕΦΟΜΕΠ
- AI-Act traceability module — separate line to ΑΑΔΕ Διεύθυνση Συμμόρφωσης (Annex III enforcement now 2 Dec 2027)
- Vehicle: innovation-pilot apevtheias anathesi → ESPA extension → framework

## Slide 9 — Competition & moat

- Greek SIs (Netcompany-Intrasoft) sell ELENXIS form modules, **not agentic drafting**
- Quantexa is the sovereign-scale comparable, not a Greek-language competitor — its UK deal raises the ceiling for our buyer's ambition
- No Greek vendor has shipped a Greek-language legal-citation drafting agent
- **Moats:** Greek ΚΦΔ register, statute-citation patterns, ELENXIS API hooks, ΑΑΔΕ-cleared founder, on-prem deployment
- Multinationals cannot localise the workflow into ΚΦΔ language cleanly

## Slide 10 — Team

- **Domain founder (TBC):** ex-ΑΑΔΕ ΚΕΦΟΜΕΠ supervisor or ex-Big-4 Greek tax-controversy partner
- **Technical founder (TBC):** senior ML engineer, retrieval + legal-LLM background
- T-Life Capital co-founder seat, Athens
- Advisory: retired ΑΑΔΕ TP director, fractional DPIA/AI-Act counsel
- Greek-citizen lead for ΑΑΔΕ clearance

## Slide 11 — Ask

- **90-day pilot at ΚΕΦΟΜΕΠ:** 10 auditors, €80-150k, innovation-pilot direct award
- **Pre-registered metrics:** closed cases/auditor/month, median draft-to-issue time, euros assessed/case
- Success gate: **+25% closed-case uplift at constant quality** → pilot result becomes part of the Governor's parliamentary report
- Seed round €1.5M alongside, co-led by T-Life Capital

## Slide 12 — One number

- 200 auditors × +1.5 cases/quarter × €300k assessed/case = **€360M/year incremental euros assessed**
- License cost: **€960k/year**
- That is the conversation.

# Go-to-Market Plan

## Champion identification

The buyer is **the AADE Governor** (Διοικητής) — the Governor publishes audit-recovery numbers to parliament, so they own the metric our product moves. The operational co-sponsor is the **ΓΓ Διοίκησης ΑΑΔΕ**; the pilot host is the **Director of ΚΕΦΟΜΕΠ**. Pre-meeting groundwork: a one-page memo signed by an ex-ΑΑΔΕ TP director on our advisory board, routed via either the Governor's chief of staff or the Minister of Finance's office. The memo opens with the HMRC-Quantexa £175M comparable, because that is the question the Governor will be asked next at Ministry of Finance round-tables and they need our answer pre-loaded. We do not approach Netcompany-Intrasoft as gatekeepers — we approach them as overlay-API partners after the Governor signals interest, never before.

## First-meeting choreography

Open with **euros**, never with "agentic AI". Three slides, sixty seconds each: (1) "Here is the HMRC-Quantexa £175M sovereign-AI contract signed in March; here is what a Greek-language equivalent costs and looks like." (2) "Your ΚΕΦΟΜΕΠ auditor closes 6 cases/quarter; here is the 8-minute demo of a σημείωμα διαπιστώσεων drafted from a live myDATA pull, with ΚΦΔ citation, signed by an auditor on screen." (3) "Here is the 90-day pre-registered pilot, here is the metric you can put in the parliamentary report." Then stop talking and let the Governor talk. The deliberate framing for the buyer is "auditors do more, not different" — copilot, not enforcement; productivity, not new powers; Belastingdienst architecture, not toeslagenaffaire repeat.

## Pilot offer

**90-day, 10-auditor pilot at ΚΕΦΟΜΕΠ**, fixed-fee €80-150k, innovation-pilot apevtheias anathesi. Pre-registered, before kick-off and in writing:

- Closed cases per auditor per month, baseline vs pilot;
- Median draft-to-issue time per document type;
- Euros assessed per case;
- Quality audit by a non-pilot ΚΕΦΟΜΕΠ supervisor, randomly sampled.

Success gate: ≥25% lift on closed cases at constant quality. If we hit it, the result is escalated as part of the Governor's parliamentary reporting and converts to a framework procurement track. If we miss, we walk; the pilot fee covers our cost, not our return.

## Expansion path

Pilot → ΚΕΦΟΜΕΠ-wide (~80 auditors) within 6 months → ΚΕΜΕΕΠ (high-net-worth office) within 12 months → selected ΔΟΥ audit teams in 18 months. The same infrastructure carries the **Transfer-Pricing Review Agent** as a second module sold into ΚΕΦΟΜΕΠ — Spain AEAT's 2026 Tax Control Plan now formally mandates AI on TP risk analytics, which gives us live procurement cover and doubles ARPU per seat. The **ΟΠΕΚΕΠΕ-into-ΑΑΔΕ merger (1 Jan 2026)** opens a parallel adjacency: the same human-in-the-loop drafting pattern is portable to CAP-disbursement caseworkers, 624 staff already on the Governor's org chart. Other ministries (ΥΠΟΙΚ Γενική Διεύθυνση Φορολογικής Πολιτικής for policy-impact drafting) are 24-month follow-ons, not pilot-window distractions.

## Procurement vehicle

**Innovation-pilot apevtheias anathesi** under the public-procurement code (ν. 4412/2016) for the 90-day pilot — keeps us out of an open ΕΣΗΔΗΣ tender that Netcompany-Intrasoft would default-win on incumbency. Post-pilot, two routes in parallel: (a) **ESPA innovation-pilot extension** if available under the active ΕΣΠΑ digital-transformation programme; (b) **AADE-specific framework** under the Governor's delegated authority. We avoid framing the contract as an ELENXIS change request — it is an **overlay analytics service**, separate scope, separate procurement. The AI-Act conformity work runs in parallel and is sellable in its own right; the Annex III deferral to 2 December 2027 means we ship the pilot inside a permissive window and have the traceability stack production-ready before the enforcement bar lifts.

## PR/comms strategy

Two audiences, two registers.

- **Greek tax-press (Naftemporiki, Kathimerini Οικονομικά, Capital.gr):** quiet during pilot, loud at result. Story angle: "Greek startup builds Greek-language auditor copilot for ΑΑΔΕ; pilot shows +25% closed-case uplift" — explicitly framed against the HMRC-Quantexa £175M deal as "Greek-language sovereign AI, built in Athens, not bought from London." Co-branded comment from the Governor; T-Life Capital and the founder named, not Anthropic or any LLM vendor.
- **EU AI-procurement community (taxadmin.ai, EU Tax Observatory, OECD CTP):** publish the AI-Act conformance memo and DPIA framework as a reference design, positioning us alongside Caddy, the Belastingdienst case-triage work and the AEAT 2026 TP analytics programme. This is reputational armour for the next pilot ministry, not lead-gen.

Strict comms hygiene throughout: no claims about euros recovered until ΑΑΔΕ publishes them; no parading taxpayer cases; no individual auditor named without consent. Every public number traces to the Governor's own report.
