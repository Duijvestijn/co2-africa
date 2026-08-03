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

const PROJECT_IMAGES = [IMAGES.congoForest, IMAGES.savanna, IMAGES.mangroves, IMAGES.sahel];

export default function ProjectsSection() {
  const { lang } = useLang();
  const t = translations.projects[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const projects = [
    { title: t.project1Title, desc: t.project1Desc, tag: t.project1Tag },
    { title: t.project2Title, desc: t.project2Desc, tag: t.project2Tag },
    { title: t.project3Title, desc: t.project3Desc, tag: t.project3Tag },
    { title: t.project4Title, desc: t.project4Desc, tag: t.project4Tag },
  ];

  return (
    <section id="projects" className="bg-af-page py-24 md:py-32">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} variants={FU(i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-black/[0.06] hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${PROJECT_IMAGES[i]})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-af-sienna text-white text-xs font-bold uppercase tracking-wide">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold text-af-ink mb-3 group-hover:text-af-green transition-colors">{p.title}</h3>
                <p className="text-af-muted text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-af-green text-sm font-semibold">
                  <span>{lang === "fr" ? "En savoir plus" : "Learn more"}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
