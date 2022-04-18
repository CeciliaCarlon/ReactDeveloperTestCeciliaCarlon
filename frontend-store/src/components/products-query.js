import React from "react";
import ApolloClient, { qgl } from "apollo-boost";
import { APolloProvider, Query } from "react-apollo";

class ProductsQuery extends React.Component {
  state = {
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
  };
}

export default ProductsQuery;
