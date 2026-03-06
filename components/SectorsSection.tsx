import type { SectorsSection as T } from "@/sanity/lib/types";

export function SectorsSection({ data }: { data: T }) {
  return (
    <section id="sectors" className="py-28 bg-cream overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="mb-16">
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-green/60 mb-4 reveal">{data?.sectionLabel}</p>
          <h2 className="font-fraunces font-light text-[clamp(34px,3.5vw,52px)] leading-[1.1] tracking-tight text-pzblack max-w-[500px] reveal">
            {data?.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {data?.sectors?.map((sector, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i} group relative bg-cream-dark hover:bg-cream px-10 py-14 overflow-hidden transition-colors`}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="text-[32px] mb-6 block">{sector.icon}</span>
              <h3 className="font-fraunces text-[26px] font-normal text-pzblack mb-3">{sector.name}</h3>
              <p className="text-[13px] font-light text-pzblack/50 leading-[1.7]">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
