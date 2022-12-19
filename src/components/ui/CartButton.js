import { useContext } from "react";

import CartIcon from "../cart/CartIcon"
import CartContext from "../../store/cart-context"

const CartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className=" text-[#A61212] border-2 border-[#A61212] group rounded-xl flex flex-row items-center p-[.5rem]"
      onClick={props.onClick}
    >
      <CartIcon />

      <p className="font-bold hover:text-black ">{numberOfCartItems}</p>
    </button>
  );
};

export default CartButton;