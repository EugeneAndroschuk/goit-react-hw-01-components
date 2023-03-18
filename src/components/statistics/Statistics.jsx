import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics(props) {
    const { label, percentage, bgColor } = props;
    return (
      <li className={css.item} style={{ backgroundColor: `${bgColor}` }}>
        <span className={css.label}>{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Statistics;