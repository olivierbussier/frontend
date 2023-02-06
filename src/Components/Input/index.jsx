import { useDispatch } from "react-redux";
import { CONNECT_USER, DISCONNECT_USER } from "../../reducers/home";

import "./style.scss";

export const InputText = ({name, text, type, className="input-wrapper"}) => {
    return (
        <div className={className}>
            <label for={"input-"+name}>{text}</label>
            <input type={type} id={"input-"+name} name={name}/>
        </div>
    )
}
export const InputCheckBox = ({name, text, type, className="input-remember"}) => {
    return (
        <div className={className}>
            <input type="checkbox" id={"checkbox-"+name} name={name}/>
            <label for={"input-"+name}>{text}</label>
        </div>
    )
}

export const ButtonConnect = ({ action, children }) => {
    const dispatch = useDispatch();

    return (
      <button
        onClick={() => {
          action === "connect"
            ? dispatch({ type: CONNECT_USER })
            : dispatch({ type: DISCONNECT_USER });
        }}
      >
        {children}
      </button>
    );
  };