"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function FlagshipProjectSection() {
  const { lang } = useLang();
  const t = translations.flagship[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="flagship" className="bg-af-dark overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
          {/* Left: content */}
          <div className="py-16 pr-0 lg:pr-12 flex flex-col justify-center">
            <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs tracking-[0.3em] uppercase text-af-sienna font-bold mb-4 block">
              {t.label}
            </motion.span>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-white/70 leading-relaxed mb-8">
              {t.description}
            </motion.p>

            {/* Impact stats grid */}
            {t.impacts && t.impacts.length > 0 && (
              <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4 mb-8">
                {t.impacts.map((s: { value: string; label: string }, i: number) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                    <div className="font-serif text-3xl font-bold text-af-sienna mb-1">{s.value}</div>
                    <div className="text-white/50 text-xs">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Credentials */}
            {t.credentials && t.credentials.length > 0 && (
              <motion.div variants={FU(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="space-y-2 mb-8">
                {t.credentials.map((c: { label: string; value: string }, i: number) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-white/50 text-sm">{c.label}</span>
                    <span className="text-af-sienna text-sm font-semibold">{c.value}</span>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.a variants={FU(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}
              href="#contact"
              className="self-start px-7 py-3.5 bg-af-sienna hover:bg-af-sienna-light text-white font-bold text-sm rounded-xl transition-colors">
              {t.cta}
            </motion.a>
          </div>

          {/* Right: full image */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
            initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative min-h-[400px] lg:min-h-0 -mx-6 lg:mx-0 lg:-mr-6">
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.mangroves})` }} />
            <div className="absolute inset-0 bg-af-dark/20" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1.5 rounded-full bg-af-green text-white text-xs font-bold">
                {lang === "fr" ? "● Actif" : "● Active"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
