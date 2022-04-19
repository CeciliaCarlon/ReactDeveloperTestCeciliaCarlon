import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar.js";
import ProductPage from "./products-page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/category" element={<ProductPage />}></Route>
            <Route path="/" element={<ProductPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
