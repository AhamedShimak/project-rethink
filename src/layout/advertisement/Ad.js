import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";
import "./ad.css";
import ad from "../../assets/ad.jpg";
import ad2 from "../../assets/ad2.jpg";
import ad3 from "../../assets/ad3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#445",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};
const Ad = ({ desktop }) => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="ad">
      <div style={styles.root}>
        {!desktop ? (
          <>
            <AutoPlaySwipeableViews
              interval={2000}
              index={index}
              onChangeIndex={handleChangeIndex}>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <img className="ad_img" src={ad} alt="slide1" />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <img className="ad_img" src={ad2} alt="slide2" />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <img className="ad_img" src={ad3} alt="slide3" />
              </div>
            </AutoPlaySwipeableViews>
            <Pagination
              dots={3}
              index={index}
              onChangeIndex={handleChangeIndex}
            />
          </>
        ) : (
          <>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <img className="ad_img" src={ad} alt="slide1" />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              <img className="ad_img" src={ad2} alt="slide2" />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <img className="ad_img" src={ad3} alt="slide3" />
            </div>
          </>
        )}
      </div>
      {/* <Carousel
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
        showThumbs={false}
        showIndicators={false}>
        <div>
         
          <p className="legend">Legend 1</p>
        </div>
        <div>
    
          <p className="legend">Legend 2</p>
        </div>
        <div>
          
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </div>
  );
};

export default Ad;
