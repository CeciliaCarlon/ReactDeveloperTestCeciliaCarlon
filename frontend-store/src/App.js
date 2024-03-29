import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./products-page";
import NavBar from "./components/nav-bar.js";
import ReciveProductId from "./reciveProductId";

class App extends React.Component {
  state = {
    currency: "USD",
  };
  handleCurrency(newCurrency) {
    if (newCurrency !== this.state.currency) {
      this.setState({
        currency: newCurrency,
      });
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar
            hanbleCurrency={this.handleCurrency.bind(this)}
            actualCurrency={this.state.currency}
          />
          <Routes>
            <Route
              exact
              path="/all"
              element={
                <ProductPage
                  location={this.props.location}
                  Category="all"
                  Currency={this.state.currency}
                />
              }
            ></Route>
            <Route
              exact
              path="/clothes"
              element={
                <ProductPage
                  Category="clothes"
                  Currency={this.state.currency}
                />
              }
            ></Route>
            <Route
              exact
              path="/tech"
              element={
                <ProductPage Category="tech" Currency={this.state.currency} />
              }
            ></Route>
            <Route
              path="/description/:productId"
              element={<ReciveProductId Currency={this.state.currency} />}
            ></Route>
            <Route
              path="/"
              element={
                <ProductPage Category="all" Currency={this.state.currency} />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
