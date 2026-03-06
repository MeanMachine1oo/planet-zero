import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";
import type { HomepageData } from "@/sanity/lib/types";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { VisionSection } from "@/components/VisionSection";
import { MessagingSection } from "@/components/MessagingSection";
import { SectorsSection } from "@/components/SectorsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";

// Revalidate every 60 seconds (ISR) — content updates in Sanity reflect within a minute
export const revalidate = 60;

export default async function Home() {
  const data: HomepageData = await client.fetch(homepageQuery);

  return (
    <>
      <Nav settings={data.settings} />
      <main>
        <Hero data={data.hero} />
        <Ticker />
        <ProblemSection data={data.problem} />
        <ProductSection data={data.product} />
        <VisionSection data={data.vision} />
        <MessagingSection data={data.messaging} />
        <SectorsSection data={data.sectors} />
        <CtaSection data={data.cta} />
      </main>
      <Footer settings={data.settings} />
      <RevealScript />
    </>
  );
}
