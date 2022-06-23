import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./product-description-page.css";
import ProductAttributes from "./components/product-attributes.js";
import ProductGallery from "./components/product-gallery.js";
import Loading from "./components/loading.js";

class ProductDescriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: null,
    };
  }

  componentDidMount() {
    console.log("entre a componentDidMount");
    let data = this.getProducts();
    console.log(data);
    if (data !== null) {
      data.category.products.map((product) => {
        console.log("entre al for");
        let windowLocationSearch = window.location.search.replace("?", "");
        if (product.id === windowLocationSearch) {
          this.setState({ Product: product });
        }
      });
    }
  }

  getProducts() {
    console.log("entre a getProduct");
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
              description
              attributes {
                id
                name
                type
                items {
                  id
                  displayValue
                  value
                }
              }
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
        console.log("dentro de la query");
        if (loading) return "loading";
        if (error) return "error";
        return { data };
      }}
    </Query>;
    return null;
  }

  render() {
    console.log(JSON.stringify(this.props));
    if (this.state.Product === null) {
      return (
        <div className="center">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="productDescription">
          <ProductGallery Product={this.state.Product} />
          <ProductAttributes Product={this.state.Product} />
        </div>
      );
    }
  }
}

export default ProductDescriptionPage;
