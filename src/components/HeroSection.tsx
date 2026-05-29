"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-af-dark/90 via-af-dark/60 to-af-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-dark/80 via-transparent to-af-dark/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full pb-24 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="visible"
              className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-af-sienna" />
              <span className="text-xs tracking-[0.3em] uppercase text-af-sienna font-semibold">{t.label}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 custom={1} variants={FADE_UP} initial="hidden" animate="visible"
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.0] text-white mb-6">
              {t.titleLine1}
              <br />
              <span className="text-af-sienna italic">{t.titleLine2}</span>
            </motion.h1>

            {/* Description */}
            <motion.p custom={2} variants={FADE_UP} initial="hidden" animate="visible"
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              {t.description}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={FADE_UP} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4">
              <a href="#what-is"
                className="px-8 py-4 rounded-xl bg-af-green hover:bg-af-green-light text-white font-bold text-sm transition-colors shadow-lg shadow-af-green/30">
                {t.btn1}
              </a>
              <a href="#projects"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm backdrop-blur-sm transition-colors">
                {t.btn2}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
