import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Services/Redux/store";
import { CookiesProvider } from "react-cookie";

import App from "./App";

import "./index.scss";

/**
 * This is the primary entry point of the application.
 * Initialisation of router, redux and cookies are done here
 * The whole document is rendered in root div previously
 * declared in index.html
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
