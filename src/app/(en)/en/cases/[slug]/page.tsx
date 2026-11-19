import { notFound } from "next/navigation";
import { CasePage } from "@/components/case-page";
import { cases } from "@/lib/cases";
import { caseMetadata } from "@/lib/metadata";

const lang = "en";
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return cases[lang].map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  return caseMetadata(lang, (await params).slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = cases[lang].find((c) => c.slug === slug);
  if (!study) notFound();
  return <CasePage lang={lang} study={study} />;
}
