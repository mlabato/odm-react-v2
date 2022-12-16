import {TbArrowsUpDown} from "react-icons/tb"

const FilterBar = () => {
  return (
    <article className="flex  justify-end">
      {" "}
      <div className="flex flex-row items-center justify-between border-2 border-[#A61212] text-[#A61212] w-[17rem] rounded-lg p-[.5rem]">
        Más barato al más caro
        <TbArrowsUpDown className="ml-[2rem] text-[1.5rem]"/>
        
      </div>
      
    </article>
  );
};

export default FilterBar;
