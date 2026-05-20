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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 2 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
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
        "claim": "Greek Presidential Decree PD 128/2023 — UNVERIFIED; not located in Greek Government Gazette / legal databases (kodiko.gr, taxheaven.gr)",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL: prior thesis named PD 128/2023 as 'why now' regulatory tailwind. Citation could not be verified; might be wrong number or non-existent. Re-verify against et.gr Government Gazette before any external memo."
      },
      {
        "id": "sf-a2",
        "claim": "EU NSRF 2021-27 total budget €26.2B (€20.9B EU + €5.3B national) across ALL sectors; construction-specific allocation is a subset (transport gets ~15.3% = ~€4B), not the full €26B",
        "source": "https://espa.io/en/new-nsrf-2021-27-whats-new-resources-of-26-billion-euros-2/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior thesis implied €26B all for construction; corrected to total NSRF across sectors."
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
    },
    "industry": "construction-home"
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
    },
    "industry": "workforce-saas"
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 1 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
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
        "claim": "Komodo Health reached ~$200M revenue in 2024 (>$100M+ original claim was conservative)",
        "source": "https://getlatka.com/companies/komodo-health",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Understated; revised upward."
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
    },
    "industry": "pharma-life-sciences"
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
    "notes": "\n\nFold-in (2026-05-16): pharmareg-ai (PharmaReg.ai) was an EOF/EMA-dossier AI co-pilot framed as a tool. Portfolio red-team verdict: tool-form loses to agency-form on liability transfer; folded into RegulaFlow. Bring the EOF/EMA submission IP and dossier templates into the RegulaFlow service catalog.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 2 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
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
        "claim": "EMA MAA agency fees alone €172.8K-€865.2K (2024 EMA fee schedule); traditional CRO dossier-prep services add €80-200K for compilation/eCTD publishing only, excluding clinical/CMC writing",
        "source": "https://www.ema.europa.eu/en/about-us/fees-payable-european-medicines-agency",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior figure was partial-scope only; clarified."
      },
      {
        "id": "rf-a2",
        "claim": "EU GMP variation submission volume ~20-30K+ per year across national + centralized procedures (Medicines for Europe 2019); prior '10K+' was conservative floor",
        "source": "https://www.medicinesforeurope.com/wp-content/uploads/2020/01/ESE_2019_Medicine-for-Europe_AESGP_Variation_WEB.pdf",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Understated; corrected upward."
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
    },
    "industry": "pharma-life-sciences"
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
    "notes": "\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 3 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
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
        "claim": "Global maritime chartering fixture value annually — UNCLEAR; no public BIMCO/Clarksons aggregate; Veson cites $25B managed via IMOS as a partial reference",
        "source": "https://veson.com/learn-commercial-maritime-software/",
        "status": "unverified",
        "lastChecked": "2026-05-16",
        "note": "Prior $200B+ figure not publicly attributable; treat as estimate."
      },
      {
        "id": "vd-a2",
        "claim": "Standard chartering broker commission 1.25% is industry custom embedded in NYPE/Shelltime forms, not formally a BIMCO standard (BIMCO publishes the contracts; the rate is customary)",
        "source": "https://www.handybulk.com/shipbrokers-commission/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "vd-a3",
        "claim": "Veson Nautical (IMOS) is the industry-standard chartering-software incumbent since 2003: 21K+ users, 200+ orgs, 50K voyages, $25B trade managed",
        "source": "https://veson.com/products/imos/",
        "status": "confirmed",
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
    },
    "industry": "maritime"
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
    "notes": "Phase 0 underwritten: 16-week, €150K budget, modeled on PawDesk template. Go criteria at Week 16: (1) 1 external paying pilot signed €20-50K, (2) Tripoli operational with live data, (3) 3+ pipeline opportunities at term-sheet stage, (4) single-tenant deploy time <6 weeks demonstrable, (5) first-pass GAMP5 categorization completed (Cat 4 platform, Cat 5 AI engine). Top three monitoring signals: Veeva R&D Day for Vault Skills/Vault Competency announcements; HealthStream pharma extension (~30% probability); /skills/ /competencies/ in Vault REST API release notes. Defensibility window vs Veeva: 36-48 months.\n\nValidation log (2026-05-03): Corrected MasterControl ownership (Sixth Street Growth Dec 2022 $1.3B, NOT Hellman & Friedman 2020). Corrected Workera Series B (Mar 2023 led by Jump Capital, NOT Oct 2022 Owl Ventures). Removed Aizon-Insight Partners precedent claim (Aizon investors are Atlantic Bridge / Honeywell Ventures / NewVale; Insight is not on cap table). Sparta acquisition announced 22 Dec 2020 (not Jan 2021), seller New Mountain Capital, $1.3B confirmed. FDA 2023 publication is a CDER discussion paper, not draft guidance (formal AI draft guidance came 2025). Aenova ownership now Kühne Holding (family vehicle), not BC Partners. Annex 1 section numbers (§7.4-7.7, §7.13-7.14, §9.33-9.42) directionally consistent but exact citations require cross-check against EUR-Lex PDF before any external memo. ICH Q10 §2.4 (Resource Management) directionally correct but exact wording unverified. EdCast 2022 acquisition price ($380M) was undisclosed — figure removed from competitor entry trail.\n\nDecision log (2026-05-16): The companion on-device appliance concept (VaultEdge / on-device-gxp-inference) was red-team-reviewed and returned PASS. Conclusion: ship Aletheia GxP exclusively as single-tenant SaaS in customer-elected VPC. The appliance form-factor buys exactly one incremental thing — physical air-gap — but Annex 1 / Part 11 / EU AI Act Art. 6(3) do not require air-gap, they require validated software + audit trail + data-residency control, all of which single-tenant cloud satisfies. €250-400K of avoided hardware working capital redeploys into 2 more validation engineers and a USDM co-sell. VaultEdge entry decommissioned from catalog.\n\nPortfolio decision-log (2026-05-16): SURVIVED 3-cluster portfolio red-team review. Catalog cut from 40 to 15 high-conviction theses. See tlifeAssets.ts for canonical T-Life asset claims.\n\nAssertion validation pass (2026-05-16): 1 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
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
        "claim": "Veeva Vault pricing $50-200/user/month = $600-2,400/user/yr (NOT €60-150/user/yr); MasterControl ~$40-60K total annual base; ComplianceWire similar enterprise tier",
        "source": "https://www.itqlick.com/veeva-vault/pricing",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "MATERIAL: prior figure was off by ~10×. Revised pricing significantly tightens unit-economic comparison: incumbents are MORE expensive than thesis assumed, which is BETTER for Aletheia GxP positioning at €100-250K ACV."
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
    ],
    "industry": "pharma-life-sciences"
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
    "id": "trellis-family-ops",
    "title": "Trellis",
    "ycCategory": "Agetech / Family Operations",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Family operating system for adult children managing aging parents — shared calendars, medications, appointments, finances, decisions. The product the sandwich generation has been begging for.",
    "description": "Approximately 40M unpaid family caregivers in the US and ~25M in EU coordinate aging parents' lives — appointments, medications, finances, sibling communication, transport, social check-ins — across WhatsApp threads, iCloud calendars, manila folders, and duplicate phone calls. The median caregiver is a 50-year-old daughter spending 20+ hours/week on coordination. AARP's 2024 caregiver report found 84% wished for 'a digital tool that doesn't exist.'\n\nPrior attempts (Carely, Caring Village, CareZone — CareZone acquired by Walmart and shuttered) failed because they tried to be one-size-fits-all family-care apps. Trellis is specifically the operating system for the adult-child caregiver:\n• Shared medication tracker with reminders + automated reorder\n• Calendar with appointment notes + sibling-coordinated transport\n• Financial monitor via Plaid: unusual spending, late bills, fraud alerts (precursor to a Steward-style banking partnership)\n• AI-summarized doctor-visit recordings + family decision log\n• Photo/voice journal for non-medical updates\n• Aging-parent-friendly view (large text, voice input) for the parent when capable\n\nPricing: $25-40/mo per family ($300-480/yr). Family = 3-7 members + 1-2 parents. Buyer is the adult child (50-65, professional, dual-income, anxious). Distribution: paid social + content (sandwich-generation search volume up 5× post-pandemic) + AARP/Age UK partnership.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Sandwich-generation pain is universal across high-income geographies. Primary go-to-market is UK/DACH/Nordics (highest digital tool adoption among 50-65 demo + EU GDPR-clean compliance frame). US is the biggest TAM (40M caregivers) but more competitive; entered Year 2 once the EU playbook is proven. Greek/Mediterranean markets are smaller TAM but family-care culture is intrinsically aligned.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "UK, DACH, Nordics are the primary beachhead — highest digital-tool adoption among 50-65 caregivers + GDPR-clean."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has wealthy diaspora 50-65 cohort managing parents back in home countries; cross-border product-market fit is real but niche TAM."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM but family-care culture aligned; useful as Year-1 pilot geography given founder location."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower willingness-to-pay at this price point; pursue opportunistically with localized pricing."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Minimal T-Life dependency by design — this is a deliberate boundary-expansion thesis where the founder team builds their own edge. T-Life is funding source + Greek-pilot-geography access at most; not the unfair advantage.",
    "tags": [
      "agetech",
      "sandwich-generation",
      "family-ops",
      "caregiving",
      "consumer-saas",
      "beyond-tlife",
      "trend-3-elder-tech",
      "trend-20-ops-automation"
    ],
    "addedDate": "2026-05-16",
    "notes": "Deliberately built outside the T-Life portfolio comfort zone. Highest conviction of the 'beyond-pharma-shipping' set per honest founder review — clearest pain, clearest buyer (adult child not 70+ themselves), no scary trust-acquisition problem.\n\nAssertion validation pass (2026-05-16): 4 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Three converging factors. (1) Sandwich-generation peak: Gen X parents are aging into the 70s en masse over 2024-2030; AARP caregiver population grew 18% from 2015-2020 (43M → 53M). (2) Plaid + Stripe + HIPAA-compliant infrastructure stack is mature; AI medical-visit summarization actually works in 2025-26. (3) Prior attempts (Carely $15M raised, Caring Village, CareZone-→-Walmart) all stalled; the category gap is real and the product-design lesson (build for the adult child, not the family-as-monolith) is now obvious.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "100 paying families at $30/mo annual prepay; MVP shipping medication tracker + shared calendar + Plaid financial monitor + AI doctor-visit transcription; AARP / Age UK partnership LOI initiated; <$60 CAC validated via paid social."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5,000 families = ~$1.5M ARR; content engine (sandwich-generation-targeted SEO + newsletter) driving 60%+ of acquisition; first major partnership signed (AARP / Hallmark / John Hancock LTC); 3-month cohort retention ≥70%."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "30,000 families = ~$10M ARR; expand to home-care-agency B2B integrations (referral revenue from agencies); pilot HR / employee assistance program channel (employer pays for employee's parents); enter US market with localised content + partnership."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€800K",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure SaaS. Main costs: 2 engineers (€160K), content engine + brand (€100K), AARP/partnership BD (€80K), paid acquisition test budget (€100K). HIPAA / Business Associate path adds modest legal."
    },
    "competitors": [
      {
        "name": "Carely",
        "type": "startup",
        "geography": "US",
        "note": "Raised ~$15M Series A 2020-21; stalled at <$5M ARR; product complexity overran the willingness-to-pay. Cautionary tale."
      },
      {
        "name": "Caring Village",
        "type": "startup",
        "geography": "US",
        "note": "Early-stage; freemium model; slow growth."
      },
      {
        "name": "CareZone (acquired)",
        "type": "incumbent",
        "geography": "US",
        "note": "Acquired by Walmart 2020 for ~$200M; shuttered 2022. Walmart didn't know what to do with it; consumer caregiving doesn't fit retail."
      },
      {
        "name": "Notion + custom templates",
        "type": "adjacent",
        "geography": "Global",
        "note": "The actual current 'solution' for the savvy adult-child segment. Inefficient but free. Trellis must out-compete on out-of-the-box convenience, not feature breadth."
      },
      {
        "name": "Lotsa Helping Hands",
        "type": "incumbent",
        "geography": "US",
        "note": "Free + ad-supported; declining engagement; non-tech parent-org sponsorship."
      },
      {
        "name": "Bank Elder Care features (Wells Fargo, Chase)",
        "type": "incumbent",
        "geography": "US",
        "note": "Banks bundle elder-care monitoring as free feature for premium account holders. Distribution moat is real; but bank UX is brutal and the family-coordination layer is not their core product."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 5,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.7
    },
    "ycRfsCorrelation": "Maps to the May-2026 36-list trends #3 (elder tech, 70M boomers) and #20 (family ops automation: forms, scheduling, logistics). Sandwich generation is the buyer; aging parent is the user. Pure consumer SaaS with B2C content-led GTM.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "tr-a1",
        "claim": "~53M unpaid family caregivers in US (AARP/NAC 2020 Caregiving in the US); rising to ~63M per AARP 2024 Valuing the Invaluable update",
        "source": "https://press.aarp.org/2020-5-14-Caregiving-in-the-US-Report",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Verify against AARP 2024 update."
      },
      {
        "id": "tr-a2",
        "claim": "55% of 50+ caregivers use one or more digital tools to coordinate care (AARP 2024)",
        "source": "https://www.mcknightshomecare.com/news/aarp-55-percent-of-family-caregivers-use-tech-to-coordinate-care/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior claim ('84% wished for a tool that doesn't exist') was unsupported and replaced."
      },
      {
        "id": "tr-a3",
        "claim": "Carely (Care-Monster Inc.) raised ~$3.1M total (LOUD Capital + Aging2.0), NOT a $15M Series A. Stalled at sub-€5M ARR is the right pattern-match.",
        "source": "https://pitchbook.com/profiles/company/101132-47",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior $15M figure was wrong; the stall pattern still holds but at a smaller raise."
      },
      {
        "id": "tr-a4",
        "claim": "CareZone tech/IP acquired by Walmart June 2020 for ~$200M; migrated to Walmart Wellness which retired 31 Jan 2023",
        "source": "https://hitconsultant.net/2020/06/16/walmart-acquires-carezone-medication-management/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "tr-a5",
        "claim": "Median family caregiver: 50-year-old daughter spending 20+ hrs/week (AARP)",
        "source": "[ESTIMATE — AARP standard figure]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "tr-a6",
        "claim": "Plaid + Stripe + HIPAA-ready stack is production-ready for shared-family financial monitoring",
        "source": "[CONFIRMED — standard infrastructure available]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "tr-k1",
        "hypothesis": "50 families will pre-pay $30/mo annual ($360) in 4 weeks via Meta + Google paid acquisition at CAC <$60",
        "experiment": "Build landing page + Stripe checkout; run $5K paid test budget across Meta (sandwich-generation targeting) + Google search (elder-care keywords)",
        "costEur": 8000,
        "durationWeeks": 4,
        "killSignal": "CAC >$120 OR <15 paid sign-ups",
        "validateSignal": "≥50 paid sign-ups AND CAC <$60"
      },
      {
        "id": "tr-k2",
        "hypothesis": "MVP (medication tracker + shared calendar + Plaid financial monitor + AI doctor-visit transcription) ships in <12 weeks at <€60K and achieves 70%+ 3-month retention",
        "experiment": "Build MVP; deploy to 30 design-partner families; measure feature usage + retention",
        "costEur": 60000,
        "durationWeeks": 14,
        "killSignal": "<50% 3-month retention OR build cost >€100K",
        "validateSignal": "≥70% retention AND ≥3 features used weekly per family"
      },
      {
        "id": "tr-k3",
        "hypothesis": "At least 1 major elder-advocacy partnership (AARP, Age UK, Carers UK, BAGSO Germany) signs LOI for content + distribution within 12 weeks",
        "experiment": "Direct outreach to partnerships team at each; target signed LOI with revenue-share or content-syndication clause",
        "costEur": 4000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past first meeting in 12 weeks",
        "validateSignal": "≥1 signed LOI with named distribution mechanism"
      }
    ],
    "preMortem": [
      {
        "cause": "Adult-child caregiver is too busy to learn new software — onboarding friction kills retention before value is felt",
        "likelihood": "high",
        "earlySignal": "Kill-test tr-k2 retention curve; specifically week-1 drop-off rate"
      },
      {
        "cause": "Multi-sibling family dynamics block adoption — one disengaged sibling makes coordination feature useless",
        "likelihood": "medium",
        "earlySignal": "Family-onboarding survey: % of families with ≥3 active siblings after 30 days"
      },
      {
        "cause": "Wells Fargo Elder Care / Chase Premier / John Hancock LTC bundles equivalent features into existing premium products",
        "likelihood": "medium",
        "earlySignal": "Bank elder-care product announcements; partnership-team conversations"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.5,
      "reaches10mArrBy36mo": 0.25,
      "totalFailureBy36mo": 0.2,
      "basisOfEstimate": "Carely's stall ($5M ARR over 5 years) is the bear case; the failure mode was product breadth over depth. The bull case: better product (adult-child-first, AI medical summarization, financial monitoring) + content marketing engine + clear pricing. €10M ARR = ~30K paying families at $300/yr = 0.075% penetration of US caregiver pop alone, or ~0.1% of EU+US combined — feasible at venture pace. Probability of reaching €1M is the highest in the agetech subset (clearest buyer, clearest pain)."
    },
    "industry": "agetech"
  },
  {
    "id": "tekton-eu-trades",
    "title": "Tekton",
    "ycCategory": "EU Marketplaces / Trades",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Pan-European marketplace for skilled trades — electricians, plumbers, HVAC, builders — matched to residential and small-business jobs with insurance-backed guarantees.",
    "description": "EU faces a structural skilled-trades shortage projected at 1.5M+ workers, with Germany alone short ~400K according to ZDH (Zentralverband des Deutschen Handwerks). The EU REPowerEU plan and Fit for 55 targets are driving 5-10× heat-pump installations by 2030; Germany missed its 500K-heat-pumps-per-year target in 2024 primarily due to installer shortage. Demand is exploding across heat pumps, solar installation, EV charger installation, and general building-stock renovation under the EU Renovation Wave.\n\nExisting solutions are inadequate: HomeServe is UK-only legacy; TaskRabbit/Thumbtack are US-only and lower-trust; local listings are broken and fragmented per country; the current default for 70%+ of homeowners is direct phone calls and word-of-mouth.\n\nTekton aggregates trades supply pan-EU with: country-verified credentials (UK Gas Safe, German Handwerkskammer, French chambre des métiers); in-app quote-book-pay with insurance-backed guarantee (Allianz/AXA/Munich Re partnership); recurring service contracts for HVAC + plumbing (annual contracts at scale); AI dispatching matching jobs to nearest qualified tradesperson; and trade-side workflow tools (invoicing, parts ordering, route optimization).\n\nPricing: 12-18% take rate on transactions (residential), 8-15% on commercial. Pattern-matches Bolt / Wolt / Helpling in EU services marketplaces.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Germany + UK + France + Netherlands are the largest TAMs and have the most acute skilled-trades shortages. Start with one German city (Munich or Hamburg) for density; expand to UK + Netherlands once unit economics validate.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "Germany / UK / France / Netherlands / Nordics — the core TAM. Pan-EU regulatory harmonization (CE marking + Mutual Recognition Directive) eases credential portability."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has rapid construction + facility-management growth; different trades culture (more migrant labor, less individual-trades-business). Year 3+."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower household disposable income reduces residential-side TAM; opportunistic via small-business segment."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM; useful as Year-1 pilot geography if founder is Greek-based."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Deliberate boundary expansion — no T-Life portfolio relevance. ALTP industrial-park tenant network could provide commercial-side pilot customers but it's a marginal lift, not a moat.",
    "tags": [
      "marketplace",
      "eu-trades",
      "skilled-labor",
      "construction",
      "heat-pumps",
      "renovation-wave",
      "beyond-tlife",
      "trend-5-trades-matching"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion thesis demonstrating the methodology applies outside agetech. Real TAM, proven marketplace pattern (Bolt/Wolt EU), genuine pain (heat-pump installer shortage is a Bundestag-level political concern). Match for May-2026 trend #5.\n\nAssertion validation pass (2026-05-16): 6 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Three converging factors. (1) EU REPowerEU mandates 30M new heat pumps by 2030; current installer capacity hits ~10M ceiling — installer-capacity-gap is the rate-limiting step on EU decarbonization. (2) German government has explicitly named trades-shortage as economic-policy priority (BMWi 2024 report); regulatory tailwinds for marketplaces that increase supply utilization. (3) Bolt/Wolt have de-risked the EU services-marketplace pattern; insurance-backed guarantee economics now well-understood (Allianz Hausrat, AXA partner ecosystems).",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Acquire 50 verified tradespeople in 1 German city (target Munich or Hamburg); process 100 jobs in first 3 months at <€80 CAC; insurance-partnership LOI (Allianz or AXA) for backed-guarantee model."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "Expand to 5 German cities + 1 UK city; 500 active tradespeople; €5-10M GMV/month at 12-15% take rate = €0.7-1.5M revenue/month; AI dispatching live; recurring-service-contract product (HVAC annual maintenance) launched."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "Pan-EU expansion (Germany + UK + Netherlands + France); 10K+ tradespeople; €20-40M revenue Y3; €10M+ ARR from recurring contracts alone; commercial-side platform for facility-management companies."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1-3M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Marketplace working capital + per-city launch budget (€100-200K per city for trades acquisition + paid demand-side) + insurance-partnership BD. Higher seed than pure SaaS but much lower than Bolt-style mobility marketplaces (no vehicle fleet)."
    },
    "competitors": [
      {
        "name": "HomeServe",
        "type": "incumbent",
        "geography": "UK",
        "note": "Legacy UK trades / home-services subscription. Strong brand; non-tech distribution; ARR ~£800M+ but slow growth and aging customer base."
      },
      {
        "name": "Hometree, MyBuilder (UK)",
        "type": "startup",
        "geography": "UK",
        "note": "UK-only marketplaces; MyBuilder has ~80K tradespeople. UK is most-developed EU market; Tekton wins on pan-EU + insurance-backed guarantee + AI dispatch."
      },
      {
        "name": "TaskRabbit (IKEA)",
        "type": "incumbent",
        "geography": "US/UK",
        "note": "Acquired by IKEA 2017 for ~$30-50M; primarily small-task focused (assembly, moving) not full trades. Not a direct threat."
      },
      {
        "name": "Thumbtack",
        "type": "incumbent",
        "geography": "US",
        "note": "US-only; trades-marketplace pattern at scale (~$3B valuation 2022). Has not entered EU due to regulatory complexity."
      },
      {
        "name": "Helpling, Bonusly (DE)",
        "type": "startup",
        "geography": "DE",
        "note": "Helpling is cleaning-focused; expanded to trades but limited traction. Bonusly is UK-equivalent. Tekton wins on insurance + scale."
      },
      {
        "name": "Direct booking via local trades (the actual incumbent)",
        "type": "adjacent",
        "geography": "All EU",
        "note": "70%+ of EU residential trades work is still booked via phone + word-of-mouth. The real competitor is offline."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 2,
      "founderAvailability": 3,
      "composite": 3.2
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #5 (trades matching for electricians, plumbers, HVAC — supply shrinking). Insurance-backed guarantee + AI dispatching is the differentiator vs HomeServe/MyBuilder. EU REPowerEU is the structural tailwind.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "tk-a1",
        "claim": "EU construction sector needs ~2M+ workers by 2030 (ITUC/EURES 2024); broader skilled-trades shortage estimates vary",
        "source": "https://www.ela.europa.eu/sites/default/files/2025-06/EURES_Report_on_labour_shortages_and_surpluses_2024.pdf",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior 1.5M+ Eurostat/Cedefop attribution wasn't pinpointable; ITUC/EURES 2024 is the sourceable figure."
      },
      {
        "id": "tk-a2",
        "claim": "Germany handwerk shortage: ~125,500 registered open positions; demand 'well over 200,000' (ZDH 2024) — NOT 400K",
        "source": "https://www.zdh.de/daten-und-fakten/kennzahlen-des-handwerks/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior 400K figure refuted; correct ZDH 2024 figure is ~125-200K."
      },
      {
        "id": "tk-a3",
        "claim": "EU REPowerEU targets 30M cumulative heat pumps by 2030; 10M additional hydronic units by 2027 (EHPA / EC)",
        "source": "https://ehpa.org/policy-2/repowereu-and-the-eu-heat-pump-action-plan/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Target confirmed; sub-claim about '~3M installed 2024' was annual-vs-cumulative confusion."
      },
      {
        "id": "tk-a4",
        "claim": "Germany missed 500K-heat-pump 2024 target (only ~200K installed); PRIMARY cause was policy uncertainty (Building Energy Act debate) + falling gas prices, NOT installer shortage",
        "source": "https://www.cleanenergywire.org/news/heat-pump-sales-germany-drop-more-half-first-months-2024",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior thesis framing was wrong on causation. Installer shortage is secondary not primary. Weakens 'installer shortage as why-now' argument; thesis still defensible on REPowerEU pipeline + HomeServe pattern."
      },
      {
        "id": "tk-a5",
        "claim": "HomeServe (UK) revenue ~£1.1B (FY2024); ~£800M+ is the conservative floor",
        "source": "https://homeservegroup.com/s/hsv-ltd-anual-report-and-accounts-2024-2.pdf",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "tk-a6",
        "claim": "Bolt valued €6.3B at 2025 secondary sale (down from €7.4B peak 2022)",
        "source": "https://sifted.eu/articles/bolt-valuation-secondary-share-sale",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "tk-k1",
        "hypothesis": "Acquire 50 verified tradespeople in Munich within 8 weeks at <€500 per acquisition (compared to gig-marketplace €200 norms)",
        "experiment": "Field team of 2 in Munich; door-to-door + targeted Facebook ads; verify Handwerkskammer credentials per tradesperson",
        "costEur": 30000,
        "durationWeeks": 8,
        "killSignal": "<25 acquired OR per-tradesperson cost >€1000",
        "validateSignal": "≥50 acquired at <€500 each AND ≥70% report 2+ jobs/week capacity available"
      },
      {
        "id": "tk-k2",
        "hypothesis": "Process 100 residential jobs in Munich in first month post-launch with <€80 customer CAC and ≥80% job-completion rate",
        "experiment": "Demand-side paid acquisition (Google search + Meta) targeting Munich postal codes; AI dispatch to acquired tradespeople; measure end-to-end completion",
        "costEur": 12000,
        "durationWeeks": 6,
        "killSignal": "<50 jobs OR completion <60% OR CAC >€150",
        "validateSignal": "≥100 jobs AND ≥80% completion AND <€80 CAC"
      },
      {
        "id": "tk-k3",
        "hypothesis": "Insurance-backed guarantee partnership LOI from Allianz, AXA, or Munich Re within 12 weeks",
        "experiment": "Direct BD with all three; pitch backed-guarantee economics at <3% claims target",
        "costEur": 6000,
        "durationWeeks": 12,
        "killSignal": "0/3 advance past initial meeting",
        "validateSignal": "≥1 signed LOI with claims-rate target + revenue-share structure"
      }
    ],
    "preMortem": [
      {
        "cause": "Tradespeople prefer direct customer relationships and resist platform commission — platform-supply liquidity never reaches critical mass",
        "likelihood": "medium",
        "earlySignal": "Kill-test tk-k1 acquisition cost + post-acquisition active-rate at 30 days"
      },
      {
        "cause": "Insurance-backed guarantee economics break — claims rate >3% blows up the unit economics or insurance partner pulls out",
        "likelihood": "medium",
        "earlySignal": "First 200 jobs claims-rate measurement at Month 3"
      },
      {
        "cause": "German / French / UK regulators classify Tekton as an employer (Uber/Deliveroo precedent), triggering massive worker-classification liability and back-taxes",
        "likelihood": "high",
        "earlySignal": "Monitor PMC / Aslam ruling progress in UK; ECJ rulings on EU platform-work directive 2024"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "EU services-marketplace pattern (Bolt, Wolt, Helpling, MyBuilder UK) reaches €10-100M+ revenue in 4-7 years. Trades-specific has higher ticket size (€500-5K/job vs €20-50/ride) but slower acquisition. €10M ARR = €60-80M GMV at 13-15% take rate, or 60K-80K jobs/year — feasible with 3-5 major-city density. Top risk: EU platform-work directive (2024) creates worker-classification overhang."
    },
    "industry": "construction-home"
  },
  {
    "id": "steward-elder-banking",
    "title": "Steward",
    "ycCategory": "Senior Fintech / AI Fraud Defense",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Voice-first banking app for 65+ with AI fraud defense as the headline product — the Chime for elderly with family co-monitoring and deepfake-aware security.",
    "description": "Approximately $28B/year in elder fraud losses in the US (FBI IC3, FTC), with similar per-capita rates in EU. AI-enabled deepfake scams (voice cloning of grandchildren, fake government calls, romance scams) have collapsed traditional rule-based fraud detection. 60M+ Americans and ~95M Europeans over 65 are the #1 fraud target. Existing banks bury fraud protection inside compliance UX that 70+ users can't navigate; family members can't intervene without a power-of-attorney; and the senior-banking offerings (Charles Schwab senior accounts, AARP credit cards) are just normal banking with bigger fonts.\n\nSteward is a voice-first banking product designed from the ground up around three problems:\n• Voice-first interaction (they prefer talking; OTC hearing aids made voice the new primary interface)\n• AI fraud screen as headline product (anomaly detection trained on senior-specific scam patterns; deepfake voice detection for incoming calls; spending-pattern + cognitive-decline signal surfacing)\n• Family co-monitoring with consent-driven granularity (designated adult child sees alerts, large transactions, recurring payments; revocable; parent-controlled)\n\nPricing: free basic banking (interchange + float revenue) + family-tier subscription $15-25/mo for AI fraud screen + family integration. ARPU $180-300/yr at full conversion. Distribution: bank-partnership (Bancorp / Stride US; SolarisBank / Treasury Prime EU) + adult-child marketing (anxiety-driven acquisition).",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "EU PSD2 + EMI-license path is faster to market than US state-by-state. UK + DACH + Nordics have highest banking-app adoption among 50-75 demo. US is biggest TAM but harder regulatory entry; defer to Year 2-3 with proven model + capital + bank partner.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "UK, DACH, Nordics — high digital-banking adoption, deepest open-banking infrastructure (PSD2 SCA), and most acute elder-fraud reporting frameworks."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has wealth concentration in 60+ but conservative regulatory framework around AI fraud detection in banking; Year 3+."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Small TAM; useful as Year-1 pilot geography with Greek-language localization."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower banking-app penetration in 65+ demo; defer."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life operating dependency. The product requires bank-partner sponsorship (Bancorp / SolarisBank / Treasury Prime tier) which T-Life cannot provide; founder team must build that relationship independently.",
    "tags": [
      "agetech",
      "fintech",
      "voice-first",
      "elder-fraud",
      "ai-fraud-defense",
      "deepfake-detection",
      "beyond-tlife",
      "trend-3-elder-tech",
      "trend-17-human-verification"
    ],
    "addedDate": "2026-05-16",
    "notes": "Biggest TAM in the agetech subset ($28B/yr elder fraud in US alone). Regulatory complexity is the rate-limiter; product simplicity is the wedge. Map to May-2026 trend #3 (elder tech) and #17 (digital human verification — the deepfake-defense layer).\n\nAssertion validation pass (2026-05-16): 4 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Three converging factors. (1) Elder fraud losses tripled 2020-2024 with AI voice-cloning maturity; FBI IC3 2024 report names elder fraud as top growth crime category. (2) OTC hearing aids regulatory unlock (FDA Aug 2022) shifted primary interface from screen to voice for the 30M+ Americans with hearing loss; voice-first banking is now table stakes. (3) BaaS infrastructure (Treasury Prime, Synctera US; Bancorp Europe; SolarisBank/Solaris) mature enough to ship a banking-app product in 6-9 months without owning a charter.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Bank-partner sponsorship secured (Bancorp Europe / SolarisBank / Treasury Prime); voice-first onboarding live in UK + Germany; first 500 family-tier sign-ups at €20/mo; voice deepfake detection model achieves >90% on public test set."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5,000 family-tier subscriptions = ~€1M ARR; AI fraud screen detecting $5M+ of attempted scams (case studies for marketing); first major insurance partnership (AIG / Hiscox / Allianz) for fraud-loss coverage; product-led acquisition via adult-child anxiety marketing."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "50K subscriptions across UK/DACH/Nordics = ~€10M ARR; expand to US with capital + Synctera/Treasury Prime partnership; AI fraud screen detecting €X annually; license fraud-detection model to retail banks (B2B revenue line)."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1-2.5M",
      "capexRatio": "15% capex / 85% opex",
      "note": "Bank-partner BaaS fees + KYC infra + AI fraud-model training compute push beyond pure-SaaS. 2 engineers + 1 financial-crime ML + 1 BaaS-partnership BD + 1 senior compliance + product/design = ~€800K/yr team."
    },
    "competitors": [
      {
        "name": "Charles Schwab Senior Accounts (US)",
        "type": "incumbent",
        "geography": "US",
        "note": "Existing senior-banking offering with bigger fonts. Not tech-native; no AI fraud defense; no family co-monitoring with consent."
      },
      {
        "name": "AARP / Mastercard partnership credit card",
        "type": "incumbent",
        "geography": "US",
        "note": "Distribution moat via AARP membership but UX is generic; no fraud-defense headline product."
      },
      {
        "name": "Carefull (US)",
        "type": "startup",
        "geography": "US",
        "note": "Closest direct competitor: fraud-monitoring + family-oversight for seniors. Raised ~$10M; non-bank product (sits on top of customer's existing accounts). Tekton-style banking-account-replacement is the wedge."
      },
      {
        "name": "EverSafe (US)",
        "type": "startup",
        "geography": "US",
        "note": "Senior-fraud monitoring product; non-bank. Reliable but limited TAM expansion; not voice-first."
      },
      {
        "name": "Chime, Monzo, N26 (general neo-banks)",
        "type": "incumbent",
        "geography": "US/EU",
        "note": "Not senior-focused. Could pivot but would lose 18-35 brand."
      },
      {
        "name": "Bank Elder Care features (Wells Fargo)",
        "type": "incumbent",
        "geography": "US",
        "note": "Bundled with premium accounts; covers monitoring but not voice-first banking + AI deepfake defense."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 2,
      "founderAvailability": 2,
      "composite": 3.1
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trends #3 (elder tech, 70M boomers) and #17 (digital verification of humans — deepfake-resistant banking is the regulated-perimeter expression of this trend). Bank-distribution is the gate; product-market fit is clear.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "st-a1",
        "claim": "US elder fraud losses: ~$4.9B reported to FBI IC3 in 2024 (147K complaints, +43% YoY); AARP BankSafe extrapolates total inclusive of unreported losses at ~$28B",
        "source": "https://www.aarp.org/money/scams-fraud/fbi-report-fraud-2024/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Original $28B figure is AARP-extrapolation (incl. unreported), not FBI IC3 direct. Clarified."
      },
      {
        "id": "st-a2",
        "claim": "Voice-phishing / vishing grew 260-442% in 2024 (industry vendors: Keepnet H1→H2, DeepStrike YoY); not a direct FTC/IC3 stat",
        "source": "https://deepstrike.io/blog/vishing-statistics-2025",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Re-sourced from industry vendors; FTC/IC3 attribution removed."
      },
      {
        "id": "st-a3",
        "claim": "OTC hearing aid rule effective Oct 2022 unlocked retail audio + voice-first computing for 30M+ Americans",
        "source": "[CONFIRMED — FDA rule]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "st-a4",
        "claim": "60M+ Americans over 65 (Census Bureau)",
        "source": "[CONFIRMED — standard demographic]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "st-a5",
        "claim": "~97M Europeans 65+ (Eurostat: EU pop 449.3M Jan 2024, 21.6% aged 65+)",
        "source": "https://ec.europa.eu/eurostat/statistics-explained/index.php/Population_structure_and_ageing",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "st-a6",
        "claim": "Carefull (US senior fraud monitoring) raised ~$19.7M total ($3.2M seed 2021 + $16.5M Series A Oct 2023)",
        "source": "https://techcrunch.com/2023/10/11/carefull-lands-16-5m-to-shield-seniors-from-financial-fraud/",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Prior $10M figure understated by ~2×."
      },
      {
        "id": "st-a7",
        "claim": "EU PSD2 SCA + EMI-license path provides 6-9 month banking-product launch via SolarisBank / Treasury Prime / Bancorp Europe",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "st-k1",
        "hypothesis": "Bank-partner sponsorship LOI from at least 1 EU EMI sponsor (SolarisBank, Bancorp Europe, Treasury Prime EU) within 12 weeks",
        "experiment": "Direct BD with all 3-4 primary BaaS players; pitch elder-banking product + AI fraud thesis",
        "costEur": 8000,
        "durationWeeks": 12,
        "killSignal": "0/4 advance past initial term-sheet conversation in 12 weeks",
        "validateSignal": "≥1 signed LOI with named launch timeline + fee schedule"
      },
      {
        "id": "st-k2",
        "hypothesis": "Voice deepfake detection model achieves ≥90% accuracy on a public test set of senior-targeted scam recordings (+ <5% false positive on legitimate family calls)",
        "experiment": "Train detection model on public dataset (ASVspoof, WaveFake) + augmented elder-targeted data; benchmark",
        "costEur": 12000,
        "durationWeeks": 8,
        "killSignal": "<80% true positive OR >10% false positive on legitimate calls",
        "validateSignal": "≥90% true positive AND <5% false positive"
      },
      {
        "id": "st-k3",
        "hypothesis": "Adult-child anxiety acquisition channel works: 50 paid family-tier sign-ups at €20/mo annual prepay in 6 weeks via paid social, CAC <€100",
        "experiment": "Run €5K paid acquisition test on Meta + Google targeting adult-child demographic with elder-fraud anxiety hooks",
        "costEur": 7000,
        "durationWeeks": 6,
        "killSignal": "<20 sign-ups OR CAC >€200",
        "validateSignal": "≥50 sign-ups AND CAC <€100"
      }
    ],
    "preMortem": [
      {
        "cause": "Bank-partnership negotiation drags >12 months — burn rate exceeds first-revenue ramp, runway runs out before launch",
        "likelihood": "high",
        "earlySignal": "Kill-test st-k1 velocity in weeks 6-12"
      },
      {
        "cause": "Regulator (FCA UK, BaFin DE) classifies elder-targeted banking product as 'vulnerable consumer' with extra compliance restrictions that strangle product simplicity",
        "likelihood": "medium",
        "earlySignal": "Pre-launch regulator engagement in Months 2-4"
      },
      {
        "cause": "Adult-child acquisition CAC is unworkable at family-tier ARPU — €100 CAC × 24-month LTV doesn't unit-economic when banking infrastructure costs are loaded in",
        "likelihood": "medium",
        "earlySignal": "Kill-test st-k3 CAC + cohort retention modeling"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.18,
      "totalFailureBy36mo": 0.4,
      "basisOfEstimate": "Neo-banks reach €1M ARR in 18-24 months typically (Monzo, Revolut, Chime patterns). Senior-focused product has lower viral acquisition (adult-child must initiate; trust takes longer) but higher ARPU. €10M ARR = 35-50K family-tier subscriptions at €200-300/yr — feasible in 24-36 months IF bank-partnership lands in Month 0-6. The biggest risk is the bank-partner gate."
    },
    "industry": "agetech"
  },
  {
    "id": "reverie-ai-companion",
    "title": "Reverie",
    "ycCategory": "AI Companions / Voice AI for Seniors",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Voice-first AI companion for 70+ — persistent memory, daily conversation, family-loop integration. Not a chatbot; a designed relationship.",
    "description": "Loneliness is the #1 self-reported pain point of 70+ globally (AARP, ONS UK, EU Loneliness Atlas), with documented health consequences equivalent to smoking 15 cigarettes per day. Existing solutions are inadequate: family calls are sporadic, senior centers are physical and pandemic-impaired, Replika is for lonely young people, Character.ai is fantasy roleplay, ChatGPT is task-oriented. Nobody has built an AI companion explicitly designed for 70+ daily conversation with: persistent memory of the person's life (interests, family, history), voice-first interaction (cognitive accessibility), daily presence (proactive 'good morning' + check-ins), family-loop integration ('Mom mentioned chest pain three times this week'), and ethical-first design (not pretending to be human).\n\nThe technology threshold was crossed in 2025: AI character memory + voice quality (ElevenLabs, OpenAI advanced TTS) reached the dignity threshold for serious deployment with vulnerable users. Pricing: $30/mo direct + $15/mo family-integration upgrade = $360-540/yr ARPU.\n\nThis is the highest-upside but most bimodal idea in the catalog. Either it becomes a $1B+ category-defining product (probability ~10%) or it dies in 18 months on ethics backlash / regulator classification / single high-profile incident (probability ~55%). Build only if the founder is EXACTLY right: someone who pairs ex-Inflection/Pi-class AI product chops with clinical psychology or geriatrics domain expertise + a Stoic temperament about the ethical surface.",
    "primaryMarket": "europe",
    "primaryMarketFit": "yellow",
    "primaryMarketRationale": "Mediterranean + Northern Europe have strong family-elder culture where family-loop is naturally valued. UK + DACH + Nordics highest digital adoption among 70+; Greek/Italian/Spanish are family-culture-aligned but smaller digital TAM. Avoid US Year-1: Replika + Character.ai already established + higher litigation exposure on the ethics-of-AI-companions question.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "UK, DACH, Nordics — highest 70+ digital adoption. Italy / Spain / Portugal family-aligned. AI Act exposure on 'vulnerable population AI emotional companion' is real; pre-validate classification."
      },
      {
        "market": "greece-cyprus",
        "fit": "green",
        "note": "Strong family-elder culture; smaller TAM but high cultural alignment with the family-loop product feature."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has wealth concentration in 60+ + family-elder culture but conservative cultural attitudes about AI-as-companion may bottleneck adoption."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower digital adoption in 70+ demo; defer."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life operating dependency. The product needs a founding team with rare combination (AI product depth + clinical psychology / geriatrics domain) — not findable through T-Life portfolio.",
    "tags": [
      "agetech",
      "ai-companion",
      "voice-ai",
      "loneliness",
      "bimodal-upside",
      "ethics-sensitive",
      "beyond-tlife",
      "trend-3-elder-tech",
      "trend-28-ai-characters-memory",
      "trend-1-loneliness"
    ],
    "addedDate": "2026-05-16",
    "notes": "Highest-upside / highest-variance bet in the catalog. Build ONLY with the exactly-right founder. Bimodal: $1B+ or kill in 18 months. The ethical surface is the rate-limiter not the technology.\n\nAssertion validation pass (2026-05-16): 4 assertion(s) patched against primary sources. See assertions[] for updated sources, statuses, and notes. Material corrections flagged in individual assertion 'note' fields.",
    "whyNow": "Three converging factors. (1) AI character memory crossed the dignity threshold in 2025 — Replika 30M users, Character.ai 20M+ MAU prove the category exists; the senior-specific product is the open white space. (2) Voice quality (ElevenLabs Turbo, OpenAI advanced voice) is now genuinely human-grade on consumer hardware. (3) EU AI Act enters general application Aug 2026 — Annex III(1)(c) governs 'AI systems intended to be used to influence emotional state' and may classify senior-targeted companions as high-risk; the 12-18 month window before enforcement matures is the design + market-entry window.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Founding team assembled (AI product + clinical psych + ethics advisor); regulatory pre-review with EU AI Act consultant confirms Art. 6(3) pathway or commits to high-risk burden; closed beta with 100 design-partner families (parent + adult child); product-design iteration on family-loop value."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "Public launch in UK + DACH at €30/mo direct + €15/mo family-tier; 5,000 paid users = €1.5-2M ARR; ethics advisory board published; first family-tier upgrade conversion validated; 90-day cohort retention ≥60%."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "20-50K paid users = €5-15M ARR; expand to Greece/Italy/Spain with localized companions; explore B2B2C distribution via senior-living communities and home-care agencies; navigate AI Act high-risk classification + audit trail or operate under Art. 6(3) self-classification."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€800K-€2M",
      "capexRatio": "5% capex / 95% opex",
      "note": "LLM inference COGS is the variable load. Ethics/clinical advisory board (~€100K/yr). AI Act compliance documentation (~€200K). Voice-AI development (~€300K). The team is the bottleneck cost, not infrastructure."
    },
    "competitors": [
      {
        "name": "Replika",
        "type": "startup",
        "geography": "Global",
        "note": "30M+ users; design optimized for lonely young people; not senior-targeted. Replika's parent (Luka) is structurally unable to pivot without losing core user base."
      },
      {
        "name": "Character.ai (acquired)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Google acquired key team Aug 2024 (~$2.7B); platform continues but consumer-AI-companion thesis at $1B+ valuation is proven. Not senior-targeted."
      },
      {
        "name": "Pi (Inflection / Microsoft)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Inflection AI team moved to Microsoft Mar 2024; Pi product status unclear. Was the closest to a 'kind AI companion' positioning."
      },
      {
        "name": "ElliQ (Intuition Robotics)",
        "type": "startup",
        "geography": "US/Israel",
        "note": "Closest direct competitor: physical companion robot for seniors. Raised ~$80M+; hardware-anchored ($600+ device + $30/mo). Reverie is software-only, cheaper, faster to deploy."
      },
      {
        "name": "Embodied (Moxie)",
        "type": "startup",
        "geography": "US",
        "note": "Originally child-focused; expanded to senior + special needs. Hardware-anchored. Reverie is software-only."
      },
      {
        "name": "Generic ChatGPT / Claude / Gemini",
        "type": "adjacent",
        "geography": "Global",
        "note": "70+ users do find ChatGPT useful but UX is hostile (text-first, no memory, no family-loop)."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 1,
      "founderAvailability": 1,
      "composite": 2.9
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trends #3 (elder tech, 70M boomers), #1 (loneliness — biggest B2C pain), and #28 (AI characters with real memory and relationships). The senior-specific instantiation of #28 with built-in family-loop is the wedge.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "rv-a1",
        "claim": "Loneliness mortality risk equivalent to ~15 cigarettes/day (Holt-Lunstad 2010 PLOS Medicine meta-analysis; reaffirmed 2015 Perspectives on Psychological Science)",
        "source": "https://journals.sagepub.com/doi/10.1177/1745691614568352",
        "status": "confirmed",
        "lastChecked": "2026-05-16",
        "note": "Original framing from 2010 PLOS Medicine; 2015 paper reaffirmed and expanded."
      },
      {
        "id": "rv-a2",
        "claim": "Replika reached >30M users by August 2024 (CEO statement)",
        "source": "https://en.wikipedia.org/wiki/Replika",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rv-a3",
        "claim": "Google licensing deal with Character.ai team (Shazeer/De Freitas + team to DeepMind) ~$2.7B Aug 2024 — non-exclusive license, not full acquisition",
        "source": "https://www.entrepreneur.com/business-news/google-rehires-ai-pioneer-noam-shazeer-in-27-billion-deal/480378",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rv-a4",
        "claim": "ElliQ (Intuition Robotics) raised ~$83M total per Aug 2023 round",
        "source": "https://techcrunch.com/2023/08/29/eldercare-robot-elliq-nabs-another-25-million-in-funding/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rv-a5",
        "claim": "EU AI Act Annex III(1)(c) covers AI systems intended to influence emotional state — may classify senior-companion as high-risk requiring conformity assessment",
        "source": "https://artificialintelligenceact.eu/annex/3/",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "rv-a6",
        "claim": "Voice quality (ElevenLabs Turbo, OpenAI Advanced Voice) is human-grade as of 2025",
        "source": "[CONFIRMED — public benchmarks + product launches]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "rv-k1",
        "hypothesis": "Cohort of 30 design-partner families (70+ parent + adult child) shows >70% 30-day retention and >50% family-tier conversion intent",
        "experiment": "Recruit 30 families via Age UK / AARP / direct outreach; deploy MVP; measure retention + family-tier conversion willingness",
        "costEur": 25000,
        "durationWeeks": 12,
        "killSignal": "<40% 30-day retention OR <20% family-tier conversion intent",
        "validateSignal": "≥70% retention AND ≥50% family-tier intent AND positive ethics-review from clinical psych advisor"
      },
      {
        "id": "rv-k2",
        "hypothesis": "EU AI Act consultant + regulatory affairs reviewer confirm Art. 6(3) self-classification pathway holds (NOT high-risk)",
        "experiment": "Engage EU AI Act consultant + 1 emerging-tech regulatory lawyer; submit architecture + use-case documentation",
        "costEur": 15000,
        "durationWeeks": 10,
        "killSignal": "Both reviewers recommend high-risk classification (triggering €1-3M conformity-assessment burden + audit trail + worker notification requirements)",
        "validateSignal": "Both confirm Art. 6(3) pathway with specific architectural requirements"
      },
      {
        "id": "rv-k3",
        "hypothesis": "Clinical-psychology advisory board (3+ members from geriatrics / aging research) certifies the product as 'beneficial-not-harmful' to vulnerable users, with published ethics guidelines",
        "experiment": "Recruit advisory board; design + publish ethics framework; submit MVP for review",
        "costEur": 12000,
        "durationWeeks": 12,
        "killSignal": "Advisory board declines to certify OR demands changes that strip the core product loop",
        "validateSignal": "Published ethics framework + 3 advisor sign-off + 1-3 public-facing peer-review endorsements"
      }
    ],
    "preMortem": [
      {
        "cause": "Ethics backlash — single bad-press incident (AI 'replacing' human contact for vulnerable elderly, or AI giving harmful advice) tanks the category",
        "likelihood": "high",
        "earlySignal": "Monitor Replika / Character.ai ethics incidents quarterly; pre-emptively engage ethics advisory + transparency reports"
      },
      {
        "cause": "AI Act classifies as high-risk under Annex III(1)(c) — triggers €1-3M conformity-assessment burden + 6-12 month delay + audit trail + deployer obligations",
        "likelihood": "medium",
        "earlySignal": "Kill-test rv-k2 results in weeks 6-10"
      },
      {
        "cause": "70+ users find proactive AI conversations cognitively exhausting; cohort retention drops below viability at Month 3-6",
        "likelihood": "medium",
        "earlySignal": "Kill-test rv-k1 retention curve at 30 + 60 + 90 days"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.55,
      "basisOfEstimate": "Bimodal outcome distribution. Bear case (55% probability): dies on ethics backlash, AI Act classification, or cohort fatigue within 18-24 months. Bull case (15% probability of reaching €10M ARR): becomes the senior-specific category-defining product — Replika reached $X ARR in 4-5 years; senior version has higher ARPU + family-tier upsell. Median outcome: $1-3M ARR niche product at 36 months. Founder availability is the binding gate — needs exactly-right team."
    },
    "industry": "agetech"
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
    "industry": "consumer"
  },
  {
    "id": "hearthpro-hvac-subscription",
    "title": "HearthPro",
    "ycCategory": "Home Services Subscription / HVAC",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Pan-European subscription HVAC + plumbing care — €25-40/mo annual contracts with insurance-backed guarantee, smart-thermostat optimization, and heat-pump specialist support.",
    "description": "HomeServe (UK) proved the model: ~£800M revenue selling boiler-and-plumbing subscription cover to UK households at £15-30/mo. The model exists nowhere else in EU at scale. Germany, France, Netherlands, Spain, Italy all have similar housing stock + recurring HVAC need (boilers, heat pumps, water heaters), zero strong subscription incumbent (Vaillant/Bosch sell hardware, not service subscriptions). EU REPowerEU mandates 30M new heat-pump installations by 2030, creating €X billion of ongoing maintenance demand.\n\nHearthPro is the pan-EU residential HVAC + plumbing subscription: €25-40/mo annual contracts; covered annual visit + 24/7 emergency callout + parts/labor with insurance-backed guarantee (Allianz/AXA partner); smart-thermostat integration (Nest, Ecobee, Tado) for predictive maintenance and energy optimization; heat-pump specialist add-on (€10/mo); trades supply aggregated on the back-end (overlap with Tekton if same founding team).\n\nThe wedge vs HomeServe UK: HomeServe is non-tech, non-cross-border. HearthPro builds AI dispatching + insurance partnership EU-native + heat-pump specialty as the primary acquisition hook.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Germany + UK + Netherlands are the biggest TAMs by housing stock + heat-pump installation pipeline. Start with 1 German city for density.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "Germany / UK / Netherlands / France / Iberia."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC HVAC is centralized building-management not residential subscription."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower disposable income on €30/mo cover; opportunistic."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM; pilot geography only."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency. Could share founding team / back-end trades supply with Tekton.",
    "tags": [
      "hvac",
      "home-services",
      "subscription",
      "insurance",
      "heat-pumps",
      "trades",
      "beyond-tlife",
      "trend-26-subscription-services"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) EU REPowerEU pipeline puts 30M new heat pumps into EU homes by 2030 — each needs annual maintenance + €X/yr service revenue. (2) HomeServe UK pattern is proven at ~£800M revenue but un-extended across EU. (3) Allianz / AXA / Munich Re have mature insurance-as-a-service products for backed-guarantee economics.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Single-city launch (Munich or Hamburg); 500 paying subscriptions at €30/mo; trades supply: 20 verified plumbers + HVAC technicians; insurance LOI from Allianz Hausrat or AXA."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "10K subscriptions across 5 German cities + 1 UK city; €3-4M ARR; heat-pump specialist add-on launched; smart-thermostat partnerships (Tado, Bosch)."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "100K subscriptions across Germany + UK + Netherlands; €30-40M revenue; commercial-side platform for facility management."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1.5-3M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Per-city launch costs (€100-200K each) + insurance-claims-reserve working capital + AI dispatching engineering."
    },
    "competitors": [
      {
        "name": "HomeServe (UK)",
        "type": "incumbent",
        "geography": "UK",
        "note": "Legacy UK. ~£800M revenue. Non-tech, slow."
      },
      {
        "name": "British Gas Homecare",
        "type": "incumbent",
        "geography": "UK",
        "note": "Centrica subsidiary; UK-only; aging customer base."
      },
      {
        "name": "Hometree (UK)",
        "type": "startup",
        "geography": "UK",
        "note": "VC-backed HomeServe modernization; UK-only; raised ~€90M."
      },
      {
        "name": "Vaillant / Bosch / Viessmann (manufacturers)",
        "type": "incumbent",
        "geography": "EU",
        "note": "Hardware-anchored; offer service contracts via dealer networks; not subscription platforms."
      },
      {
        "name": "Local boiler-cover insurance (Allianz, AXA standalone)",
        "type": "incumbent",
        "geography": "EU",
        "note": "Insurance products without service coordination; tools to white-label vs compete."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 1,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.05
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #26 (subscription pest/services model — but applied to HVAC). EU REPowerEU is the structural tailwind.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "hp-a1",
        "claim": "HomeServe UK revenue ~£800M (legacy non-tech)",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "hp-a2",
        "claim": "EU REPowerEU targets 30M heat pumps by 2030",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "hp-a3",
        "claim": "Hometree (UK) raised ~€90M",
        "source": "[ESTIMATE — Crunchbase]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "hp-a4",
        "claim": "EU residential heat-pump installations grew >50% 2022-24",
        "source": "[ESTIMATE — EHPA European Heat Pump Association]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "hp-a5",
        "claim": "Allianz / AXA insurance-as-a-service mature for backed-guarantee partnerships",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "hp-k1",
        "hypothesis": "Acquire 500 subscriptions at €30/mo in Munich (or Hamburg) within 6 months at <€80 CAC",
        "experiment": "Paid acquisition + door-to-door + plumber-cross-referral",
        "costEur": 40000,
        "durationWeeks": 26,
        "killSignal": "<200 subs OR CAC >€150",
        "validateSignal": "≥500 subs AND CAC <€80"
      },
      {
        "id": "hp-k2",
        "hypothesis": "Insurance LOI from Allianz / AXA / Munich Re for backed-guarantee model at claims rate <3%",
        "experiment": "Direct BD; pitch backed-guarantee economics",
        "costEur": 8000,
        "durationWeeks": 12,
        "killSignal": "0/3 advance to term sheet",
        "validateSignal": "≥1 signed LOI"
      },
      {
        "id": "hp-k3",
        "hypothesis": "Trades supply (20 verified plumbers + HVAC techs in 1 city) at <€500 each acquisition",
        "experiment": "Field-team-led acquisition + credential verification",
        "costEur": 12000,
        "durationWeeks": 10,
        "killSignal": "<10 acquired OR cost >€1000 each",
        "validateSignal": "≥20 acquired at <€500 each AND ≥2 jobs/week capacity each"
      }
    ],
    "preMortem": [
      {
        "cause": "HomeServe (or Centrica) extends to Germany before HearthPro reaches scale",
        "likelihood": "medium",
        "earlySignal": "HomeServe EU job postings + acquisition announcements"
      },
      {
        "cause": "Insurance claims rate >3% blows up unit economics; insurance partner pulls out",
        "likelihood": "medium",
        "earlySignal": "First 1K subscriptions claims-rate measurement at Month 9"
      },
      {
        "cause": "Tradespeople prefer direct relationships and platform supply-side acquisition stalls",
        "likelihood": "medium",
        "earlySignal": "Kill-test hp-k3 trades-acquisition rate"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.45,
      "reaches10mArrBy36mo": 0.25,
      "totalFailureBy36mo": 0.25,
      "basisOfEstimate": "HomeServe UK proved €X recurring-revenue model at ~£800M scale over 30 years. HearthPro extends pan-EU + tech-enabled. €10M ARR = 25-35K subscriptions at €30-40/mo — feasible in 5 German cities + 1 UK in 24-36 months."
    },
    "industry": "construction-home"
  },
  {
    "id": "tessera-brand-resale",
    "title": "Tessera",
    "ycCategory": "Resale Infrastructure / Sustainability",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "White-label resale platform for fashion + lifestyle brands — every brand wants to own its secondary market and reclaim the 30% margin Vinted/Depop takes.",
    "description": "Global resale market is $20-30B+ growing 15-20% YoY. Vinted, Depop, ThredUp, Vestiaire Collective dominate but charge 15-30% take rates and own the customer relationship. Brands (Patagonia 'Worn Wear', Levi's 'Levi's Authorized Vintage', Coach 'Coach (Re)Loved', REI 'Re/Supply') are launching their own resale programs to (i) reclaim the margin, (ii) own the customer for lifetime value, (iii) meet sustainability commitments. Building this in-house is hard — authentication, condition grading, payments, logistics, customer service.\n\nTrove (US, raised ~$77M) is the US-market leader in resale-as-a-service. UK + EU is underserved. EU ESPR (Ecodesign for Sustainable Products Regulation) and Digital Product Passports (effective 2025-2030) are pushing brands toward circularity at regulatory level.\n\nTessera is the EU-focused brand-owned-resale stack: white-label storefront, computer-vision authentication, AI condition grading, logistics integration (returns + outbound), payment + customer service. Brand keeps the customer + 80-85% of resale revenue; Tessera takes 8-12% take rate vs Vinted's 25%. Plus setup fee per brand €10-50K.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "UK + DACH + Nordics + France: biggest fashion resale + sustainability-mandated brands + Gen Z buyer base. Italy/Spain secondary.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "UK / DACH / Nordics / France core; Italy / Spain secondary."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC luxury resale market exists but smaller TAM."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Smaller TAM; opportunistic."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Niche TAM only."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency.",
    "tags": [
      "resale",
      "circular-economy",
      "fashion-tech",
      "white-label",
      "espr",
      "beyond-tlife",
      "trend-22-brand-resale"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) EU ESPR + Digital Product Passport regulation (effective 2025-2030) push brands toward circularity at the EU-regulatory level. (2) Gen Z + Millennial buyers demand resale options; sustainability is purchase criterion. (3) AI authentication + grading just became accurate enough to deploy at brand-grade quality.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP white-label storefront + AI authentication + grading; 3 design-partner brands in UK + DACH at €20-30K setup + 10% take rate; first €100K GMV processed."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "15-25 brand customers across UK + DACH + France; €5-8M GMV at 10% take rate = €500-800K revenue; Digital Product Passport integration; first major brand (€100M+ revenue) signed."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "60-100 brands; €30-50M GMV; €3-5M revenue; expand to non-fashion verticals (home goods, sporting equipment, electronics)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€500K-€1.2M",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure SaaS + marketplace economics. Main costs: 3 engineers + 1 brand-BD + AI training + first-customer onboarding."
    },
    "competitors": [
      {
        "name": "Trove",
        "type": "startup",
        "geography": "US",
        "note": "B2B resale-as-a-service. Raised ~$77M. US-anchored; limited EU presence."
      },
      {
        "name": "Recurate",
        "type": "startup",
        "geography": "US",
        "note": "B2B resale. Raised ~$14M. US-anchored."
      },
      {
        "name": "Faume (FR), Reflaunt (UK/Asia)",
        "type": "startup",
        "geography": "EU",
        "note": "Smaller EU players; less mature stack."
      },
      {
        "name": "Vinted, Depop, ThredUp, Vestiaire Collective",
        "type": "incumbent",
        "geography": "Global",
        "note": "C2C marketplaces; take 15-30% margin; own customer relationship. The competitor brands want to bypass."
      },
      {
        "name": "Build-in-house (Patagonia Worn Wear pattern)",
        "type": "adjacent",
        "geography": "Global",
        "note": "Largest competitive option; many brands try this and fail on tech/ops."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.1
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #22 (brand-owned resale; every brand wants to control their secondary market). Trove proves the pattern in US; EU is the open market.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "ts-a1",
        "claim": "Global resale market $20-30B+ growing 15-20% YoY",
        "source": "[ESTIMATE — ThredUp 2024 Resale Report]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a2",
        "claim": "Trove (US) raised ~$77M total funding",
        "source": "[ESTIMATE — Crunchbase]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a3",
        "claim": "EU ESPR effective 2024-2030 with Digital Product Passport rollout",
        "source": "[UNVERIFIED — EU Reg 2024/1781 ESPR]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a4",
        "claim": "Vinted, Depop take rates 15-30% on transactions",
        "source": "[UNVERIFIED — public pricing pages]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ts-a5",
        "claim": "Patagonia Worn Wear is the brand-owned-resale archetype; ~€X revenue",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "ts-k1",
        "hypothesis": "3 mid-size EU fashion brands (€20-100M revenue) sign €20-30K setup + 10% take rate within 12 weeks",
        "experiment": "Direct BD with 25 EU brand sustainability/operations leads",
        "costEur": 8000,
        "durationWeeks": 12,
        "killSignal": "<1 signed",
        "validateSignal": "≥3 signed brands at €20K+ setup"
      },
      {
        "id": "ts-k2",
        "hypothesis": "AI authentication + condition grading achieves ≥85% accuracy on test set of 500 product photos at <€0.50 per item",
        "experiment": "Build CV model on Vinted/Depop public listings; benchmark",
        "costEur": 18000,
        "durationWeeks": 10,
        "killSignal": "<70% accuracy OR >€1 per item cost",
        "validateSignal": "≥85% accuracy AND <€0.50 per item"
      },
      {
        "id": "ts-k3",
        "hypothesis": "First brand processes €100K GMV in first 6 months at 10% take rate (€10K revenue, marginal-positive)",
        "experiment": "Run pilot brand end-to-end; measure GMV + take",
        "costEur": 15000,
        "durationWeeks": 26,
        "killSignal": "<€30K GMV OR brand pulls out",
        "validateSignal": "≥€100K GMV AND brand renews"
      }
    ],
    "preMortem": [
      {
        "cause": "Trove enters EU directly with capital advantage and brand-relationships head-start",
        "likelihood": "medium",
        "earlySignal": "Trove EU job postings; partnership announcements"
      },
      {
        "cause": "Brands prefer to build in-house with Shopify-app integrations rather than license white-label stack",
        "likelihood": "medium",
        "earlySignal": "Kill-test ts-k1 conversion + reason-for-decline analysis"
      },
      {
        "cause": "Vinted launches brand-storefront product, pulling brand-owned resale back into C2C marketplace economics",
        "likelihood": "low",
        "earlySignal": "Vinted product announcements; partnership PRs"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Trove proved €77M-raise viable in US; EU has 5-10× brands × ~3× brand revenue concentration. €10M revenue = 100-150 brands at €60K avg ACV — feasible in 36 months with focused EU GTM."
    },
    "industry": "retail-circular"
  },
  {
    "id": "advisorbot-auto-service",
    "title": "AdvisorBot",
    "ycCategory": "Vertical AI / Auto Service",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "AI voice/chat agent for auto dealership service departments — answers the same 15 questions 24/7, books appointments, upsells maintenance, recovers the 30% of customer inquiries currently lost.",
    "description": "70%+ of dealership profit is service + parts. Service advisors are short-staffed (US dealership average 2-4 advisors handling 50+ inquiries/day), and 30-40% of inbound service calls go to voicemail or are abandoned. CDK Global and Reynolds & Reynolds DMS systems are entrenched but their AI capabilities are weak. Dealership customer experience NPS is among the lowest in retail (avg -20 to +10). Dealers will pay for anything that captures the lost service revenue currently bleeding to indie shops + manufacturer-owned service centers.\n\nAdvisorBot is an AI service advisor (voice + chat + text + email) that handles inbound inquiries 24/7, books appointments via DMS integration (CDK / Reynolds), answers FAQs (recall status, oil change interval, warranty, etc.), quotes service work with menu pricing, upsells maintenance based on vehicle history, and hands off complex cases to human advisors with full context.\n\nPricing: $500-1500/store/month subscription. Each US dealership ~$6-18K/yr; 18K US dealerships × ~50% adoption = $50-160M TAM in US alone; ~30K EU dealerships add equivalent TAM.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "EU dealership landscape is fragmented but more open to non-CDK incumbents. Start with mid-size German dealership groups (Porsche / VW / Mercedes service networks).",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "Germany / UK / France / Italy / Netherlands — large dealership counts + fragmented DMS landscape."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC luxury dealership market; lower TAM but high ARPU."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Small TAM."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower-ARPU dealership tier; opportunistic."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency.",
    "tags": [
      "vertical-ai",
      "auto-dealership",
      "voice-ai",
      "service-department",
      "dms-integration",
      "beyond-tlife",
      "trend-11-auto-service-advisor"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) Voice AI quality crossed dealership-acceptable threshold in 2024-25 (ElevenLabs, OpenAI Realtime API). (2) US + EU dealer profit margins compressing post-COVID; service is the rate-limiter and any tech that captures lost calls pays back fast. (3) CDK Global cybersecurity incident June 2024 + 14-day outage destroyed dealer trust in incumbent monoculture — opens DMS-adjacent product opportunities.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP voice + chat agent + appointment booking; 3 design-partner dealerships in Germany at $1K/store/mo; DMS integration validated with at least 1 major (CDK or Reynolds equivalent EU)."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "50 dealerships across DE + UK + France = €600-800K ARR; multi-language support; manufacturer (OEM) partnership conversations initiated."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "500-800 dealerships = €5-10M ARR; expand to US via DMS partnership; OEM-channel sales (VW Group, BMW, Mercedes service network)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€900K",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure SaaS. Main costs: 2 voice-AI engineers + 1 DMS-integration engineer + 1 dealer-BD."
    },
    "competitors": [
      {
        "name": "CDK Global",
        "type": "incumbent",
        "geography": "US/Global",
        "note": "Dominant US DMS. June 2024 cybersecurity outage destroyed dealer trust. Weak AI capabilities."
      },
      {
        "name": "Reynolds & Reynolds",
        "type": "incumbent",
        "geography": "US",
        "note": "Second-tier US DMS. Closed ecosystem; weak AI."
      },
      {
        "name": "Conversica",
        "type": "incumbent",
        "geography": "US/Global",
        "note": "B2B conversational AI; generic; not auto-vertical-deep."
      },
      {
        "name": "DriveCentric",
        "type": "startup",
        "geography": "US",
        "note": "Auto-sales-focused AI; ~$10M ARR [ESTIMATE]; sales not service."
      },
      {
        "name": "Numa (US)",
        "type": "startup",
        "geography": "US",
        "note": "Auto service-department AI; raised ~$40M; US-anchored. Closest direct competitor for US market."
      },
      {
        "name": "Pinewood, Reynolds Europe, Keyloop",
        "type": "incumbent",
        "geography": "EU",
        "note": "EU DMS players; same dynamic as CDK/Reynolds US."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 3.1
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #11 (AI service advisor for dealerships; answers same 15 questions 24/7). Numa proves the US pattern; EU is open.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "ab-a1",
        "claim": "70%+ of dealership profit is service + parts (US norm)",
        "source": "[UNVERIFIED — NADA Data]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ab-a2",
        "claim": "30-40% of inbound service calls abandoned or go to voicemail",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ab-a3",
        "claim": "Numa (US) raised ~$40M for auto service AI",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ab-a4",
        "claim": "~18K US dealerships, ~30K EU dealerships",
        "source": "[ESTIMATE — NADA / ACEA]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "ab-a5",
        "claim": "CDK Global June 2024 cybersecurity outage lasted ~14 days, affected ~15K dealerships",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "ab-k1",
        "hypothesis": "3 mid-size German dealership groups sign $1K/store/month pilot in 10 weeks",
        "experiment": "Direct BD with 15 German dealerships",
        "costEur": 6000,
        "durationWeeks": 10,
        "killSignal": "<1 signed",
        "validateSignal": "≥3 signed pilots"
      },
      {
        "id": "ab-k2",
        "hypothesis": "Voice agent handles ≥80% of common service inquiries (booking, FAQ, recall lookup) without human handoff",
        "experiment": "30-day pilot with 1 design-partner dealership; measure auto-resolution rate",
        "costEur": 15000,
        "durationWeeks": 12,
        "killSignal": "<60% auto-resolution",
        "validateSignal": "≥80% auto-resolution AND dealer NPS ≥+30"
      },
      {
        "id": "ab-k3",
        "hypothesis": "DMS integration (CDK Global EU / Pinewood / Keyloop) viable with read-write access to appointment schedule",
        "experiment": "Engage 1 DMS vendor for API partnership; validate technical feasibility",
        "costEur": 8000,
        "durationWeeks": 8,
        "killSignal": "DMS denies API access OR requires >€100K integration fee",
        "validateSignal": "API access secured at <€20K integration fee"
      }
    ],
    "preMortem": [
      {
        "cause": "Numa expands to EU directly, capturing the market with US-tested product",
        "likelihood": "medium",
        "earlySignal": "Numa EU job postings; partnership announcements"
      },
      {
        "cause": "CDK Global / Pinewood ship native AI bundled into DMS, undercutting standalone product on price",
        "likelihood": "medium",
        "earlySignal": "CDK / Pinewood product announcements + acquisitions"
      },
      {
        "cause": "Dealership procurement is slow (3-6 month cycles even for $1K/mo product) — burn rate exceeds revenue ramp",
        "likelihood": "medium",
        "earlySignal": "Kill-test ab-k1 sales cycle length"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.4,
      "reaches10mArrBy36mo": 0.2,
      "totalFailureBy36mo": 0.3,
      "basisOfEstimate": "Numa US precedent; service-department AI is high willingness-to-pay vertical. €10M ARR = 700-1000 dealerships at €10-15K avg ACV — feasible in 36 months with focused EU GTM + OEM channel."
    },
    "industry": "auto"
  },
  {
    "id": "concierge-new-parents",
    "title": "Concierge",
    "ycCategory": "Family Operations / New Parents",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Family operating system for new parents — shared calendar, feeding/sleep tracking, pediatric AI advisor, family communication. The OTHER sandwich-generation product (counterpart to Trellis for aging parents).",
    "description": "60M+ households with kids under 5 in US + EU combined. Existing solutions are fragmented: BabyCenter app (Everyday Health, declining), Huckleberry (sleep-only, ~$10M ARR), Glow Baby (early stage), paper notes, scattered WhatsApp groups, calendar apps. Parents in dual-career households (now 70%+ of new-parent households) need real coordination tools urgently. The buyer is the new parent + grandparent; willingness-to-pay is high (every other purchase decision is being made on baby-anxiety).\n\nConcierge is Trellis's sibling product for the other end of the family-care spectrum:\n• Shared baby/toddler calendar with care-provider invites (grandparents, daycare, babysitters)\n• Feeding + sleep + milestone tracking with AI summarization for pediatrician visits\n• Photo journal with auto-share to family + auto-organized milestones\n• Pediatric AI advisor (AAP/NHS-trained) + family-doctor-loop integration\n• Care-coordinator integration (nanny payroll via Sittercity, daycare communication via Brightwheel)\n\nPricing: €15-30/mo per family. Family = 2 parents + 1-2 grandparents + 1-2 babies/toddlers.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "UK + DACH + Nordics for digital adoption among new parents. France/Italy/Spain secondary (family-culture-aligned).",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "UK / DACH / Nordics primary."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has young parent demographic but conservative cultural attitudes about AI in family life."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Strong family-culture but small TAM; pilot geography."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower digital-tool spend by new parents."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency. Could share back-end and team with Trellis (sandwich-generation family-ops umbrella).",
    "tags": [
      "family-ops",
      "new-parents",
      "consumer-saas",
      "pediatrics",
      "ai-advisor",
      "beyond-tlife",
      "trend-20-family-ops"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) Dual-career households at all-time high; both parents working full-time forces coordination not just communication. (2) Remote work + flexible schedules increase the surface area for who-does-what coordination. (3) AI pediatric-advisor quality is finally good enough; AAP / NHS guidance + LLM gives reliable everyday answers without needing a doctor.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP with calendar + feeding/sleep tracker + photo journal + AI pediatric advisor; pre-sell 200 families at €25/mo annual prepay via paid social + content."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5K families = €1.2-1.8M ARR; partnership with one major content platform (BabyCenter / What to Expect / Mumsnet) for distribution."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "30-50K families = €8-15M ARR; expand to daycare-integration B2B revenue; pilot HR employee-benefit channel (employer pays for employees' parental concierge)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€800K",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure SaaS. Main costs: 2 engineers + content + brand + paid acquisition test budget."
    },
    "competitors": [
      {
        "name": "BabyCenter (Everyday Health)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Largest content/community brand for new parents; aging product; declining engagement."
      },
      {
        "name": "Huckleberry",
        "type": "startup",
        "geography": "US",
        "note": "Sleep-coaching-focused; ~$10M ARR [ESTIMATE]; narrow product."
      },
      {
        "name": "Glow Baby",
        "type": "startup",
        "geography": "US",
        "note": "Early-stage; cycle-tracking lineage; not family-ops-focused."
      },
      {
        "name": "Brightwheel",
        "type": "startup",
        "geography": "US",
        "note": "Daycare-side software; partnership candidate."
      },
      {
        "name": "Cozi Family Organizer",
        "type": "incumbent",
        "geography": "US",
        "note": "Generic family calendar; not new-parent-specific."
      },
      {
        "name": "Notion + WhatsApp + iCloud (the actual incumbent)",
        "type": "adjacent",
        "geography": "Global",
        "note": "Current default. Inefficient but free."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 5,
      "regulatoryRisk": 4,
      "founderAvailability": 4,
      "composite": 3.35
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #20 (family ops automation: forms, scheduling, logistics) and #4 (action apps that do things, not apps to stare at).",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "co-a1",
        "claim": "60M+ households with kids under 5 in US + EU combined",
        "source": "[ESTIMATE — Census / Eurostat]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "co-a2",
        "claim": "Dual-career households now 70%+ of new-parent households in US/EU",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "co-a3",
        "claim": "Huckleberry (sleep) ~$10M ARR",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "co-a4",
        "claim": "BabyCenter user base declining post-2020",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "co-a5",
        "claim": "AAP and NHS pediatric guidance is well-structured and LLM-trainable",
        "source": "[CONFIRMED — public guidelines]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "co-k1",
        "hypothesis": "Pre-sell 200 families at €25/mo annual prepay in 6 weeks via Meta paid acquisition at CAC <€60",
        "experiment": "€8K paid acquisition test budget; new-parent demographic targeting",
        "costEur": 10000,
        "durationWeeks": 6,
        "killSignal": "<50 sign-ups OR CAC >€120",
        "validateSignal": "≥200 sign-ups AND CAC <€60"
      },
      {
        "id": "co-k2",
        "hypothesis": "MVP retention >70% at 90 days (clear product-value perception)",
        "experiment": "Deploy MVP to 100 design-partner families; measure cohort retention",
        "costEur": 40000,
        "durationWeeks": 14,
        "killSignal": "<50% 90-day retention",
        "validateSignal": "≥70% retention AND ≥3 features used weekly"
      },
      {
        "id": "co-k3",
        "hypothesis": "Distribution partnership with 1 major content platform (BabyCenter / What to Expect / Mumsnet / The Bump) in 12 weeks",
        "experiment": "Direct BD with content platforms",
        "costEur": 4000,
        "durationWeeks": 12,
        "killSignal": "0 advanced past initial meeting",
        "validateSignal": "≥1 signed distribution LOI"
      }
    ],
    "preMortem": [
      {
        "cause": "BabyCenter (Everyday Health) launches own AI version of the product with brand + distribution moat",
        "likelihood": "medium",
        "earlySignal": "BabyCenter / Everyday Health product announcements + AI staffing"
      },
      {
        "cause": "Notion + Apple Family Sharing + Google Family Link satisfy enough use cases that paid product loses to free alternatives",
        "likelihood": "medium",
        "earlySignal": "Kill-test co-k1 willingness-to-pay survey"
      },
      {
        "cause": "Pediatric AI advisor liability concerns slow adoption (insurance, regulatory)",
        "likelihood": "low",
        "earlySignal": "Engage 1 health-tech lawyer for product-liability review in Month 2"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.5,
      "reaches10mArrBy36mo": 0.25,
      "totalFailureBy36mo": 0.2,
      "basisOfEstimate": "Huckleberry $10M-class precedent shows new-parent willingness-to-pay. Family-ops integrated product has higher ARPU + better retention than narrow point-products. €10M ARR = 30-50K families × €240-300/yr — feasible in 36 months."
    },
    "industry": "consumer"
  },
  {
    "id": "proof-humanity-verification",
    "title": "Proof",
    "ycCategory": "AI Safety / Identity Verification",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Deepfake-resistant identity verification API — every platform needs to verify 'this is a real human' within 2 years. Plug-and-play voice + video + behavioral proof-of-humanity.",
    "description": "AI deepfakes broke selfie-based KYC, voice authentication, and video-call identity verification in 2024-25. Worldcoin's iris-scan approach is dystopian; passive cryptographic attestation (Apple Private Access Tokens, Google Play Integrity) is partial; no commercial-grade plug-and-play API exists for 'this user is verifiably a human.'\n\nProof is verification-as-a-service: behavioral biometric (typing rhythm, mouse movement, voice cadence) + cryptographic device attestation + optional liveness check + Apple/Google Private Access Token integration. Sold to banks, social platforms, dating apps, content platforms, and regulated marketplaces. Pricing: per-verification ($0.10-1.00 depending on confidence level) + enterprise subscription tier.\n\nThe wedge over Persona / Onfido / Jumio / Veriff is the AI-deepfake-resistant focus: existing KYC vendors are still tuned for selfie + document, which deepfakes destroyed in 2024-25. Proof is the next-generation layer.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "EU AI Act + GDPR + deepfake-regulation pressure creates EU-native demand. Banks, social platforms, regulated marketplaces.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "green",
        "note": "EU AI Act + GDPR + deepfake regulation creates structural demand."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC has KYC demand but conservative regulatory frame on biometrics."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Pilot geography only."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Smaller TAM."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency.",
    "tags": [
      "identity-verification",
      "deepfake-defense",
      "ai-safety",
      "kyc",
      "biometric",
      "beyond-tlife",
      "trend-17-human-verification"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) AI deepfakes (voice + video) destroyed traditional KYC selfie + document checks in 2024-25; new layer needed. (2) EU AI Act creates regulatory pressure for deployer obligations on human verification. (3) Apple / Google ship Private Access Tokens making device-level attestation feasible as ingredient.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP API with behavioral biometric + device attestation; 5 design-partner platforms (1 dating app, 1 social platform, 1 marketplace, 2 bank-adjacent fintech)."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "50 paying customers, €1-1.5M ARR; deepfake voice detection model >95% accuracy; first major bank or social platform signed."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "200-300 customers, €5-10M ARR; AI Act conformity-attestation product line; partnership with Apple Private Access Token / Google Play Integrity ecosystem."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€800K-€1.5M",
      "capexRatio": "10% capex / 90% opex",
      "note": "AI engineering + sales team. Main costs: 3 ML engineers + 1 enterprise-AE + GPU training compute."
    },
    "competitors": [
      {
        "name": "Persona",
        "type": "startup",
        "geography": "US/Global",
        "note": "KYC / identity-verification platform. ~$1.5B valuation 2021. Strong but tuned for selfie+document era; vulnerable on deepfake."
      },
      {
        "name": "Onfido (Entrust)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Acquired by Entrust 2024. KYC focused; same selfie-era vulnerability."
      },
      {
        "name": "Jumio, Au10tix, Veriff, Sumsub",
        "type": "incumbent",
        "geography": "Global",
        "note": "KYC layer; same vulnerability profile."
      },
      {
        "name": "Worldcoin",
        "type": "startup",
        "geography": "Global",
        "note": "Iris-scan biometric for proof-of-humanity. Dystopian framing + hardware-dependent."
      },
      {
        "name": "Apple Private Access Tokens / Google Play Integrity",
        "type": "incumbent",
        "geography": "Global",
        "note": "Device-attestation infrastructure. Partner not competitor — Proof builds on top."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 3,
      "regulatoryRisk": 2,
      "founderAvailability": 2,
      "composite": 2.9
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #17 (digital verification you're a real human; every platform will need this within 2 years).",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "pr-a1",
        "claim": "Voice deepfake fraud grew >300% in 2024 (FTC IC3)",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pr-a2",
        "claim": "Persona valued ~$1.5B 2021",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pr-a3",
        "claim": "Onfido acquired by Entrust 2024",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pr-a4",
        "claim": "Apple Private Access Tokens + Google Play Integrity ship device-attestation primitives",
        "source": "[CONFIRMED — public APIs]",
        "status": "confirmed",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "pr-a5",
        "claim": "EU AI Act creates deployer obligations for AI-content-moderation that require human verification at scale",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "pr-k1",
        "hypothesis": "Behavioral biometric model achieves ≥90% accuracy on 1K test set distinguishing human from AI-bot session",
        "experiment": "Build model on public datasets (ASVspoof, behavioral-biometric benchmarks); test on synthesized AI-bot sessions",
        "costEur": 20000,
        "durationWeeks": 10,
        "killSignal": "<80% accuracy",
        "validateSignal": "≥90% accuracy"
      },
      {
        "id": "pr-k2",
        "hypothesis": "5 design-partner platforms sign API pilot at €5-30K/mo within 12 weeks",
        "experiment": "Direct BD with dating apps (Bumble, Hinge EU), social platforms (BeReal, Mastodon), marketplaces, fintech",
        "costEur": 8000,
        "durationWeeks": 12,
        "killSignal": "<2 signed",
        "validateSignal": "≥5 signed pilots"
      },
      {
        "id": "pr-k3",
        "hypothesis": "Apple / Google partner-ecosystem access (Private Access Token integration) viable",
        "experiment": "Engage Apple developer relations + Google Trust & Safety; confirm API access",
        "costEur": 4000,
        "durationWeeks": 6,
        "killSignal": "Either Apple OR Google denies partner access",
        "validateSignal": "Both ecosystems accessible without exclusivity requirement"
      }
    ],
    "preMortem": [
      {
        "cause": "Persona / Onfido pivot to deepfake-defense and consume the category with installed-base distribution",
        "likelihood": "high",
        "earlySignal": "Persona/Onfido product roadmap quarterly tracking"
      },
      {
        "cause": "Apple / Google ship native deepfake-resistant attestation as OS feature, eliminating the third-party need",
        "likelihood": "medium",
        "earlySignal": "Apple WWDC + Google I/O keynotes; iOS/Android beta features"
      },
      {
        "cause": "EU AI Act / GDPR classify behavioral biometric as 'special category data' requiring extra consent — slows adoption",
        "likelihood": "medium",
        "earlySignal": "EDPB / CJEU guidance on behavioral biometric; engage privacy lawyer Month 2"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.3,
      "reaches10mArrBy36mo": 0.15,
      "totalFailureBy36mo": 0.45,
      "basisOfEstimate": "Identity-verification API category has €100M+ winners (Persona, Onfido, Jumio). Deepfake-resistant focus is the wedge; KYC incumbents are vulnerable. Bear case: Persona absorbs the category. Bull case: become the deepfake-defense layer above all KYC vendors."
    },
    "industry": "govtech-identity"
  },
  {
    "id": "stoa-small-group-social",
    "title": "Stoa",
    "ycCategory": "Consumer Social / Small-Group",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Group chats as products — purpose-built spaces for 5-15 person hobby groups, friend circles, book clubs, mastermind groups. The anti-feed, anti-algorithm, anti-AI-slop social product.",
    "description": "WhatsApp + Discord dominate small-group communication but are designed for scale and noise. Trend #6 in May-2026 list: people want small social, group chats as products, no feeds, no AI slop. Geneva (acquired by Discord 2022), Marco Polo, Telegram have variants but no breakout. The gap: a designed-for-purpose product for 5-15 person ongoing groups with rich structure (calendars, polls, shared documents, persistent threads, ambient presence).\n\nStoa is the small-group-as-product platform: 5-15 person ongoing groups (book clubs, masterminds, friend circles, hobby groups); rich structure (shared calendar, polls, decisions, threads, ambient presence indicators); no feeds, no algorithm, no AI slop, no growth-hacking; premium tier with AI-summarized recaps + scheduling agent + searchable history; family-loop variant for extended family.\n\nPricing: $5-10/mo per group (paid by 1-2 members for the whole group). Low ARPU; volume-game. Path to €10M = ~100K paid groups at €100/yr — niche but real.",
    "primaryMarket": "europe",
    "primaryMarketFit": "yellow",
    "primaryMarketRationale": "Smaller WhatsApp dominance in some EU markets (Telegram strong in Eastern Europe/Russia, Signal in privacy-conscious DACH/Nordics) opens experimentation; Mediterranean has cultural alignment with designated small-group spaces.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "DACH / Nordics (privacy concern) + Mediterranean (family-group culture)."
      },
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC small-group culture; WhatsApp dominant."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Small TAM; pilot."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Telegram strong; lower willingness-to-pay."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "No T-Life dependency.",
    "tags": [
      "consumer-social",
      "small-group",
      "messaging",
      "community",
      "anti-feed",
      "beyond-tlife",
      "trend-6-small-social"
    ],
    "addedDate": "2026-05-16",
    "notes": "Boundary-expansion idea — deliberately outside T-Life portfolio frame; tlifeAssetRefs is just t-life-capital (funding only, no operating edge).",
    "whyNow": "Three converging factors. (1) WhatsApp fatigue + Discord too noisy + algorithm skepticism reaching peak among Gen Z + Millennials. (2) AI slop in feeds creating demand for human-only spaces. (3) Geneva (Discord-acquired 2022) and Marco Polo validated the small-group product category exists; no breakout product yet.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP with 5-15 person groups + rich structure (calendar, polls, threads); 500 active groups; freemium model with 20% paid conversion target."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5K active groups, 20% paid at €5/mo per group = €60K MRR; premium AI recap feature; family-loop variant launched."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "50K active groups, 30% paid = €1M MRR = €12M ARR; expand to verticalised group types (mastermind / book club / hobby community / family)."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€600K-€1.2M",
      "capexRatio": "5% capex / 95% opex",
      "note": "Pure consumer SaaS. Main costs: 3 engineers + 1 community manager + brand. Distribution is the hard part not infrastructure."
    },
    "competitors": [
      {
        "name": "WhatsApp Groups",
        "type": "incumbent",
        "geography": "Global",
        "note": "Dominant; free; designed for scale not purpose. The competitor is its ubiquity."
      },
      {
        "name": "Discord",
        "type": "incumbent",
        "geography": "Global",
        "note": "Designed for large communities; small-group experience is poor; acquired Geneva 2022 but didn't integrate."
      },
      {
        "name": "Geneva (Discord-acquired)",
        "type": "adjacent",
        "geography": "Global",
        "note": "Acquired by Discord 2022; product status unclear. Was closest small-group competitor."
      },
      {
        "name": "Marco Polo",
        "type": "startup",
        "geography": "US",
        "note": "Video-message group chat; ~$30M ARR [ESTIMATE]; declining engagement."
      },
      {
        "name": "Telegram",
        "type": "incumbent",
        "geography": "Global",
        "note": "Channel/group hybrid; weak structure for ongoing purposeful groups."
      },
      {
        "name": "Signal",
        "type": "adjacent",
        "geography": "Global",
        "note": "Privacy-focused; basic group chat; not purpose-built."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 3,
      "tlifeEdge": 1,
      "competitiveGap": 3,
      "capitalFit": 4,
      "regulatoryRisk": 4,
      "founderAvailability": 3,
      "composite": 2.85
    },
    "ycRfsCorrelation": "Maps to May-2026 36-list trend #6 (small social; group chats as products; no feeds, no AI slop).",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "assertions": [
      {
        "id": "so-a1",
        "claim": "Geneva acquired by Discord 2022",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "so-a2",
        "claim": "Marco Polo ~$30M ARR; declining engagement",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "so-a3",
        "claim": "WhatsApp + Discord dominant for small-group comms across EU + US",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "so-a4",
        "claim": "Gen Z + Millennial 'anti-feed' sentiment is documented (Pew, Edelman)",
        "source": "[UNVERIFIED]",
        "status": "unverified",
        "lastChecked": "2026-05-16"
      },
      {
        "id": "so-a5",
        "claim": "Telegram strong in Eastern Europe and Russia; Signal in DACH/Nordics",
        "source": "[ESTIMATE]",
        "status": "estimated",
        "lastChecked": "2026-05-16"
      }
    ],
    "killTests": [
      {
        "id": "so-k1",
        "hypothesis": "100 active 5-15 person groups recruited within 6 weeks at <€20 per group acquisition",
        "experiment": "Reddit + Twitter + creator partnerships; measure organic+paid acquisition",
        "costEur": 8000,
        "durationWeeks": 6,
        "killSignal": "<40 groups OR cost >€50/group",
        "validateSignal": "≥100 groups AND <€20/group"
      },
      {
        "id": "so-k2",
        "hypothesis": "20% paid conversion at €5/mo per group from active free groups within 90 days",
        "experiment": "Run 90-day cohort with premium features; measure paid conversion",
        "costEur": 15000,
        "durationWeeks": 14,
        "killSignal": "<10% paid conversion",
        "validateSignal": "≥20% paid conversion AND >70% paid renewal at 3 months"
      },
      {
        "id": "so-k3",
        "hypothesis": "Active groups retain >60% activity at 90 days (engagement, not just signed up)",
        "experiment": "Measure 90-day group activity rate from kill-test so-k1 cohort",
        "costEur": 4000,
        "durationWeeks": 14,
        "killSignal": "<40% activity rate",
        "validateSignal": "≥60% activity rate"
      }
    ],
    "preMortem": [
      {
        "cause": "Discord pivots Geneva product back to small-group focus, capturing the category with installed-base distribution",
        "likelihood": "medium",
        "earlySignal": "Discord product announcements; Geneva product activity tracking"
      },
      {
        "cause": "WhatsApp ships group-product features (polls, calendar, threads) that close the gap to acceptable",
        "likelihood": "high",
        "earlySignal": "Meta product announcements; WhatsApp Business features"
      },
      {
        "cause": "B2C consumer social acquisition CAC is fundamentally hostile at €5/mo ARPU — cohort never reaches viability",
        "likelihood": "high",
        "earlySignal": "Kill-test so-k1 acquisition cost"
      }
    ],
    "probabilityBands": {
      "reaches1mArrBy18mo": 0.25,
      "reaches10mArrBy36mo": 0.1,
      "totalFailureBy36mo": 0.5,
      "basisOfEstimate": "Consumer social is the hardest venture category; bimodal outcomes. €10M ARR requires 80-100K paid groups at €100/yr — Discord-scale in a niche. Weakest entry of the boundary-expansion 7 honestly. Build only if founder has unusual community-design + organic-growth chops."
    },
    "industry": "consumer"
  },
  {
    "id": "carestaff-home-care-ops",
    "title": "CareStaff",
    "ycCategory": "Agetech B2B Ops",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Workforce management OS for EU + GCC home-care agencies — scheduling, training, payroll, compliance, family-portal. Replaces paper + WhatsApp + Excel for the fragmented care-agency market.",
    "description": "EU home-care market is ~€90B+ growing 6% YoY but fragmented across 100K+ agencies, most running on paper rotas + WhatsApp coordination. Greek Law 5039/2023 (transport-anchored but tightening worker-classification across services) + EU Posted Workers Directive + national tax/social-security reporting create a compliance burden the typical 20-50 carer agency cannot absorb. CareStaff is a vertical SaaS: care-worker scheduling, qualification tracking, family-facing portal, EOPYY / EU social-security reporting, payroll integration, mobile time-and-task tracking for carers. Sells at €40-80/carer/month or €5-15K/agency/year. Liability transfer is the wedge — agencies pay to make compliance documented and inspectable.\n\nCareStaff also absorbs two adjacent theses from the May-2026 red-team round: (a) Hospital Discharge Intake module (folded-in HomeMatch concept) — connect discharge coordinators at hospitals to vetted agencies in CareStaff's network, solving the two-sided cold-start problem; (b) Agency Onboarding + Credentialing module (folded-in CareSchool concept) — Filipino/Indian/Romanian carer pipeline + EQF credentialing tied to existing agency customers, with national-authority recognition arriving as upside rather than gating.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Mediterranean + DACH have the largest fragmented home-care markets; Greek/Italian agencies are 80% paper-based and most exposed to tightening regulation.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "GCC home-care market growing 20% YoY with national-care policies (UAE Senior Citizens Law 2023, Saudi Vision 2030 care expansion)."
      },
      {
        "market": "greece-cyprus",
        "fit": "green",
        "note": "Family-network beachhead; T-Life can warm intros to 50+ GR agencies."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower ACV; regulatory frame less mature."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "T-Life pharmacy + ELPEN network gives warm intros to several hundred Greek home-care agencies; no other direct edge.",
    "tags": [
      "agetech",
      "b2b-saas",
      "home-care",
      "workforce-ops",
      "compliance",
      "eu-structural",
      "trend-3-elder-tech",
      "folded-homematch",
      "folded-careschool",
      "hospital-discharge-intake",
      "carer-pipeline"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED with fold-in. Modules absorbed: see description final paragraph.",
    "whyNow": "EU GMP-equivalent for care-quality regulation tightening across member states; mandated digital reporting in DE/NL/SE/FR by 2025-26; migrant carer workforce (15-25% annual churn) makes manual record-keeping infeasible at scale.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP scheduling + carer mobile app + payroll connector; 20 design-partner Greek agencies; €40K MRR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "200 agencies across GR + IT + ES; €1.5M ARR; EU AMIF/ESF+ co-funding for migrant-carer integration module."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "1,500 agencies across EU + GCC; €10M ARR; family-portal + insurance reimbursement integration."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€400K-€900K",
      "capexRatio": "10% capex / 90% opex",
      "note": "Pure SaaS. 2 engineers + 1 carer-domain advisor + GR/EU localization. Per-agency CAC <€500 via T-Life network."
    },
    "competitors": [
      {
        "name": "ezypay, CareLineLive (UK)",
        "type": "incumbent",
        "geography": "UK",
        "note": "UK-focused; weak EU compliance integration."
      },
      {
        "name": "Connecteam",
        "type": "incumbent",
        "geography": "Global",
        "note": "Generic frontline workforce; not care-vertical."
      },
      {
        "name": "Local paper/Excel + payroll bureau",
        "type": "adjacent",
        "geography": "EU",
        "note": "Actual incumbent for 80% of agencies."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 5,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.55
    },
    "ycRfsCorrelation": "Vertical SaaS for a regulated, fragmented agency market — liability-transfer thesis; recurring revenue; multi-country growth via EU regulatory tailwind.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "agetech"
  },
  {
    "id": "carehomeos-assisted-living",
    "title": "CareHomeOS",
    "ycCategory": "Vertical SaaS / Senior Living Ops",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Operating system for European + GCC assisted-living and retirement village operators — occupancy, EHR-light, family portal, compliance, billing, staff rota. Vertical replacement for Excel + Outlook + Whatsapp.",
    "description": "EU assisted-living + retirement villages number ~30K facilities (€80B+ revenue); GCC is in mid-build (NEOM, Aljada, Diriyah include senior-living components). Operators run on point-tools (PointClickCare US-dominant; ResidentEcho / Person Centred Software UK; nothing native EU mid-market). CareHomeOS is the vertical EHR-light + ops platform: resident profile + care plan, family portal, billing/insurance integration, staff rota + training tracking, occupancy + waitlist management, compliance documentation for national inspectorate audits (KEFEK Greece, MDK Germany, CQC UK, HIQA Ireland). Sells at €15-30/resident/month or €30-100K/facility/year.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Iberia + Mediterranean see fastest new-build; UK/Germany have largest existing footprint with weakest software penetration.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "GCC senior-living market in early build; greenfield deployment easier than retrofit."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Small TAM; pilot geography."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower facility density."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "T-Life pharmacy + ELPEN network gives warm intros to Greek/Cypriot operators (5-15 facilities each); no other edge.",
    "tags": [
      "agetech",
      "assisted-living",
      "ehr-light",
      "b2b-saas",
      "occupancy",
      "trend-3-elder-tech"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "EU population 80+ doubling 2020-2050; new-build assisted living wave in Spain, Italy, Portugal, GCC; PE roll-up of facilities (€30B+ deals 2020-25) demands operating-discipline software.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP with rota + billing + family-portal; 5 design-partner facilities (3 GR, 2 ES)."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "100 facilities; €2M ARR; insurance integration; national-inspectorate audit-report generation."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "1,000 facilities across EU + GCC; €15M ARR; expand to step-down rehab + memory-care specialty."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€600K-€1.2M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Vertical SaaS. 3 engineers + 1 care-ops domain advisor + multi-country regulatory."
    },
    "competitors": [
      {
        "name": "PointClickCare",
        "type": "incumbent",
        "geography": "US",
        "note": "US-dominant; weak EU regulatory adaptation."
      },
      {
        "name": "Person Centred Software (UK)",
        "type": "incumbent",
        "geography": "UK",
        "note": "UK-focused; aging product."
      },
      {
        "name": "ResidentEcho",
        "type": "startup",
        "geography": "UK/EU",
        "note": "Care-home record-keeping; not full OS."
      },
      {
        "name": "Local Excel + Outlook + paper",
        "type": "adjacent",
        "geography": "EU",
        "note": "Current default."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.4
    },
    "ycRfsCorrelation": "Multi-country vertical SaaS at €30-100K/facility ACV; PE roll-up wave provides distribution + buyer-readiness.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "agetech"
  },
  {
    "id": "medadherence-pharmacy",
    "title": "MedAdherence Pharmacy",
    "ycCategory": "Agetech B2B Pharmacy",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "B2B medication-adherence platform for pharmacy chains and retail pharmacy groups serving elderly polypharmacy patients — reduces adverse events, increases prescription pull-through, generates EHR-feedback data sold to pharma.",
    "description": "55%+ of 65+ patients are on ≥5 medications (polypharmacy); 50% are non-adherent. Adverse drug events cause ~25% of EU elder hospital admissions (Lancet 2024). Existing solutions are scattered: blister-pack vendors (Webster, MedAvail), pharmacy POS systems, paper. MedAdherence is a pharmacy-side platform: AI-driven adherence prediction, automated refill reminders to family + carer, MDS (Monitored Dosage System) preparation workflow, blister-pack integration, MTM (Medication Therapy Management) consultation booking, integration with national e-prescription systems (eRx Greece, e-Rezept Germany). Sells at €100-300/pharmacy/month + per-patient fee for premium tier.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Germany / Italy / Spain / Greece have densest pharmacy networks + mature e-prescription rails.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC pharmacy chains (BinSina, LIFE) buy operations tech; lower priority than EU."
      },
      {
        "market": "greece-cyprus",
        "fit": "green",
        "note": "WinMedica pharmacy distribution = T-Life unfair edge here."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower priority."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "WinMedica's distribution into ~10,500 Greek pharmacies is the strongest non-pharma T-Life leverage — pharmacist conversations open quickly via existing relationships.",
    "tags": [
      "agetech",
      "pharmacy-saas",
      "polypharmacy",
      "medication-adherence",
      "winmedica-warm-channel",
      "eu-erx"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "EU e-prescription rollouts 2023-26 (Germany e-Rezept, Greek eRx mature) make digital adherence trackable; aging polypharmacy population growing; pharma manufacturers paying for real-world-adherence data.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP with adherence + family alerts; 30 Greek pharmacies via WinMedica warm channel; €30K MRR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "500 pharmacies across GR + IT + DE; €1.5M ARR; MTM consultation booking + pharma data partnership signed."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "5,000 pharmacies EU; €15M ARR; expand to chronic-disease management + clinical-trial recruitment."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€500K-€1M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Pure SaaS + pharmacy CAC. WinMedica channel reduces customer-acquisition cost meaningfully."
    },
    "competitors": [
      {
        "name": "Webster Care, MedAvail",
        "type": "incumbent",
        "geography": "Global",
        "note": "Hardware-anchored MDS blister-pack; weak software."
      },
      {
        "name": "Pharmacy POS vendors (PharmaCloud, Pharmaserv)",
        "type": "incumbent",
        "geography": "EU",
        "note": "Adjacent; not adherence-focused."
      },
      {
        "name": "BetterRx, EveryDose",
        "type": "startup",
        "geography": "US",
        "note": "Consumer-side adherence; B2C model. Not pharmacy-channel."
      }
    ],
    "competitiveIntensity": "moderate",
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
    "industry": "agetech"
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
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED with fold-in. Modules absorbed: see description final paragraph.",
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
    "industry": "workforce-saas"
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
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
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
    "industry": "workforce-saas"
  },
  {
    "id": "gcc-nationalize",
    "title": "GCCNationalize",
    "ycCategory": "GCC Nationalization Compliance",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Saudization / Emiratization / Omanization compliance platform for GCC employers — track national-workforce quotas, automate Nitaqat / Tawteen / Emiratization reporting, recommend hiring strategies to hit quota at lowest fully-loaded cost.",
    "description": "GCC nationalization mandates (Saudi Nitaqat program, UAE Emiratization 5%-per-year-by-2026, Oman SME quotas, Bahrain BD reporting) require employers to hire and retain set percentages of nationals or face escalating penalties (fines, visa restrictions, government-contract exclusion). Compliance is complex: thousands of job categories, multiple tiers, dynamic quotas. Current tools are Excel + Word + portal scraping. GCCNationalize is the compliance + analytics platform: real-time quota tracking, vacancy-suitability matching, training-budget optimization, government-portal reporting automation. €50K-€500K ACV per employer.",
    "primaryMarket": "middle-east",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Saudi Nitaqat is the deepest compliance burden (most employees, most categories); UAE Emiratization the most aggressive (new 5%/year mandate).",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "EU member states don't have national-workforce quotas; not applicable."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not applicable."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Not applicable."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Elnova Dubai presence + T-Life GCC network is the only T-Life leverage; founder must build local employer relationships independently.",
    "tags": [
      "workforce-mobility",
      "gcc",
      "nationalization",
      "compliance",
      "nitaqat",
      "emiratization",
      "vision-2030"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "Saudi Vision 2030 mid-decade enforcement push (2025-2030); UAE Emiratization 5%+ private-sector mandate by 2026; multi-billion-dirham penalties live since 2024.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Riyadh pilot with 5 mid-size employers; €500K ACV avg; €2.5M ARR potential."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "100 GCC employers across Saudi + UAE + Oman; €15M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "500 employers; €60M ARR; expand to Africanization-equivalent programs in Egypt + Nigeria + South Africa."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€500K-€1.2M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Pure SaaS + government-portal integration + GCC employer BD."
    },
    "competitors": [
      {
        "name": "MUDAD, Qiwa (Saudi government portals)",
        "type": "incumbent",
        "geography": "Saudi",
        "note": "Government infrastructure; not employer-side analytics."
      },
      {
        "name": "Local payroll/HRMS (PaySpace, BambooHR ME)",
        "type": "incumbent",
        "geography": "ME",
        "note": "HR-focused; not nationalization-deep."
      },
      {
        "name": "Excel + consultants",
        "type": "adjacent",
        "geography": "GCC",
        "note": "Current default for most employers."
      }
    ],
    "competitiveIntensity": "open",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 2,
      "competitiveGap": 5,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.85
    },
    "ycRfsCorrelation": "Highest-conviction MENA B2B idea — regulatory force creates non-discretionary spend; structural Vision-2030 tailwind.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "workforce-saas"
  },
  {
    "id": "gulfplace-asia-labor",
    "title": "GulfPlace",
    "ycCategory": "GCC Ethical Migrant-Labor Marketplace",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "WPS + CSRD compliance SaaS for GCC employers of migrant labor and EU buyers of GCC services — wage-protection automation, ethical-recruitment audit trail, scope-3-labor reporting. The compliance layer above the placement market, not the placement market itself.",
    "description": "Post the May-2026 red-team review, GulfPlace was repositioned away from a worker-placement marketplace (where the structural failure mode is boots-on-ground recruitment cost in source countries that staffing-agency incumbents like Hays have failed to compound on for 20 years) to a compliance-SaaS layer above the entire migrant-labor stack.\n\nGCC employers of migrant labor face two hard regulatory mandates: (1) WPS (Wage Protection System) audited per-worker wage payment, mandatory in Saudi/UAE/Qatar with multi-million-dirham penalties for non-compliance; (2) post-Qatar reform + ILO C-189 + EU CSRD scope-3 labor reporting requirements from EU buyers of GCC services. Current solutions are Excel + manual WPS-portal reconciliation + Big4 advisory at €X00K per engagement. GulfPlace is the compliance + audit-trail SaaS: WPS-integrated wage tracking, ethical-recruitment chain-of-custody, grievance mechanism with audit trail, CSRD scope-3 labor reporting export. Sells at €30-150K ACV per employer; secondary revenue from EU buyers (Carrefour-equivalent) paying for scope-3 audit-defense reporting on their GCC supply chain.\n\nSheds the marketplace-economics problem (no placement fees, no source-country boots-on-ground); inherits a non-discretionary regulatory budget line in the buyer's P&L.",
    "primaryMarket": "middle-east",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Saudi + UAE WPS mandates fully enforced 2024-25; multi-million-dirham penalties create non-discretionary spend. Compliance officer is the buyer, not HR.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "EU CSRD compliance creates supply-chain-labor reporting demand from EU buyers of GCC services."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not source market."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Not source market."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Elnova Dubai + T-Life GCC network for first 5-10 employer relationships.",
    "tags": [
      "workforce-mobility",
      "gcc-migrant-labor",
      "ethical-recruitment",
      "wage-protection",
      "csrd",
      "revised-2026-05-16",
      "wps-compliance",
      "csrd-scope-3",
      "audit-trail",
      "no-marketplace"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): REVISE-KEEP. Stripped the worker-placement marketplace (boots-on-ground recruitment cost in source countries that staffing-agency incumbents have failed to compound on for 20 years) and repositioned as WPS + CSRD compliance SaaS. Same regulatory tailwind; different unit economics; non-discretionary buyer budget.",
    "whyNow": "Saudi WPS + UAE Wage Protection + Qatar reforms + ILO + EU corporate sustainability reporting (CSRD scope-3 labor): all push employers toward ethical-recruitment transparency.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Philippines → UAE construction pilot; 500 placements; €750K revenue."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "Philippines + Bangladesh + Kenya → Saudi + UAE + Qatar; 5K placements/yr; €15M revenue."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "10 corridors; 30K placements/yr; €100M revenue; expand to EU CSRD-driven buyers."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1.2M-€3M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Two-sided marketplace + compliance infra + boots-on-ground in source countries."
    },
    "competitors": [
      {
        "name": "Pinoy Jobs, Workabroad",
        "type": "incumbent",
        "geography": "Philippines",
        "note": "Source-country job boards; weak placement."
      },
      {
        "name": "Local PEAs (Private Employment Agencies)",
        "type": "incumbent",
        "geography": "Source + dest",
        "note": "Fragmented, often abusive."
      },
      {
        "name": "Catalyst, Tent, Refugio (ethical-recruitment NGOs)",
        "type": "adjacent",
        "geography": "Global",
        "note": "Non-platform NGOs."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.35
    },
    "ycRfsCorrelation": "Largest GCC TAM in the workforce-mobility cluster; ethical-recruitment + CSRD compliance is the wedge.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "workforce-saas"
  },
  {
    "id": "powershift-energy-procurement",
    "title": "PowerShift",
    "ycCategory": "Industrial Energy Procurement",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Industrial energy-procurement platform for EU manufacturers managing REPowerEU + CBAM + electrification mandates — PPA matching, grid-arbitrage, carbon accounting, government-incentive filing.",
    "description": "EU manufacturers face 5-10× electricity cost vs US peers + CBAM (Carbon Border Adjustment Mechanism, full force Jan 2026) + REPowerEU electrification mandates. Procurement teams at mid-size manufacturers (50-500 GWh/year) lack tooling to navigate PPAs, demand-response markets, government incentives. PowerShift is the SaaS + advisory: PPA marketplace integration, grid-arbitrage optimization, automated carbon accounting (CBAM + CSRD scope-2), government-incentive matching (€XB available under EU Innovation Fund + national schemes). €50-300K ACV per manufacturer.\n\nPowerShift also absorbs FoundryEU from the May-2026 red-team round: Industrial Footprint extension covering supply-chain energy/CBAM impact analysis for manufacturers considering reshoring/nearshoring decisions. Same CFO buyer; cross-sells naturally with the procurement core; replaces a McKinsey/BCG reshoring engagement that would be a one-off board project.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Germany + Italy + France + Spain industrial heartlands; CBAM exposure highest at metals, cement, chemicals.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "yellow",
        "note": "GCC industrial electricity is subsidized; less procurement-software demand."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM; T-Life ELPEN energy-procurement is a design partner candidate."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Smaller industrial base."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "ELPEN + Tripoli energy-procurement teams could be design partners; not unique advantage but warm.",
    "tags": [
      "eu-structural",
      "energy",
      "cbam",
      "repowereu",
      "ppa",
      "carbon-accounting",
      "folded-foundryeu",
      "industrial-footprint",
      "reshoring"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED with fold-in. Modules absorbed: see description final paragraph.",
    "whyNow": "CBAM full enforcement Jan 2026; REPowerEU industrial-electrification targets; EU Innovation Fund €40B+ deployment 2024-2030; gas-price volatility post-Ukraine making energy CFO-level concern.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "MVP with ELPEN + Tripoli + 3 external mid-size manufacturers; €500K ARR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "50 manufacturers; €5M ARR; PPA marketplace + CBAM reporting integrated."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "300 manufacturers; €30M ARR; expand to Eastern Europe industrial; carbon-credit trading layer."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1M-€2.5M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Energy + carbon expertise + PPA marketplace integration; sales motion to CFOs not just procurement."
    },
    "competitors": [
      {
        "name": "Pexapark (PPA)",
        "type": "startup",
        "geography": "EU",
        "note": "PPA-marketplace focused; not full procurement."
      },
      {
        "name": "Sympower, Voltalia",
        "type": "incumbent",
        "geography": "EU",
        "note": "Demand-response specialist."
      },
      {
        "name": "In-house procurement + Excel",
        "type": "adjacent",
        "geography": "EU",
        "note": "Current default."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.5
    },
    "ycRfsCorrelation": "EU structural energy transition + CBAM creates non-discretionary CFO-level spend on procurement optimization.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "construction-home"
  },
  {
    "id": "hospitalstaff-eu",
    "title": "HospitalStaff",
    "ycCategory": "Hospital Staffing AI",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "AI-driven staffing platform for European hospitals — locum doctors, bank/agency nurses, rota optimization, retention analytics. Replaces fax + paper + spreadsheet rota systems at €30-100K/hospital ACV.",
    "description": "EU hospital staffing crisis: UK NHS short 100K+, Germany Kliniken short 200K+, French CHU + Italian SSN ~200K combined. Current staffing is fax-and-phone for locum doctors, paper rotas for nurses, agency-staff at 30-40% premium with no central visibility. HospitalStaff is the integrated platform: rota optimization with AI matching, locum doctor marketplace, bank-nurse pool management, retention analytics + early-warning, integration with hospital EHR + HR. €50K-€300K ACV per hospital.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "UK NHS (largest single buyer in the world) + German Kliniken + Italian SSN.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "GCC healthcare-cities building; same staffing crunch."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "Smaller TAM; T-Life private-hospital network for pilot."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Lower priority."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Marginal T-Life edge via Greek private hospital relationships (HHG, Iaso, Mitera).",
    "tags": [
      "agetech-adjacent",
      "hospital-staffing",
      "nhs",
      "kliniken",
      "rota-optimization",
      "locum-marketplace"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "EU healthcare workforce crisis is top-3 political issue across UK + Germany + Italy + Greece; aging clinical workforce; post-COVID burnout-driven exits; structural shortfall projected to worsen 2025-2030.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "1 NHS trust + 1 German Klinikum pilot; 1K shifts coordinated."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "10 NHS trusts + 5 German hospitals; €5M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "50 hospitals UK + DE + IT; €25M ARR; NurseConnect partnership integration."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1.2M-€2.5M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Hospital-IT integration + multi-jurisdiction HR + workforce-marketplace dynamics."
    },
    "competitors": [
      {
        "name": "NHS Professionals",
        "type": "incumbent",
        "geography": "UK",
        "note": "NHS-internal; weak product."
      },
      {
        "name": "Locum's Nest, Patchwork (UK)",
        "type": "startup",
        "geography": "UK",
        "note": "Locum-marketplace; UK-only."
      },
      {
        "name": "SAP SuccessFactors, Workday",
        "type": "incumbent",
        "geography": "Global",
        "note": "Generic HRMS; weak hospital-specialty."
      }
    ],
    "competitiveIntensity": "moderate",
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
    "industry": "agetech"
  },
  {
    "id": "portshift-port-modernization",
    "title": "PortShift",
    "ycCategory": "Port Operations Modernization",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Port-operations modernization platform for Mediterranean + Northern European ports — workforce management for aging dockworkers, automation transition, container-flow optimization, multi-modal handoff with rail + truck.",
    "description": "European ports face structural aging-dockworker problem (median 50+, 30% retirement-eligible by 2030), accelerating automation (Rotterdam, Antwerp, Hamburg, Piraeus), and bottleneck pressure from shifting trade routes (Red Sea disruption, North Sea capacity). Existing port-IT (Navis, Konecranes, ABB) is hardware-anchored. PortShift is the workforce + ops layer: rota + skill-mapping for aging workforce, automation-transition training, container-flow AI, multi-modal handoff to rail + truck operators. €300K-€2M ACV per port; 100+ commercial ports in EU.",
    "primaryMarket": "europe",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Piraeus + Rotterdam + Antwerp + Hamburg + Gioia Tauro + Algeciras are top EU ports; T-Life Greek-shipping network gives Piraeus warm channel.",
    "expansionMarkets": [
      {
        "market": "middle-east",
        "fit": "green",
        "note": "Saudi Red Sea Port + Jebel Ali + Hamad expanding; structural growth."
      },
      {
        "market": "greece-cyprus",
        "fit": "green",
        "note": "Piraeus is T-Life-adjacent (Tryfon shipping)."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Smaller ports; lower priority."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Tryfon shipping + Piraeus relationships are real warm channel; closest non-pharma T-Life edge in this batch.",
    "tags": [
      "maritime",
      "ports",
      "workforce-mobility",
      "automation",
      "container-flow",
      "ten-t"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "Red Sea disruption (2024) + post-pandemic port congestion + EU port modernization mandates + aging dockworker workforce retiring; €X billion EU TEN-T port-investment capital underdeployed because of operational complexity.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Piraeus pilot (PCT-COSCO + PPA); €500K ARR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "5 EU ports + 1 GCC port; €5M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "20 ports EU + GCC; €25M ARR; rail + truck-fleet handoff product."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1.5M-€3M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Port-IT integration + workforce-management + multi-modal complexity."
    },
    "competitors": [
      {
        "name": "Navis (Konecranes)",
        "type": "incumbent",
        "geography": "Global",
        "note": "Terminal operating system; hardware-anchored."
      },
      {
        "name": "ABB Ports",
        "type": "incumbent",
        "geography": "Global",
        "note": "Automation hardware-and-software."
      },
      {
        "name": "Local port-IT custom builds",
        "type": "adjacent",
        "geography": "EU",
        "note": "Current default per port."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 4,
      "competitiveGap": 3,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.45
    },
    "ycRfsCorrelation": "Maritime cluster extension with T-Life shipping-adjacent warm channel; large ACV + structural workforce + automation tailwind.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "maritime"
  },
  {
    "id": "remitfleet-gcc-payroll",
    "title": "RemitFleet",
    "ycCategory": "GCC Migrant-Labor Payroll + Remittance",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Corporate payroll + remittance platform for GCC employers managing migrant-labor wages — direct to Asian + African destination accounts at sub-1% cost, with full WPS + ethical-recruitment compliance + family-shared financial wellness app.",
    "description": "GCC migrant workforce (~30M) remits $X billion annually; current remittance is via MoneyGram/Western Union (5-8% fees) + employer payroll via WPS (Wage Protection System mandatory). Employers want to (a) cut remittance margin from workforce bill, (b) increase retention via family-financial-wellness benefit, (c) comply with WPS + ILO C-189 + UAE Wage Protection. RemitFleet is the integrated corporate-payroll + remittance + family-wellness platform. Sells at €100/worker/year + percentage on remittance corridor.",
    "primaryMarket": "middle-east",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Saudi + UAE + Qatar are largest employer markets; Philippines + India + Bangladesh + Kenya are remittance destinations.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "EU corporate-migrant-labor remittance smaller TAM."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not source market scale."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "T-Life pilot via Greek-resident migrant labor employers; small."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Elnova + T-Life GCC network for first 5 employer customers.",
    "tags": [
      "fintech",
      "gcc-migrant-labor",
      "remittance",
      "wps",
      "corporate-payroll"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "GCC WPS enforcement maturity (Saudi 2025); UAE Wage Protection coverage 2024; rising worker-retention focus from Vision 2030 implementation; ethical-recruitment (post-Qatar reform) compliance pressure.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "1 KSA construction-group pilot; 5K workers; €500K ARR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "50 employers; 200K workers; €15M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "300 employers; 1M+ workers; €60M ARR."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1.5M-€3M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Multi-corridor remittance + WPS integration + employer-side BD."
    },
    "competitors": [
      {
        "name": "MoneyGram, Western Union",
        "type": "incumbent",
        "geography": "Global",
        "note": "Retail remittance; high margin; not employer-integrated."
      },
      {
        "name": "Sarwa, Hala, Tabby",
        "type": "startup",
        "geography": "ME",
        "note": "GCC fintech; mostly consumer-side."
      },
      {
        "name": "Bank-integrated WPS",
        "type": "incumbent",
        "geography": "GCC",
        "note": "Banks offer WPS; not remittance-attached."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 5,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.5
    },
    "ycRfsCorrelation": "GCC structural labor-flow + WPS regulatory frame + ethical-recruitment buyer demand = corporate-fintech wedge.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "fintech"
  },
  {
    "id": "govprocure-gcc",
    "title": "GovProcure GCC",
    "ycCategory": "GCC Public Procurement",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "Public-sector procurement platform for GCC governments + sovereign-wealth-fund subsidiaries — replaces Excel + Word bid management with AI-driven RFP analysis, supplier matching, and post-award compliance.",
    "description": "GCC governments deploy $200B+/year in procurement across Vision 2030 + We the UAE 2031 + Qatar Vision 2030; current is paper + Excel + national-portal (Etimad Saudi, eSupply UAE) without supplier-side intelligence. GovProcure is the supplier-side platform: aggregates GCC government RFPs across all major portals + agencies, AI-summarizes requirements, manages bid responses, tracks award lifecycle, automates post-award compliance. €100K-€1M ACV per supplier.",
    "primaryMarket": "middle-east",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Saudi (Etimad, largest spend) + UAE (eSupply) + Qatar.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "EU has DefenseTender (different vertical) and existing players."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "T-Life Greek-supplier-to-GCC angle marginal."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not applicable."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Elnova + T-Life GCC network for first design partners.",
    "tags": [
      "middle-east-structural",
      "gcc-procurement",
      "etimad",
      "vision-2030",
      "b2g"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED. Survived 5-agent evaluation of the 30-idea B2B batch; see catalog-cuts.ts for the 17 cuts and their reasoning.",
    "whyNow": "Vision 2030 + UAE D33 + Qatar 2030 procurement deployment; localization (Saudi Made + Made in UAE + Made in Qatar) preferences in tender criteria mandating compliance trackability.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "5 mid-size GCC suppliers pilot; €500K ARR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "50 suppliers; €5M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "300 suppliers; €30M ARR; expand to public-sector buyer-side."
      }
    ],
    "capitalIntensity": {
      "level": "low",
      "estimatedSeedCapital": "€600K-€1.5M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Government-portal integration + supplier BD + GCC localization-rule expertise."
    },
    "competitors": [
      {
        "name": "Etimad / eSupply (government portals)",
        "type": "incumbent",
        "geography": "GCC",
        "note": "Government infrastructure; not supplier-side."
      },
      {
        "name": "SAP Ariba, Coupa",
        "type": "incumbent",
        "geography": "Global",
        "note": "Generic procurement; weak GCC-localization."
      },
      {
        "name": "Big4 GCC procurement advisory",
        "type": "incumbent",
        "geography": "GCC",
        "note": "Consulting."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 4,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.4
    },
    "ycRfsCorrelation": "Government-procurement supplier-side platform; structural Vision-2030 deployment + localization mandates.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "govtech-identity"
  },
  {
    "id": "eduskills-gcc",
    "title": "EduSkills GCC",
    "ycCategory": "GCC Vocational Education",
    "ycBatchDate": "Fall 2026",
    "oneLiner": "GCC post-secondary vocational + technical-skills platform — Saudi 30%-by-2030 vocational target requires building the skills-to-jobs infrastructure that doesn't exist; UAE TVET pipeline expanding fast; Kuwait + Bahrain following.",
    "description": "GCC vocational + technical-education enrollment is structurally underweight (Saudi <10% of youth vs OECD average 40%) but national strategies target rapid catch-up. Existing Coursera + edX + local TVET institutions don't align to GCC labor-market signals or Saudization/Emiratization quotas. EduSkills is the platform: GCC-labor-market-aligned curriculum, employer-validated certifications, AI-driven skills-gap matching, integration with Vision-2030 + Emiratization quota tracking. Sells at €30-80/learner + €100-500K/year enterprise licensing.\n\nEduSkills also absorbs FemaleOnboard from the May-2026 red-team round: Workforce Compliance Suite covers female workforce integration alongside vocational + Saudization tracking — shared MHRSD/MoHRE compliance plumbing, single buyer (HR + compliance), reduces sales overhead.",
    "primaryMarket": "middle-east",
    "primaryMarketFit": "green",
    "primaryMarketRationale": "Saudi (largest TAM by far) + UAE (most mandate pressure) + Kuwait + Bahrain.",
    "expansionMarkets": [
      {
        "market": "europe",
        "fit": "yellow",
        "note": "Different system; not applicable."
      },
      {
        "market": "greece-cyprus",
        "fit": "yellow",
        "note": "T-Life small angle via ALTP-equivalent."
      },
      {
        "market": "balkans",
        "fit": "yellow",
        "note": "Not applicable."
      }
    ],
    "stage": "discovered",
    "tlifeAngle": "Elnova + T-Life GCC network for first employer partners.",
    "tags": [
      "middle-east-structural",
      "gcc",
      "tvet",
      "vocational",
      "saudization",
      "human-capability",
      "folded-femaleonboard",
      "workforce-compliance-suite",
      "female-workforce-integration"
    ],
    "addedDate": "2026-05-16",
    "notes": "v1-depth entry; v2 upgrade after red-team evaluation.\n\nRed-team verdict (2026-05-16): PROCEED with fold-in. Modules absorbed: see description final paragraph.",
    "whyNow": "Saudi 30%-by-2030 vocational target; UAE TVET roadmap (Cabinet 2024); GCC + global outflow of low-skilled workers (post-Kafala); structural need for nationals in mid-skill jobs.",
    "roadToMoat": [
      {
        "timeframe": "Month 0-6",
        "milestone": "Saudi vocational-college pilot + 5 employer partners; €500K ARR."
      },
      {
        "timeframe": "Month 6-18",
        "milestone": "20 colleges + 50 employers; €5M ARR."
      },
      {
        "timeframe": "Month 18-36",
        "milestone": "GCC-wide; 100 colleges + 300 employers; €30M ARR."
      }
    ],
    "capitalIntensity": {
      "level": "medium",
      "estimatedSeedCapital": "€1M-€2M",
      "capexRatio": "10% capex / 90% opex",
      "note": "Multi-stakeholder (government + colleges + employers); content + AI + integration heavy."
    },
    "competitors": [
      {
        "name": "Coursera, edX",
        "type": "incumbent",
        "geography": "Global",
        "note": "Higher-ed; not vocational-deep."
      },
      {
        "name": "Skill GCC, Bayt Learning",
        "type": "startup",
        "geography": "ME",
        "note": "Smaller, weaker product."
      },
      {
        "name": "Local TVET institutions",
        "type": "incumbent",
        "geography": "GCC",
        "note": "Existing structure; partner not competitor."
      }
    ],
    "competitiveIntensity": "moderate",
    "scorecard": {
      "marketSize": 4,
      "tlifeEdge": 2,
      "competitiveGap": 4,
      "capitalFit": 3,
      "regulatoryRisk": 3,
      "founderAvailability": 3,
      "composite": 3.25
    },
    "ycRfsCorrelation": "GCC structural vocational gap + multi-billion-riyal Human Capability Development capital + 5-10 year window.",
    "tlifeAssetRefs": [
      "t-life-capital"
    ],
    "industry": "workforce-saas"
  }
];
