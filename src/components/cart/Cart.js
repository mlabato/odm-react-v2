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

  //THIS WILL CHANGE WHEN THE API GETS UPDATED
  const submitOrderHandler = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartCtx.items }),
      })
      const body = await response.json();

      if (response.status === 201){
        const url = body.init_point
        window.location.replace(url)
      }
      
    } catch (error) {
      console.log(error);
    } 

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
        <button className="text-white bg-[#A61212] cursor-pointer ml-[1rem] w-[5rem] p-[.5rem] rounded-lg" onClick={submitOrderHandler}>
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



  const isSubmittingModalContent = <p className="text-[#A61212] p-[1rem] font-bold text-center text-[1.5rem]">Tu pedido se está procesando</p>;
  const didSubmitModalContent = <p className="text-[#A61212] p-[1rem] font-bold text-center text-[1.5rem]">El pedido ha sido procesado!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;