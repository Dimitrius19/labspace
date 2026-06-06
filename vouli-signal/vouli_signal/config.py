"""Static configuration: sources, taxonomy, parties, A/B signals, scoring weights.

The ministry ids deliberately match the T-Life govtech catalogue
(`src/data/govtech/ministries/*.ts`) so a parliamentary attack maps straight
onto an existing thesis/Gamma deck.
"""
from __future__ import annotations

# --- Sources -----------------------------------------------------------------

BASE = "https://www.hellenicparliament.gr"

ENDPOINTS = {
    # Highest-signal, most structured: urgent-questions bulletin
    "epikairi_bulletin": f"{BASE}/Koinovouleftikos-Elenchos/Deltio-Epikairon-Erotiseon",
    # Hub for all means of parliamentary control
    "control_hub": f"{BASE}/Koinovouleftikos-Elenchos/Mesa-Koinovouleutikou-Elegxou",
    # Plenary minutes listing (verbatim debate transcripts)
    "plenary_minutes": f"{BASE}/Praktika/Synedriaseis-Olomeleias",
}

# ParlaMint-GR: clean, annotated, CC BY 4.0 bulk corpus (no scraping needed).
PARLAMINT_GR_URL = "http://hdl.handle.net/11356/1486/ParlaMint-GR.tgz"

# A realistic browser identity (curl_cffi additionally spoofs the TLS/JA3 layer).
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)

# Politeness — the data is public record; keep the footprint tiny.
RATE_LIMIT_SECONDS = 4.0
RATE_LIMIT_JITTER = 2.0
REQUEST_TIMEOUT = 30

# --- Parties (canonical name -> is_opposition) -------------------------------

PARTIES = {
    "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ": False,
    "ΠΑΣΟΚ": True,
    "ΠΑΣΟΚ - ΚΙΝΑΛ": True,
    "ΣΥΡΙΖΑ": True,
    "ΝΕΑ ΑΡΙΣΤΕΡΑ": True,
    "ΚΚΕ": True,
    "ΕΛΛΗΝΙΚΗ ΛΥΣΗ": True,
    "ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ": True,
    "ΝΙΚΗ": True,
    "ΦΩΝΗ ΛΟΓΙΚΗΣ": True,
}

# Lightweight alias map for messy transcript spellings -> canonical party.
PARTY_ALIASES = {
    "ΚΙΝΑΛ": "ΠΑΣΟΚ - ΚΙΝΑΛ",
    "ΚΙΝΗΜΑ ΑΛΛΑΓΗΣ": "ΠΑΣΟΚ - ΚΙΝΑΛ",
    "ΣΥΡΙΖΑ - ΠΣ": "ΣΥΡΙΖΑ",
    "ΣΥΡΙΖΑ-ΠΣ": "ΣΥΡΙΖΑ",
    "ΚΟΜΜΟΥΝΙΣΤΙΚΟ ΚΟΜΜΑ ΕΛΛΑΔΑΣ": "ΚΚΕ",
}

# --- Ministry taxonomy (id matches the govtech catalogue) ---------------------
# keywords are lowercase, accent-folded substrings (see normalize.fold).

MINISTRIES = [
    {"id": "education", "name": "Παιδείας, Θρησκευμάτων & Αθλητισμού",
     "keywords": ["παιδει", "εκπαιδευτικ", "σχολει", "αναπληρωτ", "κεδασυ",
                  "μαθητ", "πανεπιστημι", "φοιτητ", "ειδικη αγωγη", "ιεπ",
                  "νηπιαγωγει", "πανελλαδικ", "διοριστ"]},
    {"id": "development", "name": "Ανάπτυξης",
     "keywords": ["αναπτυξ", "ακριβει", "αισχροκερδ", "διμεα", "ελιδεκ",
                  "ερευνα", "καινοτομ", "αναπτυξιακο", "επενδυσ", "γεμη",
                  "εμποριο", "καταναλωτ", "καλαθι"]},
    {"id": "finance-aade", "name": "Εθνικής Οικονομίας & Οικονομικών",
     "keywords": ["οικονομ", "φορολογ", "ααδε", "εσπα", "ταμειο ανακαμψ",
                  "προυπολογισμ", "φπα", "επιδοτησ"]},
    {"id": "health", "name": "Υγείας",
     "keywords": ["υγει", "νοσοκομει", "εσυ", "γιατρ", "φαρμακ", "ασθεν"]},
    {"id": "labour-social-security", "name": "Εργασίας & Κοιν. Ασφάλισης",
     "keywords": ["εργασ", "συνταξ", "εφκα", "ασφαλισ", "ανεργ", "μισθ"]},
    {"id": "interior", "name": "Εσωτερικών",
     "keywords": ["εσωτερικ", "δημοι", "οτα", "αυτοδιοικη", "δημοσιοι υπαλληλ"]},
    {"id": "migration-asylum", "name": "Μετανάστευσης & Ασύλου",
     "keywords": ["μεταναστ", "ασυλ", "προσφυγ"]},
    {"id": "rural-development", "name": "Αγροτικής Ανάπτυξης & Τροφίμων",
     "keywords": ["αγροτ", "οπεκεπε", "κτηνοτρ", "ελγα", "επιδοτησεις αγροτ"]},
    {"id": "infrastructure-transport", "name": "Υποδομών & Μεταφορών",
     "keywords": ["υποδομ", "μεταφορ", "οδικ", "εργα", "διοδι"]},
    {"id": "environment-energy", "name": "Περιβάλλοντος & Ενέργειας",
     "keywords": ["περιβαλλον", "ενεργει", "ρευμα", "δεη", "αππε", "ραε"]},
    {"id": "justice", "name": "Δικαιοσύνης",
     "keywords": ["δικαιοσυν", "δικαστηρι", "δικαστ", "φυλακ"]},
    {"id": "citizen-protection", "name": "Προστασίας του Πολίτη",
     "keywords": ["αστυνομ", "εγκληματικοτ", "προστασια του πολιτη"]},
    {"id": "climate-civil-protection", "name": "Κλιματικής Κρίσης & Πολ. Προστασίας",
     "keywords": ["πυρκαγι", "πλημμυρ", "πολιτικη προστασ", "κλιματικ"]},
    {"id": "maritime-insular", "name": "Ναυτιλίας & Νησιωτικής Πολιτικής",
     "keywords": ["ναυτιλ", "νησιωτ", "ακτοπλο", "λιμαν", "πλοι"]},
    {"id": "tourism", "name": "Τουρισμού",
     "keywords": ["τουρισμ", "ξενοδοχ"]},
    {"id": "culture", "name": "Πολιτισμού",
     "keywords": ["πολιτισμ", "αρχαιολογ", "μουσει", "μνημει"]},
    {"id": "foreign-affairs", "name": "Εξωτερικών",
     "keywords": ["εξωτερικ", "διπλωματ", "τουρκι", "ελληνοτουρκικ"]},
    {"id": "national-defence", "name": "Εθνικής Άμυνας",
     "keywords": ["αμυν", "ενοπλες δυναμ", "στρατ", "εξοπλιστικ"]},
    {"id": "digital-governance", "name": "Ψηφιακής Διακυβέρνησης",
     "keywords": ["ψηφιακ", "gov.gr", "τεχνητη νοημοσυν", "δεδομεν"]},
    {"id": "social-cohesion-family", "name": "Κοιν. Συνοχής & Οικογένειας",
     "keywords": ["κοινωνικη συνοχ", "οικογενει", "επιδομα", "οπεκα", "αμεα"]},
]

# --- A/B classification: throughput-shaped (AI-addressable) vs pure political --

# Markers that an attack is about *administrative throughput* an agent can fix.
THROUGHPUT_MARKERS = [
    "καθυστερ", "εκκρεμ", "ουρ", "αναμον", "γραφειοκρατ", "λιστα αναμον",
    "διεκπεραιωσ", "αξιολογ", "ελεγχ", "διαφανει", "ιχνηλασ", "προθεσμ",
    "κενα", "στελεχωσ", "δρομολογ", "προσληψ", "εγκριση", "επεξεργασ",
]
# Markers that an attack is about money/ideology AI cannot solve.
POLITICAL_MARKERS = [
    "κονδυλι", "χρηματοδοτησ", "περικοπ", "μνημονι", "ιδεολογ",
    "συνταγμα", "απεργ", "μισθολογ", "φοροαπαλλαγ", "προυπολογισμ",
]

# The OPEKEPE-era "controls / who-got-what" supertheme — a standing tailwind.
CONTROLS_MARKERS = ["οπεκεπε", "διαφανει", "απατ", "δαπαν", "ελεγχ",
                    "ιχνηλασ", "επιδοτησ", "σκανδαλ", "eppo", "ελεγκτικο συνεδρ"]

# --- ministry -> existing repo thesis ids (govtech catalogue) -----------------

THESIS_INDEX = {
    "education": ["education-school-inspection-drafting",
                  "education-substitute-teacher-matching",
                  "education-kedasy-special-ed-matching",
                  "education-teacher-placement-agent"],
    "development": ["espa-screening-copilot", "rrf-milestone-tracker",
                    "espa-audit-trail-synthesis",
                    "development-strategic-investment-drafter"],
    "finance-aade": ["espa-screening-copilot", "rrf-milestone-tracker",
                     "aade-elenxis-auditor-copilot", "espa-audit-trail-synthesis"],
    "rural-development": ["espa-audit-trail-synthesis", "agri-elga-claims-triage",
                          "agri-efet-inspection-prioritisation"],
    "health": ["health-pre-authorisation-drafter", "health-patient-correspondence"],
    "migration-asylum": ["migration-residence-permit-triage",
                         "migration-coi-drafting-copilot"],
}

# --- scoring weights for the demand-signal index ------------------------------

WEIGHTS = {
    "ai_addressable": 3.0,     # is it a throughput problem at all
    "cross_party": 2.0,        # per distinct opposition party on the theme
    "frequency": 1.0,          # per repeated hit
    "controls_theme": 1.5,     # rides the OPEKEPE tailwind
    "has_thesis": 1.5,         # we already have a costed thesis
    "recency": 1.0,            # raised in the last 30 days
}
