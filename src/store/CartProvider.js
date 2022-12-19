import { useEffect, useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount;

    if (action.item && action.item.discount > 1) {
      const discount = action.item.discount / 100;

      const price = action.item.price - action.item.price * discount;

      updatedTotalAmount = state.totalAmount + price;
    } else {
      const price = +action.item.price
      updatedTotalAmount = state.totalAmount + price;
    }
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    console.log(existingItem);

    const discount = existingItem ? existingItem.discount / 100 : "";
    const price = existingItem
      ? existingItem.price - existingItem.price * discount
      : "";

    const updatedTotalAmount = state.totalAmount - price;
    let updatedItems;

    if (existingItem && existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.items));
    localStorage.setItem("totalAmount", JSON.stringify(cartState.totalAmount));
  }, [cartState]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;