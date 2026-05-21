# T-Life Portfolio Re-Shape Memo

**Date:** 21 May 2026
**To:** Tryfon family principals
**Re:** 9/9 red-team pattern, catalog re-shape decision
**Status:** Supersedes `PHASE0.md` (preserved for historical record)

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
- 2026-05-21 — This memo. Portfolio re-shaped to 2 infrastructure bets totalling €160K Phase 0 deployment + €40K reserve
- **PHASE0.md is superseded.** Retained as historical record of the pre-red-team plan.
