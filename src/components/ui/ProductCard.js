import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import CartContext from "../../store/cart-context";
import PriceCard from "./PriceCard";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartIsClicked, setCartIsClicked] = useState(false);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      model: props.model,
      category: props.category,
      discount: props.discount,
      amount: 1,
      price: props.price,
    });

    setCartIsClicked(true);
  };

  return (
    <article  className="w-[20rem] hover:bg-white p-[1rem] m-[1rem] hover:rounded-lg border-b-2 border-[#D9D9D9] hover:border-none ">
      <img src={"http://localhost:3000/images/productImages/" + props.image} alt=""></img>
      <div className=" pt-[1rem] h-[4rem] text-[1.2rem]">{props.model}</div>
      <div className="text-[#A61212] font-bold text-[1.5rem] my-[.5rem] ">
        <PriceCard price={props.price} discount={props.discount} />
      </div>
      <div className="flex flex-row text-[#A61212] mx-[5rem] justify-around items-center mt-[2rem] ">
        <button
          className={`${cartIsClicked && "animate-wiggle"} text-[#A61212] `}
          onClick={addToCartHandler}
          onAnimationEnd={() => setCartIsClicked(false)}
        >
          <FaCartPlus className="text-[2.2rem] hover:text-[#000000]" />
        </button>{" "}
        <a href={"/productos/" + props.id}>
          <FaEye
            className="text-[2.2rem] hover:text-[#000000]"
          />
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
