import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { InputCheckBox, InputText } from "../../Components/Input";
import { Nav } from "../../Components/Nav";
import { Form, Main } from "../../Components/Wrappers";


import "./style.scss";

export const SignIn = () => {
  return (
    <>
      <Nav
        items={[
          { link: "/sign-in", image: "fa-user-circle", text: "Sign In" },
        ]}
      />
      <Main className="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form>
            <InputText name="username" text="Username" type="text" />
            <InputText name="password" text="Password" type="password" />
            <InputCheckBox name="remember-me" text="Remember me" />
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <Link to="/user" class="sign-in-button">
              Sign In
            </Link>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
          </Form>
        </section>
      </Main>
      <Footer>Copyright 2020 Argent Bank</Footer>
    </>
  );
};
