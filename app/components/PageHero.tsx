import SectionFrame from "./SectionFrame";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--alt-line)] bg-[var(--alt-bg-subtle)] pt-28">
      <SectionFrame innerClassName="py-16 lg:py-20">
        <p className="text-[13px] font-medium tracking-[0.06em] text-[var(--alt-muted)] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--alt-ink)] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--alt-muted)] lg:text-base">
            {description}
          </p>
        )}
      </SectionFrame>
    </section>
  );
}
