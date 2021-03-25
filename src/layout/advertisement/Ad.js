import React from "react";
import "./ad.css";
import ad from "../../assets/ad.jpg";
import ad2 from "../../assets/ad2.jpg";
import ad3 from "../../assets/ad3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Ad = () => {
  return (
    <div className="ad">
      <Carousel
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
        showThumbs={false}
        showIndicators={false}>
        <div>
          <img src={ad} alt='slide1'/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={ad2} alt='slide2'/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={ad3} alt='slide3'/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Ad;
