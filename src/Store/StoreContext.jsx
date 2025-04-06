// StoreContext.js
import React, { createContext, useEffect, useState } from "react";

export const StoreContextApp = createContext({
  bannerData: [],
  categoryData: [],
  ProductsData: [],
  cart: [],
  SetBannerData: () => {},
  setCategoryData: () => {},
  setProductsData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

const StoreContext = (props) => {
  const [bannerData, SetBannerData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [ProductsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) {
        console.log("When user is login ");
        setCart(storedCart);
      }
    }

    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }

    fetchBanner();
    fetchCategory();
    fetchProducts();
  }, []);

  const fetchBanner = async () => {
    const response = await fetch("/Jsons/Banner.json");
    const data = await response.json();
    SetBannerData(data);
  };

  const fetchCategory = async () => {
    const response = await fetch("/Jsons/Catagory.json");
    const data = await response.json();
    setCategoryData(data);
  };

  const fetchProducts = async () => {
    const response = await fetch("/Jsons/Products.json");
    const data = await response.json();
    setProductsData(data);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);
    if (productIndex > -1) {
      updatedCart[productIndex].quantity = quantity;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const values = {
    bannerData,
    SetBannerData,
    categoryData,
    setCategoryData,
    ProductsData,
    setProductsData,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <StoreContextApp.Provider value={values}>
      {props.children}
    </StoreContextApp.Provider>
  );
};

export default StoreContext;
