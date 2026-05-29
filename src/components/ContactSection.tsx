"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-af-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + audience flows */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <span className="text-xs tracking-[0.3em] uppercase text-af-green font-bold mb-4 block">{t.label}</span>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-af-ink mb-4">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-af-muted leading-relaxed mb-10">
              {t.subtitle}
            </motion.p>

            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div key={i} variants={FU(0.18 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-black/[0.07] hover:border-af-green/30 transition-colors group shadow-sm">
                  <div>
                    <h4 className="text-af-ink text-sm font-semibold mb-1 group-hover:text-af-green transition-colors">{flow.title}</h4>
                    <p className="text-af-muted text-xs leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: simple form */}
          <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-sm">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-af-page border border-black/[0.12] text-af-ink placeholder-af-muted/60 text-sm focus:outline-none focus:border-af-green/50 transition-colors"
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-af-page border border-black/[0.12] text-af-ink placeholder-af-muted/60 text-sm focus:outline-none focus:border-af-green/50 transition-colors"
              />
              <textarea
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-af-page border border-black/[0.12] text-af-ink placeholder-af-muted/60 text-sm focus:outline-none focus:border-af-green/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-af-green hover:bg-af-green-light text-white font-bold text-sm transition-colors shadow-md shadow-af-green/20"
              >
                {t.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
