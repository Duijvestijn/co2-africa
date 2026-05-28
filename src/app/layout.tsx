import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CO2.Africa",
  alternateName: ["African Carbon Credits", "Crédits Carbone Afrique"],
  url: "https://co2.africa",
  description:
    "Africa's leading platform for nature restoration and carbon finance — Congo Basin, savanna, mangrove, and Sahel projects under Verra VCS.",
  areaServed: { "@type": "Continent", name: "Africa" },
  knowsAbout: [
    "Carbon Credits", "Nature Restoration Africa", "Congo Basin REDD+",
    "Mangrove Restoration", "Savanna Carbon", "Verra VCS", "Paris Agreement NDC",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.Africa — Nature Restoration & Carbon Finance",
    template: "%s | CO2.Africa",
  },
  description:
    "Africa's most significant untapped carbon opportunity. Verified CO₂ credits from Congo Basin forests, East African savannas, coastal mangroves, and Sahel afforestation.",
  keywords: [
    "carbon credits Africa", "nature restoration Africa", "Congo Basin carbon",
    "African carbon market", "REDD+ Africa", "mangrove carbon Africa",
    "crédits carbone Afrique", "restauration nature Afrique",
  ],
  openGraph: {
    type: "website",
    siteName: "CO2.Africa",
    url: "https://co2.africa",
    title: "CO2.Africa — Nature Restoration & Carbon Finance",
    description: "Africa holds the world's greatest untapped carbon potential.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://co2.africa"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-af-dark text-af-sand antialiased overflow-x-hidden font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
