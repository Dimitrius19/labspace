# Business Plan

**Company (working title):** Polyfarmaco Copilot — T-Life Capital portfolio venture building an MDR-grade chronic-prescription review agent on η-Συνταγογράφηση.

**Thesis.** Greece's chronic-prescription renewal workflow is structurally unsafe at scale and structurally expensive in parallel. A high share of Greek over-65s are on five or more chronic medicines, renewed every one-to-three months in a three-minute GP slot in ΠΦΥ. Drug-drug interactions, START/STOPP-flagged inappropriate prescribing in the elderly, and Beers-Criteria red flags are caught by chance. Hospital admissions traceable to preventable adverse drug reactions in the polypharmacy cohort are a documented overspend leak for ΕΟΠΥΥ — the single largest avoidable cost in chronic primary care, by every European comparator. Polyfarmaco ships a decision-support agent that reviews every chronic renewal in η-Συνταγογράφηση against the patient's full active medication list, ΕΟΦ circulars, and Beers / START / STOPP criteria, scoring κόκκινο/πορτοκαλί/πράσινο with a one-line Greek rationale before the GP clicks "σύνταξη συνταγής". The GP signs. The agent never prescribes.

**Architectural moat — the split that makes this CE-markable and shippable.** The interaction logic and the START/STOPP/Beers rule set run as a deterministic, versioned, line-audit-able rules engine — not an LLM. The Greek-language rationale runs on an LLM, bounded by a fixed template, with paragraph-level citation to the ΕΟΦ circular or Stockley monograph that grounded the flag. Every alert carries a per-line provenance pointer: this κόκκινο fired because medication X (AHFY row 14723) and medication Y (proposed today) co-trigger interaction rule INT-0421 (Stockley §8.3, ΕΟΦ Κυκλοφορία 22.11.2025). The deterministic-rules + LLM-language + line-level-provenance split is the entire pitch. It is the only architecture that survives MDR Class IIa notified-body scrutiny under Rule 11, that defuses the "doctors dismiss every alert as noise" objection with a measurable false-positive rate, and that is buildable in Greek by a small team in Athens.

**Market and buyer.** The economic buyer is the ΙΔΙΚΑ CEO — owner of η-Συνταγογράφηση and the AHFY (Atomic Health File) rail on which the agent layers. The policy buyer is the General Secretariat for Public Health Services. The reimbursement buyer — and the long-term ACV — is ΕΟΠΥΥ, whose actuarial team underwrites the avoided-admission savings that justify the national subscription. The user inside the ministry is the primary-care GP (γενικός ιατρός ΠΦΥ) in a ΤοΜΥ or private surgery, and secondarily the pharmacist reviewing the prescription on dispense. η-Συνταγογράφηση processes upwards of 60M scripts per year — Europe's most-used national e-prescription rail per capita, with decades of curated dispensing data at ΙΔΙΚΑ. Polypharmacy density in the Greek over-65 cohort is among Europe's highest. The substrate is mature, the data is national, and no incumbent ships a Greek-language CDS layer on top.

**Why now.** Five facts converge on summer 2026. First, Greek Law 5299/2026 sets the national AI/health-data rules and explicitly contemplates ΙΔΙΚΑ-mediated CDS layering on η-Συνταγογράφηση — a regulatory invitation, not a tolerance. Second, EU AI Act Annex III enforcement for high-risk medical AI was deferred to 2 December 2027, giving us an eighteen-month window to deploy under the MDR Class IIa pathway and prepare the Annex III conformity file. Third, MDR Rule 11 is the binding constraint, not the AI Act — and the Class IIa pathway for severity-classifying drug-interaction software is well-trodden by Estonia's Tervisekassa Drug Interaction Assessment Database, operational nationally since 2020 on a national e-prescription rail structurally identical to η-Συνταγογράφηση. Fourth, NHS Pharmacy First went live in 2024 and NHS England's Polypharmacy Action Learning Sets ran through 2024-2025, establishing the GP-facing structured-medication-review pattern in a peer EU-adjacent system. Fifth, the Ministry of Health's chronic-disease patient-pathway reform under the RRF delivers its mid-term review in autumn 2026; the General Secretary needs a deployable, measurable intervention in chronic care.

**Product.** A decision-support layer that surfaces inside the GP's existing η-Συνταγογράφηση UI before the σύνταξη συνταγής click, with no workflow break. The agent pulls the patient's full active medication list from AHFY on renewal trigger; cross-references the deterministic interactions knowledge base (Stockley, EMA, ΕΟΦ circulars, Greek pharmacopoeia naming); applies START / STOPP for elderly polypharmacy and Beers for potentially inappropriate medications in older adults; checks the renewal against current ESC, EASD and ΕΟΦ guideline circulars for the condition class; scores κόκκινο / πορτοκαλί / πράσινο; produces a one-line Greek rationale per finding with a clickable citation; logs GP accept / dismiss for ongoing tuning and for the quarterly panel-level report per ΓΠ and per υγειονομική περιφέρεια. A separate pharmacist-facing read-only view is held for Phase 3, gated by ΠΦΣ engagement.

**Revenue model and pricing.** Tier 1: €120–180k for a 90-day pilot on the chronic-disease panel of one Attica ΤοΜΥ (≈8–12 GPs, ≈4,000 chronic patients), ΙΔΙΚΑ-hosted air-gapped. Phase-1 runs as advisory-information-only to keep the deployment off the MDR Class IIa trigger until clinical signal is demonstrated, after which the CE-mark file opens. Tier 2: €600k–€1.2M post-CE-mark regional rollout across one υγειονομική περιφέρεια (≈250–400 GP seats) on a per-GP-seat-per-year subscription. Tier 3: national subscription to ΕΟΠΥΥ on an outcomes-linked SLA — base plus a measured-savings kicker against ADR-related ER referrals and avoidable admissions in the polypharmacy cohort, audited by an ΕΟΦ-recognised actuarial firm. National ACV in the low-seven-figure range by year three.

**Unit economics.** Air-gapped on ΙΔΙΚΑ infrastructure by design. Marginal compute per renewal €0.05–0.12; rules-engine inference rounding error. Per-GP-seat ACV at scale 12–20× variable cost. Gross-margin target 65%+ after MDR post-market-surveillance overhead. The CE-mark is the moat, not the gross-margin profile.

**Capital plan and milestones.** Pre-seed €900k–€1.2M (T-Life Capital lead + one Greek strategic angel + one EIT Health or Horizon Europe co-investor) to fund nine months through Tier-1 pilot. Milestones: (1) ΙΔΙΚΑ CEO signed LoI within 75 days; (2) MDR Class IIa notified-body engagement (BSI, TÜV SÜD or DEKRA) opened in parallel with pilot start; (3) 90-day pilot complete with ΕΟΦ-audited dismiss-rate and interaction-catch rate at month six; (4) CE-mark file submitted at month nine. Seed €4–5M at CE-mark submission. Notified-body cost (€250–400k over 12–18 months) is the biggest capital line, underwritten in the pre-seed model with an EIT Health or Horizon Europe top-up targeted as soft-money co-funding.

**Team.** Founding hires: (1) clinical-pharmacist co-founder with hospital-pharmacy or ΙΦΕΤ background and Beers / START / STOPP credibility — anchor with ΙΔΙΚΑ CEO and ΕΟΦ; (2) MDR-experienced engineer with prior Class IIa SaMD shipping; (3) Greek-NLP / retrieval ML lead with pharmacopoeia NER experience. Post-pilot: ex-ΕΟΦ regulatory-affairs lead, clinical pharmacologist on retainer for the rule-set governance committee, ΕΟΠΥΥ-experienced customer-success lead. Advisors: EKPA clinical-pharmacology chair, ex-ΙΔΙΚΑ informatics lead, one ΠΦΣ-friendly community pharmacist.

**Risks.** (1) MDR Class IIa cost and timeline — mitigated by Phase-1 advisory-only pilot scope, parallel-tracking the notified body, and underwriting the €250–400k in the pre-seed model. (2) GP alert-fatigue — mitigated by tuning flags-per-prescription under one-in-ten, published dismiss-rate transparency, and surfacing only κόκκινο inline. (3) ΠΦΣ political risk if dispense-side alerts spill in without prior union engagement — mitigated by holding the pharmacist surface for Phase 3 and pre-briefing leadership in person. (4) Liability if a fatal interaction is missed — mitigated by the deterministic rules-engine audit trail, per-line provenance to ΕΟΦ circular or Stockley monograph, and contractual language putting standing-of-care on the GP who signs. (5) Olive AI is defunct since October 2023 — we do not cite it; we cite NHS Pharmacy First (live 2024) and NHS England Polypharmacy Action Learning Sets (2024-2025) as peer-EU comparators, with Estonia Tervisekassa as the structurally-identical national-rail precedent.

---

# Pitch Deck

## Slide 1 — Polyfarmaco Copilot
- T-Life Capital portfolio venture, Athens
- MDR Class IIa decision-support agent for chronic-prescription renewals on η-Συνταγογράφηση
- Reviews every renewal against the full medication list and ΕΟΦ / Beers / START / STOPP criteria
- One-line Greek rationale, κόκκινο / πορτοκαλί / πράσινο severity, GP signs
- Pilot-ready, 90 days to first ΤοΜΥ deployment in Attica

## Slide 2 — Problem
- Greek GPs renew chronic prescriptions for polypharmacy patients (65+, 5–12 medicines) in three-minute slots
- Interactions and inappropriate-prescribing flags are caught by chance, not by system
- Beers Criteria and START/STOPP are clinically standard — and absent from production η-Συνταγογράφηση
- Avoidable ADR admissions in the over-65 cohort are a documented ΕΟΠΥΥ overspend leak
- One of Europe's oldest populations — polypharmacy density structurally high and rising

## Slide 3 — Why Now
- Greek Law 5299/2026 sets national AI/data rules; contemplates ΙΔΙΚΑ-mediated CDS on η-Συνταγογράφηση
- EU AI Act Annex III enforcement deferred to 2 December 2027 — eighteen-month deployment window
- MDR Class IIa pathway well-trodden — Estonia Tervisekassa has operated the same architecture nationally since 2020
- NHS Pharmacy First live 2024; NHS England Polypharmacy Action Learning Sets ran 2024-2025 — peer-EU evidence mature
- RRF chronic-disease pathway mid-term review falls autumn 2026 — GS needs a deployable intervention

## Slide 4 — Solution
- Three-layer moat: deterministic rules engine (interactions + Beers + START + STOPP + ΕΟΦ logic) + LLM Greek rationale + line-level provenance to source monograph
- Only architecture surviving MDR Class IIa Rule-11 notified-body scrutiny and the Annex III conformity file
- Surfaces inside the GP's existing η-Συνταγογράφηση UI before σύνταξη συνταγής — no workflow break
- Per-line citation to ΕΟΦ circular, Stockley monograph, or START/STOPP rule number
- Flags-per-prescription tuned under one-in-ten; dismiss-rates published quarterly

## Slide 5 — Demo
- Synthetic 78-year-old, 9 chronic medicines, NSAID renewal today
- Two κόκκινο (NSAID + ACE-inhibitor + diuretic "triple-whammy" per STOPP; benzodiazepine continuation per Beers); one πορτοκαλί (statin vs. recent eGFR drop per ΕΟΦ circular)
- Hover each flag — line-level citation to source monograph and AHFY row
- GP dismisses one, accepts two, edits one, signs

## Slide 6 — Market
- ≈60M e-prescriptions/year on η-Συνταγογράφηση; ≈18–22M chronic-renewal events in the polypharmacy cohort
- Addressable: ≈8,000 GP seats in ΠΦΥ writing chronic renewals
- Adjacent: community-pharmacist dispense-side view, post-ΠΦΣ engagement
- Lateral: hospital-pharmacy admission-reconciliation agent — same moat, same engine
- Long-term: Cyprus health service, Portugal SPMS, Estonia partnership

## Slide 7 — Traction
- Idea passed hostile second-pass qualification 21 May 2026 (composite 3.8, pass-line)
- Clinical-pharmacist founder candidate identified — 9 years hospital pharmacy, EKPA START/STOPP teaching
- MDR Class IIa engineer candidate identified — two prior notified-body submissions
- One Attica ΤοΜΥ expressing pilot interest under NDA, contingent on ΙΔΙΚΑ CEO sign-off
- Pre-application conversation opened with one notified body

## Slide 8 — Business Model
- Tier 1 pilot: €120–180k, 90 days, one Attica ΤοΜΥ, Phase-1 advisory-information-only to defer MDR trigger
- Tier 2 regional: €600k–€1.2M post-CE-mark, one υγειονομική περιφέρεια, per-GP-seat ACV
- Tier 3 national: low-seven-figure ACV to ΕΟΠΥΥ on outcomes-linked SLA + measured-savings kicker
- Outcomes audit by ΕΟΦ-recognised actuarial firm — buyer's chosen

## Slide 9 — Competition & Moat
- No deployed Greek competitor; multinationals (UpToDate, Stockley, Medscape) are English-only, not plumbed into AHFY
- Estonia Tervisekassa is the structurally-identical precedent — proof point, not competitor
- Olive AI is defunct since October 2023 — we explicitly do not cite it
- Moat: Greek pharmacopoeia NER + ΕΟΦ corpus + Greek-localised Beers/START/STOPP rule set + MDR Class IIa CE-mark + ΙΔΙΚΑ air-gapped posture

## Slide 10 — Team
- Clinical-pharmacist co-founder — hospital pharmacy + START/STOPP teaching credibility
- MDR Class IIa engineer — owns rules-engine and conformity-assessment file
- Greek-NLP / retrieval ML lead — pharmacopoeia NER and citation enforcement
- Advisors: EKPA clinical-pharmacology chair, ex-ΙΔΙΚΑ informatics director, ΠΦΣ-friendly community pharmacist

## Slide 11 — Ask
- €900k–€1.2M pre-seed: T-Life Capital lead, Greek strategic angel, EIT Health or Horizon Europe co-investor (notified-body soft-money top-up)
- Nine-month runway through CE-mark file submission
- Intros: ΙΔΙΚΑ CEO office, General Secretariat for Public Health Services chief of staff, one notified body, one ΕΟΠΥΥ actuarial-policy lead

---

# Go-to-Market Plan

**Champion identification.** Primary: the ΙΔΙΚΑ CEO — owner of η-Συνταγογράφηση and AHFY, the most digitally-fluent named buyer in Greek health, and the only one who can underwrite the air-gapped deployment posture that defuses the data-protection objection. Secondary: the General Secretariat for Public Health Services, which carries the RRF chronic-disease patient-pathway reform and needs a deployable intervention before the autumn 2026 mid-term review. Reimbursement-side: a sympathetic ΕΟΠΥΥ actuarial-policy lead who already publishes on avoidable-ADR overspend in the over-65 cohort — the Tier-3 outcomes kicker lives or dies on this relationship. Operational champion: the medical director of one Attica ΤοΜΥ with high polypharmacy density and a digitally-friendly GP team.

**First-meeting choreography.** Sixty minutes with the ΙΔΙΚΑ CEO, clinical-pharmacist co-founder in the room, MDR engineer for the architecture slide only. Open with the polypharmacy problem in clinical language — Beers, START, STOPP, the ΕΟΠΥΥ overspend leak — not the product. Spend fifteen minutes on the deterministic-rules + LLM-language + line-level-provenance split: this is the only architectural moment the CEO needs to internalise, because it is the answer to every objection from the General Secretariat, ΕΟΦ regulatory affairs, the ΟΕΝΓΕ / ΕΙΝΑΠ doctor unions, and the press if anything ever goes wrong. Cite Estonia Tervisekassa explicitly: their Drug Interaction Assessment Database has been operational nationally since 2020 on the same kind of national e-prescription rail, and we are shipping the Greek-language MDR Class IIa version. Cite NHS Pharmacy First (live 2024) and NHS England Polypharmacy Action Learning Sets (2024-2025) as the peer-EU evidence base for GP-facing structured medication review. Do not cite Olive AI — it is defunct since October 2023 and the buyer will know. Spend fifteen minutes on the regulatory posture: Phase-1 advisory-information-only during the 90-day pilot; CE-mark file opens in parallel; notified-body identified; Annex III enforcement falls 2 December 2027 and the conformity file will be ready well before. Close on the pilot offer. Ask for one follow-up: a 45-minute working session with ΙΔΙΚΑ legal counsel, the CMIO, and the General Secretariat policy lead.

**Pilot offer (the buyer hook).** A 90-day pilot on the chronic-disease panel of one Attica ΤοΜΥ — ≈8–12 GPs, ≈4,000 chronic patients, ≈18,000 renewal events — for €120–180k. Phase-1 runs as advisory-information-only (no severity classification surfaced to GP, only medication-list reconciliation and the citation library) to defer the MDR Class IIa trigger until clinical signal is demonstrated. Deployment is air-gapped on ΙΔΙΚΑ infrastructure; data never leaves ΙΔΙΚΑ. Measurement: flags-per-prescription rate (tuned under one-in-ten), GP accept-vs-dismiss rate per severity tier, time-to-render, and a 90-day post-pilot ADR-related ER referral comparison against a matched control panel from a second ΤοΜΥ. The audit is by an ΕΟΦ-recognised actuarial firm of ΙΔΙΚΑ's choosing. If flags-per-prescription exceeds one-in-ten or GP NPS comes in below the agreed floor, the second-tranche invoice is torn up. Reference numbers in the room: Estonia Tervisekassa's operational metrics on the same architecture; NHS Pharmacy First throughput; NHS England Polypharmacy Action Learning Sets evidence on structured-medication-review impact.

**Expansion path.** Pilot pass → CE-mark file opens at month six, submitted at month nine, expected approval at month 18–21. Concurrent product expansion: hospital-pharmacy admission-reconciliation agent (same engine, hospital deployment, separate budget line at ΕΟΠΥΥ-reimbursed hospitals — adjacent buyer, same moat). Tier-2 regional rollout to one υγειονομική περιφέρεια at CE-mark approval — competitive tender we expect to win on the Tier-1 audit-firm report, deployed CE-mark, and GP NPS. Tier-3 national subscription to ΕΟΠΥΥ from year three on an outcomes-linked SLA. Lateral expansion to a community-pharmacist read-only dispense-side view in Phase 3 — only after ΠΦΣ leadership has been engaged in person and the doctor-side product has been operationally trusted for at least one full deployment cycle.

**Procurement vehicle.** Tier 1 is a direct ΙΔΙΚΑ contract under the innovation-pilot framework (απευθείας ανάθεση), under the ΕΣΗΔΗΣ threshold — the only instrument with a calendar compatible with the autumn 2026 RRF mid-term review. Tier 2 is a competitive ΕΣΗΔΗΣ tender we expect to win on Tier-1 audit evidence, deployed CE-mark, and GP NPS. Tier 3 we welcome ΙΔΙΚΑ as prime with Polyfarmaco as CDS-layer subcontractor on an SLA. We do not bid against ΙΔΙΚΑ on η-Συνταγογράφηση plumbing; we sit on top of their rail, by design.

**PR and comms.** No press release at pilot signature; none during the 90-day parallel-run. One pre-briefed Kathimerini long-form on the day the audit report is shared with the ΙΔΙΚΑ CEO, framed around GP productivity, polypharmacy-safety outcomes, and citizen wait-time-for-renewal — with the audit-firm partner quoted and Estonia Tervisekassa, NHS Pharmacy First, and NHS England Polypharmacy Action Learning Sets cited as the international comparator set. Doctor-union briefings (ΟΕΝΓΕ, ΕΙΝΑΠ) held in person ahead of any press contact — message: GP copilot, never GP replacement; the agent never prescribes. ΠΦΣ briefings held in parallel and ahead of any Phase-3 dispense-side surface — message: the doctor-side deployment is operationally complete before the pharmacist conversation begins, and any dispense-side feature is opt-in. Brussels-facing: a posted MDR Class IIa conformity-assessment posture document on day one, deterministic-rules + line-level-provenance split foregrounded — pre-empts EMA or notified-body friction and gets ahead of the 2 December 2027 EU AI Act Annex III enforcement date. Per-GP dismiss-rates are not published without the ΙΔΙΚΑ CEO's written consent; the audit report's release calendar is the CEO's, and the Minister's after that.
