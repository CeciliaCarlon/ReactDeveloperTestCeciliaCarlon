import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

class ProductPage extends React.Component {
  /*state = {
    products: {
      id,
      name,
      brand,
      gallery,
      inStock,
      attributes: {
        type,
        name,
        items: {
          value,
        },
      },
      prices: {
        currency: {
          symbol,
          label,
        },
        amount,
      },
    },
  };*/
  render() {
    return (
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

          return data.category.products.map((product) => {
            return (
              <ul key={product.id}>
                <li>Name: {product.name}</li>
                <li>Brand: {product.brand}</li>
                <li>In Stock: {product.inStock ? "available" : "sold out"}</li>
                <li>
                  {product.prices.map((price, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          Precio: {price.currency.symbol} {price.amount}
                        </li>
                      </ul>
                    );
                  })}
                </li>
                <li>
                  {product.gallery.map((url, index) => {
                    return (
                      <div key={index}>
                        Image: <img src={url} alt="" />
                      </div>
                    );
                  })}
                </li>
              </ul>
            );
          });
        }}
      </Query>
    );
  }
}

export default ProductPage;
