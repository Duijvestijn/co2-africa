"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

const CODES = ["CB", "SA", "MG", "ST", "PA", "MK"];

export default function WhyAfricaSection() {
  const { lang } = useLang();
  const t = translations.whyAfrica[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  const advantages = [
    { title: t.adv1Title, desc: t.adv1Desc },
    { title: t.adv2Title, desc: t.adv2Desc },
    { title: t.adv3Title, desc: t.adv3Desc },
    { title: t.adv4Title, desc: t.adv4Desc },
    { title: t.adv5Title, desc: t.adv5Desc },
    { title: t.adv6Title, desc: t.adv6Desc },
  ];

  return (
    <section id="why-africa" className="bg-af-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.congoForest})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-af-dark via-af-dark/95 to-af-dark" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-af-sienna/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-af-sienna/80 font-medium">{t.label}</span>
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-af-sienna font-serif text-lg italic mb-6">
            {t.subtitle}
          </motion.p>
          <motion.p variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-af-sand/60 leading-relaxed">
            {t.intro}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div key={i} variants={FU(i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-af-night/80 border border-af-sienna/15 hover:border-af-sienna/30 transition-colors text-center">
              <div className="font-serif text-3xl font-bold text-af-sienna mb-2">{s.value}</div>
              <div className="text-af-sand/50 text-xs leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((adv, i) => (
            <motion.div key={i} variants={FU(i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex gap-4 p-5 rounded-2xl bg-af-night/60 border border-white/[0.05] hover:border-af-sienna/20 transition-all group">
              <span className="text-[10px] font-mono font-bold text-af-sienna/70 border border-af-sienna/20 px-1.5 py-0.5 rounded flex-shrink-0 mt-1">
                {CODES[i]}
              </span>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-af-sienna transition-colors">{adv.title}</h4>
                <p className="text-af-sand/45 text-xs leading-relaxed">{adv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
