import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/lib/queries";
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

export const revalidate = 60;

export default async function Home() {
  const data = await client.fetch(PAGE_QUERY);
  return (
    <>
      <Nav settings={data.siteSettings} />
      <Hero data={data.hero} />
      <Ticker data={data.ticker} />
      <ProblemSection data={data.problem} />
      <ProductSection data={data.product} />
      <VisionSection data={data.vision} />
      <MessagingSection data={data.messaging} />
      <SectorsSection data={data.sectors} />
      <CtaSection data={data.cta} />
      <Footer settings={data.siteSettings} />
    </>
  );
}
