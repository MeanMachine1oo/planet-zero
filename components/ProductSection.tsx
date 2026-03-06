import type { ProductSection as T } from "@/sanity/lib/types";

const layerIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#2A5C45" strokeWidth="1.5"><rect x="3" y="18" width="18" height="3" rx="1"/><path d="M7 18V14M17 18V14"/></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#2A5C45" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9H21M3 15H21"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#2A5C45" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#2A5C45" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
];

export function ProductSection({ data }: { data: T }) {
  return (
    <section id="product" className="py-28 bg-cream">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-20">
          <div className="reveal">
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-green/60 mb-4">{data?.sectionLabel}</p>
            <h2 className="font-fraunces font-light text-[clamp(38px,4vw,58px)] leading-[1.1] tracking-tight text-pzblack">
              {data?.headline}
              <br />
              <em className="not-italic text-green italic">{data?.headlineItalic}</em>
            </h2>
          </div>
          <p className="text-[15px] font-light leading-[1.8] text-pzblack/60 pt-2 reveal">{data?.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {data?.layers?.map((layer, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i} group bg-cream-dark hover:bg-green px-9 py-12 transition-colors duration-300 cursor-default`}
            >
              <p className="text-[11px] tracking-[0.1em] text-sand group-hover:text-cream transition-colors mb-8">{layer.number}</p>
              <div className="w-12 h-12 bg-green/[0.08] group-hover:bg-cream/[0.12] rounded-xl flex items-center justify-center mb-6 transition-colors">
                <div className="w-6 h-6 [&_path]:stroke-green group-hover:[&_path]:stroke-cream [&_circle]:stroke-green group-hover:[&_circle]:stroke-cream [&_rect]:stroke-green group-hover:[&_rect]:stroke-cream transition-colors">
                  {layerIcons[i % layerIcons.length]}
                </div>
              </div>
              <h3 className="font-fraunces text-[22px] font-normal text-pzblack group-hover:text-cream mb-4 transition-colors leading-[1.2]">
                {layer.title}
              </h3>
              <p className="text-[13px] font-light leading-[1.7] text-pzblack/50 group-hover:text-cream/65 transition-colors">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
