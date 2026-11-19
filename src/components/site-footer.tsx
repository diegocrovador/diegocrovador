import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile, site } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

export function ContactSection({ lang }: { lang: Lang }) {
  return (
    <section id="contato" className="scroll-mt-16 bg-foreground py-24 text-background">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {site[lang].contactTitle}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants(), "h-12 px-6 text-base font-semibold")}
          >
            <Mail data-icon="inline-start" /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-background/30 bg-transparent px-6 text-base font-semibold text-background hover:bg-background/10 hover:text-background",
            )}
          >
            LinkedIn <ArrowUpRight data-icon="inline-end" />
            <span className="sr-only">{ui[lang].newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <Logo className="h-4 w-auto text-primary" /> © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
