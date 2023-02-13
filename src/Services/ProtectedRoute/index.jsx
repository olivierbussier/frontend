import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Globals } from "../Globals";
import { apiError, login, logout, setLocation } from "../Redux/slice/authSlice";
import { setProfile } from "../Redux/slice/profileSlice";

/**
 * This react component is used to check if the application
 * is in connected state before according display of the page
 * This component must wrap each protected route. Form is:
 *  - <ProtectedRoute><Route ... /></protectedRoute>
 *
 * @param {JSX.Element} param0
 * @returns {JSX.Element}
 */
export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.authState);
  const loc = useSelector((state) => state.auth.requiredPage);
  const dispatch = useDispatch();
  const ctx = useContext(Globals);
  const api = ctx.getApi();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  let loginPage = false;
  const navigate = useNavigate();

  let token = null;

  if (auth !== "logged") {
    if (cookies.RememberMe === "true") {
      token = cookies.token;
      if (token) {
        // not connected state & remember me & token available, test token with api profile
        api.testConnexion(
          token,
          (response) => {
            if (response.status === 200) {
              // Read profile success with token: set logged on state and update profile
              dispatch(login(token));
              dispatch(setProfile(response.body));
            } else {
              dispatch(setLocation(location));
              loginPage = true;
              removeCookie("token");
            }
          },
          (error) => {
            // Error network
            dispatch(apiError({ code: 500, message: error.message }));
            loginPage = true;
            removeCookie("token");
          }
        );
      } else {
        dispatch(setLocation(location));
        loginPage = true;
      }
    } else {
      dispatch(setLocation(location));
      loginPage = true;
    }
  } else {
    // Connected state, try to read profile with current state information
    api.testConnexion(
      null,
      (response) => {
        if (response.status === 200) {
          if (loc !== null) {
            dispatch(setLocation(null));
            navigate(loc);
          }
          loginPage = false;
        } else {
          // Error : logout and go to signin page
          removeCookie("token");
          dispatch(logout());
          dispatch(setLocation(location));
          loginPage = true;
        }
        // Everything seems good, nothing particular to do
      },
      (error) => {
        dispatch(apiError({ code: 500, message: error.message }));
        loginPage = true;
      }
    );
  }
  return loginPage ? <Navigate to="/sign-in" replace /> : children;
};

// handleCheckApi.propTypes = {
//   children: propTypes.
// }
