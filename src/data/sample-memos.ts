// Hardcoded sample memos for the FamilyOffice-Memos demo MVP.
// Two fully-written institutional research memos used during anchor pitches.
// Static data only — no fetch, no LLM, no external sources.

export interface MemoComparable {
  target: string;
  acquirer: string;
  year: string;
  enterpriseValueEurM: string;
  evToEbitda: string;
  notes: string;
}

export interface MemoReference {
  tag: string; // e.g. "[1]"
  publication: string;
  title: string;
  year: string;
  url?: string;
}

export interface Memo {
  id: string;
  number: string; // zero-padded, e.g. "001"
  title: string;
  shortTitle: string;
  sector: string;
  date: string; // ISO YYYY-MM-DD
  recipientInitials: string;
  executiveSummary: {
    bottomLine: string;
    paragraphs: string[];
  };
  thesisParagraphs: string[];
  comparables: {
    rows: MemoComparable[];
    footnote: string;
  };
  risks: { heading: string; body: string }[];
  references: MemoReference[];
}

export const sampleMemos: Memo[] = [
  {
    id: "metlen-2026-04",
    number: "001",
    title:
      "Metlen Energy & Metals: industrial transformation and LSE dual-listing",
    shortTitle: "Metlen Energy & Metals",
    sector: "Industrial / Metals & Energy",
    date: "2026-04-22",
    recipientInitials: "K.K.",
    executiveSummary: {
      bottomLine:
        "The capital-cycle re-rating of Metlen relative to EU integrated peers remains incomplete; the LSE dual-listing has narrowed, but not closed, a discount that the underlying asset mix no longer justifies.",
      paragraphs: [
        "Metlen Energy & Metals — the Athex- and LSE-listed industrial group rebranded from Mytilineos in July 2024 — is in the late innings of a five-year transformation. Bauxite mining at Aghios Nikolaos feeds Aluminium of Greece at Aspra Spitia, which in turn supplies a downstream rolling and recycling network across three EU countries. The energy arm operates 2.4 GW of installed generation, a 1.5 GW renewables pipeline under construction, and a contracted PPA book that now covers the majority of group power consumption internally. Group EBITDA for FY2024 was reported at €1.08 billion, with metals contributing roughly 38% and energy 47%.",
        "The August 2024 premium listing on the London Stock Exchange, conducted alongside the existing Athens listing, was the clearest signal of intent. Free float widened, FTSE All-Share index inclusion followed in the December review, and the institutional shareholder register has rotated meaningfully toward UK and continental long-only accounts. Daily traded volume in London has settled at roughly 35-40% of total liquidity in the six months since admission. The mechanical effects on the cost of capital are visible; the structural effects on the multiple are still arriving.",
        "On consensus FY2026 numbers the shares trade at approximately 6.1x EV/EBITDA against a peer set (Norsk Hydro, Constellium, Aluminium Bahrain) that clears 7.5-8.5x. The gap is no longer explained by free float, governance disclosure, or accounting opacity. What remains is a residual sovereign discount and a structural under-ownership by global metals specialists who are only beginning to model the energy-metals hybrid earnings stream as a single unit.",
      ],
    },
    thesisParagraphs: [
      "Vertical integration is doing more work than the market is pricing. The bauxite-alumina-aluminium chain inside Metlen runs at a unit cost structure in the second quartile of the global cost curve, with internal energy supply covering the most volatile input. Through the 2022-2023 LME aluminium cycle, when third-quartile smelters across Europe were curtailing or closing, Metlen's metals segment delivered positive EBITDA in every reported quarter. The Aspra Spitia smelter, the only primary aluminium smelter in the EU outside of Norway and Iceland that did not curtail during the 2022 power crisis, is now a strategic asset under both EU industrial policy and CBAM logic.",
      "The energy arm is the more underappreciated half of the story. The 1.48 GW renewables pipeline under construction across Greece, Italy, and Spain is contracted forward through PPAs with investment-grade off-takers, and the bilateral PPA book inside the group covers approximately 78% of internal industrial consumption out to 2032. This converts what the market reads as a cyclical metals business into a hybrid earnings stream with a quasi-utility floor. Management has guided to €2.0 billion of EBITDA by 2028, of which the energy contribution is the durable component. On a sum-of-the-parts basis the energy assets alone, valued at a discounted EU yieldco multiple of 9.5x, account for the entirety of the current enterprise value.",
      "The dual-listing is the catalyst rather than the story. FTSE inclusion, sterling-denominated trading, and the London analyst coverage that has followed (BofA, Berenberg, Morgan Stanley initiated in Q4 2024 and Q1 2025) reduce the search cost for institutional capital that was structurally absent from the Athex register. The narrowing of the Greek discount is mechanical; it has roughly 200-300 basis points further to compress before reaching the implied fair value relative to the peer cohort. The earnings re-rating, driven by the energy-metals hybrid being modeled correctly, is the second leg.",
    ],
    comparables: {
      rows: [
        {
          target: "Sapa (extrusions JV)",
          acquirer: "Norsk Hydro",
          year: "2017",
          enterpriseValueEurM: "3,200",
          evToEbitda: "7.8x",
          notes:
            "Full buyout of Orkla stake; consolidated downstream aluminium platform.",
        },
        {
          target: "Constellium N.V.",
          acquirer: "IPO (NYSE)",
          year: "2014",
          enterpriseValueEurM: "1,950",
          evToEbitda: "5.2x",
          notes:
            "Mid-cycle listing; downstream-only mix priced below integrated peers.",
        },
        {
          target: "Aluminium Bahrain (Alba)",
          acquirer: "Secondary offering",
          year: "2014",
          enterpriseValueEurM: "2,600",
          evToEbitda: "6.4x",
          notes:
            "Mumtalakat secondary; integrated Gulf smelter, captive energy.",
        },
        {
          target: "Trimet Aluminium (Hamburg, Voerde)",
          acquirer: "Trimet SE (bolt-ons)",
          year: "2013, 2021",
          enterpriseValueEurM: "1,100",
          evToEbitda: "8.4x",
          notes:
            "Distressed smelter restart trades; strategic premium for EU primary capacity.",
        },
        {
          target: "Aldel (Delfzijl restart)",
          acquirer: "York Capital / Klesch consortium",
          year: "2017",
          enterpriseValueEurM: "420",
          evToEbitda: "6.9x",
          notes:
            "Restart-only enterprise value; energy-cost contract drove deal economics.",
        },
      ],
      footnote:
        "Source: company filings, Mergermarket, S&P Capital IQ. EV/EBITDA based on last reported FY at transaction or admission date. Indicative comparable set; not a regression-based fair value.",
    },
    risks: [
      {
        heading: "Aluminium LME volatility",
        body:
          "Notwithstanding vertical integration, metals segment EBITDA remains correlated to the LME 3-month aluminium price. A 15% downside move from current spot would compress group EBITDA by approximately €110-140 million on our framework. Hedging coverage is reported at roughly six months forward, leaving the medium-term exposure open.",
      },
      {
        heading: "EU CBAM implementation lag",
        body:
          "The Carbon Border Adjustment Mechanism is a structural positive for EU primary aluminium, but the definitive period only begins January 2026 and the rebate mechanism for export-oriented downstream producers remains in technical consultation. Slippage in implementation or carve-outs that dilute the cost-curve protection would weaken the structural-long thesis.",
      },
      {
        heading: "Greek wholesale electricity compression",
        body:
          "Helleniq, PPC, and Mytilineos itself have all added capacity into a Greek wholesale market with limited cross-border export capability. Achieved prices on the merchant portion of the energy book have compressed approximately 18% year-on-year through Q1 2026. The contracted PPA cover insulates internal consumption but not the merchant tail.",
      },
      {
        heading: "Gigafactory and pumped-hydro capex slippage",
        body:
          "The Amfilochia pumped-hydro project (680 MW) and the announced gigafactory partnership remain at the capex-commitment phase. RRF-aligned funding is conditional on milestone delivery. Schedule slippage is the most plausible source of 2027 EBITDA shortfall against the €2.0 billion 2028 guide.",
      },
    ],
    references: [
      {
        tag: "[1]",
        publication: "Metlen Energy & Metals",
        title:
          "Annual Report and Financial Statements 2024 — consolidated and parent-only.",
        year: "2025",
        url: "metlen.com/investors",
      },
      {
        tag: "[2]",
        publication: "London Stock Exchange",
        title:
          "Prospectus — Metlen Energy & Metals plc, premium listing, Main Market.",
        year: "2024",
        url: "londonstockexchange.com",
      },
      {
        tag: "[3]",
        publication: "Wood Mackenzie",
        title: "Global aluminium cost service — 2025 update, EU smelter cohort.",
        year: "2025",
      },
      {
        tag: "[4]",
        publication: "Kathimerini",
        title:
          "Mytilineos becomes Metlen: the industrial rebrand and the London ambition.",
        year: "2024",
        url: "ekathimerini.com",
      },
      {
        tag: "[5]",
        publication: "Reuters",
        title:
          "Greece's Mytilineos secures London listing, eyes FTSE inclusion.",
        year: "2024",
        url: "reuters.com",
      },
    ],
  },
  {
    id: "helleniq-2026-05",
    number: "002",
    title:
      "Helleniq Energy: ADNOC strategic stake and the Eastern Mediterranean refining shift",
    shortTitle: "Helleniq Energy",
    sector: "Energy / Downstream",
    date: "2026-05-08",
    recipientInitials: "K.K.",
    executiveSummary: {
      bottomLine:
        "Gulf-capital entry into Helleniq Energy alongside the Latsis-family Paneuropean holding signals a structural re-pricing of EU refining assets that the Athex has not yet absorbed.",
      paragraphs: [
        "Helleniq Energy, the former Hellenic Petroleum, operates the largest refining and marketing footprint in the Eastern Mediterranean: three Greek refineries (Aspropyrgos, Elefsina, Thessaloniki) with combined nameplate capacity of 344 kbd, a retail network across Greece, Cyprus, Bulgaria, Serbia, and Montenegro, and an upstream interest in the Energean E&P platform that runs the Karish and Tanin fields offshore Israel. Group reported EBITDA for FY2024 was €772 million on a clean basis, with refining contributing roughly two-thirds.",
        "Press coverage and confirmed bilateral discussions during Q1 2026 indicate that ADNOC has explored a strategic minority stake in Helleniq Energy, with the Paneuropean Oil and Industrial Holdings vehicle (the Latsis family interest, currently 45.5%) as the principal counterparty rather than HRADF, the state holding (35.5%). The structure under discussion is consistent with ADNOC's pattern at OMV — a non-controlling, board-represented position that anchors a long-term commercial relationship rather than a takeover. No definitive agreement is public.",
        "The strategic logic is downstream-led. Elefsina, post the 2010-2012 upgrade, has a Nelson complexity index of 11.54 — among the highest in the Mediterranean. Its product slate is structurally long the middle distillates that ADNOC trades into European demand. The Gulf NOC capital validates the EU refining base at exactly the moment European energy policy is most ambiguous about its future. The Athex shares, which traded down 9% from January to April 2026 on the refining-margin normalization narrative, do not reflect this strategic-capital signal.",
      ],
    },
    thesisParagraphs: [
      "Gulf NOC capital is a stronger validation of EU downstream than the transition narrative reads. ADNOC's 24.9% stake in OMV (originally 2022, increased in 2024), the 25% Borealis acquisition that followed, and the announced Covestro acquisition together describe a deliberate strategy of acquiring European downstream and chemicals exposure at cyclical-trough multiples. A move on Helleniq Energy completes the Mediterranean tile of that map. The capital is patient, board-represented, and indifferent to quarterly multiple compression. The market is treating EU refining as a fading asset class; the largest commercial counterparty in the world is treating it as a structural long.",
      "Elefsina's complexity is the underappreciated structural asset. The 2012 deep-conversion upgrade — hydrocracker, FCC, vacuum distillation — converted the refinery from a margin-taker on simple product slates to one of the highest-Nelson assets in the Med. In a normalized environment Elefsina captures roughly $7-9/bbl over the Med benchmark on diesel and jet output. The IMO 2020 fuel switch and the durable middle-distillate tightness driven by reduced Russian product flows into the EU have extended the cycle in which this complexity premium is monetized. The asset is mis-modeled as a commodity refinery; it is a complexity-arbitrage refinery in a region that needs it.",
      "The renewables pivot, executed through Helleniq Renewables, is the multiple lever. The unit holds approximately 380 MW of operating renewable capacity and a 2.1 GW pipeline through 2027, with the Kozani 204 MW solar park already at the largest operating scale in southeastern Europe. Execution of even half of the pipeline takes the unit from immaterial to roughly 18-22% of group EBITDA by 2028 on our framework. At that point the conglomerate trades at a sum-of-the-parts that requires the market to apply a yieldco multiple to the renewables stack and a normalized refining multiple to the downstream — a re-rating the consolidated holding-company multiple is structurally incapable of pricing.",
    ],
    comparables: {
      rows: [
        {
          target: "Motiva Enterprises (US refining JV)",
          acquirer: "Saudi Aramco",
          year: "2017",
          enterpriseValueEurM: "10,500",
          evToEbitda: "7.6x",
          notes:
            "Full buyout from Shell; established Aramco's pattern of refining-asset control via NOC capital.",
        },
        {
          target: "OMV AG",
          acquirer: "ADNOC (stake)",
          year: "2022, 2024",
          enterpriseValueEurM: "5,800",
          evToEbitda: "5.4x",
          notes:
            "Non-controlling stake increased over two years; closest structural precedent for Helleniq.",
        },
        {
          target: "Vivo Energy",
          acquirer: "Vitol (consortium)",
          year: "2019",
          enterpriseValueEurM: "2,300",
          evToEbitda: "6.8x",
          notes:
            "Public-to-private of African retail platform; trader-led downstream consolidation.",
        },
        {
          target: "Venture Global LNG (offtake)",
          acquirer: "Reliance Industries",
          year: "2023",
          enterpriseValueEurM: "n/a",
          evToEbitda: "n/a",
          notes:
            "Strategic LNG offtake agreement; precedent for Asia-buyer / Atlantic-asset structures.",
        },
        {
          target: "Rongsheng Petrochemical (strategic stakes)",
          acquirer: "Saudi Aramco",
          year: "2023",
          enterpriseValueEurM: "8,200",
          evToEbitda: "4.8x",
          notes:
            "10% strategic acquisition; integrated refining-petchem play, Asia-Gulf flow.",
        },
      ],
      footnote:
        "Source: company filings, Reuters, FT, S&P Capital IQ. EV/EBITDA at transaction announcement on consensus FY. Comparable set selected for NOC-buyer / strategic-minority structure rather than full takeout precedent.",
    },
    risks: [
      {
        heading: "EU refining margin normalization post-2025",
        body:
          "The 2022-2024 distillate margin spike is normalizing. Med complex margins have compressed roughly 35% from 2023 peak through Q1 2026. A faster-than-expected return to the 2018-2019 mid-cycle band would compress refining EBITDA by €200-260 million against current run-rate. The Elefsina complexity premium provides a floor but does not insulate the segment from the cyclical move.",
      },
      {
        heading: "Eastern Mediterranean geopolitical exposure",
        body:
          "The Energean partnership and the Israel-Cyprus-Egypt upstream corridor are accretive in steady state and disruptive in any escalation scenario. Karish field production has continued through the post-October-2023 period without material interruption, but the insurance and shipping-cost step-up is real and is not visible in the headline upstream-contribution line. A Lebanese maritime border dispute reignition is the principal tail risk.",
      },
      {
        heading: "Paneuropean holding governance",
        body:
          "Any ADNOC structure would be negotiated principally with Paneuropean rather than with HRADF or the free float. The Latsis-family vehicle has historically been a stable holder, but the inter-family governance dynamics during a stake-sale negotiation are opaque to outside shareholders. Deal terms favorable to Paneuropean and dilutive to minority holders are a credible governance risk.",
      },
      {
        heading: "EU ETS cost step-up",
        body:
          "Free allocation phase-out under EU ETS Phase IV is scheduled to accelerate from 2026, with full auctioning by 2034. The annual cost step-up against current carbon prices is in the €60-90 million range for the Greek refining base. CBAM does not protect domestic-consumption product; the renewables build is a partial but not complete offset.",
      },
    ],
    references: [
      {
        tag: "[1]",
        publication: "Helleniq Energy",
        title:
          "FY2024 Results — Financial and Operating Review, consolidated.",
        year: "2025",
        url: "helleniqenergy.gr/investors",
      },
      {
        tag: "[2]",
        publication: "Reuters",
        title:
          "ADNOC studies strategic stake in Greece's Helleniq Energy, sources say.",
        year: "2026",
        url: "reuters.com",
      },
      {
        tag: "[3]",
        publication: "Wood Mackenzie",
        title:
          "European refining outlook — Med complex, 2025-2030 margin trajectory.",
        year: "2025",
      },
      {
        tag: "[4]",
        publication: "Financial Times (Lex)",
        title:
          "Gulf capital and European downstream: the patient buyer arrives.",
        year: "2025",
        url: "ft.com/lex",
      },
      {
        tag: "[5]",
        publication: "International Energy Agency",
        title:
          "Oil 2025 — Analysis and forecast to 2030, refining chapter.",
        year: "2025",
        url: "iea.org",
      },
    ],
  },
];
