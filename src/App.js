import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import CartProvider from "../src/store/CartProvider"
import Cart from "../src/components/cart/Cart"

import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";

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
      <Route path="/que-hacemos" element={<ProductDescription />} />
    </Routes>
    </CartProvider>
    </div>
  );
}

export default App;
