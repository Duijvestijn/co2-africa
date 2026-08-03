"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function ImpactStatsBar() {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  return (
    <section ref={ref} className="bg-af-dark border-t border-af-green/20 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">

          {/* Dominant hero stat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:w-72 md:border-r md:border-white/[0.08] md:pr-12 flex-shrink-0"
          >
            <div className="font-serif text-7xl md:text-8xl font-bold text-af-sienna leading-none tracking-tight">
              {stats[2].value}
            </div>
            <div className="text-af-sand/50 text-sm mt-3 leading-snug max-w-[200px]">
              {stats[2].label}
            </div>
          </motion.div>

          {/* Three secondary stats */}
          <div className="md:pl-12 flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 flex-1">
            {[stats[0], stats[1], stats[3]].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.1, duration: 0.6 }}
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-af-sand/40 text-xs leading-snug max-w-[140px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
