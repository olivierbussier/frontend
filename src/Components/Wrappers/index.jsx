import "./style.scss";

export const Main = ({ className="", children }) => {
  return <main className={className}>{children}</main>;
};

export const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
