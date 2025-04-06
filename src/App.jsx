import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingIn from "./pages/Singin/SingIn";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Singin" element={<SingIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:categoryId" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
