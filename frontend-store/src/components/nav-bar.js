import React from "react";
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
        <div className="category">
          <div className="category">
            <div className="navigation center divSelected">
              <p className="navigationElement elementSelected">ALL</p>
            </div>
            <div className="navigation center">
              <p className="navigationElement">CLOTHES</p>
            </div>
            <div className="navigation center">
              <p className="navigationElement">TECHNOLOGY</p>
            </div>
          </div>
          <img className="padding-top-26px" src={BrandLogo} alt="" />
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
              <ul className="currencyTypes">
                <li className="currencyT">$ USD</li>
                <li className="currencyT">€ EUR</li>
                <li className="currencyT">¥ JPY</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
