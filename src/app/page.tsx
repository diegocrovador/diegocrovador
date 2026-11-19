import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const ctaLg = "h-12 px-6 text-base font-semibold";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3" aria-label={`${site.name}, início`}>
            <Logo className="h-7 w-auto text-primary" />
            <span className="font-bold tracking-tight">{site.name}</span>
          </a>
          <nav aria-label="Principal" className="hidden gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(buttonVariants({ variant: "ghost" }), "h-9 px-3 text-[0.95rem]")}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contato" className={cn(buttonVariants(), "h-9 px-4 font-semibold")}>
            Vamos conversar
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 md:pt-28 md:pb-32">
          <Badge variant="secondary" className="h-7 px-3 text-sm font-semibold text-primary-strong">
            {site.role}
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {site.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#cases" className={cn(buttonVariants(), ctaLg)}>
              Ver cases <ArrowRight data-icon="inline-end" />
            </a>
            <a href="#contato" className={cn(buttonVariants({ variant: "outline" }), ctaLg)}>
              Entrar em contato
            </a>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="scroll-mt-16 bg-muted/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow="Trabalhos" title="Cases selecionados" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {site.cases.map((c, i) => (
                <Card key={c.title} className="group transition-shadow hover:shadow-lg">
                  <div
                    aria-hidden="true"
                    className="mx-4 grid aspect-[4/3] place-items-center rounded-lg bg-secondary text-primary/30"
                  >
                    <span className="text-6xl font-bold">0{i + 1}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{c.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {c.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-sm font-semibold text-primary-strong">{c.result}</span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      Ler case <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">: {c.title}</span>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <div
            aria-hidden="true"
            className="grid aspect-square place-items-center rounded-2xl bg-secondary"
          >
            <Logo className="w-1/3 text-primary" />
          </div>
          <div className="self-center">
            <SectionTitle eyebrow="Sobre" title="Olá! Prazer em te conhecer." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Espaço para a sua história: formação, empresas em que trabalhou, áreas em que
              tem mais experiência e o que te motiva no design de experiência.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ferramentas e competências: Figma, pesquisa com usuários, arquitetura da
              informação, prototipação, testes de usabilidade, design systems.
            </p>
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Processo */}
        <section id="processo" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <SectionTitle eyebrow="Como trabalho" title="Processo" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((p, i) => (
              <li key={p.step} className="rounded-xl border p-6">
                <span className="grid size-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.step}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-16 bg-foreground py-24 text-background">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Tem um projeto em mente? Vamos conversar.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-background/75">
              Estou disponível para novos projetos, consultorias e oportunidades.
            </p>
            <a href={`mailto:${site.email}`} className={cn(buttonVariants(), ctaLg, "mt-10")}>
              <Mail data-icon="inline-start" /> {site.email}
            </a>
            <ul className="mt-10 flex flex-wrap justify-center gap-6">
              {site.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
                  >
                    {l.label} <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <span className="flex items-center gap-2">
            <Logo className="h-4 w-auto text-primary" /> © {new Date().getFullYear()} {site.name}
          </span>
          <span>Feito com shadcn/ui</span>
        </div>
      </footer>
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
