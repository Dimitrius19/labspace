import type { GovIdea } from "../../../types";

export const justiceIdeas: GovIdea[] = [
  {
    id: "justice-rapporteur-copilot",
    ministry: "justice",
    title: "Εισηγητής Copilot — ΣτΕ/ΑΠ rapporteur memo drafter",
    oneLiner:
      "Agent that ingests a ΣτΕ or ΑΠ case file overnight and produces a Greek-legal-style εισηγητική memo skeleton with cited jurisprudence by morning.",
    problem:
      "ΣτΕ and ΑΠ rapporteurs (εισηγητές, typically junior judges or πάρεδροι) draft case memos by hand from a paper or PDF dossier, manually searching Nomos/QualexLex for parallel jurisprudence. A single complex tax or administrative case can absorb 20-40 hours before the court hearing. Greece has been censured repeatedly by the ECHR for trial-length delays and the supreme courts are the choke point.",
    agentLoop: [
      "Ingest the case-file PDF bundle from OSDDY (or scanned upload) and run Greek OCR with legal-domain post-correction",
      "Extract parties, claims, facts, procedural posture, lower-court decisions cited, and statutory anchors",
      "Query Greek jurisprudence corpus (ΣτΕ/ΑΠ public decisions + ΦΕΚ + ECHR-Greece) for semantically similar precedent",
      "Draft the εισηγητική in Greek legal register: facts → procedural history → applicable law → reasoning → recommended διατακτική",
      "Insert citations with page-anchored links back to source files for rapporteur verification",
      "Flag novel issues, contradicting precedent, and any EU-law preliminary-reference triggers for human review",
      "Save versioned draft to rapporteur's OSDDY workspace; never auto-submit to judge",
    ],
    userInsideMinistry:
      "ΣτΕ πάρεδρος / εισηγητής and ΑΠ rapporteur clerk (lower-tier rapporteurs in administrative and civil courts in phase 2)",
    blueOceanAngle:
      "UK i.AI shipped Caddy for Citizens Advice and DBT caseworkers — same shape, different domain. No deployed Greek-legal copilot exists; Nomos and QualexLex are search databases, not drafters. The Greek legal register (formal καθαρεύουσα-inflected style, ΣτΕ formula language) is a hard linguistic moat against multinational legal AI vendors who cannot match the corpus.",
    greekContext:
      "The ΣτΕ President and ΑΠ President are public-facing champions for court modernisation, and the ECHR pipeline of pilot judgments on Greek trial delays gives the ministry quantifiable political cover. OSDDY has uneven coverage but supreme-court tiers are the most digitised. Founder can recruit retired παρέδρους or law-firm seniors as domain partners — that bench exists in Athens.",
    intlPrecedents: [
      { country: "United Kingdom", program: "i.AI Caddy — caseworker copilot", ministry: "GDS / DBT / Citizens Advice", year: "2024", outcome: "Operationally used; case drafts and next-step suggestions accepted at high rates", url: "https://ai.gov.uk" },
      { country: "United Kingdom", program: "i.AI Lex — legislation search and statute summarisation", ministry: "Cabinet Office", year: "2024", outcome: "Experimental release; open-source", url: "https://ai.gov.uk" },
      { country: "France", program: "Albert (DINUM) — civil-service drafting assistant", ministry: "DINUM, deployed at France Travail and France Services", year: "2024", outcome: "Operational across thousands of advisors; open-source release", url: "https://albert.api.etalab.gouv.fr" },
      { country: "Singapore", program: "Pair — GovGPT-equivalent civil-service copilot", ministry: "GovTech", year: "2024", outcome: "Used across ministries for drafting and summarisation" },
    ],
    redTeam: [
      { axis: "regulatory-blocker", severity: "wound", note: "EU AI Act classifies judicial-decision-support as high-risk (Annex III, point 8). Compliance is mandatory: data governance, logging, human oversight, transparency. Designable but not free — adds 4-6 months and a notified-body conformity path before any production use." },
      { axis: "political-third-rail", severity: "wound", note: "Δικηγορικοί Σύλλογοι (bar associations) and the union of judges are vocal. Position strictly as drafting aid to a named rapporteur, never as decision-maker. Frame the launch with the ΣτΕ President personally, never as a ministry-imposed top-down tool." },
      { axis: "incumbent-overlap", severity: "clear", note: "Nomos and QualexLex are databases, not copilots; no Greek SI ships agentic court drafting. Tier-1 integrators would be partners on OSDDY plumbing, not competitors at the agent layer." },
      { axis: "language-moat", severity: "clear", note: "Greek legal register is genuinely hard — Lexis/Westlaw don't ship Greek; multinational legal-AI vendors lack the corpus and the formulae. Strong moat." },
      { axis: "technical-infeasibility", severity: "clear", note: "Caddy and Albert are existence proofs of exactly this shape. Greek OCR on legal PDFs and embedding the public ΣτΕ/ΑΠ corpus is well-trodden engineering." },
      { axis: "founder-fit", severity: "clear", note: "Dimitri (Greek operator, Athens-based) can recruit retired ΣτΕ πάρεδροι and senior litigators as advisors. T-Life's existing relationships in administrative practice de-risk the domain hire." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'If a rapporteur's draft is wrong because the AI was wrong, who carries the disciplinary and constitutional weight? Greek law presumes the εισηγητής is personally responsible for the εισήγηση. I cannot have any tool that even appears to displace that personal responsibility, and I will not be the GS who let a U.S. cloud read internal court files.'",
    buyerHook:
      "Forwarded to the minister when the pitch promises a 6-month closed pilot inside ΣτΕ with sovereign EU hosting, full audit trail of every model call against EU AI Act Annex III obligations, and a per-case throughput KPI that maps directly onto the ECHR pilot-judgment commitments Greece has already signed. The minister gets a 'how the supreme court cleared its backlog' headline without a single judicial-independence concession.",
    rubric: { agenticFit: 5, blueOcean: 4, timeToPilot: 3, politicalTailwind: 4, capitalEfficiency: 4, greekLanguageMoat: 5, composite: 4.25 },
    verdict: "promote",
    verdictRationale:
      "Highest-conviction idea in the Justice set. Verified intl precedent (Caddy, Albert), strong Greek-language moat, named user inside the ministry, viable champion in the ΣτΕ President, and a clean AI-Act compliance pathway as positioning rather than blocker. The political-third-rail risk is real but designable through framing and human-in-the-loop architecture.",
    pitchReady: "memo",
    championProfile:
      "President of the Council of State (ΣτΕ) personally, with the Secretary General of the Ministry of Justice as co-sponsor. ΑΠ President as phase-2 expansion partner.",
    estimatedPilotBudget:
      "€250-450k for a 6-month closed pilot inside one ΣτΕ τμήμα; ESPA / Recovery & Resilience Facility e-justice envelope is the obvious funding source.",
    founderProfile:
      "CEO: Greek operator with judicial-system credibility (Dimitri can front the studio relationship). CTO: ML engineer with Greek-NLP background, ideally ex-Atypon or ILSP/Athena RC. Advisor: retired ΣτΕ πάρεδρος or senior administrative-law partner.",
    tags: ["judicial-copilot", "ai-act-high-risk", "greek-nlp", "ste-ap"],
    addedDate: "2026-05-21",
  },
  {
    id: "justice-jurisprudence-search-agent",
    ministry: "justice",
    title: "Greek Jurisprudence Semantic Search Agent",
    oneLiner:
      "Agentic search over the Greek jurisprudence corpus (ΣτΕ, ΑΠ, lower courts, ECHR-Greece) that answers natural-language legal questions with cited passages and synthesis, not a results list.",
    problem:
      "Nomos and QualexLex are paid keyword databases; lawyers and rapporteurs spend hours composing boolean queries and skimming hits. There is no semantic Greek-legal search and no synthesiser. The same question is researched from scratch thousands of times per year across the judicial system.",
    agentLoop: [
      "Accept a natural-language Greek legal question (e.g. 'πρόσφατη νομολογία ΣτΕ για ανάκληση παράνομης διοικητικής πράξης με προστατευτευόμενη εμπιστοσύνη')",
      "Decompose into sub-queries: statutory anchors, doctrinal concepts, time windows",
      "Run semantic + keyword retrieval over the indexed ΣτΕ/ΑΠ corpus + ΦΕΚ + ECHR-Greece judgments",
      "Cluster results by holding / doctrinal line; flag conflicts and overruled decisions",
      "Synthesise a short answer in Greek legal register with anchored citations to source paragraphs",
      "Offer one-click 'export to εισηγητική' that feeds the citation block into the rapporteur copilot",
    ],
    userInsideMinistry: "All rapporteurs, judges, ministry legal-bureau staff; the search tier of the same audience that uses the rapporteur copilot",
    blueOceanAngle:
      "Nomos/QualexLex are stuck in 2010 IR architecture; nothing semantic ships in Greek legal. UK i.AI's Lex is the closest analog (English statute search). The pricing surface area is bar-association and ministry seat licences plus an in-house ΣτΕ deployment.",
    greekContext:
      "Greek courts publish decisions inconsistently; building a clean, deduplicated, anchored corpus is a one-time moat. The bar associations are restive about Nomos pricing — a credible Greek-built alternative has political receptivity beyond the ministry.",
    intlPrecedents: [
      { country: "United Kingdom", program: "i.AI Lex — legislation search & summarisation", ministry: "Cabinet Office", year: "2024", url: "https://ai.gov.uk" },
      { country: "United States", program: "vLex / Casetext CoCounsel commercial precedent (caselaw RAG at production scale)", year: "2023", outcome: "Demonstrated viability of legal RAG at scale; we are the Greek-language sovereign analog" },
      { country: "France", program: "Albert RAG over public-law corpora (Légifrance)", ministry: "DINUM", year: "2024" },
    ],
    redTeam: [
      { axis: "incumbent-overlap", severity: "wound", note: "Nomos (Sakkoulas group) and QualexLex have existing ministry seats and bar-association lock-in. They will respond with their own copilot bolt-on within 12-18 months. Moat must be corpus quality + agentic UX + procurement carve-out, not feature parity." },
      { axis: "regulatory-blocker", severity: "clear", note: "Public jurisprudence is legally available; ECHR judgments are open. AI Act treatment is lower than the rapporteur drafter — search/retrieval is not Annex III on its own." },
      { axis: "language-moat", severity: "clear", note: "Strong — Greek legal embeddings + corpus engineering is the moat. Multinationals will not ship this corpus." },
      { axis: "technical-infeasibility", severity: "clear", note: "Standard RAG with domain-specific tuning. Hard work is corpus curation and de-duplication, not novel ML." },
      { axis: "founder-fit", severity: "wound", note: "Dual buyer (ministry + private bar) doubles GTM complexity. Founder must run two channels, which stretches a 3-person team." },
      { axis: "political-third-rail", severity: "clear", note: "Search is judicially neutral — judges drive, agent retrieves. Low controversy surface." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'Sakkoulas and QualexLex are not just suppliers, they are constituencies — generations of Greek lawyers learned law on those products and the publishers are politically wired. Why would the ministry pick a fight on a procurement that I cannot easily defend?'",
    buyerHook:
      "Forwarded to the minister when positioned as a complement, not a replacement — the ministry pays for a sovereign internal index that the rapporteur copilot uses, while bar associations can subscribe separately. The framing is 'we own the index of our own jurisprudence' as a sovereignty argument, not a vendor swap.",
    rubric: { agenticFit: 4, blueOcean: 4, timeToPilot: 3, politicalTailwind: 3, capitalEfficiency: 4, greekLanguageMoat: 5, composite: 3.85 },
    verdict: "promote",
    verdictRationale:
      "Composite above threshold and agentic fit at 4. The incumbent-overlap wound is real but designable by selling sovereignty and pairing with the rapporteur copilot rather than entering a head-on database fight. Best-positioned as the second product in the same company that ships the rapporteur copilot — shared corpus, shared infra, two revenue lines.",
    pitchReady: "concept",
    championProfile: "Co-sponsored by ΣτΕ President (for the index) and a reform-minded bar-association president (for the demand-side validation). GS Justice is the procurement signer.",
    estimatedPilotBudget: "€150-300k for an 8-month index build + closed-tier RAG pilot to 50 rapporteurs.",
    founderProfile: "Same CEO/CTO as the rapporteur copilot — strong reason to bundle. Add a corpus-engineering lead (information-retrieval / NLP background).",
    tags: ["legal-search", "rag", "greek-nlp", "sovereign-index"],
    addedDate: "2026-05-21",
  },
  {
    id: "justice-echr-monitor-agent",
    ministry: "justice",
    title: "ECHR-Greece Precedent & Pilot-Judgment Monitor",
    oneLiner:
      "Agent that continuously ingests Strasbourg jurisprudence, flags any Greece-implicating decision, and drafts a remediation memo for the relevant Greek directorate within 24 hours of publication.",
    problem:
      "Greece pays significant damages annually under ECHR Article 41 awards and has been the subject of multiple pilot judgments (trial-length delays, prison conditions). Today the ministry's Legal Counsel office tracks Strasbourg manually; relevant decisions are noticed late and remediation memos take weeks. The fiscal exposure is meaningful and the political cost of repeat censure is high.",
    agentLoop: [
      "Poll HUDOC and ECHR press releases daily; ingest new decisions in EN/FR",
      "Filter for Greece-implicating cases: respondent state, third-party intervention, or doctrinal lines previously applied to Greek cases",
      "Translate the relevant passages into Greek legal register",
      "Map findings to the responsible Greek directorate (Justice, Prisons, Citizen Protection, Migration) using a maintained ownership matrix",
      "Draft a 2-page Greek-language remediation memo: what the court held, why Greece is exposed, suggested response, statutory anchors",
      "Track open pilot-judgment commitments and surface delivery slippage to the GS",
      "Publish a weekly digest to the Legal Counsel office and the GS",
    ],
    userInsideMinistry: "Νομικό Συμβούλιο του Κράτους liaison inside the Ministry of Justice; GS Justice's office; counterpart directorates in Prisons and Citizen Protection",
    blueOceanAngle: "No commercial product does Strasbourg-to-Athens with this specific routing logic. The work today is a human paralegal slow loop. Genuinely no Greek SI plays here.",
    greekContext:
      "ECHR Article 41 awards against Greece are a recurring fiscal item the Council of State and the Νομικό Συμβούλιο both track. Pilot judgments on trial-length delays (Vassilios Athanasiou v. Greece line) create explicit obligations the ministry already reports against. An agent that turns reporting hours into minutes is uncontroversial.",
    intlPrecedents: [
      { country: "United Kingdom", program: "i.AI Minute / Consult — monitoring and consultation analysis agents", ministry: "Cabinet Office, Scottish Government", year: "2024", outcome: "Operational; >2,000 consultation responses analysed faster than human baseline", url: "https://ai.gov.uk" },
      { country: "European Commission", program: "DG JUSTICE — internal ECHR-compliance trackers (manual today)", year: "2024", outcome: "Identified gap; no agentic tooling deployed" },
      { country: "Netherlands", program: "Belastingdienst case-triage agents after toeslagenaffaire — same shape: monitor + route + draft", year: "2023" },
    ],
    redTeam: [
      { axis: "political-third-rail", severity: "clear", note: "Embarrassing for Greece in aggregate, but the agent is part of the remediation infrastructure — it makes the ministry look responsive, not exposed." },
      { axis: "incumbent-overlap", severity: "clear", note: "No Greek SI offers this. International legal-tech does not route into Greek directorate ownership." },
      { axis: "regulatory-blocker", severity: "clear", note: "Monitoring and drafting against public ECHR text is not Annex III high-risk. Standard data-governance applies." },
      { axis: "language-moat", severity: "wound", note: "EN/FR-to-Greek-legal translation is the hard part, but multinational legal-translation tools exist. The moat is the routing matrix and the Greek-administrative target language, not the source ingestion." },
      { axis: "technical-infeasibility", severity: "clear", note: "HUDOC has an open API; the rest is RAG plus structured routing. Buildable in weeks." },
      { axis: "founder-fit", severity: "clear", note: "Same team as the rapporteur copilot can build this as a focused side product; small surface, fast pilot." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'We already have a Strasbourg desk in the Νομικό Συμβούλιο. Are you telling me my counsel is missing decisions? Prove the gap is real and quantify the days saved per quarter, or I see this as a duplicate.'",
    buyerHook:
      "Forwarded to the minister when paired with a hard number: 'in the last 24 months, the median time from a Greece-implicating Strasbourg decision to a remediation memo at the responsible directorate was N days; we cut it to 1.' Combined with a fiscal-exposure framing it becomes a low-cost, low-risk PR-positive pilot.",
    rubric: { agenticFit: 4, blueOcean: 5, timeToPilot: 4, politicalTailwind: 3, capitalEfficiency: 5, greekLanguageMoat: 3, composite: 3.95 },
    verdict: "promote",
    verdictRationale:
      "Surprising near-tie with the rapporteur copilot on composite. Lower ceiling and weaker language moat, but very fast time-to-pilot, no political third-rail, single decision-maker (GS Justice or Νομικό Συμβούλιο). Strong candidate to be the first deployed product while the rapporteur copilot navigates AI Act conformity work — keep one in the field while the bigger one builds.",
    pitchReady: "memo",
    championProfile: "GS Justice; Πρόεδρος του Νομικού Συμβουλίου του Κράτους as co-sponsor.",
    estimatedPilotBudget: "€60-120k for a 4-month pilot — direct contract (απευθείας ανάθεση) tier feasible.",
    founderProfile: "Same studio team; can be led by a junior PM with EU-law background while the rapporteur copilot CTO oversees the shared infra.",
    tags: ["echr", "compliance-monitoring", "legal-ops", "fast-pilot"],
    addedDate: "2026-05-21",
  },
  {
    id: "justice-foreign-case-file-translator",
    ministry: "justice",
    title: "Foreign-Language Case-File Translation & Triage Agent",
    oneLiner:
      "Agent that ingests foreign-language documents (English, German, French, Albanian, Arabic, Russian) in cross-border, asylum-related and family-law case files, produces a Greek-legal-register translation with provenance anchors, and flags translation-uncertainty for sworn-translator review.",
    problem:
      "Greek courts increasingly receive foreign-language exhibits in family-law, cross-border commercial, asylum-appeal and migration-detention cases. Sworn translation by ορκωτοί μεταφραστές is slow, expensive, and a bottleneck on case timelines. The 2021 abolition of the Translation Service of the MFA has shifted workload onto private sworn translators and worsened backlogs.",
    agentLoop: [
      "Ingest source-language PDF / scan; perform multi-language OCR with language detection per page",
      "Translate into Greek legal register, preserving original numbering, paragraph anchors and tables",
      "Score per-segment translation confidence; flag low-confidence segments for sworn-translator review",
      "Tag named entities (parties, locations, statutes) and normalise to Greek legal nomenclature",
      "Produce a 1-page Greek summary memo for the εισηγητής with key facts and procedural posture",
      "Route the flagged segments to a sworn-translator marketplace queue; produce a court-acceptable certified output once verified",
    ],
    userInsideMinistry: "Court γραμματεία (clerk's office) in family / civil courts; asylum-appeals committees; cross-border desk at the Νομικό Συμβούλιο",
    blueOceanAngle:
      "Multinational MT is good at gist but bad at sworn-translator-grade Greek legal register and at provenance anchoring. The certified pipeline + human-in-the-loop sworn review is the productisation gap.",
    greekContext: "Greek courts require certified translations as evidence; an agent that does not respect that constraint is useless. Pairing AI draft with sworn-translator certification is the only legally viable path, and it is also the most cost-effective.",
    intlPrecedents: [
      { country: "Switzerland", program: "SEM — country-of-origin information drafting and translation for asylum officers", ministry: "State Secretariat for Migration", year: "2023", outcome: "Operational pilots" },
      { country: "United States", program: "USCIS RAIO — asylum-officer drafting copilots including translated COI", ministry: "USCIS", year: "2024" },
      { country: "Germany", program: "BAMF asylum-interview transcription and translation pilots", year: "2023" },
    ],
    redTeam: [
      { axis: "incumbent-overlap", severity: "wound", note: "DeepL, Google, Microsoft and a growing crop of legal-translation startups compete on raw translation quality. Differentiation must be the certified pipeline and Greek legal-register tuning, not generic MT." },
      { axis: "language-moat", severity: "wound", note: "Multinationals already cover EN/DE/FR↔EL adequately. Albanian, Arabic, Urdu, Pashto, Bengali, Russian to Greek legal register is the actual moat, and that requires a much smaller and harder corpus." },
      { axis: "regulatory-blocker", severity: "wound", note: "Sworn-translator profession is regulated; producing 'court-acceptable' output without ορκωτός verification is impossible. The agent must explicitly hand off to a certified human — this constrains the value capture." },
      { axis: "political-third-rail", severity: "clear", note: "Translation services have no political third rail; ορκωτοί μεταφραστές association is small." },
      { axis: "technical-infeasibility", severity: "clear", note: "Buildable; constraint is corpus for low-resource pairs, not architecture." },
      { axis: "founder-fit", severity: "clear", note: "Adjacent to migration-asylum stack T-Life may already be building; sharable infrastructure." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'Why is this Justice's problem? Each court already has its sworn-translator panel. You are offering me a tool whose output is not legally usable without a human translator anyway — what am I buying?'",
    buyerHook:
      "Forwarded when sold as a throughput tool: the ministry buys days back on family-law and asylum-appeal calendars because the εισηγητής gets a working Greek draft of foreign exhibits within hours instead of weeks, while sworn certification happens in parallel for the final record. Tie to ECHR trial-delay obligations.",
    rubric: { agenticFit: 4, blueOcean: 3, timeToPilot: 3, politicalTailwind: 3, capitalEfficiency: 4, greekLanguageMoat: 3, composite: 3.35 },
    verdict: "park",
    verdictRationale:
      "Composite in the park band; agentic fit acceptable but blue ocean is genuinely contested by multinational MT. Could become a promote if scoped narrowly to low-resource source languages (Albanian, Arabic, Urdu) where the moat is real and the social impact is highest — that re-scope is worth a second pass once the rapporteur copilot is in the field.",
    pitchReady: "concept",
    championProfile: "GS Justice with the GS for Migration Policy as cross-ministry co-sponsor; this is really a Justice+Migration product.",
    estimatedPilotBudget: "€150-250k; better as a cross-ministry pilot or RRF-funded.",
    founderProfile: "Requires a low-resource-MT specialist plus sworn-translator industry partner; not the same team as the rapporteur copilot.",
    tags: ["translation", "cross-border", "asylum-adjacent", "low-resource-mt"],
    addedDate: "2026-05-21",
  },
  {
    id: "justice-court-scheduling-agent",
    ministry: "justice",
    title: "Court Docket & Hearing Scheduling Optimisation Agent",
    oneLiner: "Agent that proposes hearing schedules across a court chamber by optimising over judge availability, case readiness, party representation, and statutory deadlines — humans approve.",
    problem:
      "Court docket scheduling in Greek civil and administrative courts is done by chamber presidents and head clerks largely by hand, with chronic deadline misses, double-bookings of parties' counsel, and avoidable adjournments (αναβολές). The αναβολή rate is a known driver of trial-length delay and a direct ECHR-exposure line.",
    agentLoop: [
      "Pull case-ready status from OSDDY and pending-deadline list from chamber registry",
      "Pull judge and παρέδρου availability, statutory minimum-notice constraints, and known counsel calendars where available",
      "Build a constraint-satisfaction model and propose 3 candidate schedules with trade-offs",
      "Surface which cases would slip statutory deadlines under each option",
      "Allow chamber president to approve, edit, or reject; never auto-publish",
      "Push approved schedule back to OSDDY and notify clerks",
    ],
    userInsideMinistry: "Πρόεδρος Τμήματος (chamber president) and head γραμματέας of the chamber; pilot at one Athens administrative or civil court chamber",
    blueOceanAngle: "No deployed agentic scheduling exists in EU judicial systems that we can verify. Greek SIs build OSDDY modules but not optimisation overlays.",
    greekContext: "Αναβολές are a notorious feature of Greek civil practice — bar-association culture and counsel-side calendaring drive much of the churn, and an algorithm that ignores that culture will be rejected by the chamber.",
    intlPrecedents: [
      { country: "Estonia", program: "Bürokratt substrate — agentic back-office infrastructure across ministries", year: "2024", outcome: "Operational substrate; specific court-scheduling deployment NOT verified", url: "https://burokratt.ee" },
      { country: "Singapore", program: "Pair / GovTech tooling supports scheduling adjacent use cases", year: "2024", outcome: "Adjacent only; no court-docket production deployment verified" },
      { country: "Netherlands", program: "Rechtspraak digital-case modernisation", year: "2023", outcome: "Digitisation, not agentic scheduling — precedent is weak" },
    ],
    redTeam: [
      { axis: "political-third-rail", severity: "wound", note: "Greek judges treat docket control as part of judicial independence. An algorithm that 'tells the chamber president when to hear cases' will be rejected on principle unless framed strictly as proposal-only with the president as sole approver." },
      { axis: "incumbent-overlap", severity: "wound", note: "OSDDY contract owners (the Tier-1 SI providing the case-management system) may treat the scheduling layer as their roadmap; integration friction is the real risk, not feature overlap today." },
      { axis: "technical-infeasibility", severity: "wound", note: "Counsel-side calendars are not centrally available; without that input the optimisation is materially weaker." },
      { axis: "regulatory-blocker", severity: "wound", note: "AI Act Annex III judicial use; scheduling decisions sit close to access-to-justice rights. Compliance burden is real." },
      { axis: "language-moat", severity: "wound", note: "Optimisation is largely language-agnostic; weak moat against EU/US providers should this become a market." },
      { axis: "founder-fit", severity: "wound", note: "OR/optimisation engineer talent is needed, different from legal-NLP. Stretches the team." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'You want to tell judges when to sit. Every chamber president will personally call me within a week. Even if your optimiser is good, the politics of who controls the docket is not mine to give. Why am I taking this fight?'",
    buyerHook: "Forwarded only if the launch is owned by one specific chamber president who already wants to clear backlog, framed as 'I asked them to build this for me, on my terms.' Otherwise — kept on the shelf.",
    rubric: { agenticFit: 4, blueOcean: 3, timeToPilot: 2, politicalTailwind: 3, capitalEfficiency: 3, greekLanguageMoat: 1, composite: 2.75 },
    verdict: "kill",
    verdictRationale:
      "Composite below 3.0 and multiple wound-severity findings stack. Verified intl precedent is thin, the political ask is to nudge judicial independence territory, language moat is weak, and counsel-side calendaring is structurally unavailable. Not promoted to park because the cost-of-entry per pilot is high and the upside is bounded by judicial culture.",
    pitchReady: "concept",
    championProfile: "Would require one specific reform-minded chamber president to commission directly — speculative.",
    estimatedPilotBudget: "€400-700k inclusive of AI-Act conformity work; would need full ΕΣΗΔΗΣ for production.",
    founderProfile: "Different skill mix (OR + scheduling) than the rest of the portfolio; would need a separate team.",
    tags: ["scheduling", "judicial-ops", "or-optimisation", "ai-act-high-risk"],
    addedDate: "2026-05-21",
  },
  {
    id: "justice-prison-risk-assessment",
    ministry: "justice",
    title: "Prison Risk-Assessment Agent (Σωφρονιστική Αξιολόγηση)",
    oneLiner: "Agent that scores incarcerated persons on recidivism / parole risk to support decisions on classification, parole, and prison transfers.",
    problem: "Greek prisons are overcrowded, parole boards are under-resourced and parole / release decisions are made under heavy time pressure with little structured data. Recidivism statistics are poor. A risk-tooling product could in principle make decisions more consistent.",
    agentLoop: [
      "Ingest inmate file: offence, sentence, history, behaviour reports, programme participation",
      "Score on validated factors (Static-99 / OGRS-style) calibrated on Greek data if available",
      "Produce a structured recommendation for parole-board or classification meeting",
      "Log all decisions for audit",
    ],
    userInsideMinistry: "Parole board (Δικαστικό Συμβούλιο Φυλακών), prison classification officers, GS for Anti-Crime Policy",
    blueOceanAngle: "No Greek deployment exists; some EU member states use static-actuarial tools manually. An agentic productised version is technically buildable.",
    greekContext: "Politically toxic on either side: rights advocates oppose AI in criminal-justice risk; victims-rights groups will oppose any tool that 'lets prisoners out.' Greek prison-conditions cases at the ECHR make this domain hyper-scrutinised.",
    intlPrecedents: [
      { country: "United States", program: "COMPAS / Northpointe — used in some state corrections systems", year: "Pre-2024", outcome: "Public backlash; ProPublica racial-bias findings; widely criticised" },
      { country: "United Kingdom", program: "OASys / OGRS — actuarial tools used in HMPPS", year: "Operational, not agentic; tightly controlled by Probation Service" },
      { country: "European Union", program: "AI Act — explicitly addresses criminal-justice risk tooling as high-risk; predictive-policing-of-individuals prohibitions per Art. 5", year: "2024", outcome: "Tightens deployment to a narrow regulated path" },
    ],
    redTeam: [
      { axis: "regulatory-blocker", severity: "kill", note: "EU AI Act Article 5(1)(d) prohibits AI systems used by public authorities for predictive risk assessment of individuals committing offences based solely on profiling. Annex III high-risk treatment applies to remaining adjacent uses, with extensive obligations. The vendor surface area inside these constraints is too narrow to anchor a venture-studio bet." },
      { axis: "political-third-rail", severity: "kill", note: "Greek civil-society, the bar, and the academic criminal-law community will publicly oppose. Press coverage post-Mati / Tempi has trained the discourse to be hostile to algorithmic public-sector decisions on vulnerable groups." },
      { axis: "founder-fit", severity: "kill", note: "T-Life Capital is positioning as a constructive agentic-AI partner to the Greek state. Anchoring the early portfolio in the most controversial possible criminal-justice product would compromise the studio's other ministerial relationships." },
      { axis: "incumbent-overlap", severity: "clear", note: "No serious Greek incumbent." },
      { axis: "technical-infeasibility", severity: "wound", note: "Greek recidivism data is sparse and uncalibrated; building a defensible model is hard and bias-testing under AI Act is extensive." },
      { axis: "language-moat", severity: "clear", note: "Greek-language not material." },
    ],
    buyerObjection:
      "GS Justice's first objection: 'Even if the AI Act let me do this, I would not. The first wrongful release or wrongful classification traceable to your tool ends two careers and my minister's tenure. Why are you bringing this to me?'",
    buyerHook: "There is no realistic buyer hook within EU AI Act constraints and current Greek political conditions.",
    rubric: { agenticFit: 4, blueOcean: 4, timeToPilot: 1, politicalTailwind: 1, capitalEfficiency: 2, greekLanguageMoat: 1, composite: 2.55 },
    verdict: "kill",
    verdictRationale:
      "Three kill-severity red-team findings (regulatory, political, founder-fit). Per rubric thresholds a single kill-severity finding overrides composite — this has three. The EU AI Act Article 5 prohibition zone and Annex III obligations leave no commercial corridor that a venture studio should be the first mover in. Studio reputational risk also disqualifies. Hard kill; do not revisit until the regulatory landscape changes materially.",
    pitchReady: "concept",
    championProfile: "None available — no Greek public official will be the named sponsor in current conditions.",
    estimatedPilotBudget: "Not applicable.",
    founderProfile: "Not staffable inside T-Life's ethical scope.",
    tags: ["killed", "ai-act-prohibited-zone", "criminal-justice", "ethical-no-go"],
    addedDate: "2026-05-21",
  },
];
