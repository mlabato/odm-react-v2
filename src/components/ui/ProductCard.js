import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import CartContext from "../../store/cart-context";

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
    <article className="w-[20rem] hover:bg-white p-[1rem] m-[1rem] hover:rounded-lg border-b-2 border-[#D9D9D9] hover:border-none ">
      <img src={props.image} alt=""></img>
      <div className="text-center pt-[1rem] h-[4rem]">{props.model}</div>
      <div className="text-[#A61212] font-bold text-[1.5rem] my-[.5rem] text-center">
        {"$ " + props.price}
      </div>
      <div className="flex flex-row text-[#A61212] mx-[5rem] justify-around items-center text-[1.5rem] ">
        <button
          className={`${cartIsClicked && "animate-wiggle"} text-[#A61212]`}
          onClick={addToCartHandler}
          onAnimationEnd={() => setCartIsClicked(false)}
        >
          <FaCartPlus />
        </button>{" "}
        <a href={"/productos/" + props.id}><FaEye /></a>
      </div>
    </article>
  );
};

export default ProductCard;
