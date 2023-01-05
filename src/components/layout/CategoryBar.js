import { useContext } from "react";
import ProductContext from "../../store/product-context";

const CategoryBar = () => {
  const productsCtx = useContext(ProductContext);
  const categories = productsCtx?.categories;

  const handleCategoriesClick = (e) => {
    productsCtx.updateUrl("/category/" + e.target.value);
  };

  const handleOnSaleClick = () => {
    productsCtx.updateUrl("/onsale");
  };

  const handleTotalProductsClick = () => {
    productsCtx.updateUrl("/products");
  };

  const mappedCategories = categories?.map((category, i) => {
    return (
      <button
        type="button"
        value={category.category}
        key={i}
        className="capitalize text-left text-[1.5rem] my-[1rem]   hover:animate-slide-right hover:text-[#A61212]"
        onClick={handleCategoriesClick}
      >
        {category.category}
      </button>
    );
  });

  return (
    <section className="w-1/4">
      <p className="font-bold text-[2rem]">Productos</p>
      <div className="flex flex-col  justify-start">
        <button
          className="text-[1.5rem] text-left my-[1rem] hover:animate-slide-right capitalize hover:text-[#A61212]"
          onClick={handleTotalProductsClick}
        >
          Todos
        </button>

        <button
          className="text-[1.5rem] text-left my-[1rem] hover:animate-slide-right capitalize hover:text-[#A61212]"
          onClick={handleOnSaleClick}
        >
          Ofertas
        </button>

        {mappedCategories}
      </div>
    </section>
  );
};

export default CategoryBar;
