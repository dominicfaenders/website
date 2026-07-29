import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "treuhans GmbH | Werte schaffen mit Immobilien",
    template: "%s | treuhans GmbH",
  },
  description:
    "treuhans — dein Partner für Asset Management und Investment. Werte bewahren, Potenziale heben.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} h-full antialiased`}>
      <body className="theme-alt flex min-h-full flex-col bg-[var(--alt-bg)] text-[var(--alt-ink)]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
