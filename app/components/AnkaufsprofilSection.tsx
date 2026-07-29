import Link from "next/link";
import { acquisitionProfile } from "@/lib/content";

export default function AnkaufsprofilSection() {
  return (
    <section id="ankaufsprofil" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            Ankaufsprofil
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
            Was unsere Investoren suchen
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--alt-muted)]">
            {acquisitionProfile.intro}
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {acquisitionProfile.kpis.map((kpi) => (
            <article key={kpi.label} className="text-center lg:text-left">
              <p className="text-5xl font-semibold tracking-tight text-[var(--alt-ink)] lg:text-6xl">
                {kpi.value}
              </p>
              <p className="mt-3 text-[15px] font-medium text-[var(--alt-ink)]">{kpi.label}</p>
              <p className="mt-1 text-[14px] text-[var(--alt-muted)]">{kpi.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-[var(--alt-line)] pt-16 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-medium text-[var(--alt-muted)] uppercase">Region</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--alt-ink)]">
              Leipzig · Halle · Dresden
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--alt-muted)]">
              Fokus auf wirtschaftlich starke Lagen in Mitteldeutschland — mit klarer
              Wohnimmobilien-Ausrichtung.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium text-[var(--alt-muted)] uppercase">Objektarten</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {acquisitionProfile.objectTypes.map((type) => (
                <li
                  key={type}
                  className="rounded-full bg-[var(--alt-bg-subtle)] px-5 py-2.5 text-[14px] font-medium text-[var(--alt-ink)]"
                >
                  {type}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] leading-relaxed text-[var(--alt-muted)]">
              {acquisitionProfile.note}
            </p>
            <Link
              href="/?anliegen=investment#kontakt"
              className="mt-8 inline-flex rounded-full bg-[var(--alt-ink)] px-7 py-3.5 text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Objekt anbieten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
