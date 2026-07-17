import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

const SUPPORTED = ["en", "fr"];
const BASE = "https://co2.africa";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Market:   { pill: "bg-af-green text-white",   bar: "bg-af-green" },
  Marché:   { pill: "bg-af-green text-white",   bar: "bg-af-green" },
  Policy:   { pill: "bg-af-sky text-white",     bar: "bg-af-sky" },
  Politique: { pill: "bg-af-sky text-white",   bar: "bg-af-sky" },
  Science:  { pill: "bg-af-sienna text-white",  bar: "bg-af-sienna" },
};

const UI = {
  en: {
    label: "Market Intelligence",
    title: "Africa Carbon Market Insights",
    subtitle: "In-depth analysis on Africa's carbon policy, project pipeline, and market developments.",
    readMore: "Read article",
    readTime: "min read",
    backHome: "Back to home",
  },
  fr: {
    label: "Intelligence du Marché",
    title: "Analyses Marché Carbone Africain",
    subtitle: "Analyses approfondies sur la politique carbone africaine, le pipeline de projets et les évolutions du marché.",
    readMore: "Lire l'article",
    readTime: "min de lecture",
    backHome: "Retour à l'accueil",
  },
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "en" | "fr") : "en";
  return {
    title:
      l === "fr"
        ? "Analyses Marché Carbone Africain — CO2.Africa"
        : "Africa Carbon Market Insights — CO2.Africa",
    description:
      l === "fr"
        ? "Analyses approfondies sur la politique carbone africaine, le pipeline de projets et les évolutions du marché volontaire."
        : "In-depth analysis on Africa's carbon policy, project pipeline, and voluntary carbon market developments.",
    alternates: {
      canonical: `${BASE}/${l}/insights`,
      languages: {
        en: `${BASE}/en/insights`,
        fr: `${BASE}/fr/insights`,
        "x-default": `${BASE}/en/insights`,
      },
    },
  };
}

export default async function InsightsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
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
            <Link
              href={`/${l}`}
              className="text-xs text-af-muted hover:text-af-sienna transition-colors font-medium tracking-wide"
            >
              ← {ui.backHome}
            </Link>
          </div>

          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-af-sienna font-bold inline-block mb-4">
              {ui.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-af-ink mb-4 leading-tight">
              {ui.title}
            </h1>
            <p className="text-af-muted text-lg leading-relaxed">{ui.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const tag = l === "fr" ? article.tagFr : article.tag;
              const colors = TAG_COLORS[tag] ?? { pill: "bg-af-muted text-white", bar: "bg-af-muted" };
              return (
                <Link
                  key={article.slug}
                  href={`/${l}/insights/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className={`h-1.5 ${colors.bar} w-full`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${colors.pill}`}
                      >
                        {tag}
                      </span>
                      <span className="text-af-muted text-xs">{article.date}</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-af-ink leading-snug group-hover:text-af-sienna transition-colors flex-1">
                      {article.title[l]}
                    </h2>
                    <p className="text-af-muted text-sm leading-relaxed line-clamp-3">
                      {article.excerpt[l]}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="flex items-center gap-1.5 text-af-sienna font-semibold text-xs tracking-wide group-hover:gap-2.5 transition-all">
                        {ui.readMore}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-af-muted text-xs">
                        {article.readTime} {ui.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
