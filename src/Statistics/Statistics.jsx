import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}> {label}</span>
            <span className={css.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};