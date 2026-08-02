import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getPost } from "@/lib/posts";

const SUPPORTED = ["en", "fr"];
const BASE = "https://co2.africa";

const UI = {
  en: {
    backBlog: "← All articles",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    related: "Related articles",
    ctaTitle: "Partner with Green Earth Group in Africa",
    ctaDesc: "We work with governments, investors, landowners, and project developers across Africa.",
    ctaBtn: "Start a conversation",
  },
  fr: {
    backBlog: "← Tous les articles",
    breadcrumbHome: "Accueil",
    breadcrumbBlog: "Blog",
    related: "Articles connexes",
    ctaTitle: "Partenariat avec Green Earth Group en Afrique",
    ctaDesc: "Nous travaillons avec des gouvernements, des investisseurs, des propriétaires fonciers et des développeurs de projets à travers l'Afrique.",
    ctaBtn: "Commencer une conversation",
  },
};

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const l = SUPPORTED.includes(lang) ? (lang as "en" | "fr") : "en";
  const post = getPost(slug);
  if (!post) return {};
  const t = post.lang[l] ?? post.lang.en;
  return {
    title: `${t.title} — CO2.Africa`,
    description: t.excerpt,
    openGraph: {
      title: t.title,
      description: t.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${BASE}/${l}/blog/${slug}`,
    },
    alternates: {
      canonical: `${BASE}/${l}/blog/${slug}`,
      languages: {
        en: `${BASE}/en/blog/${slug}`,
        fr: `${BASE}/fr/blog/${slug}`,
        "x-default": `${BASE}/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const l = lang as "en" | "fr";
  const post = getPost(slug);
  if (!post) notFound();

  const t = post.lang[l] ?? post.lang.en;
  const ui = UI[l];

  const related = posts.filter(p => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.excerpt,
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "CO2.Africa", url: BASE },
    url: `${BASE}/${l}/blog/${slug}`,
  };

  const formatted = new Date(post.date).toLocaleDateString(
    l === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${BASE}/${l}` },
              { "@type": "ListItem", position: 2, name: ui.breadcrumbBlog, item: `${BASE}/${l}/blog` },
              { "@type": "ListItem", position: 3, name: t.title, item: `${BASE}/${l}/blog/${slug}` },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="min-h-screen bg-af-page">
        {/* Hero */}
        <div className="bg-af-dark pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
              <Link href={`/${l}`} className="hover:text-white/70 transition-colors">{ui.breadcrumbHome}</Link>
              <span>/</span>
              <Link href={`/${l}/blog`} className="hover:text-white/70 transition-colors">{ui.breadcrumbBlog}</Link>
            </nav>
            <time className="text-af-sienna/70 text-xs font-bold tracking-widest uppercase block mb-4">{formatted}</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{t.excerpt}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div className="prose-af" dangerouslySetInnerHTML={{ __html: t.content }} />

          <div className="mt-14 pt-8 border-t border-af-ink/10">
            <Link href={`/${l}/blog`} className="text-af-sienna font-semibold text-sm hover:underline">
              {ui.backBlog}
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="bg-af-stone py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-2xl font-bold text-af-ink mb-8">{ui.related}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map(rel => {
                  const rt = rel.lang[l] ?? rel.lang.en;
                  return (
                    <Link
                      key={rel.slug}
                      href={`/${l}/blog/${rel.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className="h-1.5 bg-af-sienna w-full" />
                      <div className="p-6 flex flex-col gap-3">
                        <span className="text-af-muted text-xs">{new Date(rel.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <h3 className="font-serif text-base font-bold text-af-ink leading-snug group-hover:text-af-sienna transition-colors">
                          {rt.title}
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
