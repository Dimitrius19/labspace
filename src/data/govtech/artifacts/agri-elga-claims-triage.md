# Business Plan

**Company (working title):** Chersos Claims — a T-Life Capital portfolio venture building an agentic damage-assessment copilot for ΕΛΓΑ surveyors and claims adjudicators.

**Thesis.** ΕΛΓΑ's claims backlog is not a headcount problem and it is not a satellite-data problem. It is a field-evidence-to-decision problem: every hail, frost, flood, or livestock-disease claim requires a γεωπόνος εκτιμητής to physically visit the parcel and hand-draft a Greek-language assessment report in ΕΛΓΑ's idiosyncratic damage taxonomy — for ≈150-250k claims per year, with volume climbing structurally as the climate writes a bigger bill each season. Daniel and Elias, the summer-2024 Thessaly hailstorms, the Cretan November-2024 storms, and recurring olive-frost in Lakonia/Messinia have stretched timelines from a 60-day target to a parliamentary attack line measured in months. Chersos ships a copilot that fuses farmer-submitted geotagged photos, Sentinel-2 before/after imagery, EMY weather and hail-radar tiles, LPIS, and Ελληνικό Κτηματολόγιο ground-truth into a pre-drafted Greek-language assessment — leaving every signature and every adverse-decision authority with the named ΕΛΓΑ surveyor.

**Architectural moat — the split that makes this defensible and shippable.** The damage-estimate runs on a deterministic remote-sensing pipeline, not an LLM. The drafting runs on an LLM, bounded by ΕΛΓΑ damage-taxonomy templates and citation enforcement. Provenance is captured at the evidence level: every percentage links to a specific NDVI/NDWI delta tile, every weather claim to a specific EMY observation or hail-radar pixel, every paragraph to a specific article of the ΕΛΓΑ Kanonismos Asfalisis. This three-layer split — deterministic remote-sensing + LLM-drafting + evidence-level provenance — is the entire pitch, and it is the posture that keeps Chersos out of EU AI Act Annex III high-risk territory by classifying as decision-support to a named human surveyor. Annex III enforcement was deferred to 2 December 2027, giving an eighteen-month runway to deploy and prepare the conformity file. Law 5299/2026 creates a Greek-law compatibility duty for any agent touching an insurance file; the deterministic split is the only architecture that survives a hostile reading.

**Market and buyer.** The economic buyer is the President of ΕΛΓΑ (Οργανισμός Ελληνικών Γεωργικών Ασφαλίσεων). The secondary buyer is the General Secretary for Rural Development at ΥΠΑΑΤ. The user is the γεωπόνος εκτιμητής at a regional ΕΛΓΑ Υποκατάστημα, plus the desk adjudicator who closes the file. Claim volumes are 150-250k per year; Thessaly alone generated tens of thousands; payouts have run from hundreds of millions to north of a billion euros per major event when EU Solidarity Fund coordination is in play. The President's career incentive is to compress assessment timelines without exposing ΕΛΓΑ to a "robot denied my hail claim" incident before the 2027 CAP mid-term review, while farmer mobilisations (tractor convoys to Athens, February 2026) remain politically live.

**Why now.** Four facts converge on summer 2026. First, Storm Daniel's backlog from September 2023 is the defining political moment of Greek agri-insurance — Hatzidakis's "€1 billion in farmer payments by end-June" action plan put a hard public clock on payout speed, and the Thessaly Recovery Plan's €2.3B envelope explicitly includes claims-process modernisation. Second, the international precedent base is investor-grade: Agroseguro absorbed €804M in claims in 2025 (its second-highest decade); Andalusia ran +40% YoY; Spain now mandates insurance over €500k turnover; USDA RMA + ESA Sen4CAP + Planet Labs document the satellite-loss-adjuster workflow as deployed pattern, not prototype. Third, climate is structural — payouts trend up not down, the bottleneck is permanent. Fourth, EU AI Act Annex III enforcement was deferred to 2 December 2027.

**Product.** A web copilot next to the ΕΛΓΑ claims back-office, plus a lightweight surveyor mobile companion. The agent ingests the farmer's gov.gr/ΕΛΓΑ claim with geotagged photos and parcel ID; geolocates against LPIS and Ελληνικό Κτηματολόγιο; pulls Sentinel-2 pre/post tiles and computes vegetation-stress or surface-water deltas; cross-references EMY weather and hail-radar tiles for the date window; estimates a plausible damage band on the deterministic pipeline; triages into three lanes (fast-track desk, standard visit, complex multi-parcel visit); drafts the Greek-language pre-assessment in ΕΛΓΑ taxonomy with paragraph-level citations; flags every judgement call with a calibrated confidence score; and hands a signed package to the γεωπόνος εκτιμητής — no autonomous payout, ever.

**Revenue model and pricing.** Direct contract with ΕΛΓΑ via ΥΠΑΑΤ. Tier 1: €50-60k απευθείας ανάθεση retro-analysis on one closed weather event (Cretan November-2024 storms — politically quieter than Thessaly, large enough cohort, fully adjudicated) targeting "% of claims under 30 days" against historical baseline. Tier 2: €150-300k year-one parallel-run on a live cohort in one Περιφέρεια, PASEGES-endorsed. Per-seat extension: ≈€2.0-2.8k per surveyor per year at scale (a few hundred γεωπόνοι εκτιμητές plus seasonal surge — low-four-figure addressable seats). Tier 3: Thessaly Recovery Plan carve-out or RRF disaster-recovery wedge for national rollout, low-seven-figure ACV on an SLA-backed subscription.

**Unit economics.** Hosted on Greek/EU sovereign cloud, with the Copernicus DIAS substrate already paid for by EU subscription. Marginal cost per claim in the €0.30-0.70 range at current satellite-tile and inference pricing; the remote-sensing pipeline is amortised across all claims and is rounding-error per file. Per-surveyor ACV at scale 12-20× variable cost. Gross margin target 70%+ after support and ΕΛΓΑ-specific integration overhead.

**Capital plan and milestones.** Pre-seed €700k-€900k (T-Life Capital + one Greek strategic angel familiar with the insurance or remote-sensing space) to fund the founding team for ten months through the Tier-1 retro-analysis and into a signed Tier-2 LoI. Milestones: (1) retro-analysis on Cretan November-2024 storms delivered to the ΕΛΓΑ President's office within 90 days; (2) PASEGES endorsement letter signed ahead of any live deployment by month four; (3) Tier-2 parallel-run contract signed by month seven; (4) PASEGES + audit-firm validated outcome report by month ten. Seed round €3-4M at the Tier-2 signing, used to staff a customer-success function and a second product line (a livestock-disease outbreak triage agent — adjacent buyer at the Vet Directorate, same moat).

**Team and hires.** Three founding hires: (1) ex-CERTH SpaceApps or ex-Beyond Center remote-sensing lead, owns the deterministic damage-estimate pipeline; (2) ex-ΕΛΓΑ γεωπόνος εκτιμητής as co-founder — credibility with the President and the regional Υποκαταστήματα, owns the damage-taxonomy specification and the PASEGES relationship; (3) senior ML lead with Greek-NLP and agro-vocabulary tuning experience, owns the drafting layer and the regional-dialect coverage on claim-text inputs. First three hires post-Tier-1: a former ΕΛΓΑ desk adjudicator as design partner, a geo-spatial data engineer with LPIS and Ελληνικό Κτηματολόγιο experience, and a customer-success lead with rural-cooperative scars.

**Risks.** (1) Politicisation as a "private-insurer wedge" — the active fight over private-insurance integration creates real reputational exposure; mitigated by an explicit "accelerate public ΕΛΓΑ payouts, not enable private-insurer underwriting" framing baked into every document, PASEGES endorsement as third-party seal. (2) Farmer-union pushback — Feb-2026 tractor convoys are the live precedent; mitigated by surveyor-stays-in-loop architecture, PASEGES pre-line of every comms artifact, and a contractual "no autonomous payout, ever" guarantee. (3) Pilot procurement awkward middle — Tier 2 sits above απευθείας ανάθεση and below the clean ESPA innovation tier; mitigated by entering through Tier-1 retro at €50-60k and routing Tier 2 through Thessaly Recovery or RRF disaster-recovery. (4) No EU public-insurer precedent — Agroseguro is a public-private mutual, USDA RMA is reinsurance-led; mitigated by leaning on Sen4CAP/Copernicus DIAS as the technical reference class and Caddy/HMRC as the architectural reference class. (5) Neuropublic adjacency — positioning is pilot partner on an agentic layer they do not ship today, not displacement.

---

# Pitch Deck

## Slide 1 — Chersos Claims
- T-Life Capital portfolio venture, Athens
- ΕΛΓΑ damage-assessment copilot for γεωπόνοι εκτιμητές and claims adjudicators
- Drafts the assessment with full evidence provenance — surveyor reviews, edits, and signs
- Pilot-ready, retro-analysis on a closed weather cohort within 60 days

## Slide 2 — Problem
- 150-250k claims per year — hail, frost, flood, drought, livestock disease
- Field surveyor physically visits and hand-drafts the report in ΕΛΓΑ taxonomy
- Daniel/Elias 2023 backlog stretched assessment timelines from a 60-day target to many months
- Cretan November-2024 storms, recurring olive-frost in Lakonia/Messinia, summer-2024 Thessaly hail — the climate keeps writing a bigger bill
- The bottleneck is the assessment draft and the field visit, not the satellite data

## Slide 3 — Why Now
- Storm Daniel made claims backlog the defining political moment of Greek agri-insurance
- Hatzidakis's €1 billion action plan and the Thessaly Recovery Plan €2.3B envelope put a hard public clock on payout speed
- Agroseguro 2025 claims €804M (second-highest decade); Andalusia +40% YoY; Spain now mandating insurance over €500k turnover — the international reference class is mature and growing
- USDA RMA + ESA Sen4CAP + Planet Labs document the satellite-loss-adjuster workflow as a deployed operational pattern
- EU AI Act Annex III deferred to 2 December 2027 — clean eighteen-month deployment window under decision-support classification

## Slide 4 — Solution
- Three-layer split is the moat: deterministic remote-sensing + LLM drafting + evidence-level provenance
- The split keeps Chersos out of Annex III high-risk territory and survives a hostile reading of Law 5299/2026
- Sentinel-2 vegetation-stress and surface-water deltas, EMY weather, hail-radar tiles, LPIS, Ελληνικό Κτηματολόγιο — fused on the deterministic pipeline
- ΕΛΓΑ taxonomy templates and law-article citations on the drafting layer
- Calibrated confidence on every line item; the γεωπόνος εκτιμητής signs

## Slide 5 — Demo
- Live walkthrough on the Cretan November-2024 storm cohort — a closed, fully adjudicated event
- Side-by-side: agent-drafted pre-assessment vs the historical surveyor report, with the deterministic damage-band identical in both
- Hover any sentence in the report, see the citation to the Sentinel tile, the EMY observation, or the Kanonismos Asfalisis article
- Triage view: 3 lanes (fast-track desk, standard visit, complex multi-parcel) with per-claim confidence
- Surveyor edit + sign

## Slide 6 — Market
- Greek primary market: ΕΛΓΑ, 150-250k claims per year, low-four-figure surveyor + adjudicator seats (including surge pool)
- Adjacent product line: livestock-disease outbreak triage at the Vet Directorate — same moat, separate budget line
- Lateral expansion: ΕΛΓΑ's reinsurance counterparties and EU Solidarity Fund coordination work — Greek-language evidence packets at EU speed
- Long-term: portable into Cyprus and into Western Balkan public agri-insurance schemes as the EU pre-accession agenda picks up

## Slide 7 — Traction
- Source idea documented in T-Life Capital ministries-pack with composite rubric 4.25, passed hostile qualification re-pass on 21 May 2026
- Founding γεωπόνος εκτιμητής candidate identified (ex-ΕΛΓΑ Thessaly, 15+ years on hail and frost cases)
- Remote-sensing co-founder candidate sourced through CERTH SpaceApps network
- PASEGES endorsement-letter language being pre-lined ahead of any field deployment
- Cretan November-2024 storm cohort data-availability confirmed with regional ΕΛΓΑ Υποκατάστημα

## Slide 8 — Business Model
- Tier 1 retro-analysis: €50-60k απευθείας ανάθεση on one closed weather event
- Tier 2 parallel-run: €150-300k year-one on one Περιφέρεια live cohort, PASEGES-endorsed
- Tier 3 national: SLA-backed subscription, low-seven-figure ACV, funded through Thessaly Recovery / RRF disaster-recovery
- Per-surveyor extension at scale ≈€2.0-2.8k per year

## Slide 9 — Competition & Moat
- No deployed Greek-language agentic damage-assessment copilot on ΕΛΓΑ claims today
- Agroseguro, USDA RMA, Groupama parametric are reference classes, not Greek-public-scheme competitors
- Neuropublic supplies parts of the geospatial stack but does not ship an LLM-native Greek-language drafting agent — Chersos sits on top of their pipes, not against them
- Moat: ΕΛΓΑ damage taxonomy + regional crop and dialect vocabulary + Kanonismos Asfalisis + Sentinel + Ελληνικό Κτηματολόγιο + ex-surveyor co-founder + PASEGES relationship + post-Annex-III architectural posture

## Slide 10 — Team
- Remote-sensing technical founder — ex-CERTH SpaceApps or Beyond Center
- Ex-ΕΛΓΑ γεωπόνος εκτιμητής co-founder — owns damage-taxonomy spec and PASEGES credibility
- Senior ML lead — Greek-NLP and agro-vocabulary tuning
- Advisor bench: former SecGen Rural Development, named PASEGES board member, EU Solidarity Fund desk officer

## Slide 11 — Ask
- €700k-€900k pre-seed, T-Life Capital lead, one Greek strategic angel
- Use of funds: ten-month runway through Tier-2 LoI and PASEGES-validated outcome report
- Investor introductions sought: ΕΛΓΑ President's office, SecGen Rural Development, named regional Υποκατάστημα Directors (Crete or Western Greece for Tier 1), PASEGES leadership

---

# Go-to-Market Plan

**Champion identification.** Two named primary champions: the President of ΕΛΓΑ (economic buyer, career incentive to compress timelines without an "AI denied my hail claim" incident, personal stake in the post-Daniel payout clock) and the General Secretary for Rural Development at ΥΠΑΑΤ (policy buyer, owns Recovery Plan envelopes, EU Solidarity Fund coordination, CAP mid-term review). Secondary champion: ΕΛΓΑ Director of Claims, owns operational rollout and surveyor-pool trust. Operational champion: the Director of one regional Υποκατάστημα — first preference Crete or Western Greece for a politically quieter Tier-1 (Thessaly is the obvious post-Daniel pilot but is hot, with PASEGES tractor convoys live in Feb 2026). Trusted-third-party champion: a named PASEGES board member, signed onto the endorsement language before any field deployment, never after.

**First-meeting choreography.** Forty-five minutes with the ΕΛΓΑ President, ex-ΕΛΓΑ co-founder physically in the room, technical founder for the architecture slide only. Open with the political diagnosis (the backlog is the attack line, not the headcount; Daniel was the wound, climate makes it chronic), not the product. Ten minutes on the three-layer split — deterministic remote-sensing + LLM drafting + evidence-level provenance — the only architectural moment the President needs, the answer to Law 5299/2026, the Annex III deferral, and the "robots paying farmers" framing. Ten minutes on the retro-analysis: name the Cretan November-2024 cohort, the candidate Υποκατάστημα Director, the eight-week window. Close on the explicit framing covenant — "this accelerates public ΕΛΓΑ payouts; it does not enable private-insurer underwriting" — and offer to bake it into the contract preamble. Do not ask for a decision. Ask for two follow-ups: a working session with the Director of Claims and a warm-intro to PASEGES via the SecGen.

**Pilot offer (the buyer hook).** A retro-analysis on one closed weather cohort — Cretan November-2024 storms is the calibrated candidate — running the agent against the historical adjudicated file in parallel, eight weeks, under €60k, απευθείας ανάθεση compatible. Scoring on three measures: damage-band accuracy versus surveyor ground-truth, citation precision against the Kanonismos Asfalisis and the EMY observation set, and time-to-draft. Every output is signed by an ΕΛΓΑ surveyor as it would be in production; no autonomous payout. The retro-report is owned by ΕΛΓΑ and published or withheld at the President's discretion. If the retro fails on damage-band accuracy or citation precision against the historical file, we tear up the invoice. Reference numbers in the room: "After Daniel, 65% of claims took more than 120 days. We target 60% under 30 days." This is the buyerHook from the qualification dossier and it is what the President will be asked about by the Minister within a quarter of the retro-report landing.

**Expansion path.** Retro-pass → Tier-2 parallel-run on one live Περιφέρεια at €150-300k year-one (PASEGES endorsement pre-signed), per-surveyor ACV thereafter. Concurrent product expansion to the livestock-disease outbreak triage agent (adjacent Vet Directorate buyer within ΥΠΑΑΤ, separate budget line, same moat). National rollout from year two on SLA-backed subscription, funded out of Thessaly Recovery or RRF disaster-recovery — the two vehicles that solve the awkward-middle tier without forcing an open tender on a calendar incompatible with Recovery-Plan reporting. Lateral expansion from year three: reinsurance counterparties and the EU Solidarity Fund desk — Greek-language evidence packets at EU speed.

**Procurement vehicle.** Tier 1 is an απευθείας ανάθεση direct contract — the only instrument with a calendar compatible with a President-of-ΕΛΓΑ delivery window in 2026. Tier 2 is a Thessaly Recovery Plan or RRF disaster-recovery carve-out; we begin envelope-shaping with the SecGen and the ΥΠΑΑΤ ESPA office in parallel with the Tier-1 retro-analysis. Tier 3 is a competitive tender we expect to win on the audited Tier-2 outcome report and the deployed surveyor NPS; we will accept and welcome Neuropublic as a prime contractor at Tier 3, with Chersos as the agentic-layer subcontractor — this protects the incumbent relationship on the geospatial substrate and removes the political risk of being framed as a Neuropublic displacement bid.

**PR and comms.** No press release at retro-analysis signature. No press release during the parallel-run. One pre-briefed Kathimerini or Naftemporiki long-form on the day the audited Tier-2 outcome report is shared with the President's office, framed around accelerating payouts and surveyor productivity in the climate era, with PASEGES quoted as the trusted third party and Agroseguro and USDA RMA cited as the international comparator set. PASEGES briefings held in person and ahead of any press contact — the message is surveyor copilot, never surveyor replacement, and the explicit covenant against private-insurer underwriting is the line in every artifact. Brussels-facing comms: a posted AI Act conformity-assessment posture document on day one, citing the deterministic-remote-sensing + drafting + provenance split and the 2 December 2027 Annex III deferral — pre-empts any DG SANTE or DG AGRI inquiry and gets ahead of the new enforcement date. No per-surveyor productivity numbers published without the President's written consent; the release calendar is the President's, and PASEGES's endorsement makes the press cycle survivable.
