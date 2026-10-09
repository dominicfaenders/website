import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { company } from "@/lib/content";
import { einladung, getEinladungMailto } from "@/lib/einladung";

export const metadata: Metadata = {
  title: "Für dich",
  description: "Eine persönliche Einladung von treuhans.",
};

export default function FuerDichPage() {
  return (
    <main className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(184,160,120,0.14),transparent_55%),radial-gradient(ellipse_at_90%_30%,rgba(18,24,22,0.06),transparent_45%),linear-gradient(180deg,#faf9f7_0%,#ffffff_48%,#f5f5f7_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16 sm:px-8 sm:py-24">
        <div className="alt-reveal">
          <Image
            src="/treuhans.svg"
            alt="treuhans"
            width={140}
            height={35}
            priority
            className="h-7 w-auto"
          />
        </div>

        <p className="alt-reveal alt-reveal-delay mt-12 text-[13px] font-medium tracking-[0.08em] text-[var(--alt-muted)] uppercase">
          {einladung.eyebrow}
        </p>

        <h1 className="alt-reveal alt-reveal-delay mt-4 text-[2rem] leading-[1.15] font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl sm:leading-[1.1]">
          {einladung.title}
        </h1>

        <p className="alt-reveal alt-reveal-delay-2 mt-6 text-lg leading-relaxed text-[var(--alt-muted)]">
          {einladung.lead}
        </p>

        <div className="alt-reveal alt-reveal-delay-2 mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--alt-muted)] sm:text-base">
          {einladung.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="alt-reveal alt-reveal-delay-2 mt-8 text-[15px] leading-relaxed font-medium text-[var(--alt-ink)]">
          {einladung.closing}
        </p>

        <div className="alt-reveal alt-reveal-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={getEinladungMailto()}
            className="inline-flex items-center justify-center rounded-full bg-[var(--alt-ink)] px-7 py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            {einladung.ctaLabel}
          </a>
          <Link
            href={einladung.secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-[var(--alt-line)] px-7 py-3.5 text-[14px] font-medium text-[var(--alt-ink)] transition-colors hover:border-[var(--alt-ink)]"
          >
            {einladung.secondaryLabel}
          </Link>
        </div>

        <p className="alt-reveal alt-reveal-delay-2 mt-10 text-[13px] leading-relaxed text-[var(--alt-muted)]">
          {company.address}, {company.city}
          <br />
          <a
            href={`mailto:${company.email}`}
            className="underline decoration-[var(--alt-line)] underline-offset-4 transition-colors hover:decoration-[var(--alt-ink)]"
          >
            {company.email}
          </a>
          {" · "}
          <a
            href={company.phoneHref}
            className="underline decoration-[var(--alt-line)] underline-offset-4 transition-colors hover:decoration-[var(--alt-ink)]"
          >
            {company.phone}
          </a>
        </p>
      </div>
    </main>
  );
}
