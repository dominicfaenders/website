import AppPhoneMock from "./AppPhoneMock";
import { treuhansApp } from "@/lib/content";

export default function AppSection() {
  return (
    <section id="app" className="bg-[var(--alt-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_auto] lg:gap-20">
          <div>
            <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
              {treuhansApp.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
              {treuhansApp.title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--alt-muted)]">
              {treuhansApp.description}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {treuhansApp.features.map((feature) => (
                <article key={feature.title}>
                  <h3 className="text-[16px] font-semibold tracking-tight text-[var(--alt-ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--alt-muted)]">
                    {feature.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <AppPhoneMock />
        </div>
      </div>
    </section>
  );
}
