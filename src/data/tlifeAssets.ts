/**
 * T-Life Asset Registry — single source of truth for portfolio companies
 * and their verified vs user-stated vs estimated claims.
 *
 * Every idea in ideas.ts that references a T-Life portfolio asset should
 * point to an entry here via `tlifeAssetRefs` rather than restating asset
 * facts inline. This way, if a claim about WinMedica or ELPEN turns out
 * to be wrong, it gets corrected in one place and the catalog stays
 * consistent.
 *
 * Confidence levels:
 * - verified:    primary source URL or filing cited
 * - user-stated: user provided in conversation; no public source checked
 * - estimated:   inferred from adjacent data, flagged as estimate
 * - unverified:  treated as fact in prior catalog work but never sourced
 * - refuted:     previously asserted, validation found it wrong
 */

export type AssetConfidence =
  | "verified"
  | "user-stated"
  | "estimated"
  | "unverified"
  | "refuted";

export interface AssetClaim {
  claim: string;
  source: string; // URL, "[USER-STATED YYYY-MM-DD]", "[ESTIMATE]", "[UNVERIFIED]"
  confidence: AssetConfidence;
  lastChecked: string; // YYYY-MM-DD
  note?: string;
}

export interface TLifeAsset {
  id: string;
  name: string;
  shortName?: string;
  category: "operating-co" | "facility" | "network" | "vehicle" | "geography";
  description: string;
  claims: AssetClaim[];
}

export const tlifeAssets: TLifeAsset[] = [
  {
    id: "elpen",
    name: "ELPEN Group",
    category: "operating-co",
    description: "Greek family-controlled pharmaceutical manufacturer.",
    claims: [
      {
        claim: "Greek pharmaceutical manufacturer with own production site(s)",
        source: "https://www.elpen.gr/",
        confidence: "verified",
        lastChecked: "2026-05-16",
      },
      {
        claim: "Tryfon family controlled",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
      {
        claim: "Largest independent Greek pharmaceutical manufacturer",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "Comparative claim — no comparative-revenue analysis sourced. May be true; verify via ICAP Greek pharma rankings before any external memo.",
      },
      {
        claim: "Has consumer food-supplement SKU range under ELPEN-branded retail",
        source: "[REFUTED 2026-05-16]",
        confidence: "refuted",
        lastChecked: "2026-05-16",
        note: "Validation search May 2026 did not surface a consumer-facing ELPEN food-supplement product line. ELPEN has pharmaceutical manufacturing capability that could be extended to supplements — that's a build, not existing IP.",
      },
      {
        claim: "Has EOF/EMA regulatory affairs team familiar with submissions",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
    ],
  },
  {
    id: "winmedica",
    name: "WinMedica S.A.",
    category: "operating-co",
    description: "Pharmaceutical manufacturer/distributor; commercial arm of the Tryfon family group.",
    claims: [
      {
        claim: "Pharmaceutical company with international operations (42 countries referenced)",
        source: "https://www.winmedica.com/ — verified in May 2026 validation",
        confidence: "verified",
        lastChecked: "2026-05-16",
      },
      {
        claim: "~€300M revenue scale",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "No public filings located. Verify if/when BC Partners transaction or IPO process produces filings.",
      },
      {
        claim: "In dual-track BC Partners acquisition / IPO process",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
      {
        claim: "Operates a 2,500-pharmacy retail network owned/controlled by WinMedica",
        source: "[REFUTED 2026-05-16]",
        confidence: "refuted",
        lastChecked: "2026-05-16",
        note: "WinMedica is a pharma manufacturer/distributor, NOT a pharmacy retailer. Prior catalog phrasing conflated distribution reach with retail ownership. Reach into the ~10,500 total Greek pharmacy market is the correct framing.",
      },
      {
        claim: "Distribution reach into the ~10,500 Greek pharmacies (commercial relationships, not ownership)",
        source: "[USER-STATED 2026-05-03] + 10,500 figure from Greek pharmacist association",
        confidence: "estimated",
        lastChecked: "2026-05-16",
        note: "Coverage percentage of those 10,500 by WinMedica products is unverified.",
      },
    ],
  },
  {
    id: "tripoli-hpapi",
    name: "Tripoli HPAPI Manufacturing Facility",
    shortName: "Tripoli",
    category: "facility",
    description: "Greek high-potency API manufacturing facility, approaching operational readiness; planned spin-off as Principal-CDMO NewCo.",
    claims: [
      {
        claim: "€65M+ investment in HPAPI facility",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
      {
        claim: "EOF inspection completed with 10 observations",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "Treated as fact across catalog. Could be verified against EOF inspection registry if/when public.",
      },
      {
        claim: "416-equipment training matrix already built (GAMP5 documentation prepared)",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "Core differentiator for Aletheia GxP and VaultEdge design-partner thesis. If catalog ever becomes investor-facing, request the actual training matrix as proof.",
      },
      {
        claim: "Planned spin-off into Principal-CDMO NewCo",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
    ],
  },
  {
    id: "altp",
    name: "ALTP / Athens LifeTech Park",
    shortName: "ALTP",
    category: "facility",
    description: "Industrial / life-sciences park with tenant SME network.",
    claims: [
      {
        claim: "Active industrial park hosting life-sciences and adjacent SMEs",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
      {
        claim: "Tenant network of 200+ SMEs in adjacent sectors",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "Used as channel-distribution anchor in Logos Books and other entries. Verify tenant count from ALTP operating data.",
      },
    ],
  },
  {
    id: "t-life-capital",
    name: "T-Life Capital",
    category: "vehicle",
    description: "Family investment office of the Tryfon family — underwrites Phase 0 ventures.",
    claims: [
      {
        claim: "Family investment office of the Tryfon family",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
      {
        claim: "Underwrites Phase 0 venture builds at €100-150K per opportunity",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
      },
    ],
  },
  {
    id: "elnova-dubai",
    name: "Elnova Dubai",
    shortName: "Elnova",
    category: "geography",
    description: "GCC bridgehead for Tryfon group operations.",
    claims: [
      {
        claim: "Operating presence in Dubai with GCC distribution relationships",
        source: "[USER-STATED 2026-05-03]",
        confidence: "user-stated",
        lastChecked: "2026-05-16",
        note: "Specific distribution depth, customer count, and revenue not stated.",
      },
    ],
  },
];

export function getAsset(id: string): TLifeAsset | undefined {
  return tlifeAssets.find((a) => a.id === id);
}
