import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactStatsBar from "@/components/ImpactStatsBar";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyAfricaSection from "@/components/WhyAfricaSection";
import OpportunitySection from "@/components/OpportunitySection";
import StandardsSection from "@/components/StandardsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FlagshipProjectSection from "@/components/FlagshipProjectSection";
import AfricaMapSection from "@/components/AfricaMapSection";
import InsightsSection from "@/components/InsightsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const SUPPORTED = ["en", "fr"];

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();

  const l = lang as Lang;
  const faqData = translations.faq[l];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <HeroSection />
        <ImpactStatsBar />
        <WhatIsSection />
        <HowItWorksSection />
        <WhyAfricaSection />
        <OpportunitySection />
        <StandardsSection />
        <ProjectsSection />
        <FlagshipProjectSection />
        <AfricaMapSection />
        <InsightsSection />
        <NewsletterSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
