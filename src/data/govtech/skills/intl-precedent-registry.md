# International precedent registry — deployed agentic systems in government

Use to source intl precedent for the Researcher role. **No fabricated programs.** If unsure, ask the Researcher subagent to verify via web search rather than guessing.

## United Kingdom — GDS i.AI

The UK Government Digital Service AI team (i.AI) has been the most aggressive shipper of *open-source* agentic systems inside government. All projects are documented at https://ai.gov.uk and source-released on GitHub.

- **Caddy** — caseworker copilot used at Citizens Advice and the Department for Business & Trade (DBT). Drafts replies, summarises case file, suggests next steps. Closes a large fraction of routine cases without escalation.
- **Redbox** — civil-service drafting and document-search assistant for the Cabinet Office. Browse uploaded documents, ask questions, draft submissions in civil-service voice.
- **Consult** — analyses public-consultation responses at scale. Tested with the Scottish Government on >2,000 consultation responses, produced themes faster and cheaper than human analysts.
- **Lex** — early experiments with legislative search and statute summarisation.
- **Humphrey** — internal civil-service assistant suite name (often umbrella for Caddy/Redbox/Consult/Minute).
- **Minute** — meeting minute drafter.

## France — DINUM / Albert

DINUM (Direction interministérielle du numérique) operates **Albert**, France's sovereign LLM stack for civil servants.

- Deployed at **France Travail** (the job-placement agency) — used by advisors to draft jobseeker correspondence and suggest matches.
- **France Services** counters — front-line citizen-service kiosks use Albert as the back-office assistant.
- **Source release** — Albert is open-source (MIT) and runs on French sovereign cloud.

## Estonia — Bürokratt / Kratt

- **Bürokratt** — multi-channel citizen-assistant agent layer, designed as a **shared substrate** that any ministry's service can plug into. The "kratt" (folklore creature) is the metaphor for an autonomous agent doing routine work.
- **National AI strategy mandates** agentic delivery — ministries are required to consider an agentic implementation before traditional case-management buy.

## Singapore — Pair, LaunchPad, OGP

- **Pair** — GovGPT-equivalent copilot used by civil servants across ministries. Built and operated by GovTech Singapore.
- **LaunchPad** — sandboxed GenAI environment for civil servants to prototype.
- **Open Government Products (OGP)** — ships agents directly into ministry operations (e.g. **Form SG**, **Go.gov.sg** with AI-assisted features, social-services case-tracking agents).

## United States

- **USDS / 18F / GSA AI CoE** — federal teams shipping agents into VA, IRS, USCIS.
- **VA — Caseworker copilots** for benefits claims.
- **USCIS — RAIO/asylum officer assistance** — country-of-origin information drafting copilots.
- **IRS — Direct File** had AI assistance components in pilots.
- **EOs under the current administration** have created procurement carve-outs to accelerate AI adoption.

## United Arab Emirates

- **TAMM** — Abu Dhabi government super-app. AI agents handle permits, licences, and routine government interactions end-to-end. Speaks Arabic and English.
- **Ministerial AI champions** — each ministry has a named AI lead.

## Korea

- **AI Hub Korea** — government-curated dataset and model registry.
- **Ministry of Interior agentic citizen services** — pilots for civil-service drafting.

## Brazil

- **ChatGov** — federal civil-servant assistant.
- **Receita Federal** — tax authority AI triage PoCs.

## Switzerland — Federal Migration (SEM)

- Country-of-origin-information (COI) drafting and case-summary assistance for asylum officers. Operational pilots since 2023.

## Australia & New Zealand

- **DTA (Digital Transformation Agency, AU)** — civil-service AI policy and shared services.
- **Service NSW** — chat agents on top of state services.
- **NZ DIA** — agent pilots for benefits triage.

## Netherlands

- **CBS / RIVM** statistical agencies — agentic data-quality monitoring.
- **Belastingdienst (tax)** — case-triage agents after the toeslagenaffaire scandal forced a re-architecture.

## Israel

- **GovTech Lab Israel** — ministry-of-defence and prime-minister-office aligned. Mostly classified, but the **eMobility / Smart Mobility** and **digital health** stacks are publicly visible.

## EU-level

- **GovStack / European Commission DG DIGIT** — shared reference architectures.
- **AI Act** (in force 2024-2026 phased) — sets the constraints for "high-risk" deployments, which most ministerial agents qualify as. Compliance is a *moat*, not a blocker, for serious players.

## Notes for the Researcher agent

- **Prefer primary sources**: government project pages, GitHub releases, official press.
- **Outcomes data matters more than launches** — "deployed and used" beats "announced." If you can't find evidence of usage, flag it.
- **Year** — always pin to a year so we know if the precedent is recent enough to cite credibly.
- **Greek precedents** — gov.gr (citizen front-end), mitos.gov.gr (process registry), Wallet.gov.gr (digital wallet), Διαύγεια (transparency portal) are the substrate. No deployed *agentic* layer yet on top of these.
