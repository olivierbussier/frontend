import { Account } from "../../Components/Account";
import { Footer } from "../../Components/Footer";
import { HeaderUser } from "../../Components/HeaderUser";
import { Main } from "../../Components/Wrappers";
import { Nav } from "../../Components/Nav";

import "./style.scss";
import { SignInButton } from "../../Components/Input";

export const User = () => {
  return (
    <>
      <Nav
        items={[
          <SignInButton link="/user" image="fa-user-circle" text="Tony" />,
          <SignInButton link="/" image="fa-sign-out" text="Sign Out" />,
        ]}
      />
      <Main className="main bg-dark">
        <HeaderUser />

        <h2 className="sr-only">Accounts</h2>

        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />

        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />

        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </Main>
      <Footer>Copyright 2020 Argent Bank</Footer>
    </>
  );
};
