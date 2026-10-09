import { company } from "./content";

/** Persönliche, diskrete Job-Einladung — Zielseite hinter dem QR-Code */
export const einladung = {
  path: "/fuer-dich",
  kartePath: "/fuer-dich/karte",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.treuhans.de",
  cardLine: "Ein Gedanke für dich.",
  cardHint: "Nur für dich — diskret scannen.",
  eyebrow: "Eine persönliche Einladung",
  title: "Deine Art, Menschen zu empfangen, bleibt hängen.",
  lead:
    "Heute war jemand von treuhans bei euch zu Gast. Deine Aufmerksamkeit und Ruhe sind genau das, was wir in unserem Team suchen.",
  body: [
    "Wir sind ein Immobilienunternehmen am Leipziger Burgplatz. Wir betreuen Eigentümer langfristig — persönlich, verlässlich und ohne Anonymität.",
    "Gastfreundschaft, Klarheit im Umgang und ein gutes Gespür für Menschen sind bei uns keine Nebensache. Wenn du Lust hast, diese Stärken in einem anderen Umfeld einzusetzen, würden wir dich gerne unverbindlich kennenlernen.",
  ],
  closing: "Kein Bewerbungsmarathon. Nur ein ehrliches Gespräch — diskret und nur zwischen uns.",
  ctaLabel: "Kurz melden",
  secondaryLabel: "Offene Stelle ansehen",
  secondaryHref: "/#karriere",
  emailSubject: "Persönliche Einladung — Gespräch",
  emailBody:
    "Hallo treuhans-Team,\n\nich habe eure Einladung gesehen und würde mich gerne kurz vorstellen.\n\nViele Grüße",
} as const;

export function getEinladungUrl() {
  return `${einladung.siteUrl}${einladung.path}`;
}

export function getEinladungMailto() {
  const subject = encodeURIComponent(einladung.emailSubject);
  const body = encodeURIComponent(einladung.emailBody);
  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}
