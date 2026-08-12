import { company } from "./content";

export const legal = {
  companyName: "treuhans GmbH",
  legalForm: "Gesellschaft mit beschränkter Haftung",
  address: `${company.address}, ${company.city}`,
  registerCourt: "Amtsgericht Leipzig",
  registerNumber: "HRB 44074",
  vatId: "DE455593227",
  managingDirectors: ["Moritz Ertl", "Dominic Fänders", "Ferdinand Löbel"],
  businessPurpose:
    "Die Immobilienverwaltung im Sinne des Wohnungseigentumsgesetzes, Sondereigentums- und Mietverwaltung sowie alle damit einhergehenden Tätigkeiten; der Erwerb, die Verwaltung, die Veräußerung und die Vermittlung von Immobilien sowie damit zusammenhängende Dienstleistungen im Bereich Asset Management und Investment.",
  contentResponsible: "Moritz Ertl, Dominic Fänders, Ferdinand Löbel",
  privacyAuthority: {
    name: "Sächsischer Datenschutzbeauftragter",
    address: "Devrientstraße 5, 01067 Dresden",
    website: "https://www.saechsdsb.de",
  },
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    website: "https://vercel.com",
    privacy: "https://vercel.com/legal/privacy-policy",
  },
  portalUrl: "https://app.treuhans.de",
  privacyLastUpdated: "Juli 2026",
} as const;
