import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { StoreContextApp } from "../Store/StoreContext";

const NavBar = () => {
  const { cart } = useContext(StoreContextApp);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleOnRemove = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/singin");
  };

  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <ul>
          {isLoggedIn ? (
            <div className="logout-btn" onClick={handleOnRemove}>
              Logout
            </div>
          ) : (
            <>
              <li>
                <Link to="/singin">singIn</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </>
          )}
        </ul>
        {isLoggedIn ? (
          <Link to="/Cart" className="btn">
            <FaCartShopping />
            {cart.length}Item
          </Link>
        ) : (
          <Link to="/singin" className="btn">
            <FaCartShopping />
            {cart.length}Item
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
