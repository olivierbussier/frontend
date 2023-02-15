import { useContext, useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../Components/Footer";
import { InputCheckBox, InputText } from "../../Components/Input";
import { Nav } from "../../Components/Nav";
import { Form, Main } from "../../Components/Wrappers";

import { Globals } from "../../Services/Globals";
import { apiError, login } from "../../Services/Redux/slice/authSlice";
import { setProfile } from "../../Services/Redux/slice/profileSlice";

import "./style.scss";

/**
 * This page is the login page of the application. The main state
 * is managed by redux state
 *
 * @returns {JSX.Element}
 */
export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ctx = useContext(Globals);
  const api = ctx.getApi();
  const [rememberMe, setRememberMe] = useState(false);
  const newLoc = useSelector((state) => state.auth.requiredPage);
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    setRememberMe(cookies.RememberMe === "true");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * This handler is called after the form submit. His role is to check whenever the
   * connexion parameters are corrects
   *
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // Send API endpoint
    const token = await api
      .login(formJson.email, formJson.password)
      .catch((error) => {
        dispatch(apiError({ code: 500, message: error.message }));
      });

    if (rememberMe) setCookie("RememberMe", true);
    else removeCookie("RememberMe");

    switch (token.status) {
      case 200:
        // get Token & change state to loged in
        dispatch(login(token.body.token));
        api.setBearer(token.body.token);
        // Get profile info
        const profile = await api.profile();
        dispatch(setProfile(profile.body));

        setCookie("token", token.body.token);
        // ctx.setApi(api);
        if (newLoc) navigate(newLoc.pathname);
        else navigate("/");
        break;
      default:
        dispatch(apiError({ code: token.status, message: token.message }));
        break;
    }
    // Or you can work with it as a plain object:
  };

  return (
    <>
      <Nav />
      <Main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <InputText name="email" text="Mail" type="text" />
            <InputText name="password" text="Password" type="password" />
            <InputCheckBox
              name="remember-me"
              text="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </Form>
        </section>
      </Main>
      <Footer>Copyright 2020 Argent Bank</Footer>
    </>
  );
};
