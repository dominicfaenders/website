import Image from "next/image";
import { alt, images } from "@/lib/images";

const values = [
  {
    title: "Seriös & langfristig",
    text: "Wir denken nicht in Abschlüssen, sondern in langfristigen Partnerschaften. Nachhaltiger Werterhalt und wirtschaftlicher Erfolg stehen für uns an erster Stelle.",
  },
  {
    title: "Kaufmännisch fundiert",
    text: "Jede Entscheidung basiert auf Analysen, Kennzahlen und unternehmerischem Denken – nicht auf Bauchgefühl.",
  },
  {
    title: "Operativ verlässlich",
    text: "Von der Mieterkommunikation bis zur technischen Steuerung übernehmen wir Verantwortung und sorgen für eine professionelle Umsetzung.",
  },
] as const;

const stats = [
  { value: "Leipzig", label: "Sitz" },
  { value: "11", label: "immobilienbegeisterte Köpfe" },
  { value: "100", label: "Jahre gemeinsames Immobilienwissen" },
  { value: "> 25 Mio. €", label: "Entwickeltes Volumen" },
] as const;

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
              Mission
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-5xl">
              Dein Investmenthaus für Wohnimmobilien.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--alt-muted)]">
              Immobilien entfalten ihr Potenzial nicht durch Zufall. treuhans verbindet
              Investment-Kompetenz mit operativer Exzellenz und begleitet Eigentümer und Investoren
              langfristig beim Aufbau und Erhalt deines Vermögens.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src={images.rathausMotion}
              alt={alt.rathausMotion}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-y border-[var(--alt-line)] py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-3xl font-semibold tracking-tight text-[var(--alt-ink)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[14px] text-[var(--alt-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {values.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl font-semibold tracking-tight text-[var(--alt-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--alt-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
