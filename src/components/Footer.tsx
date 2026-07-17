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
        <div className="grid md:grid-cols-3 gap-10 mb-10">
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
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t.copyright}</p>
          <span className="text-white/30 text-xs">Powered by nature</span>
        </div>
      </div>
    </footer>
  );
}
