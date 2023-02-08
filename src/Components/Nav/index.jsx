import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignInButton } from "../Input";

import "./style.scss";

export const Nav = () => {
  const isAuth = useSelector((state) => state.auth.authState !== "logged");
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)


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
        {isAuth ? (
          <SignInButton link="/sign-in" image="fa-user-circle" text="Sign In" />
        ) : (
          <>
            <SignInButton link="/user" image="fa-user-circle" text={profile.firstName} />
            <SignInButton
              link=""
              onClick={() => dispatch({ type: "auth/logout" })}
              image="fa-user-circle"
              text="Logout"
            />
          </>
        )}
      </div>
    </nav>
  );
};
