import Link from "next/link";
import SectionFrame from "./SectionFrame";
import SectionHeader from "./SectionHeader";
import { insights } from "@/lib/content";

type InsightsGridProps = {
  id?: string;
  showHeader?: boolean;
  limit?: number;
};

export default function InsightsGrid({
  id = "insights",
  showHeader = true,
  limit,
}: InsightsGridProps) {
  const items = limit ? insights.slice(0, limit) : insights;

  return (
    <section id={id} className="border-t border-border bg-forest-elevated">
      <SectionFrame innerClassName="py-20 lg:py-28">
        {showHeader && (
          <SectionHeader
            eyebrow="Insights"
            title="Einordnung für fundierte Entscheidungen"
            description="Analysen zu Investment, Verwaltung und Marktentwicklung."
            className="mb-14"
          />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((article) => (
            <article
              key={article.title}
              className="flex flex-col border border-border bg-forest p-8"
            >
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="tracking-[0.14em] uppercase text-gold">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-warm-white">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-white-soft">
                {article.excerpt}
              </p>
              <Link
                href={article.href}
                className="mt-6 text-[11px] font-medium tracking-[0.18em] uppercase text-gold transition-colors hover:text-gold-light"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
