import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/config/site";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://petroconsult.ro"),
  title: {
    default: "Petroconsult Business Centre | Spații de birouri de închiriat în Ploiești",
    template: "%s | Petroconsult Business Centre",
  },
  description:
    "Spații de birouri de închiriat în Ploiești, centru — Petroconsult Business Centre, Str. Diligenței nr. 18. Corpuri C1A, C1B, C2 renovate în 2024, parcare privată, sală de evenimente pentru 150 de persoane.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Spații de birouri de închiriat în centrul Ploieștiului — trei corpuri de clădire, peste 8.000 mp, renovate în 2024.",
  telephone: [siteConfig.phone1, siteConfig.phone2],
  email: siteConfig.email,
  url: "https://petroconsult.ro",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Diligenței, nr. 18",
    addressLocality: "Ploiești",
    addressRegion: "Prahova",
    addressCountry: "RO",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-100 text-charcoal-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
