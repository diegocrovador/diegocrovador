import Link from "next/link";
import { ArrowRight, ArrowUpRight, Hammer } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ProcessTimeline } from "@/components/process-timeline";
import { ContactSection, SiteFooter } from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { profile, site } from "@/lib/site";
import { cases } from "@/lib/cases";
import { casePath, homePath, ui, type Lang } from "@/lib/i18n";

const ctaLg = "h-12 px-6 text-base font-semibold";

export function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const s = site[lang];
  return (
    <>
      <SiteHeader lang={lang} hrefs={{ pt: homePath("pt"), en: homePath("en") }} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {/* Apresentação */}
        <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 md:pt-28 md:pb-32">
          <h1 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {s.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{s.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#cases" className={cn(buttonVariants(), ctaLg)}>
              {t.viewCases} <ArrowRight data-icon="inline-end" />
            </a>
            <a href="#contato" className={cn(buttonVariants({ variant: "outline" }), ctaLg)}>
              {t.getInTouch}
            </a>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="scroll-mt-16 bg-muted/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow={t.work} title={t.selectedCases} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases[lang].map((c) => (
                <Card key={c.slug} className="relative transition-shadow hover:shadow-lg">
                  <div
                    aria-hidden="true"
                    className="mx-4 grid aspect-[4/3] place-items-center rounded-lg bg-secondary text-primary/30"
                  >
                    <span className="text-6xl font-bold">{c.number}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{c.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {c.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="mt-auto justify-between gap-4">
                    <span className="text-sm font-semibold text-primary-strong">{c.highlight}</span>
                    <Link
                      href={casePath(lang, c.slug)}
                      className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold underline-offset-4 after:absolute after:inset-0 hover:underline"
                    >
                      {t.readCase} <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">: {c.title}</span>
                    </Link>
                  </CardFooter>
                </Card>
              ))}

              <Card className="bg-transparent shadow-none ring-0 outline-1 outline-border outline-dashed">
                <div
                  aria-hidden="true"
                  className="mx-4 grid aspect-[4/3] place-items-center rounded-lg border-2 border-dashed border-primary/30"
                >
                  <Hammer className="size-12 text-primary/50" />
                </div>
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className="mb-2 h-6 px-2.5 font-semibold text-primary-strong"
                  >
                    {t.inProgress}
                  </Badge>
                  <CardTitle className="text-xl font-bold">{s.caseInProgress.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {s.caseInProgress.summary}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="mx-auto grid max-w-6xl scroll-mt-16 gap-10 px-4 py-24 sm:px-6 md:grid-cols-[200px_1fr] md:gap-16"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={`${t.photoOf} ${profile.name}`}
            width={200}
            height={200}
            className="size-[200px] self-start rounded-full object-cover ring-6 ring-secondary"
          />
          <div>
            <SectionTitle eyebrow={t.aboutMe} title={`${profile.name}, ${profile.role}`} />
            {s.about.map((text) => (
              <p key={text.slice(0, 20)} className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <hr className="border-border" />
        </div>

        <ProcessTimeline lang={lang} />

        <ContactSection lang={lang} />
      </main>
      <SiteFooter />
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-bold tracking-widest text-primary-strong uppercase">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
