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

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-af-night py-24 md:py-32 relative overflow-hidden">
      {/* Subtle gradient accent */}
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
            className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
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

        {/* Standards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.standards.map((std, i) => (
            <motion.div
              key={std.code}
              variants={FU(i * 0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col p-6 rounded-2xl bg-af-dark border border-white/[0.05] hover:border-af-sienna/30 transition-all duration-300"
            >
              {/* Code badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-af-sienna/15 border border-af-sienna/25 text-af-sienna text-xs font-mono font-bold tracking-widest uppercase">
                  {std.code}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-af-sienna transition-colors leading-snug">
                {std.name}
              </h3>

              {/* Description */}
              <p className="text-af-sand/50 text-sm leading-relaxed flex-1 mb-5">{std.desc}</p>

              {/* Stat pill */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-af-sand/60 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-af-sienna/70 flex-shrink-0" />
                  {std.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-af-sienna/20 to-transparent" />
    </section>
  );
}
