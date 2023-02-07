import { useDispatch } from "react-redux";
import { API } from "../../API";
import { Footer } from "../../Components/Footer";
import { InputCheckBox, InputText, SignInButton } from "../../Components/Input";
import { Nav } from "../../Components/Nav";
import { Form, Main } from "../../Components/Wrappers";

import "./style.scss";


export const SignIn = () => {

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // You can pass formData as a fetch body directly:

    const api = new API()

    const res = await api.login(formJson.email, formJson.password)

    switch (res.status) {

      case 200:
        // get Token & change state to loged in
        dispatch({type: 'auth/login',payload: res.body.token})
        break;
      case 400:
        break;
      default:
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
            <InputCheckBox name="remember-me" text="Remember me" />
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
