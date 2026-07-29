type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[var(--alt-ink)]">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalPageContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[var(--alt-bg)]">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="space-y-10 text-sm text-[var(--alt-muted)]">{children}</div>
        </div>
      </div>
    </section>
  );
}
