import { useContext } from "react";
import ProductContext from "../../store/product-context";

const CategoryBar = () => {
  const productsCtx = useContext(ProductContext);
  const categories = productsCtx?.products?.categories;

  const mappedCategories = categories.map((category) => {
    return (
      <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212] capitalize">
        <a href="/#">{category.category}</a>
      </li>
    );
  });

  return (
    <section className="w-1/4">
      
      <p className="font-bold text-[2rem]">Productos</p>
      <ul>
      <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212] capitalize">
        <a href="/#">Ofertas</a>
      </li>
        {mappedCategories}</ul>
    </section>
  );
};

export default CategoryBar;
