"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function TypewriterHeading({
  as: Tag = "h2",
  text,
  className,
  startWhenVisible = false,
  children,
}: {
  as?: "h1" | "h2";
  text: string;
  className?: string;
  startWhenVisible?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [started, setStarted] = useState(!startWhenVisible);
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (!startWhenVisible) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    if (count >= text.length) {
      return;
    }

    const delay = count === 0 ? 380 : 62;
    const timer = window.setTimeout(() => {
      setCount((current) => Math.min(text.length, current + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [started, count, text.length]);

  return (
    <>
      <Tag
        ref={ref}
        className={`relative ${className ?? ""}`}
        aria-label={text}
      >
        <span className="invisible" aria-hidden="true">
          {text}
        </span>
        <span className="absolute inset-0" aria-hidden="true">
          {started ? text.slice(0, count) : null}
          {started ? (
            <span className={`claim-caret${done ? " claim-caret-done" : ""}`} />
          ) : null}
        </span>
      </Tag>
      {children ? (
        <div className={done ? "claim-subline" : "invisible"}>{children}</div>
      ) : null}
    </>
  );
}
