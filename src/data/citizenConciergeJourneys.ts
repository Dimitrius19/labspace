export type JourneyStep = {
  procedure: string;          // mitos.gov.gr procedure name
  agency: string;             // owning ministry/agency
  estDays: string;
  documents: string[];
  note?: string;
};

export type Journey = {
  id: string;
  triggers: string[];         // Greek/English keywords
  exampleQuery: string;       // displayed as suggested prompt
  resolvedIntent: string;     // Greek-language intent the agent says it resolved
  ministryGraph: string[];    // ministries traversed (for display)
  steps: JourneyStep[];
  estimatedTotalDays: string;
  walletPrefills: string[];   // documents pre-fetchable from Wallet.gov.gr
};

export const journeys: Journey[] = [
  {
    id: "wine-shop-paros",
    triggers: ["κρασί", "οινοποιείο", "wine", "παρος", "paros"],
    exampleQuery: "Πάω να ανοίξω επιχείρηση που πουλά κρασί στην Πάρο",
    resolvedIntent:
      "Σύνθετη διαδικασία: ίδρυση επιχείρησης λιανικής + ειδική αδειοδότηση οίνου σε νησιωτικό δήμο.",
    ministryGraph: [
      "Ανάπτυξης (ΓΕΜΗ)",
      "Οικονομικών / ΑΑΔΕ",
      "Αγροτικής Ανάπτυξης (ΕΦΕΤ)",
      "Δήμος Πάρου",
      "Τουρισμού (αν AMA-υπενοικίαση)",
    ],
    steps: [
      {
        procedure: "Ίδρυση ΙΚΕ ή ατομικής στο ΓΕΜΗ",
        agency: "Υπουργείο Ανάπτυξης",
        estDays: "1-3 εργάσιμες",
        documents: ["Καταστατικό", "Πιστοποιητικό διακριτικού τίτλου", "ΑΦΜ ιδρυτών"],
        note: "Πρόσβαση μέσω gov.gr Wallet — προ-συμπλήρωση από Μητρώο Πολιτών",
      },
      {
        procedure: "Έναρξη δραστηριότητας με ΚΑΔ 47.25.25 (λιανικό εμπόριο οίνων)",
        agency: "ΑΑΔΕ",
        estDays: "1 εργάσιμη",
        documents: ["Αίτηση Δ211", "Μισθωτήριο καταστήματος"],
      },
      {
        procedure: "Άδεια λειτουργίας καταστήματος υγειονομικού ενδιαφέροντος",
        agency: "Δήμος Πάρου",
        estDays: "15-30 εργάσιμες",
        documents: ["Σχέδιο κάτοψης", "Βεβαίωση χρήσης γης", "Πυρασφάλεια"],
        note: "Νησιωτικός δήμος — οι έλεγχοι γίνονται κατά παρτίδες, αναμένετε στην ανώτατη ζώνη",
      },
      {
        procedure: "Δήλωση πώλησης οίνου & καταχώριση στο μητρώο ΕΦΕΤ",
        agency: "ΕΦΕΤ / Υπουργείο Αγροτικής Ανάπτυξης",
        estDays: "5-10 εργάσιμες",
        documents: ["Στοιχεία προμηθευτή", "Συμφωνητικά διανομής"],
      },
      {
        procedure: "Άδεια διάθεσης οινοπνευματωδών (Ν.2969/2001)",
        agency: "ΑΑΔΕ Τελωνεία",
        estDays: "10-15 εργάσιμες",
        documents: ["Άδεια καταστήματος", "Δήλωση αποθηκευτικού χώρου"],
      },
    ],
    estimatedTotalDays: "30-60 εργάσιμες (παράλληλη εκτέλεση)",
    walletPrefills: ["Αστυνομική ταυτότητα", "ΑΦΜ", "AMKA", "Πιστοποιητικό φορολογικής ενημερότητας"],
  },
  {
    id: "passport-renewal-diaspora",
    triggers: ["διαβατήριο", "passport", "ανανέωση", "μελβούρνη", "αμερική", "diaspora", "εξωτερικό"],
    exampleQuery: "Είμαι Ελληνίδα στη Μελβούρνη και θέλω να ανανεώσω το διαβατήριό μου",
    resolvedIntent:
      "Προξενική διαδικασία: ανανέωση διαβατηρίου εκτός Ελλάδος — απαιτείται συντονισμός Crocus + Wallet.gov.gr.",
    ministryGraph: [
      "Εξωτερικών (Προξενείο)",
      "Citizen Protection (Διαβατηρίων)",
      "Wallet.gov.gr / KED",
    ],
    steps: [
      {
        procedure: "Κράτηση ραντεβού στο Προξενείο Μελβούρνης",
        agency: "Προξενείο Ελλάδας Μελβούρνης",
        estDays: "Διαθεσιμότητα: 4-8 εβδομάδες",
        documents: ["Παλιό διαβατήριο", "Ηλεκτρονικό πιστοποιητικό γέννησης"],
        note: "Προξενείο εκδίδει σταυρωτή κράτηση μέσω Crocus",
      },
      {
        procedure: "Συμπλήρωση αίτησης Α' Φάσης online",
        agency: "Wallet.gov.gr",
        estDays: "Άμεσα",
        documents: ["Ταυτότητα (αν υπάρχει)", "ΑΜΚΑ"],
      },
      {
        procedure: "Φυσική παρουσία — λήψη βιομετρικών (δαχτυλικά αποτυπώματα + φωτογραφία)",
        agency: "Προξενείο Ελλάδας Μελβούρνης",
        estDays: "1 ραντεβού",
        documents: ["Δίπλωμα οδήγησης ή αυστραλιανή ταυτότητα ως δευτερεύον έγγραφο"],
      },
      {
        procedure: "Εκτύπωση διαβατηρίου στην Αθήνα + αποστολή ταχυδρομικώς",
        agency: "Citizen Protection / Διεύθυνση Διαβατηρίων",
        estDays: "10-15 εργάσιμες",
        documents: [],
        note: "Παράδοση μέσω DHL με tracking — ή παραλαβή ξανά από το προξενείο",
      },
    ],
    estimatedTotalDays: "6-10 εβδομάδες (περιλαμβανομένης κράτησης ραντεβού)",
    walletPrefills: ["Παλιό διαβατήριο", "Πιστοποιητικό γέννησης", "ΑΜΚΑ"],
  },
  {
    id: "birth-registration-abroad",
    triggers: ["γέννηση", "παιδί", "birth", "παιδιού", "διπλωματικό", "register"],
    exampleQuery: "Γεννήθηκε το παιδί μου στη Φρανκφούρτη — πώς το δηλώνω;",
    resolvedIntent:
      "Σύνθετη διαδικασία: δήλωση γέννησης στο Ειδικό Ληξιαρχείο Αθηνών + εγγραφή σε δημοτολόγιο + λήψη ΑΜΚΑ.",
    ministryGraph: [
      "Εξωτερικών (Προξενείο)",
      "Εσωτερικών / Δημοτολόγιο",
      "Εργασίας / EFKA (ΑΜΚΑ)",
      "Citizen Protection (αν χρειαστεί ταυτότητα)",
    ],
    steps: [
      {
        procedure: "Νομιμοποίηση ξένου πιστοποιητικού γέννησης (Apostille / Sphragida Cha)",
        agency: "Γερμανικές αρχές + Προξενείο Ελλάδας Φρανκφούρτης",
        estDays: "5-15 εργάσιμες",
        documents: ["Πρωτότυπο γερμανικό πιστοποιητικό γέννησης (Geburtsurkunde)"],
        note: "Apostille εκδίδεται από το Bezirksregierung — όχι από το προξενείο",
      },
      {
        procedure: "Μετάφραση από ορκωτό μεταφραστή ή ΥπΕξ",
        agency: "Ιδιωτικός ορκωτός μεταφραστής (ΥπΕξ μετάφραση καταργήθηκε 2021)",
        estDays: "2-5 εργάσιμες",
        documents: ["Νομιμοποιημένο πιστοποιητικό"],
      },
      {
        procedure: "Καταχώριση στο Ειδικό Ληξιαρχείο Αθηνών",
        agency: "Δήμος Αθηναίων / Ειδικό Ληξιαρχείο",
        estDays: "15-30 εργάσιμες (συνήθως ταχυδρομική)",
        documents: ["Μεταφρασμένο πιστοποιητικό", "Διαβατήρια γονέων", "Ληξιαρχική πράξη γάμου"],
      },
      {
        procedure: "Εγγραφή στο δημοτολόγιο του δήμου εγγραφής της μητέρας",
        agency: "Δήμος εγγραφής",
        estDays: "10-15 εργάσιμες",
        documents: ["Ληξιαρχική πράξη γέννησης ΕΛΑ"],
      },
      {
        procedure: "Έκδοση ΑΜΚΑ",
        agency: "EFKA / KEP",
        estDays: "Αυθημερόν",
        documents: ["Πιστοποιητικό οικογενειακής κατάστασης"],
      },
      {
        procedure: "Αίτηση επιδόματος γέννησης (€2.000-2.400)",
        agency: "OPEKA / Wallet.gov.gr",
        estDays: "Άμεσα ηλεκτρονικά",
        documents: ["ΑΜΚΑ παιδιού", "IBAN"],
        note: "Προθεσμία αίτησης: 3 μήνες από γέννηση — μην το παραλείψετε!",
      },
    ],
    estimatedTotalDays: "8-14 εβδομάδες",
    walletPrefills: ["Ληξιαρχική πράξη γάμου", "Διαβατήρια γονέων", "ΑΜΚΑ γονέων", "Αριθμός IBAN"],
  },
];

export function matchJourney(query: string): Journey | null {
  const q = query.toLowerCase();
  for (const j of journeys) {
    for (const t of j.triggers) {
      if (q.includes(t.toLowerCase())) return j;
    }
  }
  return null;
}
