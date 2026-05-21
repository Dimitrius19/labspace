# Business Plan

## Company thesis
**Praktiko** is an agentic-AI company that industrialises Greek Council-of-Ministers paperwork — every Υπουργικό Συμβούλιο pre-read, every Πρακτικό, every publishable Πράξη Υπουργικού Συμβουλίου — from inside the General Secretariat of the Prime Minister (ΓΓΠΘ), the permanent civil-service body that coordinates the weekly Cabinet. The wedge is the bi-weekly pre-read packet; the company is built for the full Cabinet artefact lifecycle: agenda intake → per-item dossier → PM cover memo → meeting transcript ingestion → formal Πρακτικό draft → Διαύγεια-grade Πράξη draft → audit trail. The hostile second pass scored composite 3.80 PASS — the strongest result in the Επικρατείας portfolio, against three CONDITIONAL/FAIL outcomes on adjacent PM-office ideas. The pass was earned on lockInRisk 5 (the ΓΓΠΘ seat is structurally apolitical and survives every government change) and buyerReachability 4.

Praktiko sits on top of the ΓΓΠΘ document substrate, the Διαύγεια publishing pipeline, the Legislative Bureau's form-check output, and sectoral ministries' submission portals. Every output is reviewed by a named ΓΓΠΘ officer before it reaches the PM or Διαύγεια — force-multiplier, not substitute.

## Market & buyer
Primary buyer: the **General Secretariat of the Prime Minister (ΓΓΠΘ — Γενική Γραμματεία Πρωθυπουργού)**, specifically the Council-of-Ministers Secretariat office that organises every Υπουργικό Συμβούλιο. The named contracting champion is the **Γενικός Γραμματέας της Κυβέρνησης**, the senior permanent-civil-service role spanning every government change. The operational sponsor is the **Προϊστάμενος της Γραμματείας του Υπουργικού Συμβουλίου**. Greek Law 5299/2026 governs the AI/data conformity envelope; EU AI Act Annex III deferral to 2 December 2027 (Omnibus deal, 7 May 2026) provides an 18-month design runway.

The buyer's pain is concrete. Υπουργικό Συμβούλιο meets every ~2 weeks with 5-15 agenda items. Each item needs an executive summary, ministry submission, Bureau form-check, budget-impact statement, inter-ministerial-impact note and decision-options page. The Secretariat assembles all of this by hand, often delivering packets the night before. Post-meeting the same Secretariat has 48-72 hours to turn the discussion into a clean Πρακτικό and publishable Διαύγεια-grade Council acts on a public portal where every form error is permanently visible. A form-error on Διαύγεια is a personal-reputation event for the Γενικός Γραμματέας.

No Greek incumbent. Hostile pass scored blue-ocean 5 — no Tier-1 SI, no Greek vendor, no multinational has the formal Greek Πρακτικό register. Closest international precedents: Estonia's e-Cabinet (paperless since 2000) with 2026 Bürokratt agentic layer; UK HMRC internal copilot at 28,000 staff (April 2026); UK i.AI Caddy at Citizens Advice clearing an SCVO 2025 RCT at 80% approval; France's Assistant IA at ~10,000 civil servants (current GA after Albert/France Services was paused January 2026). None is a Cabinet-paper drafter in production.

## Why we win — four structural advantages

**(1) Buyer seat survives governments.** ΓΓΠΘ Council Secretariat is a permanent civil-service body. lockInRisk 5/5.

**(2) Greek-language moat is structural.** The formal Greek of Πρακτικά and Πράξεις is one of the most stylised registers in Greek public administration — fixed present-tense conjugations ('αποφασίζει', 'εγκρίνει', 'εξουσιοδοτεί'), Constitutionally-grounded citation conventions, ΦΕΚ-ready formatting. greekLanguageMoat 5/5. Multinationals cannot ship this register without a Greek public-administration corpus they do not have.

**(3) Apolitical surface despite political proximity.** The *Secretariat function* is intentionally apolitical — its job is procedural correctness, not policy. The inverse of the killed statement-consistency-monitor and failed commitment-tracker, where the artefact's value *was* the politically explosive output.

**(4) Instrument-agnostic loop.** Same loop retargets onto Κυβερνητικό Συμβούλιο, ΚΥΣΟΙΠ, and ΚΥΣΕΑ with template substitution. The bridge after Υπουργικό Συμβούλιο is the broader inter-ministerial-council suite, all through the same ΓΓΠΘ Secretariat.

## Product (agentic loop)
Seven steps, all auditable, all classified-handling-ready by design:

1. **Receive draft agenda** with proposing ministry, theme and required attachments per item.
2. **Pull artefacts** per item: ministry submission, Bureau form-check, budget-impact, inter-ministerial-impact, prior Council decisions.
3. **Assemble per-item pre-read** in standard ΓΓΠΘ template with citation chain to every cited ΦΕΚ act, Διαύγεια ID and prior Πράξη.
4. **Draft PM cover** — one page with top-3 conflicts and pre-empted Q&A.
5. **Post-meeting**: ingest note-taker record and (where authorised) audio transcript; draft Πρακτικό in fixed formal voice.
6. **Draft publishable Πράξεις Υπουργικού Συμβουλίου** in ΦΕΚ-ready form with Government Procedural Code references.
7. **Hand to ΓΓΠΘ** for sign-off with redline and SHA-hashed evidence manifest.

Two non-negotiables: never autonomous — every output reviewed by a named ΓΓΠΘ officer; classified-handling enforced at deployment — a subset of papers (foreign affairs, defence, intelligence) must run on-prem or Greek sovereign cloud.

## Revenue model & pricing
- **ΓΓΠΘ Pilot (Q4-2026, €60-90k)**: one Cabinet cycle (six sessions across three months), three items per session, classified excluded. Above €30k απευθείας ανάθεση threshold (Law 4412/2016) — innovation-pilot path under Law 5299/2026 with sole-source justification.
- **ΓΓΠΘ framework (H1-2027, €180-350k/yr)**: full Cabinet coverage including classified-handling carve-out, multi-year through 2030. Open competition with pre-market consultation. Classified on-prem; routine on sovereign cloud.
- **Inter-ministerial-council suite (2028+, €350-600k/yr)**: extension to Κυβερνητικό Συμβούλιο, ΚΥΣΟΙΠ, ΚΥΣΕΑ. Same loop, different templates, same buyer.

Beyond Greece: Cyprus and Malta export 2029-2030 at €150-300k each. This is a durable-reference company, not a horizontal play.

## Unit economics
Gross margin ~70% at framework scale. On-prem for classified carve-out raises delivery cost vs. pure-SaaS but is non-negotiable. Cloud + LLM inference per Cabinet cycle ~€8k; the rest is human time — analyst onboarding, prompt-engineering against the Πρακτικό register, white-glove review of the first six sessions. LTV across pilot → framework → inter-ministerial-council through 2032: €2.5-4m. CAC is founder-time; one buyer in Greece, named and reachable.

## Capital plan & milestones
- **Pre-seed (now, €400k)**: founder + 1 senior engineer + 1 classified-IT partner on retainer + 1 part-time Greek public-administration jurist. Six-month sprint to Q4-2026 pilot.
- **Seed (H2-2027, €1.8m)**: team to ten, framework signed, classified carve-out hardened, first inter-ministerial-council extension scoped.
- **Series A optionality (2029)**: inter-ministerial-council suite live, Cyprus/Malta in commercial discussions.

Milestones: signed pilot Q4-2026; first agent-produced Πρακτικό on the official record H1-2027; framework signature H2-2027; first inter-ministerial-council extension live 2028.

## Team & hires
Three names plus a partner: (i) **ex-ΓΓΠΘ Council Secretariat officer or senior Greek public-administration lawyer** as CEO — qualification flagged founder-fit as a wound; bench is sub-5 names in Athens. (ii) **Applied-NLP engineer** with Greek legal/administrative corpus experience (ex-Workable, ex-Persado, NTUA AI lab). (iii) **Classified-IT-handling partner** on cap table — Greek SI with HEMS-grade clearance or sovereign-cloud vendor. Plus a Greek public-administration jurist on retainer.

The 30-day founder hunt is gating. Without an ex-ΓΓΠΘ Secretariat signature, we do not approach the Γενικός Γραμματέας.

## Risks
- **Form-error on Διαύγεια (binding)** — buyer's deepest fear is a defective Πράξη on the public portal. Counter: every draft passes through a named human officer; redline diff and SHA-hashed evidence manifest make review fast; pilot success metric is *zero* form-errors across six sessions.
- **Classified-handling (architectural)** — subset of papers cannot run on commodity cloud. Counter: classified-IT partner on cap table; on-prem for classified, sovereign cloud for routine, single loop across both.
- **Pilot procurement above απευθείας ανάθεση** — €60-90k exceeds €30k services threshold (Law 4412/2016). Counter: Law 5299/2026 innovation-pilot path with sole-source justification.
- **Founder bench (constraint)** — sub-5-name list. Counter: 30-day hunt across retired Γενικοί Γραμματείς, ΝΣΚ alumni, senior parliamentary-services lawyers.
- **EU AI Act conformity (deferred)** — Annex III enforcement deferred to 2 December 2027 (Omnibus deal 7 May 2026). Counter: design now for conformity (human-in-the-loop, full audit trail, RBAC) so the deadline lands as documentation, not rework.
- **Political turnover** — government change replaces the political layer; ΓΓΠΘ stays. Contract with ΓΓΠΘ as a permanent body.
- **Scope creep into political surface** — every adjacent PM-office idea has been killed or de-prioritised. Hold the line on Cabinet paperwork only through framework signature.

---

# Pitch Deck

## Slide 1 — Praktiko
- Agentic AI for Greek Council-of-Ministers paperwork — pre-read, Πρακτικό, Πράξη
- Reads agenda, drafts packet, ingests transcript, ships Διαύγεια-ready acts
- Buyer: ΓΓΠΘ, permanent civil-service body
- Founder hunt closing; Athens; May 2026

## Slide 2 — The problem the Γενικός Γραμματέας της Κυβέρνησης has
- Υπουργικό Συμβούλιο every ~2 weeks, 5-15 items per session
- Per item: ministry submission + Bureau form-check + budget impact + inter-ministerial impact + decision options
- Packets routinely delivered the night before; Secretariat runs past midnight on Cabinet weeks
- Post-meeting: 48-72 hours to draft the Πρακτικό and publish Πράξεις on Διαύγεια
- A form-error on Διαύγεια is a personal-reputation event — public, permanent, read by the press

## Slide 3 — Why the buyer seat survives governments
- ΓΓΠΘ Council Secretariat is a permanent civil-service body
- Γενικός Γραμματέας της Κυβέρνησης is a career role across governments
- lockInRisk 5/5 on hostile second-pass — highest in the Επικρατείας portfolio
- Contrast: failed commitment-tracker and killed statement-consistency-monitor both had political-appointee buyers

## Slide 4 — Why now
- Greek Law 5299/2026 establishes the AI/data conformity envelope — explicit innovation-pilot path
- EU AI Act Annex III enforcement deferred to 2 Dec 2027 — 18-month design runway
- Estonia Bürokratt agentic layer on e-Cabinet through 2025-2026 — fresh sovereign precedent
- UK HMRC copilot 28,000 staff (April 2026); i.AI Caddy 80% approval (SCVO RCT 2025); France Assistant IA 10,000 civil servants — GA-scale precedent
- No deployed Cabinet-paper agent anywhere — blue-ocean 5/5

## Slide 5 — Solution
- Agent reads draft agenda; pulls per-item artefacts from ministry portals, Bureau output, budget office, Διαύγεια
- Drafts pre-read in standard ΓΓΠΘ template with full citation chain
- Drafts PM cover with top-3 conflicts pre-empted
- Post-meeting: ingests note-taker record; drafts Πρακτικό and Πράξεις in formal Greek register
- ΓΓΠΘ officer reviews; ΓΓΠΘ publishes to Διαύγεια
- On-prem for classified; sovereign cloud for routine; single loop across both

## Slide 6 — Demo
- Real Υπουργικό Συμβούλιο agenda from May 2026 — three items
- Agent produces a pre-read packet in 3 hours vs. manual 2-3 days
- Agent catches one form-error in an actual Διαύγεια act from the last 18 months

## Slide 7 — Market
- Greece ΓΓΠΘ: pilot €60-90k, framework €180-350k/yr through 2030
- Inter-ministerial-council suite (Κυβερνητικό Συμβούλιο, ΚΥΣΟΙΠ, ΚΥΣΕΑ): €350-600k/yr from 2028
- Cyprus + Malta export 2029-2030: €150-300k each
- ~€2.5-4m LTV in Greece through 2032

## Slide 8 — Traction & precedent
- Estonia: e-Cabinet paperless since 2000; Bürokratt agentic layer 2025-2026
- UK: HMRC copilot 28,000 staff (April 2026); i.AI Caddy 80% (SCVO RCT 2025)
- France: Assistant IA 10,000 civil servants (current GA after Albert paused Jan 2026)
- Italy: Palazzo Chigi Consiglio dei Ministri digitalisation in workflow-modernisation phase, no agentic drafter in production
- Note: UK Redbox sunset by i.AI December 2025 — we cite HMRC copilot and Caddy instead
- No deployed Cabinet-paper agent anywhere

## Slide 9 — Business model
- Pilot €60-90k under Law 5299/2026 innovation-pilot framework
- Framework €180-350k/yr, multi-year, classified-handling on-prem carve-out
- Inter-ministerial-council suite €350-600k/yr from 2028
- ~70% gross margin at framework scale

## Slide 10 — Competition & moat
- No Greek incumbent; no multinational ships Greek Πρακτικό register
- Moat: formal Greek of Πρακτικά and Πράξεις (5/5), permanent buyer (5/5), classified-IT deployment, ΓΓΠΘ-officer-reviewed audit trail
- 18-24 months of compounding feedback from inside the Council Secretariat is structurally hard to copy

## Slide 11 — Team & founder hunt
- CEO: ex-ΓΓΠΘ Council Secretariat officer or senior Greek public-administration lawyer — 30-day hunt closing
- CTO: applied-NLP engineer with Greek legal/administrative corpus experience
- Classified-IT partner on cap table
- Greek public-administration jurist on retainer

## Slide 12 — Ask
- €400k pre-seed at €4m post
- 6 months to signed ΓΓΠΘ pilot
- 12 months to first agent-produced Πρακτικό on the official record
- 18 months to ΓΓΠΘ framework signature
- 30 months to first inter-ministerial-council extension live

## Slide 13 — Why we win
- Strongest blue-ocean play in the Επικρατείας portfolio — 5/5
- Buyer seat survives governments — 5/5 lockInRisk
- Greek-language moat multinationals cannot ship — 5/5
- Apolitical Secretariat surface despite PM-office proximity
- A boring, repeatable, twice-a-month deliverable in formal Greek civil-service voice

---

# Go-to-Market Plan

## Champion identification
The named champion is the **Γενικός Γραμματέας της Κυβέρνησης** at ΓΓΠΘ. Operational sponsor: the **Προϊστάμενος της Γραμματείας του Υπουργικού Συμβουλίου**. Both permanent senior civil-service roles. First conversation goes to the Head of the Council Secretariat office — peer-level technocratic — then escalates to the Γενικός Γραμματέας for the procurement signature. The Minister of State and PM's political chief-of-staff are *not* the buyer and not in the first three meetings; introducing them early raises political-third-rail temperature and is the failure mode the qualification flagged.

Introduction route: two warm paths in parallel — (i) a retired ΓΓΠΘ Council Secretariat officer recruited as a paid founding advisor during the 30-day founder hunt, and (ii) an Athens-based senior public-administration lawyer (ex-ΣτΕ rapporteur or ex-Νομικό Συμβούλιο του Κράτους) who has briefed the Γενικός Γραμματέας on procedural matters.

## First-meeting choreography
Forty-five minutes with the Head of the Council Secretariat office, no deck. Open with the buyerHook: *"We have a recent Υπουργικό Συμβούλιο agenda. The agent produced a pre-read packet in 3 hours that your team produces today in 2-3 days — and it catches a form-error in a real Διαύγεια act from the last 18 months."* Then live walkthrough: one agenda item end-to-end, click through every citation, show the redline against the actual ΓΓΠΘ packet, then the form-error in the published Πράξη. Last fifteen minutes: pilot proposal, named contracting officer, draft scope, classified-handling architectural sketch. Close on lockInRisk: *"Contracted with ΓΓΠΘ as a permanent body. The artefact stays whatever happens in the Minister of State office."*

What we do not do: discuss any non-Cabinet idea, name any minister, ask for classified-paper access, quote a framework price.

## Pilot offer
- **Scope**: one Cabinet cycle (six sessions across three months), three agenda items per session, routine items only.
- **Budget**: €60-90k under Law 5299/2026 innovation-pilot framework with sole-source justification on Greek public-administration register specificity. Above €30k απευθείας ανάθεση threshold (Law 4412/2016).
- **Deliverable**: per-session agent-produced pre-read packet, PM cover memo, post-meeting Πρακτικό draft, one Διαύγεια-ready Πράξη draft per session; side-by-side vs. ΓΓΠΘ manual output; review log with redline accept/reject; SHA-hashed evidence manifest per session.
- **Success criteria**: (a) zero form-errors on Διαύγεια-published Πράξεις in scope; (b) ≥75% of pre-read sections accepted with edits only; (c) ≥60% reduction in Secretariat officer time per item; (d) classified-handling architectural sketch signed off by ΓΓΠΘ IT security ahead of the framework conversation.

## Inter-ministerial-council onramp
The pilot seeds both the ΓΓΠΘ framework and the inter-ministerial-council extension. Three onramp moves:

1. **Month 1**: classified-handling architectural review with ΓΓΠΘ IT security. Procurement-cost unlock for the framework conversation.
2. **Month 4**: deliver an inter-ministerial-council retargeting demo on a recent Κυβερνητικό Συμβούλιο or ΚΥΣΟΙΠ agenda. Converts the ΓΓΠΘ framework into a multi-council suite conversation.
3. **Month 5**: pre-market consultation with the ΓΓΠΘ procurement office on a 2027 framework spec. Scope narrowly enough that Greek Πρακτικό register + classified-handling architecture + pilot reference makes us the only credible bidder; multi-year (2027-2030) with extension clause into the inter-ministerial-council suite.

In parallel: quiet ΓΓΠΘ-internal positioning. Brief one or two retired Γενικοί Γραμματείς as informal advisors so the Secretariat reads us as "the agent the Secretariat asked for."

## Expansion path
Cycle two: framework signature with full Cabinet workflow, classified carve-out live, inter-ministerial-council retargeting from demo to pilot. €180-350k/yr through 2030. By 2028 the inter-ministerial-council suite (Κυβερνητικό Συμβούλιο + ΚΥΣΟΙΠ + ΚΥΣΕΑ) is live as a framework extension. 2029-2030: Cyprus and Malta in commercial discussion.

We do not pitch a parallel PM-office product before framework signature. The Cabinet-paper play wins by *not* contaminating the Secretariat relationship with politically-exposed adjacent surfaces.

## Procurement vehicle
- **Pilot**: Law 5299/2026 innovation-pilot framework, sole-source justification on Greek public-administration register specificity. €60-90k, three-month term, milestone-based payment.
- **ΓΓΠΘ framework**: open competition under Law 4412/2016, scoped so bilingual Πρακτικό register + classified-handling architecture + pilot reference makes us the only credible bidder. Pre-market consultation shapes the spec. Multi-year 2027-2030 with extension into the inter-ministerial-council suite.
- **Inter-ministerial-council suite (2028+)**: framework extension via pre-negotiated clause.
- **Beyond Greece**: Cyprus and Malta sold on the Greek reference and the AI Act Annex III conformity package (from 2 December 2027).

## PR/comms strategy
Silent for the first eighteen months. No press release, no LinkedIn victory lap, no journalist demo. The ΓΓΠΘ Secretariat must claim the work as its own — the political win is *Cabinet papers shipped clean and on time*, not *startup ships agent inside the PM's house*. Public footprint during pilot and framework signature is zero outside of one technical blog post on Greek public-administration-register NLP, researcher-tone, no minister named.

After framework signature plus the first full year of agent-produced Πρακτικά on the official record: one careful joint communication with ΓΓΠΘ positioning the agent as *infrastructure of the Greek State's Cabinet apparatus*. That framing opens Cyprus and Malta and positions Praktiko as the reference vendor for the broader inter-ministerial-council suite from 2028.
