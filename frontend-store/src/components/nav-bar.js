import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import BrandLogo from "../icons/Brand-icon.svg";
import CartIcon from "../icons/Cart-icon.svg";
//Components
import CurrencyChange from "./currency-change.js";

class Navbar extends React.Component {
  state = {
    currencyDown: false,
  };
  switchCurrency() {
    if (this.state.currencyDown) this.setState({ currencyDown: false });
    else this.setState({ currencyDown: true });
  }
  render() {
    return (
      <React.Fragment>
        <div className="category marginSides-100">
          <div className="category">
            <Query
              query={gql`
                {
                  categories {
                    name
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error!</p>;

                return (
                  <>
                    {data.categories.map((category, index) => {
                      return (
                        <Link key={index} to={"/" + category.name}>
                          <div
                            className={
                              /*"navigation center" + category.name ===
                              this.props.history.location.search.substr(1)*/ "navigation center divSelected"
                            }
                          >
                            <p className="navigationElement elementSelected">
                              {category.name.toUpperCase()}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                );
              }}
            </Query>
          </div>
          <Link to={"/all"}>
            <img className="padding-top-26px" src={BrandLogo} alt="" />
          </Link>
          <div>
            <div className="category">
              <CurrencyChange
                switchCurrency={this.switchCurrency.bind(this)}
                currencyDown={this.state.currencyDown}
              />
              <img className="padding-top-31px" src={CartIcon} alt="" />
            </div>
            <div
              className={this.state.currencyDown ? "currencyTypesDiv" : "hide"}
            >
              {" "}
              <Query
                query={gql`
                  {
                    currencies {
                      symbol
                      label
                    }
                  }
                `}
              >
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error!</p>;

                  return (
                    <>
                      <ul className="currencyTypes">
                        {data.currencies.map((Currency, index) => {
                          return (
                            <li
                              key={index}
                              className={
                                this.props.actualCurrency === Currency.label
                                  ? "currencySelected currencyT"
                                  : "currencyT"
                              }
                              onClick={() =>
                                this.props.hanbleCurrency(Currency.label)
                              }
                            >
                              {Currency.symbol} {Currency.label}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                }}
              </Query>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
