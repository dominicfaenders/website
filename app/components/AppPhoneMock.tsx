"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { alt, images } from "@/lib/images";

type Screen = "home" | "tickets" | "ticket" | "academy" | "video";
type Target = "tickets" | "ticket" | "academy" | "video" | "back";

type Step = {
  screen: Screen;
  target?: Target;
  tap?: boolean;
  hold: number;
};

const steps: Step[] = [
  { screen: "home", hold: 900 },
  { screen: "home", target: "tickets", hold: 620 },
  { screen: "home", target: "tickets", tap: true, hold: 200 },
  { screen: "tickets", hold: 950 },
  { screen: "tickets", target: "ticket", hold: 520 },
  { screen: "tickets", target: "ticket", tap: true, hold: 200 },
  { screen: "ticket", hold: 1500 },
  { screen: "ticket", target: "back", hold: 420 },
  { screen: "ticket", target: "back", tap: true, hold: 200 },
  { screen: "tickets", hold: 380 },
  { screen: "tickets", target: "back", hold: 400 },
  { screen: "tickets", target: "back", tap: true, hold: 200 },
  { screen: "home", hold: 550 },
  { screen: "home", target: "academy", hold: 580 },
  { screen: "home", target: "academy", tap: true, hold: 200 },
  { screen: "academy", hold: 850 },
  { screen: "academy", target: "video", hold: 520 },
  { screen: "academy", target: "video", tap: true, hold: 200 },
  { screen: "video", hold: 1650 },
  { screen: "video", target: "back", hold: 420 },
  { screen: "video", target: "back", tap: true, hold: 200 },
  { screen: "academy", hold: 360 },
  { screen: "academy", target: "back", hold: 400 },
  { screen: "academy", target: "back", tap: true, hold: 200 },
  { screen: "home", hold: 700 },
];

function Finger({
  x,
  y,
  visible,
  tapping,
}: {
  x: number;
  y: number;
  visible: boolean;
  tapping: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity: visible ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${tapping ? 0.72 : 1})`,
        transition:
          "left 520ms cubic-bezier(0.22, 1, 0.36, 1), top 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 160ms ease, opacity 220ms ease",
      }}
    >
      <span className="block h-9 w-9 rounded-full bg-[#1d1d1f]/20 shadow-[0_4px_16px_rgba(0,0,0,0.18)] ring-2 ring-white/80" />
      {tapping ? (
        <span className="absolute inset-0 animate-ping rounded-full bg-[#1d1d1f]/15" />
      ) : null}
    </div>
  );
}

function Back({ label = "Zurück" }: { label?: string }) {
  return (
    <div data-tap="back" className="mb-3 inline-flex items-center gap-1 text-[11px] font-medium text-[#6e6e73]">
      <span aria-hidden="true">‹</span>
      {label}
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="px-4 pt-4">
      <div className="mb-4 flex items-center justify-between">
        <Image src="/treuhans.svg" alt="" width={88} height={22} className="h-4 w-auto" />
        <span className="text-[10px] font-medium text-[#6e6e73]">Portal</span>
      </div>
      <p className="text-[11px] text-[#6e6e73]">Hallo Max</p>
      <h3 className="mt-0.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
        Meine Immobilien
      </h3>
      <div className="mt-3 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="relative h-20">
          <Image
            src={images.altbauFassade}
            alt={alt.altbauFassade}
            fill
            className="object-cover object-[center_35%]"
            sizes="240px"
          />
        </div>
        <div className="p-3">
          <p className="text-[13px] font-semibold text-[#1d1d1f]">Burgplatz 2</p>
          <p className="mt-0.5 text-[11px] text-[#6e6e73]">04109 Leipzig · WE 04</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div
          data-tap="tickets"
          className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5"
        >
          <span className="text-[11px] font-medium text-[#1d1d1f]">1 Ticket offen</span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        </div>
        <div
          data-tap="academy"
          className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5"
        >
          <span className="text-[11px] font-medium text-[#1d1d1f]">Academy Videos</span>
          <span className="text-[11px] text-[#6e6e73]">3 neu</span>
        </div>
      </div>
    </div>
  );
}

function TicketsScreen() {
  return (
    <div className="px-4 pt-3">
      <Back label="Home" />
      <h3 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">Tickets</h3>
      <p className="mt-1 text-[11px] text-[#6e6e73]">Offene Entscheidungen</p>
      <div className="mt-3 space-y-2">
        <div data-tap="ticket" className="rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5">
          <p className="text-[11px] font-semibold text-[#1d1d1f]">Betriebskosten prüfen</p>
          <p className="mt-0.5 text-[10px] text-[#6e6e73]">Burgplatz 2 · Freigabe nötig</p>
        </div>
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5">
          <p className="text-[11px] font-semibold text-[#1d1d1f]">Instandhaltung Dach</p>
          <p className="mt-0.5 text-[10px] text-[#6e6e73]">Angebot liegt vor</p>
        </div>
        <div className="rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5">
          <p className="text-[11px] font-semibold text-[#1d1d1f]">Handwerker-Freigabe</p>
          <p className="mt-0.5 text-[10px] text-[#6e6e73]">Erledigt</p>
        </div>
      </div>
    </div>
  );
}

function TicketScreen() {
  return (
    <div className="px-4 pt-3">
      <Back label="Tickets" />
      <p className="text-[10px] font-medium tracking-[0.12em] text-amber-600 uppercase">Offen</p>
      <h3 className="mt-1 text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
        Betriebskosten prüfen
      </h3>
      <p className="mt-2 text-[11px] leading-relaxed text-[#6e6e73]">
        Die Abrechnung 2025 liegt vor. Bitte prüfe die Positionen und gib sie frei.
      </p>
      <div className="mt-4 rounded-xl bg-white px-3 py-3 shadow-sm ring-1 ring-black/5">
        <p className="text-[10px] text-[#6e6e73]">Objekt</p>
        <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">Burgplatz 2 · WE 04</p>
        <p className="mt-3 text-[10px] text-[#6e6e73]">Betrag</p>
        <p className="mt-0.5 text-[12px] font-semibold text-[#1d1d1f]">1.284,60 €</p>
      </div>
      <div className="mt-3 rounded-full bg-[#1d1d1f] px-3 py-2.5 text-center text-[11px] font-medium text-white">
        Jetzt freigeben
      </div>
    </div>
  );
}

const academyVideos = [
  {
    tap: "video" as const,
    title: "Care-Paket erklärt",
    duration: "4:12 min",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portfolio skalieren",
    duration: "6:40 min",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Betriebskosten verstehen",
    duration: "3:55 min",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

function AcademyScreen() {
  return (
    <div className="px-4 pt-3">
      <Back label="Home" />
      <h3 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">Academy</h3>
      <p className="mt-1 text-[11px] text-[#6e6e73]">Wissen rund um deine Immobilie</p>
      <div className="mt-3 space-y-2">
        {academyVideos.map((video) => (
          <div
            key={video.title}
            data-tap={video.tap}
            className="flex gap-2.5 overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/5"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
              <Image src={video.image} alt="" fill className="object-cover object-top" sizes="56px" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/15">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/95 text-[8px] text-[#1d1d1f]">
                  ▶
                </span>
              </span>
            </div>
            <div className="min-w-0 self-center">
              <p className="text-[12px] font-semibold text-[#1d1d1f]">{video.title}</p>
              <p className="mt-0.5 text-[10px] text-[#6e6e73]">{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoScreen() {
  return (
    <div className="px-4 pt-3">
      <Back label="Academy" />
      <div className="relative overflow-hidden rounded-2xl bg-[#1d1d1f]">
        <div className="relative h-36">
          <Image
            src={academyVideos[0].image}
            alt=""
            fill
            className="object-cover object-top opacity-90"
            sizes="240px"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[12px] text-[#1d1d1f]">
              ▶
            </span>
          </span>
        </div>
      </div>
      <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
        Care-Paket erklärt
      </h3>
      <p className="mt-1 text-[11px] leading-relaxed text-[#6e6e73]">
        Was nach dem Kauf kommt — und worauf du bei Verwaltung, Budgets und Freigaben achten
        solltest.
      </p>
    </div>
  );
}

const screens: Record<Screen, () => ReactNode> = {
  home: HomeScreen,
  tickets: TicketsScreen,
  ticket: TicketScreen,
  academy: AcademyScreen,
  video: VideoScreen,
};

export default function AppPhoneMock() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [screen, setScreen] = useState<Screen>("home");
  const [finger, setFinger] = useState({ x: 50, y: 58, visible: false, tapping: false });
  const playingRef = useRef(false);
  const stepRef = useRef(0);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    const phone = phoneRef.current;
    const stage = screenRef.current;
    if (!phone || !stage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const measure = (target?: Target) => {
      if (!target) return null;
      const el = stage.querySelector(`[data-tap="${target}"]`);
      if (!el) return null;
      const area = stage.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      return {
        x: ((box.left + box.width / 2 - area.left) / area.width) * 100,
        y: ((box.top + box.height / 2 - area.top) / area.height) * 100,
      };
    };

    const applyStep = (index: number) => {
      const step = steps[index];
      setScreen(step.screen);
      window.setTimeout(() => {
        const point = measure(step.target);
        setFinger((current) => ({
          x: point?.x ?? current.x,
          y: point?.y ?? current.y,
          visible: Boolean(step.target),
          tapping: Boolean(step.tap),
        }));
      }, 80);
    };

    const run = () => {
      if (!playingRef.current) return;
      applyStep(stepRef.current);
      timerRef.current = window.setTimeout(() => {
        stepRef.current = (stepRef.current + 1) % steps.length;
        run();
      }, steps[stepRef.current].hold);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.4;
        if (visible && !playingRef.current) {
          playingRef.current = true;
          stepRef.current = 0;
          run();
        }
        if (!visible && playingRef.current) {
          playingRef.current = false;
          window.clearTimeout(timerRef.current);
          setFinger((current) => ({ ...current, visible: false, tapping: false }));
        }
      },
      { threshold: [0, 0.4, 0.6] },
    );

    observer.observe(phone);
    return () => {
      playingRef.current = false;
      window.clearTimeout(timerRef.current);
      observer.disconnect();
    };
  }, []);

  const View = screens[screen];

  return (
    <div
      ref={phoneRef}
      className="relative mx-auto w-[248px] shrink-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="relative rounded-[2.75rem] bg-[#1d1d1f] p-[8px] shadow-[0_24px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/20">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#f5f5f7]">
          <div className="relative z-10 flex items-center justify-between bg-[#f5f5f7] px-5 pt-3.5 pb-1 text-[10px] font-semibold text-[#1d1d1f]">
            <span>9:41</span>
            <div className="absolute top-2.5 left-1/2 h-[24px] w-[78px] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
            <span className="flex items-center gap-1">
              <span className="block h-2 w-4 rounded-sm bg-[#1d1d1f]/70" />
              <span className="block h-2.5 w-5 rounded-sm bg-[#1d1d1f]" />
            </span>
          </div>

          <div ref={screenRef} className="relative h-[560px] overflow-hidden">
            <div key={screen} className="alt-reveal h-full">
              <View />
            </div>
            <Finger {...finger} />
          </div>

          <div className="flex justify-center bg-[#f5f5f7] pt-1 pb-2">
            <span className="h-1 w-24 rounded-full bg-[#1d1d1f]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
