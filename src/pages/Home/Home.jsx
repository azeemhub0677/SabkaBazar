import React from "react";
import NavBar from "../../component/NavBar";
import Category from "../../component/Category";
import Hero from "../../component/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="HomeContainer">
        <Hero />
        <Category />
      </div>
    </>
  );
};

export default Home;
