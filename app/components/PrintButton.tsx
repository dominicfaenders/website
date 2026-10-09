"use client";

type PrintButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function PrintButton({
  children = "Drucken",
  className = "",
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={className}
    >
      {children}
    </button>
  );
}
