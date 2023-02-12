import { useContext } from "react";

import { useCookies } from "react-cookie";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { User } from "./pages/User";

import { ProtectedRoute } from "./Services/ProtectedRoute";

import { Globals } from "./Services/Globals";

import "./App.scss";
import { setProfile } from "./Services/Redux/slice/profileSlice";
import { login } from "./Services/Redux/slice/authSlice";

const App = () => {

  const ctx = useContext(Globals);
  const api = ctx.getApi();
  const auth = useSelector((state) => state.auth.authState);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();

  let token = null;

  if (auth !== "logged") {
    // Not connected state
    if (cookies.RememberMe === "true") {
      token = cookies.token;
      if (token) {
        // not connected state & remember me & token available, test token with api profile
        api.testConnexion(token, (response) => {
            // Read profile success with token: set logged on state and update profile
            dispatch(login(token));
            dispatch(setProfile(response.body));
            console.log("App : logged...")
          }, (error) => {
            // Something goes wrong, remove token
            removeCookie("token")
        })
      }
    }
  }

  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user"    element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path="*"        element={<Error code={404} message="Page introuvable" />} />
    </Routes>
  );
}

export default App;
