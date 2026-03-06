import { Reveal } from "./Reveal";
import styles from "./SectorsSection.module.css";

interface SectorsProps {
  data: {
    sectionLabel?: string;
    headline?: string;
    sectors?: { emoji: string; name: string; description: string }[];
  } | null;
}

const DEFAULT_SECTORS = [
  { emoji: "🏥", name: "Healthcare", description: "Climate-controlled medical infrastructure for remote and underserved regions. From primary health centres to diagnostic units in extreme environments like Ladakh." },
  { emoji: "🏗️", name: "Labour Housing", description: "Dignified, thermally comfortable living quarters for workers in construction, mining, and infrastructure projects across harsh climates." },
  { emoji: "🏨", name: "Hospitality", description: "Rapidly deployable eco-resort and glamping capsules designed for sustainability and thermal comfort, without sacrificing guest experience." },
];

export function SectorsSection({ data }: SectorsProps) {
  const d = data ?? {};
  const sectors = d.sectors ?? DEFAULT_SECTORS;
  return (
    <section className={styles.section} id="sectors">
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal><p className={styles.label}>{d.sectionLabel ?? "Built for Every Sector"}</p></Reveal>
          <Reveal delay={0.1}><h2 className={styles.headline}>{d.headline ?? "Wherever people need thermal comfort."}</h2></Reveal>
        </div>
        <div className={styles.grid}>
          {sectors.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className={styles.card}>
              <span className={styles.emoji}>{s.emoji}</span>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
