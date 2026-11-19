import Link from "next/link";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactSection, SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cases, counterpart, type Block, type CaseStudy } from "@/lib/cases";
import { asset } from "@/lib/asset";
import { casePath, homePath, sectionPath, ui, type Lang } from "@/lib/i18n";

export function CasePage({ lang, study }: { lang: Lang; study: CaseStudy }) {
  const t = ui[lang];
  const c = study;
  const list = cases[lang];
  const next = list[(list.findIndex((x) => x.slug === c.slug) + 1) % list.length];
  const other: Lang = lang === "pt" ? "en" : "pt";
  const otherCase = counterpart(c.slug, lang, other);
  const hrefs = {
    [lang]: casePath(lang, c.slug),
    [other]: otherCase ? casePath(other, otherCase.slug) : homePath(other),
  } as Record<Lang, string>;

  return (
    <>
      <SiteHeader lang={lang} hrefs={hrefs} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <article>
          <header className="bg-muted/60">
            <div className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 md:pt-16">
              <Link
                href={sectionPath(lang, "cases")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="size-4" aria-hidden="true" /> {t.allCases}
              </Link>
              <p className="mt-10 text-sm font-bold tracking-widest text-primary-strong uppercase">
                {t.case} {c.number}
              </p>
              <h1 className="mt-3 text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl">
                {c.title}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{c.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-background">
                    {tag}
                  </Badge>
                ))}
              </div>
              <dl className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-bold">{t.context}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{c.context}</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold">{t.myRole}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{c.role}</dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            {c.sections.map((s, i) => (
              <section key={s.heading} className={i > 0 ? "mt-16" : undefined}>
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                  {s.heading}
                </h2>
                {s.blocks.map((b, j) => (
                  <ContentBlock key={j} block={b} imageLabel={t.image} />
                ))}
              </section>
            ))}
          </div>
        </article>

        <Separator className="mx-auto max-w-3xl" />
        <nav aria-label={t.nextCase} className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link href={casePath(lang, next.slug)} className="group block">
            <span className="text-sm font-bold tracking-widest text-primary-strong uppercase">
              {t.nextCase}
            </span>
            <span className="mt-2 flex items-center gap-2 text-2xl font-bold tracking-tight group-hover:underline sm:text-3xl">
              {next.title}
              <ArrowRight
                className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </nav>

        <ContactSection lang={lang} />
      </main>
      <SiteFooter />
    </>
  );
}

function ContentBlock({ block, imageLabel }: { block: Block; imageLabel: string }) {
  if (block.type === "p") {
    return <p className="mt-5 text-lg leading-relaxed text-foreground/85">{block.text}</p>;
  }
  return (
    <figure className="my-10">
      {block.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(block.src)} alt={block.alt} className="w-full rounded-xl border" />
      ) : (
        <div className="grid aspect-video place-items-center rounded-xl border-2 border-dashed border-primary/30 bg-secondary text-center">
          <span className="flex flex-col items-center gap-2 text-sm font-semibold text-primary-strong">
            <ImageIcon className="size-8" aria-hidden="true" />
            {imageLabel}: {block.alt}
          </span>
        </div>
      )}
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {block.caption}
      </figcaption>
    </figure>
  );
}
