import ProductCard from "../ui/ProductCard";
import { useContext } from "react";
import ProductContext from "../../store/product-context";

const ProductsContainer = () => {
  const productsCtx = useContext(ProductContext);
  const products = productsCtx?.products?.products?.filter(
    (product) => product.stock > 0
  );

  return (
    <section className="w-3/4  flex flex-row flex-wrap">
       
      {products?.map((product) => {
        return <ProductCard model={product.model} price={product.price} />;
      })}
     
    </section>
  );
};

export default ProductsContainer;
