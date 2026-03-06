const items = [
  "Relocatable Asset",
  "Pre-Fitted Utility Systems",
  "Custom Built for Solar Geometry",
  "Tailored for Sector-Specific Needs",
  "Setup in Under 6 Weeks",
  "Net Zero Infrastructure",
];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-green-dark py-3.5 overflow-hidden whitespace-nowrap">
      <div className="ticker-track inline-flex">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 pr-16 text-[12px] font-normal tracking-[0.12em] uppercase text-cream/60">
            <span className="w-1 h-1 rounded-full bg-coral flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
