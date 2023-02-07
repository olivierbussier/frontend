import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
// import { createStore } from "redux";

import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { User } from "./pages/User";
import { ProtectedRoute } from "./Auth/Protected";

import {store} from "./Redux/store"

import "./App.scss";


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user"    element={<ProtectedRoute><User/></ProtectedRoute>} />
        <Route path="*"        element={<Error code={404} message="Page introuvable" />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
