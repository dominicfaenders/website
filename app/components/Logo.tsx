import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  href?: string;
};

export default function Logo({ variant = "light", className = "", href = "/#start" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-block shrink-0 ${className}`}
      aria-label="treuhans — Startseite"
    >
      <Image
        src="/treuhans.svg"
        alt="treuhans"
        width={168}
        height={42}
        priority
        className={`h-8 w-auto sm:h-9 ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
