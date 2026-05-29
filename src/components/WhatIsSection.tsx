"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function WhatIsSection() {
  const { lang } = useLang();
  const t = translations.whatIs[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    { n: "01", title: t.step1Title, desc: t.step1Desc },
    { n: "02", title: t.step2Title, desc: t.step2Desc },
    { n: "03", title: t.step3Title, desc: t.step3Desc },
    { n: "04", title: t.step4Title, desc: t.step4Desc },
  ];

  return (
    <section id="what-is" className="bg-af-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + intro */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <span className="text-xs tracking-[0.3em] uppercase text-af-green font-bold mb-4 block">{t.label}</span>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-af-ink leading-tight mb-6">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-af-green font-serif text-xl italic mb-6 leading-relaxed">
              {t.subtitle}
            </motion.p>
            <motion.p variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-af-muted text-lg leading-relaxed mb-8">
              {t.intro}
            </motion.p>
            <motion.div variants={FU(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-af-green/10 border-l-4 border-af-green">
              <h3 className="text-af-green font-bold text-sm uppercase tracking-wider mb-2">{t.whyTitle}</h3>
              <p className="text-af-ink/70 leading-relaxed text-sm">{t.whyDesc}</p>
            </motion.div>
          </div>

          {/* Right: steps */}
          <div className="grid grid-cols-1 gap-4">
            {steps.map((s, i) => (
              <motion.div key={i} variants={FU(i * 0.1 + 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-md transition-shadow group">
                <div className="font-serif text-5xl font-bold text-af-ink/10 leading-none flex-shrink-0 w-12">{s.n}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-af-ink mb-2 group-hover:text-af-green transition-colors">{s.title}</h3>
                  <p className="text-af-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
