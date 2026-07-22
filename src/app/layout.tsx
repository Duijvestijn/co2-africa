import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";
import Script from "next/script";

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
    "Carbon Credits", "Nature Restoration Africa", "Congo Basin Agroforestry",
    "Mangrove Restoration", "Savanna Carbon", "Verra VCS", "Paris Agreement NDC",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.Africa — Nature Restoration & Carbon Finance",
    template: "%s",
  },
  description:
    "Africa's most significant untapped carbon opportunity. Verified CO₂ credits from Congo Basin forests, East African savannas, coastal mangroves, and Sahel afforestation.",
  keywords: [
    "carbon credits Africa", "nature restoration Africa", "Congo Basin carbon",
    "African carbon market", "nature-based carbon Africa", "mangrove carbon Africa",
    "crédits carbone Afrique", "restauration nature Afrique",
  ],
  openGraph: {
    type: "website",
    siteName: "CO2.Africa",
    url: "https://co2.africa",
    title: "CO2.Africa — Nature Restoration & Carbon Finance",
    description: "Africa holds the world's greatest untapped carbon potential.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "CO2.africa — African Carbon Markets" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://co2.africa"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://js.hs-scripts.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WMBMVGNP');`}
      </Script>
      <body className="bg-af-dark text-af-sand antialiased overflow-x-hidden font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMBMVGNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LenisProvider>{children}</LenisProvider>
        <Script id="hs-script-loader" src="//js.hs-scripts.com/8515463.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
