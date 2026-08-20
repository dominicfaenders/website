"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { alt, images } from "@/lib/images";

export default function AppPhoneMock() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phone = phoneRef.current;
    const screen = screenRef.current;
    const content = contentRef.current;
    if (!phone || !screen || !content) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animation: Animation | null = null;

    const playFromStart = () => {
      animation?.cancel();
      const max = Math.max(0, content.scrollHeight - screen.clientHeight);
      if (max <= 0) return;

      animation = content.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(0, ${-max}px, 0)` },
        ],
        {
          duration: 18000,
          easing: "linear",
          iterations: Number.POSITIVE_INFINITY,
          direction: "alternate",
        },
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          if (!animation) playFromStart();
          else animation.play();
        } else {
          animation?.pause();
        }
      },
      { threshold: [0, 0.4, 0.6] },
    );

    observer.observe(phone);

    const onResize = () => {
      const wasPlaying = animation?.playState === "running";
      playFromStart();
      if (!wasPlaying) animation?.pause();
    };

    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      animation?.cancel();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={phoneRef}
      className="relative mx-auto w-[272px] shrink-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="relative rounded-[2.4rem] bg-[#1d1d1f] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/20">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-[#f5f5f7]">
          <div className="relative z-10 flex items-center justify-between bg-[#f5f5f7] px-5 pt-3 pb-1 text-[10px] font-semibold text-[#1d1d1f]">
            <span>9:41</span>
            <div className="absolute top-2.5 left-1/2 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
            <span className="flex items-center gap-1">
              <span className="block h-2 w-4 rounded-sm bg-[#1d1d1f]/70" />
              <span className="block h-2.5 w-5 rounded-sm bg-[#1d1d1f]" />
            </span>
          </div>

          <div ref={screenRef} className="relative h-[460px] overflow-hidden">
            <div
              ref={contentRef}
              className="will-change-transform px-4 pt-4 pb-8"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Image
                  src="/treuhans.svg"
                  alt=""
                  width={88}
                  height={22}
                  className="h-4 w-auto"
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
                      <p className="text-[9px] tracking-wide text-[#6e6e73] uppercase">Paket</p>
                      <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">Care+</p>
                    </div>
                    <div>
                      <p className="text-[9px] tracking-wide text-[#6e6e73] uppercase">Beginn</p>
                      <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">01.09.2026</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[10px] font-semibold tracking-[0.12em] text-[#6e6e73] uppercase">
                Offen
              </p>
              <div className="mt-2 space-y-2">
                {[
                  { label: "1 Entscheidung offen", tone: "warn" },
                  { label: "Betriebskosten prüfen", tone: "warn" },
                  { label: "3 neue Dokumente", tone: "neutral" },
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

              <p className="mt-5 text-[10px] font-semibold tracking-[0.12em] text-[#6e6e73] uppercase">
                Dokumente
              </p>
              <div className="mt-2 space-y-2">
                {["Teilungserklärung.pdf", "Wirtschaftsplan 2026.pdf", "Beschlussprotokoll.pdf"].map(
                  (doc) => (
                    <div
                      key={doc}
                      className="rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5"
                    >
                      <p className="text-[11px] font-medium text-[#1d1d1f]">{doc}</p>
                      <p className="mt-0.5 text-[10px] text-[#6e6e73]">Bereit zum Download</p>
                    </div>
                  ),
                )}
              </div>

              <p className="mt-5 text-[10px] font-semibold tracking-[0.12em] text-[#6e6e73] uppercase">
                Academy
              </p>
              <div className="mt-2 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative h-20">
                  <Image
                    src={images.kanalApartments}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
                <div className="p-3.5">
                  <p className="text-[13px] font-semibold text-[#1d1d1f]">Care-Paket erklärt</p>
                  <p className="mt-1 text-[11px] leading-snug text-[#6e6e73]">
                    Was nach dem Kauf kommt — und worauf du achten solltest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
