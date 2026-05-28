import { notFound } from "next/navigation";
import { LangProvider, type Lang } from "@/lib/LangContext";

const SUPPORTED: Lang[] = ["en", "fr"];
const BASE = "https://co2.africa";

const TITLES: Record<Lang, string> = {
  en: "CO2.Africa — Nature Restoration & Carbon Finance",
  fr: "CO2.Africa — Restauration de la Nature & Finance Carbone",
};
const DESCS: Record<Lang, string> = {
  en: "Africa's greatest untapped carbon potential — Congo Basin, savannas, mangroves, and Sahel. Verra VCS verified projects.",
  fr: "Le plus grand potentiel carbone inexploité de l'Afrique — Bassin du Congo, savanes, mangroves et Sahel. Projets certifiés Verra VCS.",
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (SUPPORTED.includes(rawLang as Lang) ? rawLang : "en") as Lang;
  return {
    title: TITLES[lang],
    description: DESCS[lang],
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages: { en: `${BASE}/en`, fr: `${BASE}/fr`, "x-default": `${BASE}/en` },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang as Lang)) notFound();
  return <LangProvider initialLang={lang as Lang}>{children}</LangProvider>;
}
