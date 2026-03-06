import type { CtaSection as T } from "@/sanity/lib/types";

export function CtaSection({ data }: { data: T }) {
  return (
    <section id="contact" className="bg-pzblack py-36 px-16 relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(42,92,69,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        <h2 className="font-fraunces font-light text-[clamp(40px,5vw,68px)] leading-[1.05] tracking-tight text-cream reveal">
          {data?.headline}
          <br />
          <em className="not-italic text-coral italic">{data?.headlineItalic}</em>
        </h2>

        <div className="flex flex-col gap-8">
          <p className="text-[15px] font-light leading-[1.8] text-cream/50 reveal">{data?.description}</p>

          <div className="flex gap-4 flex-wrap reveal">
            <a
              href={data?.primaryCtaHref}
              className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full text-[14px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,81,58,0.35)]"
            >
              {data?.primaryCtaLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href={data?.secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/25 text-cream px-8 py-4 rounded-full text-[14px] font-normal transition-all hover:border-cream hover:bg-cream/5"
            >
              {data?.secondaryCtaLabel}
            </a>
          </div>

          {data?.contactNote && (
            <p className="text-[13px] text-cream/35 reveal">{data.contactNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
