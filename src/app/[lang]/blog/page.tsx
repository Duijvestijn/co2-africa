import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/posts";

const SUPPORTED = ["en", "fr"];
const BASE = "https://co2.africa";

const UI = {
  en: {
    label: "Continental Intelligence",
    title: "Africa Carbon Blog",
    subtitle: "In-depth insights on African carbon markets — nature-based solutions, Article 6, and country analysis.",
    backHome: "Back to home",
    newsletter: "Stay informed",
    newsletterTitle: "Get new articles in your inbox",
    newsletterBody: "Join ~2,000 readers tracking African carbon market developments.",
    newsletterCta: "Subscribe via contact form",
  },
  fr: {
    label: "Intelligence Continentale",
    title: "Blog Carbone Afrique",
    subtitle: "Analyses approfondies sur les marchés carbone africains — solutions basées sur la nature, Article 6, et analyse par pays.",
    backHome: "Retour à l'accueil",
    newsletter: "Restez informé",
    newsletterTitle: "Recevez les nouveaux articles dans votre boîte mail",
    newsletterBody: "Rejoignez ~2 000 lecteurs qui suivent les développements des marchés carbone africains.",
    newsletterCta: "S'abonner via le formulaire de contact",
  },
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "en" | "fr") : "en";
  return {
    title: l === "fr" ? "Blog Carbone Afrique — CO2.Africa" : "Africa Carbon Blog — CO2.Africa",
    description: UI[l].subtitle,
    alternates: {
      canonical: `${BASE}/${l}/blog`,
      languages: { en: `${BASE}/en/blog`, fr: `${BASE}/fr/blog`, "x-default": `${BASE}/en/blog` },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "en" | "fr";
  const ui = UI[l];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-af-page pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-3">
            <Link href={`/${l}`} className="text-xs text-af-muted hover:text-af-sienna transition-colors font-medium tracking-wide">
              ← {ui.backHome}
            </Link>
          </div>

          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-af-sienna font-bold inline-block mb-4">{ui.label}</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-af-ink mb-4 leading-tight">{ui.title}</h1>
            <p className="text-af-muted text-lg leading-relaxed">{ui.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => {
              const t = post.lang[lang] ?? post.lang.en;
              return (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={t.title}
                  excerpt={t.excerpt}
                  date={post.date}
                  lang={lang}
                />
              );
            })}
          </div>
        </div>
      </main>

      <div className="bg-af-dark py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-af-sienna/70 font-bold block mb-3">
            {ui.newsletter}
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">{ui.newsletterTitle}</h2>
          <p className="text-white/50 mb-8 leading-relaxed text-sm">{ui.newsletterBody}</p>
          <a
            href={`/${l}#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-af-sienna hover:opacity-90 text-white font-bold rounded-full transition-opacity text-sm tracking-wide"
          >
            {ui.newsletterCta}
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
