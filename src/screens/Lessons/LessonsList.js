import React, { useEffect, useState } from "react";
import Accordian from "../../containers/accordian/Accordian";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
//import MenuItem from "@material-ui/core/MenuItem";
//import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";
import "./Lessons.css";
import { useDispatch, useSelector } from "react-redux";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
import { listSubjects } from "../../actions/subjectActions";
import ComingSoon from "../../components/coming_soon/ComingSoon";
import ContactUsBtn from "../../components/buttons/contact_us_btn/ContactUsBtn";
const styles = {
  tabs: {
    background: "#fff",
    color: "#56A6A2",
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
  //const [subjectList, setSubjectList] = useState([]);
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
      <p style={{ marginBottom: "10px", textAlign: "center" }}>
        ஆசிரியர்கள் மற்றும் பல்கலைக்கழக மானவர்களால் தயாரிக்கப்பட்ட இலவச பாட
        விளக்கங்கள்<br></br>
        <small style={{ color: "green" }}>
          இவ்வாறான இலவச பாட விளக்கங்களை வழங்க விரும்பும் ஆசிரியர்கள்/பல்கலைக்கழக
          மானவர்கள் எங்களை தொடர்பு கொள்ளலாம்.
        </small>
        <br></br>
        <ContactUsBtn />
      </p>
      <Tabs
        value={index}
        fullWidth
        onChange={handleChange}
        style={styles.tabs}
        variant="scrollable"
        scrollButtons="on">
        {subjects?.subjects?.map((sub) => (
          <Tab label={sub.name.toUpperCase()} />
        ))}
      </Tabs>
      {subjects?.subjects ? (
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          {/* {subjects?.subjects?.map((sub) => ( */}
          <div className="lessons__slide">
            <Accordian accordianItems={subjects?.subjects[0]} />
          </div>
          <div className="lessons__slide">
            <ComingSoon />
          </div>
          <div className="lessons__slide">
            <Accordian accordianItems={subjects?.subjects[2]} />
          </div>
          <div className="lessons__slide">
            <Accordian accordianItems={subjects?.subjects[3]} />
          </div>

          {/* ))} */}
        </SwipeableViews>
      ) : (
        <CircularProgress
          color="secondary"
          style={{ position: "absolute", left: "50%", top: "50px" }}
        />
      )}
    </div>
  );
};

export default Lessons;
