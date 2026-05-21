# Business Plan

**Company (working title):** Strasbourg Watch — a T-Life Capital portfolio venture building an ΕΔΔΑ-to-Athens monitoring and remediation-drafting agent for Greece's Government Agent and the Νομικό Συμβούλιο του Κράτους.

**Thesis.** Greece is the respondent state in 30 to 50 ΕΔΔΑ (Ευρωπαϊκό Δικαστήριο Δικαιωμάτων του Ανθρώπου) merits judgments per year plus a heavier admissibility tail, and the median Article 41 just-satisfaction bill is a recurring fiscal item the Νομικό Συμβούλιο tracks but rarely controls. The Government Agent — the Νομικό Γραφείο of the Ministry of Foreign Affairs — receives every Strasbourg notification, the Νομικό Συμβούλιο owns domestic defence, and directorates across Justice, Citizen Protection, Migration, and Health own the underlying acts under review. The work between a Strasbourg notification and a remediation memo landing on the right Greek desk is done by hand: read EN/FR, summarise, translate into Greek administrative register, map to a ministry contact, walk it over. The pilot-judgment lines — Vassilios Athanasiou on length of proceedings, M.S.S. / Rahimi on asylum, the Roma-housing line, the prison-conditions line — sit on top of that manual workflow and produce diplomatic strain whenever a politically sensitive ruling lands. Strasbourg Watch ingests HUDOC daily, isolates Greece-implicating decisions and doctrinal lines, drafts a two-page Greek-register remediation memo within 24 hours of publication, and routes it to the correct directorate via a maintained ownership matrix. It is a throughput tool dressed as a compliance tool, and that framing is what makes it sellable.

**Architectural moat.** The hard part is not the LLM. HUDOC has an open public API and EN/FR-to-Greek-legal-register translation is tractable RAG-plus-fine-tuning. The hard part is the routing matrix: which directorate owns which doctrinal line, who the named contact is, what their DH-DD reporting cadence to the Επιτροπή Υπουργών looks like, how their language maps to the Court's. We capture that matrix as a living artefact co-owned with the Νομικό Συμβούλιο, and that artefact is the moat — not the embeddings. The agent is a thin orchestrator: HUDOC ingestion, doctrinal-line classification against the Greek-case-law corpus the studio is already assembling for its sister rapporteur and search products, Greek legal-register translation, structured drafting against a fixed schema, traceable routing. Every memo carries paragraph-level citations to HUDOC, DH-DD execution documents, and Greek statutory anchors. The agent never writes to a public-facing record; the Government Agent and the directorate retain every signature.

**Market and buyer.** Economic buyer is the Νομικό Γραφείο of the MFA — Greece's ECHR Agent — with the Πρόεδρος του Νομικού Συμβουλίου του Κράτους as co-sponsor. The Secretary General of the Ministry of Justice signs procurement once the Νομικό Συμβούλιο has endorsed the pilot. Users: the small Νομικό Γραφείο team handling Strasbourg correspondence, Νομικό Συμβούλιο desk officers, and directorate contacts who receive routed memos — phase one Justice, Citizen Protection, Migration & Asylum, Hellenic Police GS; phase two Health and Social Cohesion. Downstream readers: ΑΠ (Areios Pagos) and ΣτΕ (Council of State) jurisprudence-watch staff who today read HUDOC manually. Back-office monitoring tool, not court-decision tool — political surface stays small.

**Why now.** Five facts converge on H2 2026. (1) Greek Law 5299/2026 sets domestic AI/data rules; operational guidance is being drafted, so an early documented deployment becomes a reference case rather than a compliance afterthought. (2) EU AI Act Annex III enforcement on justice administration was deferred to 2 December 2027 in the May 2026 Omnibus deal — and ECHR monitoring is not Annex III on its own (open-source monitoring of public court output and drafting of internal advisory memos, humans sign every output). Eighteen-month deploy-and-document window. (3) Council of Europe DEC-AD reform pressure on Greek judicial timelines has been climbing through the 2025 Committee of Ministers cycle. (4) Build cost is under €120k for a four-month pilot — απευθείας ανάθεση, weeks not months. (5) US comparator Westlaw Edge / Lexis+ AI gives the Νομικό Γραφείο a familiar shape; we are the sovereign Greek equivalent for the Strasbourg-Greece corridor.

**Product.** A scheduled agent on a Greek/EU sovereign-cloud tenant polls HUDOC and the Court's press service daily, filters on three axes (Greece as respondent, as third-party intervener, doctrinal lines historically applied against Greece), classifies each case against the routing matrix, drafts a two-page Greek-register memo — holding, exposure, suggested response, statutory anchors, deadline implications for any open execution-of-judgments commitment — and pushes it to the directorate contact with a copy to the Government Agent. Second surface: a weekly digest to the Government Agent and the Πρόεδρος του Νομικού Συμβουλίου covering new exposures, pilot-judgment slippage, and sortable Article 41 fiscal exposure. Third surface: a Greek-language search layer over the Greece-touching Strasbourg corpus with paragraph-anchored citations — first wedge into the broader Greek jurisprudence index the studio is building.

**Revenue model.** Direct contract with the Ministry of Justice on behalf of the Νομικό Συμβούλιο. Tier 1: €60–120k for a four-month pilot — 24 months HUDOC backfill plus six months live, median-lag KPI. Tier 2: €180–280k annual subscription — agent, routing matrix, translation-tuning, digest. Tier 3: low-six-figure annual extensions to Foreign Affairs, Citizen Protection, Migration & Asylum. All tiers share agent and corpus; differentiation is the routing matrix and directorate schemas.

**Unit economics.** EU sovereign cloud at low six figures of annual infrastructure at Tier 2. Drafting on a single judgment costs single-digit euros; the daily poll and digest are pennies. Headcount carry is one part-time senior legal-engineering FTE plus an EU-law-trained PM. Gross margin 75 per cent at Tier 2.

**Capital plan.** Pre-seed €350–500k (T-Life Capital plus one Athens strategic angel with public-law standing) for nine months through the pilot and into Tier 2. Milestones: pilot LoI within 60 days; HUDOC backfill and matrix v1 at month two; live KPI report at month four; Tier 2 signed at month six. Architecture, corpus, and customer-success spine are shared with the rapporteur-copilot and search ventures — pre-seed capital partially fungible across the three.

**Team.** Three founding seats: a senior PM with EU-law background (ideally a former Νομικό Συμβούλιο desk officer or a Strasbourg litigator); a senior engineer with Greek-NLP experience (ex-Athena RC / ILSP) owning ingestion, classifier, EL translation, drafting; a retired ΣτΕ πάρεδρος or senior administrative-law partner as paid founding advisor.

**Risks.** (1) The Νομικό Συμβούλιο reads the pilot as a duplicate of its own desk — mitigated by leading with the median-lag baseline and by co-owning the routing matrix. (2) HUDOC API changes — Council of Europe bulk-feed fallback and a local mirror. (3) Translation quality on politically sensitive judgments embarrasses the agent — per-paragraph confidence scoring, mandatory human review on Greece-respondent merits, fixed schema. (4) A Greek SI copies the matrix into an OSDDY module — joint ownership and deployed-reference status. (5) Westlaw / Lexis+ AI eventually ships Greek output — but Greek directorate routing and administrative-register schema are not their wedge.

---

# Pitch Deck

## Slide 1 — Strasbourg Watch

- T-Life Capital portfolio venture, Athens
- ΕΔΔΑ-to-Athens monitoring and remediation-drafting agent
- Buyer: Νομικό Γραφείο MFA (Greece's ECHR Agent) plus Νομικό Συμβούλιο του Κράτους
- Four-month pilot under €120k, απευθείας ανάθεση tier
- First studio product to ship while the rapporteur copilot navigates its AI-Act runway

## Slide 2 — Problem

- 30–50 ΕΔΔΑ merits judgments per year against Greece, heavier admissibility tail
- Repeating sensitive doctrinal lines: length of proceedings (Vassilios Athanasiou), asylum (M.S.S., Rahimi), prison conditions, Roma housing
- Strasbourg notification walks from HUDOC to Νομικό Συμβούλιο to directorate by hand; median lag in weeks
- Επιτροπή Υπουργών reporting catches slippage on the same execution commitments
- Recurring Article 41 just-satisfaction bills are a fiscal line item nobody owns end-to-end

## Slide 3 — Why Now

- Greek Law 5299/2026 governs AI/data — early reference deployments shape operational guidance
- EU AI Act Annex III enforcement deferred to 2 December 2027; ECHR monitoring sits outside Annex III on its own
- Council of Europe DEC-AD reform pressure on Greek judicial timelines climbing through the 2025 cycle
- HUDOC API open; EN/FR-to-Greek legal translation mature
- US comparator: Westlaw Edge / Lexis+ AI — we are the sovereign Greek equivalent

## Slide 4 — Solution

- Daily HUDOC poll, Greece filter (respondent, intervener, doctrinal-line), Greek-register memo in 24 hours
- Fixed two-page schema: holding, exposure, suggested response, statutory anchors, deadline implications
- Routing matrix to Justice, Citizen Protection, Migration, Foreign Affairs, Health — maintained jointly with the Νομικό Συμβούλιο
- Weekly digest to the Government Agent and the Πρόεδρος του Νομικού Συμβουλίου
- Every output paragraph-anchored to HUDOC, DH-DD, Greek statute; every signature stays human

## Slide 5 — Demo

- Walkthrough on a recent Vassilios Athanasiou follow-up and one M.S.S.-line decision
- Side-by-side: agent-drafted memo vs. a prior Νομικό Συμβούλιο memo (sensitive content redacted)
- Hover any sentence for the paragraph-anchored HUDOC citation
- Routing matrix view; digest view of open pilot-judgment commitments and slippage

## Slide 6 — Market

- Primary: Νομικό Γραφείο MFA, Νομικό Συμβούλιο του Κράτους, GS Justice as procurement signer
- Year-two adjacents: Citizen Protection, Migration & Asylum, Foreign Affairs, Health
- Lateral: ΑΠ and ΣτΕ jurisprudence-watch staff as embedded users — same corpus as the rapporteur copilot and search agent
- Cross-border: Cypriot Law Office of the Republic in year three

## Slide 7 — Traction

- Originated, scored, and second-pass qualified inside T-Life Justice portfolio (composite 4.33, qualification pass — May 2026)
- "First product to ship" verdict for the studio's Justice slate
- Founding PM candidate identified through T-Life's administrative-law network
- HUDOC backfill technical PoC underway
- Routing-matrix v0 drafted from public DH-DD documents

## Slide 8 — Business Model

- Tier 1 pilot: €60–120k, four months, απευθείας ανάθεση
- Tier 2 subscription: €180–280k annual — agent, routing matrix, digest
- Tier 3 directorate add-ons: low-six-figure annual extensions
- Architecture and corpus shared with rapporteur copilot and search agent

## Slide 9 — Competition & Moat

- No Greek SI plays this corridor; Nomos and QualexLex are databases, not Strasbourg-to-directorate routers
- Westlaw Edge / Lexis+ AI is the US comparator and will eventually ship English-language ECHR monitoring — neither has the Greek directorate ownership matrix or the Greek administrative-register schema
- Moat layers: co-owned routing matrix with the Νομικό Συμβούλιο, Greek legal-register translation tuned to administrative voice, deployed-reference status with the Government Agent
- Greek-language is a real but secondary moat; the bigger one is the institutional artefact

## Slide 10 — Team

- Senior PM, EU-law background — owns routing matrix and customer
- Senior engineer, Greek-NLP — owns ingestion, classifier, EL translation, drafting
- Retired ΣτΕ πάρεδρος or senior administrative-law partner as paid founding advisor
- Shared advisor bench with the rest of the studio's Justice slate

## Slide 11 — Ask

- €350–500k pre-seed, T-Life Capital lead, one Athens strategic angel with public-law standing
- Use of funds: nine-month runway through Tier-2 signing
- Introductions sought: Government Agent at the Νομικό Γραφείο MFA, Πρόεδρος του Νομικού Συμβουλίου, GS Justice's chief of staff, one DH-DD reporting partner inside the Νομικό Συμβούλιο

---

# Go-to-Market Plan

**Champion identification.** Two primary champions: the Government Agent inside the Νομικό Γραφείο of the MFA (receives every Strasbourg notification, carries the political weight of every Article 41 award) and the Πρόεδρος του Νομικού Συμβουλίου του Κράτους as co-sponsor (whose Strasbourg desk does the daily work the agent accelerates). The Secretary General of the Ministry of Justice signs procurement; the GS Justice's chief of staff is the calendar gatekeeper. Secondary: the senior Νομικό Συμβούλιο counsel responsible for DH-DD reporting; one named directorate contact in each of the four phase-one ministries.

**Pre-meeting work (next 30 days, per qualification).** Two deliverables before any pitch leaves the studio. First, a public-data exercise: from HUDOC and Council of Europe DH-DD published execution dossiers, compute the median lag between a Strasbourg decision on a Greece-respondent or Greece-touching case and the first published Greek directorate response (Νομικό Συμβούλιο action plan, ministerial response, or parliamentary reply). Substantiate a credible 30–60-day median over the last 24 months. Second, a routing matrix v0 from public DH-DD reports, sanity-checked by a retired ΣτΕ πάρεδρος in a paid two-hour review. These two artefacts are the first meeting.

**First-meeting choreography.** Forty-five minutes with the Government Agent, ideally with a Πρόεδρος του Νομικού Συμβουλίου staffer in the room. Founding PM front-of-room; technical founder for architecture and demo only. Open not with product but with the median-lag chart — the qualification's first blocker is "prove the gap is real" and the chart is the answer in one slide. Five minutes on architecture: HUDOC ingestion is the boring part; Greek legal-register translation is de-risked through corpus work shared with the rapporteur copilot; the routing matrix is the artefact, and we want to co-own it with the Νομικό Συμβούλιο. Ten minutes on the pilot offer. Close with a single ask: a 30-minute follow-up working session with the Νομικό Συμβούλιο DH-DD desk to walk through matrix v0 and edit it together. Reference Westlaw Edge / Lexis+ AI once in passing — anchor the shape without implying the Government Agent should procure American software.

**Buyer-objection handling.** GS Justice's first objection: "We already have a Strasbourg desk in the Νομικό Συμβούλιο. Are you telling me my counsel is missing decisions? Prove the gap is real and quantify the days saved per quarter, or this is a duplicate." The median-lag chart is the answer; the architectural answer is that the agent does not replace the desk — it gives the desk three to five additional FTE of triage and drafting capacity at a fixed annual cost lower than a single Article 41 award in a sensitive case. Bring one worked example: a recent length-of-proceedings judgment, manual workflow and agent output side by side, timestamp delta visible.

**Pilot offer.** Four-month closed pilot under €120k via απευθείας ανάθεση. Scope: 24 months HUDOC backfill, six months live daily monitoring, the routing matrix co-developed with the Νομικό Συμβούλιο, a weekly digest, and a KPI report at month four with one headline: median Strasbourg-decision-to-Greek-directorate-memo lag, before and after. If the agent fails to compress the lag by at least 70 per cent against the baseline, we tear up the invoice. No autonomous submission; every memo carries a named Νομικό Συμβούλιο reviewer signature before it lands in a directorate inbox, and automated delivery is gated to digest-only until the Government Agent signs off.

**Expansion path.** Pilot pass → Tier 2 annual subscription, Ministry of Justice as procurement signer, Νομικό Συμβούλιο as operational owner, Government Agent as primary digest recipient. Tier 3 directorate add-ons sequenced by political readiness: Citizen Protection first (prison-conditions cases are the most predictable doctrinal pipeline), then Migration & Asylum (M.S.S./Rahimi line), then Foreign Affairs (consular-act exposure), then Health (involuntary commitment). Cross-product: the agent's Greek-corpus output feeds the rapporteur copilot's ΕΔΔΑ-Greece retrieval surface, and vice versa. Cross-border: Cypriot Law Office of the Republic in year three with a localised matrix.

**Procurement vehicle.** Tier 1 is απευθείας ανάθεση signed by the Ministry of Justice on the Νομικό Συμβούλιο's recommendation — under €120k sits below open-tender thresholds, the deliverable is research-and-monitoring rather than core IT. Tier 2 is a single-year framework with renewable extensions, tenderable at the ministerial level on the Tier 1 KPI report. Tier 3 add-ons sit inside απευθείας ανάθεση for the first cycle. We accept a Greek Tier-1 SI as prime on a future Council-of-Europe-funded extension if politics requires it; the agent layer is ours, the prime is theirs.

**PR and comms.** No press release at pilot signature, none during the parallel-run, no public engagement with politically sensitive judgments during the pilot window. One pre-briefed Kathimerini long-form at the Government Agent's discretion after Tier 2 signing, framed around state-capacity and execution-of-judgments delivery — "how Greece cut its Strasbourg response time," not "AI reads court rulings." The Πρόεδρος του Νομικού Συμβουλίου is the named Greek figure quoted; Westlaw Edge / Lexis+ AI cited once as the international shape; UK i.AI Minute / Consult as the deployed-in-government comparator set. Brussels-facing: a compliance note on day one citing Greek Law 5299/2026 and the AI Act non-Annex-III classification, with references to the human-in-the-loop architecture. No publication of memo content, matrix internals, or directorate names — the agent's outputs are working documents of the Greek state.

**Why this is the first product to ship.** Across the T-Life Justice slate, the rapporteur copilot has the higher ceiling but is constrained by the AI Act Annex III posture (even with the December 2027 deferral) and by dependency on a warm intro to the ΣτΕ President. The jurisprudence-search agent is best run as product-two inside the rapporteur-copilot company. Strasbourg Watch has the smallest political surface, the cleanest single-decision-maker procurement path, no Annex III exposure, a verified gap against the manual baseline, and a buyer whose career incentive aligns with the KPI the agent moves. As the studio's first deployed Justice product, it makes T-Life Capital a known, trusted, non-controversial counterparty to the Greek judicial estate before any higher-risk product enters the field.
