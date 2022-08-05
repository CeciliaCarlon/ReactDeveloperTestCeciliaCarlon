import React from "react";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";
import { Query } from "react-apollo";
import ProductDescriptionPage from "./product-description-page";

function ReciveProductId(props) {
  const { productId } = useParams();
  console.log("Valor de productId = " + productId);
  /*
  let Product = (
    <Query
      query={gql`
        {
          product(id: "huarache-x-stussy-le") {
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
      `}
    >
      {({ loading, error, data }) => {
        console.log("dentro de la query");
        if (loading) return "loading";
        if (error) return "error";
        return { data };
      }}
    </Query>
  );*/
  return (
    <React.Fragment>
      <Query
        query={gql`
          {
            product(id: "huarache-x-stussy-le") {
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
        `}
      >
        {({ loading, error, data }) => {
          console.log("dentro de la query");
          if (loading) return "loading";
          if (error) return "error";
          return (
            <>
              {
                <ProductDescriptionPage
                  Product={data}
                  Currency={props.Currency}
                />
              }
            </>
          );
        }}
      </Query>
    </React.Fragment>
  );
  /*
  return (
    <ProductDescriptionPage ProductID={productId} Currency={props.Currency} />
  );*/
}

export default ReciveProductId;
