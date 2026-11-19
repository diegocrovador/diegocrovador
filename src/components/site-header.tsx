import Link from "next/link";
import { Logo } from "@/components/logo";
import { LangToggle } from "@/components/lang-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/site";
import { homePath, sectionPath, ui, type Lang } from "@/lib/i18n";

export function SiteHeader({ lang, hrefs }: { lang: Lang; hrefs: Record<Lang, string> }) {
  const t = ui[lang];
  const nav = [
    { id: "cases", label: t.nav.cases },
    { id: "processo", label: t.nav.process },
    { id: "sobre", label: t.nav.about },
    { id: "contato", label: t.nav.contact },
  ];
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-background focus-visible:px-4 focus-visible:py-2 focus-visible:ring-2 focus-visible:ring-ring"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href={homePath(lang)}
            className="flex items-center gap-3"
            aria-label={`${profile.name}, ${t.home}`}
          >
            <Logo className="h-7 w-auto text-primary" />
            <span className="font-bold tracking-tight">{profile.name}</span>
          </Link>
          <nav aria-label={t.mainNav} className="hidden gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.id}
                href={sectionPath(lang, item.id)}
                className={cn(buttonVariants({ variant: "ghost" }), "h-9 px-3 text-[0.95rem]")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} hrefs={hrefs} />
            <Link
              href={sectionPath(lang, "contato")}
              className={cn(buttonVariants(), "hidden h-9 px-4 font-semibold sm:inline-flex")}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
