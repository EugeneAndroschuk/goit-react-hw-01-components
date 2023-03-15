// import PropTypes from 'prop-types';

function Statistics(props) {
    const {
      title,
        stats: {
            label,
            percentage
        },
    } = props;
    return (
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        </ul>
      </section>
    );
}

export default Statistics;