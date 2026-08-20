"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export default function AnimatedClaim({
  className,
  sublineClassName,
}: {
  className?: string;
  sublineClassName?: string;
}) {
  const text = brand.claim;
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    const delay = count === 0 ? 380 : 62;
    const timer = window.setTimeout(() => {
      setCount((current) => Math.min(text.length, current + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [count, text.length]);

  return (
    <>
      <h1 className={className} aria-label={text}>
        <span aria-hidden="true">
          {text.slice(0, count)}
          <span className={`claim-caret${done ? " claim-caret-done" : ""}`} />
        </span>
      </h1>
      <p
        className={`${sublineClassName ?? ""} ${done ? "claim-subline" : "invisible"}`}
      >
        {brand.heroSubclaim}
      </p>
    </>
  );
}
