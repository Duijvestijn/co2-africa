"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

export default function FlagshipProjectSection() {
  const { lang } = useLang();
  const t = translations.flagship[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="flagship" className="bg-af-dark py-24 md:py-32 relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-af-sienna/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-af-sienna/80 font-medium">{t.label}</span>
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
            className="text-af-sienna font-serif text-lg italic"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image */}
          <motion.div
            variants={FU(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden"
          >
            <div
              className="w-full h-80 lg:h-[520px] bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.congoForest})` }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-af-dark/80 via-af-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-af-dark/30 to-transparent" />

            {/* Status badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-af-sienna/90 text-white text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t.status}
              </span>
            </div>

            {/* Location + status desc at bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/90 text-xs font-medium mb-1">{t.statusDesc}</p>
              <div className="flex items-center gap-1.5 text-af-sand/70 text-xs">
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t.location}
              </div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            variants={FU(0.18)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-7"
          >
            {/* Description */}
            <p className="text-af-sand/65 leading-relaxed">{t.description}</p>

            {/* Credentials grid */}
            <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {t.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className={`px-5 py-4 border-b border-white/[0.05] ${
                      i % 2 === 0 && i < t.credentials.length - 1 ? "sm:border-r" : ""
                    } ${i >= t.credentials.length - 2 ? "border-b-0" : ""}`}
                  >
                    <div className="text-af-sand/45 text-xs mb-1 font-medium uppercase tracking-wide">{cred.label}</div>
                    <div className="text-white text-sm font-medium leading-snug">{cred.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact stats */}
            <div>
              <h4 className="text-af-sand/60 text-xs uppercase tracking-[0.2em] font-medium mb-4">{t.impactTitle}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {t.impacts.map((imp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-af-night/70 border border-white/[0.05] text-center">
                    <div className="font-serif text-3xl font-bold text-af-sienna mb-1">{imp.value}</div>
                    <div className="text-af-sand/50 text-xs leading-snug">{imp.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-af-sienna hover:bg-af-sienna-light text-white transition-colors shadow-lg shadow-af-sienna/20"
              >
                {t.cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
