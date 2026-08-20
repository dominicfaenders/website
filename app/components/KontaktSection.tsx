import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { company } from "@/lib/content";

export default function KontaktSection() {
  return (
    <section id="kontakt" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            Kontakt
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
            Lass uns sprechen
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--alt-muted)]">
            Ob Betreuung, Portfoliowachstum oder Partnerschaft — wir freuen uns auf deine Nachricht.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-[var(--alt-ink)]">
              Schreib uns
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--alt-muted)]">
              Schildere uns dein Anliegen — wir finden den richtigen Ansprechpartner.
            </p>
            <div className="mt-10 space-y-6 text-[15px]">
              <div>
                <p className="text-[13px] text-[var(--alt-muted)]">E-Mail</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block font-medium text-[var(--alt-ink)]"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-[13px] text-[var(--alt-muted)]">Telefon</p>
                <a href={company.phoneHref} className="mt-1 block font-medium text-[var(--alt-ink)]">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-[13px] text-[var(--alt-muted)]">Adresse</p>
                <p className="mt-1 font-medium text-[var(--alt-ink)]">
                  {company.address}
                  <br />
                  {company.city}
                </p>
              </div>
            </div>
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
