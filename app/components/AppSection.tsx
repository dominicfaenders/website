import Image from "next/image";
import { treuhansApp } from "@/lib/content";
import { alt, images } from "@/lib/images";

function AppPhoneMock() {
  return (
    <div className="relative mx-auto w-[272px] shrink-0" aria-hidden="true">
      {/* Phone shell */}
      <div className="relative rounded-[2.4rem] bg-[#1d1d1f] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/20">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-[#f5f5f7]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-[#1d1d1f]">
            <span>9:41</span>
            <div className="absolute left-1/2 top-2.5 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
            <span className="flex items-center gap-1">
              <span className="block h-2 w-4 rounded-sm bg-[#1d1d1f]/70" />
              <span className="block h-2.5 w-5 rounded-sm bg-[#1d1d1f]" />
            </span>
          </div>

          {/* Screen content */}
          <div className="px-4 pb-6 pt-5">
            <div className="mb-4 flex items-center justify-between">
              <Image
                src="/treuhans.svg"
                alt=""
                width={110}
                height={28}
                className="h-5 w-auto"
              />
              <span className="text-[10px] font-medium text-[#6e6e73]">Portal</span>
            </div>

            <p className="text-[11px] text-[#6e6e73]">Hallo Max</p>
            <h3 className="mt-0.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
              Meine Immobilien
            </h3>
            <p className="mt-1 text-[11px] leading-snug text-[#6e6e73]">
              Dein Investment-Cockpit
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative h-24">
                <Image
                  src={images.altbauFassade}
                  alt={alt.altbauFassade}
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="240px"
                />
              </div>
              <div className="p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#1d1d1f]">
                      Burgplatz 2
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#6e6e73]">04109 Leipzig · WE 04</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    Aktiv
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/5 pt-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-wide text-[#6e6e73]">Paket</p>
                    <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">Care+</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wide text-[#6e6e73]">Beginn</p>
                    <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">01.09.2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {[
                { label: "1 Entscheidung offen", tone: "warn" },
                { label: "3 neue Dokumente", tone: "neutral" },
                { label: "Academy: Care-Paket erklärt", tone: "neutral" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5"
                >
                  <span className="text-[11px] font-medium text-[#1d1d1f]">{item.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.tone === "warn" ? "bg-amber-500" : "bg-[#1d1d1f]/25"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
