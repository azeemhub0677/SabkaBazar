// SignIn.js
import React, { useRef, useState } from "react";
import NavBar from "../../component/NavBar";
import "./singin.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email.current.value &&
      storedUser.password === password.current.value
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");

      navigate("/cart");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="heading">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist, and Recommendations</p>
        </div>
        <div className="login-box">
          <input
            type="text"
            name="email"
            ref={email}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            name="password"
            ref={password}
            placeholder="Enter your Password"
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button onClick={handleSubmit}>SignIn</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
