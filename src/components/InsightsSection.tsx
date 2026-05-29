"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const TAG_COLORS: Record<string, string> = {
  "Market": "bg-af-green/10 text-af-green border-af-green/20",
  "Marché": "bg-af-green/10 text-af-green border-af-green/20",
  "Policy": "bg-af-sky/10 text-af-sky border-af-sky/20",
  "Politique": "bg-af-sky/10 text-af-sky border-af-sky/20",
  "Science": "bg-af-sienna/10 text-af-sienna border-af-sienna/20",
};

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-af-stone py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs tracking-[0.3em] uppercase text-af-green font-bold mb-4 block">
              {t.label}
            </motion.span>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-af-ink leading-tight">
              {t.title}
            </motion.h2>
          </div>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-af-muted max-w-xs leading-relaxed text-sm">
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.articles.map((article, i) => {
            const tagClass = TAG_COLORS[article.tag] || "bg-af-green/10 text-af-green border-af-green/20";
            return (
              <motion.a
                key={i}
                href={article.href || "#insights"}
                variants={FU(i * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1.5 bg-af-green w-full" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${tagClass}`}>
                      {article.tag}
                    </span>
                    <span className="text-af-muted text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-af-ink mb-3 group-hover:text-af-green transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>
                  <p className="text-af-muted text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-af-green text-sm font-semibold mt-auto">
                    <span>{lang === "fr" ? "Lire l'article" : "Read article"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
