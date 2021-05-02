import React, { useEffect, useState } from "react";
import Accordian from "../../containers/accordian/Accordian";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";
import "./Lessons.css";
import { useSelector } from "react-redux";
import { subjectsSelector } from "../../features/subjects/subjectSlice";

const styles = {
  tabs: {
    background: "hsl(191, 89%, 19%)",
  },
  slide: {
    padding: 3,
    minHeight: 100,
    color: "#fff",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
  slide: {
    backgroundColor: "rgba(77, 116, 153,0.2)",
  },
};
const Lessons = () => {
  const [index, setIndex] = useState(0);
  const [subjectList, setSubjectList] = useState([]);
  const { subjects, loading, errors } = useSelector(subjectsSelector);

  useEffect(() => {}, [subjects]);
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
          <Accordian accordianItems={subjects?.subjects[0]} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems={subjects?.subjects[1]} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems={subjects?.subjects[2]} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide)}>
          <Accordian accordianItems="" />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Lessons;
