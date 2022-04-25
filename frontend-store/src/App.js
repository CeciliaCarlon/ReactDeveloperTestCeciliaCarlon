import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar.js";
import ProductPage from "./products-page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/all"
              element={<ProductPage Category="all" />}
            ></Route>
            <Route
              exact
              path="/clothes"
              element={<ProductPage Category="clothes" />}
            ></Route>
            <Route
              exact
              path="/tech"
              element={<ProductPage Category="tech" />}
            ></Route>
            <Route path="/" element={<ProductPage Category="all" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
