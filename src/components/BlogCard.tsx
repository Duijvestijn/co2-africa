"use client";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lang: string;
};

export default function BlogCard({ slug, title, excerpt, date, lang }: Props) {
  const formatted = new Date(date).toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link href={`/${lang}/blog/${slug}`} className="block group">
      <article className="bg-white rounded-2xl border border-black/[0.07] p-6 hover:shadow-md transition-shadow h-full flex flex-col">
        <time className="text-xs text-af-muted font-medium tracking-wide uppercase">{formatted}</time>
        <h3 className="font-serif text-lg font-bold text-af-ink mt-2 mb-3 group-hover:text-af-sienna transition-colors leading-snug flex-1">
          {title}
        </h3>
        <p className="text-af-muted text-sm leading-relaxed">{excerpt}</p>
        <span className="text-af-sienna font-semibold text-sm mt-4 inline-block">
          {lang === "fr" ? "Lire la suite →" : "Read more →"}
        </span>
      </article>
    </Link>
  );
}
