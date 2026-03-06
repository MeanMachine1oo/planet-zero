import styles from "./Hero.module.css";

interface HeroProps {
  data: {
    eyebrow?: string;
    headlinePart1?: string;
    headlineEmphasis?: string;
    headlinePart2?: string;
    subheading?: string;
    primaryCta?: string;
    secondaryCta?: string;
    statNumber?: string;
    statLabel?: string;
  } | null;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Hero({ data }: HeroProps) {
  const d = data ?? {};
  return (
    <section className={styles.hero}>
      {/* Left — dark green */}
      <div className={styles.heroLeft}>
        <p className={styles.eyebrow}>{d.eyebrow ?? "Design for Net Zero Living"}</p>
        <h1 className={styles.headline}>
          {d.headlinePart1 ?? "Building for a"}<br />
          <em>{d.headlineEmphasis ?? "hotter"}</em><br />
          {d.headlinePart2 ?? "planet."}
        </h1>
        <p className={styles.sub}>
          {d.subheading ?? "Climate-adaptive infrastructure engineered for thermal comfort, wherever people live and work."}
        </p>
        <div className={styles.actions}>
          <a href="#product" className={styles.btnPrimary}>
            {d.primaryCta ?? "Explore the Product"} <ArrowIcon />
          </a>
          <a href="#vision" className={styles.btnGhost}>
            {d.secondaryCta ?? "Our vision"} <ArrowIcon />
          </a>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>{d.statNumber ?? "76%"}</div>
          <div className={styles.statLabel}>{d.statLabel ?? "of India's population at risk of extreme heat"}</div>
        </div>
      </div>

      {/* Right — cream with floating illustration */}
      <div className={styles.heroRight}>
        <div className={styles.heroRightContent}>
          <div className={styles.heroCircle} />
          <div className={styles.structureWrap}>
            <svg className={styles.structureImg} viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>
    </section>
  );
}
