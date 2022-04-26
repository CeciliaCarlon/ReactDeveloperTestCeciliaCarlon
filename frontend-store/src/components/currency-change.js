import React from "react";
import "./currency-change.css";
import CurrencyIconDown from "../icons/Cash-icon-down.svg";
import CurrencyIconUp from "../icons/Cash-icon-up.svg";

class CurrencyChange extends React.Component {
  render() {
    return (
      <>
        <div className="currencyDisplay">
          <img
            onClick={this.props.switchCurrency}
            className={
              this.props.currencyDown ? "hiddenCurrency" : "dropDownCurrency"
            }
            src={CurrencyIconDown}
            alt=""
          />
          <img
            onClick={this.props.switchCurrency}
            className={
              this.props.currencyDown ? "showCurrency" : "hiddenCurrency"
            }
            src={CurrencyIconUp}
            alt=""
          />
        </div>
      </>
    );
  }
}

export default CurrencyChange;
