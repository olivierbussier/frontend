import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Globals } from "../Globals";
import { login, logout, setLocation } from "../Redux/slice/authSlice";
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
  const dispatch = useDispatch();
  const ctx = useContext(Globals);
  const api = ctx.getApi();
  const location = useLocation()
  const [cookies, setCookie, removeCookie] = useCookies();
  let loginPage = false;

  /**
   * How "Remember Me" works ?
   * On start of signing page, use cookies to get remember me current state
   *
   * login state ?
   *  -> not logged :
   *    rememberme state ?
   *      -> checked:
   *        jwt token present in cookies ?
   *          -> true :
   *            get token from cookies
   *            try to get user profile with this token
   *            -> Success ?
   *              set connected state
   *            -> Failure ?
   *              go to signin page
   *          -> false :
   *              go to signin page
   *      -> unchecked :
   *        go to signin page
   *  -> Logged :
   *    try to get user profile with current token
   *    -> success :
   *      set connected state
   *    -> failure :
   *      go to signin page
   *
   */

  const goApi = (bearer = null, onSuccess, onError) => {

    if (bearer)
      api.setBearer(token);

    api.profile()
      .then((response) => {
        if (response.status === 200) {
          onSuccess(response)
        } else
          onError(response);
        // Navigate to required page : do nothing
      })
      .catch((error) => {
        onError(error)
      });

  }
  let token = null;

  if (auth !== "logged") {
    // Not connected state
    if (cookies.RememberMe === "true") {
      token = cookies.token;
      if (token) {
        // not connected state & remember me & token available, test token with api profile
        goApi(token, (response) => {
            // Read profile success with token: set logged on state and update profile
            dispatch(login(token));
            dispatch(setProfile(response.body));
          }, (error) => {
            // Something goes wrong, disconnect and remove token
            dispatch(logout());
            removeCookie("token")
            loginPage = true
        })
      } else {
        // Not connected state & No token available
        // memorize the required location and go to sin-in page
        dispatch(setLocation(location))
        loginPage = true
      }
    } else {
      // Not connected state & no remember me checked
      // memorize the required location and go to sin-in page
      dispatch(setLocation(location))
      loginPage = true
    }
  } else {
    // Connected state, try to read profile with current state information
    goApi(null,(response) => {
      // Everything seems good, nothing particular to do

    }, (error) => {
      // Error : logout and go to signin page
      removeCookie("token")
      dispatch(logout());
      dispatch(setLocation(location))
      loginPage = true
    })
  }

  return loginPage ? <Navigate to="/sign-in" replace /> : children
};

// handleCheckApi.propTypes = {
//   children: propTypes.
// }
