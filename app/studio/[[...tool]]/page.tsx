import { NextStudio } from "next-sanity/studio";
import { sanityConfig } from "@/sanity/lib/sanity.config";
export const dynamic = "force-dynamic";
export default function StudioPage() {
  return <NextStudio config={sanityConfig} />;
}
