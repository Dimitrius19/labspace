# Business Plan

**Venture:** Ορίζοντας — EastMed & Western-Balkans OSINT Brief Agent
**Sponsor:** T-Life Capital, Athens
**Buyer:** Ministry of Foreign Affairs — Directorate A1 (Turkey-Cyprus), Directorate A2 (Western Balkans), Directorate B1 (EU), Public Diplomacy office (Press & Communication).

## Company thesis

Every morning between 04:30 and 07:30 Athens time, around 25-30 desk officers across MFA Athens read the same Turkish, Cypriot, Albanian, North-Macedonian, Israeli and EU press, and re-do the same translate-cluster-summarise loop by hand. Ορίζοντας is a sovereign, unclassified, *directorate-configurable* OSINT drafting workflow that takes that loop off their desks and lands a 2-page Greek brief plus a one-paragraph English version into each directorate inbox by 06:30. Officers keep authorship and judgement; the agent removes the Ctrl-C tax.

We are explicit on shape: this is **not** a general-purpose ministerial chatbot. The UK GDS i.AI Redbox sunset in December 2025 settled that debate — the precedent that won is **DBT Assist** (departmental "Assist" specialisations, Feb 2026), and the precedent that lost is general-purpose ministerial drafting. Ορίζοντας is a specialised workflow tool with a named directorate input, named directorate output, and a citation trace on every claim.

We are not selling intelligence. We are selling drafting throughput on public sources, in a register a multinational vendor cannot ship.

## Market & buyer

Primary buyer: MFA Athens directorates A1, A2, B1 plus Public Diplomacy. Roughly 25-30 desk officers and 4 GS-level signers. Champion: Directorate A1 head, cover from GS Public Diplomacy and the Minister's chief of staff (this memo's audience). Entry budget: a sub-€60k *απευθείας ανάθεση* pilot for one directorate, scalable to ~€200k across four directorates by month 9, and to a €600k-€1.2M open tender by month 18-24 once a second ministry (Defence policy planning, Migration & Asylum policy planning) onboards as a logo. Adjacent EU-MFA buyers (Cyprus MFA, Western-Balkan accession countries' EU-affairs directorates) are realistic year-2 expansion of the same product.

## Product (agentic loop in detail)

Seven steps, all unclassified, all auditable:

1. **Ingest** a curated feed (~120 Turkish, Cypriot, Albanian, North-Macedonian, Israeli sources; EU institutional feeds — Council, EEAS, EP; UN docs; selected think-tanks: SETA, TESEV, ELIAMEP, IFRI, RAND-Europe).
2. **Translate & normalise** EN/TR/SQ/MK/FR/AR → EL with named-entity normalisation (people, places, weapons systems, energy assets, treaties) tied to a curated MFA-owned gazetteer.
3. **Cluster** items by storyline (e.g. *"Turkish naval activity south of Kastellorizo this week"*, *"North Macedonia constitutional amendments"*).
4. **Score** each storyline against a directorate-configurable relevance rubric (treaty implications, ministerial-statement risk, parliamentary-question likelihood).
5. **Draft** a 2-page brief in Greek civil-service register with inline citations to the public source, plus a one-paragraph English version for foreign-counterpart use.
6. **Deliver** to the desk officer's inbox by 06:30; officer reviews, edits, signs off. *Officer signs, not the agent.* No auto-publish to any channel.
7. **Archive** the published brief into a searchable Greek-language OSINT corpus the directorate owns (not us).

Stack: ILSP **Meltemi** Greek LLM (publicly available, useable as base) or a fine-tuned Mistral/Llama on Greek + Turkish admin corpora, running on EU sovereign infrastructure (GR-IX or French OVHcloud Bare Metal Pod compliant with SecNumCloud-equivalent). RAG over a per-source feed. Every claim in the draft has a clickable citation back to the public source — non-negotiable, written into the SOW from day 1.

## Revenue model & pricing

Three lines:

- **Pilot SaaS**: €40k–€60k flat fee for one directorate, 4-month engagement, includes deployment + 3 desk-officer seats. Funded via *απευθείας ανάθεση*.
- **Annual subscription per directorate**: €60k/year per directorate post-pilot (4 directorates = €240k ARR by month 12).
- **Per-seat add-on**: €4k/seat/year for read-only Minister's-office and political-office users; expected 15-25 seats.

Year-2 ARR plan: €0.9M–€1.3M with MFA-only. Year-3 with one second ministry + Cyprus MFA: €2.2M–€3M ARR.

## Unit economics

Cost-to-serve per directorate (steady state): ~€18k/year (inference + sovereign hosting + curated-feed licences + ~0.2 FTE customer success). Gross margin per directorate at €60k ARR ≈ 70%. Curated-feed licensing (Turkish/Albanian press) is the only meaningful variable cost; we negotiate at the founding subscription tier.

CAC for first 4 directorates is one founder-led sales motion within MFA: zero paid acquisition, ~€25k of founder time per directorate. Payback under 6 months on a €60k ACV. After ministry #2 lands, CAC for inside-MFA expansion drops to near zero.

## Capital plan & milestones (24-month)

**Pre-seed €600k (T-Life Capital + one diaspora angel ticket), month 0-3.** Use: 3 engineers, 1 ex-foreign-policy analyst, sovereign-hosting deposit, DPIA + AI Act conformance work, one retro-demo built against a closed quarter of Turkish + Cypriot + Albanian press that reproduces an actual A1 morning brief side-by-side with the desk officer's published version.

- **Month 4** — Pilot signed with Directorate A1 (€50k, *απευθείας ανάθεση*).
- **Month 6** — Pilot live; 30-day desk-officer satisfaction NPS ≥ 30; brief lands by 06:30 on 95%+ of mornings.
- **Month 9** — Two additional directorates (A2, B1) signed at €60k each. ARR ≈ €170k.
- **Month 12** — Public Diplomacy office + Minister's office read-only seats. ARR ≈ €240k.
- **Seed €2.5M, month 12-15.** Lead: Marathon VC or Velocity Partners; co: a Brussels-based govtech fund.
- **Month 18** — Second ministry (Defence policy planning OR Migration & Asylum policy planning) signed for €120k pilot. Cyprus MFA in advanced talks.
- **Month 24** — €0.9M–€1.3M ARR; open-tender qualification (Μητρώο Προμηθευτών Δημοσίου) complete; ready for a €600k+ ΕΣΠΑ-co-funded tender as the next leg.

## Team & hires

Founding team (3 + 1): CEO with foreign-policy network (ex-ELIAMEP fellow OR Διπλωματική Ακαδημία graduate), CTO with Greek-NLP applied-research background (ILSP, AUEB, or NTUA ECE — the bench is thin, single-digit credible names with EL+TR+SQ+MK chops; founder hunt is the binding constraint), founding engineer (RAG/LLM), part-time senior advisor from former MFA leadership. Hires 4-8 in year 1: 2 ML engineers, 1 product engineer, 1 Greek/Turkish bilingual linguist-annotator, 1 customer success / desk-officer-liaison.

## Risks & mitigations

- **Factual slip in a published brief on a Turkey-Cyprus file** (political third-rail, severity *wound*; Parliament-floor incident if it lands). Mitigation: agent drafts, officer signs, every claim cited with clickable trace; no auto-publish to any external channel; written into the pilot SOW from day 1.
- **AI Act + GDPR scrutiny**. Mitigation: scope limited to public press; DPIA filed pre-pilot; processing on EU sovereign infrastructure; full audit log. EU AI Act Annex III enforcement was deferred to 2 Dec 2027 (Omnibus deal, 7 May 2026) — the regulatory window is open for a 2026 pilot.
- **Curated-feed licensing for Turkish/Albanian press**. Mitigation: multi-source-per-storyline so no single licensor can pull the plug; backup of RSS-public and Wayback-archived sources.
- **Founder credibility with foreign-policy community**. Mitigation: senior advisor on cap table from day 0; explicit ELIAMEP / Διπλωματική Ακαδημία partnership; the CEO hunt itself is the 30-day critical path.
- **"Why are we not just buying Redbox / Assist?"** Mitigation: name the Redbox sunset explicitly — general-purpose ministerial chatbots failed in Dec 2025 and the precedent that won is *directorate-specialised workflow* (DBT Assist, France's Assistant IA). Ορίζοντας is the Greek-MFA Assist, not a Greek Redbox.
- **Government-procurement cadence slipping right**. Mitigation: enter via *απευθείας ανάθεση* (<€60k), not via open tender.

---

# Pitch Deck

## Slide 1 — Cover

- **Ορίζοντας** — EastMed & Western-Balkans OSINT Brief Agent
- Sovereign, unclassified, Greek-first, directorate-configurable workflow
- T-Life Capital, Αθήνα — 2026
- Πιλότος: Διεύθυνση Α1 (Τουρκία-Κύπρος), σύμβαση απευθείας ανάθεσης <€60k

## Slide 2 — The problem

- Desk officers in A1/A2/B1 spend 2-3 hours every morning translating and clustering Turkish, Cypriot, Albanian, MK, IL, EU press
- The morning brief lands on the Minister's desk by 08:00 — meaning officers start at 05:00
- No Greek-language sovereign OSINT tooling exists today; English-only vendors cannot ship the register

## Slide 3 — Why now

- ILSP **Meltemi** Greek LLM is publicly available and useable as base — sovereign-LLM stack risk is retired
- The general-purpose ministerial chatbot pattern just **failed**: UK Redbox sunset Dec 2025, replaced by departmental "Assist" specialisations (DBT Assist live Feb 2026). The pattern that **won** is directorate-specialised workflow — exactly what we are pitching
- France pivoted Albert to **"Assistant IA"** (DINUM, Jan 2026) with a 10,000 civil-servant rollout — same lesson, same shape
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 (Omnibus deal, 7 May 2026) — the regulatory window is open

## Slide 4 — Solution: the agentic loop, with the structural moat

- Ingest curated **EL/TR/SQ/MK/FR/AR** feed → translate + named-entity normalise into Greek → cluster by storyline → score against directorate-configurable rubric → draft 2-page Greek brief + 1-paragraph English version, every claim cited → 06:30 inbox delivery → officer signs
- **The moat is the multilingual cross-translation: EL ↔ TR ↔ SQ ↔ MK ↔ FR ↔ AR with civil-service-register output.** No multinational LLM vendor ships Greek civil-service register; no English-only OSINT vendor ships Turkish-Albanian-Macedonian cross-translation into Greek. Both halves must hold — and only a Greek-founded venture can hold both. This is the structural defensibility, not the model.

## Slide 5 — Demo screen

- Live brief on *"Turkish naval activity south of Kastellorizo"* — generated this morning from public sources
- Left: clustered source list (12 items, 4 languages)
- Right: Greek draft in civil-service register with inline footnotes
- Officer view: accept / edit / reject per paragraph; officer signs, agent does not
- Time-to-brief: 11 minutes against synthetic 04:00-06:00 feed

## Slide 6 — Market & buyer

- Primary: MFA Athens, ~25-30 desk officers across A1 / A2 / B1 / Public Diplomacy
- Champion: Directorate A1 head; cover: GS Public Diplomacy + Minister's chief of staff
- Entry: sub-€60k *απευθείας ανάθεση* — no open-tender lift for pilot
- Expansion: 2 more ministries + Cyprus MFA in year 2

## Slide 7 — Precedents we are copying (refreshed May 2026)

- UK **DBT Assist** (Feb 2026) — departmental specialisation that replaced the sunset Redbox; *the precedent shape we are copying*
- France **Assistant IA** (DINUM, Jan 2026, ~10,000 civil servants in rollout) — sovereign-LLM stack pivoted from Albert chatbot to specialised workflow on EU infrastructure
- **HMRC copilot rollout to 28,000 staff (April 2026)** — proves the at-scale specialised-copilot pattern in a Western European civil service
- We are the Greek MFA Assist — Ορίζοντας is to A1 what DBT Assist is to DBT

## Slide 8 — Business model

- Pilot: €40k–€60k for one directorate, 4 months, *απευθείας ανάθεση*
- Annual subscription: €60k/directorate; €4k/seat for political-office read-only
- Year-2 ARR plan: €0.9M–€1.3M with MFA alone
- Gross margin per directorate ≈ 70% steady state

## Slide 9 — Competition & moat

- No Greek SI sells OSINT drafting into MFA today
- Palantir / US primes: not credible for unclassified Greek-language press work
- Multinational LLM vendors: cannot ship the Greek civil-service register
- Moat: EL+TR+SQ+MK+FR+AR ↔ EL drafting with NER, plus a directorate-owned corpus we never extract

## Slide 10 — Team

- CEO — ex-foreign-policy analyst (ELIAMEP / Διπλωματική Ακαδημία)
- CTO — Greek-NLP applied-research lead (ILSP / AUEB / NTUA ECE) with Meltemi-stack experience
- Founding engineer — RAG / sovereign-LLM deployment
- Senior advisor — former MFA leadership; T-Life Capital as institutional co-founder

## Slide 11 — Ask

- €600k pre-seed at €4M post — T-Life Capital + one diaspora angel
- 24-month plan to €0.9M-€1.3M ARR, four directorates live, ministry #2 signed
- First decision needed: a 30-minute slot with Directorate A1 in the next two weeks, with the Minister's chief of staff in the room

---

# Go-to-Market Plan

## Champion identification

The single highest-leverage champion is the **head of Directorate A1 (Turkey-Cyprus)**. Three reasons: A1 is the permanent A-list MFA file, A1's desk officers are the loudest internal voice against the 04:30 alarm clock, and the GS for Public Diplomacy reports up into the Minister's chief of staff who is our second-order buyer. The covering champion is the **GS for Public Diplomacy**; the political champion is the **Minister's chief of staff** (this memo's audience). We map the introduction path through a senior advisor on our cap table — either a former MFA leader or a current ELIAMEP fellow with a permanent door into A1.

We deliberately do not enter through the IT directorate. This is a desk-officer-productivity product, not an IT-modernisation product; IT enters at deployment, not at sale. The MFA Crisis Management Unit — verified as a permanent activated structure (Lebanon evacuation Oct 2024, Sudan Apr 2023) — is the sister buyer for a future expansion, not for this pilot.

## First-meeting choreography

A 45-minute slot, in person at Akadimias. Three people from our side: CEO, the senior advisor, one engineer with a working demo. Agenda: 10 minutes of context from the chief of staff (what is the Minister's pain), 15 minutes live demo against this morning's actual public Turkish/Cypriot/Albanian press, 10 minutes Q&A, 10 minutes scoping a 4-month pilot. We leave behind a one-page Greek summary with the *απευθείας ανάθεση* budget line pre-drafted. We never bring slides; we bring the running agent. We say "directorate workflow" in the room, not "ministerial chatbot" — the Redbox sunset narrative is now in the open and the buyer will recognise the wrong shape instantly.

## Pilot offer

- **Scope**: Directorate A1 only. 8 desk-officer seats. Daily morning brief delivered by 06:30 Athens time. Greek civil-service register. Every claim cited. One-paragraph English version included. Officer signs every published brief; agent never publishes.
- **Price**: €50k flat, 4 months. Funded via *απευθείας ανάθεση* (<€60k limit), no open tender needed.
- **Success metrics** (agreed in writing before kickoff):
  - Brief lands by 06:30 on ≥ 95% of business days
  - Desk-officer time saved ≥ 90 minutes/day on self-reported diary log
  - Officer-signoff edit rate ≤ 25% of paragraphs by month 3
  - Zero factual incidents in any signed brief — measured, not assumed
- **Timeline**: Week 1-2 kickoff and feed curation; week 3-6 shadow mode (agent drafts, officer drafts in parallel, side-by-side); week 7-12 live mode; week 13-16 evaluation and expansion proposal.

## Expansion path

Month 6-9: extend to Directorate A2 (Balkans) and B1 (EU) at €60k/year each. Month 9-12: add Public Diplomacy office and Minister's office read-only seats; corpus becomes the directorate's permanent searchable OSINT archive. Month 12-18: second ministry (Defence policy planning OR Migration & Asylum policy planning) — same product, different feed and rubric. The **Deputy Minister Greeks Abroad Loverdos 2024-2027 Strategic Plan** has explicit AI/digital-consulate language (Neos Kosmos, Feb 2026) and is the adjacent inside-MFA expansion narrative we lean on. Month 18-24: Cyprus MFA as the first foreign customer, sold as a sister-deployment with a Greek-Cypriot bilateral framing.

## Procurement vehicle

Entry through **απευθείας ανάθεση** at <€60k under existing MFA discretionary lines for innovation pilots — this is the cleanest pilot path on the entire MFA slate and the reason the qualification scored pilotProcurability=4. We register in **Μητρώο Προμηθευτών Δημοσίου** in parallel during the pilot so we are tender-eligible by month 9. Year-2 expansion uses an **ΕΣΠΑ-co-funded** call (Greece 2.0 / Digital Transformation) under the agentic-AI envelope. We avoid being the prime on any tender above €600k in year 1; we partner with a registered SI as nominal prime if needed and retain product control via a documented licensing agreement.

## PR/comms strategy

We do **not** publish first. The first public mention is a joint MFA-led announcement on day 1 of the pilot, framed as *"MFA pilots Greek-first sovereign-AI brief workflow for desk officers"* (workflow, not chatbot — the Redbox sunset narrative makes the framing matter), with the Minister's chief of staff quoted and the company name as a footnote. Second beat is a 6-month evaluation read-out at a Διπλωματική Ακαδημία or ELIAMEP event — the foreign-policy community is the credibility audience, not the tech press. Third beat is at a Greek-tech moment (Reworks, Beyond) only after ARR clears €500k. We never publish on Greek-Turkish content. Press inquiries on geopolitics get a one-line *"we do not comment on the content of briefs; the Ministry does"* — every time.
