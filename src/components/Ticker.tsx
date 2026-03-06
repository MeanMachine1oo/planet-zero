import styles from "./Ticker.module.css";

interface TickerProps {
  data: { items?: string[] } | null;
}

const DEFAULT_ITEMS = [
  "Relocatable Asset", "Pre-Fitted Utility Systems",
  "Custom Built for Solar Geometry", "Tailored for Sector-Specific Needs",
  "Setup in Under 6 Weeks", "Net Zero Infrastructure",
];

export function Ticker({ data }: TickerProps) {
  const items = data?.items ?? DEFAULT_ITEMS;
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
