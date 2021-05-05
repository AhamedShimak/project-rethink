import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";
import "./ad.css";
import ad from "../../assets/ad.jpg";
import ad2 from "../../assets/ad2.jpg";
import ad3 from "../../assets/ad3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
    // padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "transparent",
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
                <img
                  src={ad}
                  alt="slide1"
                  style={{ display: "block !important", width: "100%" }}
                />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <img
                  src={ad2}
                  alt="slide2"
                  style={{ display: "block !important", width: "100%" }}
                />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <img
                  src={ad3}
                  alt="slide3"
                  style={{ display: "block !important", width: "100%" }}
                />
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
              <img
                src={ad}
                alt="slide1"
                style={{ display: "block !important", width: "100%" }}
              />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              <img
                src={ad2}
                alt="slide1"
                style={{ display: "block !important", width: "100%" }}
              />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <img
                src={ad3}
                alt="slide1"
                style={{ display: "block !important", width: "100%" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ad;
