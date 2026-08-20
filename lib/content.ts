import { images } from "./images";

export const brand = {
  claim: "Werte schaffen mit Immobilien",
  subclaim: "Werte bewahren – Potenziale heben",
  heroSubclaim:
    "treuhans ist dein Partner für Vermögensaufbau mit Immobilien. Wir helfen dir, mit Wohnimmobilien Vermögen aufzubauen und langfristig finanziell unabhängiger zu werden.",
  tagline:
    "Die treuhans GmbH vereint Verwaltungskompetenz und Investmentchancen direkt vom Eigentümer zu einem ganzheitlichen Immobilienmanagement.",
  description:
    "Wir sichern Werte, optimieren Erträge und begleiten dich mit kaufmännischer Präzision und persönlicher Verlässlichkeit — von der Verwaltung bis zum Verkauf.",
} as const;

export const company = {
  address: "Burgplatz 2",
  city: "04109 Leipzig",
  phone: "0341 56 63 87 00",
  phoneHref: "tel:+4934156638700",
  email: "hallo@treuhans.de",
  website: "www.treuhans.de",
} as const;

export const businessAreasIntro = {
  eyebrow: "Service",
  title: "Wir nehmen dich nach dem Kauf an die Hand.",
  description:
    "Wenn du über einen Kapitalanlagevertrieb gekauft hast, geht es bei uns weiter. Wir begleiten dich über den gesamten Lebenszyklus deiner Immobilie — über 10 Jahre und darüber hinaus — mit Erfahrung, Wissen, Coaching und einer Begleitung, die weitergeht als klassische Verwaltung.",
} as const;

export const businessAreas = [
  {
    id: "begleitung",
    number: "01",
    title: "Begleitung",
    subtitle: "Dein Partner über den gesamten Lebenszyklus",
    description:
      "Eine Kapitalanlage endet nicht mit dem Kauf. Wir sind dein fester Ansprechpartner für den Alltag und die Haltedauer — persönlich, vorausschauend und mit dem Blick auf dein Vermögen, nicht nur auf das einzelne Objekt.",
    audience: "Eigentümer · Kapitalanleger",
    href: "/?anliegen=begleitung#kontakt",
    cta: "Gespräch vereinbaren",
    image: images.rathausNight,
    highlights: [
      "Persönlicher Ansprechpartner statt anonymer Verwaltung",
      "Kaufmännische und technische Objektbetreuung",
      "Entscheidungen vorbereiten, wenn es darauf ankommt",
      "Verlässliche Begleitung über 10 Jahre und darüber hinaus",
    ],
  },
  {
    id: "wachstum",
    number: "02",
    title: "Wachstum",
    subtitle: "Die erste Wohnung ist oft erst der Anfang.",
    description:
      "Wir unterstützen dich mit Erfahrung, Wissen und Coaching dabei, dein Portfolio weiterzuentwickeln — klar, ruhig und ohne Vertriebsdruck.",
    audience: "Kapitalanleger · Bestandshalter",
    href: "/?anliegen=wachstum#kontakt",
    cta: "Gespräch vereinbaren",
    image: images.kanalApartments,
    highlights: [
      "Coaching und Wissen rund um deine Kapitalanlage",
      "Unterstützung bei der Portfolioskalierung",
      "Strategische Begleitung über den Anlagezyklus",
      "Erfahrung aus eigenen und betreuten Beständen",
    ],
  },
] as const;

export const projects = [
  {
    name: "Wohnensemble Schwabing",
    location: "München",
    units: "24 Einheiten",
    volume: "€ 12,4 Mio.",
    yield: "4,1 % p.a.",
    type: "Asset Management",
    segment: "Bestandsimmobilie",
    image: images.kanalApartments,
  },
  {
    name: "Mehrfamilienhaus Westend",
    location: "Frankfurt am Main",
    units: "18 Einheiten",
    volume: "€ 8,7 Mio.",
    yield: "4,3 % p.a.",
    type: "Investment",
    segment: "Core-Plus",
    image: images.rathausMotion,
  },
  {
    name: "Wohnquartier Harvestehude",
    location: "Hamburg",
    units: "32 Einheiten",
    volume: "€ 19,2 Mio.",
    yield: "3,9 % p.a.",
    type: "Asset Management",
    segment: "Portfolio-Asset",
    image: images.leipzigSkyline,
  },
] as const;

export const insights = [
  {
    title: "Wohnimmobilien als Vermögensbaustein",
    category: "Investment",
    date: "März 2026",
    excerpt:
      "Warum Wohnimmobilien in deutschen Metropolregionen langfristig zu den stabilsten Anlageklassen zählen.",
    href: "/#insights",
  },
  {
    title: "Operative Exzellenz im Asset Management",
    category: "Asset Management",
    date: "Februar 2026",
    excerpt:
      "Wie professionelle Verwaltung die Nettomietrendite sichert und den Wert von Bestandsimmobilien erhält.",
    href: "/#insights",
  },
  {
    title: "Due Diligence bei Kapitalanlageobjekten",
    category: "Investment",
    date: "Januar 2026",
    excerpt:
      "Unsere Checkliste für die kaufmännische und technische Prüfung vor dem Erwerb.",
    href: "/#insights",
  },
] as const;

export const team = [
  {
    name: "Dominic Fänders",
    role: "Geschäftsführer",
    department: "Geschäftsführung",
    bio: "Verantwortlich für Strategie, Mandatsentwicklung und Investment.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Moritz Ertl",
    role: "Geschäftsführer",
    department: "Geschäftsführung",
    bio: "Verantwortlich für Asset Management und operative Immobiliensteuerung.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ferdinand Löbel",
    role: "Geschäftsführer",
    department: "Geschäftsführung",
    bio: "Teil der Geschäftsführung bei treuhans.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suzanne Pretzsch",
    role: "Deal Managerin",
    department: "Investment",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Anmarie Hampe",
    role: "Junior Property Managerin",
    department: "Asset Management",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elias Lüttig",
    role: "Junior Transaction Manager",
    department: "Investment",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tim Sacher",
    role: "Partner Management",
    department: "Partnerschaften",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mira",
    role: "Werkstudentin",
    department: "treuhans",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const acquisitionProfile = {
  intro:
    "Im Auftrag unserer Kunden und Investoren suchen wir Wohnimmobilien in Leipzig, Halle und Dresden — von klassischen Mehrfamilienhäusern bis zu Wohnungspaketen, Einzelwohnungen und distressed Objekten.",
  note:
    "Abweichungen sind je nach Objekt und Mandat möglich. Wenn du ein passendes Objekt hast, melde dich gerne — wir prüfen jedes Angebot individuell.",
  kpis: [
    {
      value: "6–50",
      label: "Wohneinheiten",
      detail: "Typische Objektgröße",
    },
    {
      value: "5 Mio.",
      label: "Investitionsvolumen",
      detail: "Bis zu EUR pro Objekt",
    },
    {
      value: "<20 %",
      label: "Gewerbeanteil",
      detail: "Wohnschwerpunkt im Portfolio",
    },
    {
      value: "3",
      label: "Kernregionen",
      detail: "Leipzig · Halle · Dresden",
    },
  ],
  objectTypes: [
    "Mehrfamilienhäuser",
    "Wohnungspakete",
    "Einzelwohnungen",
    "Distressed Objekte",
  ],
} as const;

export const jobOpenings = [
  {
    id: "property-manager",
    title: "Property Manager (m/w/d)",
    tasks: [
      "Eigenverantwortliche und strategische Betreuung eines eigenen Objektportfolios (je nach Schwerpunkt WEG-Mandate oder Miet- und Sondereigentumsverwaltungen)",
      "Beauftragung und Betreuung von Instandsetzungsmaßnahmen",
      "Vorbereitung von Entscheidungsvorlagen und Steuerung von externen Dienstleistern",
      "Verantwortung für die Einhaltung der kaufmännischen Budgets und wirtschaftlicher Objektstrategien",
      "Durchführung von protokollierten Objektbegehungen und Baustellenterminen",
    ],
    profile: [
      "Abgeschlossene Berufsausbildung wie beispielsweise Immobilienkauffrau/Immobilienkaufmann, Immobilienassistent, Bankkaufmann (m/w/d). Berufseinsteiger sind willkommen!",
      "Alternativ bzw. ergänzend erfolgreich abgeschlossene Aus- und Weiterbildung wie beispielsweise zum Immobilienfachwirt (m/w/d).",
      "Alternativ auch erfolgreich abgeschlossenes Fach- oder Hochschulstudium mit immobilienwirtschaftlichem, bautechnischem oder betriebswirtschaftlichem Schwerpunkt wie beispielsweise Immobilienmanagement, Immobilienwirtschaft, Betriebswirtschaftslehre, Real Estate oder Bauingenieurwesen. Praxisorientierte Architekten (m/w/d) oder Immobilienmakler (m/w/d) sind auch willkommen!",
      "Du hast bestenfalls Erfahrung in der Anwendung einer wohnungswirtschaftlichen Software. Gerne bringst du vertieftes Wissen in einem oder mehreren dieser drei Kompetenzfelder mit: WEG-Verwaltung, Mietverwaltung oder Transactions.",
    ],
    benefits: [
      "Zentrales Büro direkt am Leipziger Burgplatz",
      "kostenloses Deutschlandticket oder Tiefgaragenstellplatz",
      "31,5 Tage Urlaub",
      "attraktives Tech Bundle aus MacBook Air und iPhone 17",
      "freies Fortbildungsbudget von 2.000 EUR pro Jahr",
      "familiäre Arbeitsatmosphäre und offene Kultur im inhabergeführten Unternehmen",
    ],
  },
] as const;

/** Care-Paket — Daten aus treuhans-intranet (SEV / labels.ts) */
export const carePaket = {
  eyebrow: "Care-Paket",
  title: "Care-Paket für Kapitalanleger",
  description:
    "Professionelle Sondereigentumsverwaltung für deine Wohnung — mit festem Ansprechpartner, klaren Leistungen und planbaren Kosten.",
  plans: [
    {
      id: "care",
      name: "Care",
      price: "30 €",
      priceNote: "brutto / Monat",
      description: "Professionelle Betreuung deiner Immobilie",
      features: [
        "Fester Ansprechpartner für deine Immobilie",
        "Keine eigene Mieterkommunikation",
        "Jährliche Betriebskostenabrechnung",
        "Reparaturen und Handwerkerkoordination",
        "Abwicklung von Versicherungsschäden",
        "Vertretung gegenüber der WEG",
        "Mieterhöhung optional (300 € je Durchführung)",
        "Neuvermietung optional (1.200 € je Vermietung)",
      ],
    },
    {
      id: "care-plus",
      name: "Care+",
      price: "75 €",
      priceNote: "brutto / Monat",
      description: "Professionelle Betreuung inkl. Vermietungsflatrate",
      highlighted: true,
      features: [
        "Alles aus Care",
        "Mieterhöhung inklusive",
        "Neuvermietung unbegrenzt inklusive",
        "Planbare Verwaltungskosten ohne Überraschungen",
      ],
    },
  ],
  comparison: [
    {
      title: "Du hast einen festen Ansprechpartner für deine Immobilie.",
      care: true,
      carePlus: true,
    },
    {
      title: "Du musst dich nicht um deinen Mieter kümmern.",
      care: true,
      carePlus: true,
    },
    {
      title: "Wir erstellen jährlich die Betriebskostenabrechnung.",
      care: true,
      carePlus: true,
    },
    {
      title: "Wir organisieren Reparaturen und koordinieren Handwerker.",
      care: true,
      carePlus: true,
    },
    {
      title: "Wir übernehmen die komplette Abwicklung von Versicherungsschäden.",
      care: true,
      carePlus: true,
    },
    {
      title: "Wir vertreten deine Interessen gegenüber der WEG.",
      care: true,
      carePlus: true,
    },
    {
      title:
        "Wir prüfen jedes Jahr mögliche Mieterhöhungen und setzen sie nach deiner Freigabe um.",
      care: "300 € je Durchführung",
      carePlus: "Inklusive",
    },
    {
      title:
        "Wir finden nach einem Mieterwechsel einen neuen Mieter und übernehmen die komplette Neuvermietung.",
      care: "1.200 € je Vermietung",
      carePlus: "Unbegrenzt inklusive",
    },
  ],
} as const;

/** treuhans App — Eigentümer-Portal (app.treuhans.de) */
export const treuhansApp = {
  eyebrow: "treuhans App",
  title: "Deine Immobilie. Immer im Blick.",
  description:
    "In der treuhans App behältst du den Überblick über deine Immobilie und kommende Entscheidungen — klar, digital und jederzeit erreichbar.",
  loginUrl: "https://app.treuhans.de/login",
  features: [
    {
      title: "Immobilien-Überblick",
      text: "Dein Immobilienportfolio in der Hosentasche. Immer dabei.",
    },
    {
      title: "Entscheidungen digital",
      text: "Freigaben und Rückmeldungen bequem online erledigen.",
    },
    {
      title: "Zentrale Dokumente",
      text: "Wichtige Unterlagen zu deiner Immobilie jederzeit griffbereit.",
    },
    {
      title: "Zugang zu exklusiven Immobilienangeboten",
      text: "Sieh Off-Market-Objekte und selektierte Angebote, bevor sie öffentlich vermarktet werden.",
    },
    {
      title: "Academy",
      text: "Videos und Antworten rund um deine Immobilie und die besten Investment-Strategien.",
    },
    {
      title: "Sicherer Zugang",
      text: "Anmeldung per Magic Link — optional noch schneller mit Passkey.",
    },
  ],
} as const;

export const contactPoints = [
  {
    title: "Begleitung",
    description: "Für Eigentümer, die nach dem Kauf einen langfristigen Partner suchen.",
    href: "/?anliegen=begleitung#kontakt",
    label: "Gespräch vereinbaren",
  },
  {
    title: "Wachstum",
    description: "Für Kapitalanleger, die ihr Portfolio weiterentwickeln wollen.",
    href: "/?anliegen=wachstum#kontakt",
    label: "Gespräch vereinbaren",
  },
  {
    title: "Partnerschaften",
    description: "Für Kapitalanlagevertriebe und institutionelle Partner.",
    href: "/?anliegen=partnerschaft#kontakt",
    label: "Partnerschaft anfragen",
  },
] as const;
