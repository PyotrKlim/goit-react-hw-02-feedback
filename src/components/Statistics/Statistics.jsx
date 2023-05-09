import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul>
      <li>
        <span>good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>total:</span>
        <span>{total}</span>
      </li>
      <li>
        <span>positive:</span>
        <span>{positive}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
