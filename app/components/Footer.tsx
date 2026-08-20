import Link from "next/link";
import Logo from "@/app/components/Logo";
import { brand, company } from "@/lib/content";
import { businessFieldLinks, footerNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--alt-line)] bg-[var(--alt-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="dark" href="/#start" />
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--alt-muted)]">
              {brand.claim}.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-[var(--alt-ink)]">Service</p>
            <ul className="mt-5 space-y-3">
              {businessFieldLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[var(--alt-muted)] transition-colors hover:text-[var(--alt-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[12px] font-semibold text-[var(--alt-ink)]">Unternehmen</p>
            <ul className="mt-5 space-y-3">
              {footerNav
                .filter((link) => !["impressum", "datenschutz"].includes(link.id))
                .map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-[var(--alt-muted)] transition-colors hover:text-[var(--alt-ink)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] text-[var(--alt-muted)] transition-colors hover:text-[var(--alt-ink)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-[var(--alt-ink)]">Kontakt</p>
            <div className="mt-5 space-y-2 text-[14px] text-[var(--alt-muted)]">
              <p>
                treuhans GmbH
                <br />
                {company.address}
                <br />
                {company.city}
              </p>
              <p>
                <a href={company.phoneHref} className="hover:text-[var(--alt-ink)]">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-[var(--alt-ink)]">
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--alt-line)] pt-8">
          <p className="text-[12px] text-[var(--alt-muted)]">
            © {new Date().getFullYear()} treuhans GmbH
          </p>
          <div className="flex gap-6 text-[12px] text-[var(--alt-muted)]">
            <Link href="/impressum" className="hover:text-[var(--alt-ink)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[var(--alt-ink)]">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
