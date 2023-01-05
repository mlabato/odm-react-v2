import React, { useState, useEffect, useReducer } from "react";

const ProductContext = React.createContext({
  products: [],
  categories: [],
  isLoading: true,
  categoryUrl: "/products",
  updateUrl: () => {},
});

const defaultUrlState = {
  categoryUrl: "/products",
};

const urlReducer = (state, action) => {
  if (action.type === "UPDATE") {
    return { categoryUrl: action.url };
  }
};

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productIsLoading, setProductIsLoading] = useState(true);

  const [urlState, dispatchAction] = useReducer(urlReducer, defaultUrlState);

  const updateUrlHandler = (url) => {
    dispatchAction({ type: "UPDATE", url: url });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(urlState.categoryUrl);

        const body = await response.json();

        if (response.status === 201) {
          setProducts(body.products);
          setProductIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts().catch(console.error);

    const fetchCategories = async () => {
      try {
        const response = await fetch("/products");

        const body = await response.json();

        if (response.status === 201) {
          setCategories(body.categories);
          setProductIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories().catch(console.error);
  }, [urlState.categoryUrl]);

  const contextValue = {
    products: products,
    categories: categories,
    isLoading: productIsLoading,
    categoryUrl: urlState,
    updateUrl: updateUrlHandler,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
