# Business Plan

**Ethnos — Greek-Language LLM Evaluation & Red-Team Service**

## Company thesis

Ethnos is a small, senior, Athens-based eval house that ships Greek-language adversarial test suites, Annex IV–shaped conformity reports and versioned attestations to the Greek state. The buyer is the **Special Secretariat for AI and Data Governance**, created inside the renamed **Ministry of Digital Governance and AI** in July 2025. That cell now owns AI Act competent-authority duties for Greece (designation deadline was Aug 2025; full transposition into Greek law lands 9 Dec 2026). The 7 May 2026 Omnibus deal deferred Annex III high-risk enforcement to 2 Dec 2027 — that is a 16-month pilot runway in which the Secretariat must build the eval substrate it will be measured against. None of the ministries shipping agents in 2026-27 has Greek-language red-teaming capacity, and no multinational evaluator can credibly probe καθαρευουσιάνικη legalese, Greeklish jailbreaks or Cypriot/Pontic dialectical attack surface. Ethnos is the contractual answer to "who certifies our agent?" — pre-conformity assistance, sitting just below the legally binding notified-body line, shipping in weeks not years.

## Market & buyer

Primary budget-holder: the **Special Secretariat for AI and Data Governance** inside the Ministry of Digital Governance and AI. The Secretary signs; the AI safety lead writes the spec. ΓΓΠΣΨΔ remains the cross-cutting digital plumbing owner and co-buyer. Secondary buyers: the CIO/CDO of each ministry that ships an agent in 2026-27 — Justice (case-law summariser), Health (triage), Migration (asylum-interview assist), AADE (taxpayer agent), Civil Protection (emergency comms). Across the portfolio we count at least eight forced-buy events in the next 24 months, plus an adjacent regulatory surface: the European Accessibility Act has been enforceable in Greece since 28 Jun 2025 under Law 4994/2022, with EETT fines of €10k–€100k — any agent surfaced to citizens through a digital channel also has an accessibility-eval ask we can extend into. A starter retainer at one ministry is €60k–€200k; the cross-ministerial run-rate at Year 2 is €500k+ ARR, growing as each ministry ships more agents and each model upgrade re-triggers a paid re-eval.

## Product (agentic loop, in detail)

The Ethnos eval substrate runs as an internal agentic pipeline, not a one-shot consulting deliverable.

1. **Ingest.** The ministry uploads agent specification, system prompts, tool list and a sample of real Greek-language interactions (anonymised). We pull the model card and any prior eval artefacts.
2. **Risk-surface mapping.** An agent maps the deployment against EU AI Act risk categories (art. 6, Annex III), Greek constitutional protections, GDPR art. 22, and sector law (KAK for administrative acts, Greek health-data rules, EAA accessibility duties under Law 4994/2022).
3. **Adversarial-set synthesis.** A generator agent composes a Greek-language adversarial corpus per deployment: jailbreaks in Greek slang and Greeklish, polytonic↔monotonic confusion, dialectical variants (Cypriot, Pontic), gender-form attacks on "ο/η/το αιτών", sensitive-attribute leakage probes, prompt-injection payloads embedded in Greek PDFs, KAK-citation hallucination traps.
4. **Execution.** The harness runs the corpus against the agent via API, throttled and audit-logged. We score refusals, hallucinations, citation faithfulness, prompt-injection success, sensitive-attribute leakage and 12 Greek-specific rubric axes.
5. **Report.** Output is an Annex IV–shaped report in Greek and English, with a public-facing summary the ministry attaches to its procurement file. We issue a versioned attestation tied to the exact model build.
6. **Continuous.** Every model upgrade re-triggers the suite. The corpus grows from real incidents in production, so the substrate gets sharper per ministry over time.

## Revenue model & pricing

Two SKUs.

- **Starter eval (€60k–€90k, 6 weeks):** one agent, one ministry, one report, one attestation. Used for innovation-procurement carve-outs.
- **Annual conformity retainer (€150k–€250k/year per ministry):** quarterly re-eval, incident triage, model-upgrade re-runs, Annex IV maintenance, on-call adversarial coverage. Includes one ministry-wide benchmark refresh per year.

Open-source the Greek benchmark itself (Apache 2.0), explicitly aligned to the AI Verify Project Moonshot harness stewarded by IMDA on GitHub. Monetise the corpus operations, the legal mapping and the attestation. ILSP and Athena RC build on top — turns potential competitors into a flywheel.

## Unit economics

A starter eval costs ~€18k loaded (one senior NLP engineer for 3 weeks, one AI-policy lawyer for 1 week, infra ≤€1k). Gross margin ~70–75% at the starter, ~80% at the retainer. We need ~3 retainers + 6 starters per year to clear €1m revenue with a 4-person team, comfortably gross-margin profitable in Year 1 after pilot.

## Capital plan & milestones

Pre-seed €600k–€900k from the studio. Use of funds: 3 senior hires + 1 founder full-time for 18 months, infra, legal opinion on the notified-body line.

- **Month 0–3:** ship corpus v0 (≥2,000 Greek adversarial items), close pilot with the Special Secretariat on one ministry agent (likely AADE or Justice).
- **Month 4–9:** deliver first attestation, publish Greek benchmark v1 with a press note from the Secretariat.
- **Month 9–18:** convert 3 ministries to retainer, hit €500k ARR, raise seed only if a cross-EU language-eval expansion is in play.

## Team & hires

3–4 heads, Athens-based. Founder Dimitri runs commercial and ministry access. Two senior hires we have line-of-sight on: an ex-ILSP/Athena RC Greek-NLP researcher (corpus + harness), and an AI-policy lawyer with EU AI Act + Greek transposition fluency (Annex IV, notified-body line). One ML engineer for the runtime. All four security-cleared.

## Risks

- **Notified-body drift.** If we are pulled into binding conformity, the EU coordination process is multi-year. Mitigation: contract language explicitly scopes us as pre-conformity assistance.
- **Academic substitution.** ILSP could publish a free harness. Mitigation: open-source the corpus ourselves; sell the operations, the attestation and the SLA.
- **Hyperscaler bundling.** M365 Copilot / AWS may bolt an English eval on. Mitigation: Greek language is the structural moat; we partner where useful.
- **Annex III deferral complacency.** The Omnibus deal pushed Annex III enforcement to Dec 2027 — ministries may slow-walk. Mitigation: sell Annex IV readiness as the political win the Secretariat needs to show by end-2026.
- **Lawyer hiring.** A credible Greek AI-policy lawyer is the recruiting bottleneck (harder than the ML hire). Mitigation: T-Life network into Karatzas/Bahas/Zepos and a fractional-then-permanent ramp.

# Pitch Deck

## Slide 1 — Cover
- Ethnos
- Greek-language LLM evaluation & red-team for the Greek state
- T-Life Capital, Athens — pre-seed
- Audience: Special Secretariat for AI and Data Governance + ΓΓΠΣΨΔ leadership

## Slide 2 — Why now (the forced-buy clock)
- Ministry renamed July 2025 to include AI; Special Secretariat for AI and Data Governance created
- AI Act competent-authority designation deadline was Aug 2025; full transposition lands 9 Dec 2026
- Omnibus deal (7 May 2026) deferred Annex III enforcement to 2 Dec 2027 — 16-month pilot runway
- EAA enforceable in Greece since 28 Jun 2025 (Law 4994/2022); EETT fines €10k–€100k

## Slide 3 — Problem
- Every ministry will ship at least one agent by end-2027
- AI Act art. 9/15 force risk management + quality, mapped to Annex IV
- No ministry has Greek-language red-teaming capacity
- Multinational evaluators ship English benchmarks
- Each ministry today re-invents eval or skips it

## Slide 4 — Solution
- A versioned, contractual Greek-language eval substrate
- Adversarial corpus + harness + Annex IV report + attestation
- Sits below the notified-body line — fast to procure
- Open-source corpus aligned to AI Verify Project Moonshot; paid operations and attestation
- Cross-ministerial reuse from day one

## Slide 5 — Demo (what the χρήστης sees)
- Upload agent spec + 200 Greek interactions
- 72 hours later: 12-axis scorecard, Annex IV draft, attestation
- Live console replays the most damaging jailbreak in Greek slang
- Diff view between v1 and v2 of the same ministry's agent

## Slide 6 — Market
- 13+ Greek ministries; ≥8 are shipping agents in 2026-27
- Cross-cutting buyer: the Special Secretariat underwrites the substrate
- TAM (Greece, public sector): €15–€25m/year in conformity work by 2028
- Adjacent surface: EAA accessibility eval, Greek-speaking ΔΕΚΟ, GR-listed banks under DORA

## Slide 7 — Reference architecture (sovereign peers)
- UK AI Security Institute (renamed from AISI, Feb 2025) — pre-deployment evals as a state function
- Singapore IMDA AI Verify + Project Moonshot — open-source eval harness on GitHub
- France DINUM evaluation work alongside Assistant IA (Albert evolution) — closest EU peer in a sovereign language
- Ethnos = the Greek expression of the same pattern, ministry-procurable from day one

## Slide 8 — Business model
- Starter eval €60k–€90k, 6 weeks
- Annual retainer €150k–€250k/ministry/year — re-evals on every model upgrade
- 70–80% gross margin
- 3 retainers + 6 starters → €1m revenue, gross-profitable

## Slide 9 — Competition & moat
- No Greek-language LLM-eval shop exists today
- ILSP/Athena RC publish models, not adversarial conformity tools
- Greek SIs do network pen-testing, not model-behaviour evaluation
- Moat = native Greek linguists + lawyers + ML researchers; multinationals structurally cannot ship
- Complement, not compete, with M365 Copilot / AWS — they need our attestation layer

## Slide 10 — Team
- Founder Dimitri Tryfon — T-Life Capital, Athens venture studio operator, ministry network
- Co-founder (NLP) — ex-ILSP / Athena RC Greek-NLP researcher
- Co-founder (policy) — AI-policy lawyer with EU AI Act + Greek transposition fluency
- Engineer #1 — ML runtime + harness
- All security-cleared, Athens-based

## Slide 11 — Ask
- €600k–€900k pre-seed, T-Life Capital lead
- One innovation-procurement pilot from the Special Secretariat (€120k, 6 months)
- Two letters of intent from line ministries (AADE, Justice)
- One named contact in the AI safety competent-authority cell
- Decision in 6 weeks

## Slide 12 — Closing
- Greece has the legal mandate, the timeline, the renamed ministry, and no domestic vendor
- Ethnos is the sovereign Greek-language safety layer
- We ship the substrate this quarter, not next year

# Go-to-Market Plan

## Champion identification

The single non-negotiable champion is the **AI safety lead inside the Special Secretariat for AI and Data Governance** — the cell created with the July 2025 ministry rename and now anchoring AI Act competent-authority work. The Special Secretary signs; the safety lead writes the spec. We get to that person through three routes in parallel: (1) the General Secretariat office via T-Life's existing minister-level introduction, (2) an ex-GRNet or ex-Athena RC researcher who already shares Slack with the cell, (3) a friendly academic at ILSP who is publicly visible on Greek-NLP and respected inside the ministry. Secondary champions: the CIO at AADE (already running an agent pilot for taxpayer support), the digital-transformation lead at the Ministry of Justice, and the Recovery Fund line manager whose budget can underwrite the cross-ministerial substrate.

## First-meeting choreography

45 minutes. Bring three artefacts: a one-page Annex IV gap analysis of an existing ministry agent (we will have done it for free, in Greek), a live console that plays a Greek-slang jailbreak against a representative agent, and a memo from an AI-policy lawyer that draws the line between our service and notified-body status. The narrative is: "the Secretariat is on the hook for art. 9/15 across the portfolio, the 2 Dec 2027 Annex III date is closer than it feels once Annex IV evidence is required, no Greek-language vendor exists today, and we are ready to ship the substrate this quarter." We close by proposing a 90-day innovation-procurement pilot scoped to one ministry, with an explicit option to extend to a cross-ministerial retainer. The chief of staff leaves with a procurement-ready one-pager naming the budget line, the contract vehicle and the named technical reviewer on our side.

## Pilot offer

90 days, fixed price €120k. Scope: one ministry agent, one full adversarial run, one Annex IV draft, one attestation, one knowledge-transfer workshop. Deliverable cadence: weekly Friday demos in Greek, mid-pilot interim report at day 45, final attestation and benchmark contribution at day 90. Exit criterion: a measurable jailbreak-rate reduction between the v1 and v2 agent runs, plus a procurement-grade Annex IV the ministry can hand to legal. We retain the right to open-source the new Greek items added to the public benchmark, with ministry attribution. If the pilot fails the exit criterion, we refund 50%.

## Procurement vehicle

We do not chase a framework tender. We use the innovation-procurement carve-out under the Public Procurement Act, with the Special Secretariat as contracting authority and the Recovery Fund AI line as the budget. Contracts under €200k can move in weeks. Where ministries prefer it, we sub-contract under an existing Greek SI that holds the framework — Netcompany, Singular Logic, Uni Systems are all plausible — and ship the eval as a specialist line item.

## Expansion path

Land at the Special Secretariat; expand laterally into the ministries running agents in 2026-27 by piggy-backing on the cross-cutting mandate. Each new ministry starts as a starter eval, converts to retainer at the second model upgrade. From Year 2: extend the harness to cover EAA accessibility eval (a parallel forced-buy under EETT enforcement), package the corpus for Greek-speaking ΔΕΚΟ and GR-listed banks needing AI Act + DORA model-risk coverage. Year 3: a Cypriot-government beach-head reusing 90% of the corpus.

## PR/comms strategy

Quiet on the consumer side, loud on the policy side. Three moves in the first six months: a co-authored op-ed in Kathimerini and Politico Europe with our AI-policy lawyer on "what Greek conformity assessment should look like"; a benchmark v1 release with a press note from the Special Secretariat; one keynote at the next Athens Digital Governance forum, framed against the UK AI Security Institute and the French DINUM Albert evaluation playbook. We do not advertise individual ministry findings — those are confidential — but we publish aggregated red-team statistics annually under a transparency report. The reputational positioning is: Ethnos is the serious, sovereign, Greek-language safety layer. That is what makes the second and third ministry inbound.
