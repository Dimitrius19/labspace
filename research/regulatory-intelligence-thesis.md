# Thesis — Regulatory & Parliamentary Intelligence (RegIntel)

**Studio motion:** Motion C / B hybrid (Dimitri-runnable AI-native services →
productised SaaS). Spun out of the `vouli-signal` engine.

**Thesis.** The entity-resolved Greek parliamentary corpus + a distilled model
stack (topics, stance, NER→laws/ΦΕΚ, grievance extraction, RAG) is not just an
internal sourcing tool — it is a **regulatory-risk product**. Every corporate,
law firm, embassy and public-affairs team operating in Greece needs early warning
on what Parliament is about to do to their sector, and today gets it via expensive
human monitoring (Big-4 public-affairs retainers, in-house government-relations).
AI-native monitoring undercuts that on cost while covering more surface.

**Product.** A horizon-scanning + alerting layer over plenary, committee, written
questions, votes and bills→laws→ΦΕΚ: per-sector dashboards, "what changed this
week," named-stakeholder maps, sentiment-toward-industry, and a RAG query box —
each alert grounded in cited transcript turns.

**Why AI-native wins on cost.** Human public-affairs monitoring is €60–200k/yr
per sector retainer; an AI agent covers the full corpus continuously at a fraction
of that, and scales across sectors and (via ParlaMint's 29 countries) across the EU.

**Named buyers (3–5, reachable).**
- **Family-office defensive use first:** a **pharma/health regulatory monitor**
  for ELPEN / WinMedica interests — drug pricing, ΕΟΠΥΥ, clawback, generics policy
  surfaced in Parliament in real time. Zero-CAC design partner inside the family.
- Greek/Brussels law firms with regulatory practices (Bird & Bird, Zepos &
  Yannopoulos, KG Law) as channel + design partners.
- Sector associations (SEV, SFEE/pharma, HELPE-adjacent energy, HBA/banking).
- Embassies / chambers of commerce.

**Why incumbents can't ship it in 12 months.** Big-4 public-affairs P&Ls are
billable headcount; cannibalising them needs board approval. Vouliwatch is
civic/free but not a sector-risk product (partner, don't compete). No Greek
AI-native regulatory-intelligence product exists in 2026.

**Structural defensibility.** (a) Entity-resolved Greek corpus + distilled models
= a data/representation moat that compounds; (b) bills→laws→ΦΕΚ outcome linkage is
hard to assemble; (c) design-partner law-firm relationships; (d) EU-wide
replicability on the same pipeline.

**EU AI Act / GDPR.** Analytic monitoring of public figures' public statements —
rely on Art. 85 (journalistic/academic/expression) for the Art. 9 political-opinion
data; keep it decision-support, never automated decisioning; publish a model card.
Low AI-Act risk as long as it informs humans rather than scoring individuals.

**Unit economics.** SaaS €1.5–5k/sector/month; a sector account runs on near-zero
marginal inference after the shared corpus/model cost. 80%+ gross margin at scale;
land-and-expand across sectors per account.

**Phase-0 kill test (≤€55k, ≤16 weeks).** Stand up the pharma-risk monitor for the
family office + one paid law-firm design partner at ≥€25k for one sector; deliver
8 weeks of weekly briefs with ≥1 alert the partner agrees they'd have missed.
Binary: signed design-partner PO + family-office adoption, or kill.

**p(survives 2-round red-team): 0.55.** Strongest non-pharma-core asset edge in the
catalogue: it has a captive first customer (the family office), a real cost-disruption
story vs Big-4 retainers, a compounding data moat, and an EU-scale path — while
staying clear of the sovereign-free-system and SOR-incumbent kill patterns.

**Risks.** (a) Data access for committee/ΦΕΚ at scale (mitigated: bulk + tail
scrape, partner with Vouliwatch for votes); (b) the geo/IP block on the main host
(mitigated: GR egress, documented); (c) buyer education cycle (mitigated: lead with
the captive family-office use case as the reference).
