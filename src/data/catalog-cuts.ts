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
  }
];
