import type { Hero as HeroType } from "@/sanity/lib/types";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Hero({ data }: { data: HeroType }) {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left — green */}
      <div className="bg-green px-16 pt-36 pb-20 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute bottom-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-coral/10 pointer-events-none" />

        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-cream/50 mb-7">
          {data?.eyebrow || "Design for Net Zero Living"}
        </p>

        <h1 className="font-fraunces font-light text-[clamp(48px,5.5vw,80px)] leading-[1.0] tracking-tight text-cream mb-10">
          {data?.headline || "Building for a"}
          <br />
          <em className="not-italic text-coral">{data?.headlineItalic || "hotter"}</em>
          <br />
          planet.
        </h1>

        <p className="text-[15px] font-light leading-[1.7] text-cream/70 max-w-[360px] mb-14">
          {data?.subheading}
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="#product"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full text-[14px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,81,58,0.35)]"
          >
            {data?.primaryCta || "Explore the Product"} <ArrowIcon />
          </a>
          <a href="#vision" className="flex items-center gap-1.5 text-[14px] text-cream/70 hover:text-cream transition-colors">
            {data?.secondaryCta || "Our vision"} <ArrowIcon />
          </a>
        </div>

        {/* Stat badge */}
        <div className="absolute bottom-12 right-0 bg-coral px-7 py-5 text-white">
          <div className="font-fraunces text-[36px] font-normal leading-none">{data?.statNumber || "76%"}</div>
          <div className="text-[11px] font-normal opacity-85 mt-1 max-w-[140px] leading-[1.4]">{data?.statLabel}</div>
        </div>
      </div>

      {/* Right — cream */}
      <div className="bg-cream-dark relative flex items-center justify-center min-h-[50vh] md:min-h-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-cream opacity-60" />
        <div className="relative z-10 text-center px-12">
          {/* Inline SVG illustration */}
          <svg className="w-[340px] float mx-auto drop-shadow-[0_40px_80px_rgba(42,92,69,0.2)]" viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="230" width="200" height="12" rx="2" fill="#2A5C45" opacity="0.15"/>
            <rect x="90" y="190" width="8" height="42" fill="#2A5C45" opacity="0.3"/>
            <rect x="130" y="190" width="8" height="42" fill="#2A5C45" opacity="0.3"/>
            <rect x="202" y="190" width="8" height="42" fill="#2A5C45" opacity="0.3"/>
            <rect x="242" y="190" width="8" height="42" fill="#2A5C45" opacity="0.3"/>
            <rect x="80" y="182" width="180" height="12" rx="3" fill="#2A5C45" opacity="0.25"/>
            <rect x="92" y="110" width="156" height="74" rx="4" fill="#F5F0E8" stroke="#2A5C45" strokeWidth="2" opacity="0.9"/>
            <path d="M88 114C88 114 100 70 170 70C240 70 252 114 252 114" stroke="#2A5C45" strokeWidth="3" fill="#EDE7DA" opacity="0.85"/>
            <path d="M88 114C88 114 100 70 170 70C240 70 252 114 252 114Z" fill="#C8D9D0" opacity="0.4"/>
            <rect x="106" y="126" width="42" height="36" rx="3" fill="#A8C5BA" opacity="0.6" stroke="#2A5C45" strokeWidth="1.5"/>
            <line x1="127" y1="126" x2="127" y2="162" stroke="#2A5C45" strokeWidth="1" opacity="0.4"/>
            <line x1="106" y1="144" x2="148" y2="144" stroke="#2A5C45" strokeWidth="1" opacity="0.4"/>
            <rect x="152" y="136" width="36" height="48" rx="3" fill="#C8D9D0" stroke="#2A5C45" strokeWidth="1.5"/>
            <circle cx="183" cy="160" r="2.5" fill="#2A5C45" opacity="0.5"/>
            <rect x="196" y="126" width="42" height="36" rx="3" fill="#A8C5BA" opacity="0.6" stroke="#2A5C45" strokeWidth="1.5"/>
            <line x1="217" y1="126" x2="217" y2="162" stroke="#2A5C45" strokeWidth="1" opacity="0.4"/>
            <line x1="196" y1="144" x2="238" y2="144" stroke="#2A5C45" strokeWidth="1" opacity="0.4"/>
            <rect x="195" y="72" width="10" height="40" rx="2" fill="#9BB5AC" opacity="0.7"/>
            <rect x="193" y="68" width="14" height="8" rx="2" fill="#7A9E95" opacity="0.7"/>
            <rect x="152" y="180" width="36" height="6" rx="1" fill="#2A5C45" opacity="0.2"/>
            <rect x="156" y="186" width="28" height="6" rx="1" fill="#2A5C45" opacity="0.15"/>
            <rect x="110" y="78" width="50" height="24" rx="2" fill="#3D7A5C" opacity="0.3" transform="rotate(-5 110 78)"/>
            <circle cx="260" cy="58" r="16" fill="#E8513A" opacity="0.85"/>
            <ellipse cx="170" cy="242" rx="90" ry="8" fill="#2A5C45" opacity="0.06"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
