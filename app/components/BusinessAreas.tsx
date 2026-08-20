import Image from "next/image";
import { businessAreas, businessAreasIntro } from "@/lib/content";

export default function BusinessAreas() {
  return (
    <section id="geschaeftsfelder" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 lg:px-10 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            {businessAreasIntro.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
            {businessAreasIntro.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--alt-muted)]">
            {businessAreasIntro.description}
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {businessAreas.map((area) => (
            <div key={area.id} id={area.id}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--alt-bg-subtle)]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-semibold tracking-tight text-[var(--alt-ink)]">
                  {area.title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--alt-muted)]">{area.subtitle}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--alt-muted)]">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {area.highlights.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--alt-ink)]"
                    >
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--alt-ink)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
