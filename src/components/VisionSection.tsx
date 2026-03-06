import { Reveal } from "./Reveal";
import styles from "./VisionSection.module.css";

interface VisionProps {
  data: {
    sectionLabel?: string;
    headlinePart1?: string;
    headlineEmphasis?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  } | null;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function VisionSection({ data }: VisionProps) {
  const d = data ?? {};
  return (
    <section className={styles.section} id="vision">
      <div className={styles.inner}>
        <Reveal><p className={styles.label}>{d.sectionLabel ?? "Our Vision"}</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className={styles.headline}>
            {d.headlinePart1 ?? "A future where\ncomfort, efficiency,\nand sustainability are"}
            {"\n"}<em>{d.headlineEmphasis ?? "accessible to all."}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.body}>
            {d.body ?? "We believe climate resilience shouldn't be a luxury. Planet Zero designs infrastructure that puts people and planet at the centre — making net zero a practical, liveable reality."}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a href={d.ctaHref ?? "#contact"} className={styles.btn}>
            {d.ctaLabel ?? "Partner with us"} <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
