# Business Plan

**Venture (working name):** AMAtrix — Agentic short-let enforcement for the Hellenic Republic
**Founding studio:** T-Life Capital (Athens)
**Audience for this memo:** Office of the Minister of Tourism — Chief of Staff
**Date:** 21 May 2026 (T+1 from SDEP go-live)

## Company thesis
**Yesterday, 20 May 2026, EU Regulation 2024/1028 (the Single Digital Entry Point for short-term rentals) went operational.** As of yesterday, Airbnb, Booking, Vrbo, Expedia and the long-tail platforms are legally obliged to push host-level listing data to the Greek SDEP node for every active listing. That obligation is not future-tense; it is present-tense as of T-1. Greece now has — for the first time ever — the raw data it needed for a decade. What it does not have is the operational layer that turns that data into enforcement actions on the AMA registry, on AADE income returns, and against the Athens housing crisis the PM-office has staked political capital on. AMAtrix is the agentic enforcement layer: a closed loop between the SDEP feed (now live), the AMA registry, AADE myDATA / E1-E2 returns, and the compliance officer's inbox. The output is not a dashboard — it is a stream of ready-to-sign Greek-language προειδοποιητικές επιστολές with citations to L.5170/2025 and a one-click platform de-listing path. The qualification verdict on this idea is **PASS** (composite 4.33), and the binding 30-day action is to book a joint 45-minute meeting with the GS for Tourism Policy and the AADE Governor's office to pre-register a 500-listing Athens-1st-District retro-pilot.

## Market & buyer
- **Primary buyer:** Ministry of Tourism — Τμήμα Ελέγχου Βραχυχρόνιας Μίσθωσης. ~12 compliance officers today; political mandate to scale to ~40 within the L.5170/2025 implementation window.
- **Joint sponsor (non-negotiable):** AADE — Διεύθυνση Ελέγχων + ΚΕΦΟΜΕΠ. Per the qualification, without the AADE leg the agent reduces to a registry-cleanup tool rather than an enforcement loop.
- **Secondary buyer (Y2):** δήμοι with active short-let pressure — Athens (Δ. Αθηναίων, especially given the active 1st-3rd district registration freeze through Dec 2026), Thessaloniki, Mykonos, Santorini, Heraklion, Chania, Rhodes.
- **TAM construction:** Greece has ~190,000 active AMA-registered listings and a credible 30-60k undeclared shadow inventory. Platform GBV is in the €4-5bn range. Recoverable enforcement surface is large enough that a single-digit-percent uplift in compliant declarations dwarfs any plausible vendor ASP.
- **Buyer count (Greece):** 1 ministry + 1 AADE + ~15 high-priority municipalities = ~17 named accounts. Total addressable contract value across these accounts: €4-6M ARR by Y3.
- **Pan-EU expansion:** Same SDEP feed exists in 27 member states as of yesterday. Spain's VUDA registry has already delisted 86,000+ STR units (BeyondPricing, 2026); Italy's CIN has been live and enforced since January 2025; Portugal's AL is mature. Spain (Turespaña + autonomous communities), Portugal (Turismo de Portugal AL), Italy, Croatia, Cyprus are the natural Y2-Y3 targets. Conservatively €40-60M EU TAM.

## Product (agentic loop in detail)
The agent runs on a 24-hour cadence per municipality, with on-demand officer triggers.

1. **Ingest.** Pull the SDEP feed (live as of 20 May 2026) for the geography under audit. Per the qualification blocker, the Greek SDEP build-out is still in flight, so for the first 6 months the agent rides on a provisional dual feed: SDEP where ready + direct platform endpoints + AMA registry export. Add Airdna for triangulation.
2. **Match.** Cross-match each listing to the AMA registry on (a) AMA number string, (b) geocoded address via Hellenic Cadastre KAEK with Greek-language fuzzy NER, (c) property fingerprint (photo hash, host-ID, calendar pattern).
3. **Enrich.** For each matched AFM, pull declared rental income from AADE myDATA + E1/E2 via the interministerial API channel (joint AADE sponsorship is what unlocks this).
4. **Score.** Four-axis risk vector: no-AMA / fake-AMA / dormant-AMA / declared-vs-platform-revenue gap. Composite confidence; only ≥85% confidence reaches the officer queue.
5. **Draft.** Greek προειδοποιητική επιστολή citing L.5170/2025 and Article 39A KFE. Templated, never autonomous.
6. **Human gate.** Officer confirms / edits / dismisses. Every decision logged. **AI Act Annex III enforcement was deferred to 2 December 2027 in the 7 May 2026 Omnibus deal — this buys ~16 months of design runway, but the copilot-only, officer-sign-off-on-every-notice architecture ships from day one.**
7. **Action.** On officer approval, the agent files a de-listing request through the platform's Reg. 2024/1028 endpoint and pushes the tax referral to AADE.

The loop is built once and instantiated per municipality. Single-tenant Greek-territory deployment, hosted under GR-Cloud sovereign tier.

## Revenue model & pricing
- **Pilot:** €80-120k fixed-price, 90 days, single municipality (Athens 1st District is now the qualification-recommended scope). απευθείας ανάθεση tier.
- **Production SaaS:** Per-municipality annual licence €60-150k by listing density; national ministry licence €300-500k/yr.
- **AADE outcome-linked add-on:** capped at 2% of incremental tax assessed. Anchors AMAtrix as performance contractor, not software vendor.
- **Year-1 revenue target:** €350-500k.
- **Year-2 revenue target:** €1.8-2.5M.
- **Year-3 revenue target:** €5-7M.

## Unit economics
- ACV blended Y2: €180k. Gross margin 70-75%. Payback per account 9-12 months. LTV/CAC steady state 4-6× (named, finite buyer universe; relationship-led sale).

## Capital plan & milestones (24-month)
- **Seed:** €1.8-2.2M, T-Life Capital lead, target close September 2026.
- **M0-3:** Joint Tourism + AADE meeting (the binding next-30-days action). Athens 1st District retro-pilot signed on closed Sept-Oct 2025 data. Headcount 4.
- **M3-6:** Retro-pilot delivers 500 risk-scored properties + draft letters. Live SDEP integration. Headcount 6.
- **M6-12:** Ministerial framework contract. AADE recovery pilot. Headcount 9. Burn ~€140k/month.
- **M12-18:** National rollout. First 4 municipal contracts. First EU LOI (Cyprus or Portugal). Headcount 12.
- **M18-24:** Series A €6-8M for EU expansion. ARR €2-3M run-rate.

## Team & hires
Founding triad: (1) ex-AADE auditor or tax lawyer with admin-law drafting fluency (CEO/regulatory); (2) ML/NLP engineer with Greek-language fine-tuning experience (CTO); (3) operator with platform-data background (COO). First five hires post-founding: Greek-NER engineer, public-sector AM, compliance-officer-turned-PM, full-stack engineer, MLOps.

## Risks & mitigations
- **Cross-ministerial coordination risk (qualification's #1 blocker).** Tourism + AADE joint sponsorship is binding. Mitigation: warm intro via SETE or the AADE ELENXIS-copilot path; pre-drafted joint απόφαση before the first meeting.
- **Athens municipal political cycle.** The 1st-3rd district registration freeze runs through Dec 2026 and the Mayor of Athens is in the loop. Mitigation: pilot scope vetted by Δήμος Αθηναίων before any AADE join.
- **Provisional-feed risk during SDEP build-out.** SDEP went live yesterday but Greece's node is still maturing. Mitigation: 6-month dual-feed architecture (SDEP + direct platform endpoints + AMA export).
- **AI Act exposure.** Annex III enforcement deferred to 2 Dec 2027 per Omnibus, but human-in-loop + DPIA + traceability log ship with the pilot, not after.
- **Incumbent capture (Intracom / Netcompany).** Position as the agentic layer on top of their static registry — partnership, not replacement.

---

# Pitch Deck

## Slide 1 — AMAtrix: από το μητρώο, στην εφαρμογή
- Agentic enforcement for Greek short-term rentals
- Backed by T-Life Capital, Athens venture studio
- For the Minister of Tourism, AADE Governor, PM-office
- Qualification verdict: PASS (composite 4.33), binding 30-day action below

## Slide 2 — Το πρόβλημα είναι πολιτικό, όχι τεχνικό
- 190k AMA listings + 30-60k undeclared shadow inventory
- Athens housing crisis is the #1 domestic press cycle of 2025-2026
- L.5170/2025 + Athens 1st-3rd district registration freeze ACTIVE through Dec 2026
- Compliance team today: ~12 officers manually triaging spreadsheets
- Status quo = the PM's commitment stays rhetorical

## Slide 3 — Why now (the regulatory unlock happened yesterday)
- **EU Reg. 2024/1028 SDEP went operational on 20 May 2026 — T-1 from this deck**
- L.5170/2025 + Athens 1st-3rd district registration freeze ACTIVE
- AADE myDATA covers every Greek invoice — joinable to AMA via AFM
- Hellenic Cadastre KAEK ~95% complete — addresses geocodable
- AI Act Annex III enforcement deferred to 2 Dec 2027 (Omnibus, 7 May 2026) — 16 months of design runway

## Slide 4 — The solution: a closed agentic loop
- Ingest SDEP (live!) + Airbnb / Booking / Vrbo / Airdna (dual feed during Greek SDEP build-out)
- Cross-match against AMA registry on AMA string + KAEK + fingerprint
- Pull AFM-level declared income from AADE myDATA + E1/E2
- 4-axis risk score: no-AMA / fake-AMA / dormant-AMA / income-gap
- Draft Greek προειδοποιητική επιστολή with L.5170/2025 citations
- Officer confirms — agent files de-listing + tax referral

## Slide 5 — What the officer actually sees (demo)
- Triage queue ranked by confidence and projected recovery value
- One property = one card: photos, AMA status, declared vs. estimated income, draft letter ready for signature
- Buttons: «Έγκριση & Αποστολή», «Επεξεργασία», «Απόρριψη με αιτιολόγηση»
- Every decision logged for AI Act Annex III audit trail (deferred but built-in)
- Officer throughput target: 50 cases/day vs ~5 today

## Slide 6 — Market & buyer
- Primary: Τμήμα Ελέγχου Βραχυχρόνιας Μίσθωσης (Υπουργείο Τουρισμού)
- Joint sponsor (binding): AADE Διεύθυνση Ελέγχων + ΚΕΦΟΜΕΠ
- Y2 buyers: 15 high-pressure δήμοι (Αθηναίων, Μυκόνου, Θήρας, Ρόδου…)
- Greece TAM: €4-6M ARR. EU TAM: €40-60M ARR
- Buyer universe named and finite — relationship sale, not funnel

## Slide 7 — Verified international precedents (2025-2026)
- **Spain — VUDA national registry has delisted 86,000+ STR units (BeyondPricing, 2026)**
- **Italy — CIN mandatory and enforced since January 2025 across all regions**
- **Portugal — AL registry + AT (tax authority) cross-check operational since 2023**
- EU — Reg. 2024/1028 standardised the data layer in all 27 states; SDEP went live 20 May 2026
- None of these markets has the agentic enforcement loop on top — first-mover open

## Slide 8 — Business model
- Pilot: €80-120k fixed price, 90 days, Athens 1st District (απευθείας ανάθεση)
- National ministerial licence: €300-500k/yr
- Per-municipality licence: €60-150k/yr by density
- AADE outcome-linked add-on capped at 2% of incremental tax assessed
- Y1 €350-500k → Y2 €1.8-2.5M → Y3 €5-7M

## Slide 9 — Competition & moat
- Intracom / Netcompany built the static AMA registry — partnership target
- Foreign brand-protection / ESG SaaS cannot draft a Greek administrative act
- Moats: Greek admin-law drafting library (L.5170/2025, ΚΦΕ, ΚΦΔ); AADE interministerial channel; founder access to compliance officers and ministerial cabinet
- AI Act compliance baked in — incumbents must retrofit before 2 Dec 2027

## Slide 10 — Comparison: dashboards alone don't move the needle
- Venice 2025: day-tripper fee dashboards produced 13k daily avg vs 16k 2024 — marginal crowd effect
- The lesson: prediction without binding action lever changes nothing
- AMAtrix is not a dashboard — every flagged property produces a signed Greek προειδοποιητική επιστολή and a one-click platform de-listing
- The action lever (de-listing + tax referral) is what differentiates this from Venice-style monitoring

## Slide 11 — Team
- CEO: ex-AADE auditor / Greek tax-law drafting fluency
- CTO: ML/NLP engineer with Greek-language fine-tuning track record
- COO: platform-data / scraping operator
- Studio sponsor: T-Life Capital (Athens), co-founding equity + seed
- Advisors: targeting former GS Tourism Policy, former AADE deputy governor

## Slide 12 — The ask (the binding 30-day action)
- 45-minute joint meeting with GS Tourism Policy + AADE Governor's office
- 90-day Athens 1st District retro-pilot on closed Sept-Oct 2025 data, €80-120k
- 3 pilot KPIs: provably non-compliant operators flagged; draft pre-enforcement letters per L.5170/2025; AADE revenue-at-risk per AFM
- Named compliance officer as embedded product partner
- Decision letter (απόφαση ανάθεσης) — we are ready to start next quarter

---

# Go-to-Market Plan

## Champion identification
The qualification's #1 blocker is unambiguous: **Tourism and AADE must be co-champions, or the agent collapses into a registry-cleanup tool**. Three named offices have to align before the pilot signs:

- **General Secretary for Tourism Policy (Γ.Γ. Τουριστικής Πολιτικής)** — owns L.5170/2025 implementation and the compliance officer corps. Primary champion. Their 2026-2027 KPI is visible enforcement against shadow inventory; AMAtrix is the most defensible answer available now that SDEP is live.
- **AADE Governor + Διοικητής ΚΕΦΟΜΕΠ** — owns the interministerial data channel and the recovery upside. AADE pitch is pure ROI: each audit-officer minute captures €X in undeclared income.
- **Chief of Staff, PM Office** — political cover. The housing-crisis political ownership lives here; this office converts a ministerial pilot into a national rollout.

Secondary champions: Δήμαρχος Αθηναίων (the 1st-3rd district registration freeze means the Mayor's housing team is already mobilised), Δήμαρχος Μυκόνου, the General Secretariat for Information Systems (ΓΓΠΣΨΔ) for GR-Cloud, and the office of the Minister of Digital Governance for AI Act compliance sign-off (the 2 Dec 2027 deferral does not remove the political optics of "AI in enforcement").

## First-meeting choreography
- **How to get in:** the qualification names the warm path — SETE or the AADE ELENXIS-copilot route. Cold path is a co-signed letter from a respected former AADE deputy governor. Framing: "30-minute show-and-tell on the AMA enforcement gap that SDEP just unlocked yesterday."
- **What to bring:** (a) anonymised live demo on the proposed Athens-1st-District retro-pilot, ~500 risk-scored properties with three draft προειδοποιητικές επιστολές on screen; (b) a one-page legal memo confirming L.5170/2025 + Reg. 2024/1028 (live as of 20 May 2026) + AI Act Annex III deferral (2 Dec 2027) all line up; (c) Spain VUDA 86k-delisting + Italy CIN evidence pack — verified precedents that this works; (d) a pre-drafted απόφαση ανάθεσης for the pilot under απευθείας ανάθεση so the GS office sees exactly what they need to sign.
- **What to leave behind:** the one-pager, a 4-minute recorded demo, and a short list of officer-level reference contacts who have seen the demo.

## Pilot offer
- **Scope (qualification-recommended):** Athens 1st District, 90 days, retro-pilot on closed Sept-Oct 2025 data, ~500 risk-scored properties surfaced. Closed-data retro-pilot is what side-steps the 6-month Greek SDEP build-out lag.
- **Price:** €80-120k fixed, απευθείας ανάθεση. Stripped variant €55k under the €60k direct-contract tier.
- **Success metrics (qualification-aligned):** (1) provably non-compliant operators flagged at ≥85% confidence; (2) draft pre-enforcement letters produced in Greek per L.5170/2025 with ≥80% officer acceptance; (3) AADE revenue-at-risk per AFM projected and annualised ≥€5M on the pilot footprint; (4) zero AI Act / GDPR audit findings.
- **Timeline:** signature W0, data agreements W2, agent in officer's hands W6, midpoint review W9, final delivery W13.

## Expansion path
- **Y1:** Athens 1st District retro-pilot → live-data Athens municipal → national framework with the ministry → AADE joint deployment → first 3 paid municipalities.
- **Y2:** Greece national steady-state (ministry + AADE + 8-10 δήμοι). First EU pilot — Cyprus (linguistic and legal proximity) or Portugal (AL maturity). Series A.
- **Y3:** 2-3 EU member states live (Cyprus, Portugal, Italy CIN integration). Adjacent vertical: interministerial extension into AADE-only customs and excise enforcement.

## Procurement vehicle
- **Pilot:** απευθείας ανάθεση. Two variants — €55k stripped pilot inside the <€60k innovation-pilot tier; or €80-120k bundled as innovation pilot + analytical services under the same direct-contract route.
- **National rollout:** RRF (Ταμείο Ανάκαμψης) "Digital Transformation of the State" envelope — residual ~€80-120M digital-public-services envelope, AI-Act-compliant agentic systems explicitly eligible, end-of-2026 commitment deadlines favour shovel-ready vendors. ΕΣΠΑ 2021-2027 "Ψηφιακός Μετασχηματισμός" is the fallback envelope.
- **Framework tender:** target inclusion in a ΓΓΠΣΨΔ συμφωνία-πλαίσιο for AI-enabled enforcement systems — the structural ask post-pilot, which converts ad-hoc contracts into a multi-year vehicle and locks competitors out.

## PR / comms strategy
- **Pre-pilot:** strict no-press. Officers and concessionaires would game it.
- **At first 500-letter milestone:** PM-office-led press event on housing-crisis enforcement. AMAtrix named as underlying tool only if the Minister and GS choose to — political optionality stays with them.
- **Steady state:** annual «Έκθεση Συμμόρφωσης ΑΜΑ» co-authored with the ministry and AADE, produced by the agent automatically, signed by the GS. This is the artefact that locks the relationship in.
- **Reputational risk management:** never claim autonomy. The agent drafts; the officer signs. Every public statement repeats that loop. With AI Act Annex III enforcement deferred to 2 Dec 2027, the political framing matters more than the legal one in the next 16 months.
