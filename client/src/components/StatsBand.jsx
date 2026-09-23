import './StatsBand.css';

/** The dark capability band under the hero. */
export default function StatsBand({ stats }) {
  return (
    <div className="stats-band">
      <div className="wrap stats-band__row">
        {stats.map((stat) => (
          <div className="stats-band__stat" key={stat.label}>
            <b>{stat.value}</b>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
