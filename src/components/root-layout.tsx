import { htmlLang, type Lang } from "@/lib/i18n";

export function RootLayout({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={htmlLang[lang]} className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
