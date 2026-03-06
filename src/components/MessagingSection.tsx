import { Reveal } from "./Reveal";
import styles from "./MessagingSection.module.css";

interface MessagingProps {
  data: {
    sectionLabel?: string;
    headlinePart1?: string;
    headlineEmphasis?: string;
    body?: string;
    pillars?: { label: string; body: string }[];
  } | null;
}

const DEFAULT_PILLARS = [
  { label: "↗ Global Impact", body: "Over five billion people are exposed to extreme heat and cold every year. The scale of the challenge demands infrastructure-level solutions." },
  { label: "↗ India-First", body: "India's path to inclusive growth for 1.4 billion people is unfolding in a rapidly changing climate. We design for the realities of the subcontinent and beyond." },
  { label: "↗ Dual Mission", body: "Planet Zero designs climate infrastructure that simultaneously addresses human comfort and environmental impact — not one at the expense of the other." },
];

export function MessagingSection({ data }: MessagingProps) {
  const d = data ?? {};
  const pillars = d.pillars ?? DEFAULT_PILLARS;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Reveal className={styles.left}>
            <p className={styles.label}>{d.sectionLabel ?? "Why Planet Zero"}</p>
            <h2 className={styles.headline}>
              <em>{d.headlinePart1 ?? "Plan-net Zero"}</em> —<br />
              {d.headlineEmphasis ?? "a plan for the planet."}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className={styles.body}>
              {d.body ?? "The brand name carries a double meaning: Planet Zero and Plan-net Zero. It's not just a statement — it's a commitment to making net-zero a practical, grounded reality across regions, sectors, and communities."}
            </p>
          </Reveal>
        </div>
        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} className={styles.pillar}>
              <p className={styles.pillarLabel}>{p.label}</p>
              <p className={styles.pillarText}>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
