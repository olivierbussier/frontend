import { Account } from "../../Components/Account";
import { Footer } from "../../Components/Footer";
import { HeaderUser } from "../../Components/HeaderUser";
import { Main } from "../../Components/Wrappers";
import { Nav } from "../../Components/Nav";

import "./style.scss";

/**
 * This page is the main user page. Reachable only after successfull authentication
 * For this stage the page is static and the corresponding api's are not implemented
 *
 * @returns
 */
export const User = () => {

  return (
    <>
      <Nav />
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
