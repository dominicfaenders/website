import { company, jobOpenings } from "@/lib/content";

export default function KarriereSection() {
  return (
    <section id="karriere" className="bg-[var(--alt-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            Karriere
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
            Werde Teil von treuhans
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--alt-muted)]">
            Du denkst unternehmerisch und willst operative Exzellenz liefern? Dann melde dich.
          </p>
        </div>

        <div className="mt-20 space-y-6">
          {jobOpenings.map((job) => (
            <article key={job.id} className="rounded-2xl bg-white px-8 py-8 lg:px-10 lg:py-10">
              <div className="lg:flex lg:items-start lg:justify-between lg:gap-10">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--alt-ink)]">
                    {job.title}
                  </h3>
                </div>
                <a
                  href={`mailto:${company.email}?subject=Bewerbung%3A%20${encodeURIComponent(job.title)}`}
                  className="mt-6 inline-flex shrink-0 rounded-full border border-[var(--alt-line)] px-6 py-3 text-[14px] font-medium text-[var(--alt-ink)] transition-colors hover:border-[var(--alt-ink)] lg:mt-0"
                >
                  Bewerben
                </a>
              </div>

              <details className="group mt-6 border-t border-[var(--alt-line)] pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-semibold text-[var(--alt-ink)] [&::-webkit-details-marker]:hidden">
                  <span>Stellenbeschreibung</span>
                  <span
                    aria-hidden="true"
                    className="text-xl leading-none font-normal text-[var(--alt-muted)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-5 space-y-6 text-[15px] leading-relaxed text-[var(--alt-muted)]">
                  <div>
                    <p className="mb-3 text-[13px] font-semibold text-[var(--alt-ink)]">
                      Deine Aufgaben
                    </p>
                    <ul className="space-y-2.5">
                      {job.tasks.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--alt-ink)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-[13px] font-semibold text-[var(--alt-ink)]">
                      Dein Profil
                    </p>
                    <ul className="space-y-2.5">
                      {job.profile.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--alt-ink)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-[13px] font-semibold text-[var(--alt-ink)]">
                      Deine Benefits bei treuhans
                    </p>
                    <ul className="space-y-2.5">
                      {job.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--alt-ink)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
