import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./product-page.css";
import ProductCard from "./components/product-card";

class ProductPage extends React.Component {
  renderCategory(product) {
    if (
      this.props.Category !== "all" &&
      product.category === this.props.Category
    ) {
      return true;
    }
    if (this.props.Category === "all") return true;
    else return false;
  }
  renderAmount(product) {
    let sym = "";
    let price = 0;
    product.prices.map((p) => {
      if (p.currency.label === this.props.Currency) {
        sym = p.currency.symbol;
        price = p.amount;
      }
    });
    return sym + price;
  }

  render() {
    return (
      <React.Fragment>
        <Query
          query={gql`
            {
              category {
                products {
                  id
                  name
                  brand
                  gallery
                  inStock
                  category
                  prices {
                    currency {
                      symbol
                      label
                    }
                    amount
                  }
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;

            return (
              <React.Fragment>
                <h1 className="categoryName">
                  {this.props.Category.toUpperCase()} Category
                </h1>
                <div className="divAllProducts">
                  {data.category.products.map((product) => {
                    if (this.renderCategory(product)) {
                      return (
                        <div key={product.id} className="divProductCard">
                          <ProductCard
                            key={product.id}
                            Product={product}
                            FinalAmount={this.renderAmount(product)}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default ProductPage;
