import { Features } from "../../Components/Features";
import { Footer } from "../../Components/Footer";
import { Hero } from "../../Components/Hero";
import { SignInButton } from "../../Components/Input";
import { Nav } from "../../Components/Nav";
import { Main } from "../../Components/Wrappers";

import "./style.scss";

export const Home = () => {
  return (
    <>
      <Nav
        items={[
          <SignInButton link="/sign-in" image="fa-user-circle" text="Sign In"/>]}
      />
      <Main>
        <Hero
          title="Promoted content"
          items={["No fees.", "No minimum deposit.", "High interest rates."]}
          footer="Open a savings account with Argent Bank today!"
        />
        <Features
          titre="Features"
          items={[
            {
              img: "/assets/icon-chat.png",
              alt: "Chat icon",
              titre: "You are our #1 priority",
              text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
            },
            {
              img: "/assets/icon-money.png",
              alt: "Chat icon",
              titre: "More savings means higher rates",
              text: "The more you save with us, the higher your interest rate will be!",
            },
            {
              img: "/assets/icon-security.png",
              alt: "Chat icon",
              titre: "Security you can trust",
              text: "We use top of the line encryption to make sure your data and money is always safe.",
            },
          ]}
        />
      </Main>
      <Footer />
    </>
  );
  // const cnxState = useSelector((state) => state);

  // return (
  //   <div>
  //     <h1>Home page</h1>
  //     <div>Etat courant : {cnxState.connected ? "true" : "false"}</div>
  //     <div>User : {cnxState.user}</div>
  //     {cnxState.connected ? (
  //       <ButtonConnect action="disconnect">Se déconnecter</ButtonConnect>
  //     ) : (
  //       <ButtonConnect action="connect">Se connecter</ButtonConnect>
  //     )}
  //   </div>
  // );
};
