import { RootLayout } from "@/components/root-layout";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout lang="pt">{children}</RootLayout>;
}
