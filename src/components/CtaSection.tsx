import { Reveal } from "./Reveal";
import styles from "./CtaSection.module.css";

interface CtaProps {
  data: {
    headlinePart1?: string;
    headlineEmphasis?: string;
    body?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    contactLine?: string;
  } | null;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function CtaSection({ data }: CtaProps) {
  const d = data ?? {};
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.headline}>
            {d.headlinePart1 ?? "Ready to\nbuild for\nthe"} <em>{d.headlineEmphasis ?? "planet?"}</em>
          </h2>
        </Reveal>
        <div className={styles.right}>
          <Reveal delay={0.1}>
            <p className={styles.body}>
              {d.body ?? "Whether you're a government body, development organisation, or enterprise looking to deploy resilient infrastructure — let's talk about what Planet Zero can build for you."}
            </p>
          </Reveal>
          <Reveal delay={0.2} className={styles.buttons}>
            <a href={d.primaryHref ?? "mailto:kaushikee@planetzero.in"} className={styles.btnPrimary}>
              {d.primaryLabel ?? "Get in Touch"} <ArrowIcon />
            </a>
            <a href={d.secondaryHref ?? "https://planetzero.in"} className={styles.btnOutline}>
              {d.secondaryLabel ?? "Visit planetzero.in"}
            </a>
          </Reveal>
          {d.contactLine && (
            <Reveal delay={0.3}>
              <p className={styles.contact}>{d.contactLine}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
