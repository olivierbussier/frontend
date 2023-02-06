import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./style.scss"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Nav = ({ title, logo, altImg, linkUrl }) => {

    const cnxState = useSelector((state) => state);

  return (
    <nav className="main-nav">
      <Link to={linkUrl} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt={altImg}
        />
        <h1 className="sr-only">{title}</h1>
      </Link>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={regular('enveloppe')} />
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};
