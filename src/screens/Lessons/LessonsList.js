import React, { useState } from "react";
import Accordian from "../../containers/accordian/Accordian";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import MenuItem from "@material-ui/core/MenuItem";
//import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";
import "./Lessons.css";

const styles = {
  tabs: {
    background: "hsl(191, 89%, 19%)",
  },
  slide: {
    padding: 3,
    minHeight: 100,
    color: "#fff",
    backgroundColor: "rgba(77, 116, 153,0.2)",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
  
};
const Lessons = () => {
  const [index, setIndex] = useState(0);
  const handleChange = (event, value) => {
    setIndex(value);
  };
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="lessons">
      <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
        <Tab label="Physics" />
        <Tab label="Chemistry" />
        <Tab label="C. Maths" />
        <Tab label="Bio" />
      </Tabs>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems="" />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems="" />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems="" />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems="" />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Lessons;
