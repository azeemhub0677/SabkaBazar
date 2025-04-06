import React, { useContext, useEffect } from "react";
import NavBar from "../../component/NavBar";
import { StoreContextApp } from "../../Store/StoreContext";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(StoreContextApp);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn !== "true") {
      navigate("/singin");
    }
  }, [navigate]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <div className="cart-container">
        <main className="cart-content">
          <h2>My Cart ({cart.length} items)</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`/images/${item.imageURL}`}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1 > 0 ? item.quantity - 1 : 1
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Rs. {item.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </main>

        <footer className="cart-footer">
          <p>Promo code can be applied on the payment page</p>
          <button className="checkout-btn">
            Proceed to Checkout - Rs. {totalPrice}
          </button>
        </footer>
      </div>
    </>
  );
};

export default Cart;
