"use client";

const words = ["Werte", "schaffen", "mit", "Immobilien"] as const;

export default function AnimatedClaim({ className }: { className?: string }) {
  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span
          key={word}
          className="claim-word inline-block"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </h1>
  );
}
