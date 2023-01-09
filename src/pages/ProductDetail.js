import { Fragment, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../store/product-context";

import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductDetailCard from "../components/ui/ProductDetailCard";
import Spinner from "../components/ui/Spinner";

const ProductDetail = (props) => {
  const { id } = useParams();
  const productsCtx = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const isLoading = () => {
      if (!productsCtx.isLoading) {
        const products = productsCtx?.products;

        const filteredProduct = products?.filter(
          (product) => product.id.toString() === id
        );

        setSelectedProduct(filteredProduct[0]);
      }
    };

    isLoading();
  });

  return (
    <Fragment>
      <Header onClick={props.onShowCart} />

      <Navbar />
      {console.log(selectedProduct)}
      {productsCtx.isLoading && <Spinner />}
      {!productsCtx.isLoading && (
        
        <ProductDetailCard
          model={selectedProduct.model}
          price={selectedProduct.price}
          id={selectedProduct.id}
          category={selectedProduct.category}
          discount={selectedProduct.discount}
          image={selectedProduct.image}
          description={selectedProduct.description}
          virola={selectedProduct.virola_id}
          color={selectedProduct.color_id}
          material={selectedProduct.material_id}
        />
      )}

      <Footer />
    </Fragment>
  );
};

export default ProductDetail;
