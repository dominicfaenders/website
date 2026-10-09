import type { Metadata } from "next";
import { LegalPageContent, LegalSection } from "@/app/components/LegalSection";
import PageHero from "@/app/components/PageHero";
import { company } from "@/lib/content";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der treuhans GmbH.",
};

export default function ImpressumPage() {
  return (
    <main>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <LegalPageContent>
        <LegalSection title="Angaben gemäß § 5 DDG">
          <p>
            {legal.companyName}
            <br />
            {legal.address}
          </p>
          <p>
            <span className="text-[var(--alt-ink)]">Vertreten durch die Geschäftsführung:</span>
            <br />
            {legal.managingDirectors.join(", ")}
          </p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p>
            Telefon:{" "}
            <a href={company.phoneHref} className="text-[var(--alt-ink)] underline decoration-[var(--alt-line)] underline-offset-2 transition-colors hover:decoration-[var(--alt-ink)]">
              {company.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-[var(--alt-ink)] underline decoration-[var(--alt-line)] underline-offset-2 transition-colors hover:decoration-[var(--alt-ink)]"
            >
              {company.email}
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.treuhans.de"
              className="text-[var(--alt-ink)] underline decoration-[var(--alt-line)] underline-offset-2 transition-colors hover:decoration-[var(--alt-ink)]"
            >
              www.treuhans.de
            </a>
          </p>
        </LegalSection>

        <LegalSection title="Registereintrag">
          <p>
            Registergericht: {legal.registerCourt}
            <br />
            Registernummer: {legal.registerNumber}
          </p>
        </LegalSection>

        <LegalSection title="Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            {legal.vatId}
          </p>
        </LegalSection>

        <LegalSection title="Unternehmensgegenstand">
          <p>{legal.businessPurpose}</p>
        </LegalSection>

        <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>
            {legal.companyName}
            <br />
            {legal.address}
            <br />
            {legal.contentResponsible}
          </p>
        </LegalSection>

        <LegalSection title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--alt-ink)] underline decoration-[var(--alt-line)] underline-offset-2 transition-colors hover:decoration-[var(--alt-ink)]"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .
          </p>
          <p>Unsere E-Mail-Adresse findest du oben im Impressum.</p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </LegalSection>
      </LegalPageContent>
    </main>
  );
}
