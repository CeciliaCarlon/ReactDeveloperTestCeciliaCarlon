import "./App.css";
import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar.js";
import ProductPage from "./products-page";

class App extends React.Component {
  state = {
    client: null,
  };

  componentDidMount() {
    const cache = new InMemoryCache();
    const Client = new ApolloClient({
      cache,
      link: new createHttpLink({
        uri: "http://localhost:4000/graphql",
      }),
    });
    this.setState((this.state.client = Client));
    console.log(this.state.client);
  }

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
