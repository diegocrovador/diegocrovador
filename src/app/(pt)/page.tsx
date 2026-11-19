import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("pt");

export default function Page() {
  return <HomePage lang="pt" />;
}
