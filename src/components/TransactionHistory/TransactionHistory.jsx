import PropTypes from 'prop-types'; 
import css from './TransactionHistory.module.css'; 

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        
        {items.map(({ id, type, amount, currency }) => {
          return (
              <tr className={css.tr} key={id}>
              <td className={css.td}
                style={{
                  textTransform: 'capitalize', 
                  color: '#818181',
                }}
              >
                {type}
              </td>
              <td
                className={css.td}
                style={{
                  color: '#818181',
                }}
              >
                {amount}
              </td>
              <td
                className={css.td}
                style={{
                  color: '#818181',
                }}
              >
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};