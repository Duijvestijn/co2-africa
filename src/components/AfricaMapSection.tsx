"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

/* ─── Project country data ─── */
type CountryKey = "kenya" | "uganda" | "cameroon";

const PROJECTS: Record<CountryKey, {
  labelEn: string; labelFr: string;
  cx: number; cy: number;
  accentEn: string; accentFr: string;
  count: number; methodology: string;
  link: string;
}> = {
  kenya: {
    labelEn: "Kenya", labelFr: "Kenya",
    cx: 375, cy: 268,
    accentEn: "Mount Kenya Agroforestry · Hongera Cookstoves",
    accentFr: "Agroforesterie Mont Kenya · Cuisinières Hongera",
    count: 2, methodology: "ARR · AMS-II.G",
    link: "https://co2.ke/en",
  },
  uganda: {
    labelEn: "Uganda", labelFr: "Ouganda",
    cx: 348, cy: 248,
    accentEn: "Bulindi Chimpanzee Habitat Restoration",
    accentFr: "Restauration Habitat Chimpanzés Bulindi",
    count: 1, methodology: "VM0011 · Gold Standard",
    link: "https://co2.ug/en",
  },
  cameroon: {
    labelEn: "Cameroon", labelFr: "Cameroun",
    cx: 215, cy: 245,
    accentEn: "Congo Basin Reforestation",
    accentFr: "Reboisement Bassin du Congo",
    count: 1, methodology: "ARR",
    link: "https://co2.cm/fr",
  },
};

/* ─── Simplified Africa outline ─── */
// Clockwise from Morocco, smooth-ish approximation
const AFRICA_PATH = `
  M 104,18
  C 125,10 152,6 195,10
  C 235,12 270,16 310,28
  C 335,36 355,52 372,72
  C 385,90 390,115 392,142
  C 394,165 398,185 412,204
  C 425,220 445,228 456,238
  C 462,244 460,254 448,268
  C 438,278 428,285 418,298
  C 408,312 400,328 392,344
  C 380,368 368,395 352,424
  C 336,452 318,472 295,488
  C 270,504 242,514 210,518
  C 185,520 162,515 140,505
  C 118,494 100,476 88,454
  C 76,432 68,404 62,374
  C 57,348 56,320 55,295
  C 54,272 56,255 60,240
  C 64,228 70,218 82,210
  C 94,202 105,198 112,190
  C 118,183 118,175 115,168
  C 110,158 102,148 96,136
  C 88,118 78,100 68,82
  C 60,68 54,50 60,34
  C 66,22 84,18 104,18
  Z
`;

/* ─── Country fill paths (very simplified country shapes) ─── */
// These are rough polygon approximations positioned within the continent
const COUNTRY_PATHS: Record<CountryKey, string> = {
  kenya: `M 340,230 L 380,228 L 400,245 L 410,268 L 402,290 L 380,300 L 352,295 L 334,278 L 330,255 Z`,
  uganda: `M 330,228 L 348,224 L 362,232 L 362,252 L 348,260 L 330,258 L 322,244 Z`,
  cameroon: `M 185,222 L 215,215 L 238,218 L 245,240 L 240,262 L 218,270 L 195,265 L 180,248 L 180,232 Z`,
};

export default function AfricaMapSection() {
  const { lang } = useLang();
  const l = lang as "en" | "fr";
  const [active, setActive] = useState<CountryKey | null>(null);

  const ui = {
    en: {
      label: "Project Footprint",
      title: "Where we work across Africa",
      subtitle: "Green Earth Group operates verified carbon and nature projects in three of Africa's most biodiverse and carbon-rich landscapes.",
      projects: "active projects",
      methodology: "Methodology",
      visitSite: "Visit site →",
      totalProjects: "4",
      totalLabel: "Active projects",
      countries: "3",
      countriesLabel: "Countries",
      standards: "Verra · Gold Standard",
      standardsLabel: "Certification",
    },
    fr: {
      label: "Présence Projets",
      title: "Où nous travaillons en Afrique",
      subtitle: "Green Earth Group opère des projets carbone et nature vérifiés dans trois des paysages africains les plus riches en biodiversité et en carbone.",
      projects: "projets actifs",
      methodology: "Méthodologie",
      visitSite: "Visiter →",
      totalProjects: "4",
      totalLabel: "Projets actifs",
      countries: "3",
      countriesLabel: "Pays",
      standards: "Verra · Gold Standard",
      standardsLabel: "Certification",
    },
  };
  const t = ui[l] ?? ui.en;
  const activeProject = active ? PROJECTS[active] : null;

  return (
    <section className="bg-af-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-af-sienna" />
              <span className="text-xs font-semibold text-af-sienna tracking-widest uppercase">{t.label}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-af-sand/60 text-base leading-relaxed max-w-md">
              {t.subtitle}
            </p>
          </div>

          {/* Summary stats */}
          <div className="flex gap-8 md:gap-12 flex-shrink-0">
            {[
              { value: t.totalProjects, label: t.totalLabel },
              { value: t.countries, label: t.countriesLabel },
              { value: t.standards, label: t.standardsLabel },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-bold text-white leading-none mb-1">{s.value}</div>
                <div className="text-xs text-af-sand/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map + detail panel */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* SVG Africa Map */}
          <div className="relative flex-1 min-h-[420px] flex items-center justify-center">
            <svg
              viewBox="0 0 500 540"
              className="w-full max-w-[480px] mx-auto drop-shadow-2xl"
              aria-label="Map of Africa showing Green Earth project countries"
            >
              {/* Continent fill */}
              <path
                d={AFRICA_PATH}
                fill="rgba(46,107,26,0.10)"
                stroke="rgba(46,107,26,0.20)"
                strokeWidth="1.5"
              />

              {/* Country fills */}
              {(Object.entries(COUNTRY_PATHS) as [CountryKey, string][]).map(([key, path]) => (
                <path
                  key={key}
                  d={path}
                  fill={active === key ? "rgba(184,98,26,0.55)" : "rgba(46,107,26,0.45)"}
                  stroke={active === key ? "#B8621A" : "#47962E"}
                  strokeWidth={active === key ? 2 : 1.2}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActive(key)}
                  onMouseLeave={() => setActive(null)}
                />
              ))}

              {/* Project dots + labels */}
              {(Object.entries(PROJECTS) as [CountryKey, typeof PROJECTS.kenya][]).map(([key, proj]) => (
                <g key={key}
                  onMouseEnter={() => setActive(key)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-pointer"
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={proj.cx} cy={proj.cy} r={14}
                    fill="none"
                    stroke={active === key ? "#B8621A" : "#47962E"}
                    strokeWidth="1.5"
                    animate={{ r: [12, 20, 12], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: key === "kenya" ? 0 : key === "uganda" ? 0.8 : 1.6 }}
                  />
                  {/* Dot */}
                  <circle
                    cx={proj.cx} cy={proj.cy} r={6}
                    fill={active === key ? "#B8621A" : "#47962E"}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />
                  {/* Label */}
                  <text
                    x={proj.cx + (key === "cameroon" ? -8 : 12)}
                    y={proj.cy + (key === "cameroon" ? -10 : 5)}
                    fill={active === key ? "#D4803A" : "rgba(232,213,176,0.8)"}
                    fontSize="10"
                    fontFamily="var(--font-sans), system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.5"
                    className="transition-all duration-300 select-none"
                    textAnchor={key === "cameroon" ? "end" : "start"}
                  >
                    {l === "fr" ? proj.labelFr : proj.labelEn}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Detail panel */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            {activeProject ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white/[0.05] border border-white/[0.10] rounded-2xl p-6"
              >
                <div className="text-xs text-af-sienna font-bold tracking-widest uppercase mb-3">
                  {active ? (l === "fr" ? PROJECTS[active].labelFr : PROJECTS[active].labelEn) : ""}
                </div>
                <p className="text-white font-semibold leading-snug mb-4">
                  {l === "fr" ? activeProject.accentFr : activeProject.accentEn}
                </p>
                <div className="flex items-center gap-4 mb-5 text-sm">
                  <div>
                    <div className="text-af-sand/40 text-xs mb-0.5">{t.projects}</div>
                    <div className="text-white font-bold">{activeProject.count}</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <div className="text-af-sand/40 text-xs mb-0.5">{t.methodology}</div>
                    <div className="text-white font-bold text-xs">{activeProject.methodology}</div>
                  </div>
                </div>
                <Link
                  href={activeProject.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-af-sienna hover:text-af-sienna-light transition-colors"
                >
                  {t.visitSite}
                </Link>
              </motion.div>
            ) : (
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-af-sand/40 text-sm leading-relaxed">
                  {l === "fr"
                    ? "Survolez un pays sur la carte pour voir les détails du projet."
                    : "Hover a country on the map to see project details."}
                </p>
                <div className="mt-6 space-y-3">
                  {(Object.entries(PROJECTS) as [CountryKey, typeof PROJECTS.kenya][]).map(([key, proj]) => (
                    <button
                      key={key}
                      onMouseEnter={() => setActive(key)}
                      onMouseLeave={() => setActive(null)}
                      className="w-full flex items-center gap-3 text-left group"
                    >
                      <span className="w-2 h-2 rounded-full bg-af-green flex-shrink-0 group-hover:bg-af-sienna transition-colors" />
                      <span className="text-af-sand/60 text-sm group-hover:text-white transition-colors">
                        {l === "fr" ? proj.labelFr : proj.labelEn}
                      </span>
                      <span className="text-af-sand/30 text-xs ml-auto">
                        {proj.count} {l === "fr" ? "projet" : "project"}{proj.count > 1 ? "s" : ""}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
