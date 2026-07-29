type SectionFrameProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function SectionFrame({
  children,
  className = "",
  innerClassName = "",
}: SectionFrameProps) {
  return (
    <div className={`mx-auto w-full max-w-intro ${className}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 ${innerClassName}`}>{children}</div>
    </div>
  );
}
