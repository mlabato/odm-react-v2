import { BsCart2 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const ProductCard = () => {
  return (
    <article
      className="w-[20rem] hover:bg-white p-[1rem] m-[1rem] hover:rounded-lg border-b-2 border-[#D9D9D9] hover:border-none "
    >
      <img src="/images/camionero.png" alt=""></img>
      <div className="text-center">Mate Camionero | De Alpaca Con Virola</div>
      <div className="text-[#A61212] font-bold text-[1.5rem] my-[.5rem] text-center">
        $2500
      </div>
      <div className="flex flex-row text-[#A61212] mx-[5rem] justify-around items-center text-[1.5rem] ">
        <BsCart2 /> <FaEye />
      </div>
    </article>
  );
};

export default ProductCard;
