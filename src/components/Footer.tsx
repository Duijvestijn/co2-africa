"use client";

import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations.footer[lang];
  const nav = translations.nav[lang];

  return (
    <footer className="bg-af-dark border-t border-white/[0.08] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif font-bold text-xl leading-none tracking-tight mb-2">
              <span className="text-af-sienna">CO2</span>
              <span className="text-white/80">.africa</span>
            </div>
            <div className="text-af-sienna/70 text-xs tracking-widest mb-4">{t.tagline}</div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">{t.disclaimer}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.links}</h4>
            <ul className="space-y-2">
              {[
                { label: nav.credits, href: "#what-is" },
                { label: nav.why, href: "#why-africa" },
                { label: nav.projects, href: "#projects" },
                { label: nav.insights, href: `/${lang}/insights` },
                { label: nav.contact, href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/60 hover:text-af-sienna text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              {[
                { label: "Verra VCS", href: "https://verra.org" },
                { label: "Gold Standard", href: "https://goldstandard.org" },
                { label: "Paris Agreement", href: "https://unfccc.int" },
                { label: "African Union", href: "https://au.int" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white/60 hover:text-af-sienna text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Network */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {lang === "fr" ? "Réseau" : "Network"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: "CO2.ke", href: "https://co2.ke" },
                { label: "CO2.africa", href: "https://co2.africa" },
                { label: "CO2.ug", href: "https://co2.ug" },
                { label: "CO2.cm", href: "https://co2.cm" },
                { label: "biodiversity.ae", href: "https://biodiversity.ae" },
                { label: "carboncredits.kz", href: "https://carboncredits.kz" },
              ].filter(l => l.href !== "https://co2.africa").map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-af-sienna text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Carbon Markets horizontal bar */}
        <div className="border-t border-white/[0.08] pt-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-3">
            {lang === "fr" ? "Marchés Carbone Connexes" : "Related Carbon Markets"}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { name: "CO2.ke", url: "https://co2.ke", label: "Kenya" },
              { name: "CO2.ug", url: "https://co2.ug", label: "Uganda" },
              { name: "CO2.cm", url: "https://co2.cm", label: "Cameroon" },
              { name: "Biodiversity.ae", url: "https://biodiversity.ae", label: "UAE" },
              { name: "CarbonCredits.kz", url: "https://carboncredits.kz", label: "Kazakhstan" },
            ].map(site => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t.copyright}</p>
          <span className="text-white/30 text-xs">Powered by nature</span>
        </div>
      </div>
    </footer>
  );
}
