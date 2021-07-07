import React, { useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
//import MenuItem from "@material-ui/core/MenuItem";

import "./QuizList.css";
import { useDispatch, useSelector } from "react-redux";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
// import { listSubjects } from "../../actions/subjectActions";
// import ComingSoon from "../../components/coming_soon/ComingSoon";
import ContactUsBtn from "../../components/buttons/contact_us_btn/ContactUsBtn";
import AddNew from "../../components/add_new/AddNew";
import Card from "../../components/card/Card";
import { useHistory } from "react-router-dom";
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
const QuizList = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  let history = useHistory();
  //const [subjectList, setSubjectList] = useState([]);
  const { subjects, loading, errors } = useSelector(subjectsSelector);

  useEffect(() => {
    // const fetchData = async () => {
    //   if (!subjects || subjects === [] || subjects === null) {
    //     // listSubjects(dispatch);
    //   }
    //   // listCategories(dispatch);
    // };
    // fetchData();
  }, []);

  return (
    <div className="quiz_list">
      <AddNew />
      <div onClick={() => history.push("/quiz/1")}>
        <Card />
      </div>
    </div>
  );
};

export default QuizList;
