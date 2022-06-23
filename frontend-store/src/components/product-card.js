import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link
          to={
            this.props.Product.inStock
              ? "/description?" + this.props.Product.id
              : ""
          }
        >
          <div
            key={this.props.Product.id}
            className={
              this.props.Product.inStock ? "productCard" : "productCardNoStock"
            }
          >
            <h3 className={this.props.Product.inStock ? "hide" : "show"}>
              OUT OF STOCK
            </h3>
            <img
              className="productImg"
              src={this.props.Product.gallery[0]}
              alt=""
            />
            <p className="brandName">
              {this.props.Product.brand} {this.props.Product.name}
            </p>
            <p className="amount">{this.props.FinalAmount}</p>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default ProductCard;
