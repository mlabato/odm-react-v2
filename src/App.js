import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartProvider from "../src/store/CartProvider";
import Cart from "../src/components/cart/Cart";

import Home from "./pages/Home";
import CategoryDescription from "./pages/CategoryDescription";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";

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
          <Route path="/" element={<Home onShowCart={showCartHandler} />} />
          <Route
            path="/nuestros-productos"
            element={<CategoryDescription onShowCart={showCartHandler} />}
          />
           <Route
            path="/productos/:id"
            element={
              <ProductDetail
                onShowCart={showCartHandler}
              />
            }
          />
          <Route
            path="/nosotros"
            element={<About onShowCart={showCartHandler} />}
          />
          <Route
            path="/results/:query"
            element={
              <SearchResults
                
                onShowCart={showCartHandler}
              />
            }
          />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
