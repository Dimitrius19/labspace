# Phase 0 Execution Plan — 3-Bet Portfolio

> **SUPERSEDED 2026-05-21 by [`PORTFOLIO_RESHAPE.md`](./PORTFOLIO_RESHAPE.md).**
> Retained as historical record of the pre-red-team plan. After 9 consecutive adversarial reviews (6 PASS, 3 REVISE, 0 PROCEED-clean), the 3-bet portfolio was collapsed to 2 infrastructure-to-incumbents bets (HospitalStaff-API + MedAdherence-PIS-module) totalling €160K Phase 0 + €40K reserve. The three bets below — Aletheia GxP, GCCNationalize, and the original HospitalStaff Trust-pilot framing — are all suspended pending re-spec.

**Prepared:** 16 May 2026
**Catalog state at PR:** [`Dimitrius19/labspace#6`](https://github.com/Dimitrius19/labspace/pull/6) — 39 ideas at v2 depth, 100+ sourced assertions, 41 archived cuts.

The 39-idea catalog crossed the decision-grade threshold after two validation passes (78 assertion patches) and one strategic re-evaluation. This document is the unified Phase 0 plan for the three theses that survived: **Aletheia GxP**, **GCCNationalize**, and **HospitalStaff**.

---

## 1. The 3 Bets at a Glance

| # | Idea | Composite | P(€10M ARR 36mo) | Wedge |
|---|---|---|---|---|
| 1 | **Aletheia GxP** | 3.95 | 25% | Captive ELPEN/Tripoli design partner + EU GMP Annex 1 forcing function + Art. 6(3) 36-48mo moat against horizontal AI |
| 2 | **GCCNationalize** | 3.85 | 25% | Non-discretionary regulatory spend (UAE Emiratization 10% by Dec 2026, Saudi Nitaqat penalties); Big4-fork risk gated by kill-test gn-k3 |
| 3 | **HospitalStaff** | 3.30 | 22% | 4.1M WHO Europe shortfall by 2030; 55%+ NHS agency-premium loaded cost; multi-jurisdiction credential wedge vs UK-locked incumbents |

**Geographic allocation:** 2 EU (Aletheia + HospitalStaff) / 1 MENA (GCCNationalize) — revised down from earlier 70/30 MENA call after MENA-validation quality came back materially weaker than EU in pass 2.

**Reputation-stake single pick (if forced to one):** **Aletheia GxP.** Cannot be built without owning a pharma manufacturing operation; T-Life leverage is structural not relational.

---

## 2. Unified Phase 0 Budget

| Line | Aletheia | GCCNationalize | HospitalStaff | Shared | Total |
|---|---|---|---|---|---|
| Kill test #1 | €20K | €6K | €8K | — | €34K |
| Kill test #2 | €5K | €18K | €30K | — | €53K |
| Kill test #3 | €10K | €5K | €12K | — | €27K |
| **Kill test subtotal** | **€35K** | **€29K** | **€50K** | — | **€114K** |
| Fractional founder/advisor stipends (4 mo × €5K) | — | — | — | €60K | €60K |
| Legal/IP/incorporation × 3 entities | — | — | — | €20K | €20K |
| Cloud/infra/tooling (shared dev stack) | — | — | — | €10K | €10K |
| **Phase 0 total** | | | | | **€204K** |

T-Life can co-fund ELPEN/Tripoli design-partner labor in-kind, which reduces external cash to ~€175-185K.

---

## 3. 18-Week Timeline

| Weeks | Aletheia GxP | GCCNationalize | HospitalStaff |
|---|---|---|---|
| 1-2 | Founder recruit + Tripoli LOI signed | Founder recruit + 3 Big4 GCC labor-practice intros | Founder recruit + NHS Innovation Hub contact + Klinikum-group HR lead |
| 3-6 | al-k1 build: Llama 3.3 70B fine-tune on Tripoli batch records | gn-k1: 20-employer pitch tour Riyadh | hs-k1: NHS Trust + Klinikum pilot LOI conversations |
| 5-10 | al-k1 benchmarking; al-k3 Art. 6(3) regulator review starts | gn-k2 quota-engine build (3 employer historical-data sets) | hs-k3 cost-per-shift modeling with 1 NHS Trust |
| 8-12 | al-k2 external pilot LOI (Vianex/Pharmathen/DEMO) | gn-k3 Big4 partnership LOI conversations | hs-k2 multi-jurisdiction credential infra build |
| 13-16 | al-k1 results synthesis; pilot deployment Tripoli | gn-k2 results; Big4 LOI close | hs-k2 cross-border placement test (1 month live) |
| 17-18 | Go/no-go gate | Go/no-go gate | Go/no-go gate |

Three independent tracks; weekly all-hands review (1hr); each track has separate go/no-go criteria.

---

## 4. Per-Idea Phase 0 Specs

### 4.1 Aletheia GxP — €35K, 12 weeks, P(proceed): 70%

**Why this bet:** Only catalog entry where T-Life leverage is structural-not-relational. Cannot be built without owning a pharma manufacturing operation. ELPEN regulatory team + Tripoli HPAPI 416-equipment training matrix are the moat. EU GMP Annex 1 (Aug 2023) + EU AI Act Art. 6(3) self-classification create a non-discretionary regulated-buyer + 36-48 month defensibility window against Workera/Eightfold/horizontal AI.

**Founder profile:**
- Technical co-founder: ex-Veeva Vault / ex-Aizon / ex-Kneat with pharma validated-software experience; comfortable with GAMP5 Cat 4/5 documentation
- Commercial co-founder: ex-VP Quality at a mid-size pharma (Vianex / Pharmathen / DEMO / Lavipharm scale) or ex-ISPE/PDA leadership
- Regulatory affairs advisor (fractional): ex-EOF/EMA inspector or USDM/PharmaLex senior

**Pre-launch checklist (must be done before kill tests start):**
- [ ] Tripoli design-partner LOI signed (informal, not contract)
- [ ] ELPEN QP-level engagement secured (1 hour weekly product input)
- [ ] USDM Life Sciences or PharmaLex scoping call complete
- [ ] First fact-check of al-a1 through al-a8 assertions against EUR-Lex source URLs

**Kill tests:**
- **al-k1** (€20K, 10 wks): Llama 3.3 70B fine-tune on Tripoli batch records achieves ≥85% accuracy on Annex 1 §7.4-7.7 competency assessment vs QA-reviewer ground truth on 30+ records. *Kill: <70% accuracy OR QA rejects ≥30% of outputs. Validate: ≥85% AND 'audit-defensible with minor edits' rating.*
- **al-k2** (€5K, 12 wks): 1 external pharma manufacturer signs paid pilot LOI at €100-250K ACV. *Kill: 0 advance past first call. Validate: ≥1 signed + 2 advanced to term-sheet.*
- **al-k3** (€10K, 8 wks): EU AI Act Art. 6(3) self-classification confirmed by AI Act consultant + EMA-adjacent regulatory reviewer. *Kill: Either recommends high-risk classification (€1-3M conformity burden). Validate: Both confirm Art. 6(3) path with named architectural requirements.*

**Go/no-go gate (Week 12):**
- ≥2 kill tests validate → proceed to seed-stage build
- 1 kill test validates + 1 unclear → 6-week extension
- 0 kill tests validate → kill thesis

**Realistic seed plan if proceed:** €1.5-3M Marathon VC / VentureFriends / Speedinvest Health / Heal Capital syndicate at €8-12M post; sized for 18-month runway to PMF signal.

---

### 4.2 GCCNationalize — €29K, 14 weeks, P(proceed): 60%

**Why this bet:** Non-discretionary regulated spend with multi-million-dirham penalties (UAE AED 6K/month per missing Emirati + AED 1K/yr escalation; Saudi Nitaqat Red-tier triggers Etimad/visa freeze). Current competitive set is Excel + Big4. Cross-cutting red-team flagged Big4-fork as the binary risk — gated by kill-test gn-k3 which is the make-or-break.

**Founder profile:**
- Technical co-founder: ex-Saudi HR-tech (PaySpace / Bayzat / Sarwa) with Qiwa/MUDAD API experience
- Commercial co-founder: ex-Big4 GCC labor practice (PwC People & Organisation / KPMG GCC HR / EY workforce) — this profile is binary: if you can't recruit one, the thesis is in trouble
- Regulatory advisor (fractional): ex-Saudi MHRSD or UAE MoHRE

**Pre-launch checklist:**
- [ ] 3 Big4 GCC labor-practice partner-level intros via Elnova network
- [ ] 5 Riyadh-based PIF-affiliated employer HR contacts identified
- [ ] Qiwa + MUDAD API documentation reviewed (technical feasibility)
- [ ] Saudi Nitaqat penalty schedule + UAE Emiratization fines validated against current MHRSD/MoHRE published rates

**Kill tests:**
- **gn-k1** (€6K, 12 wks): 5 Riyadh-based mid-size employers (50-500 nationals) sign €100-300K ACV pilot. *Kill: <2 signed. Validate: ≥3 signed + named-decision-maker timeline.*
- **gn-k2** (€18K, 10 wks): Quota-tracking + vacancy-suitability matching engine ≥90% accuracy vs ground-truth audit on 3 employers' 24-month historical data. *Kill: <75% accuracy OR >€50K to build. Validate: ≥90% + <€30K marginal cost per onboarding.*
- **gn-k3** (€5K, 14 wks): Big4 reseller or co-sell LOI from PwC/KPMG/EY GCC labor practice. *Kill: 0 Big4 advance past initial meeting (= Big4 will fork). Validate: ≥1 signed reseller/co-sell with revenue-share.*

**Go/no-go gate (Week 14):**
- All 3 validate → proceed
- gn-k3 fails but gn-k1+gn-k2 validate → 8-week pivot: re-target SMB-direct pricing tier under Big4 radar
- gn-k1 OR gn-k2 fails → kill thesis

**Realistic seed plan if proceed:** €1-2M from MEA-focused funds (Wamda / BIM Capital / Vy Capital MENA) at €6-10M post; the Big4 partnership track determines path (co-sell vs land-and-expand).

---

### 4.3 HospitalStaff — €50K, 18 weeks, P(proceed): 55%

**Why this bet:** Catalog's biggest demand-side upgrade from validation pass 2 — EU shortfall is 4.1M (WHO Europe 2030) not 1M; NHS agency-staff premium is 55%+ loaded not 30-40%. The multi-jurisdiction credential wedge remains real even after Aya acquired Locum's Nest — Aya needs 2-3 years to ship EU credential infrastructure. Window is now.

**Founder profile:**
- Technical co-founder: ex-Locum's Nest / ex-Patchwork Health / ex-NHS Workforce Alliance with multi-jurisdiction healthcare ambitions
- Commercial co-founder: ex-NHS-Trust HR director or ex-German Klinikum operations leader
- Clinical advisor (fractional): MRCP/MRCGP-credentialed + EU 2005/36 expertise

**Pre-launch checklist:**
- [ ] 2 NHS Trust Innovation Hub contacts (NHS Workforce Alliance procurement entry-point)
- [ ] 1 German hospital-group HR director identified (Helios, Asklepios, Sana, RHÖN-KLINIKUM scale)
- [ ] EU Directive 2005/36 + 2013/55 cross-border-recognition mechanisms reviewed for 3 target jurisdictions
- [ ] Aya Healthcare EU-expansion intent investigated via public + LinkedIn signals

**Kill tests:**
- **hs-k1** (€8K, 16 wks): 1 NHS Trust + 1 German Klinikum sign €100-300K pilot LOI. *Kill: <1 signed in 16 weeks. Validate: ≥2 signed.*
- **hs-k2** (€30K, 18 wks): Multi-jurisdiction credential recognition + rota integration operational across UK + DE + IT; 20 real cross-border locum placements processed. *Kill: Recognition pathway fails in any jurisdiction OR placement-failure rate >5%. Validate: All 3 jurisdictions operational; <2% failure.*
- **hs-k3** (€12K, 14 wks): Cost-per-shift to NHS Trust ≤90% of agency-staff premium baseline over 90-day pilot. *Kill: Cost ≥agency baseline. Validate: ≤90% AND clinical-leader NPS ≥+30.*

**Go/no-go gate (Week 18):**
- All 3 validate → proceed
- hs-k1 + hs-k3 validate but hs-k2 fails → consider UK-only narrower thesis (services-business ceiling, not venture)
- hs-k1 fails → kill thesis (no buyer = no business)

**Realistic seed plan if proceed:** €2-4M Insight Partners / Atomico / Heal Capital / Speedinvest Health at €10-15M post; healthcare-SaaS multi-jurisdiction story is investable but slower than pure consumer-SaaS.

---

## 5. Shared Overhead — 4-Month Pool

| Item | Detail | € |
|---|---|---|
| 3 fractional founder/advisor stipends | €5K/mo × 4 mo × 3 founders | 60K |
| Legal: 3 entity incorporations (Greek/UK/Estonian SE) | Standard IP assignment + cap table | 12K |
| Legal: 3 design-partner LOIs + 1 USDM scoping | — | 6K |
| Legal: AI Act Art. 6(3) framework opinion (shared cost) | — | 2K |
| Cloud + tooling | AWS Frankfurt + GitHub Enterprise + Linear + Notion | 10K |
| **Total shared** | | **90K** |

---

## 6. Cross-Bet Risks Tracked at All-Hands

1. **Founder pipeline**: 3 simultaneous founder recruits is the binding constraint, not capital. Without all 3 in seat by Week 2, kill tests slip. **Mitigation:** start founder hunt 2 weeks before this plan goes live.
2. **Aletheia design-partner exclusivity**: ELPEN/Tripoli must commit to single-vendor in their domain. If they want to hedge with a Veeva-AI bet too, the moat collapses. **Mitigation:** secure exclusivity language in Tripoli LOI.
3. **GCCNationalize Big4-fork**: If gn-k3 fails (no Big4 partner), the SMB-direct pivot is unproven. **Mitigation:** parallel-track SMB-direct pricing validation alongside Big4 BD in weeks 6-12.
4. **HospitalStaff Aya-acceleration**: If Aya announces EU expansion in next 6 months, multi-jurisdiction wedge erodes faster than thesis assumes. **Mitigation:** monitor Aya EU job postings monthly; pre-empt with first 2 NHS Trust signed pilots before Aya can ship.

---

## 7. Decision at Week 18

Three independent go/no-go gates run in parallel. Possible outcomes:

| Outcome | Action |
|---|---|
| All 3 validate | Fund 3 seed rounds (€5-9M total); 3 separate ventures |
| 2 validate | Fund 2 seed rounds; archive the third in catalog-cuts.ts with kill rationale |
| 1 validates | Fund 1 seed; pause Phase 1 deployment of T-Life capital and re-evaluate next-best catalog entry |
| 0 validate | Catalog hypothesis failed at this layer; return to the next-best 3 picks (Launchbase, RegulaFlow, CareStaff per composite ranking) |

**Sunk-cost trap to avoid:** if 2 kill tests on a single idea fail, that idea is dead — do not fund "extended diligence." Move capital to the survivors.

---

## 8. Appendix — Where to Find Each Asset

| Asset | Path |
|---|---|
| Full catalog data | `src/data/ideas.ts` |
| T-Life portfolio asset registry | `src/data/tlifeAssets.ts` |
| Catalog cuts audit log | `src/data/catalog-cuts.ts` |
| Methodology v2 type schema | `src/types/index.ts` |
| UI rendering of v2 fields | `src/components/IdeaDetail.tsx` |
| Memo print export | Cmd-P / Ctrl-P on any open idea panel |

---

*Phase 0 plan generated from the 39-idea v2 catalog state at commit `ccc8886` on branch `claude/ai-certification-research-6jmds`. To reproduce: open the three ideas in labspace, hit print, and you get the IC-grade per-idea memos.*
