"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/site";
import { ui, type Lang } from "@/lib/i18n";

type Item = { href: string; label: string };

export function MobileMenu({ lang, items }: { lang: Lang; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const t = ui[lang];
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={t.openMenu}
        className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "md:hidden")}
      >
        <Menu className="size-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" closeLabel={t.closeMenu} className="w-[85%] gap-0 p-0">
        <div className="flex h-16 items-center gap-3 border-b px-5">
          <Logo className="h-6 w-auto text-primary" />
          <SheetTitle className="text-base font-bold">{t.menu}</SheetTitle>
        </div>

        <nav aria-label={t.mainNav} className="px-3 py-4">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex h-12 items-center rounded-lg px-3 text-lg font-semibold hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t bg-muted/60 px-5 pt-5 pb-8">
          <p className="text-sm font-bold tracking-widest text-primary-strong uppercase">
            {t.contactMe}
          </p>
          <SheetDescription className="sr-only">{t.contactMe}</SheetDescription>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants(), "h-12 justify-start px-4 text-base font-semibold")}
            >
              <Mail data-icon="inline-start" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 justify-start px-4 text-base font-semibold",
              )}
            >
              LinkedIn <ArrowUpRight data-icon="inline-end" />
              <span className="sr-only">{t.newTab}</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
