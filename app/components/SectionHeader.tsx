type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="block h-px w-8 bg-gold/50" />
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight text-warm-white sm:text-3xl lg:text-[2.125rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-warm-white-soft lg:text-[15px] lg:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
