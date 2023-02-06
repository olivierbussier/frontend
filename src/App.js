import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import homeReducer from "./reducers/home";

import { Error } from "./pages/Error";
import Home from "./pages/Home";

import "./App.scss";


function App() {
  return (
    <Provider store={homeReducer}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<Error code={404} message="Page introuvable" />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
