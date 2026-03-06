import type { VisionSection as T } from "@/sanity/lib/types";

export function VisionSection({ data }: { data: T }) {
  return (
    <section id="vision" className="bg-green py-36 px-16 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cream/[0.07] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-cream/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-cream/40 mb-4 reveal">{data?.sectionLabel}</p>
        <h2 className="font-fraunces font-light text-[clamp(36px,5vw,72px)] leading-[1.1] tracking-tight text-cream mb-10 reveal">
          {data?.headline?.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
          <em className="not-italic text-coral italic">{data?.headlineItalic}</em>
        </h2>
        <p className="text-[16px] font-light leading-[1.8] text-cream/55 max-w-[560px] mx-auto mb-16 reveal">
          {data?.subheading}
        </p>
        <a
          href={data?.ctaHref || "#contact"}
          className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full text-[14px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,81,58,0.35)] reveal"
        >
          {data?.ctaLabel}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  );
}
