import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <div className="font-montserrat">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/que-hacemos" element={<ProductDescription />} />
    </Routes>
    </div>
  );
}

export default App;
