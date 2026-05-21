import type { Idea } from "../types";

export const ideas: Idea[] = [
  {
    "id": "altp-techshift",
    "title": "TechShift ALTP",
    "ycCategory": "Modern Metal Mills",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "Workforce mobility and upskilling platform connecting displaced industrial and pharmaceutical manufacturing workers in SE Europe to life sciences and tech roles, anchored to the Athens LifeTech Park ecosystem.",
    "description": "Pharmaceutical and industrial manufacturing in Greece and the Balkans is undergoing an automation-driven workforce transition. CNC operators, lab technicians, and production line supervisors are being displaced by automation at exactly the moment that Greece's life sciences and tech sectors — anchored by investments like ALTP — face acute talent shortages. There is no structured pathway between these two pools. Workers do not know which of their skills transfer to biotech QC, clinical data management, or medical device assembly. Employers do not know how to identify and retrain industrial talent efficiently.\n\nTechShift ALTP is a B2B workforce mobility platform that works with industrial employers, regional employment agencies, and life sciences companies to map transferable skills, design 8-16 week transition programmes, and place workers into new roles. It is anchored to the ALTP campus in Athens, which provides physical training infrastructure, industry partner access, and a credentialing signal that employers in the Greek life sciences corridor recognise. The platform is bilingual Greek-English and integrates with OAED (Greece's public employment service) for co-funded training, reducing employer cost.\n\nThis concept sits at the intersection of T-Life's venture thesis pillars — Age-Inclusive Work and Migration and Workforce Mobility — and the industrial automation disruption driven by the Modern Metal Mills category. Competitors in the upskilling space (Coursera for Business, LinkedIn Learning) are generic and have no regional industry partnerships or physical infrastructure. Greece's Recovery and Resilience Facility funding includes a significant workforce reskilling allocation that expires in 2026, creating a funding tailwind for employers who act now. ALTP positions T-Life as the convener rather than just a financial investor.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "ALTP is a direct T-Life asset providing physical infrastructure, industry network, and policy relationships. Greek OAED co-funding and RRF workforce budgets provide a near-term revenue subsidy while the platform scales.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Bulgaria, Romania, and Serbia face identical industrial workforce transition dynamics with large manufacturing bases and growing life sciences FDI requiring localised talent pipelines."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Workforce transition platforms are gaining policy support across EU industrial regions; the ALTP model could replicate in other national innovation parks facing similar talent gaps."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "UAE and Saudi workforce nationalisation programmes (Emiratisation, Saudisation) create demand for structured industrial-to-life-sciences transition pathways as domestic manufacturing scales."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ALTP is a T-Life portfolio asset that provides the physical anchor, industry network, and policy relationships this platform requires. No other founder could access this infrastructure without years of relationship building.",
    "tags": [
      "workforce-mobility",
      "upskilling",
      "life-sciences",
      "age-inclusive-work",
      "altp",
      "reskilling",
      "industrial-transition"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "Greece's unemployment rate among 45-64 year-olds in manufacturing regions (Tripoli, Volos, Thessaloniki industrial zones) remains at 15-18% as automation displaces traditional roles, while life sciences and tech companies in Athens report 6-9 month hiring cycles for mid-level technical positions — a clear matching failure. The EU Recovery and Resilience Facility allocated €1.3B to Greek digital skills and green transition workforce programs through 2026, creating funded demand for upskilling platforms that can demonstrate employment outcomes. OAED's 2024 digital transformation introduced API-based program enrollment, enabling automated learner-to-program matching that was impossible with the previous paper-based system.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Launch pilot cohort of 50 displaced manufacturing workers at ALTP Athens campus; build AI skills-mapping engine that translates industrial experience (CNC, QC, process control) into life sciences job requirements; partner with 5 Athens employers for placement commitments."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "70%+ placement rate for pilot cohort; integrate with OAED subsidy programs for employer co-funding; expand to 200 learners; build proprietary skills taxonomy mapping industrial competencies to 150+ life sciences and tech roles."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "500+ career transitions completed; employer network of 30+ companies with recurring hiring demand; proprietary outcome data (placement rates by skill profile, salary uplift, retention) creates credibility moat that no competitor can match without equivalent cohort data."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Expand to Thessaloniki and Balkans industrial corridors; launch employer-funded upskilling contracts (train-to-hire model); €1.5M+ revenue from blended learner fees, employer contracts, and EU program co-funding."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€200K-€450K",
      "capexRatio": "10% capex / 90% opex",
      "note": "ALTP provides physical campus and facilities at no incremental cost; main investment is curriculum development, career coaching staff, and employer relationship management."
    },
    "competitors": [
      {
        "name": "Coursera for Business",
        "type": "incumbent",
        "geography": "Global",
        "note": "Online upskilling platform; generic, no life sciences lab or regulatory track"
      },
      {
        "name": "PharmaLex Academy",
        "type": "adjacent",
        "geography": "EU",
        "note": "Regulatory affairs training; narrow scope, not full workforce transformation"
      },
      {
        "name": "Generation (McKinsey spinout)",
        "type": "startup",
        "geography": "Global",
        "note": "Demand-led workforce training; not pharma/biotech-specific"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 2,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 5,
      "regulatoryRisk": 5,
      "founderAvailability": 4,
      "composite": 3.65
    },
    "ycRfsCorrelation": "YC wants software that transforms industrial operations. TechShift connects displaced manufacturing workers to life sciences roles through AI-matched upskilling pathways.",
    "tlifeAssetRefs": [
      "altp",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "ts-a1",
        "claim": "ALTP is an active industrial park hosting life-sciences and adjacent SMEs",
        "source": "[USER-STATED — see tlifeAssets.ts#altp]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a2",
        "claim": "OAED / RRF co-funding pathways for workforce-transition programs exist in Greece",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a3",
        "claim": "EU Social Fund (ESF+) co-funds workforce transition",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a4",
        "claim": "Generation (US/UK), Multiverse (UK) are adjacent workforce-transition platforms reaching $50M+ revenue",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a5",
        "claim": "Greek industrial layoffs / displaced manufacturing workers ~10K+/year in SE Europe",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "ts-k1",
        "hypothesis": "ALTP secures €500K+ OAED/RRF co-funding for the first 200-person cohort within 12 weeks",
        "experiment": "Submit co-funding application; engage Greek Ministry of Labour",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "No co-funding committed in 12 weeks OR <€200K",
        "validateSignal": "≥€500K committed for cohort 1"
      },
      {
        "id": "ts-k2",
        "hypothesis": "First 50 cohort graduates place into 20+ ALTP tenant SMEs at €30K+ starting salaries within 6 months of graduation",
        "experiment": "Run cohort 1 of 50; track placements + salaries",
        "costEur": 30000,
        "durationWeeks": 26,
        "killSignal": "<60% placement rate OR <50% at €30K+",
        "validateSignal": "≥70% placement at ≥€30K"
      },
      {
        "id": "ts-k3",
        "hypothesis": "ALTP tenant demand for cohort grads is ≥200 hires/year by year 2",
        "experiment": "Survey 50 ALTP tenants + 20 external SE Europe life-sciences companies",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "<50 expected hires/year aggregated",
        "validateSignal": "≥150 expected hires/year with named-position commitment"
      }
    ],
    "preMortem": [
      {
        "cause": "OAED/RRF co-funding pipeline disrupts at political transition (Greek government change)",
        "likelihood": "medium",
        "earlySignal": "Track election cycles + Ministry of Labour policy statements"
      },
      {
        "cause": "Cohort placement rate fails to reach venture-scale economics (60%+ placement at sufficient salary)",
        "likelihood": "medium",
        "earlySignal": "Kill-test ts-k2 results in Month 6"
      },
      {
        "cause": "ALTP tenant demand for cohort grads doesn't materialize at scale — Greek life-sciences hiring is too slow",
        "likelihood": "medium",
        "earlySignal": "Kill-test ts-k3 results"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.5,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.25,
      "basisOfEstimate": "RRF/ESF+ co-funding subsidizes Y1-2 revenue significantly — €1M ARR is achievable mostly on grants. €10M ARR requires expansion beyond Greek-only TAM (DACH, Italy, Iberia displaced-worker programs) and proven placement-rate model — harder. Generation/Multiverse hit $50M+ but each took 5-7 years."
    },
    "industry": "workforce-saas"
  },
  {
    "id": "olaf-trace-eu-funds",
    "title": "OLAFTrace",
    "ycCategory": "Infra for Government Fraud Hunters",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "Automated corporate structure tracing and beneficial ownership mapping purpose-built for EU structural fund fraud investigations.",
    "description": "Greece absorbed over €35B in EU cohesion funds across 2014-2020 programming period, with OLAF opening 15+ active investigations into Greek entities as of 2025. Investigative auditors at national audit authorities, OLAF liaison offices, and anti-corruption prosecutors face a structural problem: fraudulent beneficiaries deliberately obscure ownership through layered Greek, Cypriot, and offshore shell structures, making beneficial ownership reconstruction a weeks-long manual process using disconnected national registries. The same pattern repeats across Bulgaria, Romania, and North Macedonia wherever EU structural funds flow. OLAFTrace ingests filings from GEMI (Greece), eBR (Cyprus), BRRA (Bulgaria), and ONRC (Romania), then applies graph traversal and NLP to reconstruct beneficial ownership chains, flag circular ownership, identify politically exposed persons, and cross-reference against EU debarment lists and OLAF published cases. The output is a litigation-ready evidence package with timestamped source citations — not a dashboard, but a case file. Integration hooks into the EC's ARACHNE risk-scoring tool and EDES debarment database position it as the missing last-mile layer that national authorities actually use for case prosecution. No credible European competitor has solved the multi-registry, multi-language graph reconstruction problem at case-file quality. Greek incumbent compliance vendors (e.g. Hellenic Data Service) sell raw data access, not investigative workflows. OLAF's own IT systems are underfunded. Timing is acute: the 2021-2027 programming period disbursements peak in 2026-2028, and the EC's anti-fraud strategy mandates member states upgrade detection tooling as a condition of fund access.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Greece and Cyprus are the natural beachhead: GEMI and the Cyprus Registrar of Companies are the highest-fraud-risk registries OLAF investigates, Cypriot SPVs are the canonical EU fund fraud vehicle, and ALTP's Athens base gives warm access to EDEL (Greek Financial Intelligence Unit) and the Greek Court of Auditors.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Bulgaria, Romania, and North Macedonia have structurally identical EU fund fraud patterns and underfunded national audit authorities that cannot afford bespoke tooling — identical ICP, faster sales cycle than Brussels."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "OLAF headquarters and Europol EPPO expansion create a pan-EU procurement fraud market, but sales cycles into Brussels institutions are 18-36 months and require established framework contracts."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC sovereign wealth audit bodies and Dubai's CBUAE beneficial ownership registry expansion create a plausible wedge, but fraud typology differs materially from EU fund fraud and requires product re-segmentation."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "WinMedica and ELPEN have first-hand experience navigating Greek procurement compliance and OLAF audit exposure; ALTP's network includes legal and regulatory contacts at the Greek Ministry of Development who are the direct buyer persona. T-Life can seed the first paying pilot through existing institutional relationships without a cold sales motion.",
    "tags": [
      "eu-funds",
      "beneficial-ownership",
      "graph-analytics",
      "anti-fraud",
      "government-tech",
      "compliance"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nFold-in (2026-05-16): procurement-ghost-detector (Phantomcheck) — ghost-contractor and bid-rigging detection — had the same institutional buyer (Hellenic Court of Auditors / EPPO) as OLAFTrace with weaker tlifeEdge. Portfolio red-team verdict: fold as a second module in OLAFTrace rather than run a parallel sales motion. Procurement-fraud detection is now feature #2 of OLAFTrace.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 2 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "The European Public Prosecutor's Office (EPPO) became fully operational across 22 member states in 2023-2024 and opened 1,900+ investigations in its first two years, creating massive demand for corporate structure tracing tools that can map beneficial ownership across multiple EU member state registries. Greece's new Anti-Money Laundering Authority (AMLA, Law 5042/2023) mandated that all legal entities register ultimate beneficial owners in the Central UBO Register with machine-readable APIs by mid-2024. The EU's 6th Anti-Money Laundering Directive (2024) requires cross-border beneficial ownership verification that currently takes auditors 40-80 hours per entity to complete manually across fragmented national registries.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Build corporate structure graph engine ingesting Greek GEMI, Cypriot DRCOR, and Bulgarian Commercial Register data; deploy UBO mapping tool for 3 pilot users at Greek audit authority (EDEL) and EPPO Athens office."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Expand to Romanian, Albanian, and North Macedonian registries; process 500+ corporate structure traces; build anomaly detection for circular ownership patterns and nominee director networks common in EU fund fraud schemes."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Proprietary cross-border corporate graph covering 6 SE European jurisdictions with 100K+ entities mapped; this dataset does not exist in any commercial product — creating a structural data moat; 10+ government and institutional clients."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Preferred EPPO investigation tool for SE European cases; expand to Western Balkan pre-accession countries; launch risk scoring API for EU structural fund disbursement authorities; explore commercial KYC/KYB product for banks and law firms."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€250K-€500K",
      "capexRatio": "15% capex / 85% opex",
      "note": "Pure software platform; main cost is legal and regulatory expertise for navigating government procurement cycles and data access agreements across multiple jurisdictions."
    },
    "competitors": [
      {
        "name": "Transparent Systems",
        "type": "startup",
        "geography": "EU",
        "note": "EU fund transparency analytics; public data focus, no deep corporate tracing layer"
      },
      {
        "name": "Riskified",
        "type": "adjacent",
        "geography": "Israel/Global",
        "note": "Fraud detection for e-commerce; methodology transferable but not built for EU funds"
      },
      {
        "name": "Refinitiv (LSEG) World-Check",
        "type": "incumbent",
        "geography": "Global",
        "note": "Entity risk screening; KYC/AML focus, not EU procurement fraud reconstruction"
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 3,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.2
    },
    "ycRfsCorrelation": "YC wants tools that automate document parsing and corporate structure tracing for fraud investigations. OLAFTrace does exactly this for EU structural fund fraud — mapping shell company networks.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "ot-a1",
        "claim": "EU Cohesion Policy 2021-27: €392B current prices (€330B 2018 prices); €380B was not an accurate EC figure",
        "source": "https://ec.europa.eu/regional_policy/funding/available-budget_en",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior €380B refuted; correct figure €392B (current) or €330B (2018 prices)."
      },
      {
        "id": "ot-a2",
        "claim": "OLAF / EPPO investigators have publicly identified beneficial-ownership tracing as a tool gap",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ot-a3",
        "claim": "Hellenic Court of Auditors + Greek Ministry of Development are warm intros via T-Life network",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ot-a4",
        "claim": "Sayari raised $40M Series C 2021 (subsequent rounds expanding); Kharon is established sanctions/CFIUS intel vendor; Refinitiv World-Check is LSEG-owned legacy screening database",
        "source": "https://sayari.com/resources/sayari-labs-secures-40m-series-c/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ot-a5",
        "claim": "UBO (beneficial-ownership) directives create EU-wide ownership-data registries",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ot-a6",
        "claim": "Folded scope: procurement-ghost-detector (Phantomcheck) — bid-rigging + ghost-contractor detection now Module 2",
        "source": "[INTERNAL — see catalog-cuts.ts]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "ot-k1",
        "hypothesis": "1 EU member-state audit authority signs at €100-250K in 12 weeks",
        "experiment": "Direct outreach to Hellenic Court of Auditors + 4 EU equivalents (Italy Corte dei Conti, Spain Tribunal, etc.)",
        "costEur": 7000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past procurement-eligibility-checks",
        "validateSignal": "≥1 signed at €100K+ OR named procurement-cycle timeline"
      },
      {
        "id": "ot-k2",
        "hypothesis": "Platform resolves 3 named complex ownership cases in <48 hours each (vs current human-investigator baseline of 1-3 weeks)",
        "experiment": "Anonymized real cases from Hellenic Court of Auditors archive; measure resolution time + accuracy",
        "costEur": 5000,
        "durationWeeks": 8,
        "killSignal": "Resolution takes >5 days OR accuracy <80% vs ground truth",
        "validateSignal": "≤48hr resolution AND ≥90% accuracy on all 3 cases"
      },
      {
        "id": "ot-k3",
        "hypothesis": "Data lineage meets court-admissible standard validated by 1 maritime/financial-crime law expert",
        "experiment": "Submit sample case package to law-firm review",
        "costEur": 4000,
        "durationWeeks": 4,
        "killSignal": "Reviewer flags chain-of-custody or source-data sovereignty gaps",
        "validateSignal": "Reviewer rates package as court-admissible"
      }
    ],
    "preMortem": [
      {
        "cause": "Sayari / Kharon enter European public-sector market with brand + scale",
        "likelihood": "medium",
        "earlySignal": "Monitor Sayari/Kharon EU expansion + government-RFP wins"
      },
      {
        "cause": "UBO registries close or restrict access (privacy litigation; e.g. CJEU Sovim 2022 case)",
        "likelihood": "medium",
        "earlySignal": "Track CJEU UBO cases; engage EU privacy regulators"
      },
      {
        "cause": "B2G sales cycle drags beyond 12 months — burn exceeds first-revenue ramp",
        "likelihood": "high",
        "earlySignal": "Kill-test ot-k1 conversion velocity"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.35,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "B2G evidence-products have brutal sales cycles but high ACV (€100-250K). €10M ARR = 40-100 accounts × €100-250K — plausible across EU-27 + EPPO + OLAF. T-Life's Ministry of Development warm intros compress Greek first-sale; pan-EU pull-through depends on Greek case-file proof. Only entry in the catalog where the proprietary beneficial-ownership graph is a genuine data moat that compounds over time."
    },
    "industry": "govtech-identity"
  },
  {
    "id": "pharma-kickback-sentinel",
    "title": "Sentinel Pharma Compliance",
    "ycCategory": "Infra for Government Fraud Hunters",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "End-to-end HCP transfer-of-value monitoring and anomaly detection for European pharma companies navigating EFPIA transparency codes and national anti-kickback enforcement.",
    "description": "European pharmaceutical companies operating under EFPIA's Disclosure Code must report all transfers of value to healthcare professionals — consultancy fees, speaker honoraria, medical education sponsorships, travel — yet the aggregation problem across hundreds of cost centers, CRM systems, and third-party event agencies is solved today with spreadsheets and manual reconciliation. In Greece specifically, IFET (the national pharma association) transparency reporting failures have triggered multiple prosecutorial referrals since 2023, and the Hellenic Competition Commission opened a formal investigation into HCP inducement practices in 2024. Mid-size regional pharma companies like Elnova-class operators lack the SAP GRC budget of Roche or Pfizer but face identical enforcement exposure. Sentinel Pharma Compliance connects to ERP systems (SAP, Microsoft Dynamics, Odoo), expense management platforms, and CRM data to automatically classify, aggregate, and flag HCP payments against EFPIA thresholds and country-specific national limits. Its anomaly detection layer identifies patterns — same HCP receiving honoraria from multiple cost centers below individual reporting thresholds, a classic structuring signal — that manual compliance teams miss. The output feeds directly into the annual IFET/EFPIA disclosure XML submission format, eliminating the month-long reconciliation sprint. The competitive landscape is dominated by US-centric vendors (Veeva Vault PromoMats, Model N) that are over-engineered and priced for Big Pharma. No European mid-market solution addresses the EFPIA XML submission workflow with embedded anomaly detection. Greece's 2025 HCP transparency enforcement uptick and Elnova's expansion into Cyprus and the UAE create a captive design-partner pipeline from day one.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "WinMedica and Elnova are the ideal design partners and potentially anchor customers — T-Life has direct operational insight into the compliance pain, and the Greek IFET regulatory environment is the proving ground before EFPIA-wide rollout.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Serbia, Bulgaria, and Romania each have EFPIA member associations with national transparency codes and an even larger gap between enforcement pressure and compliance tooling maturity than Greece."
      },
      {
        "market": "europe",
        "fit": "green",
        "note": "EFPIA code is pan-European and the mid-market pharma segment (€50M-€500M revenue) across Spain, Portugal, and CEE is chronically underserved by enterprise GRC vendors — a large replicable ICP."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "UAE MOHAP and Saudi SFDA are tightening HCP transfer-of-value rules in line with EFPIA as GCC pharma markets mature; Elnova's Dubai HQ creates a direct entry point."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "WinMedica's commercial operations team lives this problem quarterly during IFET reporting cycles; Elnova's multi-jurisdiction structure (Greece, Cyprus, UAE) creates a built-in multi-market test case. T-Life can validate product-market fit without external customer development spend.",
    "tags": [
      "pharma-compliance",
      "hcp-transparency",
      "efpia",
      "anomaly-detection",
      "regtech",
      "transfer-of-value"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 2 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "EFPIA's updated Disclosure Code (2024 revision) expanded transfer-of-value reporting to include digital interactions, virtual advisory boards, and indirect payments through medical education providers — tripling the volume of reportable transactions for mid-sized pharma companies. Greece's IFET enforcement actions increased 300% between 2022-2024, with fines reaching €500K+ per violation, transforming HCP transparency from a compliance exercise to a financial risk management priority. AI anomaly detection on financial transaction patterns only became practical for pharma-scale datasets (50K+ annual HCP interactions) with the cost reductions in embedding models and vector databases in 2024.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Deploy anomaly detection engine on WinMedica's HCP transfer-of-value data (3 years historical); build EFPIA/IFET compliance rule engine covering Greek, Cypriot, and Bulgarian disclosure requirements; identify 10+ historical anomalies that manual review missed."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Onboard 3 additional pharma companies in Greece; process 20K+ HCP interactions; build proprietary risk scoring model trained on IFET enforcement patterns and EFPIA disclosure benchmarks."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "10+ pharma clients across SE Europe; proprietary anomaly pattern library (200+ kickback typologies specific to SE European pharma markets) creates detection accuracy that generic compliance tools cannot match."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Expand to GCC pharma markets (Saudi SFDA transparency requirements launching 2026); launch predictive compliance module that flags high-risk HCP relationships before transactions occur; €1.5M+ ARR."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€200K-€400K",
      "capexRatio": "10% capex / 90% opex",
      "note": "Pure SaaS product with minimal infrastructure costs; WinMedica provides free design-partner access and reference customer status; main cost is compliance-domain engineering talent."
    },
    "competitors": [
      {
        "name": "Veeva CRM Engage",
        "type": "incumbent",
        "geography": "Global",
        "note": "HCP engagement platform with spend tracking; compliance add-on, not sentinel-grade monitoring"
      },
      {
        "name": "Medidata (Dassault)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Clinical data platform with some transparency features; not ToV monitoring focused"
      },
      {
        "name": "Sunshine Compliance (various)",
        "type": "adjacent",
        "geography": "USA/EU",
        "note": "Several niche ToV reporting tools exist; fragmented, no AI anomaly detection"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.5
    },
    "ycRfsCorrelation": "YC wants infrastructure for evidence organization in fraud cases. Sentinel monitors healthcare professional payments and transfer-of-value patterns, flagging potential kickback violations.",
    "tlifeAssetRefs": [
      "elpen",
      "winmedica",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "se-a1",
        "claim": "EFPIA Disclosure Code covers 33 European countries (Austria through Ukraine including UK, Turkey, Russia, Serbia)",
        "source": "https://www.efpia.eu/media/25837/efpia-disclosure-code.pdf",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "se-a2",
        "claim": "Greek Law 4316/2014 Article 66 prohibits HCP gifts >€15 (incl. VAT); mandates ToV disclosure via EOF website within 6 months of calendar year-end",
        "source": "https://iclg.com/practice-areas/pharmaceutical-advertising-laws-and-regulations/greece",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "se-a3",
        "claim": "Top-20 EU pharma spend €1-5M+/year per company on HCP compliance monitoring",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "se-a4",
        "claim": "Veeva Vault PromoMats covers adjacent promotional content compliance but not anomaly detection",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "se-a5",
        "claim": "IQVIA Reach and Frequency products handle reporting but not real-time monitoring",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "se-k1",
        "hypothesis": "2 EU mid-cap pharma compliance officers sign at €60-150K ACV in 10 weeks",
        "experiment": "Direct pitch via ELPEN compliance team + cold outreach to 8 EU mid-cap pharma",
        "costEur": 5000,
        "durationWeeks": 10,
        "killSignal": "<1 signed pilot",
        "validateSignal": "≥2 signed at €60K+ ACV"
      },
      {
        "id": "se-k2",
        "hypothesis": "Anomaly detection finds ≥1 genuine kickback pattern in design-partner historical data (within bounds of acceptable risk)",
        "experiment": "Run model on ELPEN historical HCP-TOV data; manual review of flagged anomalies",
        "costEur": 8000,
        "durationWeeks": 8,
        "killSignal": "0 true positives OR >50% false positive rate",
        "validateSignal": "≥1 true positive AND <20% false positive rate"
      },
      {
        "id": "se-k3",
        "hypothesis": "EFPIA XML filing format integration validated end-to-end across 3 EU jurisdictions",
        "experiment": "Build EFPIA submission pipeline; test against published schemas (Greece + 2 others)",
        "costEur": 4000,
        "durationWeeks": 6,
        "killSignal": "Pipeline fails validation in any jurisdiction",
        "validateSignal": "All 3 jurisdictions pass schema validation; pilot agency signs"
      }
    ],
    "preMortem": [
      {
        "cause": "Veeva PromoMats extends into transfer-of-value monitoring + anomaly detection",
        "likelihood": "medium",
        "earlySignal": "Track Veeva product announcements; engage Veeva PromoMats customer advisory boards"
      },
      {
        "cause": "Compliance officers under-staff and don't prioritize new tooling — €60-150K budget approval cycle too slow",
        "likelihood": "medium",
        "earlySignal": "Kill-test se-k1 conversion rate"
      },
      {
        "cause": "EFPIA changes disclosure format / national variants diverge — integration cost grows linearly with countries",
        "likelihood": "low",
        "earlySignal": "Annual EFPIA Code review; monitor for divergence"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.22,
      "totalFailureBy36mo": 0.25,
      "basisOfEstimate": "Compliance SaaS in pharma has hard budget lines and €60-150K ACV is well within range. €10M ARR = 100 customers × €100K average. 27 EFPIA member countries × 5-10 mid-cap pharma each = ~150-300 target accounts. Strongest unit-economic profile of the pharma cluster keepers."
    },
    "industry": "pharma-life-sciences"
  },
  {
    "id": "shipping-sanctions-tracer",
    "title": "VesselVerity",
    "ycCategory": "Infra for Government Fraud Hunters",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "AIS dark-voyage reconstruction and sanctions evasion evidence packaging for flag state authorities, port state control, and financial crime investigators in maritime jurisdictions.",
    "description": "Maritime sanctions evasion — ship-to-ship transfers with AIS transponders disabled, flag hopping through open registries, and beneficial ownership obfuscation through multi-layered Greek and Cypriot holding structures — has become the primary enforcement challenge for EU flag states and port authorities following Russia sanctions expansion in 2022-2024. Greek-flagged or Greek-managed vessels account for 21% of global tanker capacity; Piraeus is the world's largest ship management hub. The Hellenic Shipping Ministry and Greek port state control officers (Paris MOU) face hundreds of vessel inspections annually with limited tooling to reconstruct voyage history, validate ownership claims, or package evidence for OFAC/EU sanctions referral. VesselVerity combines commercial AIS historical data (Spire, exactEarth), satellite SAR vessel detection for dark-voyage reconstruction, and multi-registry beneficial ownership tracing (Marshall Islands, Liberia, Panama, Cyprus) to produce a forensic vessel dossier: reconstructed voyage history, ownership chain at time of voyage, flag state change history, and cross-reference against OFAC SDN, EU consolidated sanctions list, and OFSI. The workflow is designed for port state control officers and financial crime units at maritime banks (Piraeus Bank, Eurobank ship finance) who need defensible evidence packages, not raw satellite feeds. Existing maritime intelligence vendors (Windward, Pole Star) sell to compliance teams at large shipping companies as a screening tool. None produce prosecution-grade evidence packages for government investigators. The enforcement imperative is acute: the EU's 14th sanctions package (2024) introduced personal liability for ship managers facilitating sanctions evasion, creating demand from both regulators and the ship management industry itself to document compliance proactively.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Greece manages 21% of global tanker capacity from Piraeus, Cyprus is the dominant EU ship registration and holding company jurisdiction, and the Tryfon fleet gives T-Life direct operational credibility and a warm channel into the Piraeus ship management community — the densest concentration of the target buyer persona anywhere in the world.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "Dubai is a primary re-export and shadow fleet hub for Russia and Iran sanctions evasion; UAE CBUAE and the Dubai Financial Services Authority are under intense FATF pressure to demonstrate maritime financial crime enforcement capability."
      },
      {
        "market": "europe",
        "fit": "green",
        "note": "Paris MOU port state control covers 26 European maritime administrations all facing the same dark-voyage evidence gap; Hamburg, Rotterdam, and Antwerp port authorities are natural expansion buyers after Greek market validation."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Limited direct maritime enforcement jurisdiction, but Bulgarian and Romanian Black Sea port authorities are under EU pressure to improve sanctions screening and could adopt the tool as a downstream expansion after core EU rollout."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "The Tryfon fleet's operational presence in Piraeus provides direct access to the ship management community, Hellenic Shipping Ministry contacts, and Paris MOU port state control officers — T-Life can broker the first government pilot and simultaneously use VesselVerity for the fleet's own sanctions compliance documentation, creating a credible reference customer from day one.",
    "tags": [
      "maritime",
      "sanctions-evasion",
      "ais",
      "beneficial-ownership",
      "port-state-control",
      "financial-crime"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 3 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "EU sanctions enforcement expanded dramatically in 2024 with the 14th sanctions package targeting Russian oil shipping through Greek-managed fleets, creating urgent demand for AIS dark-voyage reconstruction tools from Hellenic Coast Guard and EU Naval Force operations. The UK's Office of Financial Sanctions Implementation (OFSI) and US OFAC both introduced secondary sanctions enforcement against ship management companies in 2024, making sanctions compliance an existential risk for Greek shipowners (who manage 60%+ of EU-flagged tonnage). Satellite AIS data providers (Spire, exactEarth) opened commercial APIs in 2024 with historical data going back to 2019, enabling dark-voyage reconstruction that was previously only available to military intelligence agencies.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Build AIS gap detection and dark-voyage reconstruction engine using satellite AIS data covering Mediterranean, Black Sea, and Persian Gulf; deliver pilot evidence packages for 10 vessels of interest to Hellenic Coast Guard maritime surveillance unit."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Process 500+ vessel tracks; build ship-to-ship transfer detection module using spatial pattern analysis; onboard 2 flag state authorities and 3 P&I clubs as subscribers."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Proprietary dark-voyage pattern library covering 2,000+ vessel behavioral profiles creates investigation accuracy that AIS data providers alone cannot offer; become evidence supplier for 5+ OFAC/OFSI investigation cases."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Preferred sanctions investigation platform for EU Maritime Safety Agency; launch beneficial ownership mapping module connecting vessel registries to corporate structures (integrated with OLAFTrace if co-developed); €2M+ ARR from government and P&I club subscriptions."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€300K-€600K",
      "capexRatio": "20% capex / 80% opex",
      "note": "Satellite AIS data licensing is the primary recurring cost (~€100K/year); GPU compute for spatial pattern analysis; Tryfon fleet provides real vessel data for model validation at no cost."
    },
    "competitors": [
      {
        "name": "Windward",
        "type": "startup",
        "geography": "Israel/Global",
        "note": "AI maritime intelligence platform with AIS analytics; closest direct competitor, well-funded"
      },
      {
        "name": "Pole Star (Veson)",
        "type": "incumbent",
        "geography": "UK/Global",
        "note": "Maritime tracking and compliance; established but less AI-native dark voyage detection"
      },
      {
        "name": "Sayari",
        "type": "startup",
        "geography": "USA",
        "note": "Corporate network intelligence for sanctions; land-focused entity graph, not vessel tracking"
      }
    ],
    "competitiveIntensity": "crowded",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 4,
      "competitiveGap": 2,
      "capitalFit": 3,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.3
    },
    "ycRfsCorrelation": "YC wants corporate structure tracing and evidence organization. VesselVerity reconstructs dark voyages from AIS gaps and satellite imagery for maritime sanctions evasion investigations.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "vv-a1",
        "claim": "EU Council Regulation 2024/1745 (24 Jun 2024, 14th sanctions package) expanded Article 12 anti-circumvention to cover 'knowingly and intentionally' + 'aware...and accepting that possibility' — captures ship managers and other facilitators, not exclusively ship-manager-targeted but materially expands personal exposure",
        "source": "https://www.consilium.europa.eu/en/press/press-releases/2024/06/24/14th-package-of-sanctions-on-russia-s-war-of-aggression-against-ukraine-eu-lists-additional-69-individuals-and-47-entities/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vv-a2",
        "claim": "AIS dark-voyage detection methodology proven by Windward, Pole Star (dark vessel detection + AIS spoofing typologies), Spire",
        "source": "https://www.polestarglobal.com/use-cases/dark-vessel-detection/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vv-a3",
        "claim": "Tryfon Fleet AIS data + voyage history calibrates dark-voyage detection models",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vv-a4",
        "claim": "OFAC, EPPO, EU FIU, port-state authorities buy evidence packages at €100-500K",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vv-a5",
        "claim": "Windward: AIM IPO Dec 2021 at £126.5M (~$167M); March 2025 mkt cap ~$231M; FTV Capital ~$270M acquisition + delisting 2025",
        "source": "https://www.calcalistech.com/ctechnews/article/sy311ob00hyl",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Windward is being delisted under FTV Capital ownership — public-company framing now outdated."
      }
    ],
    "killTests": [
      {
        "id": "vv-k1",
        "hypothesis": "1 prosecutorial buyer (EPPO / OFAC / EU FIU) signs evidence-package pilot at €40-100K in 12 weeks",
        "experiment": "Direct outreach to OFAC enforcement + EPPO + 3 EU member-state FIUs",
        "costEur": 6000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past first call",
        "validateSignal": "≥1 signed pilot OR named procurement timeline"
      },
      {
        "id": "vv-k2",
        "hypothesis": "Generated evidence package for 3 named dark voyages survives court-admissibility review by maritime law expert",
        "experiment": "Generate 3 packages on known historical dark voyages; engage maritime law firm to review chain-of-custody",
        "costEur": 8000,
        "durationWeeks": 8,
        "killSignal": "Reviewer flags chain-of-custody gaps requiring full restart",
        "validateSignal": "All 3 packages rated 'court-admissible with normal evidentiary standards'"
      },
      {
        "id": "vv-k3",
        "hypothesis": "1 maritime authority (Greek HCG / Cypriot DMS) signs at €20-50K for port-state surveillance use case",
        "experiment": "Pitch to 5 Mediterranean maritime authorities",
        "costEur": 3000,
        "durationWeeks": 10,
        "killSignal": "0 signed",
        "validateSignal": "≥1 signed at €20K+"
      }
    ],
    "preMortem": [
      {
        "cause": "Windward extends into prosecution-grade packaging — captures the buyer with stronger brand and incumbent relationship",
        "likelihood": "medium",
        "earlySignal": "Monitor Windward product announcements + customer wins"
      },
      {
        "cause": "Court admissibility of AIS reconstruction challenged in EU jurisdictions — defense lawyers find chain-of-custody gaps",
        "likelihood": "medium",
        "earlySignal": "Kill-test vv-k2; monitor EU sanctions cases"
      },
      {
        "cause": "Prosecution buyers have brutal 12-24 month B2G sales cycles — burn rate exceeds revenue ramp",
        "likelihood": "high",
        "earlySignal": "Kill-test vv-k1 conversion velocity"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "Evidence-products for prosecutors have 12-24 month cycles, high ACV at €200-300K. €10M ARR = 30-50 accounts × €200-300K — feasible only with EU-wide pull (EPPO + 10-15 member states + OFAC EMEA). The new buyer (personally-liable ship managers) created by EU 14th sanctions is the upside catalyst — but unproven at scale."
    },
    "industry": "maritime"
  },
  {
    "id": "agecare-compliance",
    "title": "CareClear",
    "ycCategory": "AI for Government",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "Regulatory compliance and benefits-application automation platform for elder care providers navigating EOPYY reimbursement, KEDASY licensing, and municipal social care registries in Greece.",
    "description": "Greece is the fourth-oldest country in the EU by median age and has a rapidly expanding elder care sector — yet the administrative burden on care homes, home-care agencies, and day centres is severe enough to deter market entry and cause chronic underfunding. EOPYY (national health insurer) reimbursement for home care requires monthly submissions of timestamped service logs, beneficiary eligibility re-certifications, and GP referral chains. KEDASY licences for residential care facilities require annual renewals across a fragmented set of regional authority offices with inconsistent documentation standards. At the same time, families applying for elder care benefits face a 6–9 month processing queue through KEP (citizen service centres) due to manual file reviews.\n\nCareClear is a compliance operations platform for elder care providers — home care agencies, residential facilities, and geriatric day centres. It automates EOPYY monthly claim pack assembly from care staff shift logs, flags eligibility lapses before they cause clawbacks, maintains a living digital file for KEDASY licence renewals with automated renewal-date tracking, and provides a guided benefits-application flow for families that pre-fills OPEKA and municipal subsidy forms using uploaded medical and income documents. The platform integrates with the GSIS income-verification API and IDIKA patient record APIs where accessible, reducing manual document collection for staff.\n\nThe AgeTech market in Greece is pre-product-market-fit: scheduling apps and telehealth tools exist, but no operator has built the compliance layer. EOPYY reimbursement errors cost the average mid-sized home care agency €80–150k annually in rejected claims. T-Life's AgeTech thesis and the demographic curve in Greece, Cyprus, and the wider Balkan diaspora aged population make timing acute. EU AI Act compliance is designed in from day one, providing a durable competitive moat as regulatory scrutiny of automated government submissions increases.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Greece's ageing population, EOPYY's complex monthly reimbursement workflow, and the lack of any existing compliance SaaS for care providers create an immediately addressable beachhead with T-Life's AgeTech thesis as a direct investment rationale.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Romania and Bulgaria face the same elder care capacity crisis with EU structural fund obligations to expand regulated home care — similar insurer reimbursement models make product extension feasible."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Portugal and Italy have equivalent EOPYY-like insurer reimbursement complexity and aging demographics, but national health system integrations require full re-engineering of the claims module."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "UAE's expatriate aged population and Abu Dhabi DOH's push for regulated home care licensing creates a nascent but growing compliance market aligned with Elnova's Dubai presence."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "AgeTech is a core T-Life venture thesis pillar; WinMedica's relationships with EOPYY and Greek healthcare procurement officers provide regulatory intelligence and warm commercial introductions; ALTP could serve as a pilot deployment site for any on-site elder care services.",
    "tags": [
      "agetech",
      "ai-government",
      "elder-care",
      "eopyy",
      "reimbursement-automation",
      "govtech",
      "age-inclusive-work"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 1 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Law 5039/2023 introduced a new mandatory licensing and quality accreditation framework for KIFI (Closed Care Facilities for the Elderly) and home care providers, with inspections scheduled to begin systematically in 2025-2026 by the new EODY-adjacent inspection body. EOPYY's reimbursement reform is shifting from input-based (bed-days) to outcome-based payments by 2026, requiring providers to document care quality metrics they have never tracked before. Greek elder care remains highly fragmented (1,200+ small KIFI operators) with no existing compliance software infrastructure, creating a greenfield SaaS opportunity.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Map all Law 5039/2023 inspection criteria into structured checklist engine; onboard 10-15 KIFI operators as design partners in Attica; generate first inspection-ready compliance reports"
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Inspection outcome tracking across client base creates benchmark data; EOPYY audit trail documentation module validated by reimbursement approvals"
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Predictive inspection risk scoring based on aggregated cross-provider data; integration with care management software (if any used) or standalone care event logging"
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "EOPYY recognizes platform-generated quality reports in reimbursement audits (formal or de facto); industry association (PESYP) partnership creates distribution to 400+ member facilities; compliance track record becomes switching-cost anchor"
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€150K-€350K",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure software compliance workflow product; main cost is regulatory content mapping with a healthcare lawyer and initial sales effort to fragmented small operators"
    },
    "competitors": [
      {
        "name": "Netsmart Technologies",
        "type": "incumbent",
        "geography": "USA",
        "note": "Dominant US care compliance platform, no EU/Greek elder care presence"
      },
      {
        "name": "Qualis Care",
        "type": "startup",
        "geography": "UK",
        "note": "UK-focused AI compliance tool for CQC-regulated providers, different regulatory framework"
      },
      {
        "name": "Kare Systems",
        "type": "adjacent",
        "geography": "UK / Ireland",
        "note": "Home care scheduling software with light compliance modules, not AI-native"
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 4,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.55
    },
    "ycRfsCorrelation": "YC wants government workflow automation that improves cost-effectiveness. CareClear automates EOPYY reimbursement compliance for elder care providers, replacing manual paperwork with automated claim processing.",
    "tlifeAssetRefs": [
      "winmedica",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "cc-a1",
        "claim": "Greek elder-care regulatory framework — pending re-citation against actual elder-care statute; Law 5039/2023 (FEK A' 83/2023) is the Tempi rail-disaster + transport law, NOT elder-care",
        "source": "[REFUTED — citation wrong]",
        "status": "refuted",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL ERROR. Need to identify correct Greek elder-care statute (likely KEDASY-related Law 4837/2021 or successor). Until verified, the thesis 'why now' regulatory tailwind is unsupported."
      },
      {
        "id": "cc-a2",
        "claim": "EOPYY reimbursement clawback risk per agency: €80-150K/year for compliance gaps",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "cc-a3",
        "claim": "KEDASY (Greek elder-care licensing body) covers approximately 5K elder-care providers",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "cc-a4",
        "claim": "WinMedica has commercial relationships with elder-care agencies via pharmacy network",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "cc-a5",
        "claim": "Cornerstone, SAP SuccessFactors don't address elder-care vertical compliance",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "cc-k1",
        "hypothesis": "3 elder-care agencies sign at €15-40K ACV within 8 weeks",
        "experiment": "Direct pitch to 15 Attica-region agencies; target signed annual contracts",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "<2 signed",
        "validateSignal": "≥3 signed at €15K+"
      },
      {
        "id": "cc-k2",
        "hypothesis": "Platform generates first EOPYY reimbursement audit-trail bundle in <3 weeks per agency, accepted by EOPYY auditors on first submission",
        "experiment": "Run pilot agency through complete EOPYY cycle; measure audit acceptance",
        "costEur": 8000,
        "durationWeeks": 12,
        "killSignal": "EOPYY auditors reject submission OR cycle takes >6 weeks",
        "validateSignal": "≥1 successful EOPYY audit acceptance with documented decision letter"
      },
      {
        "id": "cc-k3",
        "hypothesis": "Agencies achieve ≥30% reduction in compliance-related labor hours (admin staff)",
        "experiment": "Time-and-motion study on 2 pilot agencies; before/after measurement",
        "costEur": 3000,
        "durationWeeks": 16,
        "killSignal": "<15% reduction OR agency owners don't perceive value",
        "validateSignal": "≥30% reduction AND agency willing to renew at higher tier"
      }
    ],
    "preMortem": [
      {
        "cause": "EOPYY changes reimbursement rules / digital submission format mid-implementation (Greek regulatory volatility)",
        "likelihood": "high",
        "earlySignal": "Track EOPYY directive changes; budget for compliance refactoring"
      },
      {
        "cause": "Agency operators resist software adoption — paper / analog workflows are entrenched, often run by founder-owners ≥60 years old",
        "likelihood": "high",
        "earlySignal": "Kill-test cc-k1 cold-conversion rate; agency owner age + tech comfort survey"
      },
      {
        "cause": "Migrant carer labor pool shrinks under EU migration policy shifts, reducing agency revenue and ability to pay",
        "likelihood": "medium",
        "earlySignal": "Greek immigration policy + ESM/Frontex trends; agency hiring complaints"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Compliance liability-transfer products at €15-40K ACV in regulated Greek industries have strong willingness-to-pay precedent (DPO services, GDPR compliance tools). €10M ARR = 250-300 agencies = ~6% market penetration of KEDASY-licensed providers. Bottleneck is sales cycle (slow agency owners) and Greek regulatory volatility."
    },
    "industry": "agetech"
  },
  {
    "id": "pharmadataforge-llm-training",
    "title": "PharmaDataForge",
    "ycCategory": "Make LLMs Easy to Train",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "Curated, regulation-aware dataset pipelines that let pharma and biotech companies fine-tune LLMs on proprietary clinical and manufacturing data without exposing trade secrets.",
    "description": "European and Middle Eastern pharma companies are sitting on vast repositories of clinical trial data, manufacturing SOPs, adverse event reports, and regulatory dossiers — but they cannot use this data to fine-tune LLMs because existing tooling was built for tech companies, not regulated industries. GDPR, EMA, and GMP compliance constraints make general-purpose dataset tools like HuggingFace Datasets or commercial data pipelines legally risky and practically unworkable. There is no purpose-built dataset management layer for pharma ML teams.\n\nPharmaDataForge provides a developer SDK and hosted pipeline service that ingests pharma-native data formats (eCTD, MedDRA, EDIFACT, ERP exports from SAP/Oracle), applies automated PII detection and pseudonymization, enforces configurable compliance rulesets per jurisdiction (EMA, PDPA, UAE HAAD), and outputs audit-ready training datasets for LLM fine-tuning. The product integrates natively with common ML training frameworks and supports on-premise deployment for GxP environments. T-Life's WinMedica and ELPEN manufacturing operations provide a live design partner with real compliance constraints and procurement authority.\n\nNo direct competitor combines pharma-specific data ontologies, regulatory compliance automation, and LLM training pipeline tooling. HuggingFace, Scale AI, and Snorkel operate in adjacent spaces but none target the European regulated pharma segment. The timing is strong: EMA published its AI strategy in 2025, creating demand for compliant AI development tooling across the continent, and GCC health authorities are replicating EU compliance frameworks ahead of their own AI mandates.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "WinMedica and ELPEN provide a captive design partner and first paying customer in Athens. Greece has 4,000+ pharma manufacturing employees and is an EMA-compliant market, making it a credible reference for EU expansion. Cyprus corporate structure enables GCC contracting.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Serbia and Romania have significant pharma manufacturing (Hemofarm, Terapia) that face the same EMA compliance pressures without mature ML tooling vendors."
      },
      {
        "market": "europe",
        "fit": "green",
        "note": "Germany, Italy, and the Netherlands are the largest EU pharma markets and have the most aggressive EMA AI compliance timelines, creating enterprise budget for compliant ML infrastructure."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "UAE HAAD and Saudi SFDA are actively harmonizing with EMA standards; Elnova Pharma's Dubai HQ provides a direct commercial entry point into GCC pharma procurement."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "WinMedica and ELPEN are both live design partners with real GxP data problems and procurement budgets. Elnova's Dubai HQ extends distribution into GCC pharma markets. ALTP's Athens LifeTech Park provides co-location with university ML talent from NTUA and UoA for early hiring.",
    "tags": [
      "pharma",
      "llm-training",
      "data-pipelines",
      "compliance",
      "gxp",
      "developer-infra"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 1 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "EU AI Act Article 10 (effective August 2025) mandates that AI systems used in healthcare demonstrate training data governance, traceability, and bias documentation — pharma companies that want to deploy LLMs internally must now prove their training data pipelines are compliant, creating demand for regulation-aware data preparation tools. GxP data integrity requirements (ALCOA+ principles under EU GMP Annex 11) were never designed for LLM training workflows, creating a compliance gap that no existing MLOps platform addresses. Fine-tuning costs dropped 90% between 2023-2025 (LoRA, QLoRA), making domain-specific LLM training economically viable for mid-sized pharma companies for the first time.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Build GxP-compliant data pipeline at WinMedica: ingest SOPs, batch records, deviation reports, and stability data with full audit trail; deliver first fine-tuned pharma LLM (manufacturing domain) with Annex 11-compliant training documentation."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Process 500K+ documents across 3 pharma clients; build proprietary data anonymization engine certified for GxP contexts (PII/trade secret removal with validation that domain-critical information is preserved)."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "10+ pharma clients; proprietary GxP training data governance framework (templates, validation protocols, audit documentation) becomes industry reference; training data quality benchmark dataset for pharma LLMs creates evaluation moat."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Preferred data pipeline for EU pharma companies deploying internal LLMs; launch pre-trained pharma foundation model (manufacturing, regulatory, pharmacovigilance domains) licensed per-seat; expand to GCC and MENA pharma companies via Elnova channel; €3M+ ARR."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€350K-€700K",
      "capexRatio": "25% capex / 75% opex",
      "note": "GPU compute for model training and data processing is the primary capex; WinMedica and ELPEN provide free data access and validation environments; GxP compliance engineering is the key talent investment."
    },
    "competitors": [
      {
        "name": "Veeva Systems",
        "type": "incumbent",
        "geography": "Global",
        "note": "Dominant pharma data platform, not curated LLM training corpora"
      },
      {
        "name": "Scale AI",
        "type": "startup",
        "geography": "USA",
        "note": "General-purpose data annotation, no pharma domain specialisation"
      },
      {
        "name": "Definitive Healthcare",
        "type": "incumbent",
        "geography": "USA/Europe",
        "note": "Healthcare commercial intelligence, raw data not LLM-optimised pipeline"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 2,
      "composite": 3.65
    },
    "ycRfsCorrelation": "YC wants developer infra simplifying LLM training through better dataset management. PharmaDataForge builds regulation-aware data pipelines for pharma LLMs — handling PII stripping and GxP compliance.",
    "tlifeAssetRefs": [
      "elpen",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "pf-a1",
        "claim": "EU AI Act Article 10 requires high-risk AI systems to have documented training-data governance and provenance",
        "source": "https://artificialintelligenceact.eu/article/10/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pf-a2",
        "claim": "GMP Annex 11 + ALCOA+ data-integrity principles apply to training data used in regulated workflows",
        "source": "[UNVERIFIED — emerging interpretation]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pf-a3",
        "claim": "Veeva Vault does not currently offer LLM training-data pipeline tooling",
        "source": "[UNVERIFIED — based on May 2026 product scan]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pf-a4",
        "claim": "Scale AI ~$29B valuation with $870M 2024 revenue (Bloomberg); DatologyAI $46M Series A May 2024; HuggingFace ~$4.5B valuation",
        "source": "https://en.wikipedia.org/wiki/Scale_AI",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pf-a5",
        "claim": "Pharma top-20 spend $1-5M+/year on training-data prep for internal ML/AI",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "pf-k1",
        "hypothesis": "2 pharma R&D groups sign data-pipeline pilot at €100-200K ACV in 12 weeks",
        "experiment": "Pitch pharma R&D + IT leads via ELPEN network + cold; demo Veeva-Vault-to-curated-data pipeline",
        "costEur": 6000,
        "durationWeeks": 12,
        "killSignal": "<1 LOI in 12 weeks",
        "validateSignal": "≥2 signed pilots at €100K+"
      },
      {
        "id": "pf-k2",
        "hypothesis": "Veeva Vault → curated training data → fine-tune Llama 3.3 reference pipeline works end-to-end for deviation analysis use case",
        "experiment": "Build reference pipeline using ELPEN deviation data; produce fine-tuned model + GAMP5-compatible documentation",
        "costEur": 15000,
        "durationWeeks": 10,
        "killSignal": "Pipeline takes >€50K labor OR model accuracy <baseline+5%",
        "validateSignal": "Pipeline runs at <€20K marginal cost; model beats GPT-4 by 10%+"
      },
      {
        "id": "pf-k3",
        "hypothesis": "EMA AI Reflection Paper consultant + regulatory affairs reviewer rate the data-lineage documentation as GMP-compliant",
        "experiment": "Engage 1 EMA-adjacent consultant for pre-submission lineage review",
        "costEur": 5000,
        "durationWeeks": 4,
        "killSignal": "Reviewer flags lineage gaps requiring full restart",
        "validateSignal": "Reviewer rates as 'submission-ready with minor edits'"
      }
    ],
    "preMortem": [
      {
        "cause": "HuggingFace / Scale AI vertical-ize into pharma with regulatory data tooling",
        "likelihood": "medium",
        "earlySignal": "Track HF / Scale pharma announcements quarterly"
      },
      {
        "cause": "Veeva ships native LLM training-data pipeline inside Vault",
        "likelihood": "medium",
        "earlySignal": "Veeva R&D Day keynotes; Vault REST API changelogs"
      },
      {
        "cause": "Pharma AI infrastructure budget concentrates at top-20, leaving mid-market thin — €100K ACV target needs top-20 access which T-Life lacks",
        "likelihood": "high",
        "earlySignal": "Kill-test pf-k1 — track mid-market vs top-20 conversion ratio"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.35,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Vertical AI infrastructure is hard to monetize standalone; moat is regulatory expertise + Veeva integration depth. €10M ARR = 50-80 pharma customers × €100-200K — requires top-20 expansion within 24-30 months. The EU AI Act Art. 10 mandate is the structural tailwind that creates 18-24 months of urgency."
    },
    "industry": "pharma-life-sciences"
  },
  {
    "id": "porthos-shipping-llm-platform",
    "title": "Porthos",
    "ycCategory": "Make LLMs Easy to Train",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "An LLM fine-tuning platform purpose-built for maritime and logistics operators, with pre-curated datasets covering vessel operations, charter contracts, port regulations, and cargo documentation.",
    "description": "The global shipping industry generates enormous volumes of structured and unstructured text — charter party agreements, bills of lading, port state control inspection reports, MARPOL compliance logs, P&I correspondence, voyage reports, and AIS data narratives — but no LLM has been trained specifically on this corpus. Maritime operators attempting to deploy AI for contract review, compliance monitoring, or operational decision support must either use general-purpose LLMs that hallucinate industry-specific terminology and regulatory references, or invest six-figure sums in bespoke fine-tuning projects with no reusable infrastructure. Greek shipping, which controls 20%+ of global tonnage, is the natural home for this problem.\n\nPorthos provides a managed fine-tuning platform with three components: a pre-built maritime domain dataset (sourced from public IMO regulations, Bimco standard contracts, Lloyd's intelligence, and synthetic generation), a fine-tuning API that lets operators layer their proprietary voyage and contract data on top of the base dataset, and a deployment layer that serves the resulting models via API to existing maritime software (Veson Nautical, Danaos, ShipNet). The platform handles the hard ML infrastructure work — dataset versioning, training orchestration, evaluation benchmarks specific to maritime tasks — so shipping company IT teams can fine-tune without ML expertise. Piraeus, home to more shipping company headquarters than any city outside Tokyo, is the natural launch market.\n\nNo competitor has built a maritime-specific LLM training platform. Microsoft and Google are selling generic Azure OpenAI and Vertex AI access to shipping companies, which requires significant internal ML capability the industry does not have. MarineTraffic, Windward, and Kpler operate in maritime data analytics but not LLM training infrastructure. The window to establish a domain-specific dataset moat in maritime is open now, before a hyperscaler decides the vertical is worth a dedicated product.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Piraeus is the undisputed global center of Greek shipping with 800+ shipping company headquarters. T-Life's Tryfon fleet provides a design partner with real voyage data, operational pain points, and introductions to peer shipowners. Cyprus hosts dozens more shipping management companies with favorable tax treatment for maritime income.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Croatia and Montenegro are developing maritime sectors with EU accession driving compliance requirements that create demand for AI-assisted regulatory documentation."
      },
      {
        "market": "europe",
        "fit": "green",
        "note": "Norway (OSM Maritime, Wallenius Wilhelmsen), Germany (Hapag-Lloyd), and Denmark (Maersk) are large shipping operators with digital transformation budgets and English-language operational workflows."
      },
      {
        "market": "middle-east",
        "fit": "green",
        "note": "UAE (DP World, Abu Dhabi Ports) and Saudi Arabia (Bahri) are aggressively investing in maritime AI as part of logistics modernization; Cyprus connectivity and Arabic-language expansion make this a natural second wave."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "The Tryfon fleet is both a design partner and a referenceable first customer, providing real voyage logs, charter agreements, and compliance documentation to seed the training dataset. T-Life's Piraeus network accelerates commercial introductions to peer shipowners. The ALTP campus could host the ML infrastructure team given proximity to shipping sector talent in Athens.",
    "tags": [
      "maritime",
      "shipping",
      "llm-training",
      "domain-specific",
      "fine-tuning",
      "logistics",
      "piraeus"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 2 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "The maritime industry generates 5-10TB of unstructured text annually per large shipping company (charter parties, bills of lading, PSC reports, MARPOL logs), but no pre-trained LLM understands maritime domain language — general models hallucinate on BIMCO clause references, confuse vessel classification terminology, and cannot parse charterparty recaps accurately. Maritime data privacy requirements (flag state regulations, commercial confidentiality of fixture details) prevent shipping companies from using cloud-hosted general LLMs, creating demand for on-premise or sovereign-cloud fine-tuned models. The cost of fine-tuning a domain-specific LLM dropped below $10K in 2024 (from $500K+ in 2022), making it viable for a platform to offer maritime LLM training as a service rather than requiring each shipping company to build in-house AI teams.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Curate maritime training dataset from Tryfon fleet (voyage logs, charter agreements, PSC reports, crew documentation); fine-tune first maritime LLM on charter party and bill of lading comprehension; benchmark against GPT-4o and Claude on 500 maritime domain tasks."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Deploy maritime LLM with 3 Piraeus ship management companies; build fine-tuning pipeline that lets companies add proprietary data (fixture recaps, internal SOPs) without data leaving their infrastructure; 85%+ accuracy on maritime contract extraction tasks."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "10+ shipping company clients; proprietary maritime language corpus (largest curated maritime text dataset outside classification societies) creates foundation model advantage; launch pre-built maritime AI modules (charter party review, PSC preparation, MARPOL compliance checking)."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Maritime LLM becomes reference model for Piraeus shipping cluster; license model to maritime software vendors (AMOS, ShipNet, Veson) as embedded AI; expand to Singapore and London maritime hubs; launch maritime knowledge graph trained on 10+ years of industry data; €3M+ ARR."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€400K-€800K",
      "capexRatio": "30% capex / 70% opex",
      "note": "GPU compute for model training is the primary capex; Tryfon fleet provides free maritime data access that would cost $200K+ to license commercially; key hire is an ML engineer with NLP experience."
    },
    "competitors": [
      {
        "name": "DeepSea Technologies",
        "type": "startup",
        "geography": "Greece/Global",
        "note": "Greek AI startup for vessel performance, uses ML but not an LLM fine-tuning platform"
      },
      {
        "name": "Windward",
        "type": "startup",
        "geography": "Israel/Global",
        "note": "Maritime AI for risk and compliance, predictive analytics not LLM training infra"
      },
      {
        "name": "Kongsberg Digital",
        "type": "incumbent",
        "geography": "Norway/Global",
        "note": "Maritime data platform for IoT sensor streams, not an LLM fine-tuning layer"
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 5,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 5,
      "founderAvailability": 3,
      "composite": 3.85
    },
    "ycRfsCorrelation": "YC wants ML-focused development environments. Porthos gives maritime operators a no-code LLM fine-tuning platform — shipping companies can train models on their proprietary voyage data.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "po-a1",
        "claim": "BIMCO clauselib + standard CP forms (NYPE 2015, Shelltime 4, BPVOY voyage forms) are the foundational maritime contract corpus; BIMCO maintains the clause library",
        "source": "https://www.bimco.org/contractual-affairs/bimco-clauses/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "po-a2",
        "claim": "Veson (IMOS), Danaos, AMOS (now SpecTec/Kongsberg/IFS lineage), DNV ShipManager are tier-1 maritime SaaS",
        "source": "https://dmc.danaos-projects.com/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "AMOS ownership corrected to SpecTec/Kongsberg/IFS lineage; ShipManager is DNV branded."
      },
      {
        "id": "po-a3",
        "claim": "Open-weight 70B models (Llama 3.3 70B) work for narrow maritime tasks at production accuracy",
        "source": "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "po-a4",
        "claim": "Tryfon fleet provides ~10-30 vessels of proprietary operations data for fine-tuning",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "po-a5",
        "claim": "Lambda Labs and NVIDIA NIM are the GPU-cloud benchmarks for embedded inference",
        "source": "[CONFIRMED via earlier validation]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "po-k1",
        "hypothesis": "Fine-tuned Llama 3.3 70B reaches ≥85% accuracy on 5 maritime task types (CP analysis, voyage estimation, port report parsing, PSC deficiency interpretation, MARPOL compliance check) vs GPT-4 baseline",
        "experiment": "Fine-tune on BIMCO + Tryfon corpus; build 100-example test set per task; benchmark",
        "costEur": 18000,
        "durationWeeks": 8,
        "killSignal": "<75% on ≥2 task types OR <5% gain over GPT-4",
        "validateSignal": "≥85% on all 5 tasks AND ≥10% gain over GPT-4 on 3+ tasks"
      },
      {
        "id": "po-k2",
        "hypothesis": "2 maritime SaaS vendors (target: Veson, Danaos) sign embedded-inference pilot at €100-300K ACV in 16 weeks",
        "experiment": "Pitch CTOs + product leaders; demo embedded API; target term-sheet conversation",
        "costEur": 8000,
        "durationWeeks": 16,
        "killSignal": "0/4 vendors advance past first call",
        "validateSignal": "≥2 signed pilots OR 1 production contract"
      },
      {
        "id": "po-k3",
        "hypothesis": "Maritime LLM platform can be commercialised as standalone API for shipping operators ($200-1K/month per user)",
        "experiment": "Launch dev-portal MVP; pitch to 20 shipping operators; measure paid sign-ups",
        "costEur": 6000,
        "durationWeeks": 8,
        "killSignal": "<3 paid sign-ups",
        "validateSignal": "≥10 paid sign-ups at $200+/mo"
      }
    ],
    "preMortem": [
      {
        "cause": "Maritime SaaS incumbents build their own AI in-house using GPT-4/Claude — embedded inference loses to vendor's own integration",
        "likelihood": "medium",
        "earlySignal": "Kill-test po-k2 — track vendor AI-integration announcements"
      },
      {
        "cause": "Tryfon-fleet data alone isn't enough; need to license BIMCO + others which raises COGS and reduces moat",
        "likelihood": "medium",
        "earlySignal": "Data sourcing analysis in weeks 2-4"
      },
      {
        "cause": "Open-weight models commoditize fine-tuning; Hugging Face vertical-templates erode the wedge",
        "likelihood": "low",
        "earlySignal": "Monitor HF Hub for maritime fine-tunes; quarterly review"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "Embedded vertical AI infrastructure is hard to monetize standalone — moats come from data + integration depth. The Tryfon-fleet corpus is real but narrow; BIMCO + multi-shipper data is required for scale. €10M ARR = 30-50 SaaS vendors × €200-300K embedded contracts, feasible if 2-3 anchor vendors adopt."
    },
    "industry": "maritime"
  },
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
    "title": "MedAdherence-PIS",
    "ycCategory": "Pharmacy-PIS Certified Module",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Certified adherence module inside Greek + EU pharmacy PIS vendors (SCRIPTA, PharmaSoft, Farmakon) at €10-30/pharmacy/mo rev-share. Buyer is the PIS-vendor PM (5-8 vendors covers 80% of EU-5 pharmacies) — not 10,000 owner-operators.",
    "description": "Re-spec'd 2026-05-21 per PORTFOLIO_RESHAPE.md after the original standalone-pharmacy-SaaS thesis was killed by the 2026-05-20 red-team finding (WinMedica is a DRUG distributor not a SaaS channel; Greek pharmacy ownership law fragments the buyer; SCRIPTA/PharmaSoft/Farmakon already own the integrated POS+eRx+EOPYY+myDATA seat). New thesis: ship as a CERTIFIED adherence + MTM module licensed into the PIS vendors themselves — €10-30/pharmacy/month rev-share + one-time integration license per PIS vendor. WinMedica's actual leverage shifts from 'warm pharmacy intro' (low-value) to 'co-marketing weight with the PIS vendor that wants WinMedica's drug-stock feed' (structural). Secondary thesis: sell the de-identified adherence dataset to ONE Greek pharma (ELPEN, Pharmathen) for branded-molecule interventions at €100-300K/yr — concrete, T-Life-adjacent buyer, NOT chasing global pharma R&D buyers who already license IQVIA Xponent.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "3 named PIS-vendor buyers (SCRIPTA, PharmaSoft, Farmakon) reachable through existing ELPEN/WinMedica relationships. Greek market is the proof — EU-5 follows via the same 5-8 PIS-vendor consolidation.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "After Greek proof: DE (Pharmaserv, ADG, NOVENTI), IT (CompuGroup). 5-8 PIS vendors cover ~80% of EU-5 pharmacy desktop."
      },
      {
        "market": "middle-east",
        "fit": "red",
        "note": "Not pursued — GCC pharmacy retail is chain-led (BinSina, LIFE) with different software topology; out of scope."
      },
      {
        "market": "balkans",
        "fit": "red",
        "note": "Not pursued — sub-scale TAM, fragmented PIS landscape."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ELPEN + WinMedica relationships open the PIS-vendor PM door (the PIS vendor wants WinMedica's drug-stock feed and ELPEN co-marketing). Secondary: ELPEN/Pharmathen as the named buyer for the adherence-data layer at €100-300K/yr — concrete and adjacent, NOT global pharma R&D fantasy.",
    "tags": [
      "infrastructure-to-incumbents",
      "pis-vendor-module",
      "scripta-pharmasoft-farmakon",
      "adherence-data-licensing",
      "elpen-channel",
      "phase0-funded"
    ],
    "addedDate": "2026-05-16",
    "notes": "RE-SPEC 2026-05-21 per PORTFOLIO_RESHAPE.md. The original 'standalone pharmacy SaaS via WinMedica warm channel' framing died on the 2026-05-20 red-team finding (channel-confusion: WinMedica sells drugs not software; Greek pharmacy law fragments the buyer; PIS incumbents already own the seat). Adopted the redTeamFindings[0].alternativeThesis verbatim: certified module inside SCRIPTA/PharmaSoft/Farmakon at €10-30/pharmacy/mo rev-share + named-Greek-pharma adherence-data buyer at €100-300K/yr. Phase 0 budget reset to €40K with ONE binary kill test (signed PIS rev-share LOI by Week 12). Cheap, fast, decisive.\n\nFunded as 1 of 2 surviving Phase 0 bets in the re-shape. The other is hospitalstaff-eu (HospitalStaff-API).\n\nDoes not require external founder recruit beyond a fractional Greek BD lead (ELPEN/WinMedica relationships convert directly). Validation-pass success funds the next stage off T-Life balance sheet (€500K-1M) — no VC round needed.\n\nPRIOR HISTORY: v2 upgrade 2026-05-16 (4 assertion validation patches); red-team 2026-05-20 (verdict: revise with alternative thesis adopted).\n\n2ND-ROUND RED-TEAM 2026-05-21: see redTeamFindings[1].",
    "whyNow": "PIS-vendor buying window: SCRIPTA + PharmaSoft + Farmakon have ZERO AI roadmap and will white-label rather than build (red-team load-bearing finding). EU pharma RWE buyers have moved upstream to IQVIA/Datavant, so the global pharma fantasy is dead — but ELPEN/Pharmathen still need branded-molecule adherence data and currently buy zero. Both windows align for 2026.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-3",
        "milestone": "Signed rev-share LOI with 1 of SCRIPTA, PharmaSoft, Farmakon at €10-30/pharmacy/mo (Week 12 kill gate). Founder-BD via ELPEN/WinMedica."
      },
      {
        "timeframe": "Month 3-12",
        "milestone": "First PIS integration live (~1,500 pharmacies through 1 vendor); first ELPEN/Pharmathen adherence-data contract signed at €100-300K/yr; second PIS vendor in pipeline."
      },
      {
        "timeframe": "Month 12-36",
        "milestone": "2-3 PIS vendors integrated (~6,000 Greek pharmacies); €1-2M ARR from module rev-share + €500K-€1M ARR from Greek pharma data line. Fund off T-Life balance sheet at €500K-1M — never raises VC."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€40K Phase 0 → €500K-€1M direct from T-Life balance sheet if Week-12 gate passes",
      "capexRatio": "5% capex / 95% opex",
      "note": "PIS-integration build is meaningfully cheaper than 5,000-door GTM. Fractional Greek BD lead + 1-2 engineers covers Phase 0. NEVER needs VC if validates."
    },
    "competitors": [
      {
        "name": "SCRIPTA, PharmaSoft, Farmakon",
        "type": "incumbent",
        "geography": "Greece",
        "note": "BUYERS, not competitors. Own the pharmacy desktop, have zero AI roadmap, will white-label rather than build."
      },
      {
        "name": "Pharmaserv, ADG, NOVENTI (DE); CompuGroup (IT)",
        "type": "incumbent",
        "geography": "EU",
        "note": "Phase-2 buyer expansion targets — same module-licensing motion."
      },
      {
        "name": "IQVIA Xponent, Datavant",
        "type": "incumbent",
        "geography": "Global",
        "note": "Already commoditised the global Rx-fill data feed. Sidesteps competition by selling Greek branded-molecule data to ELPEN/Pharmathen, NOT global pharma R&D."
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
      }
    ],
    "killTests": [
      {
        "id": "ma-k1",
        "hypothesis": "Signed rev-share LOI with SCRIPTA, PharmaSoft, OR Farmakon at €10-30/pharmacy/mo by Week 12 — the binary kill for the whole bet",
        "experiment": "ELPEN/WinMedica-warm intro to PIS-vendor CEO/Head of Product at all 3; pitch = certified adherence + MTM module + WinMedica drug-stock feed bundle; 4 in-person + 4 follow-up cycles capped at 12 weeks",
        "costEur": 18000,
        "durationWeeks": 12,
        "killSignal": "ZERO signed LOIs from 3 named PIS vendors (KEY GATE — failing this kills the bet per PORTFOLIO_RESHAPE.md §5)",
        "validateSignal": "≥1 signed LOI at €10-30/pharmacy/mo with integration timeline ≤6 months"
      },
      {
        "id": "ma-k2",
        "hypothesis": "ELPEN or Pharmathen signs an adherence-data partnership at ≥€100K/yr for branded-molecule cohort intervention by Week 16",
        "experiment": "Direct pitch to ELPEN R&D + Pharmathen Commercial; one branded molecule, retrospective + 6-month prospective adherence cohort design",
        "costEur": 8000,
        "durationWeeks": 16,
        "killSignal": "0 advances past initial data-design review",
        "validateSignal": "≥1 signed LOI at ≥€100K/yr"
      }
    ],
    "preMortem": [
      {
        "cause": "Greek PIS vendors decide to build adherence in-house after seeing the spec (vendor IP misappropriation)",
        "likelihood": "low",
        "earlySignal": "Mitigation: spec gated behind NDA + integration license; if any vendor stalls 6+ weeks after viewing spec, treat as build-signal and pivot to next vendor"
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
      "reaches1mArrBy18mo": 0.55,
      "reaches10mArrBy36mo": 0.12,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Re-spec'd 2026-05-21. €1M ARR feasible via 1-2 PIS vendor integrations × 3,000-5,000 pharmacies × €10-30/mo + €100-300K data line. €10M ARR probability LOW by design — this is NOT a venture-scale bet, it's an off-balance-sheet T-Life infrastructure investment. €500K-1M direct funding, no VC, target €2-5M ARR steady-state. Lower failure rate than HospitalStaff-API because the kill test is cheap, fast, and binary."
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
  },
  {
    "id": "mobivisa-employer-permits",
    "title": "MobiVisa",
    "ycCategory": "Workforce Mobility Infrastructure",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Agentic visa & work-permit automation for employers bringing skilled workers across EU and EU↔GCC borders — replaces immigration-lawyer billables with software, takes 70% of cycle time out, owns the document pipeline.",
    "description": "EU + EU↔GCC employer-sponsored work-permit cycle is 8-26 weeks of immigration-lawyer + employer-HR + government-portal back-and-forth; average cost €5-25K per move; 80% of work is form-filling, document chasing, status tracking. MobiVisa is the agentic platform: ingests employer + employee data, generates submissions for 27 EU member states + UAE + KSA + Qatar, tracks government responses, manages renewals + dependents + tax-residency. Sells at €1500-5000/permit (lawyer pricing minus 60%) or €30K-€300K/year enterprise subscription for high-volume employers.\n\nMobiVisa also absorbs TalentBridge from the May-2026 red-team round: refugee + displaced-worker integration becomes a workflow module covering AMIF/ESF+ funding administration + language-assessment + EQF credential mapping, all under the broader visa-automation umbrella. Refugee-employment grant revenue funds Y1 expansion of multi-jurisdiction coverage.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Germany + Netherlands + Ireland are the deepest tech-talent corridors; UAE + Saudi are largest GCC. Pan-EU multi-jurisdiction is the wedge incumbents can't match.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "GCC corporate mobility growing fast; Vision 2030 + UAE D33 mandate skilled-foreign-hire pipelines."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Source markets; smaller direct ACV."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Minimal T-Life portfolio edge; could pilot with WinMedica / ELPEN HR teams for warm intro.",
    "tags": [
      "workforce-mobility",
      "visa-automation",
      "agentic",
      "hr-tech",
      "blue-card",
      "eu-talent-pool",
      "folded-talentbridge",
      "refugee-integration"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED with fold-in. Modules absorbed: see description final paragraph.\n\nMethodology v2 propagated (2026-05-16): assertions + killTests + preMortem + probabilityBands now populated. Many assertions flagged [ESTIMATE] / [UNVERIFIED]; follow-on validation pass can promote to confirmed.\n\nAssertion validation pass 2 (2026-05-16): 3 assertion(s) patched against primary sources. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "EU Blue Card revision (Dir 2021/1883) + EU Talent Pool 2024 + Saudi Premium Iqama + UAE Golden Visa expansion + post-Brexit UK skilled-worker route — all accelerate cross-border employer-sponsored hires.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP for DE + UK Blue Card + Tier 2; 10 design-partner SMB tech employers; 50 permits processed."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5 EU jurisdictions + 2 GCC; 200 employers; €3M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "All EU-27 + GCC + UK + Switzerland; 2000 employers; €25M ARR; payroll + tax-residency integration."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€800K-€2M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Multi-jurisdiction regulatory + product engineering; immigration-lawyer co-counsel partnership needed for liability transfer."
    },
    "competitors": [
      {
        "name": "Fragomen, Deloitte Immigration",
        "type": "incumbent",
        "geography": "Global",
        "note": "Lawyer model; expensive; slow."
      },
      {
        "name": "Localyze, Boundless, Topia",
        "type": "startup",
        "geography": "Global",
        "note": "Newer SaaS; Localyze (~$50M raised) closest EU competitor."
      },
      {
        "name": "Local immigration lawyers",
        "type": "incumbent",
        "geography": "Country-by-country",
        "note": "Fragmented incumbents."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 2,
      "founderAvailability": 3,
      "composite": 3.4
    },
    "ycRfsCorrelation": "Agentic immigration-automation — replaces immigration-lawyer billables with software; €500B+ EU cross-border-talent flow as TAM proxy.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "workforce-saas",
    "assertions": [
      {
        "id": "mv-a1",
        "claim": "EU Blue Card Directive (EU) 2021/1883 of 20 Oct 2021, repealing 2009/50/EC; transposition deadline 18 Nov 2023.",
        "source": "https://eur-lex.europa.eu/eli/dir/2021/1883/oj/eng",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "mv-a2",
        "claim": "Localyze raised $35M Series B Sept 2022 (General Catalyst). Total funding $46M+ over multiple rounds. NOT ~$50M Series B.",
        "source": "https://techcrunch.com/2022/09/06/localyze-series-b/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Corrected; thesis competitive positioning intact at lower competitor capital."
      },
      {
        "id": "mv-a3",
        "claim": "Typical EU work-permit processing 4-12 weeks per case; legal/consulting fees £1,200-£6,000 per move per Boundless/playroll benchmarks. Prior '8-26 weeks, €5-25K per move' is defensible only if 'per move' includes full relocation + dependents + premium processing.",
        "source": "https://www.boundlesshq.com",
        "status": "estimated",
        "lastChecked": "2026-05-16",
        "note": "Tightened framing — base case 4-12 weeks; upper bound depends on relocation scope."
      },
      {
        "id": "mv-a4",
        "claim": "Folded scope: TalentBridge (refugee + displaced-worker integration with AMIF/ESF+ admin) module",
        "source": "[INTERNAL]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "mv-a5",
        "claim": "EU pan-jurisdiction + GCC corridor coverage is the cited Localyze gap",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "mv-k1",
        "hypothesis": "10 SMB tech employers (50-500 FTE) sign €30-100K/year enterprise pilot in 12 weeks",
        "experiment": "Direct BD to EU tech-hub HR teams + cold outreach",
        "costEur": 6000,
        "durationWeeks": 12,
        "killSignal": "<3 signed",
        "validateSignal": "≥6 signed at €30K+ ACV"
      },
      {
        "id": "mv-k2",
        "hypothesis": "Multi-jurisdiction coverage (DE + UK + NL + Ireland + 1 GCC) operational with permits processed end-to-end",
        "experiment": "Build for 5 jurisdictions; process 20 real permits across them",
        "costEur": 35000,
        "durationWeeks": 18,
        "killSignal": "Permit failure rate >10% OR cycle time >50% of lawyer-billable baseline",
        "validateSignal": "<5% failure AND ≥40% cycle-time reduction"
      },
      {
        "id": "mv-k3",
        "hypothesis": "Immigration-lawyer co-counsel partnership for liability transfer in 14 weeks",
        "experiment": "Engage 3 EU immigration-law firms for co-counsel agreement",
        "costEur": 5000,
        "durationWeeks": 14,
        "killSignal": "0 firms advance past initial liability-risk review",
        "validateSignal": "≥1 signed co-counsel framework"
      }
    ],
    "preMortem": [
      {
        "cause": "Localyze pivots to multi-jurisdiction + GCC corridor before MobiVisa reaches scale",
        "likelihood": "medium",
        "earlySignal": "Localyze product announcements + acquisition activity"
      },
      {
        "cause": "Immigration-lawyer liability layer is harder to replace than agentic-automation thesis assumes — case-rejection liability blocks pure-software model",
        "likelihood": "medium",
        "earlySignal": "Kill-test mv-k3 reveals true liability-transfer requirements"
      },
      {
        "cause": "AI accuracy fails on edge cases (unusual employment status, dependent visa complexity) → manual escalation rate too high to maintain SaaS margins",
        "likelihood": "low",
        "earlySignal": "Kill-test mv-k2 escalation rate measurement"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.22,
      "totalFailureBy36mo": 0.28,
      "basisOfEstimate": "Cross-cutting red-team's #3 portfolio pick. Real wedge vs Localyze (multi-jurisdiction + GCC corridor). EU Talent Pool 2024 + Blue Card revision = genuine why-now. €10M ARR = ~200 employers × €50K ACV — feasible in DACH + Nordics + UK."
    }
  },
  {
    "id": "diaspora-return",
    "title": "DiasporaReturn",
    "ycCategory": "Diaspora Return Platform",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Reverse-migration platform — Greek, Italian, Portuguese, Irish diaspora professionals returning home — sold to government re-attraction programs and corporates building local engineering / R&D teams.",
    "description": "Greece, Italy, Portugal lost 5-15% of skilled workforce to brain drain (2008-2018 crisis era); recent demographic reversal (remote work + tax incentives) is bringing some back but at scale, return is friction-heavy (tax residency, professional credentialing, schooling for kids, housing). Greek 50% income-tax discount for returnees (Law 4646/2019), Portuguese RNH (until 2024 then partial rollback), Italian Impatriati regime — all create policy tailwinds. DiasporaReturn is the platform: tax residency + relocation + credentialing + corporate placement, sold to government re-attraction agencies (Greek 'rebrain Greece') and corporates building tech hubs (Athens, Lisbon, Milan, Dublin).",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Greece is the deepest diaspora-return market (2M+ Greek-origin diaspora globally with tax-incentive eligibility); T-Life network strong here.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "Italy (60M+ diaspora), Portugal (5M+), Ireland (70M+) all have established programs."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has Lebanese + Egyptian + Iranian diaspora pull; smaller policy support."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Smaller TAM."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "T-Life network in Athens + Cyprus gives warm distribution + Greek government / Enterprise Greece relationship potential.",
    "tags": [
      "workforce-mobility",
      "diaspora-return",
      "brain-drain",
      "tax-incentive",
      "rebrain-greece"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.\n\nMethodology v2 propagated (2026-05-16): assertions + killTests + preMortem + probabilityBands now populated. Many assertions flagged [ESTIMATE] / [UNVERIFIED]; follow-on validation pass can promote to confirmed.\n\nAssertion validation pass 2 (2026-05-16): 3 assertion(s) patched against primary sources. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Greek demographic deficit (population shrinking 1%/yr); remote work makes return viable; tax incentives mature; tech-hub formation in Athens/Lisbon at peak.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Greek pilot with Enterprise Greece partnership; 200 returnees placed."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "Greece + Italy + Portugal; 2K returnees; €2M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "+ Ireland + Spain + GCC corridor; 10K returnees; €15M ARR."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€800K",
      "capexRatio": "10% capex / 90% opex",
      "note": "Mostly content + workflow + government BD."
    },
    "competitors": [
      {
        "name": "Enterprise Greece, AICEP Portugal",
        "type": "incumbent",
        "geography": "EU",
        "note": "Government agencies; not transactional platforms."
      },
      {
        "name": "Boundless, EOR providers (Deel, Remote)",
        "type": "startup",
        "geography": "Global",
        "note": "Adjacent EOR; not return-specific."
      },
      {
        "name": "Immigration lawyers",
        "type": "incumbent",
        "geography": "Country-by-country",
        "note": "Expensive, no scale."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 4,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.65
    },
    "ycRfsCorrelation": "Niche TAM but real structural pain; T-Life warm-channel advantage; government-co-fundable Y1 revenue.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "workforce-saas",
    "assertions": [
      {
        "id": "dr-a1",
        "claim": "Greek Law 4646/2019 + Article 5C (added by Law 4758/2020) provides 50% income-tax exemption on Greek salaried/self-employment income for up to 7 years for returnees not tax-resident in Greece for the previous 5 years.",
        "source": "https://www.ey.com/en_gr/tax/tax-alerts/tax-alert-tax-reform-l-4646-2019",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "dr-a2",
        "claim": "Italian Impatriati regime: 70% (90% in southern regions) exemption under Decreto Crescita 2019; REDUCED to 50% (60% with minor child) under Legislative Decree 209/2023 effective 2024, for 5 years. NOT 30-70% — actual range is 50-90% pre-2024, 50-60% post-reform.",
        "source": "https://www.bdo.global/en-gb/insights/tax/expatriate-tax/italy-inpatriate-tax-regime-one-year-after-amendments",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior thesis '30-70%' was wrong on lower bound and missed the 2024 reform reducing benefit."
      },
      {
        "id": "dr-a3",
        "claim": "Portuguese NHR (Non-Habitual Resident) regime closed Dec 31, 2023 (with transitional window through 2024, deadline Mar 31, 2025). Replaced by IFICI ('NHR 2.0'): 20% flat IRS rate for up to 10 years on eligible income for science/innovation professionals only — much narrower scope.",
        "source": "https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2025-044.html",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Tailwind weakening per cross-cutting red-team."
      },
      {
        "id": "dr-a4",
        "claim": "Greek diaspora globally ~2-5M with tax-incentive eligibility (post-2008 brain-drain cohort returning)",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "dr-a5",
        "claim": "Enterprise Greece runs 'reBrainGreece' attraction program with government funding for return-services partners",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16",
        "note": "T-Life warm-channel asset."
      }
    ],
    "killTests": [
      {
        "id": "dr-k1",
        "hypothesis": "Enterprise Greece partnership LOI for return-services platform in 8 weeks",
        "experiment": "Direct BD via T-Life government relationships",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "No LOI from Enterprise Greece OR equivalent (AICEP Portugal)",
        "validateSignal": "≥1 signed LOI with named return-program co-development"
      },
      {
        "id": "dr-k2",
        "hypothesis": "100 paying returnees placed into corporate roles in first 6 months at €1-3K placement fee + €500 platform sub",
        "experiment": "Direct acquisition via LinkedIn + diaspora community channels + Greek tech-hub employers",
        "costEur": 25000,
        "durationWeeks": 26,
        "killSignal": "<40 placements OR placement fee <€500 actual realized",
        "validateSignal": "≥100 placements + ≥€100K revenue"
      },
      {
        "id": "dr-k3",
        "hypothesis": "5 Greek/Italian/Portuguese corporate customers (tech-hubs, family offices) sign €30-80K ACV in 12 weeks",
        "experiment": "Direct BD with companies expanding R&D / commercial teams in returnee hubs",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "<2 signed",
        "validateSignal": "≥3 signed at €30K+ ACV"
      }
    ],
    "preMortem": [
      {
        "cause": "Tax-incentive policy reversal continues (Portuguese NHR already rolled back; Greek Law 4646 contested politically)",
        "likelihood": "medium",
        "earlySignal": "Track parliamentary tax-reform calendars in GR/IT/PT/ES"
      },
      {
        "cause": "TAM caps at €10-20M ARR as cross-cutting agent flagged — niche even with T-Life warm channel",
        "likelihood": "high",
        "earlySignal": "Re-evaluate composite + bands at Month 12 against real placement velocity"
      },
      {
        "cause": "Competing programs (EU Talent Pool, individual country 'come-home' campaigns) crowd the space",
        "likelihood": "low",
        "earlySignal": "Monitor Enterprise Greece + AICEP partnership exclusivity carve-outs in kill-test dr-k1"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.12,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Niche but capital-efficient bet with real T-Life government-channel advantage. Cross-cutting red-team explicitly flagged TAM ceiling at €10-20M ARR; accept as focused seed bet not unicorn. €1M ARR achievable on government co-funding + 200-500 returnees + corporate-side SaaS."
    }
  },
  {
    "id": "hospitalstaff-eu",
    "title": "HospitalStaff-API",
    "ycCategory": "Clinician-Mobility Infrastructure",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Credential-portability API for EU clinician mobility — Directive 2005/36/EC + 2013/55/EU compliance engine sold to Aya, Doctari, RLDatix, Patchwork as the regulatory-data layer they can't economically build.",
    "description": "Re-spec'd 2026-05-21 per PORTFOLIO_RESHAPE.md after the original NHS-direct platform thesis (HospitalStaff) was killed by RM6387 framework foreclosure to 2033 + Doctari/Aya/Patchwork consolidation. New thesis: build the headless credential-verification engine — EPC (European Professional Card) workflow, primary-source verification across 27 member-state regulators (UK GMC/NMC, German Landesärztekammer + Pflegekammer 16-state, Italian FNOMCeO + IPASVI, French Ordre, etc.), language-proficiency checks, EHIC + qualification cross-mapping — and sell it as €5-15/verification + €200-400K/yr enterprise contract to the 4-5 staffing-tech consolidators who own framework-listed distribution and need cross-border supply to scale beyond domestic shift-fill. Different buyer (staffing-platform PM, not hospital COO), different cycle (3-6 months B2B SaaS), different moat (regulatory data + member-state relationships, not hospital implementation).",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Buyer set is 4-5 EU+US staffing-tech consolidators (Aya, Doctari, RLDatix, Patchwork) — UK + DE + IT + FR are the active cross-border demand corridors.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "DHA/HAAD credential portability is a secondary product line for the same buyers; deprioritised vs EU core."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "T-Life private hospital network (HHG, Iaso, Mitera) = pilot validation site for real placements, NOT GTM channel."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not relevant to API-buyer GTM."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "T-Life Greek private-hospital network = pilot validation surface for 20 real cross-border placements during kill-test hs-k2. NOT the load-bearing GTM channel — sales is direct to consolidator product orgs.",
    "tags": [
      "infrastructure-to-incumbents",
      "credential-portability",
      "directive-2005-36",
      "epc-european-professional-card",
      "api-first",
      "phase0-funded"
    ],
    "addedDate": "2026-05-16",
    "notes": "RE-SPEC 2026-05-21 per PORTFOLIO_RESHAPE.md. The original 'AI staffing platform sold to NHS Trusts + Kliniken' framing died on the 2026-05-20 red-team finding (RM6387 framework lock to Nov 2033 + Doctari/Aya/Patchwork consolidation). Adopted the redTeamFindings[0].alternativeThesis verbatim: credential-portability infrastructure sold to the 4 consolidators (Aya, Doctari, RLDatix, Patchwork) at €5-15/verification + €200-400K/yr enterprise. Phase 0 budget reset to €120K with 3 binary kill tests (paid scoping LOI Week 10, technical pass-through Week 14, term-sheet/acqui-hire Week 18). Original assertions retained as factual ground; killTests, preMortem, probabilityBands rewritten.\n\nFunded as 1 of 2 surviving Phase 0 bets in the re-shape. The other is medadherence-pharmacy.\n\nPRIOR HISTORY: v2 upgrade 2026-05-16 (5 assertion validation patches); red-team 2026-05-20 (verdict: pass with alternative thesis adopted).\n\n2ND-ROUND RED-TEAM 2026-05-21: see redTeamFindings[1].",
    "whyNow": "EU consolidator buying window is OPEN: Aya bought Locum's Nest June 2025 (active EU M&A pipeline); Patchwork acquired L2P Oct 2024 (modular acquisition appetite); Doctari/Vitruvian sitting on cross-border placement capacity it cannot legally compute today. Credential-portability is the rate-limit on cross-border supply — every consolidator hits it and none will build it. Window closes when ONE of them buys an EHIC/EPC-adjacent regtech first.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-4",
        "milestone": "Paid scoping engagement signed with 1 of Aya/Doctari/RLDatix/Patchwork at ≥€50K; UK+DE+IT credential pass-through demonstrated on 20 real placements (T-Life Greek hospital network = pilot surface)."
      },
      {
        "timeframe": "Month 4-12",
        "milestone": "First €200-400K/yr enterprise contract live; second consolidator in design-partner pipeline; verification volume 5K+/mo."
      },
      {
        "timeframe": "Month 12-36",
        "milestone": "3 of 4 named consolidators on contract; €3-6M ARR; acqui-hire conversation OR €2-3M seed round targeting healthcare-staffing strategics (NOT generalist Atomico/Insight)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€120K Phase 0 → €2-3M seed if Week-18 gate passes",
      "capexRatio": "5% capex / 95% opex",
      "note": "API-first; no hospital deployment, no on-prem integration. Material spend is regulatory engineering: legal mapping across 27 member-state professional registers (~€300-600K to full coverage, deferred to post-seed)."
    },
    "competitors": [
      {
        "name": "ENIC-NARIC + member-state regulator portals",
        "type": "incumbent",
        "geography": "EU",
        "note": "The OFFICIAL credential-recognition channels — slow, fragmented, not API. We aggregate + abstract these, we don't replace them."
      },
      {
        "name": "Aya, Doctari, RLDatix, Patchwork",
        "type": "incumbent",
        "geography": "EU+US",
        "note": "BUYERS, not competitors. Each consolidates domestic shift-fill but lacks cross-jurisdiction supply because credential portability is uneconomic to build internally."
      },
      {
        "name": "Vialto Partners, Fragomen",
        "type": "incumbent",
        "geography": "Global",
        "note": "Adjacent immigration/credentialing law firms. Services-heavy; not API-shaped; do not sell to staffing platforms."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.3
    },
    "ycRfsCorrelation": "EU healthcare workforce crisis at political peak; high-ACV B2B SaaS at intersection of agetech demand + workforce mobility supply.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "agetech",
    "assertions": [
      {
        "id": "hs-a1",
        "claim": "WHO Europe projects ~4.1M healthcare worker shortfall by 2030 (600K doctors + 2.3M nurses + 1.1M social care). NOT 1M+ — actual figure is ~4× the prior thesis number.",
        "source": "https://www.euronews.com/my-europe/2025/09/09/which-eu-countries-have-the-most-healthcare-workers-amid-shortages",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL: shortfall is 4× larger than thesis claimed — STRENGTHENS the thesis materially. Demand-side pressure is more acute."
      },
      {
        "id": "hs-a2",
        "claim": "UK NHS ~100-126K vacancies (Q1 2023/24); Germany 150-200K+ nursing gap (projections up to 200-520K by 2030); Italy ~30K doctors + 70K nurses (~100K combined); France ~12K doctors + 50-60K nurses (~62-72K combined). Italy+France combined ~160-170K (prior '~200K' is plausible upper range).",
        "source": "https://www.kingsfund.org.uk/insight-and-analysis/data-and-charts/nhs-workforce-nutshell",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "hs-a3",
        "claim": "Locum's Nest (60K+ professionals, 50+ NHS Trusts) and Patchwork Health (200+ orgs) are the dominant UK locum-marketplace incumbents. CRITICAL UPDATE: Locum's Nest acquired by Aya Healthcare (US) in 2024-25 — the prior 'structurally UK-locked' framing is materially weaker; Aya is US-based and expansion-friendly, potentially erodes the multi-jurisdiction wedge.",
        "source": "https://www.workforcealliance.nhs.uk/suppliers/locums-nest/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL: Locum's Nest under Aya ownership is no longer UK-locked. The thesis wedge (multi-jurisdiction expansion that incumbents can't do) is now contestable. Track Aya EU rollout."
      },
      {
        "id": "hs-a4",
        "claim": "NHS agency-staff price cap was set at ~55% above substantive basic pay in 2016 (covers NI, pension, holiday, agency fee). Mean realized agency spend ~6.8% of total substantive pay; effective per-shift premium varies widely. Prior '30-40%' likely understates true loaded cost.",
        "source": "https://www.england.nhs.uk/long-read/agency-rules/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Tightened — premium is closer to 55%+ on per-shift loaded cost basis."
      },
      {
        "id": "hs-a5",
        "claim": "Directive 2005/36/EC (7 Sept 2005), amended by Directive 2013/55/EU (20 Nov 2013, transposition deadline 18 Jan 2016) governs EU cross-border recognition of professional qualifications including sectoral health professions.",
        "source": "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex:32013L0055",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "hs-k1",
        "hypothesis": "1 of Aya, Doctari, RLDatix, Patchwork signs a paid scoping engagement at ≥€50K by Week 10",
        "experiment": "Founder + ex-Patchwork/ex-Locum's-Nest advisor direct outreach to 4 named product/M&A leads; pitch deck = credential-portability gap memo + 20-placement Greek pilot dataset; cap discovery at 8 weeks",
        "costEur": 15000,
        "durationWeeks": 10,
        "killSignal": "0 paid scoping engagements signed",
        "validateSignal": "≥1 signed at ≥€50K (KEY GATE — failing this kills the bet per PORTFOLIO_RESHAPE.md §5)"
      },
      {
        "id": "hs-k2",
        "hypothesis": "Headless API demonstrates UK+DE+IT credential pass-through on 20 real placements by Week 14",
        "experiment": "Build minimum-viable verifiers against UK GMC/NMC primary-source APIs, German Landesärztekammer (start with NRW + Bayern), Italian FNOMCeO; run 20 real cross-border placements through HHG/Iaso/Mitera Greek hospital network with a paid SLA on placement-failure rate",
        "costEur": 65000,
        "durationWeeks": 14,
        "killSignal": "Any jurisdiction's primary-source pathway not technically reachable, OR placement-failure rate >3% on the 20-placement cohort",
        "validateSignal": "All 3 jurisdictions live; ≤2% failure; placement turnaround <72h vs current 4-12 weeks"
      },
      {
        "id": "hs-k3",
        "hypothesis": "Signed term-sheet for €200-400K data/API license OR substantive acqui-hire conversation initiated with ≥1 named acquirer by Week 18",
        "experiment": "Convert hs-k1 scoping engagement + hs-k2 technical proof into commercial term-sheet OR initiate acqui-hire dialogue (acquirer pays for the regulatory IP + team, not the platform)",
        "costEur": 12000,
        "durationWeeks": 18,
        "killSignal": "No term-sheet AND no acqui-hire dialogue (KEY GATE — failing this kills the bet)",
        "validateSignal": "Signed term-sheet OR formal acqui-hire conversation with diligence list issued"
      }
    ],
    "preMortem": [
      {
        "cause": "Aya/Doctari decide to build internally — staffing-tech M&A teams convince leadership the regulatory data is core IP not third-party",
        "likelihood": "medium",
        "earlySignal": "Job postings at Aya/Doctari for 'Director, EU Credentialing' or 'Head of Regulatory Engineering'; track quarterly"
      },
      {
        "cause": "ENIC-NARIC or EU Commission ships a public-good EPC verification API before Phase 0 closes, collapsing the data moat",
        "likelihood": "low",
        "earlySignal": "Track DG GROW + DG EMPL public-consultation calendar; flag any 2026 RFP for unified credential infrastructure"
      },
      {
        "cause": "Member-state regulator primary-source APIs require political access we don't have (e.g. Italian FNOMCeO requires Sapio/INAIL approvals; French Ordre national gateway only)",
        "likelihood": "medium",
        "earlySignal": "Week 6 technical scoping with 3 national-regulator IT leads — if cooperation requires >12-month government contract, halt build"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.5,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "Re-spec'd 2026-05-21. €1M ARR pathway is materially cleaner under API-to-incumbent thesis (3 consolidators × €300-400K = €1M base case in 18 months IF Phase 0 gates clear). €10M ARR probability drops vs. original platform thesis because the buyer set is narrower (4 named) — but failure-mode is also faster and cheaper to detect (€120K vs €1.2-2.5M seed). Higher total-failure rate (0.4) reflects honesty about consolidator-internal-build risk."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-20",
        "verdict": "pass",
        "dealKiller": "The NHS market is procurement-foreclosed for the duration of this deal's window. NHS Workforce Alliance Workforce Technology Systems framework (RM6387) was re-awarded 17 November 2025; it runs to Nov 2026 with extensions to 1 November 2033 — an 8-year lock-out for non-framework suppliers. Locum's Nest (now Aya-owned), Patchwork Health, and RLDatix/Allocate are on it; HospitalStaff is not, cannot be added mid-cycle (frameworks don't take new suppliers except via narrow DPS routes), and NHS Trusts overwhelmingly call off framework-listed vendors for compliant procurement. Meanwhile the parallel 'wedge' market — Germany — already has Doctari Group (Vitruvian-backed since 2018) which acquired Planerio (AI shift scheduling, 4,000+ EU sites) in 2021 and consolidates Lichtfeld + others. Both flagship buyer geographies are owned by capitalized incumbents who pre-empted the wedge while the thesis was being written. The 'fax and phone' framing in the description is false for the rostering layer (Allocate Optima rosters 2M+ NHS staff; Patchwork has 200+ orgs).",
        "patternMatches": [
          "Aya Healthcare acquired Locum's Nest June 2025 — the 'UK-locked incumbents can't go EU' wedge died on transaction close; Aya is the largest US healthcare workforce software+staffing platform with EU expansion capital and motive.",
          "Doctari Group (Berlin, founded 2008, Vitruvian-backed 2018) acquired Planerio (Munich AI shift planning, 4,000+ EU sites) in 2021 and Lichtfeld in 2021 — German hospital staffing tech is consolidated under a PE roll-up that has had 7 years' head start.",
          "Patchwork Health raised £20M, acquired L2P (job planning/appraisal) Oct 2024, signed 17 NHS partnerships in 8 months in 2025 — actively expanding scope from rostering into adjacent modules HospitalStaff also targets. Not the static UK-locked competitor the thesis describes.",
          "NHS Workforce Technology Systems framework RM6387 (awarded 17 Nov 2025, extensions to 1 Nov 2033) — NHS buyers procurement-locked to listed suppliers for up to 8 years; non-framework entrants face open-tender 3-6 month cycles per Trust × 215 Trusts, structurally unviable for a seed-stage entrant."
        ],
        "unitEconomicsConcern": "€100-300K ACV is gross of 18-24 month NHS Trust sales cycle (Information Governance, DSPT, DTAC, Clinical Safety DCB0129/0160, security assessment, framework workaround) and 12-month German Kliniken procurement (KIS integration, BSI security review, Betriebsrat sign-off). At €1.5-2.5M seed, CAC per hospital is €150-400K before payback — pre-payback unit margin is negative for 24+ months even on stated ACVs. Multi-jurisdiction credential-recognition build (kill-test hs-k2, €30K stated) materially under-estimates legal+integration cost across UK GMC/NMC, German Landesärztekammer + Pflegekammer (16 state variants), Italian FNOMCeO + IPASVI, French Ordre — closer to €400-600K of regulatory engineering before revenue.",
        "loadBearingAssumption": "That hospital procurement officers in UK and Germany will buy an integrated cross-jurisdiction platform from a seed-stage non-framework vendor on a 12-18 month timeline, when (a) NHS Trust compliant procurement routes flow through RM6387 which excludes new entrants until 2033, (b) German Kliniken buy through KIS-integrated PE-consolidated incumbents (Doctari/Planerio), and (c) the cross-border placement use case is <2% of actual hospital staffing volume — hospitals overwhelmingly fill from domestic banks first, agencies second, cross-border last. The thesis assumes the cross-jurisdiction wedge is what hospitals are buying; in practice they are buying domestic shift-fill, where Allocate, Patchwork, Locum's Nest, NHS Professionals National Bank, and Doctari already deliver.",
        "alternativeThesis": "Drop the hospital-direct platform play. Reframe as a credential-portability and clinician-mobility infrastructure layer that incumbents (Aya, Doctari, RLDatix, Patchwork) buy from you. Build the Directive 2005/36/EC + 2013/55/EU compliance engine — automated credential verification across 27 member-state regulators, language-proficiency checks, primary-source verification, EPC (European Professional Card) workflow — as headless API at €5-15 per verification + €50-150K/yr enterprise contract. Sell to the 3-5 staffing tech consolidators who actually have framework-listed distribution and need cross-border supply to scale beyond domestic shift-fill. Different buyer (staffing platform PM, not hospital COO), different sales cycle (3-6 months B2B SaaS, not 12-18 months NHS procurement), different moat (regulatory data + relationships, not hospital implementation). T-Life Greek private-hospital channel becomes a pilot validation site, not the load-bearing GTM."
      },
      {
        "date": "2026-05-21",
        "verdict": "revise",
        "dealKiller": "The 'consolidators can't economically build credential portability' assumption is empirically false in 2026. Aya Global Talent's UK office already credentials 5,000+ international placements; RLDatix's Dec-2025 Allocate acquisition explicitly fuses credentialing + workforce management; Doctari has run cross-border German placement since 2018. More fatally, EU sectoral health professions (doctors, nurses, midwives, dentists, pharmacists) have AUTOMATIC RECOGNITION under Directive 2005/36/EC Annex V — the verification 'data moat' is a thin administrative-workflow wrapper, not a hard regulatory-data product. Layer on the EUDI Wallet mandate (member states MUST issue healthcare-professional EAAs by Dec 2026, relying parties MUST accept by Dec 2027) and the public-good infrastructure the preMortem flagged as 'low' likelihood is in fact legally mandated and shipping inside the Phase-0 window. The €5-15/verification + €200-400K/yr ACV gets compressed against a free state-issued QEAA before the Week-18 gate.",
        "patternMatches": [
          "Aya Global Talent UK office — placed 5,000+ international clinicians pre-acquisition; credential ops in-house, not outsourced. The buyer the thesis names has already built v1.",
          "RLDatix acquires Allocate (Dec 2025) — explicitly markets 'only platform combining workforce management with credentialing.' The integration play the thesis sells TO them is now their internal product roadmap.",
          "EUDI Wallet eIDAS 2.0 — Implementing Acts 2025; mandatory issuance of healthcare-professional EAAs by all 27 member states Dec 2026; mandatory acceptance by relying parties Dec 2027. Identity Management CIR names healthcare as a first-priority sector. Public-good API collapses the data moat in the exact Phase-0 timeline.",
          "Fragomen Wallet (ELA Belgium good-practice 2024) — already a digital credential wallet from a Vialto/Fragomen-adjacent immigration practice; services-firms ARE moving into the API-shaped space, contra the spec's framing.",
          "CertifyOS / Verifiable / Propelus — US API-first credentialing raised growth capital 2024-25 on the exact 'primary-source verification API' model; any of them landing one EU acquihire (Aya is the obvious channel) compresses the window before Week 18."
        ],
        "unitEconomicsConcern": "Cross-border EU clinician placements are <5% of total EU healthcare hiring (WHO Europe 2025); 4 named consolidators × realistic 20-50K verifications/yr each at €5-15 = €0.4-3M total addressable verification revenue across the entire buyer set. Enterprise contracts at €200-400K × 3 = €0.6-1.2M ARR ceiling for the 'base case' — but only if buyers don't internalize (Aya, RLDatix already have) and EUDI doesn't free-tier the primary-source layer. €120K Phase 0 + €300-600K member-state legal mapping for a market that maxes at €3-5M ARR with 3-of-4 logo capture is a wrong-shape outcome for a venture bet — closer to a services consultancy.",
        "loadBearingAssumption": "That EU credential portability is a hard, defensible data product that 4-5 consolidators will pay €200-400K/yr to outsource. In reality it is (a) a thin administrative workflow on top of automatically-recognized sectoral qualifications, (b) being commoditized by EUDI Wallet QEAAs on a 2026-27 statutory clock, and (c) already in-housed by Aya UK and RLDatix-Allocate. The thesis re-adopted the prior alt-thesis verbatim without re-stress-testing it against the buyers' actual 2025-26 build/buy posture.",
        "alternativeThesis": "Pivot from selling-the-engine to selling-the-EUDI-integration-layer. The real 2026-28 wedge is NOT building the credential data moat — it's the relying-party orchestration that staffing-tech consolidators, hospital HRs, and locum platforms must wire up to ACCEPT QEAAs from 27 different member-state wallets by Dec 2027 (eIDAS 2.0 mandatory-acceptance deadline). This is a SaaS integration product (€20-60K/yr per relying party × hundreds of hospitals + staffing platforms + agencies), sells into a statutory compliance deadline (not a discretionary build-vs-buy), and the buyers are wider than 4 consolidators (every NHS Trust, every Klinik, every staffing platform). The T-Life pilot becomes a relying-party reference architecture for accepting EUDI-issued clinician EAAs at point of placement. Different shape: compliance-deadline B2B SaaS, broad buyer set, regulatory tailwind rather than headwind."
      }
    ]
  }
];
