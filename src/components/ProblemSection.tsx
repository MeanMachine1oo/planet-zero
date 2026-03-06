import { Reveal } from "./Reveal";
import styles from "./ProblemSection.module.css";

interface ProblemProps {
  data: {
    sectionLabel?: string;
    headlinePart1?: string;
    headlineEmphasis?: string;
    body?: string;
    stats?: { number: string; suffix: string; description: string }[];
  } | null;
}

const DEFAULT_STATS = [
  { number: "5", suffix: "B+", description: "People exposed to extreme heat and cold every year globally" },
  { number: "76", suffix: "%", description: "Of India's population at risk of exposure to extreme heat" },
  { number: "1.4", suffix: "B", description: "People whose livelihoods depend on climate-ready infrastructure" },
];

export function ProblemSection({ data }: ProblemProps) {
  const d = data ?? {};
  const stats = d.stats ?? DEFAULT_STATS;
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        <Reveal className={styles.left}>
          <p className={styles.label}>{d.sectionLabel ?? "The Challenge"}</p>
          <h2 className={styles.headline}>
            {d.headlinePart1 ?? "Climate is changing."}<br />
            Infrastructure <span>{d.headlineEmphasis ?? "hasn't."}</span>
          </h2>
          <p className={styles.body}>
            {d.body ?? "India's path to inclusive growth for over 1.4 billion people is unfolding in a rapidly changing climate. Conventional buildings weren't designed for this reality. Planet Zero builds the infrastructure that was."}
          </p>
        </Reveal>
        <Reveal delay={0.2} className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.num}>{s.number}<span>{s.suffix}</span></div>
              <div className={styles.desc}>{s.description}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
