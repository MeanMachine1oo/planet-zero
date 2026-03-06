import type { MessagingSection as T } from "@/sanity/lib/types";

export function MessagingSection({ data }: { data: T }) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Top row: headline left, body right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-12">
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-green/60 mb-4 reveal">{data?.sectionLabel}</p>
            <h2 className="font-fraunces font-light text-[clamp(34px,3.5vw,52px)] leading-[1.1] tracking-tight text-pzblack reveal">
              <em className="not-italic text-green italic">{data?.headlineItalic}</em>
              {" "}{data?.headline}
            </h2>
          </div>
          <p className="text-[15px] font-light leading-[1.8] text-pzblack/55 reveal">{data?.body}</p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {data?.pillars?.map((pillar, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i} group px-9 py-8 bg-cream-dark border-l-[3px] border-transparent hover:border-green hover:bg-cream transition-all cursor-default`}
            >
              <p className="text-[11px] font-medium tracking-[0.1em] text-green uppercase mb-3">{pillar.label}</p>
              <p className="text-[15px] font-light leading-[1.6] text-pzblack">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
