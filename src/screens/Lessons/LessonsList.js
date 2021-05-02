import React, { useEffect, useState } from "react";
import Accordian from "../../containers/accordian/Accordian";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import MenuItem from "@material-ui/core/MenuItem";
//import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";
import "./Lessons.css";
import { useDispatch, useSelector } from "react-redux";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
import { listSubjects } from "../../actions/subjectActions";

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
  const dispatch = useDispatch();
  const [subjectList, setSubjectList] = useState([]);
  const { subjects, loading, errors } = useSelector(subjectsSelector);

  useEffect(() => {
    const fetchData = async () => {
      if (!subjects || subjects === [] || subjects === null) {
        listSubjects(dispatch);
      }

      // listCategories(dispatch);
    };
    fetchData();
  }, []);
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
      {subjects?.subjects ? (
        <>
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
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Lessons;
