import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";
import "./ad.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
    borderRadius: "20px",
    padding: "5px 5px 0 5px",
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
    backgroundColor: "transparent",
  },
  slide3: {
    backgroundColor: "transparent",
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
                  src={process.env.PUBLIC_URL + "/assets/add-1.png"}
                  alt="image_1"
                  style={{
                    display: "block !important",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/ad-2.png"}
                  alt="image_3"
                  style={{
                    display: "block !important",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/ad-3.png"}
                  alt="image_3"
                  style={{
                    display: "block !important",
                    width: "100%",
                    borderRadius: "20px",
                  }}
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
                src={process.env.PUBLIC_URL + "/assets/add-1.png"}
                alt="image_1"
                style={{ display: "block !important", width: "100%" }}
              />
            </div>

            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <img
                src={process.env.PUBLIC_URL + "/assets/ad-2.png"}
                alt="image_3"
                style={{ display: "block !important", width: "100%" }}
              />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <img
                src={process.env.PUBLIC_URL + "/assets/ad-3.png"}
                alt="image_3"
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
