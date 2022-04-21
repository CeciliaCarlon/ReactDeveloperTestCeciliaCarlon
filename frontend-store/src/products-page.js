import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./product-page.css";
import ProductCard from "./components/product-card";

class ProductPage extends React.Component {
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

          return (
            <React.Fragment>
              <h1 className="categoryName">All Category</h1>
              <div className="divAllProducts">
                {data.category.products.map((product, index) => {
                  return (
                    <div key={product.id} className="divProductCard">
                      <ProductCard
                        key={product.id}
                        Product={product}
                        puntero={index}
                      />
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ProductPage;
