import css from './Transaction.module.css';
import PropTypes from 'prop-types';

const Transaction = (props) => {
    const { type, amount, currency, } = props;
    return (
      <tr className={css.raw}>
        <td className={css.cell}>{type}</td>
        <td className={css.cell}>{amount}</td>
        <td className={css.cell}>{currency}</td>
      </tr>
    );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Transaction;