import React, { useState, useEffect } from "react";

const ProductContext = React.createContext({
  products: [],
});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => setProducts(products))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const contextValue = {
    products: products,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;