import "./style.scss";

export const Main = ({ className="", children }) =>
  <main className={className}>{children}</main>


export const Form = ({ onSubmit, children }) =>
  <form onSubmit={onSubmit}>{children}</form>;

