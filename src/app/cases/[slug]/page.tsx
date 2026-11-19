import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactSection, SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cases, type Block } from "@/lib/cases";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return c ? { title: `${c.title} · ${site.name}`, description: c.subtitle } : {};
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const index = cases.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const c = cases[index];
  const next = cases[(index + 1) % cases.length];

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <article>
          <header className="bg-muted/60">
            <div className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 md:pt-16">
              <Link
                href="/#cases"
                className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="size-4" aria-hidden="true" /> Todos os cases
              </Link>
              <p className="mt-10 text-sm font-bold tracking-widest text-primary-strong uppercase">
                Case {c.number}
              </p>
              <h1 className="mt-3 text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl">
                {c.title}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{c.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <Badge key={t} variant="outline" className="bg-background">
                    {t}
                  </Badge>
                ))}
              </div>
              <dl className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-bold">Contexto</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{c.context}</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold">Meu papel</dt>
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
                  <ContentBlock key={j} block={b} />
                ))}
              </section>
            ))}
          </div>
        </article>

        <Separator className="mx-auto max-w-3xl" />
        <nav aria-label="Próximo case" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link href={`/cases/${next.slug}`} className="group block">
            <span className="text-sm font-bold tracking-widest text-primary-strong uppercase">
              Próximo case
            </span>
            <span className="mt-2 flex items-center gap-2 text-2xl font-bold tracking-tight group-hover:underline sm:text-3xl">
              {next.title}
              <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </nav>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

function ContentBlock({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="mt-5 text-lg leading-relaxed text-foreground/85">{block.text}</p>;
  }
  return (
    <figure className="my-10">
      {block.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={block.src} alt={block.alt} className="w-full rounded-xl border" />
      ) : (
        <div className="grid aspect-video place-items-center rounded-xl border-2 border-dashed border-primary/30 bg-secondary text-center">
          <span className="flex flex-col items-center gap-2 text-sm font-semibold text-primary-strong">
            <ImageIcon className="size-8" aria-hidden="true" />
            Imagem: {block.alt}
          </span>
        </div>
      )}
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {block.caption}
      </figcaption>
    </figure>
  );
}
