import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://sjanot.github.io/Gong";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GONG, s.r.o. — Prenájom reklamných plôch | Dolný Kubín",
    template: "%s | GONG, s.r.o.",
  },
  description:
    "Prenájom billboardov a reklamných plôch v Dolnom Kubíne a okolí. 27+ billboardov na strategických miestach, výhodné ceny od 95 €/mesiac bez DPH.",
  keywords: [
    "billboard",
    "prenájom billboardu",
    "reklamná plocha",
    "outdoor reklama",
    "Dolný Kubín",
    "Veličná",
    "Orava",
    "reklama Dolný Kubín",
    "billboardy Orava",
    "prenájom reklamnej plochy",
    "GONG",
  ],
  authors: [{ name: "GONG, s.r.o." }],
  creator: "GONG, s.r.o.",
  publisher: "GONG, s.r.o.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "GONG, s.r.o. — Prenájom reklamných plôch | Dolný Kubín",
    description:
      "27+ billboardov na strategických miestach v Dolnom Kubíne a okolí. Od 95 €/mesiac bez DPH.",
    url: siteUrl,
    siteName: "GONG, s.r.o.",
    type: "website",
    locale: "sk_SK",
    images: [
      {
        url: `${siteUrl}/billboards/18-billboard-dolny-kubin-jpg.jpg`,
        width: 1600,
        height: 900,
        alt: "Billboard v centre Dolného Kubína — GONG, s.r.o.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GONG, s.r.o. — Prenájom reklamných plôch",
    description:
      "27+ billboardov v Dolnom Kubíne a okolí. Od 95 €/mesiac.",
    images: [`${siteUrl}/billboards/18-billboard-dolny-kubin-jpg.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GONG, s.r.o.",
  description:
    "Prenájom billboardov a reklamných plôch v Dolnom Kubíne a okolí.",
  url: siteUrl,
  telephone: ["+421905651589", "+421905382862"],
  email: "jlubek@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obrancov mieru 1780/3",
    addressLocality: "Dolný Kubín",
    postalCode: "026 01",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.2103,
    longitude: 19.2975,
  },
  priceRange: "od 95 €/mesiac",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [siteUrl],
  makesOffer: {
    "@type": "Offer",
    name: "Prenájom billboardu",
    description: "Prenájom reklamnej plochy 5.1 × 2.4 m",
    price: "95",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "95",
      priceCurrency: "EUR",
      unitText: "mesiac",
      valueAddedTaxIncluded: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
