import PropTypes from 'prop-types';
import Statistics from '../statistics/Statistics'
import css from './StatisticsList.module.css';

function StatisticsList(props) {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <Statistics
            key={id}
            label={label}
            percentage={percentage}
            bgColor={`${`rgb(${getRandom(0, 255)}, ${getRandom(0,255)}, ${getRandom(0, 255)})`}`}/>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default StatisticsList;