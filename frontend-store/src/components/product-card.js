import React from "react";
import "./product-card.css";

class ProductCard extends React.Component {
  render() {
    //Se tiene que buscar una forma de modificar el precio dependiendo la moneda
    const currentPrice =
      this.props.Product.prices
        ./*filter(
      (p) => p.currency.label === "USD"
    ).*/ amount;
    //console.log(this.props.Product.gallery[0]);
    return (
      <React.Fragment>
        <div
          key={this.props.Product.id}
          className={"productCard" + this.props.puntero}
        >
          <img
            className="productImg"
            src={this.props.Product.gallery[0]}
            alt=""
          />
          <p className="brandName">
            {this.props.Product.brand} {this.props.Product.name}
          </p>
          <p className="amount">
            {this.props.Product.prices[0].currency.symbol +
              this.props.Product.prices[0].amount}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCard;
