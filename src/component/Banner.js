'use client'
// import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:'true',
    autoplay:'false'
  };
  return (     
      <Slider {...settings}>
        <div style={{marginTop:'-65px'}}>
          <div style={{ backgroundImage: `url("images/homepage-banner1.webp")`, padding:'17% 0', backgroundSize:'cover' }}>
            <div className="overlay"></div>
            <div className="banner-content">
                <h1 className="bold-6 text-uppercase">Vehicle Cell Phone Signal Booster</h1>
                <button className="btn1 mt-3">Know More</button>
              </div>
          </div>

        </div>
        <div style={{marginTop:'-65px'}}>
          <div style={{ backgroundImage: `url("images/homepage-banner2.webp")`, padding:'17% 0', backgroundSize:'cover' }}>
            <div className="overlay"></div>
            <div className="banner-content">
                <h1 className="bold-6 text-uppercase">Vehicle Cell Phone Signal Booster</h1>               
                <button className=" btn1 mt-3">Know More</button>
              </div>
          </div>
        </div>
      </Slider>
  );
}
