# Business Plan

**Company (working title):** Kallikratis Stack — T-Life Capital portfolio venture building a multi-tenant agentic shared-services layer for Greece's 332 ΟΤΑ, purchased by ΚΕΔΕ.

**Thesis.** Greek municipal back-office work is the most over-fragmented surface in European local government. The 2010 Καλλικράτης reform consolidated more than 1,030 pre-merger δήμοι and κοινότητες into 332, but left every consolidated δήμος re-solving the same workflows — drafting acts to Διαύγεια publication standards and analysing public consultations on local plans (ΣΒΑΚ, ΓΠΣ, climate plans) — with a different vendor, template, and officer skill base. Per-municipality procurement is the structural blocker: each δήμος is too small to attract a serious LLM vendor, the 332-door sales motion is uneconomic, and the capacity gap between the 13 large urban δήμοι (Athens, Thessaloniki, Piraeus, Heraklion, Patras and below) and the 250+ small island and mountain δήμοι is two orders of magnitude. ΚΕΔΕ — the statutory Κεντρική Ένωση Δήμων Ελλάδος — is the only entity that can purchase once and deploy 332 times under a single framework. Kallikratis Stack ships the agentic layer ΚΕΔΕ buys; the deterministic publication contract to Διαύγεια and the human-in-the-loop signature stay with the named δημοτικός υπάλληλος.

**Architectural moat — the multi-tenant split that makes this defensible and shippable.** One logical agent with 332 tenant configurations. Tenant isolation is enforced at the retrieval layer: each δήμος sees only its own document corpus, KAK (Κώδικας Δήμων & Κοινοτήτων) annotations, historical Διαύγεια ΑΔΑ, and org-chart-derived signatory rules. The drafting layer is shared across all tenants and runs on a Greek-tuned sovereign-LLM stack. The publication contract to Διαύγεια is deterministic — a rules engine extracts fields into the official Διαύγεια taxonomy, the LLM never touches metadata schema, and every publishable act ships with a structured audit trail keyed to KAK article and ΣτΕ jurisprudence. This three-layer split — per-tenant retrieval + shared LLM drafting + deterministic Διαύγεια publication contract — is the entire pitch. It converts EU AI Act exposure into a decision-support classification, neutralises the "AI annulled my permit" attack line (annulment-grade defects surface in the publication-readiness diff before signing), and creates the engineering surface where a Greek-focused team out-builds any multinational. Διαύγεια publication is constitutionally mandated transparency-by-default; mis-publication is grounds for administrative annulment.

**Market and buyer.** The economic buyer is ΚΕΔΕ — President and Secretary General — operating under the ψηφιακή σύγκλιση mandate in the RRF envelope. Cabinet cover is the Υπουργείο Εσωτερικών (ΥΠΕΣ) General Secretary for Local Administration. The user is the δημοτικός υπάλληλος in the secretariat of the municipal council and, in small δήμοι, the deputy mayor for digital governance who drafts acts after hours. Addressable footprint: 332 δήμοι plus 13 περιφέρειες under the same Διαύγεια obligations. Three anchor large municipalities — Δήμος Αθηναίων, Δήμος Θεσσαλονίκης and Δήμος Ηρακλείου — are the design partners named with ΚΕΔΕ: Athens publishes acts at industrial scale and has a digital-services deputy mayor who has championed multi-tenant solutions; Thessaloniki is the political counter-weight needed north-of-Lamia; Heraklion is the Crete anchor and a Καλλικράτης case study where post-merger boundary discontinuities remain operationally visible. Below sit ~50 mid-sized δήμοι where the product is transformational and ~270 small δήμοι where it is the entire comms-and-acts capability they will ever have.

**Why now (the timing window).** Five facts converge on summer 2026. First, Greek Law 5299/2026 created an explicit decision-support carve-out for human-in-the-loop drafting tools, with conformity-assessment posture defined at the level of the publication contract rather than the language model. Second, EU AI Act Annex III enforcement deferred to 2 December 2027 — a clean eighteen-month deployment window. Third, the precedent base is mature: HMRC's copilot to 28,000 staff in April 2026; UK GDS Consult cleared >2,000 consultation responses for the Scottish Government; Caddy 80% response-approval in the 2025 SCVO RCT; France's Assistant IA in production for 10,000 civil servants. Fourth, ΚΕΔΕ has explicit appetite for shared-services SaaS under the RRF ψηφιακή σύγκλιση push. Fifth, the Καλλικράτης problem is in its sixteenth year and ΥΠΕΣ political tolerance for "every δήμος reinventing the wheel" has run out.

**Product.** A web copilot embedded next to the municipal-council secretariat workflow, with two flagship modules at v1: Διαύγεια Drafter and Consultation Synthesiser. Διαύγεια Drafter ingests the draft απόφαση and any attached εισήγηση, classifies the act against the Διαύγεια taxonomy, extracts metadata (ΑΔΑ, θεματικές, ΚΑΕ, signatory, decision body), cross-checks legal references against KAK and recent ΣτΕ jurisprudence, runs a publication-readiness diff, and hands a publishable act plus a one-page synthesis to the named δημοτικός υπάλληλος for signature — no autonomous publish, ever. Consultation Synthesiser ingests responses from a public consultation, buckets by theme, flags duplicates and astroturfing patterns, produces a synthesis memo with verbatim citations the deputy mayor can sign, and queues the publishable summary to Διαύγεια via the same deterministic publication contract.

**Revenue model and pricing.** ΚΕΔΕ framework with per-δήμος activation. Tier 1: €120–180k twelve-week pilot under the ΚΕΔΕ innovation envelope with 12 design-partner δήμοι — Athens + Thessaloniki + Heraklion plus three mid-sized mainland, three island and three mountain δήμοι — parallel-publish against caseworker-drafted acts, scored by an independent Greek audit firm. Tier 2: ΚΕΔΕ pays the framework price for unlimited member activation under a free-tier-to-δήμος model, with telemetry flowing into a ψηφιακή ωριμότητα league table — the political pressure that converts framework purchase into per-δήμος adoption. Year-one framework price €1.2–1.8m. Tier 3: per-seat premium SKU for analytics, mayor-style fine-tuning and the comms-drafter, €3–6k per δήμος per year.

**Unit economics.** Hosted on a Greek/EU sovereign-cloud provider with a contractual path to the France-Germany sovereign-AI infrastructure standing up through 2030. Marginal inference cost per published act €0.20–0.50; the deterministic publication contract is rounding error. Per-δήμος ACV at scale 10–25× variable cost. Gross margin target 75%+. The multi-tenant architecture makes the 270 small δήμοι gross-margin-accretive — the shared LLM serves them and incremental cost is bounded by retrieval-tier storage.

**Capital plan and milestones.** Pre-seed €700k–€900k (T-Life Capital lead, one Greek strategic angel with municipal-sector credibility), nine-month runway. Milestones: (1) signed ΚΕΔΕ pilot LoI within 90 days with Athens, Thessaloniki and Heraklion as named design partners; (2) twelve-week pilot complete with audit report at month six; (3) ΚΕΔΕ framework signed at month nine and first 30 δήμοι activated. Seed €3–4m at framework signing, used to staff δήμος-success and the second product line (Mayoral Press & Cabinet Drafter) under the same ΚΕΔΕ umbrella.

**Team and hires.** Three founding hires. Technical founder with Greek public-administration legal-tech background, owns the per-tenant retrieval architecture and the deterministic Διαύγεια publication contract. Ex-ΚΕΔΕ-secretariat or ex-large-δήμος co-founder — a former Secretary General of a top-twenty δήμος or a senior figure inside ΚΕΔΕ — owns the framework relationship and the league-table narrative. Senior ML lead with Greek-NLP and RAG experience, owns the drafting layer; the ex-Atypon engineering bench is the obvious hire pool. First three hires post-pilot: a former δημοτικός υπάλληλος as design partner, a Greek legal-NER engineer with KAK/Διαύγεια corpus tuning, and a δήμος-success lead with public-sector procurement scars.

**Risks.** (1) Καλλικράτης fragmentation — 332 δήμοι with different org charts and templates — could blow up onboarding cost; mitigated by per-tenant retrieval that absorbs org-chart variance from each δήμος's own Διαύγεια acts, plus ΚΕΔΕ-led framework purchase that removes per-δήμος sales cost. (2) Incumbent overlap — Singular Logic, Byte and Uni Systems sell per-municipality document/council modules — mitigated by positioning above their stack via ΚΕΔΕ framework, accepting them as document-store connector partners, never framing as ERP replacement. (3) Statutory-publication risk: a faulty Διαύγεια publish could ground administrative annulment; mitigated by deterministic publication contract, mandatory δημοτικός υπάλληλος signature, and the publication-readiness diff. (4) ΚΕΔΕ membership cannot be forced to adopt — mitigated by free-tier-to-δήμος economics and the ψηφιακή ωριμότητα league table converting press-cycle pressure into adoption. (5) EU AI Act re-classification — mitigated by the Greek Law 5299/2026 decision-support carve-out and the conformity file ready before December 2027.

---

# Pitch Deck

## Slide 1 — Kallikratis Stack
- T-Life Capital portfolio venture, Athens
- Multi-tenant agentic shared-services layer for the 332 Greek ΟΤΑ
- Bought once by ΚΕΔΕ, deployed 332 times — Διαύγεια Drafter and Consultation Synthesiser at v1
- Pilot-ready, twelve weeks to first signed parallel-publish run with Athens, Thessaloniki and Heraklion

## Slide 2 — Problem
- 332 δήμοι re-solving the same Διαύγεια drafting and consultation-synthesis workflows
- Per-δήμος procurement is the structural blocker; small island and mountain δήμοι have zero analyst capacity
- Mis-publication to Διαύγεια is grounds for administrative annulment
- Καλλικράτης left consolidated δήμοι with mismatched templates and no shared substrate
- ΚΕΔΕ is the only entity that can purchase once and deploy 332 times

## Slide 3 — Why Now
- Greek Law 5299/2026 created a decision-support carve-out for human-in-the-loop drafting tools
- EU AI Act Annex III enforcement deferred to 2 December 2027 — clean eighteen-month deployment window
- HMRC copilot to 28,000 staff (April 2026); UK GDS Consult cleared >2,000 responses for the Scottish Government; Caddy 80% approval (SCVO 2025 RCT); France Assistant IA in production for 10,000 civil servants
- ΚΕΔΕ has explicit appetite for shared-services SaaS under the RRF ψηφιακή σύγκλιση envelope
- France-Germany sovereign-AI agreement (2026-2030) puts public-sector LLM infrastructure on a continental footing

## Slide 4 — Solution
- Three-layer split: per-tenant retrieval + shared Greek-tuned LLM drafting + deterministic Διαύγεια publication contract
- Defuses regulatory risk in one architectural choice and serves all 332 δήμοι from one product
- Citations to KAK and ΣτΕ jurisprudence; every metadata field traces to a deterministic extraction rule
- Publication-readiness diff surfaces annulment-grade defects before the δημοτικός υπάλληλος signs

## Slide 5 — Demo
- Three tenants side by side: Δήμος Αθηναίων, Δήμος Θεσσαλονίκης, a Cycladic island δήμος
- Same απόφαση, three signatory chains, three historical Διαύγεια templates — one drafting workflow
- Hover any sentence, see the KAK or ΣτΕ citation
- Consultation Synthesiser run on a real ΣΒΑΚ consultation file
- Δημοτικός υπάλληλος edit + sign + queue to Διαύγεια

## Slide 6 — Market
- Primary buyer: ΚΕΔΕ, framework purchase for all 332 δήμοι
- Anchor design partners: Athens + Thessaloniki + Heraklion
- Adjacent product lines under the same framework: Mayoral Press Drafter; ΚΕΠ-in-a-box once the ΓΓΠΣΨΔ MoU lands
- Lateral: 13 περιφέρειες under the same Διαύγεια obligations; Cyprus local government

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.4
- Passed hostile second-pass qualification (May 2026): composite 4.5, no axis below 4, no kill finding — flagged as the Interior anchor
- Founding ex-ΚΕΔΕ-secretariat candidate identified
- Two anchor δήμοι expressing pilot interest under NDA; KAK + Διαύγεια corpus assembly begun

## Slide 8 — Business Model
- Tier 1 pilot: €120–180k, twelve weeks, 12 design-partner δήμοι, audit-firm-scored
- Tier 2: ΚΕΔΕ framework €1.2–1.8m year-one, unlimited δήμος activation, free at the δήμος level
- Tier 3 per-seat premium SKU: €3–6k per δήμος per year for analytics + mayor-style fine-tuning
- ψηφιακή ωριμότητα league table is the adoption flywheel ΚΕΔΕ owns

## Slide 9 — Competition & Moat
- No multinational ships a Greek municipal-act copilot — KAK/Διαύγεια corpus assembly is uneconomic for them
- Singular Logic / Byte / Uni Systems sit on per-δήμος document modules; we sit above their stack via ΚΕΔΕ
- Moat: Greek municipal-legal NER + KAK tuning + ΣτΕ jurisprudence + ΚΕΔΕ framework relationship + 3-5 year window
- Architectural moat: per-tenant retrieval + shared LLM drafting + deterministic Διαύγεια publication contract

## Slide 10 — Team
- Technical founder — Greek public-administration legal-tech background
- Ex-ΚΕΔΕ-secretariat or ex-large-δήμος Secretary General co-founder — framework relationship and league-table narrative
- Senior ML lead — Greek NLP, RAG, multi-tenant retrieval
- Advisor bench: former ΥΠΕΣ GS for Local Administration; audit-firm partner; reformist mayor of a top-twenty δήμος

## Slide 11 — Ask
- €700k–€900k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: nine-month runway through ΚΕΔΕ framework signing
- Investor introductions sought: ΚΕΔΕ Secretary General, ΥΠΕΣ chief of staff, digital-services deputy mayors at Athens / Thessaloniki / Heraklion

---

# Go-to-Market Plan

**Champion identification.** Primary champion: the ΚΕΔΕ Secretary General — economic buyer controlling the framework purchase under the ψηφιακή σύγκλιση envelope, whose career incentive is to publish the ψηφιακή ωριμότητα league table the membership is publicly demanding. Secondary: the ΥΠΕΣ General Secretary for Local Administration as cabinet cover, who needs a visible deliverable on the 332-δήμος fragmentation problem before the RRF reporting cycle. Anchor operational champions: the digital-services deputy mayor of Athens (volume credibility), the deputy at Thessaloniki (political counter-weight north-of-Lamia), and the Secretary General of Heraklion (Crete anchor and Καλλικράτης case study). Below: three island and three mountain δήμοι where small-municipality analyst capacity is structurally zero — the case studies that win the league-table narrative.

**First-meeting choreography.** Sixty minutes with the ΚΕΔΕ Secretary General, ex-ΚΕΔΕ-secretariat co-founder in the room, technical founder for the architecture slide only. Open with the Καλλικράτης diagnosis — 332 δήμοι, sixteen years of re-solving the same workflow, ΥΠΕΣ political tolerance run out — not the product. Ten minutes on the three-layer split; it is the answer to every objection that follows, including Διαύγεια annulment risk and EU AI Act exposure. Cite Greek Law 5299/2026's decision-support carve-out by article number, plus UK GDS Consult's Scottish Government result, Caddy's 80% approval in the 2025 SCVO RCT, and France's Assistant IA at 10,000 civil servants. Ten minutes on the audit posture: candidate Greek audit firm, three anchor δήμοι, twelve-week window timed before the next RRF reporting cycle. Close on the pilot offer. Do not ask for a decision in the room. Ask for one follow-up: a 30-minute session with ΚΕΔΕ legal counsel and the three anchor digital-services deputy mayors.

**Pilot offer (the buyer hook).** A twelve-week parallel-publish run across 12 design-partner δήμοι — Athens + Thessaloniki + Heraklion plus three mid-sized mainland, three island and three mountain δήμοι — under €180k, with an independent Greek public-administration audit firm scoring agent-drafted vs. caseworker-drafted output side by side on three measures: Διαύγεια publication-readiness (zero annulment-grade defects), legal-citation precision against KAK and ΣτΕ jurisprudence, and time-to-publish. Every act is signed by a named δημοτικός υπάλληλος as in production; no autonomous publish. The audit report is owned by ΚΕΔΕ and the league-table reveal calendar is at the Secretary General's discretion. If the audit fails on publication-readiness or citation precision, we tear up the invoice. Reference numbers in the room: HMRC's April 2026 rollout to 28,000 staff and Caddy's 80% approval rate — the throughput-and-quality benchmarks ΥΠΕΣ and the press will ask about.

**Expansion path.** Pilot pass → ΚΕΔΕ framework contract €1.2–1.8m year-one for unlimited member activation, with the ψηφιακή ωριμότητα league table as the adoption flywheel. Concurrent product expansion under the same framework: Mayoral Press & Cabinet Drafter (small-δήμος comms capacity tied to the RRF visibility obligation) and, once the ΓΓΠΣΨΔ MoU lands, ΚΕΠ-in-a-box for the front-desk officer workflow. From year two, lateral expansion to the 13 περιφέρειες under the same Διαύγεια obligations; from year three to Cyprus local government with modest localisation. The Citizen Complaint Routing concept stays parked but resurfaces as a feature inside the ΚΕΔΕ product once the per-δήμος onboarding flow can absorb per-org-chart variance at zero marginal cost.

**Procurement vehicle.** Tier 1 is a ΚΕΔΕ innovation-envelope pilot — direct contract under the threshold for open competitive tender, the only instrument with a calendar compatible with the RRF reporting cycle. Tier 2 is the ΚΕΔΕ framework purchase under the ψηφιακή σύγκλιση envelope, which we expect to win on audit evidence and anchor-δήμος case studies. Per-δήμος activation under the framework runs as απευθείας ανάθεση when δήμοι enable premium SKUs, leveraging ΚΕΔΕ's umbrella. We will welcome Singular Logic, Byte, or Uni Systems as document-store connectors on Tier 3 — they keep the per-δήμος ERP relationship and we sit above their stack via ΚΕΔΕ. This is the path of least political resistance and protects incumbent relationships that would otherwise lobby their captive δήμοι against framework adoption.

**PR and comms.** No press release at pilot signature. No press release during the parallel-publish run. One pre-briefed long-form in Kathimerini and a parallel piece in a Northern Greece outlet on the day the audit report is shared with ΚΕΔΕ, framed around small-δήμος capacity-building and Καλλικράτης-era fragmentation, with the audit-firm partner quoted and UK GDS Consult, Caddy and France Assistant IA cited as the international comparator set. The ψηφιακή ωριμότητα league-table reveal is held for the ΚΕΔΕ annual congress and owned by the Secretary General. ΠΟΕ-ΟΤΑ union briefings held in person and ahead of any press contact — the message is δημοτικός-υπάλληλος copilot, never replacement, audit firm as trusted third party. Brussels-facing comms: a posted Greek Law 5299/2026 + EU AI Act conformity-assessment posture document on day one, citing the deterministic publication contract — pre-empts EDPS or Commission inquiry and gets ahead of the 2 December 2027 Annex III enforcement date. No per-δήμος adoption or per-υπάλληλος productivity numbers published without the ΚΕΔΕ Secretary General's written consent; the league-table calendar is ΚΕΔΕ's.
