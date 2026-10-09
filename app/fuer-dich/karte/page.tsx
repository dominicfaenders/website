import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PrintButton from "@/app/components/PrintButton";
import QrCode from "@/app/components/QrCode";
import { einladung, getEinladungUrl } from "@/lib/einladung";

export const metadata: Metadata = {
  title: "QR-Karte drucken",
  description: "Druckbare Karte mit QR-Code für die persönliche Einladung.",
};

export default async function EinladungKartePage() {
  const url = getEinladungUrl();

  return (
    <main className="min-h-full bg-[var(--alt-bg-subtle)] print:bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 print:max-w-none print:px-0 print:py-0 sm:px-8 sm:py-16">
        <div className="no-print mb-10">
          <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
            Diskrete Übergabe
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--alt-ink)]">
            QR-Karte zum Ausdrucken
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--alt-muted)]">
            Auf Visitenkartenformat schneiden und diskret hinterlassen — z.&nbsp;B. mit dem
            Trinkgeld. Der Code führt zu{" "}
            <Link
              href={einladung.path}
              className="underline decoration-[var(--alt-line)] underline-offset-4 hover:decoration-[var(--alt-ink)]"
            >
              {url}
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrintButton className="rounded-full bg-[var(--alt-ink)] px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90">
              Drucken
            </PrintButton>
            <Link
              href={einladung.path}
              className="inline-flex items-center justify-center rounded-full border border-[var(--alt-line)] px-6 py-3 text-[14px] font-medium text-[var(--alt-ink)] transition-colors hover:border-[var(--alt-ink)]"
            >
              Zielseite öffnen
            </Link>
          </div>
        </div>

        <div className="flex justify-center print:block">
          <article className="invite-card w-full max-w-[340px] rounded-2xl bg-white px-8 py-9 shadow-[0_18px_50px_rgba(0,0,0,0.08)] print:mx-auto print:max-w-none print:rounded-none print:shadow-none">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/treuhans.svg"
                alt="treuhans"
                width={120}
                height={30}
                className="h-6 w-auto"
                priority
              />
              <p className="mt-6 text-[15px] font-medium tracking-tight text-[var(--alt-ink)]">
                {einladung.cardLine}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--alt-muted)]">
                {einladung.cardHint}
              </p>
              <div className="mt-7 rounded-xl border border-[var(--alt-line)] p-3">
                <QrCode url={url} size={180} title="QR-Code zur persönlichen Einladung" />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.04em] text-[var(--alt-muted)]">
                {url.replace(/^https?:\/\//, "")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
