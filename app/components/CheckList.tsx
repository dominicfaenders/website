type CheckListProps = {
  items: readonly string[];
  className?: string;
};

export default function CheckList({ items, className = "" }: CheckListProps) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-warm-white-soft">
          <span className="mt-1.5 block h-px w-3 shrink-0 bg-gold/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}
