"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-white py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-af-ink leading-tight mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-af-muted text-lg leading-relaxed">
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.standards.map((std, i) => (
            <motion.div key={std.code} variants={FU(i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group flex flex-col p-7 rounded-2xl bg-af-stone hover:bg-white border border-af-stone hover:border-black/10 hover:shadow-lg transition-all duration-300">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-af-green text-white text-xs font-mono font-bold tracking-widest uppercase mb-5 self-start">
                {std.code}
              </span>
              <h3 className="font-serif text-xl font-bold text-af-ink mb-3 group-hover:text-af-green transition-colors leading-snug">
                {std.name}
              </h3>
              <p className="text-af-muted text-sm leading-relaxed flex-1 mb-5">{std.desc}</p>
              <div className="pt-4 border-t border-black/[0.06]">
                <span className="text-af-green text-xs font-bold">{std.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
