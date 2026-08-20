"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Logo from "@/app/components/Logo";
import { mainNav } from "@/lib/navigation";

function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("start");
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => setActiveId(window.location.hash.slice(1) || "start");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, activeId]);

  const onHome = pathname === "/";

  const movePill = (element: HTMLElement) => {
    const nav = navRef.current;
    if (!nav) return;
    const navBox = nav.getBoundingClientRect();
    const itemBox = element.getBoundingClientRect();
    setPill({ left: itemBox.left - navBox.left, width: itemBox.width });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <Logo variant="dark" href="/#start" />

        <div className="flex items-center gap-3">
          <nav
            ref={navRef}
            className="relative hidden items-center xl:mr-6 xl:flex"
            onMouseLeave={() => setPill(null)}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-[#f5f5f7] transition-[left,width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: pill?.left ?? 0,
                width: pill?.width ?? 0,
                opacity: pill ? 1 : 0,
              }}
            />
            {mainNav.map((link) => {
              const isActive = onHome && activeId === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={(event) => movePill(event.currentTarget)}
                  onFocus={(event) => movePill(event.currentTarget)}
                  className={`relative z-10 px-3.5 py-1.5 text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--alt-ink)]"
                      : "text-[#6e6e73] hover:text-[var(--alt-ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href="https://app.treuhans.de/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-[var(--alt-ink)] px-5 py-2.5 text-[17px] font-semibold tracking-[-0.01em] text-white transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Login
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1 xl:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px w-5 bg-[var(--alt-ink)] transition-all ${
                  menuOpen && i === 0
                    ? "translate-y-[7px] rotate-45"
                    : menuOpen && i === 1
                      ? "opacity-0"
                      : menuOpen && i === 2
                        ? "-translate-y-[7px] -rotate-45"
                        : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--alt-line)] bg-white px-6 py-8 xl:hidden">
          <ul className="space-y-5">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-2xl font-semibold tracking-tight text-[var(--alt-ink)] transition-transform duration-300 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://app.treuhans.de/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex rounded-full bg-[var(--alt-ink)] px-6 py-3 text-[15px] font-medium text-white"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={null}>
      <HeaderNav />
    </Suspense>
  );
}
