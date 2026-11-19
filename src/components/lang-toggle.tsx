import Link from "next/link";
import { cn } from "@/lib/utils";
import { htmlLang, langs, ui, type Lang } from "@/lib/i18n";

const labels: Record<Lang, { short: string; full: string }> = {
  pt: { short: "PT", full: "Português" },
  en: { short: "EN", full: "English" },
};

export function LangToggle({ lang, hrefs }: { lang: Lang; hrefs: Record<Lang, string> }) {
  return (
    <nav aria-label={ui[lang].langSwitch}>
      <ul className="flex rounded-lg bg-muted p-0.5 text-sm font-semibold">
        {langs.map((l) => {
          const active = l === lang;
          return (
            <li key={l}>
              <Link
                href={hrefs[l]}
                hrefLang={htmlLang[l]}
                lang={htmlLang[l]}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "grid h-8 min-w-10 place-items-center rounded-md px-2 transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  active
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span aria-hidden="true">{labels[l].short}</span>
                <span className="sr-only">{labels[l].full}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
