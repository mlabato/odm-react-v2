import React from "react";
import { useContext, useState} from "react";

import Modal from "../ui/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";


const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);


  const cartCtx = useContext(CartContext);

  const totalAmountToNumber = +cartCtx.totalAmount

  const totalAmount = `$${totalAmountToNumber.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  //THIS WILL CHANGE WHEN THE API GETS UPDATED
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://foodproject-7edcc-default-rtdb.firebaseio.com/orders.json",
      {
        method: "post",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    cartCtx.items.length > 0 ?
    (<ul className="list-none max-h-[20rem] overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          model={item.model}
          category={item.category}
          discount={item.discount}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>)
    :
    <p className="text-[#A61212] pt-[2rem] font-bold text-center">Aún no se agregaron productos al carrito</p>
  );

  const modalActions = (
    <div className="text-right">
      <button className="text-white bg-[#A61212] cursor-pointer w-[5rem]  p-[.5rem] rounded-lg " onClick={props.onClose}>
        Cerrar
      </button>
      {hasItems && (
        <button className="text-white bg-[#A61212] cursor-pointer ml-[1rem] w-[5rem] p-[.5rem] rounded-lg" onClick={orderHandler}>
          Comprar
        </button>
      )}
    </div>
  );
  


  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      
      <div className="flex justify-between items-center font-bold my-[1rem] text-[1.5rem]">
        <span>Precio total</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );



  const isSubmittingModalContent = <p>Procesando la información</p>;
  const didSubmitModalContent = <p>El pedido ha sido procesado!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;