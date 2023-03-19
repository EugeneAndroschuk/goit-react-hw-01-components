import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className={css.label}>{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

function getRandomColor() {
  const min = 0;
  const max = 255;
  const red = Math.ceil(Math.random() * (max - min) + min);
  const green = Math.ceil(Math.random() * (max - min) + min);
  const blue = Math.ceil(Math.random() * (max - min) + min);
  return `rgb(${red}, ${green}, ${blue})`;
}

export default Statistics;
