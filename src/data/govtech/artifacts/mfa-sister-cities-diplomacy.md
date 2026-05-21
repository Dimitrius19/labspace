# Business Plan

**Venture:** Φιλόξενος — Sister-Cities & Cultural-Diplomacy Outreach Agent
**Sponsor:** T-Life Capital, Athens
**Buyer:** ΥΠΕΞ — Γενική Γραμματεία Δημόσιας Διπλωματίας & Απόδημου Ελληνισμού (ΓΓΑΕ), Hellenic Foundation for Culture (Ελληνικό Ίδρυμα Πολιτισμού), KEDE sister-cities desk.

## Company thesis

Greek cultural diplomacy is a 5-7 million-person soft-power asset run by a desk of ~12 people in Athens. ΓΓΑΕ, the Hellenic Foundation for Culture and KEDE collectively maintain ~1,800-2,400 partner-organisation relationships across 40+ countries: ~470 αδελφοποιήσεις, 220+ Greek-studies chairs and Hellenic Centers at overseas universities, ~1,200 diaspora associations (Astoria NY, Melbourne, Chicago, Toronto, Stuttgart, Sparta TX, Tarpon Springs FL). Most αδελφοποιήσεις go cold within 18 months of signing; the KEDE registry has dozens dormant for a decade.

Φιλόξενος is a relationship-graph CRM with an agentic layer that monitors public signals from those 2,000+ organisations, surfaces "this relationship just had a moment" triggers, drafts bilingual outreach in EL/EN/FR/DE, matches Greek-municipality budget envelopes to sister-city anniversaries, and tracks follow-through quarterly into a "state of the network" report for the Deputy Minister and the Hellenic Foundation board. We do not replace the desk officer; we give one officer the leverage of ten.

This is **not** a generic CRM, **not** marketing automation, and **not** a chatbot. It is a *relationship-graph workflow* — closer in spirit to GDS i.AI Caddy and DINUM Assistant IA than to Salesforce. Diaspora cultural diplomacy is a *relationship-maintenance* problem, and that is exactly what an agentic layer beats human-by-hand at when relationship count exceeds officer headcount by two orders of magnitude.

## Why now (May 2026)

Four windows converge:

- **Ireland Diaspora Strategy 2026-2030** launched in New York on 12 May 2026 with a €15-20M annual envelope for its 70-million global diaspora. Freshest EU precedent; Greece's diaspora (AU 400k, US 1M+, DE 450k, CA 270k) is bigger relative to resident population. Greek MFA cannot lag Ireland.
- **EU Cohesion 2027+** programming opens negotiations 2026-2027; diaspora-engagement line items are defensible inside the territorial-cooperation envelope. A pilot deployed by Q4 2026 becomes a *reusable artefact* for Greek negotiators.
- **Νόμος 5299/2026** governs Greek AI/data rules; B2G relationship data is low-sensitivity. **EU AI Act Annex III deferred to 2 December 2027** (Omnibus deal, 7 May 2026) — the 2026 pilot ships without high-risk-classification friction.
- **Loverdos' Strategic Plan for Greeks Abroad 2024-2027** has explicit AI/digital language (Neos Kosmos, Feb 2026). Political cover named, strategic document extant, deputy ministry created precisely to do this.

## Market & buyer

Three concentric buyers:

- **Primary**: ΓΓΑΕ at ΥΠΕΞ — strategic owner of diaspora engagement, ~12 officers + Deputy Minister chief of staff.
- **Co-buyer**: **Ελληνικό Ίδρυμα Πολιτισμού** — runs Greek-studies chairs, cultural-attaché outreach, Ελληνομάθεια. Smaller budget but *programme owner*.
- **Channel**: **KEDE** — owner of the sister-cities registry. KEDE matters because Hellenic Foundation and Deputy-Minister roles are political; KEDE is permanent. Pilot co-funding via 3-5 active αδελφοποιήσεις municipalities (Sparti ↔ Sparta TX, Athens ↔ Chicago, Kalamata ↔ Tarpon Springs FL, Kalymnos ↔ Darwin AU, Patras ↔ Bridgeport CT) anchors permanence.

Entry budget: **€40-80k pilot** via απευθείας ανάθεση at ΓΓΑΕ, optionally cost-shared with 2-3 KEDE municipalities. Year-2: €150k across the cultural-diplomacy portfolio + KEDE module + chairs layer. Year-3 EU-cohesion scale: €400-700k.

## Product (agentic loop in detail)

Six steps, all GDPR-compliant on public-domain B2G relationship data:

1. **Maintain a single relationship graph**: nodes = 332 Greek municipalities, ~470 αδελφοποιήσεις partners, ~220 Greek-studies chairs, ~1,200 diaspora associations, Hellenic Foundation programmes, embassy cultural attachés. Edges = formal agreements, joint events, named officers, last-contact timestamps, budget envelopes. Built from public ΓΕΜΗ, KEDE registry, university directories, diaspora-federation membership rolls.
2. **Monitor public signals**: chair announcements, sister-city press, diaspora-association event calendars, diaspora press (Neos Kosmos AU, National Herald US, Griechenland Zeitung DE). Surface "moment" triggers — chair filled, anniversary approaching, civic event landing.
3. **Score and route** each trigger to the responsible desk officer with a one-page Greek context brief.
4. **Draft outreach** in EL/EN/FR/DE on behalf of the named officer. Officer reviews, edits, signs and sends from their own ΥΠΕΞ mailbox. *Officer signs, agent never sends.*
5. **Coordinate joint events**: draft agendas, propose dates, match available budget envelope, draft the πρόσκληση and press paragraph.
6. **Track and report**: who replied within SLA, what was committed, did the event happen. Quarterly "state of the network" report for Deputy Minister + Hellenic Foundation board, with dormancy heatmap as headline visual.

Stack: ILSP Meltemi for the EL register, Mistral/Llama for EN/FR/DE, Neo4j graph on EU sovereign infrastructure under Νόμος 5299/2026. No diplomatic-classified material — explicitly off-limits per ministries-pack kill-zone.

## Revenue model & pricing

- **Anchor pilot**: €60k flat, 6 months, ΓΓΑΕ + Hellenic Foundation. απευθείας ανάθεση. Optionally cost-shared with 2-3 KEDE municipalities at €5-10k.
- **Annual subscription**: €80k/year for the ΓΓΑΕ + Hellenic Foundation bundle; €15k/year per KEDE municipality (target 20 by month 18 = €300k/year).
- **EU-cohesion module**: €400-700k Diaspora & Citizens Engagement co-funded under 2027+ programming.

Year-2 ARR plan: €380-480k. Year-3 with cohesion + Cyprus: €900k-€1.2M. Standalone unit economics are tight; the venture is consciously designed as a **bundle play** with the diaspora-consular-concierge venture — Φιλόξενος is the relationship layer, the concierge is the citizen-transaction layer.

## Unit economics

Cost-to-serve per buyer (steady state): ~€14k/year (graph hosting + inference + diaspora-press licences + 0.15 FTE customer success). Gross margin at €80k anchor ≈ 82%. Per-municipality module is the volume engine: ~€800/year incremental cost at €15k ACV → 94% margin. CAC: zero paid; one founder-led KEDE roadshow.

## Capital plan & milestones (24-month)

**Pre-seed €450k from T-Life + one diaspora angel (HALC / Greek Community of Melbourne / AHEPA tier), month 0-3.** Use: 2 engineers, 1 partnerships lead, graph infrastructure, the demo against public KEDE/ΓΕΜΗ/university directories.

- **Month 2** — Joint meeting with ΓΓΑΕ + diaspora-concierge venture (bundled pitch).
- **Month 4** — Pilot signed: ΓΓΑΕ + Hellenic Foundation + 3 anchor KEDE municipalities. €60k.
- **Month 6** — Pilot live; graph populated with ~1,800 entities; first quarterly report delivered.
- **Month 9** — 10 KEDE municipalities signed at €15k/year. ARR ≈ €230k.
- **Month 12** — Hellenic Foundation chairs module live. ARR ≈ €310k.
- **Seed €1.6M, month 12-15** — Marathon VC / Velocity Partners + diaspora-fund LP (Hellenic Initiative).
- **Month 18** — 20 municipalities live; ΓΓΑΕ contract renewed at €120k/year. ARR ≈ €480k.
- **Month 24** — EU-cohesion 2027+ module at €400-700k. Cyprus diaspora office in advanced talks.

## Team & hires

Founding team (3): CEO with diaspora civic-network credibility (HALC / Greek Community of Melbourne / AHEPA leadership tier — per qualification founderMarketFit=4, this is the largest natural founder pool we have), CTO with CRM + relationship-graph engineering, founding engineer (multilingual drafting, NER, public-feed ingestion). Year-1 hires: cultural-sector partnerships lead, KEDE municipalities liaison, product engineer.

The founder hunt is the binding constraint and is the inverse of the EastMed OSINT venture's: there we needed an Athens-bench foreign-policy NLP analyst (single-digit pool); here we need a diaspora-network civic operator (pool is 5M+ people, but the entrepreneurially-inclined slice is small). T-Life's diaspora-recruitment motion runs from week 1.

## Risks & mitigations

- **"We have no software budget — our budget is for cultural programmes."** Qualification's headline buyerObjection. Mitigation: reframe pricing as a programme-multiplier line ("for the cost of one cancelled lecture series, the tool keeps 200 relationships warm year-round"). €60k ≈ one Athens-NYC business-class flight pair plus catering for the Deputy Minister's annual diaspora roundtable — authorisable without committee.
- **"Why don't we just copy Ireland?"** Fresh risk per qualification. Mitigation: pitch the Greek-specific differentiation up front — αδελφοποιήσεις + Greek-studies chairs + Greek-Orthodox civic networks + Hellenic Foundation programme grid is an architecture Ireland's strategy does not cover. Ireland's tool is a strategy document; Φιλόξενος is the operating layer.
- **Political appointees** at Hellenic Foundation and Deputy Min (lockInRisk=3). Mitigation: anchor the pilot to KEDE channel and 3 named municipalities by contract — those signatures survive a reshuffle.
- **Standalone unit economics are marginal year-1**. Mitigation: bundle with diaspora-consular-concierge venture; same Deputy Minister meeting, same procurement vehicle.
- **GDPR**. Scope strictly limited to publicly-published B2G relationship data — no individual diaspora citizen PII enters the graph. DPIA filed pre-pilot as courtesy.
- **KEDE municipal procurement fragmentation** (332 municipalities, varying IT maturity). Mitigation: KEDE as multi-buyer aggregator — sell once to KEDE national, deploy per-municipality opt-in.

---

# Pitch Deck

## Slide 1 — Cover

- **Φιλόξενος** — Διαχείριση Σχέσεων Δημόσιας Διπλωματίας & Απόδημου Ελληνισμού
- Sovereign, GDPR-friendly, EL/EN/FR/DE relationship-graph workflow
- T-Life Capital, Αθήνα — Μάιος 2026
- Πιλότος: ΓΓΑΕ + Ίδρυμα Πολιτισμού + 3 αδελφοποιήσεις KEDE, €60k

## Slide 2 — The problem

- ~2,000 partner-organisation relationships across 40+ countries, run by a desk of 12 ΓΓΑΕ officers
- Most αδελφοποιήσεις go cold within 18 months; the KEDE registry has dozens dormant for a decade
- 5-7M diaspora, 470+ sister cities, 220+ chairs, 1,200+ associations — no operating layer
- ΓΓΑΕ ships PDF reports, not relationships

## Slide 3 — Why now

- **Ireland Diaspora Strategy 2026-2030** launched 12 May 2026, €15-20M envelope — Greek MFA cannot lag
- **EU Cohesion 2027+** programming opens 2026-2027; diaspora line items negotiable now
- **Loverdos Strategic Plan 2024-2027** has explicit AI/digital language (Feb 2026)
- **Νόμος 5299/2026** + EU AI Act Annex III deferred to 2 Dec 2027 — window open
- **Diaspora soft-power**: AU 400k, US 1M+, DE 450k, CA 270k — outsized vs population

## Slide 4 — Solution: the agentic loop, with the structural moat

- Single graph: 332 municipalities ↔ 470 sister cities ↔ 220 chairs ↔ 1,200 diaspora associations ↔ Hellenic Foundation programmes
- Public-signal monitor surfaces "moment" triggers; officer signs, agent never sends
- EL/EN/FR/DE drafting in cultural-diplomacy register
- Quarterly "state of the network" report for Deputy Minister + Hellenic Foundation board
- **Moat = the Greek-specific relationship architecture** Ireland's strategy does not cover

## Slide 5 — Demo screen

- Σπάρτη ↔ Sparta TX 60th-anniversary αδελφοποίηση in Nov 2026 — draft πρόσκληση + matched €4k envelope ready
- Eight Astoria NY diaspora-association calendars had October events; only 2 had embassy presence
- University of Melbourne Greek Studies chair appointment last week — outreach draft awaiting officer review
- Officer signs from their own mailbox; agent never sends
- Time-to-draft on a typical "moment": 90 seconds

## Slide 6 — Market & buyer

- **Primary**: ΓΓΑΕ at ΥΠΕΞ — Loverdos' direct portfolio per 2024-2027 Strategic Plan
- **Co-buyer**: Ελληνικό Ίδρυμα Πολιτισμού — programme owner of chairs
- **Channel**: KEDE — sister-cities desk + 20-30 active αδελφοποιήσεις municipalities
- **Entry**: €60k απευθείας ανάθεση — no open tender
- **Year-3**: EU Cohesion 2027+ envelope (€400-700k module)

## Slide 7 — Precedents (refreshed May 2026)

- **Ireland Diaspora Strategy 2026-2030** (12 May 2026, NYC) — freshest EU template; €15-20M envelope, 70M diaspora. We are the *operating layer* under a Greek equivalent
- **India Pravasi Bharatiya Divas + MEA diaspora outreach** (2003-ongoing) — structured association engagement at scale
- **Israel Diaspora Affairs Ministry platform** (2018-ongoing) — annual mapping and outreach
- **UK GDS i.AI Caddy + DINUM Assistant IA** — caseworker copilot shape we copy for cultural-diplomacy desk officers

## Slide 8 — Business model

- Pilot: €60k, 6 months, απευθείας ανάθεση, ΓΓΑΕ + Hellenic Foundation + 3 KEDE municipalities
- ΓΓΑΕ anchor: €80k → €120k/year
- KEDE module: €15k/municipality/year (target 20 by month 18)
- Year-2 ARR €380-480k; Year-3 with EU cohesion €900k-€1.2M

## Slide 9 — Competition & moat

- No Greek SI sells cultural-diplomacy CRM into ΥΠΕΞ
- Salesforce/HubSpot: generic CRM, no EL register, no diaspora graph, no signal feed
- Ireland's strategy is a *policy*, not a product — does not cover αδελφοποιήσεις + chairs + Hellenic Foundation programmes
- **Moat**: Greek-specific relationship architecture + EL/EN/FR/DE drafting + bundle with diaspora-concierge

## Slide 10 — Team

- CEO — diaspora civic-network operator (HALC / Melbourne / AHEPA tier)
- CTO — CRM + relationship-graph engineering (Neo4j, RAG, sovereign)
- Founding engineer — multilingual drafting + public-feed ingestion
- Cultural-sector partnerships lead — ex-Hellenic Foundation or ex-attaché
- T-Life as institutional co-founder; diaspora angel as anchor LP

## Slide 11 — Ask

- €450k pre-seed at €3M post — T-Life + one diaspora angel
- 24-month plan: €380-480k ARR, ΓΓΑΕ + Hellenic Foundation + 20 KEDE municipalities live
- First decision: 60-minute joint slot with ΓΓΑΕ + Loverdos' chief of staff in 4 weeks — bundled with diaspora-concierge, not standalone

---

# Go-to-Market Plan

## Champion identification

We deliberately do **not** pursue a standalone champion meeting. The qualification's next-30-days plan is explicit: bundle Φιλόξενος with the diaspora-consular-concierge pitch and walk both into the same Deputy Minister meeting. Best champion: **Deputy Minister for Greeks Abroad Loverdos' chief of staff**, with the **ΓΓΑΕ** GS as operational co-champion and the **Hellenic Foundation director** as programme co-buyer. The covering anchor that survives a reshuffle is **KEDE leadership** plus 3-5 αδελφοποιήσεις-active mayors.

Introduction path: a diaspora-association-president cap-table angel (HALC / Melbourne / AHEPA Supreme President tier) into Loverdos' chief of staff, with parallel KEDE introduction through an Athens-region mayor. We do not enter via ΥΠΕΞ IT — this is programme-multiplier, not IT modernisation.

## First-meeting choreography

A 60-minute slot at Akadimias, bundled with the diaspora-concierge pitch (concierge 20 min, Φιλόξενος 20 min, joint Q&A 20 min). Five from our side: T-Life partner, both venture CEOs, one engineer with the demo, one diaspora-association senior advisor.

The demo runs three live "wow-moments" against public data assembled in advance: (1) Sparti ↔ Sparta TX 60th-anniversary in Nov 2026 with a draft προσκλητήριο and matched €4k envelope; (2) "20 dormant αδελφοποιήσεις in your registry had a moment last quarter" — Athens ↔ Chicago partnership, Kalamata ↔ Tarpon Springs FL festival, Patras ↔ Bridgeport CT Greek-school anniversary; (3) Melbourne Greek Studies chair appointment with a ready cultural-attaché outreach draft.

We say "πολλαπλασιαστής προγραμμάτων" (programme-multiplier), not "λογισμικό" — the headline buyerObjection is the "we have no software budget" reflex and the framing controls the room.

## Pilot offer

- **Scope**: ΓΓΑΕ desk officers (~12 seats) + Hellenic Foundation programme officers (~6 seats) + 3 αδελφοποιήσεις municipalities (Athens ↔ Chicago, Sparti ↔ Sparta TX, Kalamata ↔ Tarpon Springs FL). Graph populated with all 470 αδελφοποιήσεις, 220 chairs, top 200 diaspora associations across AU/US/DE/CA.
- **Price**: €60k flat, 6 months, απευθείας ανάθεση. ΥΠΕΞ pays €40k; Hellenic Foundation €10k; 3 KEDE municipalities €3-5k each.
- **Success metrics** (in writing before kickoff):
  - Graph populated to ≥ 1,800 entities by week 8
  - ≥ 30 surfaced "moments" routed to officers per month
  - Officer time saved ≥ 6 hours/officer/month (diary log)
  - ≥ 12 officer-signed outreach communications sent per month
  - 1 quarterly "state of the network" report delivered
  - Net new bilateral events catalysed ≥ 8 (vs ≤ 2 baseline)
- **Timeline**: Week 1-4 graph build + onboarding; week 5-8 shadow mode; week 9-20 live mode; week 21-26 Q3-report + expansion proposal.

## Expansion path

Month 6-9: KEDE roadshow to the 20 most-active αδελφοποιήσεις municipalities (Athens, Thessaloniki, Patras, Heraklion, Sparti, Kalamata, Volos, Larissa, Ioannina, Kavala, Mytilini, Chania, Rhodes, Kalymnos, Corfu, Lamia, Tripoli, Drama, Komotini, Argos). €15k/year; 10 signed by month 9, 20 by month 18. Month 9-12: chairs module (220 chairs across Melbourne / Sydney / Princeton / Columbia / Chicago / Oxford / Cambridge / Humboldt / Sorbonne). Month 12-18: cultural-attaché module at top 10 embassies (Washington, Canberra, Berlin, London, Ottawa, Brussels, Paris, Rome, Nicosia, Buenos Aires). Month 18-24: EU Cohesion 2027+ co-funded module at €400-700k; Cyprus diaspora office as first foreign customer.

## Procurement vehicle

Entry through **απευθείας ανάθεση** at <€60k under ΥΠΕΞ public-diplomacy discretionary. Per-municipality KEDE subscriptions sit under each municipality's cultural-cooperation discretionary line. We register in **Μητρώο Προμηθευτών Δημοσίου** during the pilot for year-2 tender eligibility. The year-3 EU-cohesion module sits under **2027+ Territorial Cooperation & Citizens' Engagement** programming, applied for by ΥΠΕΞ and ΓΓΑΕ with Φιλόξενος as named technical artefact — same shape as Ireland's Global Ireland deployments. We never bid prime above €600k in year 1; we partner with a Greek SI (Performance Technologies, Uni Systems) as nominal prime and retain product control via licence. No Crocus-style incumbent risk — no Greek incumbent in cultural-diplomacy CRM.

## PR/comms strategy

First public mention is a joint ΥΠΕΞ-led paragraph on day 1, framed as *"ΥΠΕΞ enlists Greek-built AI workflow to scale public diplomacy with the diaspora"* — Deputy Minister and Hellenic Foundation director quoted, company name as footnote. Second beat: a 6-month read-out at the Deputy Minister's annual diaspora roundtable (Astoria NY or Melbourne) — the diaspora civic community is the credibility audience, not the tech press. Third beat: Reworks or Beyond only after ARR clears €300k. We never publish on specific αδελφοποιήσεις content; press inquiries get a one-line "we provide the tooling; the Ministry and the municipalities own the relationship" — every time.

The narrative against the Ireland question: Ireland published a strategy in May 2026; Greece is *operationalising* one. The first read-out proves Greek cultural diplomacy is not lagging — it is shipping.
