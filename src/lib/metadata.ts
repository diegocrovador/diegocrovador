import type { Metadata } from "next";
import { profile, site } from "@/lib/site";
import { cases, counterpart } from "@/lib/cases";
import { asset } from "@/lib/asset";
import { casePath, homePath, type Lang } from "@/lib/i18n";

// Endereço público do site, usado nos links de idioma alternativo para buscadores
const base: Metadata = {
  metadataBase: new URL("https://diegocrovador.github.io"),
  icons: { icon: asset("/logo.svg") },
};

export function homeMetadata(lang: Lang): Metadata {
  return {
    ...base,
    title: `${profile.name} · ${profile.role}`,
    description: site[lang].description,
    alternates: { languages: { "pt-BR": asset(homePath("pt")), en: asset(homePath("en")) } },
  };
}

export function caseMetadata(lang: Lang, slug: string): Metadata {
  const c = cases[lang].find((x) => x.slug === slug);
  if (!c) return base;
  const other: Lang = lang === "pt" ? "en" : "pt";
  const o = counterpart(slug, lang, other);
  const paths = { [lang]: casePath(lang, slug), [other]: o ? casePath(other, o.slug) : homePath(other) };
  return {
    ...base,
    title: `${c.title} · ${profile.name}`,
    description: c.subtitle,
    alternates: { languages: { "pt-BR": asset(paths.pt), en: asset(paths.en) } },
  };
}
