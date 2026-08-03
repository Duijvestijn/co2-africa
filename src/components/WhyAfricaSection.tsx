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

export default function WhyAfricaSection() {
  const { lang } = useLang();
  const t = translations.whyAfrica[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const advantages = [
    { title: t.adv1Title, desc: t.adv1Desc },
    { title: t.adv2Title, desc: t.adv2Desc },
    { title: t.adv3Title, desc: t.adv3Desc },
    { title: t.adv4Title, desc: t.adv4Desc },
    { title: t.adv5Title, desc: t.adv5Desc },
    { title: t.adv6Title, desc: t.adv6Desc },
  ];

  return (
    <section id="why-africa" className="relative overflow-hidden">
      {/* Full-bleed image top band */}
      <div className="relative h-80 md:h-96">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.congoForest})` }} />
        <div className="absolute inset-0 bg-af-dark/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-10">
          <div ref={ref} className="max-w-6xl mx-auto px-6 w-full">
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
              {t.title}
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Light advantages grid */}
      <div className="bg-af-stone py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-af-green font-serif text-xl italic mb-10 max-w-2xl">
            {t.subtitle}
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={FU(i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="p-6 bg-white rounded-2xl shadow-sm border border-black/[0.05] hover:shadow-md transition-shadow group">
                <div className="w-8 h-1 bg-af-green rounded mb-4" />
                <h4 className="text-af-ink font-bold text-base mb-2 group-hover:text-af-green transition-colors">{adv.title}</h4>
                <p className="text-af-muted text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
