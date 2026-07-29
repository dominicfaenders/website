import Image from "next/image";
import type { ReactNode } from "react";

type SplitSectionProps = {
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
};

export default function SplitSection({
  image,
  imageAlt,
  children,
  reverse = false,
  className = "",
}: SplitSectionProps) {
  return (
    <div className={`grid lg:grid-cols-2 ${className}`}>
      <div
        className={`relative min-h-[300px] lg:min-h-[460px] ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover brightness-[1.05] contrast-[1.02]" sizes="50vw" />
        <div className="image-overlay absolute inset-0 opacity-50" />
      </div>
      <div
        className={`flex flex-col justify-center border-t border-border bg-forest-elevated px-6 py-14 lg:border-t-0 lg:px-14 lg:py-20 xl:px-20 ${
          reverse ? "lg:order-1 lg:border-r lg:border-border" : "lg:border-l lg:border-border"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
