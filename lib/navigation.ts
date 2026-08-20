export const mainNav = [
  { href: "/#start", label: "Startseite", id: "start" },
  { href: "/#geschaeftsfelder", label: "Geschäftsfelder", id: "geschaeftsfelder" },
  { href: "/#ueber-uns", label: "Mission", id: "ueber-uns" },
  { href: "/#karriere", label: "Karriere", id: "karriere" },
] as const;

export const footerNav = [
  { href: "/#kontakt", label: "Kontakt", id: "kontakt" },
  { href: "/#karriere", label: "Karriere", id: "karriere" },
  {
    href: "https://app.treuhans.de/login",
    label: "Kundenportal",
    id: "kundenportal",
    external: true,
  },
  { href: "/impressum", label: "Impressum", id: "impressum" },
  { href: "/datenschutz", label: "Datenschutz", id: "datenschutz" },
] as const;

export const businessFieldLinks = [
  { href: "/#begleitung", label: "Begleitung", id: "begleitung" },
  { href: "/#wachstum", label: "Wachstum", id: "wachstum" },
] as const;
