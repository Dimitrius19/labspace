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
    }
  },
  {
    "id": "construction-site-coach",
    "title": "Siteform",
    "ycCategory": "AI Guidance for Physical Work",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "Real-time AI safety and skills coaching for migrant construction workers, reducing site accident rates and enabling faster NSRF-compliant project delivery in Southern and Eastern Europe.",
    "description": "Southern European construction is running on a workforce that is structurally undertrained and linguistically fragmented. Greece's NSRF 2021–2027 programme is deploying €26B in infrastructure investment — highways, hospitals, ports, energy transition projects — but the domestic skilled construction workforce has shrunk 40% since the 2010 crisis. The gap is filled by workers from Pakistan, Bangladesh, Egypt, Albania, and Bulgaria who arrive with varying trade skills and zero familiarity with EU safety regulations (EN 13374, OHS Directive 89/391/EEC). Greece has the second highest construction fatality rate in the EU. A single OAED (Greek labour inspectorate) site shutdown costs €80K–€300K in penalties and project delays — pain that falls directly on the main contractor.\n\nSiteform provides rugged Android tablets and optional hard-hat-mounted cameras that guide workers through task procedures — formwork assembly, rebar tying patterns, waterproofing membrane installation, scaffold erection — in their native language with real-time visual confirmation. The AI is trained on Greek Technical Chamber (TEE) construction standards and EU safety directives. A safety anomaly detection layer flags missing PPE, fall hazards in the work zone, and incorrect load-bearing configurations before an incident occurs. Project managers receive a daily skills gap and safety compliance report per worker, which feeds directly into the NSRF project documentation requirements for labour compliance. Sold as a monthly SaaS subscription per active work crew to main contractors.\n\nThe construction tech market (Procore, PlanGrid) is entirely project management and document workflow — zero real-time worker guidance exists in the EU market. The combination of NSRF spending velocity, EU safety regulatory pressure, and T-Life's ability to pilot at ALTP construction projects creates a defensible local beachhead. The migrant workforce angle aligns directly with T-Life's Migration & Workforce Mobility thesis and creates a data network effect: each new language and trade procedure trained improves the model for all users.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "€26B NSRF programme creates immediate demand from main contractors under compliance pressure. ALTP construction projects are a captive pilot site. Greek labour inspectorate (OAED) relationships via T-Life network can accelerate regulatory endorsement.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Albania, North Macedonia, and Serbia have EU accession construction booms, identical migrant workforce profiles, and negligible existing construction tech penetration — copy-paste of the Greece playbook."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC mega-projects (NEOM, Dubai Urban Master Plan) employ 5M+ South Asian construction workers with documented safety and skills gaps — massive TAM but requires Arabic and South Asian language packs and different regulatory framework."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Germany and Austria have large Turkish and Eastern European migrant construction workforces and strict Berufsgenossenschaft safety certification requirements — strong regulatory pull but longer enterprise sales cycles."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ALTP infrastructure development creates a captive first customer. T-Life's Migration & Workforce Mobility thesis is a direct fit — this is the physical-world skills layer of that thesis. Greek construction industry relationships compress the enterprise sales cycle from 18 months to under 6.",
    "tags": [
      "construction",
      "safety",
      "migration",
      "workforce-mobility",
      "nsrf",
      "multilingual-ai",
      "computer-vision",
      "eu-ohs"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "Greece's new Construction Safety Presidential Decree (PD 128/2023) mandates site-specific safety inductions and documented competency records for all workers, including undocumented migrants, creating an immediate compliance liability for contractors. EU AI Act classification of safety coaching tools as limited-risk (not high-risk) means no conformity assessment is required, lowering regulatory barriers to launch. The Greek construction boom driven by €35B NSRF 2021-2027 funds is creating acute skilled labor shortages that push migrant workers into roles without adequate training.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Pilot with 2-3 large Greek contractors (Intrakat, GEK TERNA subcontractors); deploy multilingual (Greek, Albanian, Bengali) safety induction flows for scaffolding and PPE protocols"
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Incident-tagged session library built; safety officer dashboard with worker competency heat maps; compliance documentation exported to contractor QMS"
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Cross-site incident pattern models trained on aggregated data; integration with ERGANI II labor registry to auto-attach competency records to worker digital IDs"
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Insurance underwriters (Eurolife, Ethniki) offer premium discounts to contractors using platform; ERGANI II integration makes platform de facto standard for PD 128 compliance documentation"
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€250K-€500K",
      "capexRatio": "10% capex / 90% opex",
      "note": "Ruggedized tablet hardware for site deployment is optional (BYOD via mobile works); primary cost is multilingual content production and field sales to contractors"
    },
    "competitors": [
      {
        "name": "Procore",
        "type": "incumbent",
        "geography": "USA/Global",
        "note": "Construction management platform; project/finance focused, not frontline safety coaching"
      },
      {
        "name": "Guardhat",
        "type": "startup",
        "geography": "USA",
        "note": "Wearable safety platform for industrial workers; hardware-heavy, not AI coaching"
      },
      {
        "name": "Soter Analytics",
        "type": "startup",
        "geography": "UK/Global",
        "note": "Wearable ergonomics coaching; body movement focus only, not multilingual site safety"
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 4,
      "composite": 3.5
    },
    "ycRfsCorrelation": "YC wants AI that provides step-by-step instructions for field work. Siteform coaches migrant construction workers through safety procedures and building techniques via wearable cameras on Balkan and Greek construction sites.",
    "tlifeAssetRefs": [
      "altp",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "sf-a1",
        "claim": "Greek Presidential Decree PD 128/2023 created enhanced construction safety obligations",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "sf-a2",
        "claim": "EU NSRF allocates €26B to Greek construction over 2021-27",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "sf-a3",
        "claim": "Migrant construction workforce in Greece ~80K",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "sf-a4",
        "claim": "Hilti, Procore offer adjacent site safety products but no multilingual AI coaching",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "sf-a5",
        "claim": "ALTP has construction-adjacent tenant SMEs as captive design partners",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "sf-k1",
        "hypothesis": "1 mid-size Greek main contractor signs at €30-80K ACV in 12 weeks",
        "experiment": "Direct pitch + on-site demo at ALTP construction site + 5 external mid-size contractors",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "0 signed",
        "validateSignal": "≥1 signed at €30K+ with 100+ worker site"
      },
      {
        "id": "sf-k2",
        "hypothesis": "Multilingual (Greek/Albanian/Romanian/Arabic) coaching is comprehensible and useful to actual migrant workers at the site",
        "experiment": "Deploy on 1 ALTP construction site with 30 migrant workers; observe + survey for 4 weeks",
        "costEur": 6000,
        "durationWeeks": 4,
        "killSignal": "<60% workers report value",
        "validateSignal": "≥80% workers report value + measurable safety-behavior change"
      },
      {
        "id": "sf-k3",
        "hypothesis": "Site accident rate drops 30%+ in first 90 days of deployment",
        "experiment": "Measure accident rates before/after deployment with same site as control",
        "costEur": 4000,
        "durationWeeks": 12,
        "killSignal": "<10% reduction OR not statistically significant",
        "validateSignal": "≥30% reduction AND insurance partner validates"
      }
    ],
    "preMortem": [
      {
        "cause": "Site accident reduction signal too noisy to attribute to coaching — main contractor doesn't pay for unproven causation",
        "likelihood": "medium",
        "earlySignal": "Kill-test sf-k3 results"
      },
      {
        "cause": "Main contractor margin compression makes €30-80K ACV unaffordable (Greek construction has razor-thin margins)",
        "likelihood": "medium",
        "earlySignal": "Kill-test sf-k1 negotiation feedback"
      },
      {
        "cause": "Hardware fit-out per worker (smart helmets/tablets) erodes SaaS margin — becomes a hardware business not software",
        "likelihood": "high",
        "earlySignal": "Cost-per-worker modeling at scale; first 100-worker deployment economics"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.35,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Construction SaaS has tough 12-18 month sales cycles. Main contractor buyer with insurance discount + NSRF pull is more credible than direct-to-migrant-worker. €10M ARR = 100-150 contractors × €70-100K — requires expansion to DACH or Iberia within 24 months. The cross-cutting red-team flag (AI-Guidance-for-Physical-Work pattern) puts a real cap on this thesis."
    }
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
    "notes": "\n\nFold-in (2026-05-16): procurement-ghost-detector (Phantomcheck) — ghost-contractor and bid-rigging detection — had the same institutional buyer (Hellenic Court of Auditors / EPPO) as OLAFTrace with weaker tlifeEdge. Portfolio red-team verdict: fold as a second module in OLAFTrace rather than run a parallel sales motion. Procurement-fraud detection is now feature #2 of OLAFTrace.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "EU structural funds total €380B over 2021-27 programming period",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
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
        "claim": "Sayari, Kharon, Refinitiv World-Check are adjacent corporate-intelligence vendors but US-private-sector focused",
        "source": "[UNVERIFIED]",
        "status": "unverified",
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
    }
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "EFPIA Disclosure Code mandates HCP transfer-of-value transparency across 33 European countries",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "se-a2",
        "claim": "Greek Law 4316/2014 and national variants enforce anti-kickback rules for HCP interactions",
        "source": "[UNVERIFIED]",
        "status": "unverified",
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
    }
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "EU 14th Russia sanctions package added personal liability for EU ship managers facilitating sanction circumvention",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vv-a2",
        "claim": "AIS dark-voyage detection methodology proven by Windward, Pole Star, Spire",
        "source": "[UNVERIFIED]",
        "status": "unverified",
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
        "claim": "Windward valued at $200M+ as public company; primary competitor in compliance space (not prosecution)",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
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
    }
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "Greek Law 5039/2023 created enhanced elder-care provider compliance regime",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
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
    }
  },
  {
    "id": "pm-copilot-southeast-europe",
    "title": "Polis",
    "ycCategory": "Cursor for Product Managers",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "AI product co-pilot that turns customer interviews and usage analytics into prioritized roadmaps for B2B SaaS teams in Southern and Eastern Europe.",
    "description": "Product managers at growth-stage B2B SaaS companies in Greece, Cyprus, and the Balkans lack the tooling to systematically extract signal from qualitative research. Customer interviews sit unprocessed in Notion or Drive, NPS data is aggregated but never interrogated, and roadmap decisions default to HiPPO opinion. The cost is high: wrong bets at Series A and B are fatal in markets with limited runway and smaller investor pools.\n\nPolis connects to the PM's existing stack—Intercom, Mixpanel, Typeform, Google Meet transcripts—and applies a retrieval-augmented reasoning layer to answer questions like 'what is the most requested unbuilt feature among churned enterprise accounts?' or 'which onboarding step correlates most with 90-day retention?' It then generates a prioritized feature brief with effort estimates, stakeholder talking points, and a one-page implementation breakdown ready for engineering handoff. The product is opinionated about Southern European B2B SaaS patterns: longer sales cycles, heavy relationship-driven retention, and multilingual customer bases.\n\nExisting tools like Productboard, Dovetail, and Sprig are US-centric in pricing, UX, and integrations. None natively handle Greek, Romanian, Bulgarian, or Arabic-language interview transcripts. The YC RFS timing is a strong signal that the category is validated at the top of the market; the opportunity is to own the beachhead in underserved geographies before US incumbents localize.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Athens and Thessaloniki host a concentrated cluster of funded B2B SaaS companies (Viva, Epignosis, Learnworlds, Plum) with product teams that are sophisticated enough to adopt PM tooling but too small to build internal analytics infrastructure. T-Life's ALTP network provides direct BD access to this cohort.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Bucharest, Sofia, and Belgrade have fast-growing B2B SaaS ecosystems with identical tooling gaps and language barriers that US incumbents won't prioritize."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Plausible expansion into CEE (Warsaw, Prague) where product teams are mature but Dovetail/Productboard penetration is lower than Western Europe."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "Dubai and Riyadh SaaS teams are growing fast but Arabic NLP for customer interview analysis is a genuine gap that creates a wedge."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ALTP positions T-Life as the natural distribution partner: a pilot cohort of 8-12 Athens LifeTech Park portfolio companies provides the initial dataset, referenceable case studies, and a credible Series A narrative anchored to a real innovation district.",
    "tags": [
      "product-management",
      "b2b-saas",
      "ai-copilot",
      "roadmap-intelligence",
      "southern-europe"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "The SE European startup ecosystem reached a critical mass of 200+ B2B SaaS companies in 2024 (Greece, Romania, Bulgaria, Croatia combined), but product management maturity lags — most teams lack dedicated PMs and rely on founders making intuition-based roadmap decisions. LLM-based qualitative research analysis (interview transcript → insight extraction → prioritization) reached production quality in 2024 with Claude 3.5 and GPT-4o's multilingual capabilities covering Greek, Romanian, and Bulgarian. The EU's Digital Services Act compliance wave created a surge of product decisions for SE European SaaS companies that founder-intuition alone cannot navigate.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Deploy Polis with 10 ALTP portfolio companies; build multilingual interview-to-insight pipeline covering Greek, English, and Romanian; deliver first AI-generated prioritized roadmaps validated against actual feature usage data."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "30+ active SaaS teams; build proprietary B2B product pattern library trained on SE European usage data (buying patterns, churn signals, feature adoption curves differ significantly from US/UK benchmarks)."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "100+ teams using Polis; proprietary SE European product benchmark dataset (what features drive retention in this market, what pricing works, what onboarding patterns succeed) creates insight advantage unavailable in global PM tools."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Dominant PM tool in SE European startup ecosystem; launch investor-facing product health scoring (useful for VCs evaluating portfolio companies); expand to Turkey and MENA startup ecosystems; €1M+ ARR."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€150K-€350K",
      "capexRatio": "10% capex / 90% opex",
      "note": "Pure SaaS product; ALTP provides free pilot cohort; main cost is product engineering and LLM API usage; SE European market allows capital-efficient growth with lower CAC than US equivalents."
    },
    "competitors": [
      {
        "name": "Productboard",
        "type": "incumbent",
        "geography": "Global",
        "note": "Gold-standard PM platform, English-centric, priced for US/Western EU"
      },
      {
        "name": "Fibery",
        "type": "startup",
        "geography": "Europe",
        "note": "Flexible product ops tool, not AI-native PM co-pilot"
      },
      {
        "name": "Linear",
        "type": "startup",
        "geography": "Global",
        "note": "Developer-first issue tracker, not a PM intelligence layer"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 2,
      "competitiveGap": 3,
      "capitalFit": 5,
      "regulatoryRisk": 5,
      "founderAvailability": 4,
      "composite": 3.3
    },
    "ycRfsCorrelation": "YC wants AI tools where PMs upload data and ask what to build next. Polis delivers this for SE European B2B SaaS teams — synthesizing customer interviews and usage data into prioritized feature recommendations.",
    "tlifeAssetRefs": [
      "altp",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "pl-a1",
        "claim": "Productboard, Dovetail, Maze are tier-1 PM tooling incumbents",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pl-a2",
        "claim": "SE European B2B SaaS startup count ~500-1000 with PM needs",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pl-a3",
        "claim": "ALTP tenant SMEs include 20-40 B2B SaaS portfolio teams",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pl-a4",
        "claim": "Productboard ACV ~$15-50K/year for mid-market teams",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pl-a5",
        "claim": "LLM-driven PM workflow proven (Dovetail AI, Notion AI, Linear AI features)",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "pl-k1",
        "hypothesis": "8 ALTP-tenant B2B SaaS teams sign at €5-15K ACV in 8 weeks",
        "experiment": "Direct pitch to 30 ALTP tenants + 20 external SE Europe B2B SaaS teams",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "<3 signed",
        "validateSignal": "≥8 signed at €5K+ ACV"
      },
      {
        "id": "pl-k2",
        "hypothesis": "Polis-generated roadmap scores ≥'useful with minor edits' by 5 PMs in blind comparison vs human-written roadmaps",
        "experiment": "Generate roadmaps for 5 design-partner teams; blind review",
        "costEur": 6000,
        "durationWeeks": 6,
        "killSignal": "<3/5 prefer Polis output",
        "validateSignal": "≥4/5 prefer; ≥3 willing to renew at higher tier"
      },
      {
        "id": "pl-k3",
        "hypothesis": "Customer-interview transcript-to-feature-spec pipeline accuracy ≥80% on test set",
        "experiment": "100 real customer-interview transcripts; measure accuracy vs human-coded ground truth",
        "costEur": 5000,
        "durationWeeks": 6,
        "killSignal": "<70% accuracy",
        "validateSignal": "≥80% accuracy with stable variance"
      }
    ],
    "preMortem": [
      {
        "cause": "Productboard / Dovetail localize into SE Europe — though small TAM means low priority",
        "likelihood": "low",
        "earlySignal": "Monitor incumbent EU expansion announcements"
      },
      {
        "cause": "LLM-driven PM is absorbed as a feature inside larger PM tools (Linear, Notion, Atlassian)",
        "likelihood": "medium",
        "earlySignal": "Track incumbent AI-feature releases"
      },
      {
        "cause": "SE European PM budget too thin to support €5-15K ACV — €10M ARR ceiling forces Western EU expansion which puts Polis directly against Productboard",
        "likelihood": "medium",
        "earlySignal": "Kill-test pl-k1 conversion rate; expansion-market unit economics modeling"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Pure SaaS, no regulatory perimeter, no liability transfer — clean unit economics. ALTP captive design partners de-risk first 8-15 customers. €10M ARR requires expansion beyond SE Europe (TAM constraint) which puts Polis up against Productboard directly. Cleanest economics in the catalog; ceiling is the constraint."
    }
  },
  {
    "id": "pharma-launch-intelligence",
    "title": "Launchbase",
    "ycCategory": "Cursor for Product Managers",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "AI-powered product discovery platform for pharmaceutical commercial teams launching drugs in fragmented Southern and Eastern European markets.",
    "description": "Launching a pharmaceutical product across Greece, the Balkans, and the GCC requires synthesizing physician interview data, payer landscape research, competitive prescribing patterns, and regulatory timelines into a coherent go-to-market plan. At mid-size pharma companies, this work is done manually by medical affairs and market access teams using PowerPoint decks and Excel trackers. The result is slow launch planning cycles of 12-18 months, missed reimbursement windows, and positioning that fails to reflect real physician needs.\n\nLaunchbase is a PM-style intelligence layer built specifically for pharma commercial teams. Upload KOL interview transcripts, patient journey maps, IMS/IQVIA sales data exports, and HTA dossiers. Ask 'what are the top three unmet needs among cardiologists in Romania that our compound addresses?' or 'which competitor's weaknesses are most frequently cited by prescribers?' The system returns structured insight cards with source citations, a draft value proposition matrix, and a phased launch sequencing recommendation by country. It is designed for medical affairs directors, not data scientists.\n\nNo current tool bridges qualitative KOL research and quantitative market data in a single reasoning interface for this geography. Veeva Vault handles regulatory submissions; IQVIA handles data licensing; neither provides a conversational discovery layer. The rare disease and specialty pharma segments—where Elnova Pharma operates—are especially underserved because small patient populations make traditional market research ROI-negative, yet launch precision matters more, not less.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "WinMedica and ELPEN provide direct access to commercial teams running live launch cycles, making Greece-Cyprus the ideal pilot market with real stakes, real data, and a reference customer relationship already inside T-Life's portfolio.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Balkan pharma markets share the same fragmentation problem—small countries, multiple payers, multilingual KOL bases—with no incumbent serving the regional commercial intelligence gap."
      },
      {
        "market": "middle-east",
        "fit": "green",
        "note": "Elnova Pharma's Dubai HQ and GCC rare disease focus creates a warm entry path; HAAD and MOH submissions require exactly the kind of structured evidence synthesis Launchbase produces."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Western Europe has higher incumbent density from Veeva and IQVIA services arms, but CEE markets mirror the Balkans opportunity and are a natural next step post-Balkans."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "T-Life has an unfair advantage here: WinMedica and Elnova Pharma are reference customers, data partners, and distribution channels simultaneously. The founding team can be recruited from WinMedica's commercial excellence function, and the first 18 months of product development are de-risked by a captive pilot.",
    "tags": [
      "pharma-commercial",
      "launch-intelligence",
      "medical-affairs",
      "rare-disease",
      "ai-copilot"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "EMA's DARWIN EU real-world evidence platform (fully operational 2024) and the EU HTA Joint Clinical Assessment (mandatory January 2025) created new data sources and regulatory requirements that pharma launch teams must synthesize — but no existing tool combines regulatory intelligence, payer landscape data, and physician interview analysis for Southern/Eastern European markets. Greece's EOPYY reimbursement committee digitized its decision archive in 2024, making 10 years of pricing and access decisions machine-readable. LLM-based competitive prescribing pattern analysis from IQVIA and local pharmacy data became viable in 2024, enabling launch intelligence that previously required 3-person analytics teams working 6+ months per launch.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Build Launchbase integrating EOPYY reimbursement data, EOF regulatory filing status, and IQVIA prescribing data for Greek pharma market; deploy with WinMedica and Elnova launch teams on 2 active product launches."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Process 5+ product launches; build physician interview analysis module with Greek-language NLP; integrate payer landscape intelligence for Greece, Cyprus, and Bulgaria; 5+ pharma company clients."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "15+ launches tracked; proprietary SE European launch outcome dataset (what pricing strategies work, which KOL engagement patterns drive formulary inclusion, how competitor sequencing affects uptake) creates prediction accuracy no global tool can match for this region."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Reference platform for pharma launches in SE Europe and GCC; launch AI-powered launch simulation module (predict market share scenarios before filing); expand to rare disease launches via Elnova pipeline; €2.5M+ ARR."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€300K-€600K",
      "capexRatio": "15% capex / 85% opex",
      "note": "IQVIA data licensing is the primary recurring cost; WinMedica and Elnova provide free design-partner access and real launch data; engineering talent for pharma-domain AI is the key hiring investment."
    },
    "competitors": [
      {
        "name": "Citeline (Pharma Intelligence)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Legacy pharma market intelligence, extremely expensive, not AI-native"
      },
      {
        "name": "Komodo Health",
        "type": "startup",
        "geography": "USA",
        "note": "US claims-data-driven launch analytics, no EU real-world data integration"
      },
      {
        "name": "Aetion",
        "type": "startup",
        "geography": "USA/Europe",
        "note": "RWE analytics for payer evidence, not commercial launch intelligence"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 5,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 4.05
    },
    "ycRfsCorrelation": "YC wants AI product discovery systems with supporting rationale. Launchbase helps pharma commercial teams decide which markets to launch in first, synthesizing pricing data and competitive intelligence.",
    "tlifeAssetRefs": [
      "winmedica",
      "elpen",
      "elnova-dubai",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "lb-a1",
        "claim": "Citeline (Norstella) is the dominant global pharma launch-intelligence vendor; pricing typically $50-300K ACV per market subscription",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a2",
        "claim": "SE Europe + GCC pharma launches lack a Citeline-equivalent — fragmented sources, local-language data, KOL networks invisible to global incumbents",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a3",
        "claim": "T-Life provides live launch cycles via WinMedica's commercial operations and Elnova's GCC presence",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "lb-a4",
        "claim": "AXIOM / Komodo Health reached ~€100M+ ARR in the US with launch-intelligence + RWE shape",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16",
        "note": "Verify pre external memo."
      },
      {
        "id": "lb-a5",
        "claim": "Mid-size SE Europe / GCC pharma launches per year ~50-100 across the geography",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "lb-k1",
        "hypothesis": "3 SE Europe pharma commercial directors will pay €30-80K ACV for a launch-intelligence subscription",
        "experiment": "Cold-pitch via T-Life network + 5 external; target signed LOIs or pilot contracts",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "<2 LOIs in 8 weeks",
        "validateSignal": "≥3 signed pilots at €30K+ ACV"
      },
      {
        "id": "lb-k2",
        "hypothesis": "T-Life can produce a proprietary SE Europe launch dataset (3 markets × 5 launches) within 4 weeks that competitors don't have",
        "experiment": "Build dataset from WinMedica + Elnova ops + KOL interviews",
        "costEur": 3000,
        "durationWeeks": 4,
        "killSignal": "Dataset takes >8 weeks OR matches publicly available Citeline data",
        "validateSignal": "15+ launches captured with KOL-level data not in Citeline"
      },
      {
        "id": "lb-k3",
        "hypothesis": "LLM-generated launch-intelligence reports score ≥'useful with minor edits' by 5 pharma commercial directors",
        "experiment": "Generate 5 reports from MVP; blind review by directors against a baseline (manually-prepared report)",
        "costEur": 6000,
        "durationWeeks": 6,
        "killSignal": "<3/5 rate as useful",
        "validateSignal": "≥4/5 prefer AI report; ≥1 willing to sign immediate pilot"
      }
    ],
    "preMortem": [
      {
        "cause": "Citeline / Komodo Health extend to SE Europe before we reach scale (Norstella has the capital and the pattern-match motive)",
        "likelihood": "medium",
        "earlySignal": "Monitor Citeline product release notes and EU job postings"
      },
      {
        "cause": "Data sparsity in SE Europe means the proprietary dataset isn't valuable enough to support €30K+ ACV",
        "likelihood": "medium",
        "earlySignal": "Kill-test lb-k2 dataset depth analysis"
      },
      {
        "cause": "WinMedica / Elnova relationships don't translate to non-Tryfon-portfolio buyers (the buyer asks 'who else uses this' and the answer is uncomfortable)",
        "likelihood": "medium",
        "earlySignal": "Kill-test lb-k1 — how many cold prospects vs warm intros sign?"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "AXIOM Komodo got to ~$10M ARR in 30-36 months in the US with similar shape; SE Europe ARPU is ~40-60% of US but TAM is less saturated. The 40% / 20% / 30% bands reflect a stronger-than-average T-Life advantage (warm intros into the first ~10 customers) but a real risk of Citeline EU-extension within 18 months."
    }
  },
  {
    "id": "pharma-regulatory-ai-agency",
    "title": "RegulaFlow",
    "ycCategory": "AI-Native Agencies",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "AI-native regulatory affairs agency that prepares EMA/EOPH dossiers and variation submissions at a fraction of traditional CRO cost.",
    "description": "Pharmaceutical companies operating in Greece, Cyprus, and the Balkans face chronic bottlenecks in regulatory submissions — EMA centralized procedures, national EOPH filings, and post-approval variations all require dense documentation that small local affiliates cannot staff efficiently. CROs charge €50k–€200k per dossier and operate on 6–18 month timelines, creating a structural disadvantage for mid-size generics players and rare disease companies trying to expand into the region.\n\nRegulaFlow deploys LLM pipelines trained on EMA Common Technical Document structure, EOPH national guidance, and historical submission precedents to draft Module 2 summaries, variation justifications, and PSUR narratives. Human regulatory scientists review and sign off, but AI handles 70–80% of the drafting, cutting delivery time by half and cost by 60%. The agency operates as a managed service: clients submit a brief and raw study data, and receive a submission-ready package. Greece is the beachhead because the local market is underserved — there are fewer than 15 qualified regulatory consultancies nationally, most generalist.\n\nGlobal regulatory AI tools like Veeva Vault and Certara focus on enterprise software licensing, not finished deliverables. Regional CROs lack AI investment. The timing is strong: EMA's pilot of electronic submissions and the EU Pharma Legislation reform (fully effective 2026–2027) create a wave of re-submission work that existing capacity cannot absorb.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "WinMedica and ELPEN manufacturing relationships provide immediate pilot clients and domain credibility; local regulatory talent pool (pharmacists, RA specialists) is available and underemployed.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Serbia, Romania, Bulgaria all have generics industries filing parallel national submissions with identical bottlenecks and no local AI-native option."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "Elnova Pharma Dubai HQ opens a natural corridor into MOHAP/HAAD filings for rare disease products entering the GCC."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Plausible for decentralized procedure support for smaller EU markets, but crowded with established CROs in Western Europe."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Direct distribution of pilot work through WinMedica and ELPEN manufacturing; T-Life credibility in pharma derisk customer acquisition in year one. Elnova's rare disease pipeline in Dubai provides a second vertical from day one.",
    "tags": [
      "pharma",
      "regulatory-affairs",
      "ai-agency",
      "ema",
      "rare-disease",
      "b2b"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nFold-in (2026-05-16): pharmareg-ai (PharmaReg.ai) was an EOF/EMA-dossier AI co-pilot framed as a tool. Portfolio red-team verdict: tool-form loses to agency-form on liability transfer; folded into RegulaFlow. Bring the EOF/EMA submission IP and dossier templates into the RegulaFlow service catalog.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "EMA's rolling review process and the EU Falsified Medicines Directive expansion have created a documentation tsunami that legacy CROs cannot absorb at current headcount. LLM fine-tuning on CTD Module 2-4 structures reached production quality in late 2024, making AI-assisted dossier compilation genuinely reliable. The Greek EOPH digitization mandate (2025) opened a structured data pipeline that did not exist two years ago.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Sign 3 generics clients for EMA Type II variation submissions; build proprietary CTD section templates tuned to EMA Q&A feedback patterns from public EPAR database."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Accumulate 50+ accepted dossier sections; train a private fine-tuned model on internal submission corpus; reduce per-dossier labor hours by 40% vs. baseline."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Launch RegulaFlow Bench — a benchmarking suite scoring dossier completeness against EMA deficiency letter patterns; use it as a sales tool and embed clients in a feedback loop that further trains the model."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Proprietary deficiency-prediction model has seen 200+ full submission cycles; competitors without this corpus cannot replicate accuracy; lock in 3-year SLA contracts with 2 mid-size EU generics manufacturers."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€300K-€600K",
      "capexRatio": "15% capex / 85% opex",
      "note": "Main cost driver is senior regulatory affairs headcount needed to validate AI outputs during the first 18 months before model accuracy justifies reduced oversight."
    },
    "competitors": [
      {
        "name": "Certara",
        "type": "incumbent",
        "geography": "Global",
        "note": "Dominant regulatory science firm, expensive, slow, consultant-heavy"
      },
      {
        "name": "Halloran Consulting",
        "type": "incumbent",
        "geography": "USA/Europe",
        "note": "Mid-market regulatory consulting, traditional model, not AI-augmented"
      },
      {
        "name": "Turing Regulatory Sciences",
        "type": "startup",
        "geography": "USA",
        "note": "Early-stage AI regulatory platform, building software not full-service agency"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 5,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.85
    },
    "ycRfsCorrelation": "YC wants service businesses that deliver client work at software margins using AI. RegulaFlow is a regulatory affairs agency that produces EMA dossiers using AI, handling work that typically requires large teams of regulatory specialists.",
    "tlifeAssetRefs": [
      "elpen",
      "winmedica",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "rf-a1",
        "claim": "EMA centralized procedure dossier prep typically costs €80-200K per submission via traditional CROs",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rf-a2",
        "claim": "EU GMP variation submission volume ~10K+ per year across member states",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rf-a3",
        "claim": "AI-native agency gross margin model: 65-80% vs 30-45% traditional CRO",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16",
        "note": "Hebbia/Harvey/Tropic-type comparables in adjacent domains."
      },
      {
        "id": "rf-a4",
        "claim": "ELPEN regulatory affairs team provides domain expertise for first 5+ submissions",
        "source": "[USER-STATED]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rf-a5",
        "claim": "Veeva Vault RegulatoryOne, Lorenz, ArisGlobal are tier-1 incumbents — all tool-form, not agency-form",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rf-a6",
        "claim": "Folded scope: pharmareg-ai (EOF/EMA dossier templates + variation IP)",
        "source": "[INTERNAL — see catalog-cuts.ts]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "rf-k1",
        "hypothesis": "2 mid-size Greek/Balkan pharma clients will sign €40-100K ACV agency contracts in 12 weeks",
        "experiment": "Direct pitch via ELPEN network + cold outreach to Vianex, Pharmathen, Sopharma, Hemofarm; target signed engagement letters",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "0 signed; <3 pilot conversations advanced past first call",
        "validateSignal": "≥2 signed engagement letters at €40K+"
      },
      {
        "id": "rf-k2",
        "hypothesis": "AI-assisted EMA variation prep achieves ≥50% time savings vs traditional CRO baseline on a real submission",
        "experiment": "Run 1 real ELPEN variation through AI-assist + human review; measure hours vs prior-similar variation handled traditionally",
        "costEur": 8000,
        "durationWeeks": 8,
        "killSignal": "<25% time savings OR EMA rejects sections requiring re-prep",
        "validateSignal": "≥50% time savings AND EMA accepts on first review"
      },
      {
        "id": "rf-k3",
        "hypothesis": "EMA / national regulators accept AI-prepared dossier sections without flagging the AI involvement as a quality concern",
        "experiment": "Engage 1 EMA inspector + 1 EOF reviewer (paid consultancy) for pre-submission review of a sample dossier",
        "costEur": 6000,
        "durationWeeks": 6,
        "killSignal": "Either reviewer flags AI-prepared content as below-standard",
        "validateSignal": "Both reviewers rate content as acceptable; identify specific quality criteria to operationalize"
      }
    ],
    "preMortem": [
      {
        "cause": "EMA/national regulators reject AI-prepared sections without human re-review, killing time-savings model",
        "likelihood": "medium",
        "earlySignal": "Kill-test rf-k3 results in weeks 4-6"
      },
      {
        "cause": "Parexel / IQVIA / Labcorp Drug Development ship AI-assisted variants and compete on brand + scale",
        "likelihood": "medium",
        "earlySignal": "Monitor top-5 CRO product announcements quarterly"
      },
      {
        "cause": "Greek/Balkan pharma clients are too small/slow to pay for the agency model — €40-100K ACV burns through pipeline faster than the team can deliver",
        "likelihood": "medium",
        "earlySignal": "Kill-test rf-k1 conversion rate; sales cycle length"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "AI-native services agencies in adjacent verticals (Hebbia legal, Harvey legal, Tropic procurement) have reached €5-15M ARR in 24-36 months. Regulated pharma services adds 6-12 months of client cycle. €10M ARR = 30-50 clients × €200-300K avg engagement value — feasible given 27 EU member states × 10-30 mid-cap pharma each."
    }
  },
  {
    "id": "maritime-charter-commercial-ai",
    "title": "VoyageDesk",
    "ycCategory": "AI-Native Agencies",
    "ycBatchDate": "Spring 2026",
    "oneLiner": "AI-native chartering and fixture agency that produces voyage estimates, CP drafts, and port cost breakdowns in hours instead of days.",
    "description": "Shipping chartering is still conducted largely via email, broker phone calls, and manually assembled fixture recaps. For small-to-mid fleet operators in Greece and the Eastern Mediterranean, the commercial management of a 5–20 vessel fleet requires either expensive in-house commercial teams or reliance on Piraeus brokers who charge 1.25% commission per fixture. Voyage estimates are assembled in Excel, CP negotiations are done by hand, and post-fixture laytime calculations often drag into disputes — all friction that reduces net freight earnings.\n\nVoyageDesk operates as an AI-augmented commercial management bureau: operators subscribe and receive AI-drafted voyage estimates, fixture summaries, laytime calculations, and port disbursement analysis. The core stack uses LLMs fine-tuned on Bimco standard forms, Worldscale tables, and historical fixture data to produce first-draft CPs and recap letters in under two hours. A lean team of qualified brokers and maritime lawyers review before delivery. The model targets operators who cannot justify a full in-house commercial team but want more control than delegating entirely to a broker.\n\nPiraeus-based traditional brokers have no AI investment and compete on relationship, not speed. Digital freight platforms (Freightos, Shipamax) target cargo matching, not managed commercial services for owners. The Tryfon fleet connection provides a live laboratory and reference account from day one, which is a moat no external startup can replicate.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Piraeus is the world's largest ship management cluster; the density of independent fleet operators needing affordable commercial management is unmatched anywhere outside of Singapore.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "Dubai and Abu Dhabi are emerging ship management hubs with GCC-flagged fleets that have thin commercial support infrastructure."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Croatian, Montenegrin, and Bulgarian operators are small but underserved; regional expansion follows Greek market validation."
      },
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Amsterdam and Hamburg have sophisticated incumbent brokers, but niche dry bulk and tanker operators in Northern Europe may value cost over relationship."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Tryfon fleet provides a pilot client and live fixture data for model training; T-Life's Piraeus network accelerates broker hire and initial client acquisition. Unique unfair advantage no external team has.",
    "tags": [
      "shipping",
      "maritime",
      "chartering",
      "ai-agency",
      "commercial-management",
      "piraeus"
    ],
    "addedDate": "2026-04-01",
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "Baltic Exchange digitized fixture reporting in 2024, making structured real-time freight rate data programmatically accessible for the first time at scale. LLM-based contract parsing can now extract key commercial terms from CP recaps with >95% accuracy, collapsing fixture turnaround from hours to minutes. Post-Red Sea rerouting volatility has made shipowners and charterers acutely aware that human-speed negotiation leaves significant freight arbitrage on the table.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Handle 20 dry bulk spot fixtures end-to-end on the Aegean/Med short-sea routes; build proprietary fixture database with outcome tagging (demurrage, disputes, on-time performance)."
      },
      {
        "timeframe": "Month 6-12",
        "milestone": "Deploy VoyageDesk Rate Oracle — an internal model predicting 7-day freight rates on covered routes with tighter confidence intervals than Baltic assessments; use it to win mandates by showing clients better entry timing."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "Integrate AIS position data and port congestion feeds; launch counterparty credit scoring for charterers using vessel payment history; this data layer is unavailable to traditional brokers."
      },
      {
        "timeframe": "Month 24-36",
        "milestone": "Rate Oracle and counterparty scoring become billable data products sold to shipowners not using VoyageDesk for brokerage, creating a second revenue stream and a network that grows with every fixture regardless of who executes it."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€400K-€700K",
      "capexRatio": "25% capex / 75% opex",
      "note": "Main cost driver is AIS and port data feed licensing plus one experienced commercial shipping operator needed to maintain market credibility during early fixture execution."
    },
    "competitors": [
      {
        "name": "Clarksons",
        "type": "incumbent",
        "geography": "Global",
        "note": "Worlds largest shipbroking firm, human-brokered, zero AI autonomy"
      },
      {
        "name": "Zencargo",
        "type": "startup",
        "geography": "UK/Europe",
        "note": "Digital freight forwarder, cargo-side not dry bulk chartering"
      },
      {
        "name": "Veson Nautical",
        "type": "incumbent",
        "geography": "USA/Global",
        "note": "Commercial vessel management software IMOS, fixture recording not AI chartering"
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 5,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.85
    },
    "ycRfsCorrelation": "YC wants AI-native agencies that scale without proportional headcount. VoyageDesk uses AI agents to handle fixture negotiations, cargo matching, and voyage planning — work done today by chartering desks of 20+ brokers.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "vd-a1",
        "claim": "Global maritime chartering involves $200B+ in fixture value annually",
        "source": "[ESTIMATE — BIMCO / Clarksons data]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vd-a2",
        "claim": "Standard chartering broker commission is 1.25% of fixture value (BIMCO norm)",
        "source": "[UNVERIFIED — BIMCO standard, widely cited]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vd-a3",
        "claim": "Veson Nautical (IMOS/Veslink) is the dominant chartering-software incumbent",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vd-a4",
        "claim": "Tryfon Fleet provides real-time voyage data and live chartering desk as design partner",
        "source": "[USER-STATED — see Pragma/Tryfon Fleet venture]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vd-a5",
        "claim": "Charter party drafts and port-cost estimates take 8-24 hours of broker/operator time per voyage",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "vd-k1",
        "hypothesis": "LLM-drafted CP recap reaches 90%+ accuracy vs human-drafted on 50 historical test cases",
        "experiment": "Fine-tune Llama 3.3 70B on BIMCO clauselib + Tryfon CP corpus; benchmark",
        "costEur": 10000,
        "durationWeeks": 6,
        "killSignal": "<80% accuracy OR human re-edit time >40% of original drafting time",
        "validateSignal": "≥90% accuracy AND <20% re-edit time"
      },
      {
        "id": "vd-k2",
        "hypothesis": "3 mid-size shipowner chartering desks (Tryfon + 2 external) will sign pilot at €50-150K ACV in 10 weeks",
        "experiment": "Pilot pitch + product demo with Tryfon-network shipowners",
        "costEur": 5000,
        "durationWeeks": 10,
        "killSignal": "Only Tryfon signs (1/3)",
        "validateSignal": "≥2 external + Tryfon = 3 signed pilots"
      },
      {
        "id": "vd-k3",
        "hypothesis": "Rate Oracle data product (anonymized voyage-rate benchmark) can be sold separately to charterers at €30-80K ACV",
        "experiment": "Build MVP; pitch to 5 charterer-side prospects; measure willingness to subscribe",
        "costEur": 4000,
        "durationWeeks": 8,
        "killSignal": "0/5 willing to subscribe",
        "validateSignal": "≥2/5 sign data-product contracts"
      }
    ],
    "preMortem": [
      {
        "cause": "Veson Nautical ships AI assistance in IMOS within 18 months",
        "likelihood": "medium",
        "earlySignal": "Veson product roadmap + acquisitions tracking"
      },
      {
        "cause": "Tryfon-only data isn't sufficient training signal — model quality plateaus",
        "likelihood": "medium",
        "earlySignal": "Kill-test vd-k1 results"
      },
      {
        "cause": "Chartering desks won't pay subscription because they capture 1.25% broker commission and the workflow savings don't translate to compensation",
        "likelihood": "high",
        "earlySignal": "Kill-test vd-k2 conversion rate; ask explicit willingness-to-pay vs commission"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.35,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.35,
      "basisOfEstimate": "Maritime SaaS rarely reaches €10M ARR (Veson is the exception at ~$50M+). Tryfon fleet data is a real moat — but the buyer (chartering desk) extracts margin from the manual workflow it would replace, which is the Logos-pattern failure mode. Rate Oracle data product is the more defensible second revenue line."
    }
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "Scale AI, Datology AI, HuggingFace are horizontal training-data platform incumbents",
        "source": "[UNVERIFIED]",
        "status": "unverified",
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
    }
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
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
        "claim": "BIMCO clauselib and standard CP forms (NYPE, Shelltime, BPVOY) are the foundational maritime contract corpus",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "po-a2",
        "claim": "Veson, Danaos, AMOS, ShipManager are tier-1 maritime SaaS targets for embedded inference",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
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
    }
  },
  {
    "id": "pharma-skills-intelligence",
    "title": "Aletheia GxP",
    "ycCategory": "AI for Regulated Industries / Vertical SaaS",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Continuous, AI-driven competency assurance for pharma GMP manufacturing — the audit-grade skills intelligence layer above Veeva, MasterControl and ComplianceWire.",
    "description": "EU GMP Annex 1 (operative August 2023) moved the regulatory bar from 'trained' to 'qualified, assessed initially and on an ongoing basis,' with mandatory annual gowning requalification, bi-annual aseptic process simulations per shift, and event-driven disqualification on failed media fills or deviation involvement. A typical 200-operator sterile site now generates 16,000-30,000 trackable competency artifacts per year, all maintained today in spreadsheets, paper files, and disconnected LMS systems. A single FDA Form 483 citing 21 CFR 211.25 (personnel qualifications) costs €0.5-2M to remediate; a Warning Letter €5-25M; a consent decree (Ranbaxy 2013, Genzyme 2010) €100-750M+.\n\nAletheia GxP is an additive intelligence layer — not an LMS replacement — that ingests training records from existing GxP systems (Veeva Vault Training, MasterControl, ComplianceWire, SAP SuccessFactors), maps them to a role-based GMP competency graph, monitors work artifacts (deviations, batch records, eLogbook entries, equipment logs, QA observations) for competency drift, and produces audit-grade continuous competency dashboards. The differentiated UX is the Inspector Mode: a read-only, time-bounded, auditor-credentialed view that any FDA, EMA, EOF, MHRA or PMDA inspector can access during an inspection to verify any operator's competency posture in real time — the artifact a QP shows the inspector at 09:30 on Day 1.\n\nThe wedge sits in white space between document-based GxP LMS (Veeva, MasterControl, ComplianceWire — none model competency as f(observed work outputs, error rates, deviation involvement)) and horizontal AI skills platforms (Workera, Eightfold — none have GAMP5/Part 11/EU AI Act validation). Architecture rule: every AI inference is decision-support, all task-allocation and disqualification decisions remain human-confirmed, classifying the system out of EU AI Act Annex III(4)(b) high-risk under Art. 6(3) — saves €1-3M and 6-12 months vs. high-risk conformity assessment. Deployment architecture: single-tenant SaaS in customer-elected EU VPC (AWS Frankfurt / Azure Amsterdam / GCP Belgium) per customer data-residency preference — same regulatory posture as an on-prem appliance, without capex friction or hardware inventory. Three-tier pricing: T1 Core €18 PEPM + €30K/site, T2 Intelligence €26 PEPM + €40K/site, T3 Regulated €32 PEPM + €50K/site (with Inspector Mode and AI Act compliance pack). Reference 500-FTE customer: ~€150K ACV.",
    "primaryMarket": "greece-cyprus",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "T-Life owns the design partner. ELPEN (largest independent Greek pharma manufacturer), WinMedica (~€300M revenue commercial arm in BC Partners process), and the Tripoli HPAPI facility (€65M+ investment, EOF-inspected, 416-equipment training matrix) provide a captive first customer with live data, marquee EU reference, and €400K+ committed ARR floor at launch. Greek + Cypriot mid-size generics (Vianex, Pharmathen, DEMO, Lavipharm, Uni-Pharma, Medochemie, Remedica) are 100-800 mfg FTE, family-owned, paper-or-Excel competency systems, and inspectable by EOF/EMA — the highest-pain, lowest-cycle-time beachhead in Europe.",
    "expansionMarkets": [
      {
        "market": "balkans",
        "fit": "green",
        "note": "Sopharma, Hemofarm, Galenika, Alkaloid, Belupo, Antibiotice, Zentiva-RO — 12-18 qualifying logos with severe Annex 1 exposure and weak incumbent penetration. Beachhead extension Months 6-18."
      },
      {
        "market": "europe",
        "fit": "green",
        "note": "Türkiye must be in the beachhead (Abdi Ibrahim, Bilim, Nobel, Sanovel, Deva, Eczacıbaşı — 12-18 qualifying logos); without it, qualifying-target count drops below Series A threshold. Italy (35-45 qualifying mid-size) and Iberia open Year 2 once GR/Balkan reference logos close."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC pharma manufacturing (Hikma, Julphar, SPIMACO, Saja) is GCC-DR / FDA / EMA inspected with similar pain; Elnova Dubai presence provides bridgehead but deal cycles longer. Year 2-3 expansion."
      }
    ],
    "stage": "evaluating",
    "tlifeAngle": "Only T-Life Capital can run this play. The wedge requires owning a real pharma manufacturing operation to design the product against. ELPEN/Tripoli provide live regulatory exposure (EOF inspection completed with 10 observations, GAMP5 validation already built), 416-equipment training matrix as anchor dataset, and a family-pharma network across Greece/Cyprus/Balkans that no horizontal competitor can replicate. Tripoli CDMO NewCo capture: 15-30% tech-transfer cycle compression worth 1-2pp EBITDA = €3-10M EV at CDMO multiples.",
    "tags": [
      "pharma",
      "gmp",
      "skills-intelligence",
      "ai-native",
      "vertical-saas",
      "annex-1",
      "part-11",
      "gamp5",
      "eu-ai-act",
      "regulated-industries",
      "tripoli",
      "elpen"
    ],
    "addedDate": "2026-05-03",
    "notes": "Phase 0 underwritten: 16-week, €150K budget, modeled on PawDesk template. Go criteria at Week 16: (1) 1 external paying pilot signed €20-50K, (2) Tripoli operational with live data, (3) 3+ pipeline opportunities at term-sheet stage, (4) single-tenant deploy time <6 weeks demonstrable, (5) first-pass GAMP5 categorization completed (Cat 4 platform, Cat 5 AI engine). Top three monitoring signals: Veeva R&D Day for Vault Skills/Vault Competency announcements; HealthStream pharma extension (~30% probability); /skills/ /competencies/ in Vault REST API release notes. Defensibility window vs Veeva: 36-48 months.\n\nValidation log (2026-05-03): Corrected MasterControl ownership (Sixth Street Growth Dec 2022 $1.3B, NOT Hellman & Friedman 2020). Corrected Workera Series B (Mar 2023 led by Jump Capital, NOT Oct 2022 Owl Ventures). Removed Aizon-Insight Partners precedent claim (Aizon investors are Atlantic Bridge / Honeywell Ventures / NewVale; Insight is not on cap table). Sparta acquisition announced 22 Dec 2020 (not Jan 2021), seller New Mountain Capital, $1.3B confirmed. FDA 2023 publication is a CDER discussion paper, not draft guidance (formal AI draft guidance came 2025). Aenova ownership now Kühne Holding (family vehicle), not BC Partners. Annex 1 section numbers (§7.4-7.7, §7.13-7.14, §9.33-9.42) directionally consistent but exact citations require cross-check against EUR-Lex PDF before any external memo. ICH Q10 §2.4 (Resource Management) directionally correct but exact wording unverified. EdCast 2022 acquisition price ($380M) was undisclosed — figure removed from competitor entry trail.\n\nDecision log (2026-05-16): The companion on-device appliance concept (VaultEdge / on-device-gxp-inference) was red-team-reviewed and returned PASS. Conclusion: ship Aletheia GxP exclusively as single-tenant SaaS in customer-elected VPC. The appliance form-factor buys exactly one incremental thing — physical air-gap — but Annex 1 / Part 11 / EU AI Act Art. 6(3) do not require air-gap, they require validated software + audit trail + data-residency control, all of which single-tenant cloud satisfies. €250-400K of avoided hardware working capital redeploys into 2 more validation engineers and a USDM co-sell. VaultEdge entry decommissioned from catalog.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.",
    "whyNow": "EU GMP Annex 1 (revised 22 Aug 2022, operative 25 Aug 2023; lyophilizer §8.123 operative Aug 2024) is no longer compatible with read-and-understood LMS as primary system of competency record — §7.4-7.7 mandate ongoing competency assessment with annual gowning requalification, §9.33-9.42 mandate bi-annual APS per shift, §7.13-7.14 codify event-driven disqualification. The EU AI Act (Reg. 2024/1689) Annex III(4)(b) general-application date is 2 Aug 2026, creating a 12-18 month architectural window to self-classify out under Art. 6(3) before deployer obligations crystallize. EMA Reflection Paper on AI in the Medicinal Product Lifecycle (Sept 2024), FDA CDER discussion paper on AI in Drug Manufacturing (Feb/May 2023; formal AI draft guidance followed 2025), and the pending EU Annex 11 revision (final 2025-26) all legitimize AI-derived competency evidence if traceable, explainable, and validated. Eightfold's transformer-embedding architecture is an Annex 11 algorithm-transparency liability; horizontal AI players need $5-10M and 18-24 months to ship GAMP5/Part 11 compliance.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-4 (Phase 0)",
        "milestone": "Regulatory deep-dive locked; 50 EU mid-size + 30 CDMO + 40 beachhead-fit target list finalized; 5 LOI conversations initiated with Greek/Balkan QDs; MVP ingests CSV + Veeva Vault Training sandbox; competency graph for sterile manufacturing operator (Annex 1 scope); Inspector Mode v1; 2 deviation-type AI scenarios; Tripoli HPAPI deployed with 416-equipment matrix; first-pass GAMP5 categorization completed; AI Act Art. 6(3) self-classification documented; 1 external paying pilot signed €20-50K."
      },
      {
        "timeframe": "Month 5-12 (Seed €1.5-3M)",
        "milestone": "5 design partners live (1 ELPEN/Tripoli + 4 external); €0.4-0.8M ARR; Tier 2 connectors (MasterControl, ComplianceWire, SuccessFactors) shipped; USDM/PharmaLex validation partner attestation; Lightcast taxonomy licensed; Annex 1 + OEB containment + APS competencies covered; first sponsor-audit-pass-through reference. Likely seed leads: Marathon VC, VentureFriends, Speedinvest Health, Heal Capital."
      },
      {
        "timeframe": "Month 12-24",
        "milestone": "8-15 logos at €100K avg ACV = €0.8-1.5M ARR; Türkiye (Abdi Ibrahim, Sanovel, Bilim) entered; 12-month proprietary GMP work-artifact corpus creates competency-drift signal moat — incumbents cannot replicate without back-filling 12 months of deviation/batch-record telemetry. Tier 3 connectors (TrackWise Digital, Werum PAS-X, Körber, Tulip) shipped."
      },
      {
        "timeframe": "Month 24-36 (Series A €8-12M @ €40-60M post)",
        "milestone": "30 logos, €4.5M ARR base case, 76% GM, 112% NRR, 2.1× burn multiple. Italy + Iberia entered. Product extends to medical device (FDA 21 CFR Part 820 / ISO 13485) and clinical trials competency (GCP). Roll-up optionality: ISOTrain modernization, GMP-Pro/Peither content acquisition. Likely Series A leads: Insight Partners (ValGenesis/Benchling-style pharma vertical SaaS thesis), Index, Atomico, EQT Growth."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€100-150K Phase 0 + €1.5-3M Seed",
      "capexRatio": "10% capex / 90% opex",
      "note": "Phase 0 underwritten by T-Life Capital with ELPEN/Tripoli design-partner labor in-kind. €60K founder draw, €40K AI/data engineer, €16K regulatory advisor, €10K USDM/PharmaLex scoping, €8K cloud, €10K legal/IP/ISO 27001, €6K travel. Zero buffer. Seed sized for 18-month runway to PMF signal."
    },
    "competitors": [
      {
        "name": "Veeva Vault Training",
        "type": "incumbent",
        "geography": "Global / NYSE: VEEV",
        "note": "Highest strategic risk. €60-120/user/yr, 10-15% EU pharma share growing fast on QualityDocs coattails. Veeva AI / Direct AI announced GA late 2025-26. Defensibility window 36-48 months; signals to monitor: R&D Day keynotes, /skills/ /competencies/ in Vault REST API."
      },
      {
        "name": "MasterControl Training Excellence",
        "type": "incumbent",
        "geography": "Global / Sixth Street Growth-backed (Dec 2022 $150M Series A @ $1.3B)",
        "note": "€80-150/user/yr, 12-18% EU share. MasterControl AI doc authoring shipped; manufacturing AI announced. Vulnerability: closed ecosystem, weaker MES integration."
      },
      {
        "name": "ComplianceWire",
        "type": "incumbent",
        "geography": "Global / UL Solutions (NYSE: ULS)",
        "note": "Dominant in US pharma, $35-70/learner/yr + content. Rules-based adaptive only, no genuine AI competency model. Lowest vulnerability — strongest GxP validation reputation."
      },
      {
        "name": "Workera",
        "type": "startup",
        "geography": "US / Andrew Ng, AI Fund",
        "note": "~$48M total raised; Series B Mar 2023 $23.5M led by Jump Capital (Owl Ventures participated). Horizontal AI skills assessment with no pharma logos. Cannot enter without GAMP5/Part 11/AI Act build ($5-10M, 18-24 months). 20-25% probability of GMP entry within 24mo."
      },
      {
        "name": "Eightfold AI",
        "type": "startup",
        "geography": "US / SoftBank",
        "note": "$410M raised, ~$1.2-1.8B. Transformer-embedding architecture is itself an Annex 11 algorithm-transparency liability — structural barrier to GMP entry."
      },
      {
        "name": "ValGenesis VLMS",
        "type": "incumbent",
        "geography": "Global / PE (Vitruvian)",
        "note": "Workforce 360 module is closest conceptual adjacency. 25-35% EU validation share, <10% Workforce share. Highest probability of feature-overlap collision."
      },
      {
        "name": "TrackWise Digital (Sparta / Honeywell)",
        "type": "incumbent",
        "geography": "Global / Honeywell",
        "note": "Honeywell acquired Sparta Systems from New Mountain Capital — announced 22 Dec 2020, closed Q1 2021, $1.3B all-cash. Highest fusion risk if Forge AI is wired into Experion + TrackWise + Sparta — DCS/MES/QMS adjacency unique to Honeywell."
      },
      {
        "name": "HealthStream",
        "type": "adjacent",
        "geography": "US / NASDAQ: HSTM",
        "note": "~$290M ARR healthcare competency platform. ~30% probability of pharma extension — closest cultural fit, public-company P&L capacity."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 5,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.95
    },
    "ycRfsCorrelation": "YC wants AI for regulated industries and vertical SaaS that incumbents cannot retrofit. Aletheia GxP is the AI-native competency intelligence layer for pharma GMP — Annex 1 (2023) made document-based LMS structurally insufficient, and EU AI Act compliance creates a 36-48 month moat against horizontal AI players who lack GAMP5/Part 11 validation.",
    "tlifeAssetRefs": [
      "elpen",
      "winmedica",
      "tripoli-hpapi",
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "al-a1",
        "claim": "EU GMP Annex 1 revised 22 Aug 2022, operative 25 Aug 2023; mandates ongoing competency assessment and event-driven disqualification",
        "source": "https://health.ec.europa.eu/document/download/e05af55b-38e9-42bf-8495-194bbf0b9262_en",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a2",
        "claim": "EU AI Act = Reg. 2024/1689; Annex III(4)(b) classifies workforce-decision AI as high-risk; general application 2 Aug 2026",
        "source": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a3",
        "claim": "EU AI Act Art. 6(3) provides self-classification exemption when AI is decision-support and humans confirm regulated actions",
        "source": "https://artificialintelligenceact.eu/article/6/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a4",
        "claim": "Veeva Vault is true multi-tenant SaaS with no on-premises variant (validates single-tenant-VPC architecture as differentiation)",
        "source": "https://intuitionlabs.ai/articles/veeva-vault-cloud-content-management-platform-for-life-sciences",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a5",
        "claim": "21 CFR Part 11 mandates audit-trail + e-signatures for GMP records",
        "source": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a6",
        "claim": "Tripoli HPAPI facility provides 416-equipment training matrix as anchor dataset for design-partner phase",
        "source": "[USER-STATED — see tlifeAssets.ts#tripoli-hpapi]",
        "status": "user-stated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a7",
        "claim": "Veeva Vault Training, MasterControl, ComplianceWire price €60-150/user/yr in EU mid-cap pharma",
        "source": "[ESTIMATE — based on prior validation work]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "al-a8",
        "claim": "FDA Jan 2025 draft guidance on AI for regulatory decision-making validates AI-derived evidence on validated software",
        "source": "https://www.federalregister.gov/documents/2025/01/07/2024-31542/considerations-for-the-use-of-artificial-intelligence-to-support-regulatory-decision-making-for-drug",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "al-k1",
        "hypothesis": "Tripoli HPAPI design-partner deployment goes live with ≥85% accuracy on Annex 1 §7.4-7.7 competency assessment for sterile manufacturing operators",
        "experiment": "Deploy MVP at Tripoli; benchmark AI output vs QA-reviewer ground truth on 30+ operator competency records",
        "costEur": 20000,
        "durationWeeks": 10,
        "killSignal": "<70% accuracy OR QA reviewer rejects ≥30% of outputs",
        "validateSignal": "≥85% accuracy AND QA reviewer rates outputs as 'audit-defensible with minor edits'"
      },
      {
        "id": "al-k2",
        "hypothesis": "1 external pharma manufacturer signs paid pilot at €100-250K ACV in 12 weeks (Vianex / Pharmathen / DEMO / Lavipharm)",
        "experiment": "Direct pitch via T-Life network + cold outreach to 8 Greek/Balkan mid-cap pharma QA directors",
        "costEur": 5000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past first call",
        "validateSignal": "≥1 signed pilot AND 2+ advanced to term-sheet stage"
      },
      {
        "id": "al-k3",
        "hypothesis": "AI Act Art. 6(3) self-classification holds under regulatory pre-review — no high-risk classification triggered",
        "experiment": "Engage 1 EU AI Act consultant + 1 EMA-adjacent regulatory reviewer; submit architecture documentation for pre-review",
        "costEur": 10000,
        "durationWeeks": 8,
        "killSignal": "Reviewer recommends high-risk classification (triggering €1-3M conformity assessment burden)",
        "validateSignal": "Both reviewers confirm Art. 6(3) self-classification valid"
      }
    ],
    "preMortem": [
      {
        "cause": "Veeva ships a Vault Skills / Vault Competency module within 18 months — incumbent's installed-base wins on procurement vs greenfield",
        "likelihood": "medium",
        "earlySignal": "Track Veeva R&D Day (Sept) keynotes; LinkedIn job postings for Vault Skills PMs; /skills/ /competencies/ in Vault REST API"
      },
      {
        "cause": "AI Act Art. 6(3) self-classification rejected at first regulator review — forces high-risk classification with €1-3M conformity-assessment burden and 6-12 month delay",
        "likelihood": "medium",
        "earlySignal": "Kill-test al-k3 results"
      },
      {
        "cause": "HealthStream extends into pharma — public-company P&L capacity + competency-software DNA make it the closest cultural fit",
        "likelihood": "low",
        "earlySignal": "Monitor HealthStream pharma announcements; track their NYSE: HSTM filings for vertical-expansion mentions"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.25,
      "totalFailureBy36mo": 0.25,
      "basisOfEstimate": "Strongest unit-economic profile in the catalog: liability-transfer product, captive Tripoli design partner, €100-250K ACV at audit-defensible architecture. Veeva ARR multiple (~10-15× revenue at exit) implies €40-60M EV at €4M ARR. The 25% / 45% / 25% bands reflect strong T-Life advantage + Annex 1 mandate-pull + clean unit economics. Bear case: Veeva ships competing module before Y2."
    },
    "redTeamFindings": [
      {
        "date": "2026-05-16",
        "verdict": "proceed",
        "dealKiller": "(no successful kill identified) The companion VaultEdge on-device appliance thesis was killed — Aletheia GxP as single-tenant SaaS in customer-elected EU VPC delivers the same regulatory posture (Part 11 audit, EU residency, no multi-tenant blast radius) without €100-150K capex friction.",
        "patternMatches": [
          "Veeva Vault as single-tenant cloud at customer-elected region (Frankfurt, Amsterdam) is the proven architecture",
          "Aizon (Barcelona) pivoted from on-prem appliance to cloud SaaS specifically because pharma capex cycles killed hardware sales"
        ],
        "alternativeThesis": "(none — this is the validated thesis. The VaultEdge alt-thesis got folded back into this entry — see description architecture note + decision log)"
      }
    ]
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
    ]
  }
];
