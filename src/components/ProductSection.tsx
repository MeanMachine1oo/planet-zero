import { Reveal } from "./Reveal";
import styles from "./ProductSection.module.css";

interface ProductProps {
  data: {
    sectionLabel?: string;
    headlinePart1?: string;
    headlineEmphasis?: string;
    intro?: string;
    layers?: { number: string; title: string; description: string; icon?: string }[];
  } | null;
}

const ICONS: Record<string, React.ReactNode> = {
  foundation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="18" width="18" height="3" rx="1"/><path d="M7 18V14M17 18V14"/></svg>,
  structure: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9H21M3 15H21"/></svg>,
  systems: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>,
  layers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
};

const DEFAULT_LAYERS = [
  { number: "Layer 01", title: "Foundation & Platform", description: "Elevated, relocatable base structure engineered for any terrain and extreme weather conditions.", icon: "foundation" },
  { number: "Layer 02", title: "Roof & Walls", description: "Thermally optimised enclosure built around solar geometry to manage heat gain and energy load.", icon: "structure" },
  { number: "Layer 03", title: "Interior & Systems", description: "Pre-fitted utility systems including HVAC, water, power, and smart home integration.", icon: "systems" },
  { number: "Layer 04", title: "Final Touches & Customisation", description: "Sector-specific fitouts tailored for healthcare, hospitality, labour housing, and more.", icon: "layers" },
];

export function ProductSection({ data }: ProductProps) {
  const d = data ?? {};
  const layers = d.layers ?? DEFAULT_LAYERS;
  return (
    <section className={styles.section} id="product">
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.label}>{d.sectionLabel ?? "The Product"}</p>
            <h2 className={styles.headline}>
              {d.headlinePart1 ?? "4 Layered"}<br />
              <em>{d.headlineEmphasis ?? "Smart Living"}</em><br />
              Infrastructure
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className={styles.intro}>
              {d.intro ?? "Designed for thermal comfort across extreme climates. Each layer builds on the last — from a simple foundation to a fully integrated smart living capsule, deployable in under 6 weeks."}
            </p>
          </Reveal>
        </div>
        <div className={styles.grid}>
          {layers.map((layer, i) => (
            <Reveal key={i} delay={i * 0.1} className={styles.card}>
              <div className={styles.layerNum}>{layer.number}</div>
              <div className={styles.iconWrap}>
                {ICONS[layer.icon ?? "foundation"]}
              </div>
              <h3 className={styles.layerTitle} dangerouslySetInnerHTML={{ __html: layer.title.replace(" & ", " &<br/>") }} />
              <p className={styles.layerDesc}>{layer.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
