// Register.js
import React, { useRef } from "react";
import NavBar from "../../component/NavBar";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confPassword = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.current.value === confPassword.current.value) {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful!");

      navigate("/singin");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="register-container">
        <div className="heading">
          <h1>Register</h1>
          <p>Create your account to start using the services</p>
        </div>
        <div className="register-box">
          <input
            type="text"
            id="fname"
            ref={firstName}
            placeholder="First Name"
          />
          <input
            type="text"
            id="lname"
            ref={lastName}
            placeholder="Last Name"
          />
          <input
            type="email"
            id="emailid"
            ref={email}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            id="pass"
            ref={password}
            placeholder="Enter your Password"
          />
          <input
            type="password"
            id="confpass"
            ref={confPassword}
            placeholder="Confirm your Password"
          />
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
