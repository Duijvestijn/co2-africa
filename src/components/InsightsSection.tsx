"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-af-night py-24 md:py-32 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-af-sienna/20 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-af-sienna/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-af-sienna/80 font-medium">{t.label}</span>
              <span className="w-6 h-px bg-af-sienna/50" />
            </div>
          </motion.div>
          <motion.h2
            variants={FU(0.08)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FU(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-af-sand/55 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Article cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              variants={FU(i * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col p-6 rounded-2xl bg-af-dark border border-white/[0.05] hover:border-af-sienna/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Tag + date row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-af-sienna/20 border border-af-sienna/30 text-af-sienna text-[10px] font-bold tracking-wide uppercase">
                  {article.tag}
                </span>
                <span className="text-af-sand/40 text-xs">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-white leading-snug mb-3 group-hover:text-af-sienna transition-colors flex-1">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-af-sand/50 text-sm leading-relaxed mb-5">{article.excerpt}</p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 text-af-sienna text-sm font-medium">
                {t.readMore}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
