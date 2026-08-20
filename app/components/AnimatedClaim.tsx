"use client";

import TypewriterHeading from "./TypewriterHeading";
import { brand } from "@/lib/content";

export default function AnimatedClaim({
  className,
  sublineClassName,
}: {
  className?: string;
  sublineClassName?: string;
}) {
  return (
    <TypewriterHeading as="h1" text={brand.claim} className={className}>
      <p className={sublineClassName}>{brand.heroSubclaim}</p>
    </TypewriterHeading>
  );
}
