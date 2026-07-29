import { company } from "@/lib/content";

export default function ContactInfo() {
  return (
    <div className="space-y-6 text-sm">
      {[
        { label: "E-Mail", href: `mailto:${company.email}`, text: company.email },
        { label: "Telefon", href: company.phoneHref, text: company.phone },
      ].map((item) => (
        <div key={item.label} className="border-l border-gold/40 pl-5">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-gold">
            {item.label}
          </p>
          <a
            href={item.href}
            className="mt-1 block text-base text-warm-white transition-colors hover:text-gold-light"
          >
            {item.text}
          </a>
        </div>
      ))}
      <div className="border-l border-gold/40 pl-5">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-gold">Adresse</p>
        <p className="mt-1 text-base leading-relaxed text-warm-white">
          {company.address}
          <br />
          {company.city}
        </p>
      </div>
    </div>
  );
}
