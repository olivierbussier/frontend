import PropTypes from "prop-types";

import "./style.scss";

/**
 * Simple wrapper for applicaiton
 *
 * @param {object} props
 * @param {string} props.className override default class if any
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export const Main = ({ className = "", children }) => (
  <main className={className}>{children}</main>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
/**
 * Simple form wrapper
 *
 * @param {object} props
 * @param {function(event)} props.onSubmit override default class if any
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

Form.propTypes = {
  className: PropTypes.func,
  children: PropTypes.node.isRequired
}
