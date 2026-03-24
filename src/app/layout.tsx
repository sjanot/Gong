import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GONG, s.r.o. — Prenájom reklamných plôch | Dolný Kubín",
  description:
    "Prenájom billboardov a reklamných plôch v Dolnom Kubíne a okolí. 27+ billboardov, výhodné ceny od 95 €/mesiac.",
  keywords:
    "billboard, prenájom, reklamná plocha, Dolný Kubín, Veličná, reklama, outdoor reklama",
  openGraph: {
    title: "GONG, s.r.o. — Prenájom reklamných plôch",
    description:
      "Prenájom billboardov v Dolnom Kubíne a okolí. Od 95 €/mesiac.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
