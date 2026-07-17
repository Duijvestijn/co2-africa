import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticle, getAllSlugs } from "@/lib/articles";

const SUPPORTED = ["en", "fr"];
const BASE = "https://co2.africa";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Market:    { pill: "bg-af-green text-white",   bar: "bg-af-green" },
  Marché:    { pill: "bg-af-green text-white",   bar: "bg-af-green" },
  Policy:    { pill: "bg-af-sky text-white",     bar: "bg-af-sky" },
  Politique: { pill: "bg-af-sky text-white",     bar: "bg-af-sky" },
  Science:   { pill: "bg-af-sienna text-white",  bar: "bg-af-sienna" },
};

const UI = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbInsights: "Insights",
    readTime: "min read",
    backInsights: "← All articles",
    related: "Related articles",
    ctaTitle: "Partner with Green Earth Group in Africa",
    ctaDesc: "We work with governments, investors, landowners, and project developers across Africa.",
    ctaBtn: "Start a conversation",
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbInsights: "Articles",
    readTime: "min de lecture",
    backInsights: "← Tous les articles",
    related: "Articles connexes",
    ctaTitle: "Partenariat avec Green Earth Group en Afrique",
    ctaDesc:
      "Nous travaillons avec des gouvernements, des investisseurs, des propriétaires fonciers et des développeurs de projets à travers l'Afrique.",
    ctaBtn: "Commencer une conversation",
  },
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "en" | "fr") : "en";
  const article = getArticle(slug);
  if (!article) return {};
  const tag = l === "fr" ? article.tagFr : article.tag;
  return {
    title: `${article.title[l]} — CO2.Africa`,
    description: article.excerpt[l],
    keywords: ["carbon credits Africa", "Africa carbon market", tag.toLowerCase(), "Verra VCS Africa"],
    openGraph: {
      title: article.title[l],
      description: article.excerpt[l],
      type: "article",
      publishedTime: article.date,
      url: `${BASE}/${l}/insights/${slug}`,
    },
    alternates: {
      canonical: `${BASE}/${l}/insights/${slug}`,
      languages: {
        en: `${BASE}/en/insights/${slug}`,
        fr: `${BASE}/fr/insights/${slug}`,
        "x-default": `${BASE}/en/insights/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "en" | "fr";
  const article = getArticle(slug);
  if (!article) notFound();

  const tag = l === "fr" ? article.tagFr : article.tag;
  const colors = TAG_COLORS[tag] ?? { pill: "bg-af-muted text-white", bar: "bg-af-sienna" };
  const ui = UI[l];

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[l],
    description: article.excerpt[l],
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "CO2.Africa", url: BASE },
    url: `${BASE}/${l}/insights/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="min-h-screen bg-af-page">
        {/* Hero / header */}
        <div className="bg-af-dark pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
              <Link href={`/${l}`} className="hover:text-white/70 transition-colors">
                {ui.breadcrumbHome}
              </Link>
              <span>/</span>
              <Link href={`/${l}/insights`} className="hover:text-white/70 transition-colors">
                {ui.breadcrumbInsights}
              </Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{tag}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${colors.pill}`}
              >
                {tag}
              </span>
              <span className="text-white/40 text-xs">{article.date}</span>
              <span className="text-white/40 text-xs">
                · {article.readTime} {ui.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {article.title[l]}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{article.excerpt[l]}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div
            className="prose-af"
            dangerouslySetInnerHTML={{ __html: article.content[l] }}
          />

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-af-ink/10">
            <Link
              href={`/${l}/insights`}
              className="text-af-sienna font-semibold text-sm hover:underline"
            >
              {ui.backInsights}
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="bg-af-stone py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-2xl font-bold text-af-ink mb-8">{ui.related}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((rel) => {
                  const relTag = l === "fr" ? rel.tagFr : rel.tag;
                  const relColors = TAG_COLORS[relTag] ?? {
                    pill: "bg-af-muted text-white",
                    bar: "bg-af-muted",
                  };
                  return (
                    <Link
                      key={rel.slug}
                      href={`/${l}/insights/${rel.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className={`h-1.5 ${relColors.bar} w-full`} />
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${relColors.pill}`}
                          >
                            {relTag}
                          </span>
                          <span className="text-af-muted text-xs">{rel.date}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-af-ink leading-snug group-hover:text-af-sienna transition-colors">
                          {rel.title[l]}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-af-dark py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
            <p className="text-white/60 mb-8 leading-relaxed">{ui.ctaDesc}</p>
            <Link
              href={`/${l}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-af-sienna hover:bg-af-sienna-light text-white font-bold rounded-full transition-colors text-sm tracking-wide"
            >
              {ui.ctaBtn}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
