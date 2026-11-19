import type { Metadata } from "next";
import { profile, site } from "@/lib/site";
import { cases, counterpart } from "@/lib/cases";
import { casePath, homePath, type Lang } from "@/lib/i18n";

const base = { icons: { icon: "/logo.svg" } };

export function homeMetadata(lang: Lang): Metadata {
  return {
    ...base,
    title: `${profile.name} · ${profile.role}`,
    description: site[lang].description,
    alternates: { languages: { "pt-BR": homePath("pt"), en: homePath("en") } },
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
    alternates: { languages: { "pt-BR": paths.pt, en: paths.en } },
  };
}
