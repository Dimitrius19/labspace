# Business Plan

## Company thesis

T-Life Capital is co-founding **TP-Review.gr**, an authority-side transfer-pricing review agent for ΑΑΔΕ's ΚΕΦΟΜΕΠ (Κέντρο Φορολογίας Μεγάλων Επιχειρήσεων). The product ingests a multinational's Master File / Local File / CbCR, structures every intra-group transaction (financial, royalty, service, tangible), runs deterministic comparables benchmarking against Amadeus/Orbis (published-data fallback available), and drafts Greek-language deficiency-letter sections — citing OECD TP Guidelines chapter and ν. 4172/2013 article line by line. The thesis is narrow and timed: **Spain's AEAT 2026 Tax Control Plan now formally mandates AI for transfer pricing**, **OECD/CIAT WP-06-2025** has legitimised tax-authority AI on TP, and **OECD Pillar Two came into force from 2024**, materially raising the scrutiny ΚΕΦΟΜΕΠ must apply to Greek subsidiaries of multinationals — yet no Greek vendor ships authority-side, and Big-4 tools (Aibidia, Exactera) ship taxpayer-side only. The architectural moat is **deterministic arithmetic + LLM drafting + line-level provenance**: numeric outputs are computed by code on auditable data, the LLM only narrates, every paragraph traces to (a) source TP-doc page, (b) comparable record, (c) OECD chapter, (d) Greek statute article. This is the UWV-DPA counter-example: a black-box scoring stack would never survive a MAP/APA challenge in Greek administrative court; ours is built to be the evidence the auditor cites under cross-examination.

## Market & buyer

Decision-maker: **AADE Governor Πιτσιλής**, the named modernisation champion of Greek tax administration. Operational co-sponsor: **ΓΓ Διοίκησης ΑΑΔΕ**. Pilot host: **Director of ΚΕΦΟΜΕΠ**, who publishes case-closure numbers monthly to the Governor. User: the **ΚΕΦΟΜΕΠ TP auditor (Ελεγκτής Ενδοομιλικών Συναλλαγών)** plus the team supervisor on quality review. ΚΕΦΟΜΕΠ is small by design — a few dozen TP-specialist auditors — which is a feature: a 5-auditor pilot is a meaningful share of the unit, and uplift is measurable inside a single quarter. The wedge extends to ΚΕΜΕΕΠ (high-net-worth multinational structures) and to ΑΑΔΕ-affiliated investigation units. The substrate shares infrastructure with T-Life's sibling **ELENXIS Auditor Copilot** — a single deployment from day one, with the sibling adopting our court-defensible-citation architecture by default.

## Why now (2025-2026 reframe)

Five tailwinds: (1) **OECD Pillar Two live since 2024** has raised documentation burden and audit attention on Greek MNC subsidiaries — TP becomes the line item where Pillar Two adjustments are first contested. (2) **Spain AEAT 2026 Tax Control Plan** formally builds AI into the TP audit programme — first Latin-bloc precedent. (3) **OECD/CIAT WP-06-2025** sets multi-jurisdiction legitimacy for AI on TP. (4) **EU AI Act Annex III enforcement deferred to 2 December 2027** (Omnibus, 7 May 2026) — 16-month runway; converts the traceability stack from blocker to sellable line. (5) **UK HMRC internal copilot rolled to 28,000 staff in April 2026** — Europe's largest tax-authority AI deployment.

**Greek Law 5299/2026** governs AI and data rules — EU AI Act lens with national supplementary obligations on public-sector deployment. We design to L.5299/2026 from day one; conformity is itself a chargeable line.

## Product — the agentic loop

For each TP case opened in ΚΕΦΟΜΕΠ:

1. **Ingest** Master File, Local File and CbCR plus prior ΑΑΔΕ TP-audit history (BEPS Action 13 standard).
2. **Extract** intra-group transactions — financing (loans, cash pooling, guarantees), royalties, services, tangible — into a structured table keyed by counterparty, jurisdiction, amount, period.
3. **Run comparables search** against Amadeus/Orbis or an open-source fallback (CbCR aggregates + EDGAR + ΓΕΜΗ + ECB lending data); compute the arm's-length range deterministically.
4. **Flag** transactions outside the interquartile range with a plain-Greek rationale, citing OECD TP Guidelines (Ch. I-IX), Greek statute (ν. 4172/2013 art. 50-51, ΠΟΛ.1142/2015), and the relevant CFC rule where counterparties sit in low-tax jurisdictions.
5. **Draft** the deficiency-letter section per flagged transaction in Greek in ΚΕΦΟΜΕΠ register, with proposed adjustment in euros and statute-citation chain pre-populated.
6. **Generate** the comparables-defence appendix the auditor cites when the taxpayer disputes — full audit trail of every comparable, every reject reason, every screen.
7. **Log** every retrieval, computation, prompt and output as AI-Act high-risk traceability and L.5299/2026 conformance evidence.

Hard rules. Copilot only — the auditor signs every output. Numeric computation is deterministic Python; the LLM only drafts narrative. Every paragraph carries an inline citation token. No automated scoring of natural persons. Architectural template: **Belastingdienst post-toeslagenaffaire**. The **UWV-DPA failure** is the explicit counter-example — opaque scoring kills the reference, line-level provenance defends it in court.

## Revenue model & pricing

Three discrete budget lines.

- **Per-auditor SaaS licence** at indicative **€7,200/auditor/year** (higher than the general-audit copilot's €4,800 — TP work is denser and OPEX includes Amadeus/Orbis seat).
- **Fixed-fee pilots.** Retro on 5 closed cases: **€60-90k**, 8 weeks, in-kind, NDA-bound. Live on 5 active cases × 5 auditors: **€120-200k**, 6 months, innovation-pilot απευθείας ανάθεση under ν. 4412/2016.
- **AI-Act / L.5299/2026 traceability module** to ΑΑΔΕ Διεύθυνση Συμμόρφωσης — required infrastructure, amortised across the sibling ELENXIS-copilot product.

**Managed-service wrap** — under a **Performance Technologies** or **Cosmote managed-services** sub-contract for on-prem hosting inside the ΑΑΔΕ data centre. We do not own the iron, the AADE-cleared SI does; we own the model, the prompts, the comparables pipeline and the citation engine. This is how a venture-scale team gets inside the security perimeter without trying to be a Greek SI.

## Unit economics

- ΚΕΦΟΜΕΠ TP auditor closes ~4 cases/year today; median euros assessed per case sits in the **€1-5M band** with long tails into €10M+ on financing/royalty adjustments; conservative midpoint €1.5M.
- Pilot target: same 4 cases closed in **1/4 the drafting time** on the retro, then **+1 incremental case per auditor per year** on the live pilot.
- Incremental euros assessed/auditor/year = €1.5M; €7,200 licence payback in days even at 25% recovery rate.
- 30 auditors across ΚΕΦΟΜΕΠ + ΚΕΜΕΕΠ → **€216k ARR direct seats** plus the AI-Act module plus the bundled deal with the general-audit copilot. Aggregate ΑΑΔΕ ARR at 200 auditors approaches **€1.2-1.4M** at ~85% gross margin.

## Capital plan & milestones

Seed **€1.5M** (T-Life Capital co-lead + one Athens institutional + one Big-4-alumni angel) to reach a signed retro pilot, the live pilot SOW, and a comparables-defence benchmark independently reviewed by a former AADE TP director. Series A **€4-6M** at pilot conversion: ΚΕΦΟΜΕΠ-wide rollout, ΚΕΜΕΕΠ adjacency, conformance documentation production-grade, Amadeus/Orbis licensing locked in.

18-month milestones: M3 retro pilot signed, founder pair locked. M6 results memo to ΚΕΦΟΜΕΠ Director. M9 live pilot απευθείας ανάθεση signed. M12 live results to the Governor; first MAP/APA challenge passed. M15 framework or ESPA innovation-pilot extension. M18 30 auditors live; parliamentary-report mention.

## Team & hires

Founding pair (Greek-citizen lead required for ΑΑΔΕ security clearance).

1. **Domain founder** — ex-Big-4 Greek TP partner (Deloitte / PwC / KPMG / EY Athens) switching sides. Binding constraint: fewer than ten credible names in Athens with the seniority and ΚΦΔ/ΠΟΛ.1142 fluency. Run as a structured 90-day search with co-founder equity pre-modelled and an advisory seat for a retired AADE TP director.
2. **Technical founder** — senior ML engineer with RAG, legal-LLM and tabular-deterministic background; ELENXIS-contractor-status eligible.

First five hires: comparables-data engineer, Greek-LLM evaluation lead, AADE-cleared backend engineer, DPIA / L.5299/2026 / AI-Act counsel (fractional → in-house), customer-success lead seconded from ΚΕΦΟΜΕΠ if procurement permits.

## Risks

- **Court-defensibility of comparables.** Every output traces to source record, screen criteria, OECD chapter and statute article. Independent pre-pilot review by a retired AADE TP director is part of the SOW.
- **Founder recruit.** Single binding constraint. Mitigation: 90-day Big-4 hunt; fallback of an ex-Big-4-senior-manager + retired-director combination.
- **Comparables licensing.** Amadeus/Orbis enterprise licence is non-trivial OPEX. Mitigation: published-data fallback benchmarked against Amadeus on closed-month data; if fallback delivers ≥85% selection overlap on financial transactions and ≥75% on services, the licence becomes negotiable.
- **Pillar Two interaction.** Citations include Pillar Two model rules; the comparables-defence appendix flags Pillar Two interactions so the auditor decides the position.
- **Incumbent overlap.** Netcompany-Intrasoft does **not** ship authority-side TP analytics; Big-4 ship taxpayer-side only. We avoid the gatekeeper fight by entering as a Performance Technologies / Cosmote managed-services overlay.

# Pitch Deck

## Slide 1 — Cover

- **TP-Review.gr — Transfer-Pricing Review Agent for ΚΕΦΟΜΕΠ**
- Authority-side TP analytics + deficiency-letter drafting in Greek
- T-Life Capital, Athens — May 2026
- Ask: 5-case retro pilot at ΚΕΦΟΜΕΠ, NDA-bound, 8 weeks

## Slide 2 — Problem

- A single ΚΕΦΟΜΕΠ TP audit: **1,000+ pages** of Master File / Local File / CbCR + manual Amadeus/Orbis benchmarking
- A ΚΕΦΟΜΕΠ TP auditor closes **~4 cases/year**
- Post-OECD-Pillar-Two (live 2024), Greek MNC subsidiaries under sharper scrutiny — same headcount
- Big-4 tools (Aibidia, Exactera) ship **taxpayer-side**; the authority has nothing equivalent

## Slide 3 — Why now

- **HMRC copilot rolled to 28,000 staff, April 2026** — Europe's largest tax-authority AI deployment
- **Spain AEAT 2026 Tax Control Plan** mandates AI for transfer pricing
- **OECD/CIAT WP-06-2025** sets multi-jurisdiction legitimacy for AI on TP
- **OECD Pillar Two live since 2024** — every Greek MNC subsidiary files more, contests more
- **Greek Law 5299/2026** + **EU AI Act Annex III enforcement deferred to 2 December 2027** (Omnibus, 7 May 2026)
- **AADE Governor Πιτσιλής** — named modernisation champion of Greek tax administration

## Slide 4 — Solution

- Ingest Master File / Local File / CbCR → extract intra-group transactions → comparables search → flag IQR outliers → **draft Greek deficiency-letter** with OECD + ν. 4172/2013 citations → comparables-defence appendix
- **Architectural moat: deterministic arithmetic + LLM drafting + line-level provenance** (UWV-DPA counter-example)
- Every output signed by the auditor; full audit trail for L.5299/2026 and AI-Act
- Greek ΚΦΔ register and ΚΕΦΟΜΕΠ format native — not a translated multinational product
- Template: **Belastingdienst** human-in-the-loop stack

## Slide 5 — Demo

- Live: upload anonymised Master File + Local File
- Agent extracts 47 intra-group transactions into a structured table
- Comparables run on intra-group loan rate (340bps over ECB MRO vs benchmark 220bps median) — flags 120bps adjustment
- Drafts the deficiency-letter paragraph in Greek, cites OECD TPG Ch. X §10.92 and ν. 4172/2013 art. 50 §2
- Comparables-defence appendix with full screen criteria and reject reasons
- Auditor edits, signs — **~40 minutes vs ~2 days** of hand work

## Slide 6 — Market

- ΚΕΦΟΜΕΠ TP: a few dozen specialist auditors; ΚΕΜΕΕΠ adjacency on multinational structures
- **€7,200/auditor/year** → Greek TP ARR ~€500k-1.4M with adjacency
- Bundled with **ELENXIS Auditor Copilot** (T-Life sibling, same buyer) → aggregate ΑΑΔΕ ARR ~€1.2-1.4M at 200 auditors

## Slide 7 — Traction & precedent

- **UK HMRC internal copilot — 28,000 staff, April 2026** — Europe's bar for tax-authority AI ambition
- **Spain AEAT 2026 Tax Control Plan** — first AI-mandated TP audit programme in Southern EU
- **OECD/CIAT WP-06-2025** — legitimacy frame for any MAP/APA brief
- **Belastingdienst** ten AI systems post-toeslagenaffaire — architectural template
- **Aibidia / Exactera** prove tractability — taxpayer-side only; no Greek ΚΕΦΟΜΕΠ-fluent equivalent shipped today

## Slide 8 — Business model

- Per-seat SaaS: **€7,200/auditor/year** (Amadeus/Orbis bundled)
- Retro pilot **€60-90k** / Live pilot **€120-200k** — both απευθείας ανάθεση
- AI-Act / L.5299/2026 traceability module to ΑΑΔΕ Διεύθυνση Συμμόρφωσης
- Managed-service wrap via **Performance Technologies** or **Cosmote** for on-prem inside the ΑΑΔΕ data centre

## Slide 9 — Competition & moat

- Big-4 (Aibidia, Exactera, Deloitte TP Catalyst) taxpayer-side only; Netcompany-Intrasoft does not ship TP analytics — clean carve-out
- **Moats:** Greek ΚΦΔ register, ΠΟΛ.1142/2015 citation patterns, ΚΕΦΟΜΕΠ deficiency-letter format, court-defensible line-level provenance, comparables-defence appendix engine, Greek-citizen founder with AADE clearance, managed-services wrap
- HMRC and Spain AEAT raise the **buyer's ambition ceiling** — they do not compete for our seat

## Slide 10 — Team

- **Domain founder (TBC):** ex-Big-4 Greek TP partner — 90-day structured search
- **Technical founder (TBC):** senior ML engineer, RAG + legal-LLM + tabular-deterministic
- Advisory: retired ΑΑΔΕ TP director; fractional DPIA / AI-Act counsel
- Managed-services delivery partner: Performance Technologies or Cosmote
- Greek-citizen lead for AADE clearance

## Slide 11 — Ask

- **Retro pilot:** 5 closed cases, 8 weeks, **€60-90k**, NDA-bound
- **Gate:** same-quality in ≤25% of original time; comparables defence independently reviewed
- **Follow-on:** 5 auditors × 5 cases × 6 months, **€120-200k** απευθείας ανάθεση
- Seed €1.5M co-led by T-Life Capital

## Slide 12 — One number

- 30 auditors × +1 case/year × €1.5M assessed = **€45M/year incremental euros assessed**
- Licence cost: **€216k/year**
- A comparables-defence appendix that survives MAP/APA: priceless

# Go-to-Market Plan

## Champion identification

The buyer is **AADE Governor Πιτσιλής**, the named modernisation champion of Greek tax administration. Operational co-sponsor: **ΓΓ Διοίκησης ΑΑΔΕ**; pilot host: **Director of ΚΕΦΟΜΕΠ**. Pre-meeting groundwork: a two-page memo signed by the retired ΑΑΔΕ TP director on our advisory board, routed via the Governor's chief of staff. The memo opens with the **HMRC 28,000-staff April-2026 rollout** and the **Spain AEAT 2026 Tax Control Plan** because those are the questions the Governor will be asked next at OECD CTP and ECOFIN-aligned round-tables. We do **not** approach Netcompany-Intrasoft as gatekeepers; ΚΕΦΟΜΕΠ TP audit is not their substrate.

## First-meeting choreography

Open with **euros and Pillar Two**, never "agentic AI". Three slides, sixty seconds each.

1. "Pillar Two has been live since 2024. Spain's AEAT wrote AI for TP into the 2026 Tax Control Plan. HMRC put a copilot in front of 28,000 staff in April. Greece needs a Greek-language answer and here is what it costs."
2. "Your ΚΕΦΟΜΕΠ TP auditor closes 4 cases a year. Here is the 40-minute demo: Master File in, IQR-flagged transactions out, deficiency-letter section drafted in Greek with OECD and ν. 4172/2013 citations, comparables-defence appendix attached."
3. "Here is the 8-week retro pilot on 5 closed cases. NDA-bound. In-kind data. Success gate: same quality, 25% of the time. Independent review by a retired AADE TP director."

Then stop. The framing is **"auditors do more, not different"** — copilot, not enforcement automation; Belastingdienst architecture, not UWV-DPA repeat; deterministic arithmetic with line-level provenance, not a black-box risk score. Court-defensibility is the single sentence we repeat: every paragraph cites OECD chapter, statute article, comparable record, and source TP-doc page. If the comparables defence cannot survive MAP/APA, the pilot ends.

## Pilot offer

**Phase 1 — Retro pilot.** 5 closed ΚΕΦΟΜΕΠ TP cases, 8 weeks, **€60-90k**, innovation-pilot απευθείας ανάθεση. Pre-registered: same-quality deficiency-letter sections in ≤25% of original drafting time; independent comparables-defence review by a retired ΑΑΔΕ TP director; 100% citation completeness (OECD chapter + statute article + comparable record + source TP-doc page).

**Phase 2 — Live pilot.** 5 auditors × 5 active cases × 6 months, **€120-200k** απευθείας ανάθεση. Metrics: median draft-to-issue time; cases closed per auditor vs baseline; euros assessed per case; quality audit by a non-pilot ΚΕΦΟΜΕΠ supervisor on a random sample; MAP/APA survival rate of comparables defence on any case challenged in window.

Success gate: ≥+1 case/auditor/year run-rate at constant quality, zero comparables-defence collapses on MAP/APA. Hit the gate, the result enters the Governor's monthly ΚΕΦΟΜΕΠ briefing and converts to framework procurement. Miss, we walk.

## Expansion path

Retro → Live → ΚΕΦΟΜΕΠ TP-wide (12 months) → ΚΕΜΕΕΠ adjacency (18 months) → bundled deal with the **ELENXIS Auditor Copilot** at ΚΕΦΟΜΕΠ general-audit (T-Life sibling, shared infrastructure). The same managed-services wrap carries both products into the AADE data centre. Beyond 24 months: ΑΑΔΕ Διεύθυνση Διεθνών Οικονομικών Σχέσεων for MAP/APA authority-side case prep, and ΥΠΟΙΚ Γενική Διεύθυνση Φορολογικής Πολιτικής for Pillar Two policy-impact drafting.

## Procurement vehicle

**Innovation-pilot απευθείας ανάθεση** under ν. 4412/2016 for both pilots — keeps us out of full ΕΣΗΔΗΣ. Post-pilot: ESPA innovation-pilot extension, or AADE-specific framework under the Governor's delegated authority. The contract is structured as an **overlay analytics service inside the AADE data centre**, delivered through a **Performance Technologies** or **Cosmote managed-services** sub-wrap handling iron, security clearance and 24/7 SLA — T-Life supplies the model, prompts, comparables pipeline, citation engine and conformity stack. The Annex III deferral to 2 December 2027 lets us ship inside a permissive window and have the traceability stack production-ready before enforcement bites.

## PR/comms strategy

Two audiences, strict comms hygiene.

- **Greek tax-press (Naftemporiki, Kathimerini Οικονομικά, Capital.gr).** Quiet during retro and live, loud at result. Angle: "Greek startup builds Greek-language TP audit agent for ΚΕΦΟΜΕΠ; same-quality deficiency letters in 25% of the original time, comparables defence survives independent review." Frame against HMRC's 28,000-staff rollout and Spain AEAT 2026 as "Greek-language sovereign TP-AI, built in Athens, not bought from London or Madrid." Co-branded comment from Governor Πιτσιλής. T-Life Capital and the founder named, not the LLM vendor.
- **EU AI-procurement and OECD CTP community (taxadmin.ai, OECD CTP, CIAT).** Publish the AI-Act / L.5299/2026 conformance memo and comparables-defence architecture as a reference design alongside the AEAT 2026 plan and Belastingdienst case-triage work. Southern-EU peer to AEAT TESEO/INFONOR. Reputational armour for the next pilot and the Series A.

No claims about euros recovered until ΑΑΔΕ publishes them. No taxpayer named. No individual auditor named without consent. Every public number traces to the Governor's report or an OECD/CIAT paper. The product's defensibility is its citation chain — the comms strategy respects the same discipline.
