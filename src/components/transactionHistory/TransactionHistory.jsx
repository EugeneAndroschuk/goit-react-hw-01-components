import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th className={css['cell-head']}>Type</th>
          <th className={css['cell-head']}>Amount</th>
          <th className={css['cell-head']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.raw}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
