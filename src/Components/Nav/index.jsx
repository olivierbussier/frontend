import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

export const Nav = ({ items }) => {
  const cnxState = useSelector((state) => state);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {items.map((item, index) =>
          <Link key={"navitem-"+index} className="main-nav-item" to={item.link}>
            <i className={"fa " + item.image}></i>
            {" " + item.text + " "}
          </Link>
        )}
      </div>
    </nav>
  );
};
