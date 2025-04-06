import React, { useContext } from "react";
import { StoreContextApp } from "../Store/StoreContext";
import Slider from "react-slick";
import "./Hero.css";

const Hero = () => {
  const { bannerData } = useContext(StoreContextApp);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {bannerData.map((bannerImage, index) => {
          let imagePath = bannerImage.bannerImageUrl.replace("/static/", "");

          return (
            <div key={index} className="offer-card">
              <img src={imagePath} alt={bannerImage.bannerImageAlt} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
