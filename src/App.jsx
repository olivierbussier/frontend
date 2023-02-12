// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { User } from "./pages/User";

import { ProtectedRoute } from "./Services/ProtectedRoute";
// import { Globals } from "./Services/Globals";

import "./App.scss";

const App = () => {

  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user"    element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path="*"        element={<Error code={404} message="Page introuvable" />} />
    </Routes>
  );
}

export default App;
