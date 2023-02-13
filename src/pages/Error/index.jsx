import PropTypes from "prop-types";

import "./style.scss"

/**
 * This component displays an error message on the header bar
 *
 * @param {object} props
 * @param {number} props.code
 * @param {string} props.message
 * @returns {JSX.Element}
 */
export const Error = ({code, message}) => {
    return <div className="error-message">Error {code}<br/>{message}</div>
}

Error.propTypes = {
    code: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}