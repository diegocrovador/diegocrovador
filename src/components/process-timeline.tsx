import { BadgeCheck, Handshake, NotebookPen, PencilRuler } from "lucide-react";
import { site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

// Um ícone por fase, na mesma ordem dos textos em src/lib/site.ts
const icons = [NotebookPen, Handshake, PencilRuler, BadgeCheck];

export function ProcessTimeline({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const phases = site[lang].process;
  return (
    <section id="processo" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
      <p className="text-sm font-bold tracking-widest text-primary-strong uppercase">{t.process}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {t.howIWork}
      </h2>

      <ol className="mt-14 grid gap-0 lg:grid-cols-4 lg:gap-8">
        {phases.map((phase, i) => {
          const Icon = icons[i];
          const last = i === phases.length - 1;
          return (
            <li
              key={phase.title}
              className="relative grid grid-cols-[3rem_1fr] gap-x-5 pb-12 last:pb-0 lg:block lg:pb-0"
            >
              {/* Linha que liga as fases: vertical no celular, horizontal no computador */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 bottom-2 left-6 w-0.5 -translate-x-1/2 rounded-full bg-primary/20 lg:top-6 lg:right-[-2rem] lg:bottom-auto lg:left-16 lg:h-0.5 lg:w-auto lg:translate-x-0 lg:-translate-y-1/2"
                />
              )}
              <span className="relative grid size-12 place-items-center rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="pt-1 lg:pt-6">
                <p className="text-sm font-bold text-primary-strong">
                  {t.phase} {i + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold">{phase.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{phase.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
