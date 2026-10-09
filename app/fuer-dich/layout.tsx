import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Für dich",
  description: "Eine persönliche Einladung von treuhans.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function EinladungLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}
