import ProductCard from "../ui/ProductCard";
import { useContext } from "react";
import ProductContext from "../../store/product-context";
import Spinner from "../ui/Spinner"

const ProductsContainer = () => {
  const productsCtx = useContext(ProductContext);
  const products = productsCtx?.products
  const isLoading = productsCtx?.isLoading;
  
  const stockedProducts = products?.filter(
    (product) => product.stock > 0
  );

  return (
    <section className="w-3/4  flex flex-row flex-wrap">
      {console.log(productsCtx.isLoading)}
      {isLoading && <div className="mx-auto"><Spinner /></div>}
      {!isLoading && stockedProducts?.map((product, i) => {
        return <ProductCard key={i} model={product.model} price={product.price} id={product.id} category={product.category} discount={product.discount} image={product.image}/>;
      })}
     
    </section>
  );
};

export default ProductsContainer;
