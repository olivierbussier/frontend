import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display account information
 *
 * @param {object} props
 * @param {string} props.title The title of the account
 * @param {string|number} props.amount The balance of the account
 * @param {string} props.description The textual description of the account
 * @returns {JSX.Element} 
 */
export const Account = ({title, amount, description}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  description: PropTypes.string.isRequired,
}