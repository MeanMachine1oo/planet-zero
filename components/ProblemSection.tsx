import type { ProblemSection as T } from "@/sanity/lib/types";

export function ProblemSection({ data }: { data: T }) {
  return (
    <section id="problem" className="py-28 bg-pzblack overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-coral/70 mb-4">
            {data?.sectionLabel}
          </p>
          <h2 className="font-fraunces font-light text-[clamp(38px,4vw,60px)] leading-[1.1] tracking-tight text-cream mb-7">
            {data?.headline}
            <br />
            <span className="text-coral italic">{data?.headlineHighlight}</span>
          </h2>
          <p className="text-[15px] font-light leading-[1.8] text-cream/55 max-w-[440px]">{data?.body}</p>
        </div>

        <div className="flex flex-col gap-0.5 reveal">
          {data?.stats?.map((stat, i) => (
            <div
              key={i}
              className="group bg-cream/[0.04] border border-cream/[0.07] px-10 py-9 relative overflow-hidden hover:border-coral/30 transition-colors"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-coral scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
              <div className="font-fraunces text-[56px] font-light text-cream leading-none tracking-tight">
                {stat.number}<span className="text-coral">{stat.suffix}</span>
              </div>
              <p className="text-[13px] font-light text-cream/45 mt-2 leading-[1.5]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
