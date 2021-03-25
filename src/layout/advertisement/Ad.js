import React from "react";
import "./ad.css";
import ad from "../../assets/ad.jpg";
import ad2 from "../../assets/ad2.jpg";
import ad3 from "../../assets/ad3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Ad = () => {
  return (
    <Carousel
      autoPlay="true"
      interval="2000"
      infiniteLoop="true"
      showThumbs={false}>
      <div>
        <img src={ad} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={ad2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={ad3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Ad;
