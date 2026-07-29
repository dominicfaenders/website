import Link from "next/link";
import { carePaket } from "@/lib/content";

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="font-medium text-[var(--alt-ink)]">Inklusive</span>;
  }
  if (value === false) {
    return <span className="text-[var(--alt-muted)]">—</span>;
  }
  return <span className="font-medium text-[var(--alt-ink)]">{value}</span>;
}

export default function CarePaketSection() {
  return (
    <section id="care" className="bg-[var(--alt-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-12 lg:px-10 lg:pb-36 lg:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            {carePaket.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
            {carePaket.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--alt-muted)]">
            {carePaket.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {carePaket.plans.map((plan) => {
            const isPlus = "highlighted" in plan && plan.highlighted;
            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl bg-white px-8 py-10 ring-1 ring-[var(--alt-line)] transition-[box-shadow,ring-width] duration-300 hover:ring-[3px] hover:ring-[var(--alt-ink)] lg:px-10 lg:py-12`}
              >
                {isPlus && (
                  <span className="absolute top-0 left-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--alt-ink)] px-4 py-1.5 text-[13px] font-medium tracking-wide text-white">
                    Meistgewählt
                  </span>
                )}
                <div className="w-fit">
                  <h3 className="text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
                    {plan.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-[2px] w-full bg-[var(--alt-ink)]/30"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-[var(--alt-muted)]">{plan.priceNote}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--alt-muted)]">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--alt-ink)]"
                    >
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--alt-ink)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-20 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--alt-line)]">
                <th className="pb-4 pr-6 text-[13px] font-semibold text-[var(--alt-muted)]">
                  Leistung
                </th>
                <th className="pb-4 px-4 text-2xl font-semibold tracking-tight text-[var(--alt-ink)]">
                  Care
                </th>
                <th className="pb-4 pl-4 text-2xl font-semibold tracking-tight text-[var(--alt-ink)]">
                  Care+
                </th>
              </tr>
            </thead>
            <tbody>
              {carePaket.comparison.map((row) => (
                <tr key={row.title} className="border-b border-[var(--alt-line)]">
                  <td className="py-5 pr-6 text-[15px] leading-relaxed text-[var(--alt-ink)]">
                    {row.title}
                  </td>
                  <td className="py-5 px-4 text-[14px] text-[var(--alt-muted)]">
                    <CellValue value={row.care} />
                  </td>
                  <td className="py-5 pl-4 text-[14px] text-[var(--alt-muted)]">
                    <CellValue value={row.carePlus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/?anliegen=asset-management#kontakt"
            className="inline-flex rounded-full bg-[var(--alt-ink)] px-7 py-3.5 text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Care-Paket anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
