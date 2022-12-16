import FilterBar from "../ui/FilterBar";
import CategoryBar from "./CategoryBar";
import ProductsContainer from "./ProductsContainer";

const MainContainer = () => {
  return (
    <section className="bg-[#F8F9FA] py-[3rem]">
      <article className="mx-[10rem]">
        <FilterBar />
        <div className="flex flex-row pt-[3rem]">
          <CategoryBar />
          <ProductsContainer />
        </div>
      </article>
    </section>
  );
};

export default MainContainer;
