/**
 * Catalog cuts log — 24 ideas removed in the 2026-05-16 portfolio red-team review.
 * Preserved here for audit trail. These IDs should not be re-added without
 * explicit re-evaluation against the cut reasoning.
 */

export interface CatalogCut {
  id: string;
  title: string;
  composite: number | null;
  reason: string;
}

export const catalogCuts: CatalogCut[] = [
  {
    "id": "pharmareg-ai",
    "title": "PharmaReg.ai",
    "composite": 3.55,
    "reason": "fold-into pharma-regulatory-ai-agency (RegulaFlow) — duplicate regulatory-affairs wedge framed as tool not agency; tool-form loses on liability transfer."
  },
  {
    "id": "pharmaschedule-ai",
    "title": "PharmaSchedule AI",
    "composite": 3.55,
    "reason": "REVISE/CUT — real GMP wedge but classic 'tool for the planner' play; 40 Greek manufacturers cap TAM at ~€3-5M ARR; Werum/Rockwell can undercut on bundling."
  },
  {
    "id": "batchenergy-io",
    "title": "BatchEnergy",
    "composite": 3.65,
    "reason": "VaultEdge pattern — hardware/IoT appliance with 35% capex where Schneider/Siemens already cover the regulatory requirement and ESCOs take the savings-share margin."
  },
  {
    "id": "pharmaops-gmp-coach",
    "title": "PharmaOps",
    "composite": 3.4,
    "reason": "AI-Guidance-for-Physical-Work pattern — smart-glasses + multimodal coaching is a feature inside Apprentice.io/Tulip's roadmap; hardware dependency + 'tools for a profession' tri-party budget approval problem."
  },
  {
    "id": "portlogix-pharma",
    "title": "PortLogix Pharma",
    "composite": 3.45,
    "reason": "Coordination layer where the channel (forwarders) takes the margin; project44 + a GDP module ships before €1M ARR; Piraeus-only TAM is sub-venture-scale."
  },
  {
    "id": "lineops-rare",
    "title": "LineOps Rare",
    "composite": 3.0,
    "reason": "TAM tiny by definition — rare disease + named-patient + hospital-exemption = a few hundred sites globally; even at 100% capture this is €3-5M ARR."
  },
  {
    "id": "pharma-facility-spatial-twin",
    "title": "PharmaTwin",
    "composite": 3.15,
    "reason": "Speculative spatial-foundation-model bet with 30% capex against Siemens/Dassault who will bolt CCS-reasoning onto existing digital-twin products; 'EMA inspection readiness' wedge is consulting not software."
  },
  {
    "id": "pharma-alpha-intelligence",
    "title": "PharmaSignal Fund",
    "composite": 3.0,
    "reason": "Hedge fund, not a venture — LP economics, AIFM regulatory drag, 2-and-20 ceilings make this orthogonal to the portfolio. If the signal IP is real, license as data product (PharmaDataForge's wedge)."
  },
  {
    "id": "maritime-pm-intelligence",
    "title": "Harbourside",
    "composite": 3.7,
    "reason": "€1.5M ARR ceiling by founder's own roadmap; TAM is ~200 maritime SaaS PM buyers globally. Feature not company."
  },
  {
    "id": "shipping-treasury-stablecoin",
    "title": "HarbourFX",
    "composite": 3.15,
    "reason": "MiCA CASP + VASP licensing is €1M+ regulatory burn before first non-Tryfon revenue; ship managers will not move treasury onto AMM rails for 1-2% saving when Citi de-risking is the real driver. Classic regulated-fintech moat trap."
  },
  {
    "id": "seafarer-skill-ai",
    "title": "Navicore",
    "composite": 3.4,
    "reason": "AI-Guidance-for-Physical-Work pattern — Cursor-for-X into 700-Greek-shipowner market; AMOS/Helm ship 'AI guidance' as feature within 18 months; per-vessel hardware fit-out kills SaaS margin; liability transfer is the real product."
  },
  {
    "id": "eldercare-skill-coach",
    "title": "Careform",
    "composite": 3.5,
    "reason": "AI-Guidance-for-Physical-Work pattern + agency-only buyer + 24-36 month EOPYY adoption bet; CareClear captures the compliance-pull more directly without medico-legal exposure."
  },
  {
    "id": "rare-disease-infusion-coach",
    "title": "InfuGuide",
    "composite": 3.1,
    "reason": "MDR Class IIa medical device classification; pharma PSP cycles 18-24 months; single adverse event during home infusion ends the company. Liability transfer IS the entire product and no insurer will write it."
  },
  {
    "id": "agetech-product-discovery",
    "title": "Meridian",
    "composite": 3.6,
    "reason": "€1.2M ARR target by M36 selling to AgeTech founders — a category that doesn't have enough funded companies to sustain a vertical UX research tool. Feature inside Dovetail/Maze."
  },
  {
    "id": "agetech-workforce-transition-agency",
    "title": "BridgeWork",
    "composite": 3.6,
    "reason": "Recruitment-agency economics with subscription veneer; placement-fee businesses don't compound; EU social-fund co-funding is a grant business not venture. €2-5M ARR ceiling."
  },
  {
    "id": "agetech-yield-wallet",
    "title": "Seniora",
    "composite": 2.8,
    "reason": "MiCA wallet sold to 70-80 year olds through pharmacies — elder-financial-exploitation regulator scrutiny will follow first complaint; pharmacist brand-contamination risk."
  },
  {
    "id": "procurement-ghost-detector",
    "title": "Phantomcheck",
    "composite": 3.05,
    "reason": "fold-into olaf-trace-eu-funds (OLAFTrace) — identical institutional buyer (Hellenic Court of Auditors / EPPO), tlifeEdge=2; fold as a second module rather than parallel sales motion."
  },
  {
    "id": "govflow-gr",
    "title": "GovFlow",
    "composite": 3.1,
    "reason": "Logistis pattern — middleware in front of gov.gr means agency's ERP vendor (Netcompany/Intrasoft) owns integration politically; 'automated routing' implies liability for misrouted citizen applications. No EU-government B2G SaaS has reached €10M ARR on single-country TAM."
  },
  {
    "id": "constructpermit-ai",
    "title": "BuildClear",
    "composite": 3.1,
    "reason": "TEE endorsement is the moat and TEE moves on a 5-year clock; without it this is a €3-5M architect-tools agency not venture."
  },
  {
    "id": "balkan-legal-services-ai",
    "title": "LexBridge",
    "composite": 3.5,
    "reason": "Mis-labeled as venture — admitted local counsel must sign every opinion, so AI compresses junior-lawyer time but cannot escape headcount-linked revenue. €5-8M legal-services AGENCY, not venture."
  },
  {
    "id": "gcc-migration-relocation-agency",
    "title": "NomadPath",
    "composite": 3.2,
    "reason": "Mis-labeled as venture — case managers and immigration lawyer retainers consume the unit economics; consulate processing-time reality blocks '10x throughput'. €3-6M AGENCY."
  },
  {
    "id": "peoplecert-ai-wrapper",
    "title": "Praxis Layer",
    "composite": 3.1,
    "reason": "Appliance pattern — PeopleCert + ATPs (QA, ILX) sit on the regulatory perimeter and ship a comparable AI prep layer the moment it threatens voucher attach; tlifeEdge=2 acknowledges no unfair angle."
  },
  {
    "id": "ai-ops-peer-body",
    "title": "AgentOps Council",
    "composite": 3.3,
    "reason": "PARK as long-horizon optionality — founderAvailability=1 is honest; 5-7yr horizon, consortium-shaped, recruit-driven. Re-evaluate if an ex-AXELOS/PMI chair surfaces. Removed from active catalog."
  },
  {
    "id": "agora-credit-intelligence",
    "title": "Agora Credit Intelligence",
    "composite": 3.0,
    "reason": "Private credit fund wearing AI clothing — loan book IS the product; capital intensity 'high' because it's a fund not a startup. AIFMD + Bank of Greece supervision + balance-sheet risk = wrong vehicle."
  },
  {
    "id": "careschool-credentialing",
    "title": "CareSchool",
    "composite": 3.6,
    "reason": "FOLD → CareStaff. National-authority recognition pathway is 24-36 months/jurisdiction; standalone is grant-funded not venture. Folded into CareStaff as agency-side onboarding + Filipino/Indian pipeline module — uses CareStaff's distribution."
  },
  {
    "id": "homematch-discharge",
    "title": "HomeMatch",
    "composite": 3.35,
    "reason": "FOLD → CareStaff. NHS-internal Discharge2Assess + sub-€100 placement fee + 18-month NHS procurement cycle = unviable standalone. Folded into CareStaff as Hospital Discharge Intake module; solves HomeMatch's two-sided cold-start (CareStaff supplies the agency side) and gives CareStaff a hospital land-and-expand vector."
  },
  {
    "id": "ltcbridge-insurance",
    "title": "LTCBridge",
    "composite": 3.1,
    "reason": "KILL — TAM ceiling is 30-60 EU LTC carriers × €500K = €15-30M ARR ceiling, services-business not venture; €2T funding-gap stat is societal not addressable; module-vendor pivot to Sapiens/Guidewire is a partnership business not venture."
  },
  {
    "id": "silverwealth-decumulation",
    "title": "SilverWealth",
    "composite": 3.05,
    "reason": "KILL — Zero T-Life edge by founder admission; real incumbents are Avaloq + FNZ + Generali/AXA/Allianz internal platforms (not Riskalyze); selling €100-300/advisor/mo into mutualistic banks already paying Avaloq is a feature not a wedge."
  },
  {
    "id": "geropath-chronic-coordination",
    "title": "GeroPath",
    "composite": 2.9,
    "reason": "KILL — Payor sales cycles (NHS ICB, German Krankenkassen, Spanish regions) are 24-36 months minimum; €800K-€2M seed cannot fund 50 payor-providers by M36; Cerner Population Health + Optum + Cegedim already in the payor-coordination layer."
  },
  {
    "id": "talentbridge-refugee-integration",
    "title": "TalentBridge",
    "composite": 3.4,
    "reason": "FOLD → MobiVisa. AMIF/ESF+ grant-driven Y1 revenue is a tell of NGO-tech business; the workflow (matching + credentialing + compliance) is a feature of broader visa-automation. Folded into MobiVisa as displaced-worker / humanitarian-status module."
  },
  {
    "id": "tradesglobal-cross-border-placement",
    "title": "TradesGlobal",
    "composite": 3.2,
    "reason": "KILL — Placement-fee economics don't compound: revenue resets annually, gross margins eaten by source-country recruitment CAC (30-60% of fee in practice); Hays/Randstad already tried this for 20 years and earn ~5% net."
  },
  {
    "id": "nurseconnect-healthcare-mobility",
    "title": "NurseConnect",
    "composite": 3.1,
    "reason": "KILL — Same placement-fee structural flaw + 1000+ existing agencies + NHS Professionals/Avant entrenched + WHO Code of Practice = operational drag not software wedge; staffing-agency P&L with software veneer."
  },
  {
    "id": "skillbridge-eqf-credentialing",
    "title": "SkillBridge EU",
    "composite": 3.1,
    "reason": "KILL — National-authority recognition pathway is geological (ENIC-NARIC + 27 ministries × 24-36 months per jurisdiction); EU-Horizon-grant-funded research consortium, not a VC business."
  },
  {
    "id": "defensetender-eu-procurement",
    "title": "DefenseTender",
    "composite": 3.2,
    "reason": "KILL — EU defense procurement is sovereign-direct (EDF capital-to-capital), ITAR/export-control gates a startup can't carry, Hensoldt/Leonardo/PGZ have in-house bid teams + Frost & Sullivan/Avascent already, founders have no security-clearance access."
  },
  {
    "id": "housingflow-affordable",
    "title": "HousingFlow",
    "composite": 3.05,
    "reason": "KILL — EU affordable-housing developers are <€20M revenue, capital-constrained, 4-7% project margins; €30-150K ACV is sticker-shock for the buyer; Procore already lost this market; municipal cycles 18 months."
  },
  {
    "id": "agrolabor-seasonal",
    "title": "AgroLabor",
    "composite": 3.05,
    "reason": "KILL as priced — Mediterranean farmers operate at 8-12% margin; €30-100/worker/month is 3-10% of total labor cost on top of wages, won't be paid. Real buyer is supermarket/CSRD; if revised would be different product (sell to Carrefour/Tesco scope-3 compliance, not farmers)."
  },
  {
    "id": "foundry-reshoring",
    "title": "FoundryEU",
    "composite": 3.4,
    "reason": "FOLD → PowerShift. Standalone loses to McKinsey/BCG (board-level one-offs don't recur); 'government-incentive matching' is a finder-fee business not SaaS. Folded into PowerShift as Industrial Footprint extension — exactly what PowerShift's CFO buyer needs for reshoring decisions."
  },
  {
    "id": "visiontrack-megaproject",
    "title": "VisionTrack",
    "composite": 3.6,
    "reason": "KILL — NEOM thesis is stale post-$40B 2024 scope cuts (The Line shortened 170km→2.4km); $1T capex number is fiction now; contractor compliance on NEOM already locked up by PwC/Bain seconded teams inside Royal Commission program offices."
  },
  {
    "id": "femaleonboard-gcc",
    "title": "FemaleOnboard",
    "composite": 3.4,
    "reason": "FOLD → EduSkills. Standalone ACV math is brutal: UAE board mandate touches ~150 listed companies with median 2-3 female board seats; female-employee count per company small. Folded into EduSkills as Workforce Compliance Suite — shared MHRSD/MoHRE compliance plumbing."
  },
  {
    "id": "healthcityops-gcc",
    "title": "HealthCityOps",
    "composite": 3.15,
    "reason": "KILL — Epic + Cerner + InterSystems already at Cleveland Clinic AD, KAMC, SEHA; layer-on-top is the graveyard category in hospital IT (absorbed into EHR roadmap or starved by integration politics); €2-5M seed for 12-24 month cycles is not venture-shaped."
  },
  {
    "id": "returneeops-gcc-nationals",
    "title": "ReturneeOps",
    "composite": 3.25,
    "reason": "KILL — TAM math doesn't work: 100K returnees/year × 5K placeable × €30-100K ACV per employer = €10-15M ARR ceiling; McKinsey Saudi Future Champions + Misk + Tawteen already own PIF-portfolio relationships; niche workflow tool not venture."
  }
,
  {
    "id": "construction-site-coach",
    "title": "Siteform",
    "composite": 3.5,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. AI-Guidance-for-Physical-Work pattern — already killed in catalog 3× (PharmaOps, Navicore, Careform). Procore + Autodesk Construction Cloud + Triax own the site-data SOR; smart-glasses coaching is feature inside their roadmap."
  },
  {
    "id": "pm-copilot-southeast-europe",
    "title": "Polis",
    "composite": 3.3,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Tries to displace Jira/Monday/Asana SOR in SE-European market; PM-copilot is a feature inside those incumbents' AI roadmaps. Buyer-channel mismatch + incumbent foreclosure."
  },
  {
    "id": "pharma-launch-intelligence",
    "title": "Launchbase",
    "composite": 4.05,
    "reason": "PORTFOLIO_RESHAPE.md (2026-05-21): SUSPEND. Launchbase alt-thesis (Vault-CRM overlay) is the same incumbent-foreclosure problem squared — sits on top of Veeva Vault CRM which itself ships AI inside the validated stack. Red-team 2026-05-20 confirmed."
  },
  {
    "id": "pharma-regulatory-ai-agency",
    "title": "RegulaFlow",
    "composite": 3.85,
    "reason": "PORTFOLIO_RESHAPE.md (2026-05-21): SUSPEND. RegulaFlow alt-thesis (ProPharma/NNIT white-label) hits the same buyer-channel problem at the agency layer. Red-team 2026-05-20 surfaced incumbent-foreclosure pattern at the regulatory-affairs CRO tier."
  },
  {
    "id": "maritime-charter-commercial-ai",
    "title": "VoyageDesk",
    "composite": 3.85,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Q88 + Sea/net + Veson IMOS already own the charter-desk SOR; AI overlay is incumbent roadmap. Same pattern as seafarer-skill-ai (already archived)."
  },
  {
    "id": "pharma-skills-intelligence",
    "title": "Aletheia GxP",
    "composite": 3.95,
    "reason": "PORTFOLIO_RESHAPE.md (2026-05-21): SUSPEND. Aletheia GxP alt-thesis (Vault Training overlay) requires Veeva commercial relationship T-Life does not have and cannot manufacture in <6 months. Red-team 2026-05-20 confirmed Veeva Vault AI Agents Quality (April 2026) ships AI inside the validated stack ahead of any challenger Phase 0 gate."
  },
  {
    "id": "trellis-family-ops",
    "title": "Trellis",
    "composite": 3.7,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Consumer family-ops app doesn't match the new infrastructure-to-incumbents thesis; no SOR-friendly motion to a regulated buyer."
  },
  {
    "id": "tekton-eu-trades",
    "title": "Tekton",
    "composite": 3.2,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. EU vocational training/certification SORs (national EQF authorities + Pearson/PeopleCert) already occupy the seat; T-Life has no channel into them."
  },
  {
    "id": "steward-elder-banking",
    "title": "Steward",
    "composite": 3.1,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Tries to compete with incumbent fintech/private-banking platforms for elderly; bank-vendor SOR (Avaloq, FNZ, Temenos) ships compliance modules ahead. Same kill pattern as SilverWealth."
  },
  {
    "id": "reverie-ai-companion",
    "title": "Reverie",
    "composite": 2.9,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Consumer AI companion — competes with ChatGPT/Claude/Replika consumer products; no B2B-infrastructure motion; outside new thesis scope."
  },
  {
    "id": "hearthpro-hvac-subscription",
    "title": "HearthPro",
    "composite": 3.05,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. HVAC subscription model tries to disintermediate installer-dealer SOR; ServiceTitan + Jobber own the SMB-trades vertical SaaS seat. Buyer-channel mismatch."
  },
  {
    "id": "tessera-brand-resale",
    "title": "Tessera",
    "composite": 3.1,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Resale/recommerce competes with Vestiaire/Vinted/StockX consumer SORs; not infrastructure-to-incumbents shape."
  },
  {
    "id": "advisorbot-auto-service",
    "title": "AdvisorBot",
    "composite": 3.1,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Auto-service chatbot tries to disintermediate dealership/mechanic SOR; Mitchell1 + Reynolds + CDK own the DMS seat with AI roadmap."
  },
  {
    "id": "concierge-new-parents",
    "title": "Concierge",
    "composite": 3.35,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Consumer concierge — competes with nanny-agency + Care.com SORs; not infrastructure shape; outside new thesis."
  },
  {
    "id": "proof-humanity-verification",
    "title": "Proof",
    "composite": 2.9,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Identity-verification SORs (Onfido, Persona, Veriff, Worldcoin) already entrenched; AI-detection overlay ships inside their stack within 12 months. Classic incumbent-foreclosure shape."
  },
  {
    "id": "stoa-small-group-social",
    "title": "Stoa",
    "composite": 2.85,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Consumer social network — competes with Meta/Discord/WhatsApp SORs; not infrastructure shape."
  },
  {
    "id": "carestaff-home-care-ops",
    "title": "CareStaff",
    "composite": 3.55,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Birdie, CareLineLive, Access Care Planning own the UK/EU home-care SOR with AI-driven scheduling/care-planning in 2025-26 roadmaps. Same Aya/Doctari foreclosure pattern that killed original HospitalStaff thesis."
  },
  {
    "id": "carehomeos-assisted-living",
    "title": "CareHomeOS",
    "composite": 3.4,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Nourish, Person Centred Software, Cura Systems own the EU assisted-living SOR; layer-on-top is the graveyard category. Same pattern as HealthCityOps (already archived)."
  },
  {
    "id": "gcc-nationalize",
    "title": "GCCNationalize",
    "composite": 3.85,
    "reason": "PORTFOLIO_RESHAPE.md (2026-05-21): SUSPEND. ZenHR + Bayzat + Microsoft Saudi (Tawteen workflows inside Dynamics 365) ship nationalisation compliance modules ahead of any challenger Phase 0 gate; T-Life has no Gulf HR-vendor commercial channel. Same incumbent-AI release-cycle pattern as the 9/9 red-team set."
  },
  {
    "id": "gulfplace-asia-labor",
    "title": "GulfPlace",
    "composite": 3.35,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. ZenHR + Bayzat + Workforce.ae own the GCC labor-market SOR; placement-fee economics also don't compound. Combined incumbent + structural failure."
  },
  {
    "id": "powershift-energy-procurement",
    "title": "PowerShift",
    "composite": 3.5,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. SAP Ariba + Coupa + Schneider Electric EcoStruxure already own the procurement SOR with energy modules. Industrial-procurement SaaS seat is foreclosed."
  },
  {
    "id": "portshift-port-modernization",
    "title": "PortShift",
    "composite": 3.45,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Navis (Kalmar) + Konecranes + Port Community Systems consortia own port-operations SOR with sovereign procurement. Layer-on-top is foreclosed; political procurement cycles are 36+ months."
  },
  {
    "id": "remitfleet-gcc-payroll",
    "title": "RemitFleet",
    "composite": 3.5,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. GCC WPS-compliant payroll SORs (Bayzat, ZenHR, GreatDay HR, Microsoft Dynamics 365 Saudi instance) already cover wage-protection mandates. Same buyer-channel mismatch."
  },
  {
    "id": "govprocure-gcc",
    "title": "GovProcure GCC",
    "composite": 3.4,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. SAP Ariba + Etimad (Saudi gov platform) + UAE federal tender platforms are the SORs; B2G procurement-data overlay loses on framework foreclosure. Same RM6387 pattern."
  },
  {
    "id": "eduskills-gcc",
    "title": "EduSkills GCC",
    "composite": 3.25,
    "reason": "PORTFOLIO_RESHAPE.md filter (2026-05-21): ARCHIVE. Saudi HRDF/Tawteen + UAE MoHRE + Tahaluf platforms are the SORs; corporate training SaaS competes with Pluralsight/Coursera/Cornerstone. Combined sovereign + commercial foreclosure."
  }
,
  {
    "id": "hospitalstaff-eu",
    "title": "HospitalStaff-API",
    "composite": 3.3,
    "reason": "PORTFOLIO_RESHAPE.md 2nd-round (2026-05-21): KILL. The 2026-05-21 re-spec to credential-portability API → Aya/Doctari/RLDatix/Patchwork was itself killed in same-day 2nd-round red-team (verdict: REVISE; see redTeamFindings[1] in pre-cut archive). Three independent kill vectors: (1) Aya Global Talent UK already credentials 5,000+ international placements in-house; RLDatix acquired Allocate Dec 2025 to fuse credentialing + workforce management — buyers ARE building, not buying. (2) EUDI Wallet eIDAS 2.0 mandates healthcare-professional EAAs from all 27 member states by Dec 2026 with mandatory acceptance by Dec 2027 — public-good API collapses the moat on a statutory clock inside the Phase-0 window. (3) Directive 2005/36/EC Annex V auto-recognizes EU sectoral health professions (doctors, nurses, midwives, dentists, pharmacists), making 'verification' a thin admin workflow not a defensible data product. Unit economics cap at €1.2M ARR with 3-of-4 consolidator logos — wrong-shape for venture. Alternative (EUDI relying-party integration layer for NHS Trusts + Kliniken + staffing platforms ahead of Dec-2027 deadline) is a fundamentally different bet needing separate Phase 0 spec; not pursued in this catalog cycle. MedAdherence-RWE is now the only funded Phase 0 bet."
  }
];
