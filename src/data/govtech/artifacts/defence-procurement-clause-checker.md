# Business Plan

**Company (working title):** Klafsi Defence — a T-Life Capital portfolio venture building agentic clause-drafting and compliance tooling for Greek defence procurement.

**Thesis.** Greek defence procurement under ΓΔΑΕΕ (Γενική Διεύθυνση Αμυντικών Εξοπλισμών & Επενδύσεων) is being asked to absorb the largest acquisition pipeline in modern Greek history — the 25-billion-euro armament programme 2025-2036, the ReArm Europe envelope, and Greece's outsize share of the EU SAFE €150bn loan facility 2025-2030 — using a tender-drafting workflow that depends on a handful of senior officers manually reconciling Law 3978/2011, Law 4412/2016, EU Directive 2009/81, NATO STANAGs, FMS Letter-of-Offer-and-Acceptance terms, and the internal body of ΓΔΑΕΕ opinions. The bottleneck is not policy and not budget. It is clause-by-clause review and citation. A clause-checker agent that drafts, audits, and redlines defence tender documents against this bounded corpus collapses a multi-month review loop into a multi-day one, and prevents the publicised re-tenders that have cost ΥΠΕΘΑ both calendar months and public credibility.

**Architectural moat — the three-layer split, retuned for defence.** The legal-citation layer runs long-context RAG over a bounded public corpus (Law 3978/2011, Law 4412/2016, Directive 2009/81, ECJ Article 346 TFEU jurisprudence, the SAFE Regulation, NATO STANAG references, published ΓΔΑΕΕ opinions, FMS LoA boilerplate). The drafting and redline layer runs an LLM bounded by ΓΔΑΕΕ house-style templates and citation enforcement. Every flagged risk, every suggested redline, and every paragraph of the compliance memo links back at clause level to the source authority. This is the post-UWV, post-Annex-III architecture European supervisors are now writing into guidance: deterministic retrieval where consequence is high, LLM drafting where language is the deliverable, named human in the loop on every output, line-level audit trail. For ΓΔΑΕΕ the split is the answer to the only objection that matters — "can you defend this in front of the Court of Audit (Ελεγκτικό Συνέδριο) and the Parliamentary Committee on Armaments?" The architecture defends it.

**Why now.** Five facts converge on 2026. First, EU SAFE entered into force in 2025 and Greece is among the largest beneficiaries; SAFE-financed procurements must comply with new eligibility and security-of-supply rules stacked on Law 3978/2011 and Directive 2009/81 — a compliance surface no senior officer has muscle memory for. Second, ReArm Europe and the Strategic Compass have pushed every member-state defence ministry to compress procurement timelines, and the European Defence Industrial Strategy sets hard targets for intra-EU procurement share. Third, Greek Law 5299/2026 governs AI/data rules domestically, with the EU AI Act Annex III national-security carve-out giving deployment latitude and leaving conformity-assessment posture as a moat for dual-use commercial expansion later. Fourth, the precedent base is live and citable: UK MoD Defence Digital's contracting-assistant pilots through DASA (2024-2025); the US GSA Tradewinds AI-procurement Marketplace operationalised across federal AI procurement; DGA's contract-drafting automation pilots in France. Fifth, ΥΠΕΘΑ is publicly publishing tender-process reform commitments after the press cycle on cancelled and re-tendered programmes — the political tailwind on "clean up procurement" is the strongest it has been in a decade.

**Market and buyer.** The economic buyer is the Director-General of ΓΔΑΕΕ. The policy buyer is the Secretary General for Defence Industry at ΥΠΕΘΑ. The user inside the ministry is the ΓΔΑΕΕ tender-drafting officer (στέλεχος ΓΔΑΕΕ), with a strong secondary user-base in the MoD Legal Service (Γραφείο Νομικού Συμβούλου) reviewing draft tenders before publication. Tertiary user: ΓΕΕΘΑ J-staff officers reviewing FMS Letters of Offer and Acceptance and equivalent European-programme term sheets. The buyer is reachable through a single Athens calendar and the pain is documented weekly in the defence press.

**Job-to-be-done.** A ΓΔΑΕΕ officer opens a 180-page draft tender for a maritime patrol aircraft programme. The agent parses it into clauses, classifies each by topic (eligibility, technical specs, offsets / industrial participation, IPR, security clearances, evaluation criteria, contract performance, dispute resolution), cross-checks each clause against Law 3978/2011 articles, the applicable Directive 2009/81 transposition, prior ΓΔΑΕΕ opinions on analogous programmes, relevant ECJ case law (including Article 346 TFEU), and — where SAFE financing is involved — the SAFE Regulation eligibility tests. The agent flags risks at severity tiers (critical / material / advisory), proposes redline text in ΓΔΑΕΕ house style, and generates a Greek-language compliance memo. For an FMS LoA review, the same loop runs against LoA standard clauses, FMS Case Manager guidance, and Greek-law sufficiency tests. The senior officer reviews, edits, signs. No autonomous submission, ever.

**Product.** A web application deployed on Greek/EU sovereign cloud, with an on-prem option held in reserve for a v2 classified wedge (v1 is explicitly public-corpus-only by qualification ruling). Integration surface: a Microsoft Word add-in for inline redline, a side-by-side comparison view against prior ΓΔΑΕΕ opinions, a Greek-language compliance-memo generator with paragraph-level citations, and a versioned tender-clause library. The corpus is small enough to index exhaustively and specialised enough that no multinational will commit senior engineering to it.

**Revenue and pricing.** Direct contract with ΓΔΑΕΕ via ΥΠΕΘΑ. Tier 1: €60–120k for a 90-day single-tender pilot, with a 50% time-to-publication target and zero observed compliance errors against a defence-law audit firm's benchmark scoring agent-drafted vs. officer-drafted clauses on legal precision, citation accuracy, and redline quality. Tier 2: €250–600k year-one rollout across ΓΔΑΕΕ teams and the MoD Legal Service, per-seat at €4–6k per officer per year. Tier 3: a multi-year framework agreement with ΓΔΑΕΕ as anchor tenant and HCDI (Hellenic Centre for Defence Innovation) as the innovation-procurement vehicle; mid-six-figure to low-seven-figure ACV with SLA-backed throughput. Adjacent SKUs: an FMS-LoA review module (ΓΕΕΘΑ J-staff buyer) and a SAFE-eligibility module for EU programme offices across NATO member-states (English-language, Brussels partner).

**Unit economics.** Sovereign-cloud hosting; corpus indexing is a one-time seed cost. Per-tender variable cost €15–40 at current sovereign-LLM pricing; per-officer ACV at scale 60–120× variable cost. Gross margin target 75%+. Data-licensing line is light — the core corpus is public; the only meaningful paid input is structured legal-database feeds (Nomos, Isokratis) at €15–30k/yr, already procured at MoD Legal Service.

**Capital plan and milestones.** Pre-seed €700k–€900k (T-Life Capital lead + one Greek strategic angel + an HCDI 2nd Innovation Challenge grant component if awarded) funds the founding team for nine months. Milestones: (1) signed pilot LoI within 90 days of pre-seed close; (2) corpus-indexing milestone at month four (Law 3978/2011 + Directive 2009/81 + last ten years of public ΓΔΑΕΕ opinions); (3) 90-day pilot complete at month seven with audit report in hand; (4) Tier-2 contract signed at month nine. Seed €3–4M at Tier-2 signing.

**Team.** Three founding hires from an identifiable pool: (1) Greek defence-procurement lawyer with 5+ years at ΓΔΑΕΕ or a top-tier Athens firm (Karatzas, Zepos & Yannopoulos, KLC equivalent) — owns corpus and DG relationship; (2) senior ML engineer with long-context legal RAG and Greek-NLP experience — owns citation enforcement and drafting; (3) commercial lead with HCDI or EDF programme experience — owns procurement and Brussels cross-sell. Post-pilot: former ΓΔΑΕΕ senior officer as design partner, Greek-legal-citation engineer, customer-success officer.

**Risks.** (1) Clearance creep — mitigated by the v1 public-corpus-only contractual scope-fence. (2) Missed-clause liability — mitigated by named-officer-signs-every-output, calibrated severity scores, transparent below-confidence escalation. (3) "Why not just train a junior officer?" — answered by the precedent set (UK MoD DASA, US GSA Tradewinds, DGA pilots) and the audit-firm report. (4) Big-4 advisory competition — defeated by operational-software positioning and HCDI / SAFE-aligned procurement vehicles that favour product over binders. (5) Helsing / Anduril / Palantir adjacent — none have a Greek-language procurement-law product, none will build one for a country-sized market; the language moat is structural.

---

# Pitch Deck

## Slide 1 — Klafsi Defence
- T-Life Capital portfolio venture, Athens
- Agentic clause-checker and tender-drafting copilot for ΓΔΑΕΕ
- Drafts, audits, and redlines defence tenders against Law 3978/2011, Directive 2009/81, ΓΔΑΕΕ precedent, and SAFE eligibility
- Pilot-ready, 90 days to first signed single-tender parallel-run

## Slide 2 — Problem
- ΓΔΑΕΕ tender drafting is a manual, multi-month review loop
- Mistakes have cost months of re-tender and publicised programme cancellations
- The 25-billion-euro Greek armament programme 2025-2036 and Greece's outsize EU SAFE share are landing on a workflow with no headroom
- The bottleneck is clause-by-clause review and citation, not policy
- ΥΠΕΘΑ is publicly publishing procurement-reform commitments — political tailwind is the strongest in a decade

## Slide 3 — Why Now
- EU SAFE (Security Action for Europe) €150bn loan facility 2025-2030 — Greece among largest beneficiaries — brand-new compliance surface stacked on Law 3978/2011 and Directive 2009/81
- ReArm Europe and Strategic Compass force compressed procurement timelines across NATO Europe
- Greek Law 5299/2026 governs AI/data rules; EU AI Act Annex III national-security carve-out gives deployment latitude; conformity-assessment posture is a future moat
- Precedent base is live: UK MoD DASA contracting assistants, US GSA Tradewinds AI-procurement Marketplace, DGA contract-drafting pilots
- HCDI 2nd Innovation Challenge is a soft-landing procurement vehicle running in 2026

## Slide 4 — Solution
- Bounded public corpus: Law 3978/2011, Law 4412/2016, Directive 2009/81, ECJ Article 346 TFEU jurisprudence, SAFE Regulation, NATO STANAGs, published ΓΔΑΕΕ opinions, FMS LoA standard clauses
- Three-layer split: deterministic legal retrieval + LLM drafting/redline + clause-level provenance
- Greek-language compliance memo with paragraph-level citations to source authority
- Severity-tiered risk flags, ΓΔΑΕΕ house-style redlines, Word add-in for inline use
- Named officer reviews, edits, signs every output — never autonomous submission

## Slide 5 — Demo
- Live walkthrough on a synthetic 180-page maritime-patrol-aircraft draft tender
- Agent flags six critical issues (one SAFE eligibility gap, one offsets-clause Article-346 risk, four citation drift items) with redline text
- Hover any flag, see the citation to the law article, the Directive transposition, and the prior ΓΔΑΕΕ opinion
- Side-by-side review against ΓΔΑΕΕ's last comparable tender
- Officer accepts three redlines, edits two, rejects one with a typed justification — full audit trail captured

## Slide 6 — Market
- Greek primary market: ΓΔΑΕΕ tender-drafting teams plus MoD Legal Service plus ΓΕΕΘΑ J-staff FMS reviewers
- Per-seat addressable population 150–250 officers across ΥΠΕΘΑ + ΓΕΕΘΑ
- Anchor framework agreement is the path; HCDI is the soft-landing vehicle
- Adjacent product line: FMS-LoA review module for ΓΕΕΘΑ (separate SKU, same architecture)
- Lateral expansion: SAFE-eligibility module sold across NATO Europe via Brussels partner — addressable across every member-state defence-procurement office

## Slide 7 — Traction
- T-Life Capital qualification composite 4.35 (source), confirmed at 4.0 on hostile second-pass — the only defence idea where studioFit clears 4
- Two ΓΔΑΕΕ senior officers in scoping conversations under NDA
- Defence-procurement-lawyer co-founder candidate identified, 6 years GDDIA + 4 years top-tier Athens firm
- HCDI 2nd Innovation Challenge target submission cycle Q3 2026
- Corpus indexing prototype on Law 3978/2011 + Directive 2009/81 complete

## Slide 8 — Business Model
- Tier 1 pilot: €60–120k, 90 days, one in-flight tender
- Tier 2 rollout: €250–600k year-one across ΓΔΑΕΕ + MoD Legal Service
- Tier 3 framework: multi-year SLA-backed subscription, mid-six-figure to low-seven-figure ACV
- Per-seat at €4–6k per officer per year at scale
- Adjacent SKUs: FMS-LoA module (ΓΕΕΘΑ), SAFE-eligibility module (cross-NATO)

## Slide 9 — Competition & Moat
- No multinational ships a Greek defence-procurement-law copilot — Harvey, Ironclad, Spellbook will not enter
- Big-4 consultancies (Deloitte, PwC, EY) sell advisory binders, not deployed tooling — operational-software moat
- Helsing / Anduril / Palantir play in operations and ISR, not procurement-law drafting — adjacent surface, no overlap
- Moat: Greek legal NER + ΓΔΑΕΕ opinion archive + ΣτΕ defence-procurement jurisprudence + FMS-LoA boilerplate library + house-style templates
- Architectural moat: bounded-corpus RAG + clause-level provenance is the post-Annex-III architecture European supervisors expect

## Slide 10 — Team
- Defence-procurement-lawyer founder — 5+ years ΓΔΑΕΕ or top-tier Athens firm; owns corpus and DG relationship
- Senior ML lead — long-context legal RAG and Greek-language NLP
- Commercial lead — HCDI or EDF programme experience; owns procurement vehicle and Brussels cross-sell
- Advisor bench: former ΓΔΑΕΕ Director-General, defence-law academic, ex-NATO procurement official

## Slide 11 — Ask
- €700k–€900k pre-seed, T-Life Capital lead, one Greek strategic angel, HCDI grant component
- Use of funds: nine-month runway through Tier-2 signing
- Investor and partner introductions sought: ΓΔΑΕΕ Director-General's office, Secretary General for Defence Industry, HCDI directorate, Athens defence-law partners at named firms

---

# Go-to-Market Plan

**Champions.** Primary economic buyer: the Director-General of ΓΔΑΕΕ (owns tender-drafting throughput and the SAFE / armament-programme deliverable calendar). Primary policy buyer: the Secretary General for Defence Industry at ΥΠΕΘΑ (controls the procurement-reform narrative and the budget line). Secondary operational champion: a senior ΓΔΑΕΕ tender-drafting officer who has personally taken the press hit on a re-tendered programme and has standing inside the building. Legal-review champion: the Director of the MoD Legal Service (Γραφείο Νομικού Συμβούλου), whose office reviews every draft tender before publication. Soft-landing institutional champion: the HCDI directorate, whose 2nd Innovation Challenge is the right procurement instrument for the pilot.

**First-meeting choreography.** Forty-five minutes with the Director-General, defence-procurement-lawyer co-founder in the room, technical founder for the architecture slide only. Open with the political diagnosis (the 25-billion-euro programme and the SAFE envelope are landing on a workflow with no headroom; the next publicised re-tender becomes the political story), not the product. Eight minutes on the bounded-corpus + clause-level-provenance split — the architectural moment the DG needs to internalise, because it is the answer to every Court-of-Audit and Parliamentary-Armaments-Committee objection. Cite UK MoD DASA, US GSA Tradewinds, and DGA pilots: every comparable NATO defence-procurement office is building this layer. Eight minutes on audit posture: name the candidate defence-law audit firm, the candidate in-flight tender, and the 90-day window timed to deliver an audit report before the next SAFE reporting cycle. Close on the pilot offer. Do not ask for a decision in the room. Ask for one follow-up: a working session with the MoD Legal Service Director and the ΓΔΑΕΕ IT director.

**Pilot offer (buyer hook).** A 90-day parallel-run on one in-flight ΓΔΑΕΕ tender, under €120k, with a defence-law audit firm of ΓΔΑΕΕ's choice scoring agent-drafted vs. officer-drafted clauses on legal-citation precision, redline quality, and time-to-publication. Headline target: 50% time-to-publication reduction with zero observed compliance errors. Every output signed by a named ΓΔΑΕΕ officer. The audit report is owned by ΓΔΑΕΕ and published or withheld at the DG's discretion. If the audit fails on precision or citation accuracy, the invoice is torn up.

**Expansion path.** Pilot pass → Tier-2 contract for full ΓΔΑΕΕ + MoD Legal Service rollout at €250–600k year-one, per-seat ACV thereafter. Concurrent FMS-LoA review module for ΓΕΕΘΑ J-staff (adjacent buyer, separate budget line, same architecture). Year-two: SLA-backed national framework agreement with HCDI as innovation-procurement partner. Year-three: SAFE-eligibility module sold across NATO Europe via a Brussels partner — same architecture, English interface, addressable to every member-state defence-procurement office routing programmes through SAFE. Optional v4 classified-annex wedge only if a named ΓΔΑΕΕ champion underwrites the clearance calendar and funds the cleared engineering subteam separately.

**Procurement vehicle.** Tier 1: HCDI 2nd Innovation Challenge submission, or a direct ΥΠΕΘΑ pilot contract under Article 118 of Law 4412/2016 (research and innovation contracts) — both calendar-compatible with SAFE reporting. Tier 2: competitive ΕΣΗΔΗΣ tender, won on audit-firm evidence and deployed Tier-1 NPS. Tier 3: framework agreement under Law 3978/2011 Article 39 (multi-year defence frameworks) with Klafsi as the named agentic-layer line item. We will accept Greek primes (Intracom Defence, ONEX, ADAS Holdings) or EU defence primes as Tier-3 prime contractors with Klafsi as agentic-layer subcontractor — path of least political resistance, matches the European Defence Industrial Strategy's primes-plus-SME architecture.

**PR and comms.** No press release at pilot signature or during the parallel-run. One pre-briefed Kathimerini long-form on the day the audit report is shared with the DG, framed around procurement throughput and Court-of-Audit defensibility, with the audit-firm partner quoted and UK MoD DASA + US GSA Tradewinds + DGA pilots as the international comparator set. Defence-press briefings (Defence Review, Doureios Ippos) held in person ahead of any wider contact — message is officer copilot, never officer replacement. Brussels-facing: a posted SAFE-Regulation conformity-assessment posture document on day one, pre-empting any EDA or EU Defence Industrial Strategy office inquiry and positioning Klafsi as a credible counterparty for the cross-NATO module. Per-officer productivity numbers are not published without the DG's written consent. Parliament-Committee-on-Armaments briefings are routed exclusively through the Secretary General for Defence Industry.

**Sequencing.** Months 0-3: pre-seed close, lawyer co-founder onboarded, HCDI submission filed, ΓΔΑΕΕ NDA scoping closed on a named in-flight tender. Months 3-6: pilot signed, corpus indexing complete, parallel-run begins, audit firm engaged. Months 6-9: audit report delivered, Kathimerini long-form, Tier-2 tender shaping. Months 9-12: Tier-2 signed, seed closes, FMS-LoA module specification begins with ΓΕΕΘΑ J-staff. Months 12-18: full ΓΔΑΕΕ + MoD Legal Service rollout, FMS-LoA pilot, SAFE-eligibility module specification with Brussels partner. Month 18+: cross-NATO SAFE-eligibility module launch and framework-agreement positioning.
