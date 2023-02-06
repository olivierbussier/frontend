import "./style.scss";

export const Main = ({ className="", children }) => {
  return <main className={className}>{children}</main>;
};

export const Form = ({ children }) => {
  return <form>{children}</form>;
};
