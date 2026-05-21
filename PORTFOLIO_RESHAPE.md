# T-Life Portfolio Re-Shape Memo

**Date:** 21 May 2026
**To:** Tryfon family principals
**Re:** 9/9 red-team pattern, catalog re-shape decision
**Status:** Supersedes `PHASE0.md` (preserved for historical record). **§8 ADDENDUM 2026-05-21 evening — see end of memo.**

---

> **⚠️ READ §8 FIRST — particularly §8.6.** Same-day 2nd-round red-team results materially changed the entire portfolio: HospitalStaff-API killed (€120K returns to reserve), MedAdherence-PIS re-spec'd a second time to a buy-side play (MedAdherence-RWE), and a follow-on 2nd-round review of the 9 morning-filter-survivors produced **9 of 9 KILL verdicts**. Catalog went 14 → 4 ideas. Only the funded MedAdherence-RWE survived intensive scrutiny. Funded Phase 0 commit = **€40K**, reserve = **€160K**. The body of this memo (§§1-7) is preserved as the morning's reasoning; §8 reflects the actual decision state.

---

After 9 consecutive adversarial reviews of the catalog's top-conviction ideas (6 PASS, 3 REVISE, 0 PROCEED-clean), a consistent failure pattern emerged: **products-against-incumbents lose in regulated EU/MENA verticals because the system-of-record incumbent (Veeva, IQVIA, ValGenesis, Aya, RLDatix, ZenHR, Greek PIS vendors, NHS framework holders) ships AI inside their validated stack 12-24 months before the challenger's Phase 0 gate.** This memo re-shapes the portfolio accordingly.

---

## 1. Is the catalog's underlying thesis broken?

**Yes.**

**New thesis** (one sentence): *T-Life builds infrastructure that incumbents — Veeva, IQVIA, ValGenesis, Aya, RLDatix, ZenHR, Greek PIS vendors, NHS framework holders — cannot or will not build themselves, and sells it to them, not against them.*

The old shape was "captive design partner → vertical AI SaaS → unseat incumbent." That shape lost 9/9 because in every regulated vertical we picked, the system-of-record incumbent shipped AI inside their validated stack 12-24 months before our Phase 0 gate. **Design-partner advantage doesn't beat procurement-gravity advantage.**

---

## 2. Three Phase 0 bets, one deeper bet, or wait?

**Fund ONE deeper infrastructure thesis.** Not three. Not zero.

Defense:

- The 3-bet plan was sized for **independent risk** (uncorrelated theses, parallel founder pipelines). The red-team confirmed the risks are **correlated** — same buyer-channel mismatch, same incumbent AI release cycle, same procurement foreclosure. Three bets against one root cause is one bet wearing three costumes.
- Founder pipeline of 3 simultaneous A-tier recruits in 2 weeks (PHASE0 §6 risk #1) was already the binding constraint. Collapsing to one bet relaxes it.
- "Wait" is wrong because the incumbent-AI window is closing, not opening. Veeva Vault AI Agents Quality (April 2026) + Crossix Vault AI (Dec 2025) tell us the right infrastructure overlays must be in market in 2026-2027 or never.
- One thesis at €175-204K Phase 0 budget is the right size for a single conviction shot; three at the same total dilutes each kill test below decision-grade.

---

## 3. Which 1-2 alt-theses are genuinely investable?

### Investable #1: HospitalStaff → credential-portability API to Aya/Doctari/RLDatix/Patchwork

Why specifically this one:

- **Buyer is named and counted** (4 firms post-consolidation, all with active M&A budgets — Aya bought Locum's Nest June 2025, exactly the kind of bolt-on they buy again).
- **EU Directive 2005/36 + 2013/55 cross-border recognition mechanics are public, codified, and not Aya's core competence** — they bought UK rota; they didn't buy EU credentialing. 2-3yr build for them = our 12-month window.
- **Founder profile is recruitable in <6mo**: ex-Locum's Nest / ex-Patchwork / ex-NHS Workforce Alliance engineers exist in London. Already scoped in current PHASE0.md §4.3.
- **Kill tests resolve in <16 weeks**: 1 named-acquirer LOI for €200-400K data-licensing/API pilot + technical proof of multi-jurisdiction credential pass-through on UK+DE+IT. No procurement-framework lock-out because we're not selling to NHS.

### Investable #2: MedAdherence → certified module inside SCRIPTA / PharmaSoft / Farmakon at €10-30/pharmacy/mo rev-share

Why:

- **Three named buyers, all Greek, all reachable through ELPEN/WinMedica relationships** — finally a place where the family's actual relationships convert.
- **PIS vendors are technically thin** — their AI roadmap is zero; they will white-label, not build.
- **Kill test is a single signed rev-share LOI** with one of the three within 12 weeks. Binary, cheap (<€25K), decisive.

### Explicitly NOT investable in <6 months:

- **Aletheia GxP alt-thesis** (Vault Training overlay) — requires Veeva commercial relationship T-Life does not have and cannot manufacture
- **RegulaFlow alt-thesis** (ProPharma/NNIT white-label) — same problem at the agency layer
- **Launchbase alt-thesis** (Vault-CRM overlay) — same problem squared

---

## 4. Reframe the Tryfon unfair edge

The edge is **not** "captive pharma design partner for vertical AI."

The edge is **regulated-distribution gravity in the eastern Mediterranean and the Gulf**:

- WinMedica reaches every Greek pharmacy
- ELPEN reaches every Greek prescriber and the EOF
- Tripoli HPAPI gives a seat at every EU GMP CDMO conversation
- Elnova Dubai opens GCC pharma-distribution doors
- Tryfon Fleet + ALTP tenancy give shipping/industrial reach

That network is a **distribution and certification asset for other people's software, and a regulatory-data asset for incumbent platforms** — not a Trojan horse for our own vertical SaaS. The right exit is selling infrastructure, data licensing, or a certified channel position into a Veeva / IQVIA / Aya / SCRIPTA — at 4-8× revenue, not building toward a competing platform that gets crushed at €10M ARR.

---

## 5. Concrete 6-month capital allocation

| Action | Amount | Detail |
|---|---|---|
| **Fund HospitalStaff-API (credential-portability infrastructure)** | **€120K Phase 0** | Re-spec to API-to-acquirer thesis, not Trust-pilot thesis. Kill tests: (a) 1 paid scoping engagement from Aya/RLDatix/Doctari/Patchwork by Week 10 at ≥€50K; (b) technical proof UK+DE+IT credential pass-through on 20 real placements by Week 14; (c) signed term-sheet for €200-400K data/API license OR acqui-hire conversation initiated by Week 18. **Kill if (a) or (c) fails.** |
| **Fund MedAdherence-PIS-module (Greek pharmacy rev-share)** | **€40K Phase 0** | Single kill test: signed rev-share LOI with SCRIPTA, PharmaSoft, OR Farmakon at €10-30/pharmacy/mo by Week 12. **Kill if zero LOIs.** Uses ELPEN/WinMedica relationships directly — no founder recruit needed beyond a fractional Greek BD lead. |
| **Suspend** Aletheia GxP, GCCNationalize, original HospitalStaff Trust-pilot, RegulaFlow, Launchbase | **€0** | Move to `catalog-cuts.ts` with red-team rationale. Do not run Phase 0 in current form. |
| **Reserve** | **€40K** | Founder-search + legal + AI Act opinion for the 2 funded bets |
| **Total 6-month Phase 0 commit** | **€200K** | vs €204K original — same envelope, one bet of conviction + one bet of distribution |

### The 30 un-red-teamed catalog entries

Apply one filter before any further Phase 0 spend:

> **"Does this sell infrastructure to an incumbent system-of-record, or does it try to replace one?"**

Auto-archive any entry that fails the filter. The 9/9 evidence base is sufficient to act on the prior without re-litigating each one. Expect ~20 of 30 to fail; the surviving ~10 become the next-quarter pipeline.

### Decision gate (Week 18)

- If **HospitalStaff-API** validates: raise €2-3M seed targeting healthcare-staffing strategics as the explicit acquirer set (not generalist Atomico/Insight)
- If **MedAdherence-PIS-module** validates: fund directly off T-Life balance sheet at €500K-1M — it never needs a VC round

### What this memo refuses to do

- Fund three theses that share one failure mode
- Wait while Veeva closes the door on the eastern-Med pharma infrastructure window

---

## Decision log

- 2026-05-16 — PHASE0.md drafted with 3-bet portfolio: Aletheia GxP + GCCNationalize + HospitalStaff
- 2026-05-20 — 9 adversarial reviews completed; all top-3 picks materially weakened; pattern across 9/9 reviews is consistent
- 2026-05-21 morning — This memo. Portfolio re-shaped to 2 infrastructure bets totalling €160K Phase 0 deployment + €40K reserve
- 2026-05-21 morning — Executed: catalog cut from 39 → 14 ideas (25 archived); HospitalStaff re-spec'd to HospitalStaff-API; MedAdherence re-spec'd to MedAdherence-PIS
- 2026-05-21 evening — 2nd-round red-team on both re-spec'd bets surfaced material kill vectors. See §8 below.
- **PHASE0.md is superseded.** Retained as historical record of the pre-red-team plan.

---

## 8. §8 ADDENDUM — 2nd-round red-team results (2026-05-21 evening)

Same-day adversarial review of both re-spec'd Phase 0 bets to validate the new shapes before founder recruitment. Both came back with material findings.

### 8.1 HospitalStaff-API → **KILLED**

Verdict: **REVISE** with three independent kill vectors. Decision: **kill the bet entirely.** Moved to `catalog-cuts.ts`. €120K returns to reserve.

Kill vectors:

1. **Buyers already build it.** Aya Global Talent UK office credentials 5,000+ international placements in-house pre-acquisition; RLDatix acquired Allocate in Dec 2025 and explicitly markets "only platform combining workforce management with credentialing." The load-bearing assumption "consolidators can't economically build credential portability" is empirically false in 2026 — they are building, or have built.
2. **EUDI Wallet statutory clock.** eIDAS 2.0 Implementing Acts 2025 mandate healthcare-professional EAA issuance by every member state by Dec 2026 and mandatory relying-party acceptance by Dec 2027. The "low likelihood" of a public-good EPC API in the preMortem was wrong — the API is legally mandated and inside the Phase-0 + seed window.
3. **Annex V auto-recognition.** EU sectoral health professions (doctors, nurses, midwives, dentists, pharmacists) get **automatic recognition** under Directive 2005/36/EC Annex V. The "verification data moat" is a thin administrative-workflow wrapper, not a defensible data product.

Unit economics cap: 4 named buyers × realistic €200-400K = **€1.2M ARR ceiling** with 3-of-4 logos. €120K Phase 0 + €300-600K member-state legal mapping for a market that maxes at €3-5M ARR is wrong-shape for venture.

Alternative thesis offered by the red-team — **pivot to EUDI relying-party integration layer** (SaaS sold to NHS Trusts, Kliniken, staffing platforms ahead of Dec-2027 mandatory-acceptance deadline) — is a fundamentally different bet. Not pursued in this catalog cycle; flagged for re-evaluation if the right founder surfaces.

### 8.2 MedAdherence-PIS → **MedAdherence-RWE** (3rd-version re-spec)

Verdict: **PROCEED-WITH-CAVEATS** with one structural correction. Decision: **adopt the buy-side reframe verbatim** and ship a third spec.

Material finding: the morning re-spec's "3 independent PIS-vendor buyers" framing was already invalid. **Farmakon is not an independent vendor** — it is a product line of Epsilon CSA, a wholly-owned subsidiary of EPSILON NET (CSA acquired 2022 €2.73M; LAVINET Jan 2024 €184K; Galaxy Pharma absorbed via the €18.05M SingularLogic SPA). EpsilonNet now runs >50% of Greek pharmacy desktops (~5,200 of ~10,400). The "3-vendor" motion collapses to a monopsonist negotiation against a listed consolidator with a fresh sub-€200K M&A track record on competing codebases.

CGM PRESCRIBE (2025 Surescripts White Coat winner) compounds the pattern — the largest EU PIS vendor BUILDS adherence natively, not licenses it.

Adopted alternative thesis: invert from sell-side SaaS to buy-side data play.

- **Phase 0 (€40K, Week 12 binary kill):** Signed PAID ELPEN or Pharmathen RWE/adherence data contract ≥€50K. Cash, not LOI. Second kill test in parallel: ≥2 non-Epsilon tail PIS vendors are acquirable at ≤€5M EV with deliverable ownership terms by Week 14.
- **Phase 1 (€2-5M from T-Life balance sheet, Month 3-12):** Acquire 1 non-Epsilon tail PIS vendor at €2-5M EV. Data pipe live across acquired vendor's 800-2,500 pharmacy seats. Second branded-molecule cohort with ELPEN.
- **Phase 2 (Month 12-36):** €2-5M ARR steady-state from acquired SaaS rev + RWE contracts. Off-balance-sheet. Never raises VC.

Why this works for T-Life specifically:

- ELPEN is the natural Phase 0 anchor (same family, same building, paid contract not LOI).
- T-Life Capital balance sheet at €2-5M is exactly sized for the acquisition — no other portfolio idea has this tight a fit between asset edge + capital structure + execution capability.
- EpsilonNet's roll-up has compressed independent-tail PIS valuations (LAVINET sold for €184K Jan 2024); 2-4 acquisition targets sit in the €2-5M EV range right now.
- WinMedica's leverage converts from soft co-marketing weight (the morning re-spec's framing) to **hard acquisition-target sourcing** — a real and durable edge.

Founder profile changes: from "pharma SaaS BD lead" → "M&A operator + RWE epidemiologist." Smaller, more recruitable archetype.

### 8.3 Net funded portfolio (revised)

| Action | Amount | Detail |
|---|---|---|
| **Fund MedAdherence-RWE** | **€40K Phase 0** | Two binary kill tests by Week 14: (1) signed paid ELPEN/Pharmathen contract ≥€50K, (2) ≥2 acquirable non-Epsilon tail PIS vendors at ≤€5M EV with willing-seller signals. **Both must pass.** Phase 1 = €2-5M T-Life balance-sheet acquisition on validation. |
| **Kill HospitalStaff-API** | **−€120K** | Returns to reserve. Killed at the desk before any founder recruit spend, not after a Phase 0 burn. |
| **Reserve** | **€160K** | €40K original reserve + €120K from HospitalStaff kill. Available for: (a) EUDI relying-party pivot if founder surfaces; (b) MedAdherence Phase 1 top-up; (c) one new infrastructure bet from the surviving 12 catalog entries if it converts to an infrastructure-to-incumbents framing. |
| **Total 6-month Phase 0 commit** | **€40K** | vs €200K in §5 above. The 2nd-round red-team prevented a €120K founder-search + Phase 0 burn on a bet whose load-bearing assumption was empirically false. |

### 8.4 What the 2nd round bought us

The 2nd-round red-team cost ~€0 (two parallel agent runs, ~4 minutes wall-clock, ~€2 in API calls) and saved €120K + 6 months of founder-search effort by killing HospitalStaff-API before commitment. The same review materially improved the MedAdherence shape — converting a license-into-monopsonist play into a balance-sheet acquisition play that actually matches T-Life's capital structure.

**Discipline going forward**: every Phase 0 re-spec must be 2nd-round red-teamed before founder recruitment starts. The same-day cycle works.

### 8.5 Decision gate (Week 14)

- If **MedAdherence-RWE** validates both kill tests: deploy €2-5M from T-Life balance sheet for tail-PIS acquisition; no VC round needed.
- If either fails: kill cleanly. Total burn = €40K. Reserve grows back to €200K and the next bet draws from the surviving 12 catalog entries or net-new sourcing.

---

## 8.6 — Filter-survivor 2nd-round red-team (2026-05-21 night): 9 of 9 KILLED

After the funded-bet decisions in §8.1-§8.5, the 9 catalog entries that passed the morning's "infrastructure-to-incumbents" filter but had not been adversarially reviewed were 2nd-round red-teamed in parallel. **Every single one died.**

| Entry | Verdict | Deal-killer (one-line) |
|---|---|---|
| **altp-techshift** | KILL | Greek labor reality is shortage not displacement; RRF/Greece 2.0 funding expires Aug 2026 before Month-6 milestones; ALTP incubator doesn't open until Q1 2026. |
| **olaf-trace-eu-funds** | KILL | EC's "corporate Arachne" (COM(2025)546 + SWD(2025)197) is being built as the integrated EU anti-fraud IT system with UBO/EDES/SUMMA/IMS interoperability — supplied free to the named buyer offices under mandatory CPR 2021/1060 data provision. |
| **pharma-kickback-sentinel** | KILL | IQVIA Transparency Reporting (48 countries incl. Greece), Veeva + BMI SYSTEM NAYA, MediSpend (dedicated Greek product page), Qordata all ship EFPIA transfer-of-value + HCP anomaly detection as productized modules at 5-10 years tenure. |
| **shipping-sanctions-tracer** | KILL | Lloyd's List Intelligence Seasearcher ARC + Evidencing Findings shipped; Windward recapitalized by FTV at $280M Mar 2025; Kpler vertically consolidated the AIS+SAR layer with Spire Maritime ($233.5M Apr 2025) + MarineTraffic + FleetMon. |
| **agecare-compliance** | KILL | Two of three load-bearing Greek regulators misidentified (KEDASY is special-ed not elder-care; Law 5039/2023 is the Tempi transport law). KIFI operator count ~5× inflated against primary sources (~200-270 actual). Why-now and €10M ARR math both unsupportable. |
| **pharmadataforge-llm-training** | KILL | Veeva ships native AI Agents + Direct Data API into Vault across Safety/Quality/Clinical/Regulatory through 2026 (squeeze from below); Claude for Life Sciences, GPT-Rosalind, Coefficient Bio acquisition, Clarivate-Anthropic MCP from above. Middle layer foreclosed. |
| **porthos-shipping-llm-platform** | KILL | Veson IMOS X Claims CoCaptain (May 2025) is a domain-specific maritime LLM trained on charter party terms, Statements of Facts, laytime clauses — embedded in the IMOS platform Greek shipowners already run. Incumbent ate the exact wedge with proprietary data Porthos can't legally access. |
| **mobivisa-employer-permits** | KILL | Localyze → Boundless acquisition Oct 2025 destroyed the named wedge. Deel + Remote Mobility + Pebl/Vialto + Fragomen Connect all ship native visa lifecycle. 70% cycle-time claim is impossible (bottleneck is sovereign queue: IE 9-11 wk, DE up to 3mo, EU Single Permit cap 90d). |
| **diaspora-return** | KILL | Greek Ministry of Labor already runs reBrainGreece via Crowdpolicy — ESCO-coded jobs, AI matching, free for employers, active diaspora fairs in NYC/Stuttgart/London. Named anchor buyer IS the incumbent. Plus tax-incentive corridors weakened in 2024 (NHR closed, Impatriati cut 50%). |

### 8.7 Methodology lesson

**The morning "infrastructure-to-incumbents" filter is a useful necessary condition but not a sufficient one.** It is good at archiving obvious SOR-replacement plays (the 25 catalog cuts on 2026-05-21 morning) but cannot validate "passes." Every survivor either (a) named a buyer that turned out to be the incumbent doing the building, or (b) targeted a data/regulatory niche that an SOR vendor or sovereign system shipped or announced in the last 12 months, or (c) rested on a load-bearing fact that turned out to be factually wrong (agecare-compliance's regulator confusion; altp-techshift's labor-supply inversion).

**Discipline going forward:** every entry must be **deeply adversarially red-teamed** before being included in any portfolio narrative. The "filter screened → ship" pipeline produced a 0-for-9 hit rate. The cost was ~€20 in API spend and ~15 minutes wall-clock — the value was avoiding ~€500K-1M of Phase 0 + founder-recruit burn on theses whose load-bearing assumptions were already empirically dead.

### 8.8 Catalog state after 8.6

**Catalog: 4 surviving ideas.**

| ID | Title | Status |
|---|---|---|
| `longevity-pharmacy-protocol` | LongevityRx Pharmacy Protocol | Prior red-team PASS (2026-05-16) — held through reshape. |
| `sme-bookkeeping-agent` | SME Bookkeeping Agent | Prior red-team PASS (2026-05-16) — held through reshape. |
| `pawmetric-pet-health` | PawMetric Pet Health | Prior red-team PASS (2026-05-16) — held through reshape. |
| `medadherence-pharmacy` | **MedAdherence-RWE** | **FUNDED Phase 0 €40K.** v3 spec, ma-k2 reshaped against tail-PIS research. |

**Killed/archived from morning portfolio:** 34 entries (25 from morning filter + 1 HospitalStaff-API + 9 filter-survivors after 2nd-round).

**Cuts file (catalog-cuts.ts):** 76 total entries documenting reasoning for each cut.

**Funded Phase 0 commit:** **€40K** (MedAdherence-RWE only).
**Reserve:** **€160K** (€40K original + €120K HospitalStaff kill).
**Catalog 3 prior-PASS bets** are unredone; recommend they get 2nd-round red-teamed too before any further capital allocation. None are currently in the funded pipeline.

### 8.9 Honest read

Across 5 days and 3 rounds of adversarial review, the catalog went **57 → 39 → 14 → 13 → 4 ideas**. The only thesis that survived intensive scrutiny is MedAdherence-RWE — and even that one had to be re-spec'd three times (v1 → v2 → v3) and its kill tests reshaped after market research. **The 9/9 filter-survivor kill rate is the single most important data point in the entire exercise**: most "discovered B2B opportunities" do not survive an honest look at the 2024-2026 incumbent shipping cadence. The right portfolio is not bigger and broader — it is smaller, deeper, and structurally aligned with capital you actually control (in this case, T-Life balance-sheet acquisition rather than VC-shaped Phase 0).
