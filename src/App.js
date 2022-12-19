import { Routes, Route } from "react-router-dom";
import {useState } from "react";
import CartProvider from "../src/store/CartProvider"
import Cart from "../src/components/cart/Cart"

import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";
import About from "./pages/About";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="font-montserrat">
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Routes>
      <Route path="/" element={<Home onShowCart={showCartHandler}/>} />
      <Route path="/nuestros-productos" element={<ProductDescription onShowCart={showCartHandler}/>} />
      <Route path="/nosotros" element={<About onShowCart={showCartHandler}/>} />
    </Routes>
    </CartProvider>
    </div>
  );
}

export default App;
