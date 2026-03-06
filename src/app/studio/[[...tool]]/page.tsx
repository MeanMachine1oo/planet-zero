/**
 * Sanity Studio embedded at /studio
 * Visit http://localhost:3000/studio after running `npm run dev`
 */
import { NextStudio } from "next-sanity/studio";
import { sanityConfig } from "@/sanity/lib/sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <NextStudio config={sanityConfig} />;
}
