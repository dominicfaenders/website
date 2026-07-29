import Image from "next/image";
import SectionFrame from "./SectionFrame";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/content";

type ProjekteGridProps = {
  id?: string;
  showHeader?: boolean;
  limit?: number;
};

export default function ProjekteGrid({
  id = "projekte",
  showHeader = true,
  limit,
}: ProjekteGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section id={id} className="border-t border-border bg-forest">
      <SectionFrame innerClassName="py-20 lg:py-28">
        {showHeader && (
          <SectionHeader
            eyebrow="Projekte"
            title="Referenzprojekte aus Verwaltung und Investment"
            description="Ausgewählte Immobilien aus unserem Mandatsportfolio."
            className="mb-14"
          />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden border border-border bg-forest-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover brightness-[1.04] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="33vw"
                />
                <div className="image-overlay-bottom absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-gold">{project.type}</p>
                  <h3 className="mt-1 font-semibold text-warm-white">{project.name}</h3>
                  <p className="text-xs text-warm-white-soft">{project.location}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border text-center text-xs">
                <div className="px-3 py-4">
                  <p className="text-muted">Einheiten</p>
                  <p className="mt-1 font-medium text-warm-white">{project.units}</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-muted">Volumen</p>
                  <p className="mt-1 font-medium text-warm-white">{project.volume}</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-muted">Rendite</p>
                  <p className="mt-1 font-medium text-gold">{project.yield}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
