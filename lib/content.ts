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

export const businessAreas = [
  {
    id: "investment",
    number: "01",
    title: "Investment",
    subtitle: "Vertrieb von Kapitalanlageimmobilien an Endkunden",
    description:
      "Du suchst Kapitalanlageimmobilien mit langfristigem Wertpotenzial? Wir identifizieren, strukturieren und vertreiben für dich selektierte Objekte in wirtschaftlich starken Lagen.",
    audience: "Privatanleger · Kapitalanleger · Investoren",
    href: "/investment",
    cta: "Investment-Beratung anfragen",
    image: images.kanalApartments,
    highlights: [
      "Selektierte Objekte an wachstumsstarken Standorten",
      "Individuelle Anlagestrategie und Strukturierung für dich",
      "Begleitung bei Finanzierung und Erwerb",
      "Langfristige Betreuung über den Anlagezyklus",
    ],
  },
  {
    id: "asset-management",
    number: "02",
    title: "Asset Management",
    subtitle: "Verwaltung und operative Steuerung von Immobilienvermögen",
    description:
      "Du willst deine Wohnimmobilien professionell betreut wissen? Wir übernehmen für dich Verwaltung und operative Steuerung — von der Bestandsoptimierung bis zum laufenden Reporting.",
    audience: "Eigentümer · Investoren · Family Offices",
    href: "/asset-management",
    cta: "Asset Management anfragen",
    image: images.rathausNight,
    highlights: [
      "Technische & kaufmännische Objektbetreuung",
      "Mieter-Management und Instandhaltungssteuerung",
      "Quartals-Reporting und Portfolioanalyse",
      "Strategische Wertsteigerung und Exit-Vorbereitung",
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
    teaser: "Operative Betreuung und Steuerung von Wohnimmobilien im Mandatsportfolio.",
    description:
      "Als Property Manager übernimmst du die kaufmännische und operative Betreuung von Wohnimmobilien. Du sorgst für reibungslose Abläufe im Tagesgeschäft, hältst den Kontakt zu Mietern und Dienstleistern und unterstützt die Wertentwicklung der Objekte.",
    tasks: [
      "Technische und kaufmännische Objektbetreuung",
      "Koordination von Instandhaltung, Modernisierung und Dienstleistern",
      "Mieterkommunikation und laufende Verwaltungsprozesse",
      "Unterstützung bei Reporting und Bestandsentwicklung",
    ],
    profile: [
      "Erfahrung in der Immobilienverwaltung oder im Asset Management",
      "Strukturierte, lösungsorientierte Arbeitsweise",
      "Verhandlungssicheres Auftreten und unternehmerisches Denken",
    ],
  },
  {
    id: "transaction-manager",
    title: "Transaction Manager (m/w/d)",
    teaser: "Strukturierte Begleitung von Transaktionen entlang des Investmentprozesses.",
    description:
      "Als Transaction Manager begleitest du Erwerb, Strukturierung und Abwicklung von Kapitalanlageimmobilien. Du arbeitest eng mit Eigentümern, Investoren und externen Partnern zusammen und sorgst für belastbare Entscheidungsgrundlagen.",
    tasks: [
      "Koordination von Akquisitions- und Verkaufsprozessen",
      "Due-Diligence-Prozesse kaufmännisch und organisatorisch begleiten",
      "Abstimmung mit Eigentümern, Investoren, Maklern und Beratern",
      "Aufbereitung von Unterlagen, Terminen und Entscheidungsvorlagen",
    ],
    profile: [
      "Erfahrung im Transaktions- oder Investmentumfeld von Immobilien",
      "Sorgfalt, Zahlenaffinität und hohe Prozessdisziplin",
      "Kommunikationsstärke und Verantwortungsbewusstsein",
    ],
  },
  {
    id: "concierge",
    title: "Concierge (m/w/d)",
    teaser: "Erster Ansprechpartner für Kunden, Investoren und Partner — persönlich und verlässlich.",
    description:
      "Als Concierge bist du die zentrale Schnittstelle für Anfragen rund um Verwaltung, Investment und Partnerschaften. Du sorgst für schnelle, klare und wertschätzende Kommunikation und leitest Anliegen strukturiert an das richtige Team weiter.",
    tasks: [
      "Annahme und Qualifizierung eingehender Anfragen",
      "Koordination von Terminen, Rückrufen und Informationsflüssen",
      "Unterstützung bei der Betreuung von Kunden und Investoren",
      "Schnittstelle zwischen Kunden, Team und Geschäftsführung",
    ],
    profile: [
      "Ausgeprägte Serviceorientierung und sicheres Auftreten",
      "Organisationstalent und hohe Kommunikationskompetenz",
      "Idealerweise Erfahrung im Kundenkontakt oder in der Immobilienbranche",
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
    title: "Asset Management",
    description: "Für Eigentümer und Investoren mit Bestandsimmobilien.",
    href: "/?anliegen=asset-management#kontakt",
    label: "Verwaltung anfragen",
  },
  {
    title: "Investment",
    description: "Für Privatanleger und Kapitalanleger mit Anlageinteresse.",
    href: "/?anliegen=investment#kontakt",
    label: "Beratung anfragen",
  },
  {
    title: "Partnerschaften",
    description: "Für Projektentwickler, Makler und institutionelle Partner.",
    href: "/?anliegen=partnerschaft#kontakt",
    label: "Partnerschaft anfragen",
  },
] as const;
