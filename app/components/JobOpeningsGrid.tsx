import CheckList from "./CheckList";
import { company, jobOpenings } from "@/lib/content";

export default function JobOpeningsGrid() {
  return (
    <div className="grid gap-px bg-border lg:grid-cols-3">
      {jobOpenings.map((job) => (
        <article key={job.id} className="flex flex-col bg-forest p-8 lg:p-10">
          <h3 className="text-lg font-semibold text-warm-white">{job.title}</h3>

          <details className="group mt-6 border border-border bg-forest-elevated">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[11px] font-medium tracking-[0.16em] uppercase text-gold transition-colors hover:text-gold-light [&::-webkit-details-marker]:hidden">
              <span>Stellenbeschreibung</span>
              <span
                aria-hidden="true"
                className="text-base leading-none transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="space-y-5 border-t border-border px-4 py-5 text-sm leading-relaxed text-warm-white-soft">
              <div>
                <p className="mb-3 text-[11px] font-medium tracking-[0.16em] uppercase text-gold">
                  Deine Aufgaben
                </p>
                <CheckList items={job.tasks} />
              </div>
              <div>
                <p className="mb-3 text-[11px] font-medium tracking-[0.16em] uppercase text-gold">
                  Dein Profil
                </p>
                <CheckList items={job.profile} />
              </div>
              <div>
                <p className="mb-3 text-[11px] font-medium tracking-[0.16em] uppercase text-gold">
                  Deine Benefits bei treuhans
                </p>
                <CheckList items={job.benefits} />
              </div>
            </div>
          </details>

          <a
            href={`mailto:${company.email}?subject=Bewerbung%3A%20${encodeURIComponent(job.title)}`}
            className="mt-6 inline-flex text-[11px] font-medium tracking-[0.18em] uppercase text-gold transition-colors hover:text-gold-light"
          >
            Jetzt bewerben →
          </a>
        </article>
      ))}
    </div>
  );
}
