import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Fragment } from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";

const SearchResults = (props) => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchResult, setSearchResult] = useState(false);
  const { query } = useParams();

  const searchHandler = useCallback(() => {
    const url = "/search/" + query;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data.length > 0) {
          setSearchedProducts(data.data);
          setSearchResult(true);
        } else {
          setSearchResult(false);
          setSearchedProducts([]);
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, [query]);

  useEffect(() => {
    searchHandler();
  }, [searchHandler]);

  const title = searchResult
    ? `Estos son los resultados para "${query}"`
    : `No existen resultados para "${query}"`;

  return (
    <Fragment>
      <Header onClick={props.onShowCart} />
      <Navbar />
      <section className="bg-[#F8F9FA] py-[3rem] flex flex-col justify-center">
        <article className="text-center font-bold text-[3rem]">{title}</article>
        {console.log(searchedProducts)}
        <article className="flex flex-row mx-[10rem] justify-center flex-wrap">
          {searchResult &&
            searchedProducts.map((product, i) => {
              return (
                <ProductCard
                  i={i}
                  model={product.model}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                  discount={product.discount}
                  image={product.image}
                />
              );
            })}
        </article>
        <a href="/" className="text-center font-bold pt-[2rem] text-[1.5rem] hover:text-[#A61212]">
          Volver a la Home
        </a>
      </section>
      <Footer />
    </Fragment>
  );
};

export default SearchResults;
