import { useContext, useState } from "react";
import ProductContext from "../../store/product-context";

import { TbArrowsUpDown } from "react-icons/tb";

const FilterBar = () => {
  const productsCtx = useContext(ProductContext);
  const [filter, setFilter] = useState(true);

  const filterClickHandler = (e) => {
    setFilter(!filter);
    if (!filter) {
      productsCtx.updateUrl("/low-to-high-price-products");
    } else {
      productsCtx.updateUrl("/high-to-low-price-products");
    }
  };

  return (
    <article className="flex  justify-end">
      {" "}
      <button
        className="flex flex-row items-center justify-between border-2 border-[#A61212] text-[#A61212] w-[17rem] rounded-lg p-[.5rem]"
        onClick={filterClickHandler}
      >
        {filter && "Más barato al más caro"}
        {!filter && "Más caro al más barato"}
        <TbArrowsUpDown className="ml-[2rem] text-[1.5rem]" />
      </button>
    </article>
  );
};

export default FilterBar;
