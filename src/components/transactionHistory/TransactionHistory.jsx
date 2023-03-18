import Transaction from '../transaction/Transaction';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = (props) => {
    const { items } = props;
return (
  <table className={css['transaction-history']}>
    <thead>
      <tr>
        <th className={css.cell}>Type</th>
        <th className={css.cell}>Amount</th>
        <th className={css.cell}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({id, type, amount, currency,}) => (
        <Transaction
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}

export default TransactionHistory;