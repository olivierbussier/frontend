import { useDispatch } from "react-redux";
import { Features } from "../../Components/Features";
import { Nav } from "../../Nav";
import { CONNECT_USER, DISCONNECT_USER } from "../../reducers/home";

import "./style.scss";

const ButtonConnect = ({ action, children }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        action === "connect"
          ? dispatch({ type: CONNECT_USER })
          : dispatch({ type: DISCONNECT_USER });
      }}
    >
      {children}
    </button>
  );
};

const Body = ({ children }) => {
  return <body>{children}</body>;
};
const Main = ({ children }) => {
  return <main>{children}</main>;
};

const Hero = ({ title, items, footer }) => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        {items.map((subtitle) => (
          <p className="subtitle">{subtitle}</p>
        ))}
        <p className="text">{footer}</p>
      </section>
    </div>
  );
};

const Home = () => {
  return (
    <Body>
      <Nav
        logo="/assets/argentBankLogo.png"
        altImg="Argent Bank Logo"
        linkUrl="/"
        title="Argent Bank"
      />
      <Main>
        <Hero
          title="Promoted content"
          items={["No fees.", "No minimum deposit.", "High interest rates."]}
          footer="Open a savings account with Argent Bank today!"
        />
      </Main>
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
          }
        ]}
      />
    </Body>
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

export default Home;
