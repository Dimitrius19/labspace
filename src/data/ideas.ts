import type { Idea } from "../types";

export const ideas: Idea[] = [
  {
    "id": "longevity-pharmacy-protocol",
    "title": "WellSpan",
    "ycCategory": "Healthtech / Longevity",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "DTC longevity protocol for Greece and the GCC — €30/mo biomarker subscription via Bioiatriki's 72 walk-in centres, supplements unbundled à-la-carte. No pharmacy commission, no novel at-home phlebotomy.",
    "description": "Working-age longevity-as-a-subscription has proven product-market fit in the US — Function Health reached ~200K members at $365/yr by May 2025 — but Europe is structurally unserved because Function relies on a Quest Diagnostics partnership it cannot port across the Atlantic. WellSpan addresses Greece, Cyprus and (in year 2-3) the GCC by partnering with Bioiatriki, which already operates 72 EOPYY-contracted diagnostic centres across Greece and Cyprus.\n\nThe model is deliberately stripped down vs the original pharmacy-distributed thesis (which the methodology-v2 red-team killed on Greek pharmacy-commission economics): €30/month subscription buys two quarterly biomarker panels (~12-15 actionable markers: Levine PhenoAge composite, ApoB, HbA1c, hs-CRP, fasting insulin, Omega-3 Index, etc.) drawn at the customer's preferred Bioiatriki centre, an algorithmic dashboard tracking change vs cohort and self-baseline, and an AI lifestyle coach. Supplements are unbundled — customers buy à-la-carte from any pharmacy, or via direct ELPEN/WinMedica drop-ship if/when ELPEN ships an EOF-registered SKU range — so the protocol is supplement-agnostic and supplement margin is upside not load-bearing.\n\nWhy this works where the pharmacy version did not: (i) no 25-30% pharmacy commission, restoring Y1 contribution margin; (ii) Bioiatriki's 72 walk-in centres replace a novel at-home phlebotomy workflow that has no EOPYY reimbursement precedent; (iii) the Bioiatriki partnership becomes the structural moat — they have the lab logistics, EOPYY contracts, and physician relationships no startup can replicate; (iv) DTC matches the Function Health playbook that has proven the working-age longevity-subscription model.\n\nGCC expansion in year 2-3 mirrors the model with Elnova Dubai relationships and a GCC lab partner.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Bioiatriki already operates 72 diagnostic centres in Greece and Cyprus with EOPYY contracts — the channel exists at scale. Greek working-age customers will accept walk-in collection; novel at-home phlebotomy was the wrong wedge. T-Life relationships into Bioiatriki (commercial partnership, not equity) accelerate the deal.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Italy, Spain, Portugal: similar regulatory frame but no Bioiatriki-equivalent partner; need a parallel lab deal per market. Year 3+."
      },
      {
        "market": "middle-east",
        "fit": "green",
        "note": "GCC expansion via Elnova Dubai + a GCC lab partner (Bin Sina, LIFE Healthcare diagnostics, or local equivalent). Year 2-3."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower per-capita disposable income on a €30/mo subscription; pursue opportunistically via Bioiatriki Cyprus centres for diaspora customers."
      }
    ],
    "stage": "evaluating",
    "tlifeAngle": "T-Life accelerates the Bioiatriki commercial partnership conversation (which is the real moat) via the family pharma network. The WinMedica and ELPEN angle is downgraded from 'integrated supply chain moat' to 'optional supplement drop-ship channel' — supplements are upside not load-bearing. Honest framing.",
    "tags": [
      "longevity",
      "biomarkers",
      "dtc-subscription",
      "function-health-analog",
      "bioiatriki",
      "agetech-adjacent",
      "trend-15-longevity",
      "trend-32-personalized-nutrition",
      "trend-3-elder-tech",
      "post-red-team-pivot"
    ],
    "addedDate": "2026-05-16",
    "notes": "Trend match: 36-list #15 (longevity biomarkers actively managed) + #32 (personalized nutrition based on blood work).\n\nPivot history: original thesis (pharmacy-distributed via WinMedica + ELPEN-formulated supplements) was red-team-reviewed and returned PASS — see redTeamFindings[0]. Greek pharmacy commission (~25-30%), novel at-home phlebotomy logistics, and ELPEN supplement COGS vs Lanes/Power Health all broke Y1 contribution margin. Current thesis (DTC via Bioiatriki walk-in centres, supplements unbundled) accepts the red-team's alternative thesis. The Bioiatriki partnership is the new load-bearing asset.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "Three converging factors. (1) Function Health hit ~200K paying members at $365/yr by May 2025, proving the working-age longevity-subscription model — but Function explicitly excludes EU because of Quest Diagnostics geographic limits. EU is wide open. (2) EU Regulation 2017/746 (IVDR; fully applicable 26 May 2022) created clearer compliance pathways for biomarker home-collection and CE-marked self-test devices. (3) Levine PhenoAge and GlycanAge have moved from research to commercial labs; commodity biomarker assembly at Bioiatriki / Affidea / InterBalkan lands at €80-120 per panel — productisable.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Bioiatriki LOI signed with per-panel cost and revenue split; first 200 paid DTC subscribers acquired via paid social + Bioiatriki centre signage; dashboard MVP with 12 markers; Y1 contribution margin >0 demonstrated."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "2,000+ subscribers across Greece/Cyprus, €0.7-1.2M ARR; AI lifestyle coach launched; first GCC lab partnership LOI; supplement à-la-carte revenue line >€100K (upside not core)."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "10K+ subscribers; €3-6M ARR; GCC launched via Elnova; female-specific protocol (peri/post-menopausal markers); proprietary 18-month biomarker dataset for protocol personalisation; evaluate Italy/Spain via parallel lab partners."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€800K",
      "capexRatio": "5% capex / 95% opex",
      "note": "DTC pivot drops the ELPEN supplement-formulation critical path (€150K) and inventory working capital. Main costs: Bioiatriki partnership BD, paid acquisition (€80-150 blended CAC), dashboard + AI coach engineering, regulatory advisor."
    },
    "competitors": [
      {
        "name": "Function Health",
        "type": "startup",
        "geography": "US (no EU operation)",
        "note": "~200K members by May 2025 at $365/yr. Explicit US-only via Quest. Closest model match; not a present EU threat but a 12-18 month watch."
      },
      {
        "name": "InsideTracker",
        "type": "startup",
        "geography": "US/EU",
        "note": "16 years old, still athlete-skewed, capped at $149/yr ultimate plan. Proof that the longevity-protocol category exists; also proof that EU TAM at higher ARPU is harder than the Function trajectory implies."
      },
      {
        "name": "Levels Health",
        "type": "startup",
        "geography": "US",
        "note": "CGM-led metabolic health; narrow product, no EU. Cautionary tale on COGS swallowing the subscription (pivoted away from $40/mo flat in 2024-25)."
      },
      {
        "name": "Bioiatriki direct (own-branded panel)",
        "type": "incumbent",
        "geography": "Greece/Cyprus",
        "note": "Largest single competitive risk: Bioiatriki could productise its own longevity panel. Strategy: lock in commercial partnership with exclusivity on personalised-protocol layer for 3-5 years."
      },
      {
        "name": "Local supplement brands (Lanes/Sarantis, Power Health)",
        "type": "incumbent",
        "geography": "Greece",
        "note": "Could license a dashboard and bolt-on biomarker partnership. Lower-probability competitive entry but plausible 18-24 month threat."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 3,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 2,
      "composite": 3.5
    },
    "ycRfsCorrelation": "YC wants longevity products built on biomarkers people actively manage (#15 in the May-2026 list). WellSpan post-pivot is the EU-compliant Function Health analog with Bioiatriki as the structural lab partner — drops the pharmacy channel that the methodology v2 red-team killed.",
    "tlifeAssetRefs": [
      "elpen",
      "winmedica",
      "elnova-dubai",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "ws-a1",
        "claim": "EU IVDR = Regulation 2017/746, fully applicable 26 May 2022",
        "source": "https://eur-lex.europa.eu/eli/reg/2017/746/oj",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ws-a2",
        "claim": "Function Health reached ~200K paying members at $365/yr by May 2025",
        "source": "https://sacra.com/c/function-health/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ws-a3",
        "claim": "Bioiatriki operates 72 diagnostic centres across Greece and Cyprus, EOPYY-contracted",
        "source": "https://bioiatriki.gr/en/group/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ws-a4",
        "claim": "Levine PhenoAge published mortality-prediction biomarker (Levine et al. 2018, Aging; Liu et al. 2018, PLOS Med)",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5940111/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ws-a5",
        "claim": "Greek pharmacy commission norm is 25-30% on OTC / food supplements (the load-bearing kill in v1)",
        "source": "[ESTIMATE — OECD Greek pharmacist margin data, ~4pp above EU average]",
        "status": "estimated",
        "lastChecked": "2026-05-16",
        "note": "Pivot removes pharmacy channel entirely; this assertion now informs why-not-pharmacy, not why-yes-pharmacy."
      },
      {
        "id": "ws-a6",
        "claim": "Bioiatriki commercial partnership LOI achievable in <6 weeks via T-Life network",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16",
        "note": "Validate via kill-test ws-k1-v2."
      }
    ],
    "killTests": [
      {
        "id": "ws-k1-v2",
        "hypothesis": "Bioiatriki will sign a commercial partnership for branded biomarker panel + revenue split at per-panel cost <€55",
        "experiment": "Direct engagement with Bioiatriki Business Development via T-Life network; target signed LOI",
        "costEur": 3000,
        "durationWeeks": 6,
        "killSignal": "No LOI in 6 weeks — fall back to Affidea or InterBalkan",
        "validateSignal": "LOI signed, per-panel cost ≤€50, exclusivity on personalised-protocol layer for ≥3 years"
      },
      {
        "id": "ws-k2-v2",
        "hypothesis": "Greek/Cypriot working-age customers will pay €30/mo for a DTC biomarker subscription with walk-in collection",
        "experiment": "Paid acquisition test (Meta/Google) targeting Athens, Thessaloniki, Limassol; landing page + Stripe checkout for €30/mo annual prepay; measure CPA and conversion",
        "costEur": 10000,
        "durationWeeks": 6,
        "killSignal": "CAC >€200 OR conversion <1.5% from landing page",
        "validateSignal": "CAC <€120 AND ≥3% landing-page conversion AND ≥100 paid sign-ups"
      },
      {
        "id": "ws-k3-v2",
        "hypothesis": "Y1 unit economics work without supplement margin: €30/mo × 12 = €360 ARPU; with quarterly panel COGS €50 × 2 = €100 + dashboard/ops €40 + CAC €120 = €260 cost; contribution margin €100 (~28%)",
        "experiment": "Build the actual cost stack and run a 6-month cohort to validate; measure churn",
        "costEur": 8000,
        "durationWeeks": 24,
        "killSignal": "Contribution margin <€60 OR Y1 cohort retention <50%",
        "validateSignal": "Contribution margin ≥€100 AND Y1 cohort retention ≥65%"
      }
    ],
    "preMortem": [
      {
        "cause": "Bioiatriki productises its own competing longevity panel without WellSpan — once we prove the demand, they realise they don't need the partner layer",
        "likelihood": "medium",
        "earlySignal": "Bioiatriki business-development response posture in kill-test ws-k1-v2: are they negotiating an exclusivity clause or pushing back?"
      },
      {
        "cause": "CAC is too high relative to €30/mo ARPU — paid acquisition burns through capital without compounding organic growth",
        "likelihood": "high",
        "earlySignal": "Kill-test ws-k2-v2 CPA result in weeks 4-6"
      },
      {
        "cause": "Levine PhenoAge / GlycanAge fad fades; consumer interest in biomarker subscriptions drops post-Function-hype",
        "likelihood": "low",
        "earlySignal": "Google Trends + Function Health renewals; monitor quarterly"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.12,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "Pivot improves probabilities vs v1 (25/10/45) by removing the pharmacy-commission killer and ELPEN supplement-build critical path. Function Health hit $50M ARR in 24 months in the US on a similar shape with Quest as the lab partner; Bioiatriki is the EU equivalent. The bear case is that Bioiatriki productises its own panel (the new failure mode) or that EU DTC CAC is too high — these are kill-tested in weeks 6-12 not at the 18-month point."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-16",
        "verdict": "pass",
        "dealKiller": "Pharmacy commission (~25-30% Greek norm) + biomarker COGS + ELPEN supplement build = near-zero Y1 contribution margin at €40-60/mo. Function works at $365/yr in US with NO channel haircut.",
        "patternMatches": [
          "Forward Health ($650M raised → $0, Nov 2024): physical-channel costs swallowed the subscription.",
          "Levels Health 2024-25 pivot: COGS swallowed the $40/mo subscription.",
          "InsideTracker (16 years old, still capped at $149/yr): EU/global TAM at this price point is smaller than 'Function did $50M ARR in 24 months' implies."
        ],
        "unitEconomicsConcern": "€480-720/yr ARPU minus 4× panels (€320-480/yr) minus supplement COGS minus CAC (€80-150) minus 25% pharmacy commission = €-10 to +€30 Y1 contribution margin. Structurally negative-margin before scale.",
        "loadBearingAssumption": "ELPEN food-supplement unit cost lands ≤90% of Lanes/Power Health. No public evidence supports this; pharma-grade GMP cost structure is typically HIGHER per unit than incumbent food-grade lines.",
        "alternativeThesis": "Drop pharmacy channel; go DTC + clinic-referral like Function did. Use Bioiatriki's 72 walk-in centres as collection points (kills novel EOPYY at-home phlebotomy AND 25% pharmacy commission), ship supplements directly to home, charge €30/mo for biomarkers-only and unbundle supplements à-la-carte."
      },
      {
        "date": "2026-05-16",
        "verdict": "proceed-with-caveats",
        "dealKiller": "(post-pivot) Bioiatriki productising their own competing longevity panel — they have the lab logistics and EOPYY relationships; once we prove demand, they can disintermediate. Mitigation: lock exclusivity on personalised-protocol layer for 3-5 years as part of the partnership LOI.",
        "patternMatches": [
          "Function Health + Quest (US): proves the lab-partner model works at scale.",
          "InsideTracker + LabCorp (US): same partnership structure, persisted 16 years."
        ],
        "alternativeThesis": "(none — this IS the alt thesis being adopted)"
      }
    ],
    "industry": "agetech"
  },
  {
    "id": "dg-studies-tooling",
    "title": "DG-Studies-Tooling",
    "ycCategory": "EU FWC AI Infrastructure",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "AI evaluation-augmentation toolkit licensed to existing EU Commission FWC primes (Ecorys, Ramboll, ICF, Technopolis, CEPS, CASE, ADE, Particip). Picks-and-shovels supplier to the consortia that already hold the references, FSC clearances, turnover, and 4-year cycle lock-in — but lack credible AI productization beyond Big-4 in-house tools they cannot access.",
    "description": "Born from the 2026-05-21 round-1 red-team kill of the original DG-Studies thesis (AI-native services-CRO targeting EU Commission Framework Contracts). The red-team found the prime-conversion path empirically blocked: Big-4 cannibalization is already underway in 2025-2026 (Deloitte Zora $840M AI-consulting run-rate, EY.ai shipping, managed-services pivot), FWC reference/turnover/FSC gates block Greek SME prime entry on €2M+ lots, AI Act Art. 50 disclosure (Aug 2026) erodes the 'hidden AI under partner rate' arbitrage, and subcontractor-to-prime conversion has no documented precedent at this scale.\n\nThe alternative thesis adopted verbatim: PIVOT to selling AI tooling TO the consortia, NOT against them. The 4-5 non-Big-4 FWC primes (Ecorys, Ramboll, ICF, Technopolis, CEPS, CASE, ADE, Particip) hold references + FSC + turnover + 4-year cycle lock-in, but lack credible in-house AI productization (Big-4's Zora/EY.ai are proprietary, won't license out). T-Life's Brussels EFPIA-adjacent reach opens 3-5 named primes faster than DG desk officers. Different buyer (consortium PM, not DG), different cycle (3-6 month B2B SaaS), different moat (EU-FWC-template-aware AI corpus + AI Act Art. 50 compliance layer the primes need but cannot afford to build de-novo). Sells at €200-500K/yr per consortium.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "4-5 named EU FWC primes (Ecorys NL, Ramboll DK, ICF US/EU, Technopolis BE, CEPS BE, CASE PL, ADE BE, Particip DE). EU Commission FWC market is ~€600M/yr DG studies spend; these consortia capture 60-80% of it.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "red",
        "note": "Not relevant — EU FWC-specific."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Greek-language MS-transposition work is a wedge but small TAM."
      },
      {
        "market": "balkans",
        "fit": "red",
        "note": "Not relevant."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Tryfon family Brussels reach via EFPIA-adjacent pharma policy contacts opens consortium PM/Head of Public Sector meetings at the 4-5 named primes that competitors cannot reach cold. Family balance sheet covers the 90-180-day EU payment cycle that would strain a pure-SaaS challenger. This is an infrastructure-to-incumbents bet — exactly the morning filter that the catalog reshape was built around.",
    "tags": [
      "infrastructure-to-incumbents",
      "eu-fwc-primes",
      "ai-act-art50-compliance",
      "picks-and-shovels",
      "brussels-network-edge",
      "phase0-funded"
    ],
    "addedDate": "2026-05-21",
    "notes": "Born from round-1 red-team of sourcing-batch-01 (verdict: revise). Original DG-Studies thesis (subcontractor-to-prime aspirant on €0.8-2.5M EC evaluation lots) was killed by 3 independent vectors: (1) Big-4 cannibalization underway in 2025-2026 not deferred; (2) FWC reference/turnover/FSC gates block Greek SME prime entry; (3) subcontractor-to-prime has no documented precedent at scale.\n\nAdopted the redTeamFindings[0].alternativeThesis verbatim: sell AI tooling TO the consortia as picks-and-shovels supplier. Different buyer (consortium PM), different cycle (3-6mo B2B SaaS), different moat. €200-500K/yr per consortium × 3-5 consortia = €0.6-2.5M ARR base case.\n\nFunded as 2nd Phase 0 bet alongside MedAdherence-RWE under the v2 studio mandate (see T_LIFE_VENTURE_STUDIO_THESIS.md §§8-11). Phase 0 commit €40K; 16-week binary kill on 2 paid pilots at €30K each with named non-Big-4 FWC primes.",
    "whyNow": "Three windows aligned: (a) Big-4 productization is ahead-of-schedule (Deloitte Zora $840M run-rate Q1-2026; EY.ai shipping; PwC ChatPwC; KPMG Clara) — the non-Big-4 primes feel competitive pressure RIGHT NOW; (b) AI Act Art. 50 disclosure mandate (in force Aug 2026) creates a compliance-pull for AI-augmented deliverables to EU institutions — primes must show machine-readable AI labeling and disclosure; (c) 2027-2028 FWC lot renewals begin tender prep mid-2026 — primes need AI capability stories for their bid submissions NOW.",
    "roadToMoat": [
      {
        "timeframe": "Phase 0 — Week 0-16",
        "milestone": "2 paid pilots at €30K each with named non-Big-4 FWC primes (target: Ecorys + ICF EU or Ramboll + Technopolis). Binary kill: signed POs or kill."
      },
      {
        "timeframe": "Phase 1 — Month 4-12",
        "milestone": "Convert 1 pilot to €200-500K/yr SaaS contract; second consortium in design-partner pipeline; AI Act Art. 50 disclosure layer + MS-transposition graph + stakeholder embeddings live."
      },
      {
        "timeframe": "Phase 2 — Month 12-36",
        "milestone": "3-4 of 5-8 named primes on contract; €1.5-2.5M ARR. Re-evaluate prime-conversion in 2029-2031 once tooling is embedded across 4+ consortia (the original DG-Studies thesis becomes a possible PHASE 3, not Phase 0)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€40K Phase 0 → €500K-€1M direct from T-Life balance sheet if Week-16 gate passes",
      "capexRatio": "5% capex / 95% opex",
      "note": "B2B SaaS to 5-8 named buyers; no enterprise sales force needed. EU 90-180-day payment cycle managed off family balance sheet. NEVER needs VC if it validates."
    },
    "competitors": [
      {
        "name": "Deloitte Zora, EY.ai, PwC ChatPwC, KPMG Clara",
        "type": "incumbent",
        "geography": "Global",
        "note": "Proprietary in-house AI tools for Big-4 only; NOT licensed externally. Non-Big-4 primes cannot access. We sell to the non-Big-4 set that Big-4 won't supply."
      },
      {
        "name": "Ecorys, Ramboll, ICF, Technopolis, CEPS, CASE, ADE, Particip",
        "type": "incumbent",
        "geography": "EU",
        "note": "BUYERS, not competitors. They hold references + FSC + turnover + cycle lock-in but lack in-house AI productization."
      },
      {
        "name": "Generic LLM tooling (Anthropic, OpenAI direct API, Microsoft Copilot)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Substrate, not competitor. Our differentiation = EU-FWC-template-aware corpus + MS-transposition graph + AI Act Art. 50 compliance layer the primes cannot affordably build de-novo."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 3,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.3
    },
    "ycRfsCorrelation": "Infrastructure-to-incumbents shape (morning filter pattern); AI Act Art. 50 compliance window opens Aug 2026.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "govtech-identity",
    "assertions": [
      {
        "id": "dgs-a1",
        "claim": "EU Commission DG studies + evaluation spend is ~€600M/yr across DG SANTE/GROW/EMPL/CONNECT FWCs; 60-80% captured by 4-5 named non-Big-4 prime consortia (Ecorys, Ramboll, ICF, Technopolis) with the balance to Big-4 advisory practices.",
        "source": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32018R1046",
        "status": "estimated",
        "lastChecked": "2026-05-21",
        "note": "[ESTIMATE — needs verification against EC TED data]"
      },
      {
        "id": "dgs-a2",
        "claim": "Deloitte AI-consulting run-rate $840M as of Q1 2026; EY.ai shipping; PwC ChatPwC live; KPMG Clara public-sector module shipped 2025. Big-4 cannibalization is real and accelerating, not deferred to 2028.",
        "source": "https://www.deloitte.com/us/en/insights/industry/government-public-sector-services/government-trends/2025/scaling-ai-in-government.html",
        "status": "confirmed",
        "lastChecked": "2026-05-21"
      },
      {
        "id": "dgs-a3",
        "claim": "AI Act Art. 50 transparency obligations apply from August 2026 — AI-generated content in EU institution deliverables must be machine-readable-labeled and disclosed. Creates compliance-pull for AI Act Art. 50 disclosure layer at the prime level.",
        "source": "https://artificialintelligenceact.eu/article/50/",
        "status": "confirmed",
        "lastChecked": "2026-05-21"
      },
      {
        "id": "dgs-a4",
        "claim": "FWC scoring requires references (similar contracts last 3 years), turnover up to 2x contract value, FSC clearance held by the bidding entity. These gates structurally exclude a Greek SME from prime status on €2M+ lots — but DO NOT block licensing AI tooling TO the existing primes.",
        "source": "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/work-as-an-expert",
        "status": "confirmed",
        "lastChecked": "2026-05-21"
      }
    ],
    "killTests": [
      {
        "id": "dgs-k1",
        "hypothesis": "2 paid pilots at €30K each with named non-Big-4 FWC primes (target set: Ecorys, Ramboll, ICF, Technopolis, CEPS, CASE) within 16 weeks. Pilots scope = MS-transposition graph + AI Act Art. 50 disclosure layer + draft-evaluation RAG pipeline on 1 real DG SANTE or DG GROW evaluation deliverable each.",
        "experiment": "Brussels outreach via EFPIA-adjacent pharma-policy network to consortium PM / Head of Public Sector at the 5-6 named primes. Cold-pitch back-up via LinkedIn-second-degree intros. Build prototype RAG pipeline + Art. 50 disclosure layer pre-Week-4 to demo.",
        "costEur": 32000,
        "durationWeeks": 16,
        "killSignal": "0 signed paid pilots (KEY GATE — failing kills the bet per T_LIFE_VENTURE_STUDIO_THESIS.md v2)",
        "validateSignal": "≥2 signed paid pilots at €30K with concrete deliverable scope and Sep-Dec 2026 timeline"
      },
      {
        "id": "dgs-k2",
        "hypothesis": "At least 1 of the pilots converts to a €200-400K/yr SaaS contract by Week 28 (Phase 1 gate)",
        "experiment": "Deliver Pilot 1 with measurable improvement on consortium's bid-write throughput; pitch annual SaaS at pilot conclusion",
        "costEur": 18000,
        "durationWeeks": 28,
        "killSignal": "0 conversions to annual contract (Phase 1 kill — pilot-only conversion means we have a services business not a SaaS business)",
        "validateSignal": "≥1 signed annual SaaS contract at ≥€200K/yr"
      }
    ],
    "preMortem": [
      {
        "cause": "Big-4 release their AI tooling externally (Deloitte Zora-as-a-service to non-Big-4 primes)",
        "likelihood": "low",
        "earlySignal": "Track Deloitte/EY/PwC/KPMG AI-tooling external-licensing announcements; if any major releases happen pre-Week-16, halt and reassess"
      },
      {
        "cause": "Non-Big-4 primes build internally — Ecorys/Ramboll launch in-house AI tooling using Anthropic/OpenAI direct",
        "likelihood": "medium",
        "earlySignal": "Each named prime's 2025-2026 annual report + LinkedIn job postings for AI Engineering Lead / Head of AI / similar"
      },
      {
        "cause": "EU procurement reform (Q2-2026 Public Procurement Act + Financial Reg recast) restructures FWC framework, eliminating or reshaping the 4-year cycle that creates the moat",
        "likelihood": "medium",
        "earlySignal": "Track Bruegel + EU institutional commentary on procurement reform 2026; monitor Council/Parliament inter-institutional process"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.1,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "€1M ARR feasible if 3-4 of 5-8 named primes convert at €200-400K/yr. €10M ARR explicitly UNLIKELY by design — buyer set is small and concentrated. Higher P(failure) than MedAdherence-RWE reflects: (a) non-Big-4 primes may build internally with Anthropic/OpenAI direct; (b) EU procurement reform mid-thesis; (c) family Brussels-reach is real but un-tested for this specific buyer set."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-21",
        "verdict": "revise",
        "dealKiller": "The thesis assumes a 12-month window where Big-4 'preserve the bill' while a Greek SME with no FWC track record converts a single subcontracted lit-review into prime status on a 2027-2028 lot. All three legs are weak: (a) Big-4 are already pivoting public-sector consulting to outcome-based/managed-services with embedded AI margin capture (Deloitte Zora, EY.ai, $840M Deloitte AI-consulting run-rate; managed-services projected ~20% of consulting revenue) - they will NOT 'preserve the bill' through 2027; (b) FWC scoring requires references plus turnover up to 2x contract value plus FSC clearance held by the entity, and SME-friendly rules apply to small lots (€25K-ish), NOT €0.8-2.5M evaluation lots where 3-5 consortia incumbents (CEPS, CASE, Ecorys, ICF, Ramboll, Technopolis, Particip, ADE) re-aggregate every 4 years; (c) the 'subcontractor->prime in 2027' path has no documented precedent at this scale - FWC primes choose subcontractors precisely because they are non-threatening, and the cascade is designed to lock in incumbents.",
        "patternMatches": [
          "Pyramid-cannibalization-window-too-short: incumbents already shipping AI productization in 2025-2026, not waiting until 2028",
          "Reference-list-moat-real: turnover-2x rule and 'similar contracts in last 3 years' eliminate de-novo entrant at €2M+ lots",
          "Sovereign-build-creep: Draghi/Letta direction = double Horizon to €175B, EU Competitiveness Fund €409B, JRC 2025-27 work programme expanding policy-support role - exact opposite of 'JRC capacity-capped forever'",
          "Procurement-reform-wildcard: Q2-2026 Public Procurement Act proposal + 'Made in Europe' criteria + Financial Reg recast Sep-2024 - rules change mid-thesis, FWC structure may shift before 2027 lot renewals",
          "Clearance-as-disqualifier: FSC must be held by the bidding entity at submission; Greek NSA timeline + personnel PSCs typically 9-18 months; a new Greek SME cannot self-clear in time for 2027 lots that begin tender prep in 2026",
          "Buyer-not-customer-confusion: DG desk officer 'signed acceptance' on a subcontracted deliverable is not procurement evidence - prime sells to DG, sub sells to prime",
          "AI-Act-transparency-headwind: Article 50 applies Aug-2026; AI-generated content in deliverables to EU institutions must be machine-readable-labeled and disclosed - tightens, doesn't loosen, the 'AI hidden under partner rate' arbitrage"
        ],
        "unitEconomicsConcern": "The 8-12x margin gap assumes Big-4 hold €1,400-2,000/hr senior + €600-900/hr junior rates static while AI commoditizes RAG/summarization. Wrong reference frame: FWCs are blended-rate, fixed-price-per-task; under reopened FWCs in 2026-2027, Big-4 will rebid at AI-augmented blended rates 30-50% lower and absorb the arbitrage themselves. The 1/8 cost claim survives ~18 months, not the 4-year FWC cycle. Also, EU pays 90-180 days late on €0.8-2.5M tickets; covering 3-5 simultaneous engagements requires €3-8M working capital - 'family balance sheet' may not stretch.",
        "loadBearingAssumption": "Big-4 will 'AI-enable consultants while preserving the bill' for 24+ months. Evidence from 2025-2026 contradicts: Deloitte/EY/PwC/KPMG public-sector P&Ls already migrating to managed-services + outcome-based pricing, $840M AI-consulting run-rate at Deloitte, 30% AI-centric EY India projects. The window collapses before 2027 lot renewals where DG-Studies would graduate to prime.",
        "alternativeThesis": "Pivot to 'AI evaluation-augmentation toolkit licensed/white-labeled TO existing FWC primes' (Ecorys, Ramboll, ICF, Technopolis, CEPS, CASE) as the buyer. They have the references, FSC, turnover, and 4-year lock-in but lack credible AI productization beyond Big-4 in-house tools they can't access. Sell €200-500K/yr SaaS per consortium: MS-transposition graph, stakeholder embeddings, draft-evaluation RAG pipeline, AI-Act-compliant disclosure layer. T-Life's Brussels reach opens 3-5 named primes faster than DG desk officers. Margin lower (50-65% gross vs. consulting), but bypass the FSC/reference/turnover gates entirely and ride the same €600M/yr spend as a picks-and-shovels supplier. Re-evaluate prime-conversion in 2029-2031 once tooling is embedded across 4+ consortia. Phase-0 kill test: 2 paid pilots at €30K each with named non-Big-4 FWC primes within 16 weeks - binary signed POs or kill."
      }
    ]
  },
  {
    "id": "family-office-memos",
    "title": "FamilyOffice-Memos",
    "ycCategory": "AI-Augmented Family-Office Memo + Corporate Diligence Hybrid",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Dimitri-runnable services firm: AI-augmented memo subscription for 2-3 anchor Greek + Cypriot UHNW family-office anchors, PLUS Greek industrial M&A diligence engagements for corporate clients. €500-600K plateau, off-balance-sheet, no VC.",
    "description": "Born from round-1 red-team REVISE on the original Family-Office Memos thesis. The original spec claimed 8 anchor family-office clients × €90K retainer = €720K Year-1, but the red-team surfaced a structural problem: the 30-name buyer list was overstated at the persona level (Latsis Paneuropean, Vardinoyannis, Niarchos, Demetra all have in-house teams or use Big 4), and Greek peer-family confidentiality (chinese-walls between rival families: Vardinoyannis vs Latsis vs Restis) caps the realistic client count at 2-3 anchors, not 8.\n\nThe round-1 alternative-thesis adopted verbatim: REPOSITION from 'outsourced deal desk for 8 families' to '2-3 anchor family memo subscription + cross-sell Greek industrial M&A diligence to corporates.' The hybrid widens TAM beyond family-only without dropping the family-trust moat. Year-1: 2 anchors × €120K + 3-4 corporate one-off diligence at €40-60K each = €380-480K. Honest plateau €500-600K. Founder-fit drops from 8.5 to 7/10 (corporate work is less 'peer-family' than the original framing, more transactional consultant).\n\nDimitri operates personally with 2-3 AI engineers + 0-2 domain experts (sector specialists on retainer per engagement). AI agents do 80%+ of memo drafting (Hebbia/Rogo/AlphaSense-class tooling); Dimitri owns reference calls, final judgment, and presentation. Studio motion is CASH-FLOW services firm, not venture build — never raises VC, off-balance-sheet from T-Life Capital.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "2-3 named family-office anchors (mid-tier Greek + Cypriot tier — Kontominas, Daskalantonakis, Cypriot Loutsios/Christodoulou/Shacolas where rival-family chinese-walls don't block) + 3-5 corporate M&A diligence clients via Greek industrial peer network.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Possible Year-2+ via Bird & Bird Brussels EU M&A referral network; secondary, not Year-1."
      },
      {
        "market": "middle-east",
        "fit": "red",
        "note": "Not pursued — Gulf family-office market is structurally different and out of scope."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Cyprus is in scope; broader Balkans is not."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Most family-network-load-bearing thesis in the catalog. Dimitri is a fourth-generation peer who runs the family's own capital — peer-family trust is the moat that SaaS and Big 4 cannot replicate. Corporate diligence cross-sell leverages the same Greek industrial relationships used by other studio bets (Mytilineos, Titan, Viohalco, Quest, etc.).",
    "tags": [
      "dimitri-runnable",
      "family-network-edge",
      "cash-flow-services",
      "off-balance-sheet",
      "2-anchor-plateau",
      "phase0-funded"
    ],
    "addedDate": "2026-05-21",
    "notes": "RE-SPEC v2 2026-05-21 night (born from round-1 REVISE). Original Family-Office Memos thesis claimed 8 anchor families × €90K = €720K Year-1. Round-1 red-team surfaced: (a) 30-name buyer list was persona-inflated — top names (Latsis, Vardinoyannis, Niarchos, Demetra) have in-house teams; (b) peer-family chinese-walls cap realistic client count at 2-3 anchors; (c) Hebbia/Rogo/AlphaSense already commoditize memo drafting at $50-200K/seat for funds; (d) WTP caps at €50-70K for 3-4 clients not €90-120K for 8.\n\nAdopted alt-thesis: REPOSITION to '2-anchor memo subscription + corporate M&A diligence hybrid.' Plateau €500-600K Year-1. Founder-fit 7/10 (down from 8.5/10).\n\nFunded as 3rd Phase 0 bet under v2 studio mandate. Phase 0 commit €45K; 16-week binary kill: ≥2 anchor family retainers ≥€80K AND/OR ≥3 paid corporate diligence engagements ≥€40K (combined Year-1 ARR pipeline ≥€350K).\n\nStudio total: 3 funded bets, ~€125K Phase 0 commit, ~€75K reserve.",
    "whyNow": "Two windows aligned: (a) AI memo-drafting tools (Hebbia, Rogo, AlphaSense) have matured to production quality in 2025-2026 — a peer-family advisor with these tools genuinely delivers what a junior PE associate produces, at 1/5 the cost; (b) Greek industrial M&A deal flow is at a 10-year high (RRF tail + ESPA + post-COVID consolidation) — corporate clients need fast diligence on €10-50M acquisitions that Big 4 charges €300K+ for. The hybrid model captures the cross-cycle in both windows.",
    "roadToMoat": [
      {
        "timeframe": "Phase 0 — Week 0-16",
        "milestone": "≥2 family-office anchor retainers ≥€80K AND/OR ≥3 paid corporate M&A diligence engagements ≥€40K. Combined Year-1 ARR pipeline ≥€350K. Binary kill if not met."
      },
      {
        "timeframe": "Phase 1 — Month 4-12",
        "milestone": "Build to €380-480K cash revenue. 2 family anchors + 3-4 corporate diligence engagements live. AI memo stack production-grade; 1 retained domain expert (sector specialist) on retainer."
      },
      {
        "timeframe": "Phase 2 — Month 12-36",
        "milestone": "Plateau €500-600K cash. Optional EU expansion (year-2+) via Bird & Bird referral network. Off-balance-sheet, no VC. Cash distributions to Dimitri / family at studio level."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€45K Phase 0 → €200-300K Year-1 ops cost (Dimitri salary + 2-3 AI engineers + domain expert retainer + data subscriptions Pitchbook/Mergermarket/CapIQ)",
      "capexRatio": "5% capex / 95% opex",
      "note": "Personally operated by Dimitri. NO recruited CEO needed. Off-balance-sheet from T-Life Capital. Honest plateau €500-600K cash — not venture-shaped."
    },
    "competitors": [
      {
        "name": "In-house generalist analyst at family office",
        "type": "incumbent",
        "geography": "Greece",
        "note": "Real competitor — €100-150K all-in for a single in-house analyst the family already trusts. Our wedge: 2-3× breadth via AI + senior judgment at €80-120K retainer."
      },
      {
        "name": "Pictet, Lombard Odier, UBS Family Advisory",
        "type": "incumbent",
        "geography": "Global",
        "note": "Bundled into existing PB relationship at zero marginal cost. Wedge for us: Greek-peer-family trust + Greek-deal-flow specialization their generalist desks don't have."
      },
      {
        "name": "Eurobank Private, Alpha Private deal teams",
        "type": "incumbent",
        "geography": "Greece",
        "note": "Adjacent — they serve Greek mid-market with deal sourcing but conflict of interest as potential co-investors. We are advisor-only (no carry, no co-invest)."
      },
      {
        "name": "Hebbia, Rogo, AlphaSense (AI memo tooling)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Substrate — we USE these. Differentiation = senior judgment + peer-family Rolodex + Greek-market depth they do NOT have."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 2,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 5,
      "regulatoryRisk": 2,
      "founderAvailability": 5,
      "composite": 3.7
    },
    "ycRfsCorrelation": "Cash-flow services firm; AI-augmented professional services; family-network-edged.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "fintech",
    "assertions": [
      {
        "id": "fom-a1",
        "claim": "Greek + Cypriot UHNW family-office addressable persona for outsourced memo desk is realistically 8-12 families (mid-tier Kontominas / Daskalantonakis / Vassilakis / Cypriot Loutsios / Christodoulou / Shacolas), NOT 30. Top names (Latsis Paneuropean, Vardinoyannis, Niarchos, Demetra Holdings) have in-house teams or use Big 4. Peer-family chinese-walls cap realistic concurrent client count at 2-3 anchors.",
        "source": "research/sourcing-02-redteam-round1.md (red-team verified against Campden Wealth 2025 + PwC Global FO Deals 2024)",
        "status": "confirmed",
        "lastChecked": "2026-05-21",
        "note": "MATERIAL: the original 8-anchor framing was a 4× persona inflation. Spec corrected to 2-3 anchors + corporate diligence hybrid."
      },
      {
        "id": "fom-a2",
        "claim": "AI memo-drafting tools (Hebbia, Rogo, AlphaSense, S&P CapIQ Copilot) deliver production-quality memos at $50-200K/seat for institutional funds. Differentiator collapses to senior judgment + peer-family Rolodex, NOT product. This is a services firm, not a SaaS company.",
        "source": "https://www.hebbia.com/resources/rogo-competitors",
        "status": "confirmed",
        "lastChecked": "2026-05-21"
      },
      {
        "id": "fom-a3",
        "claim": "Big 4 transaction advisory bills €350K+ per memo. Real competition is NOT Big 4 — it's (a) €100-150K in-house generalist analyst; (b) Pictet/UBS bundled OCIO at zero marginal cost; (c) Eurobank/Alpha Private deal teams. WTP caps at €50-70K for 3-4 clients, not €90-120K for 8.",
        "source": "research/familyoffice-rt.json unitEconomicsConcern",
        "status": "estimated",
        "lastChecked": "2026-05-21"
      },
      {
        "id": "fom-a4",
        "claim": "Greek industrial M&A deal flow is at a 10-year high in 2025-2026 — RRF tail, ESPA, post-COVID consolidation, Mytilineos/Metlen transformation, Greek banking re-privatization. Corporate clients need fast €10-50M acquisition diligence at price points below Big 4's €300K+ floor.",
        "source": "https://www.tovima.com/finance/greek-construction-giants-post-e18-6b-project-backlog/amp/",
        "status": "estimated",
        "lastChecked": "2026-05-21"
      }
    ],
    "killTests": [
      {
        "id": "fom-k1",
        "hypothesis": "Combined Year-1 ARR pipeline ≥€350K by Week 16, composed of: ≥2 family-office anchor retainers at ≥€80K each AND/OR ≥3 paid corporate M&A diligence engagements at ≥€40K each. Binary kill.",
        "experiment": "Wk 1-4: build AI memo stack (Hebbia/Rogo + Pitchbook + CapIQ + Mergermarket) + 2 demo memos on recent public Greek deals (e.g. Mytilineos-Metlen transformation, Pancreta-Attica merger). Wk 5-10: 8-12 meetings via family channel with anchor candidates (Kontominas/Daskalantonakis/Vassilakis/Cypriot tier) + 6-8 corporate-diligence pitches (Greek industrial mid-caps doing acquisitions). Wk 11-16: close.",
        "costEur": 45000,
        "durationWeeks": 16,
        "killSignal": "Combined pipeline <€350K (KEY GATE — failing this kills the bet per T_LIFE_VENTURE_STUDIO_THESIS.md v2)",
        "validateSignal": "Combined pipeline ≥€350K with concrete deliverable scope and 30-day kickoff dates"
      }
    ],
    "preMortem": [
      {
        "cause": "Peer-family confidentiality blocks even 2 concurrent anchors — Vardinoyannis-tier won't share deal flow with Kontominas-tier advisor (chinese walls deeper than expected)",
        "likelihood": "medium",
        "earlySignal": "First 2 meetings reveal each anchor's actual willingness to disclose pipeline. If both decline confidential deal sharing, pivot heavier into corporate diligence (no chinese-wall issue)."
      },
      {
        "cause": "Hebbia/Rogo/AlphaSense move down-market and offer family-office tier productized service at €30-50K/yr, eating the AI-memo-tooling moat layer below us",
        "likelihood": "medium",
        "earlySignal": "Watch Hebbia/Rogo product announcements 2025-2026 for family-office-tier launch. If detected, our differentiation collapses to pure-services (Dimitri's judgment + Rolodex), which is fine but caps growth."
      },
      {
        "cause": "Founder-fit deteriorates — corporate diligence work is less 'peer-family' than memo subscription; Dimitri ends up doing transactional consulting at 30+ hours/week which kills enjoyment",
        "likelihood": "medium",
        "earlySignal": "After 4 months, measure Dimitri's actual hours-per-week and enjoyment score. If corporate work >50% AND enjoyment <6/10, scale back corporate book to family-only and accept lower revenue plateau."
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.15,
      "reaches10mArrBy36mo": 0.02,
      "totalFailureBy36mo": 0.35,
      "basisOfEstimate": "REVISED honest p after round-1 red-team. €1M ARR is UNLIKELY by design — spec explicitly caps at €500-600K plateau. €10M ARR explicitly impossible (lifestyle services firm, not venture). High P(stable at €300-500K) ~0.50. P(total failure: <€150K Year-1 + Dimitri exit) = 0.35. The bet is cash-flow durability + founder-fit, not scale."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-21",
        "verdict": "revise",
        "dealKiller": "The 30-name buyer list is materially overstated. Latsis (Paneuropean) and Vardinoyannis are €11B+ groups with full in-house investment teams; Niarchos works through SNF (grant-making) and Costamare/TEMES has its own deal arm under Achilles Constantakopoulos; Demetra Holdings is a listed company using Big 4 not a private FO. Realistic addressable persona is closer to 8-12 families (mid-tier Kontominas/Daskalantonakis/Cypriot tier), not 30 — which collapses Year-1 from 5x€90K=€450K to 3x€75K~=€225K once peer-confidentiality friction (chinese walls between rival Greek families) blocks 40-50% of the named list from sharing deal flow with the same advisor.",
        "patternMatches": [
          "trust-moat-but-tiny-TAM: the same family-network signal that opens the first 2-3 doors closes the next 5 because rival families (Vardinoyannis vs Latsis vs Restis) won't share an advisor",
          "junior-PE-associate-in-disguise: 30-50 memos/yr * 6-10 reference calls * Dimitri-only = 240-400 reference-call hours + committee presentations, structurally indistinguishable from a 1-2 person boutique that always plateaus at 5-8 clients",
          "AI-margin-eaten-by-trust-tax: Hebbia/Rogo/AlphaSense already do 80% memo drafting at $50-200K/seat for funds; differentiator collapses to 'Dimitri's judgment + Rolodex' which is pure-services not productized",
          "OCIO-already-exists: 80% of FOs use external advisors (Campden 2025); Pictet/Lombard Odier/UBS Family Advisory + Greek private banks (Eurobank, Alpha) already serve this need with deeper books and lower marginal cost"
        ],
        "unitEconomicsConcern": "Spec claims Big-4 floor is €350K/memo making €90K retainer a steal, but real competitor is NOT Big 4 — it's (a) a €100-150K all-in in-house generalist analyst that the family already trusts, (b) Pictet/UBS bundled into existing PB relationship at zero marginal cost, (c) Eurobank Private's deal team for Greek mid-market. The €60-120K retainer sits in a no-mans-land: too expensive to be a casual second opinion, too cheap to justify exclusive deal-flow disclosure. WTP likely caps at €50-70K for 3-4 clients, not €90-120K for 8.",
        "loadBearingAssumption": "That 5-8 rival Greek/Cypriot UHNW families will simultaneously share their actual €5-50M deal pipeline with the same peer-family advisor. There is zero empirical precedent for this scaling past 2-3 clients in any Mediterranean peer-advisory market — Greek families are notoriously omerta-grade on deal flow, and 'Dimitri is one of us' cuts both ways: he is ALSO a potential rival principal whose own T-Life capital could front-run a deal he was shown. The 'no co-invest discipline' clause is honest but does not solve the perception problem.",
        "alternativeThesis": "Reposition from 'outsourced deal desk for 8 families' to 'AI-augmented memo subscription for 2-3 anchor families + Greek industrial M&A diligence for corporates' (cross-sells into candidate #1 EU-AI-Act buyers). Target Year-1: 2 anchors x €120K + 3-4 corporate one-off diligence engagements at €40-60K each = €380-480K. Honest plateau €500-600K, not €700-800K. Founder-fit drops to 7/10 because corporate diligence is less 'peer-family' and more 'transactional consultant.' Sourcing agent's p=0.55 should drop to p=0.30-0.35; founder-fit 8.5/10 holds ONLY if Dimitri accepts the smaller ceiling and explicitly rejects the 30-name fiction. Otherwise: kill in favor of candidate #1 (EU AI Act / DORA) which has a verifiable 5-name buyer list, harder deadline-driven WTP, and no peer-confidentiality blocker."
      }
    ]
  },
  {
    "id": "sme-bookkeeping-agent",
    "title": "Logos Books",
    "ycCategory": "AI Agents / Vertical SaaS",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "B2B productivity platform for Greek accounting firms — the AI layer that lets each OEE-licensed logistis run a 10× book without losing the regulatory liability transfer that makes the profession defensible.",
    "description": "Greek tax law requires returns above turnover thresholds to be signed by an OEE-licensed Class A logistis-forologistis (Art. 38, Law 2873/2000). That signature is the real product the logistis sells — regulatory liability transfer, not workflow. Four years post the myDATA mandate (Nov 2021), 30+ AADE-certified e-invoicing providers (Epsilon Digital, Elorus, SoftOne/ENTERSOFTONE, Impact, EDICOM, Comarch, Protogramma, ...) have failed to disintermediate the logistis precisely because none can absorb that liability.\n\nLogos Books accepts this reality. It sells to the ~8-10K Greek accounting firms (not 600K SMEs) at €99-299/firm/month + €0.05/posting, plus a per-firm setup fee. Each firm books 50-200 SMEs; Logos automates the OCR / categorisation / myDATA submission / dunning / collection workflow so the firm captures the productivity uplift, keeps the signature (and the liability), and grows its book without proportionally adding headcount. Positioning: 'Dext / Karbon / Ignition for Greek logistes' — the only B2B-accounting playbook that has historically worked.\n\nThe wedge is unfair access via T-Life's professional network in Greece + the parallel pitch to ELPEN/WinMedica's own accounting partners as design customers + agora-credit-intelligence's existing AADE myDATA data pipeline. TAM ceiling: 8K firms × €3K ACV = €24M ARR — a real venture outcome on a knowable wedge, not the €2-3M ceiling the direct-to-SME version would have hit.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Greek B2B-peppol mandate (Law 5222/2025, effective Mar 2026 large / Oct 2026 rest) creates a forcing function for every firm to adopt new tooling within 18 months. The customer count is concentrated (8-10K firms) and addressable; the SME count (600K) was a distraction.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Romania (RO e-Factura live since Jan 2024) and Bulgaria (SAF-T from 2026) have similar firm-sized accounting ecosystems and EU-aligned VAT infrastructure. Same B2B playbook applies."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Italy (SdI), Portugal (SAF-T) have more mature infrastructure but stronger Dext/Karbon/Sage presence; harder competitive entry. Year 3."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "UAE FTA e-invoicing mandatory Jan 2027 for large firms — parallel opportunity but different professional structure (no logistis equivalent). Year 3."
      }
    ],
    "stage": "evaluating",
    "tlifeAngle": "T-Life relationships into Greek mid-size accounting firms (ELPEN/WinMedica's external firms, ALTP tenant firms, family network) + agora-credit-intelligence's existing AADE myDATA pipeline as technical substrate. The pivot removes the dependency on WinMedica's pharmacy-distribution warm-intro to micro-SMEs; the new channel is direct to firms.",
    "tags": [
      "bookkeeping",
      "accounting-firms",
      "b2b-saas",
      "mydata",
      "logistes",
      "greece",
      "vertical-saas",
      "dext-pattern",
      "trend-21-bookkeeping-agents",
      "trend-2-managed-ai-employees",
      "post-red-team-pivot"
    ],
    "addedDate": "2026-05-16",
    "notes": "Trend match: 36-list #21 (bookkeeping agents) + #2 (managed AI employees). Pricing model evolves: per-firm subscription + per-posting fee, mapping the actual buyer's economics (firm productivity uplift) rather than the SME's commodity-receipt cost.\n\nPivot history: original direct-to-SME thesis was red-team-reviewed and returned PASS — see redTeamFindings[0]. The logistis sells liability transfer (Greek Law 2873/2000 Art. 38), not workflow; the OEE professional-body lobby precedent (pharmacists vs OTC 15-yr block, notaries vs e-conveyancing, lawyers killing LegalZoom-style entrants) made direct-to-SME structurally hostile. Current thesis (B2B for firms) accepts the alternative thesis. Pattern-matches Dext / Karbon / Ignition — the only B2B-accounting playbook that has historically worked.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "Greek Law 5222/2025 sets the B2B peppol mandate at 2 Mar 2026 (large) / Oct 2026 (rest), forcing every Greek accounting firm to adopt new tooling within 18 months. LLM cost per posted transaction has fallen ~95% since GPT-4 launch (Haiku 4.5: ~€0.003 per Greek-receipt extract). Romania RO e-Factura precedent shows accounting-firm SaaS adoption accelerates in the 18-month window post-mandate. AADE has certified 30+ e-invoicing providers but none have built a logistis-channel-first product.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Sign 5 design-partner accounting firms (50-200 SMEs each) at €99/mo + €0.05/posting; ship MVP covering receipt OCR + myDATA submission + dunning; achieve <€0.20 marginal cost per posted transaction."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "200 paying firms, €0.6-1.2M ARR; expand to expense reconciliation + payroll filings; first Romania and Bulgaria partner firms post-SAF-T mandate; Karbon/Ignition-style firm-ops layer (engagement letters, billing, time tracking) added."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "1,500-2,500 firms across GR/RO/BG, €4-8M ARR; proprietary dataset of 100M+ posted Greek/Balkan transactions creates moat for downstream SME credit-scoring product (link to agora-credit-intelligence); approach 8-12% market share of Greek logistis firms by Y3."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€300-600K",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pivoted GTM is firm-by-firm sales (~10× higher ACV than SME) which justifies a sales rep early. Main costs: 2 engineers (€160K), 1 senior firm-AE (€80K), AI inference (~€0.005/tx at scale), AADE certification (€40K), partnership BD (€80K), GR-language firm-operator UX content (€40K)."
    },
    "competitors": [
      {
        "name": "Dext (ex-Receipt Bank) → IRIS Software",
        "type": "incumbent",
        "geography": "UK/Global",
        "note": "Pivoted to accountant-channel-only after direct-to-SMB stalled; sold to IRIS Dec 2024. Closest playbook match. Not Greek-tax-aware; minimal EU South footprint."
      },
      {
        "name": "Karbon",
        "type": "startup",
        "geography": "US/AU/UK",
        "note": "Firm-ops platform for accounting practices ($50-100/user/mo). No Greek tax integration. Likely partner not direct competitor."
      },
      {
        "name": "Epsilon Net (incl. Pylon, Singular Logic)",
        "type": "incumbent",
        "geography": "Greece / Athens SE: EPSr",
        "note": "Listed Greek accounting/ERP champion. Built for accountants. Heavy installed base but no AI-first product motion. Closest defensive competitor; could ship a competing AI layer. Channel partner candidate."
      },
      {
        "name": "ENTERSOFTONE (ex-Entersoft + SoftOne)",
        "type": "incumbent",
        "geography": "Greece",
        "note": "Merged Oct 2025. Second tier-1 Greek ERP/accounting vendor. Same competitive dynamics as Epsilon Net."
      },
      {
        "name": "AADE-certified e-invoicing providers (Elorus, Impact, EDICOM, Comarch, Protogramma)",
        "type": "incumbent",
        "geography": "Greece",
        "note": "30+ providers exist. None has built a firm-channel-first product — they sell to either accountants or SMEs as e-invoicing utility, not firm-productivity SaaS."
      },
      {
        "name": "Local logistis (OEE-licensed)",
        "type": "incumbent",
        "geography": "Greece",
        "note": "The customers, not the competitors. Strategy: coopt as buyer via firm-productivity uplift, preserve their liability-transfer role."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 3,
      "competitiveGap": 4,
      "capitalFit": 5,
      "regulatoryRisk": 4,
      "founderAvailability": 4,
      "composite": 3.6
    },
    "ycRfsCorrelation": "YC wants bookkeeping agents that match the actual buyer's economics (#21 in the May-2026 list). Logos Books post-pivot is the Dext/Karbon pattern applied to Greek accounting firms — coopts the OEE-licensed logistis profession rather than fighting it.",
    "tlifeAssetRefs": [
      "winmedica",
      "altp",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "lb-a1",
        "claim": "myDATA real-time invoice transmission mandatory in Greece since 1 November 2021",
        "source": "https://sovos.com/vat/tax-rules/mydata-greece/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a2",
        "claim": "Greek Law 5222/2025 sets B2B peppol mandate at 2 Mar 2026 (large) / Oct 2026 (rest)",
        "source": "https://edicomgroup.com/blog/greece-mandatory-electronic-invoice",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a3",
        "claim": "Greek tax returns above turnover thresholds require OEE-licensed Class A logistis-forologistis signature (Art. 38, Law 2873/2000)",
        "source": "https://www.greeklawdigest.gr/topics/tax/item/301-accounting-auditing-law-in-greece",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a4",
        "claim": "AADE has certified 30+ e-invoicing providers; none have disintermediated the logistis in 4 years post-mandate",
        "source": "https://www.aade.gr/en/mydata/licensed-software-e-invoicing-providers",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a5",
        "claim": "Dext (ex-Receipt Bank) pivoted to accountant-channel-only and sold to IRIS Dec 2024 — the only B2B-accounting playbook that scaled",
        "source": "https://dext.com/en/partner",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a6",
        "claim": "Greek accounting firm count ~8-10K [ESTIMATE — OEE total professional members ~90K, firm-density derived from ELSTAT business census]",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16",
        "note": "Verify against OEE annual report and ELSTAT structural business statistics."
      },
      {
        "id": "lb-a7",
        "claim": "Claude Haiku 4.5 cost per typical receipt OCR + categorisation ~€0.003",
        "source": "https://pricepertoken.com/pricing-page/model/anthropic-claude-haiku-4.5",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "lb-k1-v2",
        "hypothesis": "5 mid-size Greek accounting firms will sign a design-partner contract at €99/mo + €0.05/posting in 8 weeks",
        "experiment": "Direct pitch to 20 firms (50-200 SMEs each) via T-Life network + cold outreach; target signed design-partner agreements",
        "costEur": 5000,
        "durationWeeks": 8,
        "killSignal": "<2/20 sign in 8 weeks",
        "validateSignal": "≥5/20 sign; ≥3 with named-decision-maker timeline for full rollout post-pilot"
      },
      {
        "id": "lb-k2-v2",
        "hypothesis": "The agent achieves ≥85% accuracy on Greek receipt-to-myDATA-line-item extraction at <€0.20 marginal cost — firm-grade reliability",
        "experiment": "Build prototype + AADE myDATA submission; process 5,000 real receipts from 5 design-partner firms; measure accuracy vs firm-labelled ground truth and per-receipt cost",
        "costEur": 8000,
        "durationWeeks": 6,
        "killSignal": "<70% accuracy OR >€0.30 marginal cost",
        "validateSignal": "≥85% accuracy AND <€0.20 marginal cost"
      },
      {
        "id": "lb-k3-v2",
        "hypothesis": "Firms will see ≥30% time-reclaim per partner on book of 100 SMEs after 90 days",
        "experiment": "90-day cohort with 3 firms; measure partner hours/week before vs after; survey on willingness to migrate full book at €299/mo Tier-2",
        "costEur": 6000,
        "durationWeeks": 14,
        "killSignal": "<15% time-reclaim OR firms unwilling to upgrade to Tier-2",
        "validateSignal": "≥30% time-reclaim AND ≥2/3 firms upgrade to Tier-2"
      }
    ],
    "preMortem": [
      {
        "cause": "Epsilon Net or ENTERSOFTONE ships a competing AI productivity layer with their installed-base distribution advantage",
        "likelihood": "medium",
        "earlySignal": "Monitor product releases quarterly; meet with both for partnership/channel discussion in Month 2"
      },
      {
        "cause": "Firms find the time-reclaim modest (firm partners are paid for liability not labour; time savings don't translate to billable-hour leverage)",
        "likelihood": "medium",
        "earlySignal": "Kill-test lb-k3-v2 results in Month 4"
      },
      {
        "cause": "Dext / Karbon / Ignition enter Greece directly (Dext via IRIS distribution post-acquisition)",
        "likelihood": "low",
        "earlySignal": "Monitor Dext EU expansion announcements; the Greek-tax localisation cost is the barrier"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.25,
      "basisOfEstimate": "Pivot materially improves probabilities vs v1 (35/12/30) because the TAM is now reachable (8-10K firms via direct sales, not 600K SMEs via channel) and the Dext/Karbon precedent shows the playbook scales to €100M+ ARR (Dext at peak). €10M ARR target = 3,500 firms × €3K avg ACV = 35-45% market penetration by Y3 — aggressive but not implausible given the mandate-forced adoption window. Failure band reflects competitive risk from Epsilon Net / ENTERSOFTONE shipping a defensive product."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-16",
        "verdict": "pass",
        "dealKiller": "The Greek logistis is not selling bookkeeping — they're selling regulatory liability transfer. An LLM cannot sign a Greek tax return. 30+ AADE-certified e-invoicing providers exist; ZERO have disintermediated the logistis in 4 years.",
        "patternMatches": [
          "Wave Accounting → H&R Block (2019): acquirer pivoted to human services because human signature is load-bearing.",
          "Dext / Receipt Bank → IRIS Dec 2024: pivoted to accountant-channel-only after direct-SMB CAC was uneconomic.",
          "FreeAgent → NatWest 2018: a decade in, capped at 150K UK users, sold to a bank for distribution.",
          "Greek professional-body lobby precedent: pharmacists (15-yr OTC block), notaries (e-conveyancing block), lawyers (LegalZoom-style block). OEE has ~100K members and direct Ministry of Finance lines — re-rate OEE-lobby threat from MEDIUM to HIGH."
        ],
        "unitEconomicsConcern": "Cross-over math: cluster of 25% of Greek micro-SMEs in 150-1,500 tx/mo sweet spot = 150-200K SMEs; at 5% realistic 3-yr penetration = 8-10K customers × €200-300/yr = €2-3M ARR ceiling. Not a venture outcome.",
        "loadBearingAssumption": "Greek SMEs prefer WhatsApp to email/Viber for business-document exchange. No survey data supports this; DataReportal 2026 Greece shows Viber dominant for business chat.",
        "alternativeThesis": "Sell to the logistis, not the SME. Reframe as B2B productivity SaaS for ~8-10K Greek accounting firms at €99-299/firm/mo + €0.05/posting. Each firm books 50-200 SMEs. Coopts OEE; inherits liability transfer; pattern-matches Dext / Karbon / Ignition. TAM: 8K firms × €3K ACV = €24M ARR ceiling."
      },
      {
        "date": "2026-05-16",
        "verdict": "proceed-with-caveats",
        "dealKiller": "(post-pivot) Epsilon Net / ENTERSOFTONE ship a competing AI layer with installed-base distribution advantage. Mitigation: design partner with 1 of them as channel rather than fight head-to-head — convert defensive risk into distribution.",
        "patternMatches": [
          "Dext + IRIS: post-pivot Dext scaled accountant-channel to €100M+ ARR before acquisition.",
          "Karbon: firm-ops platform reaching $40M+ ARR by 2023."
        ],
        "alternativeThesis": "(none — this IS the alt thesis being adopted)"
      }
    ],
    "industry": "fintech"
  },
  {
    "id": "pawmetric-pet-health",
    "title": "Pawmetric",
    "ycCategory": "Pet Tech / Health Monitoring",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "AI-powered wearable + app for dog/cat health monitoring — gait, activity, food intake, vital signs. The Fitbit for pets that owners actually keep using.",
    "description": "$140B+ global pet industry; almost no tech beyond food, grooming, and a few failed Fitbit-for-dogs attempts (Whistle/Mars Petcare, FitBark). The pet-humanization trend is structural (Gen Z + Millennial owners treat pets as family), aging-dog population is growing (median lifespan +18% since 2000s), US vet spend is $35B+ and rising 8% YoY, pet insurance is the fastest-growing P&C category, and AI-enabled commodity sensors finally make continuous health monitoring viable at consumer price points.\n\nPawmetric is a collar/harness wearable + app that tracks activity, sleep, gait, and vital signs continuously; detects anomalies (gait change as osteoarthritis precursor, decreased activity as pain signal, weight loss as disease indicator); alerts owners to 'vet check recommended' moments with confidence-graded recommendations; integrates with pet insurance partners for premium reduction; and upsells vet tele-consult when an anomaly is detected.\n\nPricing: €180-220 hardware + €15-25/mo subscription. ARPU €180-300/yr after first year. The wedge over Whistle/Fi: AI-grade anomaly detection (not just GPS tracking) + integrated insurance partner economics.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "UK + DACH + Nordics have the highest pet-humanization indices and wearable-comfort; insurance partner ecosystem is mature (Lemonade Pet EU, Petplan, ManyPets, Trupanion EU).",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "UK + DACH + Nordics primary; Italy/Spain/France secondary."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC pet humanization is rising but smaller TAM."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Small TAM; useful as founder-pilot geography."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower disposable income on €15-25/mo subscription."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life portfolio relevance. Founder must build their own pet-industry network + insurance partnerships.",
    "tags": [
      "pet-tech",
      "wearable",
      "iot",
      "consumer",
      "ai-health",
      "beyond-tlife",
      "trend-33-pet-health"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) Pet humanization at all-time high; US median household pet spend up 30% 2019-2024. (2) Pet insurance market growing 25% YoY — insurers pay for monitoring that reduces claim severity. (3) Pet wearable sensors now commodity-priced; cellular IoT modules under €15 BOM enables full-time connectivity without WiFi.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP wearable + app shipping; pre-sell 500 units at €200 + €20/mo via Kickstarter + paid social; insurance LOI from Lemonade Pet EU or ManyPets; anomaly detection model trained on 5K dog activity profiles."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5K paying customers = €1-1.5M ARR; vet tele-consult upsell live; gait-change-detects-osteoarthritis-X-months-before-vet-diagnosis case study published; first major retail partnership (PetSmart EU / Maxi Zoo / Fressnapf)."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "30-50K customers = €8-15M ARR; expand to cats (different sensor profile); GLP-1-for-pets companion app (Zoetis Librela monitoring); approach Mars Petcare / Hill's / Nestlé for acquisition or strategic deal."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€800K-€1.8M",
      "capexRatio": "30% capex / 70% opex",
      "note": "Hardware inventory + tooling + manufacturing setup. Pure-software unit economics improve in Year 2 as hardware refresh cycles begin."
    },
    "competitors": [
      {
        "name": "Whistle (Mars Petcare)",
        "type": "incumbent",
        "geography": "US/EU",
        "note": "GPS-focused; weak AI; brand distribution via Mars retail. Vulnerable on AI-grade anomaly detection."
      },
      {
        "name": "Fi Collar",
        "type": "startup",
        "geography": "US",
        "note": "~€15M ARR estimate; GPS-anchored; expanding to health monitoring. US-only."
      },
      {
        "name": "FitBark",
        "type": "startup",
        "geography": "US",
        "note": "Activity tracker; flat growth; product limited."
      },
      {
        "name": "Tractive",
        "type": "startup",
        "geography": "Austria/EU",
        "note": "GPS-anchored; ~€60M revenue [ESTIMATE]; profitable but limited AI."
      },
      {
        "name": "PetSafe / SureFlap (Radio Systems)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Hardware-focused on doors/cameras; not health-monitoring."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 3,
      "regulatoryRisk": 5,
      "founderAvailability": 3,
      "composite": 3.3
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #33 (pet health monitoring; $140B industry, almost no tech). Pet wearable category exists but no AI-grade anomaly detection + insurance economics player.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "pw-a1",
        "claim": "Global pet industry ~$140B+",
        "source": "[ESTIMATE — APPA / Euromonitor]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pw-a2",
        "claim": "US vet spend ~$35B+ growing 8% YoY",
        "source": "[ESTIMATE — APPA / IBISWorld]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pw-a3",
        "claim": "Fi Collar reached ~€15M ARR",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pw-a4",
        "claim": "Tractive (Austria) revenue ~€60M; profitable",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pw-a5",
        "claim": "Pet insurance EU market growing >25% YoY",
        "source": "[ESTIMATE — McKinsey / Swiss Re]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pw-a6",
        "claim": "Zoetis Librela (GLP-1-class anti-NGF drug for dog osteoarthritis) launched 2024 — opens monitoring market for treatment efficacy",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "pw-k1",
        "hypothesis": "Pre-sell 200 units at €200 + €20/mo via Kickstarter + Meta paid acquisition at <€80 CAC",
        "experiment": "€10K paid test budget + Kickstarter campaign; measure conversion + CAC",
        "costEur": 12000,
        "durationWeeks": 8,
        "killSignal": "<80 pre-orders OR CAC >€150",
        "validateSignal": "≥200 pre-orders AND CAC <€80"
      },
      {
        "id": "pw-k2",
        "hypothesis": "Anomaly detection model achieves ≥85% true-positive on canine osteoarthritis gait-change in 6-month cohort",
        "experiment": "60-dog cohort with vet-confirmed osteoarthritis diagnoses; train + validate",
        "costEur": 30000,
        "durationWeeks": 24,
        "killSignal": "<70% true-positive OR >25% false-positive",
        "validateSignal": "≥85% TP AND <15% FP"
      },
      {
        "id": "pw-k3",
        "hypothesis": "Pet insurance partnership LOI from Lemonade Pet EU / ManyPets / Petplan with premium-discount mechanism",
        "experiment": "Direct BD with 3 EU pet insurers",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past actuarial review",
        "validateSignal": "≥1 signed LOI with premium-discount %"
      }
    ],
    "preMortem": [
      {
        "cause": "Whistle/Mars ships comparable AI in Mars retail-distributed product, capturing the category",
        "likelihood": "medium",
        "earlySignal": "Mars Petcare R&D announcements + retail product refresh"
      },
      {
        "cause": "Hardware ergonomics fail (chewing, water damage, battery life) and cohort retention <50% in Year 1",
        "likelihood": "high",
        "earlySignal": "Kill-test pw-k1 hardware returns + 6-month subscription churn"
      },
      {
        "cause": "Customer acquisition CAC too high for €300/yr ARPU — €100+ CAC × 24-month LTV doesn't unit-economic",
        "likelihood": "medium",
        "earlySignal": "Kill-test pw-k1 CAC + cohort retention modeling"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.35,
      "basisOfEstimate": "Pet wearables have proven product-market fit at modest scale (Fi Collar ~€15M, Tractive ~€60M). €10M ARR = 30-50K paying subscribers at €240-300/yr — feasible in 24-36 months IF retention >70% (the hardware-ergonomic-quality gate) and CAC <€100. Mars Petcare ships AI within 18 months is the bear scenario."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-20",
        "verdict": "pass",
        "dealKiller": "Pet wearables have had a decade to validate as a venture category. Whistle (Mars Petcare distribution since 2016 ~$117M acquisition, multiple product generations), Fi Collar ($50M+ raised, GPS-anchored), FitBark, Tractive (~€60M revenue but GPS-not-health) — none has crossed €100M ARR. The category exists at €10-60M ARR ceilings, not venture scale. Pet humanization is real but it manifests as premium food/grooming/insurance spend, not as recurring surveillance hardware subscriptions. Pawmetric needs to name what is structurally different now — 'AI is better' is insufficient because Whistle has had internal AI POCs for years under Mars's research budget.",
        "patternMatches": [
          "Whistle (Mars Petcare, 2013-now): GPS+activity pioneer; acquired ~$117M (2016); despite Mars retail distribution + brand, never crossed €50M ARR after a decade with multiple product generations. The clearest documented category ceiling.",
          "Petnet (smart pet feeder): raised ~$14M; shut down Aug 2020 after AWS migration broke device fleet. Hardware reliability + subscription unit economics did not converge — same consumer-pet-IoT shape.",
          "Wagz (smart collar + invisible fence): filed Chapter 11 in 2022 despite raising material capital. Hardware-anchored consumer pet-tech category structurally unable to support venture economics.",
          "Felcana / Loomia / multiple pet-health-monitoring startups (2017-2024): EU/UK pet-health-wearable category has had 4+ funded entrants stall or pivot out. No category winner crossed €30M ARR."
        ],
        "unitEconomicsConcern": "12-month gross margin at €200 hardware + €20/mo + €80-150 CAC is ~€60/customer (zero hardware margin, ~€60 subscription COGS, ~€120 amortized CAC). Pet wearable industry hardware refresh cycle is 18-24 months (chewed, lost, water damage) — explicitly named in preMortem as 'high' likelihood failure. With 30-40% annual churn (industry norm) and a second hardware purchase at month 18, 24-month unit margin is single-digit euros per customer-year. Insurance-revenue-share is theoretical not contracted; without it the math does not clear venture-scale gross margin requirements.",
        "loadBearingAssumption": "Pet insurance carriers will pay premium-share or claims-reduction revenue to a third-party wearable provider, rather than (a) building their own monitoring or (b) requiring monitoring as a condition of policy at zero share. There is no published example of a pet insurer paying revenue-share to a wearable in EU or US at material scale. Lemonade Pet, Trupanion, ManyPets, Petplan, Bought By Many — none has a wearable-revenue-share product line, and the kill-test pw-k3 LOI bar is precisely the wedge that 10 years of category attempts have not produced.",
        "alternativeThesis": "Drop the consumer wearable thesis. Flip to B2B pet-vertical telematics: sell continuous-monitoring devices to (a) veterinary clinics as a chronic-disease-management tool they hand to osteoarthritis/diabetes patients alongside Librela/insulin, at €500-2,000/clinic/yr + per-patient SaaS, and (b) pet insurance carriers as a claims-reduction product applied to flagged-high-risk policies, at €5-15/policy/month built into premium economics. Different buyer (clinic VP / insurance underwriter), different revenue model (B2B SaaS not D2C subscription), different distribution (veterinary professional channel + insurance carrier sales, not paid social). €100K+ ACV, no consumer CAC, no hardware-chewing churn. The Tryfon family pharma network is much closer to vets than to D2C consumers — actually leveraged in this version vs not at all in the consumer one."
      }
    ],
    "industry": "consumer"
  },
  {
    "id": "medadherence-pharmacy",
    "title": "MedAdherence-RWE",
    "ycCategory": "Greek Pharma RWE + Tail-PIS Buy-Side",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Buy-side play in Greek pharmacy data infrastructure: Phase 0 lands a paid ELPEN or Pharmathen adherence-data contract at ≥€50K by Week 12. If it validates, T-Life acquires a non-Epsilon tail PIS vendor for low single-digit millions and owns the data pipe directly — instead of licensing into EpsilonNet (the consolidator that already runs >50% of Greek pharmacy desktops).",
    "description": "Re-spec'd AGAIN 2026-05-21 (2nd round) after the redTeamFindings[1] finding that the 'sell into 3 PIS vendors' framing was a category error: Farmakon is a product line of Epsilon CSA (EPSILON NET acquired 2022); LAVINET tucked Jan 2024 (€184K); Galaxy Pharma absorbed via SingularLogic SPA (€18.05M). EpsilonNet runs >50% Greek pharmacy desktop — the buyer set is effectively a monopsonist, not 3 independent vendors, and CGM PRESCRIBE (2025 Surescripts White Coat winner) proves the largest EU PIS vendors BUILD adherence natively rather than white-label. \n\nNew shape: invert from sell-side SaaS to buy-side data play. €40K Phase 0 buys a paid ELPEN or Pharmathen RWE contract (cash, not LOI) on a single branded-molecule cohort. Two binary outcomes at Week 12: (a) signed paid contract ≥€50K → T-Life balance sheet funds acquisition of a non-Epsilon tail PIS vendor (3-4 candidates exist in the 30-40% non-Epsilon tail at est. €2-5M EV per public M&A comps), gaining direct ownership of the data pipe + recurring rev from existing pharmacy seats; or (b) clean fail with a publishable RWE study and zero sunk integration. The PIS-vendor question becomes a build-vs-buy decision T-Life controls, not a license-into-a-competitor negotiation. WinMedica's leverage converts from soft co-marketing weight to hard acquisition-target sourcing.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "1 named buyer in Phase 0 (ELPEN OR Pharmathen, paid contract). Acquisition target set in Phase 1 = 2 confirmed independent tuck-in candidates (Europharmacy IKE, In-house Solutions / E-Care) + 1 scale-meaningful structured option (Dioscourides AE 35% minority via ILYDA). See research/tail-pis-targets.md.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "After acquisition + data pipe live: cross-sell Greek RWE methodology to DE/IT pharma (Stada, Menarini). EU PIS roll-up out of scope; CGM PRESCRIBE proves they build natively."
      },
      {
        "market": "middle-east",
        "fit": "red",
        "note": "Not pursued."
      },
      {
        "market": "balkans",
        "fit": "red",
        "note": "Not pursued."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ELPEN is the Phase 0 anchor design-partner (paid contract, not LOI) — same family, same building. WinMedica relationships convert from soft co-marketing to hard acquisition-target sourcing on the tail-PIS deal. T-Life Capital balance sheet at €2-5M is exactly sized for the acquisition without VC. No other portfolio idea has this tight a fit between asset edge + capital structure + execution capability.",
    "tags": [
      "buy-side-play",
      "greek-pharma-rwe",
      "elpen-anchor-contract",
      "tail-pis-acquisition",
      "t-life-balance-sheet",
      "phase0-funded"
    ],
    "addedDate": "2026-05-16",
    "notes": "RE-SPEC v3 2026-05-21 (2nd-round red-team adoption). Decision basis: redTeamFindings[1] surfaced EpsilonNet's >50% Greek pharmacy desktop consolidation (CSA 2022, LAVINET Jan 2024, Galaxy Pharma via SingularLogic SPA €18.05M). The v2 'sell into 3 vendors' framing was effectively a monopsonist negotiation against a listed consolidator with a fresh M&A track record buying competing codebases for sub-€200K. Adopting redTeamFindings[1].alternativeThesis verbatim: pivot to buy-side, anchor Phase 0 on ELPEN/Pharmathen paid data contract, use Week-12 outcome to gate a T-Life balance-sheet acquisition of a non-Epsilon tail PIS vendor.\n\nNow the ONLY funded Phase 0 bet — HospitalStaff-API was killed 2026-05-21 after 2nd-round red-team found 3 independent kill vectors (Aya UK + RLDatix-Allocate already build; EUDI Wallet eIDAS 2.0 commoditizes by Dec 2027; Directive 2005/36/EC Annex V auto-recognition makes 'data' thin). See catalog-cuts.ts.\n\nTAIL-PIS TARGET RESEARCH 2026-05-21 (see research/tail-pis-targets.md): only 2 clean independent tuck-ins exist (Europharmacy IKE, In-house Solutions AE). Entersoft already absorbed SmartPharmaSys Nov 2022 (€1.8M for €1.1M rev / €0.22M EBITDA — exact deal-box comp). Scale-meaningful path = 35% minority of Dioscourides AE (ILYDA carve-out). ma-k2 reshaped to accept either tuck-in OR minority structure as deployable-capital path.\n\nPRIOR HISTORY:\n- v1 2026-05-16: standalone pharmacy SaaS via WinMedica warm channel\n- 2026-05-20 1st red-team (verdict: revise — channel confusion)\n- v2 2026-05-21 morning: certified module into SCRIPTA/PharmaSoft/Farmakon @ €10-30/pharmacy/mo rev-share\n- 2026-05-21 evening 2nd red-team (verdict: proceed-with-caveats — Farmakon ≠ independent; monopsonist)\n- v3 2026-05-21 evening: this entry. Buy-side, ELPEN data contract Week-12 gate, tail-PIS acquisition Phase 1.\n- 2026-05-21 night: tail-PIS market research; ma-k2 reshaped to include Dioscourides minority option.",
    "whyNow": "ELPEN/Pharmathen RWE-data spend window: IQVIA Greece office sells Xponent/LRx feeds at scale to global pharma, but Greek branded-molecule adherence cohorts for ELPEN/Pharmathen-specific portfolios are NOT in IQVIA's standard SKU — they require purpose-built cohort design. EpsilonNet's roll-up has compressed independent-tail PIS valuations (LAVINET sold for €184K in Jan 2024) which puts 2-4 acquisition targets in the €2-5M EV range — exactly the T-Life balance-sheet check size. Both windows close in 12-18 months if EpsilonNet completes the roll-up or IQVIA productizes Greek-cohort RWE.",
    "roadToMoat": [
      {
        "timeframe": "Phase 0 — Week 0-12",
        "milestone": "Signed paid ELPEN OR Pharmathen RWE/adherence data contract ≥€50K (binary kill gate). NDA + tail-PIS vendor scoping list completed in parallel."
      },
      {
        "timeframe": "Phase 1 — Month 3-12",
        "milestone": "Acquisition of 1 non-Epsilon tail PIS vendor at €2-5M EV via T-Life balance sheet (no VC). Data pipe live across acquired vendor's pharmacy seats (est. 800-2,500). Second branded-molecule cohort live with ELPEN."
      },
      {
        "timeframe": "Phase 2 — Month 12-36",
        "milestone": "€2-5M ARR mix from (a) acquired PIS vendor's existing SaaS rev + (b) ELPEN/Pharmathen/Stada/Menarini RWE contracts. Optional: second tail-PIS tuck-in if EpsilonNet's pace permits. Off-balance-sheet, never raises VC."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€40K Phase 0 → €2-5M T-Life balance-sheet acquisition + €300-500K integration if Week-12 gate passes",
      "capexRatio": "20% capex (acquisition) / 80% opex",
      "note": "Acquisition cost is real but it is T-Life Capital's natural shape — 4th-gen Greek pharmaceutical family with €X balance sheet, buying a Greek pharmacy IT vendor at compressed post-EpsilonNet valuations. NEVER needs VC. Founder profile shifts from 'pharma SaaS BD lead' to 'M&A operator + RWE epidemiologist'."
    },
    "competitors": [
      {
        "name": "EPSILON NET / Epsilon CSA (Athens Exchange listed)",
        "type": "incumbent",
        "geography": "Greece",
        "note": "The monopsonist that killed the v2 thesis. NOT a competitor here — we explicitly sidestep them by buying a non-Epsilon tail vendor. They cannot block a sub-€5M private acquisition because by the time they notice, the data pipe is live."
      },
      {
        "name": "IQVIA Greece Information Solutions",
        "type": "incumbent",
        "geography": "Greece",
        "note": "Sells global Rx-fill feeds (Xponent/LRx) into ELPEN/Pharmathen accounts already. Differentiation = Greek-cohort branded-molecule design IQVIA does NOT productize; risk = they could productize it within 12-24mo if we prove the demand."
      },
      {
        "name": "Datavant, Komodo Health",
        "type": "incumbent",
        "geography": "US/Global",
        "note": "Not active in Greek pharmacy data; no presence on ELPEN/Pharmathen RFP lists."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 3,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.4
    },
    "ycRfsCorrelation": "Pharmacy-channel agetech with the strongest T-Life distribution leverage in the catalog after Aletheia.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "agetech",
    "assertions": [
      {
        "id": "ma-a1",
        "claim": "Polypharmacy prevalence in EU 65+: 23-58% range (median ~30-40%, NOT 55%+); non-adherence 6-55% (50% is high end not median). Prior thesis numbers were at the upper bound.",
        "source": "https://pubmed.ncbi.nlm.nih.gov/38812250/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Tightened — polypharmacy is real but prior thesis 55%+ was upper bound not median."
      },
      {
        "id": "ma-a2",
        "claim": "Adverse drug events cause ~8.7% of EU 60+ hospital admissions (range 3.3-23.1%) per meta-analysis. Prior '25%' overstated the median by ~3×.",
        "source": "https://pubmed.ncbi.nlm.nih.gov/28251277/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL: ADE-attributable admissions are ~10% (range up to 18%), not 25%. Severity of pain-point softens; thesis still real but less acute than framed."
      },
      {
        "id": "ma-a3",
        "claim": "Greek pharmacy total count ~10,500 (ELSTAT 10,220 in 2018; Greece has highest pharmacy-per-capita ratio in EU). WinMedica distribution into this network is the strongest non-pharma T-Life leverage in the catalog.",
        "source": "https://qz.com/183989/greece-has-a-truly-absurd-number-of-pharmacists",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ma-a4",
        "claim": "Germany e-Rezept mandatory for statutory health insurance prescriptions since 1 January 2024. Greek eRx mature. Italy SAR e-prescription transitioning.",
        "source": "https://www.bundesgesundheitsministerium.de/e-rezept",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ma-a5",
        "claim": "Pharma manufacturers pay $100K-$1M+ per indication for real-world adherence data (Komodo Health, Trinity Life Sciences precedent)",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ma-a6",
        "claim": "Non-Epsilon tail of Greek PIS market is THINNER than the v3 spec assumed: only 2 clean independent tuck-in candidates exist (Europharmacy IKE / euromedica TWO — Thessaloniki, founder-led, PFS Platinum award; In-house Solutions AE / E-Care — generalist IT house with pharmacy vertical). SmartPharmaSys was acquired by Entersoft Nov 2022 for €1.8M + earnout (€1.1M rev / €0.22M EBITDA). The scale-meaningful path = 35% minority of Dioscourides AE (carve-out sub of ATHEX-listed ILYDA, ~1,250+ pharmacies, founder still President with ~57% insider ownership).",
        "source": "research/tail-pis-targets.md (commissioned 2026-05-21)",
        "status": "confirmed",
        "lastChecked": "2026-05-21",
        "note": "MATERIAL: tightens ma-k2 target set. The 'scaled at 1000-2500 pharmacy seats' framing was wrong — the 2 tuck-in candidates are likely sub-500 seats each. Scale-meaningful coverage requires the Dioscourides minority structure (no operational control, trades for board seat + RWE data-rights)."
      },
      {
        "id": "ma-a7",
        "claim": "Entersoft / Smartware SmartPharmaSys deal Nov 2022 = €1.8M for ~€1.1M revenue / €0.22M EBITDA — exact public comp for the tuck-in deal box; proves tail-PIS vendors clear at ~1.6× revenue / ~8× EBITDA at the small end of the market.",
        "source": "https://www.entersoft.eu/2022/11/07/smartware-acquisition/",
        "status": "confirmed",
        "lastChecked": "2026-05-21",
        "note": "Anchors the €2-5M EV deal box but also signals competition: Entersoft is an active acquirer in the same space."
      }
    ],
    "killTests": [
      {
        "id": "ma-k1",
        "hypothesis": "Signed PAID ELPEN or Pharmathen RWE/adherence data contract ≥€50K by Week 12 — the binary kill (cash, not LOI)",
        "experiment": "Direct pitch to ELPEN R&D Director + Pharmathen Commercial; propose 1 branded-molecule retrospective + 6-month prospective adherence cohort with deliverable scope; ELPEN warm via family channel; cap iteration at 12 weeks",
        "costEur": 22000,
        "durationWeeks": 12,
        "killSignal": "ZERO signed paid contracts ≥€50K (KEY GATE — failing this kills the entire bet AND removes the Phase 1 acquisition option since no validated demand exists)",
        "validateSignal": "≥1 signed paid contract ≥€50K with concrete deliverable scope"
      },
      {
        "id": "ma-k2",
        "hypothesis": "By Week 14, deployable capital path is open via ONE of: (a) ≥1 of Europharmacy IKE / In-house Solutions AE willing-seller signal at €1-3M EV; (b) Dioscourides AE 35% minority + RWE data-rights term sheet with ILYDA at €2-5M total commitment",
        "experiment": "Targeted outreach to the 2 named tuck-in candidates (Europharmacy Thessaloniki + In-house Solutions) AND a parallel approach to ILYDA's President for the Dioscourides minority/JV structure. Reference Entersoft/SmartPharmaSys €1.8M comp (€1.1M rev / €0.22M EBITDA) as the deal-box anchor. M&A advisor if needed; otherwise direct founder-to-founder.",
        "costEur": 14000,
        "durationWeeks": 14,
        "killSignal": "BOTH tuck-in candidates decline AND ILYDA declines the Dioscourides minority/JV conversation (KEY GATE — failing this means even if ELPEN contract validates, there is no capital-deployment path)",
        "validateSignal": "≥1 of: tuck-in term sheet at €1-3M, OR Dioscourides minority + RWE-rights term sheet at ≤€5M total"
      }
    ],
    "preMortem": [
      {
        "cause": "ELPEN says 'we already get this from IQVIA' on first pitch — the secondary thesis was actually the primary thesis and it competes head-on with an entrenched supplier",
        "likelihood": "medium",
        "earlySignal": "ELPEN R&D Director's first reaction in opening meeting; if IQVIA contract is referenced as already covering the use case, pivot scope to Greek-cohort branded-molecule analysis that is explicitly OUT of IQVIA's productized scope"
      },
      {
        "cause": "Pharma data buyers (ELPEN, Pharmathen) decide IQVIA Xponent + LRx already covers their need at <€10K",
        "likelihood": "medium",
        "earlySignal": "ELPEN R&D Director's first reaction to data-product pitch; if 'we already get this from IQVIA' surfaces, the secondary thesis is dead and only the rev-share line is left"
      },
      {
        "cause": "PIS vendor signs LOI but stalls integration for 9+ months (Greek SaaS vendor execution risk)",
        "likelihood": "high",
        "earlySignal": "Build escrow / milestone-payment structure into LOI; if vendor pushes back on milestone structure, integration timeline IS the risk"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.08,
      "totalFailureBy36mo": 0.45,
      "basisOfEstimate": "Re-spec'd v3 2026-05-21 (buy-side); refined post-tail-PIS-research 2026-05-21 night. €1M ARR feasible if Week-12 ELPEN contract gates pass AND deployable-capital path resolves (tuck-in OR Dioscourides minority). Tuck-in path = acquired vendor brings €0.3-1M existing rev (SmartPharmaSys €1.1M comp) + €100-300K incremental from ELPEN-style contracts = €0.4-1.3M ARR exit. Minority path = no direct rev but board access + RWE data-rights into 1,250+ Dioscourides pharmacies — different shape, slower compound. €10M ARR explicitly UNLIKELY by design; this is a balance-sheet infrastructure bet, not a venture bet. Higher P(failure) than v2 reflects: (a) ELPEN/Pharmathen IQVIA-competition risk, (b) THINNER independent-tail than v3 assumed (only 2 tuck-in candidates, not 4), (c) Entersoft is an active competing acquirer (Nov 2022 comp), (d) acquisition integration risk new to T-Life operating model. €40K probe is binary-cheap regardless."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-20",
        "verdict": "revise",
        "dealKiller": "The 10,500-pharmacy 'WinMedica warm channel' is a category error. WinMedica sells DRUGS into pharmacies; pharmacies BUY drugs from WinMedica. That is the wholesale-rep buying motion (price, stock, term discounts, rebates) — not the SaaS buying motion (POS integration, eRx certification, workflow change, monthly subscription). Pharmacy software in Greece is bought from entrenched Pharmacy Information Systems — SCRIPTA, PharmaSoft, Farmakon, SoftOne — already certified against IDIKA's eRx + EOPYY claims + AADE myDATA rails and running the cash drawer. A drug-distributor warm intro gets you a coffee with the pharmacist-owner; it does not displace the certified PIS or earn a second monthly SaaS line. Worse: Greek pharmacy law (N.5607/1932 + 1963/91, reinforced by Council of State 2018 ruling on chain ownership) forbids non-pharmacist majority ownership and caps multi-shop concentration — the buyer described in the one-liner ('pharmacy chains and retail pharmacy groups') structurally DOES NOT EXIST in the home market. The thesis sells to a buyer persona that is illegal in Greece and fragmented owner-operator everywhere except the UK (Boots/Lloyds vertically integrated, no third-party SaaS room) and a handful of German Apothekenverbünde. Stack that on top of the validation pass already softening ADE-pain 3× (25% → 8.7%) and the urgency story can no longer justify a second SaaS spend.",
        "patternMatches": [
          "EveryDose / Pillsy / RXAnt — every B2C and pharmacy-channel adherence app shipped 2018-2024 either pivoted to payer/PBM (Wellth, Pillsy enterprise) or wound down (RXAnt absorbed by Tabula Rasa 2017, divested by 2023). No standalone pharmacy-channel adherence SaaS has reached escape velocity in a decade.",
          "Webster Care + MedAvail — blister-pack incumbents are price-commoditised; MedAvail wound down US pharmacy automation 2023 after >$300M destroyed. Hardware-anchored MDS economics broke; the software layer alone does not restore them.",
          "Greek pharmacy-commission kill (longevity-pharmacy-protocol redTeamFindings[0], 2026-05-16): 25-30% pharmacy norm + EOF + owner-operator fragmentation already killed an adjacent pharmacy-channel thesis in this same catalog 4 days ago. The pattern is fresh.",
          "Veeva Crossix + Komodo Health + IQVIA Xponent: pharma data sourcing has moved upstream to EHR + payer-claims aggregation (Datavant, IQVIA OneKey, Trinity DataCloud). De-identified Rx-fill data is already commoditised via IQVIA Xponent / LRx at <€10K/indication for EU coverage — not the €100K-€1M+ in assertion ma-a5."
        ],
        "unitEconomicsConcern": "€100-300/pharmacy/month against a fragmented owner-operator buyer whose existing PIS (SCRIPTA, PharmaSoft, Farmakon) already runs ~€80-150/month and bundles eRx/EOPYY/myDATA. MedAdherence becomes a discretionary second SaaS at +60-200% of current IT spend, sold one-pharmacy-at-a-time at €1.5-3.6K ACV. Realistic Greek CAC of €400-800/door (3-touch sales + IDIKA integration test + 90-day pilot) and 25-35% independent-owner churn pushes LTV/CAC below 2 even with warm intros. The pharma-data line (ma-a5, [ESTIMATE]) is load-bearing for margin lift — and IQVIA already commoditised that feed. 10K pharmacies × €200/mo = €24M ARR ceiling ONLY at 100% Greek penetration with zero churn; realistic 8-12% 3-yr EU-5 penetration = €8-15M ARR ceiling. Not venture-scale at stated 25% P(€10M ARR 36mo).",
        "loadBearingAssumption": "That a drug-distribution relationship (WinMedica → pharmacy purchase orders for SKUs) converts to a software-sales relationship (MedAdherence SaaS + IDIKA/eRx integration + workflow change). These are two different buying motions, two different personas inside the pharmacy (purchasing/owner for drugs; owner + IT-vendor for software), and two different sales cycles. assertions[] verify pharmacy COUNT (ma-a3) and e-prescription rails (ma-a4) but never test whether ANY WinMedica account-rep call has ever closed a software sale — because WinMedica has never sold software. Same channel-confusion Aletheia's red-team flagged (lab-rep ≠ QA-Director buyer).",
        "alternativeThesis": "Drop the standalone pharmacy-channel SaaS. Ship as a CERTIFIED ADHERENCE MODULE inside existing pharmacy PIS vendors (SCRIPTA, PharmaSoft, Farmakon in GR; Pharmaserv, ADG, NOVENTI in DE; CompuGroup in IT) at €10-30/pharmacy/month rev-share + one-time integration license per PIS vendor. Buyer becomes the PIS vendor PM (3-month B2B SaaS cycle, 5-8 vendors covers 80% of EU-5 pharmacies), not 5,000 owner-operators one-by-one. WinMedica's actual leverage shifts from 'warm pharmacy intro' (low-value) to 'co-marketing weight with the PIS vendor that wants WinMedica's drug-stock feed' (structural). Secondary thesis: sell the de-identified adherence dataset to ONE Greek pharma (ELPEN, Pharmathen) for branded-molecule interventions — concrete, T-Life-adjacent buyer, €100-300K/yr feasibility — rather than chasing global pharma R&D buyers who already license IQVIA Xponent. Kill signal at 90 days: if 3 of the top-8 EU-5 PIS vendors decline a paid integration LOI, capital returns."
      },
      {
        "date": "2026-05-21",
        "verdict": "proceed-with-caveats",
        "dealKiller": "The 'SCRIPTA / PharmaSoft / Farmakon' tri-buyer framing is already structurally invalid as written. Farmakon is not an independent PIS vendor — it is a product line of Epsilon CSA, a wholly-owned subsidiary of EPSILON NET (CSA acquired 2022; LAVINET tucked in January 2024 for EUR184K; Galaxy Pharma added via the SingularLogic acquisition for EUR18.05M). Epsilon CSA already runs >50% share of Greek pharmacy desktop (~5,200 of ~10,400 pharmacies as of public 2020 disclosures, likely higher now post-LAVINET). The 'buyer is the PIS-vendor PM' motion therefore collapses from 3 named targets to effectively 1.5: one listed-equity consolidator with M&A optionality, plus one or two smaller holdouts that the consolidator can buy for low single-digit millions if a third party tries to make them strategic. The bet is not 'sell to 3 vendors' — it is 'sell to EpsilonNet, on EpsilonNet's terms.' That changes the rev-share negotiation from competitive to monopsonistic, and changes WinMedica's leverage from 'co-marketing with a vendor that needs drug-stock data' (multiple suitors) to 'one consolidator who can already build or acquire the module cheaper than license it.' The EUR40K probe is still cheap enough to run, but the spec mis-states the buyer landscape.",
        "patternMatches": [
          "EpsilonNet roll-up of Greek pharmacy software 2022-2024: CSA acquired 2022 (EUR2.73M), LAVINET acquired Jan 2024 (EUR184K), SingularLogic / Galaxy Pharma absorbed via EUR18.05M SPA. Pylon Farmakon + Galaxy Pharma now sit under one P&L. The 'fragmented PIS landscape' assumption in the spec is 2-3 years out of date.",
          "Cardinal Health Outcomes platform delivered 6.5M MTM services H1 2025 (+21% YoY) via direct-to-pharmacy SaaS, not via PMS rev-share — the proven EU/US MTM monetisation route bypasses the PIS vendor entirely, suggesting the rev-share-via-incumbent motion has no live precedent at scale.",
          "IQVIA operates a Greece Information Solutions office selling Xponent / LRx-equivalent feeds directly to Greek pharma; Pharmathen + ELPEN are existing IQVIA-territory accounts. The secondary EUR100-300K/yr thesis competes head-on with an entrenched supplier already calling on those buyers.",
          "CompuGroup CGM PRESCRIBE (2025 Surescripts White Coat winner) — adherence/medication-management is being built natively by the largest EU PIS vendor, not licensed-in. No 2024-2026 precedent of a major EU PIS vendor white-labelling third-party adherence at EUR10-30/pharmacy/mo could be found.",
          "Greek pharmacist adherence-attitudes survey (PMC11123515, 2024): Greek community pharmacists report low active MTM workflow adoption and structural barriers (time, reimbursement, training). End-user pull for an adherence module at the counter is unconfirmed even if the PIS vendor agrees to bundle it."
        ],
        "unitEconomicsConcern": "Monopsonistic buyer (EpsilonNet) sets the rev-share floor, not the founder. EUR10-30/pharmacy/mo with a 50/50 split = EUR5-15/mo to the module; 1,500-pharmacy first integration = EUR90-270K ARR gross, EUR45-135K net of vendor share — below the EUR500K-1M T-Life balance-sheet check the spec contemplates deploying next. ma-a5 (pharma data EUR100K-1M/indication) remains [ESTIMATE] and is contested by live IQVIA Greek-office presence on the same accounts.",
        "loadBearingAssumption": "That EpsilonNet (post-CSA, post-LAVINET, post-Galaxy-Pharma) will license a third-party adherence module rather than build it themselves or acquire the team. A consolidator with 50%+ market share, in-house engineering, and a EUR184K precedent for buying a comparable code-base has every incentive to wait, copy, or acquire-on-the-cheap rather than pay perpetual rev-share. The 'they have zero AI roadmap so they'll white-label' claim in whyNow is the single point of failure and is not evidenced.",
        "alternativeThesis": "Re-frame as a buy-side play, not a sell-side SaaS. Instead of pitching an adherence module INTO EpsilonNet rev-share, use the EUR40K Phase 0 to build a sharp adherence/MTM dataset + one branded-molecule retrospective study with ELPEN as the anchor design-partner (cash, not LOI). Outcome at Week 12 is either (a) a paid ELPEN data contract that proves the data-layer thesis standalone — at which point T-Life's next move is to acquire one of the holdout sub-scale PIS vendors (the non-EpsilonNet 30-40% tail) for low single-digit millions and own the data pipe directly, or (b) a clean fail with a publishable RWE study and no sunk integration. This sidesteps the monopsonist, makes the PIS-vendor question a build-vs-buy decision T-Life controls, and converts WinMedica's leverage from co-marketing-weight (soft) to acquisition-target-sourcing (hard). Kill gate stays binary at Week 12: signed ELPEN/Pharmathen data contract >=EUR50K, not a PIS rev-share LOI."
      }
    ]
  }
];
