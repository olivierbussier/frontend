import { Link } from "react-router-dom";

import "./style.scss";

export const InputText = ({
  name,
  text,
  type,
  className = "input-wrapper",
}) => {
  return (
    <div className={className}>
      <label htmlFor={"input-" + name}>{text}</label>
      <input type={type} id={"input-" + name} name={name} />
    </div>
  );
};
export const InputCheckBox = ({
  name,
  text,
  type,
  className = "input-remember",
}) => {
  return (
    <div className={className}>
      <input type="checkbox" id={"checkbox-" + name} name={name} />
      <label htmlFor={"input-" + name}>{text}</label>
    </div>
  );
};

export const SignInButton = ({link, image, text, onClick}) => {
  return (
    <Link className="main-nav-item" to={link} onClick={onClick}>
      <i className={"fa " + image}></i>
      {" " + text + " "}
    </Link>
  );
};
