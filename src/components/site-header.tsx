import Link from "next/link";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "/#cases", label: "Cases" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-background focus-visible:px-4 focus-visible:py-2 focus-visible:ring-2 focus-visible:ring-ring"
      >
        Pular para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, início`}>
            <Logo className="h-7 w-auto text-primary" />
            <span className="font-bold tracking-tight">{site.name}</span>
          </Link>
          <nav aria-label="Principal" className="hidden gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(buttonVariants({ variant: "ghost" }), "h-9 px-3 text-[0.95rem]")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#contato" className={cn(buttonVariants(), "h-9 px-4 font-semibold")}>
            Vamos conversar
          </Link>
        </div>
      </header>
    </>
  );
}
