import React, { useState, useEffect } from "react";

const ProductContext = React.createContext({
  products: [],
  isLoading: true
});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productIsLoading, setProductIsLoading] = useState(true)

  useEffect(() => {
    fetch("/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => {setProducts(products); setProductIsLoading(false)})
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const contextValue = {
    products: products,
    isLoading: productIsLoading
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;