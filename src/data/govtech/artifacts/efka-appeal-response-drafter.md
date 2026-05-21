# Business Plan

**Company (working title):** Antikrousi — a T-Life Capital portfolio venture building agentic drafting tooling for the legal officers who defend ΕΦΚΑ before the administrative courts. Named for the Greek civil-procedure term for the state's responsive pleading (αντίκρουση).

**Thesis.** Every EFKA pension decision can be challenged: first to the internal appeals committee (Διεύθυνση Ενστάσεων), then on judicial review to the Διοικητικό Εφετείο (ΔΕφΑ), with cassation to the Άρειος Πάγος (ΑΠ). At the court levels ΕΦΚΑ does not write in its own voice — the Νομικό Συμβούλιο του Κράτους (ΝΣΚ) represents the agency through a small bench of legal officers who must, for every file, reconcile a complex contribution record against an even more complex transitional-law corpus and produce a citation-heavy responsive pleading in civil-service register. The bottleneck is not the legal reasoning; the senior officers know the law cold. The bottleneck is the file, the citation hunt, and the drafting overhead. Antikrousi drafts the first full responsive pleading with paragraph-level citations to the contribution record and to the law; the named ΝΣΚ officer reviews, edits, signs. The system never decides; it drafts.

**Architectural moat — the Sintaxis split ported to a legal-drafting surface.** Case-law retrieval and citation enforcement run on a deterministic index, not free-form generation. Drafting runs on an LLM bounded by ΝΣΚ template structures and a citation-required rule: no paragraph leaves the draft without a hyperlink to its source — a specific contribution row, a specific article of Law 4387/2016 or a successor amendment, a specific ΣτΕ, ΔΕφΑ or ΑΠ ruling. The Netherlands DPA's 2023 UWV action is the architectural counter-example: opaque algorithm in a consequential adjudication, regulator and press end the programme. Antikrousi's split — deterministic retrieval + LLM drafting + line-level provenance + signatory in the loop — is the post-UWV pattern European supervisors are now writing into guidance. For court-drafting this matters twice over: a misquoted statute or a fabricated citation in a ΔΕφΑ filing ends a ΝΣΚ officer's career and dents the agency's reputation. Provenance is the most prominent thing on the screen.

**Market and buyer.** The economic buyer is the ΝΣΚ President (or the deputy president holding the ΕΦΚΑ docket), with the EFKA Governor as co-signatory on any contract touching EFKA's IT estate. The policy buyer is the General Secretary for Social Insurance. The user is the ΝΣΚ legal officer (πάρεδρος / δικαστικός πληρεξούσιος) on the ΕΦΚΑ docket and, at the internal-committee level, the senior appeals caseworker (υπάλληλος Διεύθυνσης Ενστάσεων). Volume is large and structurally growing: every pension decision carries a non-trivial appeal probability, and the calculation-backlog catch-up that Sintaxis accelerates upstream will, on a two-to-three-year lag, drive an appeals wave downstream — the appeals function is the natural shock absorber for everything Sintaxis does. ΝΣΚ benches run small and stretched; international precedent (HMRC, Caddy) shows this is exactly the cohort that benefits earliest from a drafting copilot.

**Why now (the timing window).** Five facts converge on summer 2026. First, Greek Law 5299/2026 — the national AI-and-data act — gives ΝΣΚ a defined statutory category for AI-assisted public-sector drafting under human signatory control, the exact posture this product is built for. Second, EU AI Act Annex III enforcement was deferred to 2 December 2027 in the Omnibus deal of 7 May 2026; AI-assisted court drafting under signatory control sits in decision-support territory regardless, and the deferral gives a clean eighteen-month runway with the conformity file pre-positioned. Third, HMRC rolled an internal copilot to 28,000 staff in April 2026 — the canonical comparator. Fourth, UK Caddy is operational at Citizens Advice with 80% response-approval (2025 SCVO RCT), and Albert at France Services is in production for ten thousand civil servants. Fifth, Sintaxis is in pilot motion at EFKA; the Sintaxis seed-round plan named this product, by name, as the second product line.

**Product.** A web copilot embedded next to the ΝΣΚ legal officer's drafting environment and, in the internal-committee variant, next to the Διεύθυνση Ενστάσεων caseworker's existing EFKA workflow. The agent ingests the citizen's appeal text in Greek, classifies the grounds against a defined pension-appeal taxonomy (transitional-regime misapplication, contribution-period reconciliation, pensionable-earnings dispute, disability-bridge eligibility, survivor-pension entitlement, recalculation-after-amendment), pulls the original decision and calculation memo and the full contribution history from EFKA back-office, retrieves case-law from ΣτΕ, ΔΕφΑ and ΑΠ on the matched grounds, drafts the response memo in ΝΣΚ register with paragraph-level citations, flags any ground it assesses as substantively likely to succeed for senior review, and outputs a clean Word document in the ΝΣΚ filing template. No autonomous submission, ever. The senior officer signs.

**Cross-sell and platform economics.** Antikrousi sits on the same caseworker desktop as Sintaxis. Contribution-record retrieval, Greek legal NER, citation enforcement, and the Law 4387/2016 corpus are shared infrastructure. Internally: one platform, two product lines, two buyers, two budget lines. Shared platform is the operating leverage; two buyers are the revenue leverage. Read this as the second product line of the Sintaxis seed plan, not a separate company.

**Revenue model and pricing.** Direct contract with EFKA via the Ministry of Labour for the internal-committee deployment; a parallel arrangement with ΝΣΚ for the court-drafting deployment. Tier 1: €40–55k for a ten-week, 100-file parallel-run in the Διεύθυνση Ενστάσεων. Tier 2: €200–350k year-one across the central appeals directorate and a named ΝΣΚ bench, per-seat SaaS-plus-implementation €2.0–3.2k per seat per year blended across the two user populations. Tier 3: national subscription with throughput SLAs and a documented ΝΣΚ benchmark, mid-six-figure to low-seven-figure ACV.

**Unit economics.** Greek/EU sovereign-cloud hosting with a contractual path to the Mistral/SAP infrastructure under the France-Germany sovereign-AI agreement through 2030. Marginal inference cost per appeal €0.50–1.10 — slightly above Sintaxis because case-law retrieval is heavier than contribution-record retrieval. Per-seat ACV at scale 8–20× variable cost. Gross margin target 70%+ after support, with per-deployment integration overhead materially reduced by sharing the Sintaxis footprint at EFKA.

**Capital plan and milestones.** Funded from the Sintaxis seed earmark, not as a separate raise — €700k–€900k notional within the €2.5–3.5M Sintaxis seed, releasable on Sintaxis Tier-2 signature. Milestones: (1) signed pilot LoI from ΕΦΚΑ within 90 days of Sintaxis Tier-2; (2) ΝΣΚ working-group endorsement of the court-drafting variant at month four; (3) parallel-run pilot and senior-officer review report at month seven; (4) Tier-2 contract at month ten. A discrete Series A of €5–8M closes once both products are in Tier 2, raised against the combined platform and the lateral expansion path.

**Team and hires.** No incremental founding team — Antikrousi runs on the Sintaxis founding stack. Two incremental senior hires: (1) a former ΝΣΚ legal officer who has worked the ΕΦΚΑ docket for at least five years, owning template library, ΝΣΚ register, and review-board relationship; (2) a Greek-legal-retrieval engineer specialising in administrative-court jurisprudence, owning the ΣτΕ / ΔΕφΑ / ΑΠ corpus index. First two post-pilot hires: a second former ΝΣΚ officer as design partner for the court-drafting variant, and a customer-success lead shared with Sintaxis.

**Risks.** (1) A misquoted statute or fabricated citation in a court filing — the buyer's stated nightmare. Mitigated by the citation-required rule (no paragraph without a verified hyperlinked source), senior-officer signature on every output, and a published citation-precision metric benchmarked against the caseworker baseline. (2) ΝΣΚ institutional caution against external vendors touching pleadings — mitigated by the deployment posture: the officer keeps the pen, the system drafts a starting point. (3) Greek Law 5299/2026 secondary-legislation surprises — mitigated by the deterministic-retrieval + provenance + signatory architecture, which is the safe harbour the statute is designed to encode. (4) Incumbent overlap — none ship this. (5) Political-third-rail risk if a citizen-facing legal text misrepresents law or record — mitigated by senior signature and the published citation-precision metric.

---

# Pitch Deck

## Slide 1 — Antikrousi
- T-Life Capital portfolio venture, Athens
- Pension-appeal drafting copilot for ΝΣΚ legal officers and the ΕΦΚΑ Διεύθυνση Ενστάσεων
- Drafts the responsive pleading with full citation provenance; the officer reviews, edits, signs
- Pilot-ready, ten weeks, under €60k

## Slide 2 — Problem
- Every EFKA pension decision can be appealed: first to the Διεύθυνση Ενστάσεων, then to ΔΕφΑ, then on cassation to ΑΠ
- Appeal volumes are large and structurally growing — the calculation-backlog catch-up upstream becomes the appeals wave downstream
- Each response requires reconciliation of contribution records, precise citation to Law 4387/2016 and successor amendments, and retrieval of relevant ΣτΕ / ΔΕφΑ / ΑΠ jurisprudence
- The bottleneck is the citation hunt and the drafting overhead, not the reasoning — ΝΣΚ officers know the law cold

## Slide 3 — Why Now
- Greek Law 5299/2026 defines AI-assisted public-sector drafting under human signatory control — the exact posture this product is built for
- EU AI Act Annex III enforcement deferred to 2 December 2027 (Omnibus, 7 May 2026) — eighteen-month clean window
- HMRC rolled an internal copilot to 28,000 staff in April 2026 — the comparator the buyer will name
- UK Caddy: 80% response-approval at Citizens Advice in the 2025 SCVO RCT; France Albert in production for 10,000 civil servants at France Services
- Sintaxis (sister product) is in pilot motion with the same EFKA Governor — same caseworker desktop, second budget line

## Slide 4 — Solution
- Three-layer split as in Sintaxis: deterministic retrieval + LLM drafting + line-level provenance
- No paragraph leaves the draft without a hyperlinked source
- Officer hovers any sentence, sees the source in under ten seconds
- Senior ΝΣΚ officer signs — the system never files

## Slide 5 — Demo
- Live walkthrough on a synthetic ΔΕφΑ-bound appeal: transitional-regime misapplication grounds, three pre-merger funds
- Side-by-side: agent-drafted pleading vs. blank officer draft
- Hover any sentence, see the citation to the law article or to the ΣτΕ / ΔΕφΑ ruling
- Flagged likely-to-succeed ground routed to senior review with a one-paragraph reasoning note
- Officer edits, signs, exports to the ΝΣΚ filing template

## Slide 6 — Market
- EFKA appeals-directorate seats in the low hundreds; ΝΣΚ benches on the EFKA docket in the tens
- Combined per-seat ACV is the headline, not the seat count
- Adjacent line: Sintaxis (same desktop, separate buyer)
- Lateral expansion: ΟΠΕΚΑ family-benefits, ΑΑΔΕ tax-appeals, Migration & Asylum appeals — same architecture, different corpus

## Slide 7 — Traction
- T-Life ministries-pack composite 4.15; highest second-pass average in the hostile qualification (May 2026)
- Sintaxis pilot motion in EFKA puts the Governor in the room with the Antikrousi pitch within the quarter
- Former ΝΣΚ officer (15+ years EFKA docket) committed in principle as senior hire
- ΣτΕ / ΔΕφΑ pension-jurisprudence corpus assembly begun on the Sintaxis platform

## Slide 8 — Business Model
- Tier 1: €40–55k, ten-week pilot, internal-committee variant
- Tier 2: €200–350k year-one, internal directorate + named ΝΣΚ bench
- Tier 3: SLA-backed national subscription with citation-precision metric, mid-six- to low-seven-figure ACV
- Per-seat SaaS-plus-implementation, blended €2.0–3.2k per seat per year

## Slide 9 — Competition & Moat
- No multinational ships a Greek pension-appeal copilot — the corpus is the moat
- Stack: Greek legal NER + ΝΣΚ register + ΣτΕ / ΔΕφΑ / ΑΠ jurisprudence index + Law 4387/2016 corpus
- Architectural moat: deterministic retrieval + LLM drafting + line-level provenance + signatory in the loop — the post-UWV pattern
- Platform moat: shared infrastructure with Sintaxis, two buyers off one caseworker desktop

## Slide 10 — Team
- Sintaxis founding stack runs the platform — no incremental founders
- Senior hire 1: former ΝΣΚ officer, EFKA docket, 15+ years
- Senior hire 2: Greek-legal-retrieval engineer, administrative-court jurisprudence
- Advisor bench: shared with Sintaxis, plus a former ΝΣΚ deputy president

## Slide 11 — Ask
- €700k–€900k released from the Sintaxis seed earmark on Sintaxis Tier-2 signature
- Ten-month runway through Antikrousi Tier-2 signing
- Investor intros sought: ΝΣΚ President's office (EFKA docket), ΕΦΚΑ appeals-directorate head, Ministry of Labour chief of staff

---

# Go-to-Market Plan

**Champion identification.** Three named primary champions. The ΝΣΚ President (or the deputy president holding the ΕΦΚΑ docket) — institutional gatekeeper for any tooling that touches ΝΣΚ drafting, the most cautious of the three and the most consequential. The ΕΦΚΑ Governor — already owns the cross-sell story because Sintaxis is in pilot motion on the same caseworker desktop, and has operational mandate over the Διεύθυνση Ενστάσεων. The EFKA appeals-directorate head — day-one user-buyer, feels the drafting overhead every week, controls pilot acceptance at directorate level. Secondary champion: the General Secretary for Social Insurance, the same secondary champion as Sintaxis. Operational champion: a named senior ΝΣΚ officer with at least a decade on the EFKA docket, identified through the senior-hire process; the same person becomes design partner and, eventually, ΝΣΚ-side customer-success lead.

**First-meeting choreography.** Two sequenced first meetings. Meeting one: forty-five minutes with the ΕΦΚΑ Governor and the appeals-directorate head, ideally appended to a Sintaxis pilot-review session so the room is warm. Open with the appeals-volume diagnosis — the calculation-backlog catch-up upstream becomes the appeals wave downstream on a two-to-three-year lag. Ten minutes on the three-layer split, citing the Sintaxis architecture and UWV-DPA — the Governor will recognise it and that is the point. Ten minutes on the pilot offer. Close on the ask: a joint introduction to the ΝΣΚ President's office on the EFKA docket. Meeting two: forty-five minutes with the ΝΣΚ President or deputy president, with the former-ΝΣΚ-officer senior hire in the room. Open with the citation-precision metric, not productivity — ΝΣΚ buys precision before speed. Demonstrate the citation-required rule live. Cite Greek Law 5299/2026 as the statutory category this product is built for, and HMRC's April 2026 rollout as the comparator. Close on the same pilot offer, with the audit relationship reshaped as a senior-officer review board — ΝΣΚ runs its own quality bar.

**Pilot offer (the buyer hook).** A 100-file parallel-run in the central Διεύθυνση Ενστάσεων, ten weeks, under €60k, with a senior-officer review board chaired by a named ΝΣΚ officer of the President's choosing, scoring agent-drafted vs. caseworker-drafted pleadings on three measures: citation precision (the headline metric), legal-reasoning adequacy, and time-to-draft. Every output signed by a caseworker or ΝΣΚ officer as in production; no autonomous submission, ever. The review-board report is owned by the ΝΣΚ President. The slogan, lifted verbatim from the source-idea memo: every citation hyperlinks back to the source paragraph in the contribution record or the law article, the user clicks and verifies in under ten seconds. If citation precision falls below the caseworker baseline, we tear up the invoice. Comparators named in the room: HMRC's April 2026 rollout to 28,000 staff, Caddy's 80% response-approval (2025 SCVO RCT), and Albert at France Services for 10,000 civil servants.

**Expansion path.** Pilot → Tier-2 combined directorate plus ΝΣΚ-bench rollout at €200–350k year-one. Concurrent product expansion to a court-drafting deep mode tuned to ΔΕφΑ filings, with a cassation-grade variant for ΑΠ work as a year-three premium tier. Lateral plays: ΟΠΕΚΑ family-benefits appeals (smaller corpus, faster to ship) and ΑΑΔΕ tax-appeals (larger corpus, larger ACV, separate buyer at the AADE Governor). Year three: Migration & Asylum decision-letter drafting, positioned strictly as decision-support to a named officer. The substrate — Greek legal NER, citation enforcement, sovereign-cloud inference — is shared across every lateral play.

**Procurement vehicle.** Tier 1 is a direct EFKA contract for the internal-committee variant under the open-tender threshold, layered on the Sintaxis procurement footprint to minimise legal-counsel overhead. The ΝΣΚ court-drafting engagement runs in parallel under a memorandum of cooperation with the ΝΣΚ President's office, not a vendor contract — ΝΣΚ does not buy software, it accepts tooling under cooperation frameworks; we design around this. Tier 2 is a competitive tender we expect to win on the pilot review-board evidence and the citation-precision metric. As with Sintaxis, we will accept Performance Technologies or Cosmote as Tier-3 prime, Antikrousi as agentic-layer subcontractor — protecting incumbents is policy.

**PR and comms.** No press release at pilot signature. No press release during the parallel-run. Internal communication only, inside ΕΦΚΑ and ΝΣΚ. One pre-briefed Kathimerini long-form on the day the review-board report reaches the ΝΣΚ President — framed around citation precision and citizen wait-time reduction, with the review chair quoted and HMRC, Caddy and Albert as comparator set. No per-officer productivity numbers without written consent from both the EFKA Governor and the ΝΣΚ President — productivity framing is risky around ΝΣΚ, where craft outranks throughput. Stakeholder briefings (POS-EFKA on the appeals-directorate side, the ΝΣΚ bar association on the officer side) held in person before any press contact, with the message that the named human keeps the pen and the system drafts a starting point. Brussels-facing: a joint Greek Law 5299/2026 and EU AI Act conformity-assessment posture document on day one, paired with the Sintaxis posture — one narrative, two products, one regulatory file. We pre-empt EDPS and Commission inquiry by being the legible member-state case study of how to ship caseworker drafting tooling correctly, well before the 2 December 2027 Annex III enforcement date.
