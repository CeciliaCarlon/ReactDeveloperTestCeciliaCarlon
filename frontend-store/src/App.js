import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./products-page";
import NavBar from "./components/nav-bar.js";

class App extends React.Component {
  // state = {
  //   category: "",
  // };
  // componentDidUpdate(newCategory) {
  //   this.setState((this.state.category = newCategory));
  // }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar />
          {console.log(this.props)}
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
