import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Services/Redux/slice/authSlice";
import { SignInButton } from "../Input";

import "./style.scss";

/**
 * This component is used to display the navigation bar of the application
 *
 * @returns {JSX.Element}
 */
export const Nav = () => {
  const isAuth = useSelector((state) => state.auth.authState !== "logged");
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()

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
          <SignInButton link="/user" image="fa-user-circle" text="Sign In" />
        ) : (
          <>
            <SignInButton link="/user" image="fa-user-circle" text={profile.firstName} />
            <SignInButton
              link="/"
              onClick={() => {
                removeCookie("token")
                dispatch(logout())
              }}
              image="fa-user-circle"
              text="Logout"
            />
          </>
        )}
      </div>
    </nav>
  );
};
