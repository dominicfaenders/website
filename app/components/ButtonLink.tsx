import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300";

  const variants = {
    primary:
      "border border-gold/35 text-gold hover:border-gold/60 hover:bg-gold/8",
    ghost: "text-warm-white-soft hover:text-gold",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
