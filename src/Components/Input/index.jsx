import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

/**
 * Simple component for text input with a label
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.text
 * @param {string} props.value
 * @param {string} props.type
 * @returns {JSX.Element}
 */
export const InputText = ({
  name,
  text,
  value,
  type,
  className = "input-wrapper",
}) => (
  <div className={className}>
    <label htmlFor={"input-" + name}>{text}</label>
    <input type={type} id={"input-" + name} name={name} value={value}/>
  </div>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
}

/**
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.text
 * @param {boolean} props.checked
 * @param {string?} props.className
 * @param {function(event)} props.onChange
 * @returns {JSX.Element}
 */
export const InputCheckBox = ({
  name,
  text,
  checked,
  className = "input-remember",
  onChange = null,
}) => (
  <div className={className}>
    <input
      type="checkbox"
      id={"checkbox-" + name}
      checked={checked}
      name={name}
      onChange={onChange}
    />
    <label htmlFor={"input-" + name}>{text}</label>
  </div>
);

InputCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func
}

/**
 * This component is used to display the signin button in the header
 *
 * @param {object} props
 * @param {string} props.link Route to follow when user click on the button
 * @param {string} props.image url to the image about to display
 * @param {string} props.text Text to display after the image
 * @param {function(event)} props.onClick
 * @returns {JSX.Element}
 */
export const SignInButton = ({ link, image, text, onClick }) => (
  <Link className="main-nav-item" to={link} onClick={onClick}>
    <i className={"fa " + image}></i>
    {" " + text + " "}
  </Link>
);

SignInButton.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func
}
