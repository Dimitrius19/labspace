# Greek ministries pack — operational briefings

For each ministry: mandate, organisational shape, current digital substrate, known pain points from public discourse, candidate target users for an agent, kill-zone (where not to play).

## Digital Governance (Ψηφιακής Διακυβέρνησης)

- **Mandate** — cross-cutting digital authority. Owns gov.gr, mitos.gov.gr (mitos = the citizen-process registry), Wallet.gov.gr, KED (Κεντρική Επιτροπή Διαχείρισης) for digital identity.
- **Substrate** — gov.gr is the citizen front-end. KED-issued credentials (TaxisNet auth, govgr-2fa). Διαύγεια for transparency-by-default publishing of acts.
- **Pain** — back-office workflows that *cross* ministries are not automated. gov.gr is a portal, not an agent layer. Multiple ministries duplicate KYC/identity flows. Inter-system message bus is patchy.
- **User inside ministry** — General Secretariat for Information Systems & Digital Governance (ΓΓΠΣΨΔ) operators; the gov.gr product team.
- **Champion** — General Secretary level; partnership-friendly because they need vendors to populate the substrate.
- **Kill-zone** — don't try to *replace* gov.gr. Build *on top of it*. Position as platform-partner, not buyer.

## Finance / AADE (Ανεξάρτητη Αρχή Δημοσίων Εσόδων)

- **Mandate** — tax collection, customs, VAT, anti-evasion. AADE is an *independent authority* with its own budget — a separate buyer from the ministry of finance proper.
- **Substrate** — TAXISnet (citizen tax filing), myDATA (real-time e-invoice ledger, fully mandatory from 2024), ELENXIS (audit case-management), e-Bills, customs ICISnet.
- **Pain** — VAT fraud (carousel, missing-trader, fictitious invoicing) remains a known leak. ELENXIS case-management is form-driven, not assistive. Cross-checking myDATA against bank flows is partial. Auditors draft long letters by hand.
- **User inside ministry** — ΑΑΔΕ auditor (Ελεγκτής); ΑΑΔΕ data analyst.
- **Champion** — AADE Governor + ΓΓ Διοίκησης; very digital-mature buyer compared to most ministries.
- **Kill-zone** — TAXISnet replacement is a Tier-1 SI fight. The agentic surface area is the *case-work assistant* and the *cross-ledger anomaly detector*.

## Interior (Εσωτερικών)

- **Mandate** — municipalities (δήμοι, περιφέρειες), public servants, elections.
- **Substrate** — KEPs (Κέντρα Εξυπηρέτησης Πολιτών) — citizen service centres at municipal level. Demographic registry (Μητρώο Πολιτών).
- **Pain** — 332 municipalities with wildly varying digital maturity, often duplicating the same workflow with different software. KEP staff still do paper-driven case handling for many permit types.
- **User inside ministry** — municipal civil servants (mid-tier δημοτικός υπάλληλος).
- **Champion** — General Secretary for Local Administration; KEDE (the municipalities' association) for multi-buyer aggregation.
- **Kill-zone** — be careful: municipal IT procurement is fragmented and slow per-municipality. Pitch via KEDE or as Digital Governance partnership.

## Justice (Δικαιοσύνης)

- **Mandate** — courts, prisons, prosecution, notarial supervision.
- **Substrate** — OSDDY (Ολοκληρωμένο Σύστημα Διαχείρισης Δικαστικών Υποθέσεων) — case-management system, varying coverage by court tier. ΑΠ (Areios Pagos — supreme civil), ΣτΕ (Council of State — supreme administrative).
- **Pain** — backlog. Greece has been repeatedly censured by the European Court of Human Rights for trial-length delays. Judges and rapporteurs draft by hand. Jurisprudence search is via Nomos/QualexLex paid databases, not assistive.
- **User inside ministry** — δικαστικός γραμματέας (court clerk), εισηγητής (rapporteur — usually a young lawyer or junior judge drafting case memos), δικαστής (judge).
- **Champion** — Secretary General of the Ministry, or the President of an individual court (ΣτΕ President is the most visible).
- **Kill-zone** — public deployment of "AI that judges" is third-rail. Position as a drafting / search assistant, judge remains in control. EU AI Act classifies judicial AI as high-risk — compliance is a moat.

## National Defence (Εθνικής Άμυνας)

- **Mandate** — armed forces, Hellenic Defence Industry, defence procurement.
- **Substrate** — classified; HEMS (Hellenic Military Systems) on the IT side.
- **Pain** — Aegean ISR (intelligence, surveillance, reconnaissance), maritime sensor fusion, unmanned-system operations, supply-chain management, intelligence OSINT.
- **User inside ministry** — defence procurement office (GDDIA — Γενική Διεύθυνση Αμυντικών Εξοπλισμών), HEMS, joint operations command (ΓΕΕΘΑ).
- **Champion** — Secretary General for Defence Industry; specific service chiefs (Navy is the most agent-receptive given Aegean ops).
- **Kill-zone** — classified work requires Greek-citizen-only cleared staff; supply-chain restrictions on US/Israeli/EU dual-use components. Capital intensity high; defence funds available.

## Foreign Affairs (Εξωτερικών)

- **Mandate** — diplomacy, consular services, MFA / diaspora policy.
- **Substrate** — Crocus consular system; embassy & consulate IT is heterogeneous.
- **Pain** — ~5M-person diaspora (much larger than the resident population in many age cohorts), consular services slow and analog. Passport renewals, civil acts (birth/marriage/death registration abroad), voting registration are pain points. Diplomatic cable processing and OSINT brief production are manual.
- **User inside ministry** — consular officer; diplomatic desk officer.
- **Champion** — Secretary General for Public Diplomacy or for International Economic Relations; Diaspora is its own deputy-minister portfolio.
- **Kill-zone** — confidentiality / classified diplomatic traffic is off-limits to vendors. Pitch the citizen-facing diaspora layer first.

## Migration & Asylum (Μετανάστευσης & Ασύλου)

- **Mandate** — asylum-seeker processing, residence permits, integration, deportation. Highly visible politically.
- **Substrate** — Alkyoni (asylum case-management), residence-permit portals. Lots of paper still.
- **Pain** — asylum interview transcription, country-of-origin-information (COI) drafting, decision-letter drafting. Residence-permit backlog. Inter-agency coordination with Citizen Protection and Foreign Affairs is weak.
- **User inside ministry** — asylum-service caseworker; residence-permit office staff.
- **Champion** — Secretary General for Asylum or for Migration Policy.
- **Kill-zone** — fundamental rights territory under EU AI Act; high reputational risk if "AI decided to deport." Position the agent as **decision-support** to a named human officer, never as decision-maker. UNHCR observer access may be a requirement.

## Citizen Protection (Προστασίας του Πολίτη)

- **Mandate** — Hellenic Police (ΕΛΑΣ), Fire Service (was here, now under Climate ministry partly), Coast Guard.
- **Substrate** — Police-100 dispatch, vehicle/criminal-record systems. Schengen Information System (SIS II) integration. Διοικητικές πράξεις (administrative police acts).
- **Pain** — voice-call triage at 100 dispatch; report drafting (an officer spends hours writing the police report after a call-out); intelligence cross-referencing across siloes.
- **User inside ministry** — Police officer; 100-centre operator; investigator.
- **Champion** — Chief of Hellenic Police (Αρχηγός); General Secretary for Public Order.
- **Kill-zone** — facial recognition and predictive policing are EU-AI-Act red lines (prohibited / high-risk). Stick to administrative productivity, not enforcement-decision automation.

## Climate Crisis & Civil Protection (Κλιματικής Κρίσης & Πολιτικής Προστασίας)

- **Mandate** — created/elevated after the Mati 2018 and Thessaly 2023 disasters. Civil Protection, Fire Service operational direction, climate-resilience policy. 112 emergency-alert system.
- **Substrate** — 112 alert platform; Fire Service ops; AEGIS-style operational dashboards from earlier procurements.
- **Pain** — field-officer reporting, post-incident drafting, real-time multi-source fusion (satellite + sensor + citizen-reports + weather). Press cycle is brutal after every wildfire or flood — political tailwind for visible tech.
- **User inside ministry** — civil-protection field officer; 112 operator; fire-service operations centre.
- **Champion** — minister-level interest is consistently high; GS for Civil Protection.
- **Kill-zone** — life-safety claims require operational-grade engineering; cannot ship sloppy. Position as decision support to the duty officer.

## Health (Υγείας)

- **Mandate** — ESY (Εθνικό Σύστημα Υγείας) public hospitals, primary care, public health agencies (EODY).
- **Substrate** — IDIKA (Ηλεκτρονική Διακυβέρνηση Κοινωνικής Ασφάλισης) — runs e-prescription, AMKA (social-security ID), AHFY (Atomic Health File — patient record). myHealth gov.gr app.
- **Pain** — chronic workforce shortages, especially rural. Prescription review for chronic patients is manual. Telemedicine triage barely deployed. Hospital administrative load on doctors is high. ESY waiting lists.
- **User inside ministry** — ESY hospital doctor; rural-clinic GP; IDIKA operator; EODY analyst.
- **Champion** — IDIKA CEO (most digitally-fluent buyer); GS for Public Health Services.
- **Kill-zone** — clinical decision-making is EU-AI-Act high-risk + MDR (Medical Device Regulation). Stick to administrative-burden reduction and triage *to* a human clinician, not diagnostic AI.

## Education (Παιδείας, Θρησκευμάτων, Αθλητισμού)

- **Mandate** — primary/secondary/tertiary education, ASEP (the public-hiring authority is under the ministry of interior but heavily linked).
- **Substrate** — myschool (school management), e-class / e-me (LMS), Cedefop integration.
- **Pain** — teacher placement & substitute assignment is a yearly public spectacle. Curriculum content drafting and translation. University admin overhead. Special-education resource matching.
- **User inside ministry** — teacher-placement office staff; secondary-education directorate; school principal.
- **Champion** — GS for Primary & Secondary Education; rector-level for tertiary.
- **Kill-zone** — teachers' unions are powerful and AI-skeptical. Position as admin-burden reduction (away from class time), not "AI grading."

## Labour & Social Security (Εργασίας & Κοινωνικής Ασφάλισης)

- **Mandate** — ΔΥΠΑ (formerly OAED — public employment service), EFKA (social-security single fund), Labour Inspectorate (ΣΕΠΕ), occupational-safety.
- **Substrate** — Ergani (employment-registration system, mandatory for all employer-employee relationships); EFKA pension calculation; ΣΕΠΕ inspections.
- **Pain** — pension-calculation backlog (legendary in Greece — multi-year waits). ΔΥΠΑ jobseeker matching is weak. Labour-inspection prioritisation is patchy. Ergani is data-rich but underused for analytics.
- **User inside ministry** — EFKA caseworker; ΔΥΠΑ counsellor; ΣΕΠΕ inspector.
- **Champion** — EFKA Governor; ΔΥΠΑ Governor; GS for Labour.
- **Kill-zone** — pension calculation requires deterministic correctness — agents can advise but cannot determine. Stick to triage, matching, drafting.

## Development (Ανάπτυξης)

- **Mandate** — investment law, ESPA & RRF (Recovery & Resilience Facility) management partly, business-environment policy, consumer protection.
- **Substrate** — OPS (Ολοκληρωμένο Πληροφοριακό Σύστημα for ESPA), ΓΕΜΗ (business registry), Επιχειρώ portal.
- **Pain** — EU-funds absorption rates (politically toxic — the press tracks them quarterly). Project-application screening, deficiency-letter drafting, audit-trail generation are largely manual. Investment-law applications drag.
- **User inside ministry** — OPS analyst; investment-screening committee staff.
- **Champion** — GS for Public Investments; Special Secretariat for ESPA/RRF.
- **Kill-zone** — EU audit standards are strict — outputs must be traceable. Build for audit, not just speed.

## Environment & Energy (Περιβάλλοντος & Ενέργειας)

- **Mandate** — climate policy, energy (RES + grid + nuclear engagement), waste & water, environmental permitting, forests, Natura 2000.
- **Substrate** — environmental-permit registry; RAE (Energy Regulator) systems; HEDNO/IPTO grid systems are sectoral.
- **Pain** — RES (renewables) permitting backlog is the documented bottleneck on the national energy plan. Permit applications require cross-checking against Natura 2000, archaeology, grid availability, forestry. Forest-fire risk fusion. Water-quality monitoring.
- **User inside ministry** — permit-evaluation engineer; RES directorate staff.
- **Champion** — GS for Energy or for Natural Environment & Waters.
- **Kill-zone** — RES interest groups (developers, municipalities, citizen opposition) make this politically delicate. Position as objective compliance-checker, not "AI approver."

## Infrastructure & Transport (Υποδομών & Μεταφορών)

- **Mandate** — roads, ports, railways, civil aviation, telecoms infrastructure (jointly with Digital Gov), driving licences, vehicle registry.
- **Substrate** — vehicle registry (still partly paper-bound at peripheral level), driving-licence systems, public-works tender systems.
- **Pain** — major-project monitoring (Ελληνικό, metro extensions, motorway concessions). Contractor-progress reporting is paper-heavy. Driving-test scheduling. Vehicle-import KTEO/registration friction.
- **User inside ministry** — public-works oversight engineer; vehicle-registry clerk.
- **Champion** — GS for Public Works or for Transport.
- **Kill-zone** — major-contractor relationships (ΓΕΚ ΤΕΡΝΑ, Mytilineos, AVAX) are political; do not bid against their offerings.

## Maritime Affairs & Insular Policy (Ναυτιλίας & Νησιωτικής Πολιτικής)

- **Mandate** — shipping, ports, Coast Guard (operationally), insular policy (island-specific subsidies, schedules, infrastructure).
- **Substrate** — port-call systems (heterogeneous), ferry-route subsidisation files.
- **Pain** — barren-line (άγονη γραμμή) route subsidisation is a chronically opaque process. Small-port logistics. Port-call data fusion with cargo-customs.
- **User inside ministry** — port authority staff; barren-line directorate.
- **Champion** — GS for Maritime Policy.
- **Kill-zone** — Coast Guard operational systems are classified (overlap with Defence/Citizen Protection).

## Rural Development & Food (Αγροτικής Ανάπτυξης & Τροφίμων)

- **Mandate** — agriculture, fisheries, CAP (Common Agricultural Policy) disbursement, food safety (EFET).
- **Substrate** — OPEKEPE (CAP-payment agency) — the elephant. Geo-spatial parcel registry (LPIS) tied to satellite imagery.
- **Pain** — CAP-subsidy compliance, parcel-data mismatch detection (declarations vs. satellite reality), CAP audits — annually politically painful. Food-safety inspection prioritisation.
- **User inside ministry** — OPEKEPE staff; EFET inspector.
- **Champion** — OPEKEPE Governor — currently under heavy political pressure to clean up.
- **Kill-zone** — historical OPEKEPE controversies make "AI in subsidies" politically sensitive. Position as transparency/audit-trail tool, not allocator.

## Tourism (Τουρισμού)

- **Mandate** — tourism policy, EOT (Greek National Tourism Organisation), AMA (registry for short-term rentals).
- **Substrate** — AMA registry, EOT data, marketingreports.
- **Pain** — AMA-registry compliance (Airbnb/Booking listings vs. registered AMAs vs. AADE declarations). EOT data is rich but slow to publish. Beach-concession (αιγιαλός) management is paper-heavy and corrupt-adjacent.
- **User inside ministry** — AMA-registry compliance team; EOT analytics.
- **Champion** — GS for Tourism Policy.
- **Kill-zone** — short-term-rental policy is politically loaded (housing crisis vs. tourism revenue). Pick a side carefully.

## Culture (Πολιτισμού)

- **Mandate** — archaeological service, museums, modern culture, sport (until split).
- **Substrate** — Ephorate (Εφορεία Αρχαιοτήτων) per-region administrative systems; National Documentation Centre.
- **Pain** — archaeological permitting is the bottleneck on every infrastructure and energy project in Greece. Ephorates drown in opinion-drafting. Museum-collection catalogue.
- **User inside ministry** — Ephorate archaeologist; permit committee.
- **Champion** — GS for Antiquities & Cultural Heritage.
- **Kill-zone** — archaeologists are an autonomous, prestigious community; positioning matters. "Tool for archaeologists" not "AI permit approver."

## Social Cohesion & Family (Κοιν. Συνοχής & Οικογένειας)

- **Mandate** — family policy, demographics, GenY/birth incentives, disability policy, gender equality.
- **Substrate** — child/family-benefit systems via EFKA; demographic data.
- **Pain** — benefit-eligibility complexity for families; cross-referencing with EFKA/AADE/Interior. Fragmented family-benefit information for citizens.
- **User inside ministry** — family-benefit caseworker.
- **Champion** — GS-level.
- **Kill-zone** — fundamental-rights / vulnerable-populations territory — fairness scrutiny is high.

## State / Cross-cutting (Επικρατείας)

- **Mandate** — PM's office, special projects, inter-ministerial coordination.
- **Substrate** — none specific; uses other ministries' systems.
- **Pain** — answering PM-office / parliamentary questions requires pulling data from N ministries by hand. Coordinating inter-ministerial commitments. Tracking progress on PM-led initiatives.
- **User inside ministry** — PM's office staff; Minister-of-State office.
- **Champion** — most visible champion possible — Minister of State or PM Chief of Staff. The pitch here is to **be the agent layer for PM-driven oversight**.
- **Kill-zone** — political proximity = political risk. Stay operational, stay quiet.

## Cross-cutting notes

- **Greek-language admin/legal corpora** = the moat. Multinational tools are weaker here.
- **Inter-ministerial workflows** = the gap. gov.gr does citizen-side; nobody does back-office crossing.
- **EU-funds (RRF, ESPA, CAP)** = political urgency, ample budget envelope, defined audit standards.
- **Procurement reality** — for <€60k a ministry can engage you on a direct contract (απευθείας ανάθεση) within innovation-pilot frameworks. €60k-500k requires a competitive process but is still fast. >€500k needs full ΕΣΗΔΗΣ public tender (slow, framework-aware). Aim for the pilot tier first.
