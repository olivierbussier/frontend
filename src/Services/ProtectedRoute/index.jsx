import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
  const loc = useSelector((state) => state.auth.requiredPage);
  const dispatch = useDispatch();
  const ctx = useContext(Globals);
  const api = ctx.getApi();
  const location = useLocation()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  let loginPage = false;
  const navigate = useNavigate();

  let token=null

  console.log("ProtectedRoute:auth=", auth)

  if (auth !== "logged") {
    if (cookies.RememberMe === "true") {
      token = cookies.token;
      if (token) {
        console.log("ProtectedRoute:token=", token)
        // not connected state & remember me & token available, test token with api profile
        api.testConnexion(token, (response) => {
            // Read profile success with token: set logged on state and update profile
            console.log("ProtectedRoute:testcnx ok")
            dispatch(login(token));
            dispatch(setProfile(response.body));
            console.log("App : logged...")
          }, (error) => {
            console.log("ProtectedRoute:testcnx KO")
            // Something goes wrong, remove token
            // Not connected state
            dispatch(setLocation(location))
            loginPage = true
            removeCookie("token")
        })
      } else {
        dispatch(setLocation(location))
        loginPage = true
      }
    } else {
      dispatch(setLocation(location))
      loginPage = true
    }
  } else {
    // Connected state, try to read profile with current state information
    api.testConnexion(null,(response) => {
      console.log("ProtectedRoute:loc=", loc)
      if (loc !== null) {
        dispatch(setLocation(null))
        navigate(loc);
      }
      loginPage = false
      // Everything seems good, nothing particular to do

    }, (error) => {
      // Error : logout and go to signin page
      removeCookie("token")
      dispatch(logout());
      dispatch(setLocation(location))
      loginPage = true
    })
  }
  console.log("loginPage=", loginPage)
  return loginPage ? <Navigate to="/sign-in" replace /> : children
};

// handleCheckApi.propTypes = {
//   children: propTypes.
// }
