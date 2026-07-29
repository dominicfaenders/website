import type { Metadata } from "next";
import { LegalPageContent, LegalSection } from "@/app/components/LegalSection";
import PageHero from "@/app/components/PageHero";
import { company } from "@/lib/content";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der treuhans GmbH gemäß DSGVO.",
};

const linkClass =
  "text-[var(--alt-ink)] underline decoration-[var(--alt-line)] underline-offset-2 transition-colors hover:decoration-[var(--alt-ink)]";

export default function DatenschutzPage() {
  return (
    <main>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <LegalPageContent>
        <p className="text-[var(--alt-ink)]">
          Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Erklärung informiert dich
          über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten bei Nutzung der
          Website <strong>www.treuhans.de</strong> sowie über deine Rechte nach der
          Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
        </p>

        <LegalSection title="1. Verantwortlicher">
          <p>Verantwortlicher im Sinne der DSGVO ist:</p>
          <p>
            {legal.companyName}
            <br />
            {legal.address}
            <br />
            Telefon:{" "}
            <a href={company.phoneHref} className={linkClass}>
              {company.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${company.email}`} className={linkClass}>
              {company.email}
            </a>
          </p>
          <p>
            Ein betrieblicher Datenschutzbeauftragter ist derzeit nicht bestellt. Für
            Datenschutzanfragen wende dich bitte an die oben genannte E-Mail-Adresse.
          </p>
        </LegalSection>

        <LegalSection title="2. Begriffe und Rechtsgrundlagen">
          <p>
            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen (z. B. Name, E-Mail-Adresse, IP-Adresse).
          </p>
          <p>Soweit in dieser Erklärung nicht anders angegeben, stützen wir Verarbeitungen auf:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Art. 6 Abs. 1 lit. b DSGVO — Vertragserfüllung bzw. vorvertragliche Maßnahmen
            </li>
            <li>Art. 6 Abs. 1 lit. c DSGVO — Erfüllung rechtlicher Verpflichtungen</li>
            <li>
              Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse (z. B. sicherer und stabiler
              Betrieb der Website, Bearbeitung allgemeiner Anfragen)
            </li>
            <li>
              Art. 6 Abs. 1 lit. a DSGVO — Einwilligung, soweit wir eine solche einholen
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Bereitstellung der Website und Server-Logfiles">
          <p>
            Beim Aufruf unserer Website übermittelt dein Browser automatisch Informationen an den
            Server. Diese Daten werden in Server-Logfiles verarbeitet. Erfasst werden insbesondere:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>IP-Adresse des anfragenden Endgeräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>angefragte URL / Datei</li>
            <li>Referrer-URL (zuvor besuchte Seite, sofern übermittelt)</li>
            <li>Browser, Betriebssystem und Gerätegröße / User-Agent</li>
            <li>Statuscode der Serverantwort und übertragene Datenmenge</li>
          </ul>
          <p>
            Zweck ist die technische Auslieferung der Website, die Sicherstellung der
            Systemsicherheit, die Fehleranalyse sowie die Abwehr von Missbrauch. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden in der Regel nach spätestens 30 Tagen
            gelöscht oder anonymisiert, sofern keine längere Aufbewahrung zu Beweis- oder
            Sicherheitszwecken erforderlich ist.
          </p>
        </LegalSection>

        <LegalSection title="4. Hosting und Auftragsverarbeitung">
          <p>
            Unsere Website wird bei folgendem Hosting-Anbieter betrieben:
          </p>
          <p>
            {legal.hosting.name}
            <br />
            {legal.hosting.address}
            <br />
            Website:{" "}
            <a href={legal.hosting.website} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {legal.hosting.website}
            </a>
            <br />
            Datenschutz:{" "}
            <a href={legal.hosting.privacy} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {legal.hosting.privacy}
            </a>
          </p>
          <p>
            Der Hoster verarbeitet personenbezogene Daten (insbesondere IP-Adressen, Meta- und
            Kommunikationsdaten, Zugriffsdaten), die beim Besuch der Website anfallen. Der Einsatz
            erfolgt zur sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
            (Art. 6 Abs. 1 lit. f DSGVO). Soweit erforderlich, besteht mit dem Hoster ein Vertrag
            zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
          </p>
          <p>
            Vercel ist ein Unternehmen mit Sitz in den USA. Eine Übermittlung personenbezogener
            Daten in die USA kann daher nicht ausgeschlossen werden. Die Übermittlung erfolgt — soweit
            einschlägig — auf Grundlage geeigneter Garantien nach Art. 44 ff. DSGVO (insbesondere
            Standardvertragsklauseln der Europäischen Kommission) sowie ergänzender Maßnahmen des
            Anbieters. Nähere Informationen findest du in der Datenschutzerklärung von Vercel.
          </p>
        </LegalSection>

        <LegalSection title="5. Kontaktformular, E-Mail und Telefon">
          <p>
            Wenn du uns über das Kontaktformular, per E-Mail oder telefonisch kontaktierst,
            verarbeiten wir die von dir mitgeteilten Daten. Dazu können insbesondere gehören: Name,
            E-Mail-Adresse, Telefonnummer, gewähltes Anliegen und Inhalt der Nachricht sowie
            technische Metadaten der Übermittlung.
          </p>
          <p>
            Zweck ist die Bearbeitung und Beantwortung deiner Anfrage sowie die ggf. erforderliche
            Nachkommunikation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage mit
            einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt; im Übrigen Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an effektiver Kommunikation).
          </p>
          <p>
            Das Kontaktformular auf dieser Website dient der strukturierten Erfassung deiner
            Anfrage. Solange keine automatisierte Anbindung an externe Versand- oder CRM-Dienste
            aktiv ist, erfolgt die Weiterverarbeitung durch uns (z. B. per E-Mail an{" "}
            {company.email}). Sobald wir zusätzliche Dienstleister für den Versand oder die
            Verwaltung von Anfragen einsetzen, werden wir diese Erklärung entsprechend aktualisieren
            und — soweit erforderlich — Auftragsverarbeitungsverträge schließen.
          </p>
          <p>
            Wir speichern Anfragedaten nur so lange, wie es für die Bearbeitung erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen. Im geschäftlichen Kontext können
            Aufbewahrungsfristen von bis zu zehn Jahren gelten (handels- und steuerrechtliche
            Vorgaben).
          </p>
        </LegalSection>

        <LegalSection title="6. Bewerbungen">
          <p>
            Wenn du dich auf ausgeschriebene Stellen oder initiativ per E-Mail bewirbst, verarbeiten
            wir die von dir übermittelten Bewerbungsdaten (z. B. Name, Kontaktdaten, Lebenslauf,
            Anschreiben und Anlagen) zur Durchführung des Bewerbungsverfahrens.
          </p>
          <p>
            Rechtsgrundlage ist § 26 BDSG i. V. m. Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1
            lit. f DSGVO, soweit die Verarbeitung für die Abwicklung des Verfahrens erforderlich ist.
            Bewerbungsunterlagen werden nach Abschluss des Verfahrens gelöscht bzw. vernichtet —
            in der Regel spätestens nach sechs Monaten —, sofern keine Einwilligung zur längeren
            Speicherung vorliegt oder gesetzliche Pflichten entgegenstehen.
          </p>
        </LegalSection>

        <LegalSection title="7. Schriftarten">
          <p>
            Diese Website verwendet die Schriftart „DM Sans“ über die Next.js-Font-Optimierung. Die
            Schriftdateien werden beim Build der Website eingebunden und anschließend von unserem
            eigenen Hosting ausgeliefert. Beim Aufruf der Website durch dich findet keine Verbindung
            zu Google-Font-Servern statt; es werden zu diesem Zweck keine personenbezogenen Daten an
            Google übermittelt.
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies und Analyse">
          <p>
            Diese Website setzt derzeit keine Tracking-, Remarketing-, Marketing- oder
            Analyse-Cookies ein. Es werden keine Nutzerprofile zu Werbezwecken erstellt. Soweit der
            Hosting-Anbieter technisch notwendige Cookies oder vergleichbare Technologien für den
            Betrieb, die Sicherheit oder die Lastverteilung einsetzt, erfolgt dies auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG, soweit einschlägig.
          </p>
          <p>
            Falls wir künftig Analyse- oder Marketing-Tools einsetzen, holen wir — soweit
            erforderlich — deine Einwilligung ein und aktualisieren diese Datenschutzerklärung.
          </p>
        </LegalSection>

        <LegalSection title="9. Externe Links und Eigentümerportal">
          <p>
            Unsere Website enthält Links zu externen Angeboten, insbesondere zum Eigentümer- bzw.
            Kundenportal unter{" "}
            <a href={legal.portalUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {legal.portalUrl}
            </a>
            . Beim Anklicken solcher Links verlässt du diese Website. Für die dortige Verarbeitung
            personenbezogener Daten (Login, Vertragsdaten, Zahlungsdaten usw.) ist der jeweilige
            Betreiber bzw. die jeweilige Anwendung verantwortlich. Es gelten die dort
            bereitgestellten Datenschutzhinweise.
          </p>
        </LegalSection>

        <LegalSection title="10. Empfänger und Weitergabe">
          <p>
            Eine Weitergabe deiner personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur
            Erfüllung der genannten Zwecke erforderlich ist, eine gesetzliche Pflicht besteht, du
            eingewilligt hast oder wir uns auf ein berechtigtes Interesse berufen können. Mögliche
            Empfängergruppen sind insbesondere:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Hosting- und IT-Dienstleister (Auftragsverarbeiter)</li>
            <li>Kommunikationsdienstleister (z. B. E-Mail-Infrastruktur)</li>
            <li>
              Behörden, Gerichte oder Rechtsberater, soweit eine gesetzliche Pflicht oder
              Rechtsverteidigung dies erfordert
            </li>
          </ul>
          <p>
            Eine Verkaufsweitergabe personenbezogener Daten zu Werbezwecken findet nicht statt.
          </p>
        </LegalSection>

        <LegalSection title="11. Speicherdauer">
          <p>
            Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Entfällt der
            Speicherungszweck oder läuft eine Frist ab, werden die Daten gelöscht oder — soweit
            gesetzlich vorgeschrieben — gesperrt bzw. eingeschränkt verarbeitet.
          </p>
        </LegalSection>

        <LegalSection title="12. Datensicherheit">
          <p>
            Wir treffen technische und organisatorische Maßnahmen, um deine Daten gegen Verlust,
            Manipulation und unbefugten Zugriff zu schützen. Die Website nutzt eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du am „https://“ in der
            Adresszeile und am Schloss-Symbol deines Browsers. Absolute Sicherheit bei der
            Übertragung über das Internet können wir nicht garantieren.
          </p>
        </LegalSection>

        <LegalSection title="13. Keine automatisierte Entscheidungsfindung">
          <p>
            Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne
            von Art. 22 DSGVO statt, die dir gegenüber rechtliche Wirkung entfaltet oder dich in
            ähnlicher Weise erheblich beeinträchtigt.
          </p>
        </LegalSection>

        <LegalSection title="14. Deine Rechte">
          <p>
            Du hast gegenüber uns — im Rahmen der gesetzlichen Voraussetzungen — insbesondere
            folgende Rechte:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen Verarbeitungen auf Basis von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
            <li>
              Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
            </li>
          </ul>
          <p>
            Zur Ausübung deiner Rechte genügt eine formlose Mitteilung an{" "}
            <a href={`mailto:${company.email}`} className={linkClass}>
              {company.email}
            </a>
            .
          </p>
          <p>
            Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
            Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <p>
            {legal.privacyAuthority.name}
            <br />
            {legal.privacyAuthority.address}
            <br />
            <a
              href={legal.privacyAuthority.website}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {legal.privacyAuthority.website}
            </a>
          </p>
        </LegalSection>

        <LegalSection title="15. Aktualität">
          <p>
            Diese Datenschutzerklärung hat den Stand {legal.privacyLastUpdated}. Bei Änderungen
            unseres Angebots, neuer Tools oder geänderter Rechtslage passen wir die Erklärung an.
          </p>
        </LegalSection>
      </LegalPageContent>
    </main>
  );
}
