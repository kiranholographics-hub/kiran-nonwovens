import styles from './StatsBand.module.css';

/** The dark capability band under the hero. */
export default function StatsBand({ stats }) {
  return (
    <div className={styles.band}>
      <div className={`wrap ${styles.row}`}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <b className={styles.value}>{stat.value}</b>
            <small className={styles.label}>{stat.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
