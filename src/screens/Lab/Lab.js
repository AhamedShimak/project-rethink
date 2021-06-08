import React, { useEffect, useState } from "react";

import { MdKeyboardBackspace } from "react-icons/md";
import Draggable from "react-draggable";
import "./Lab.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { labsSelector } from "../../features/labs/labsSlice";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
import { listLabs } from "../../actions/labsActions";
import { listSubjects } from "../../actions/subjectActions";
import LabWaiting from "../../components/lab__waiting/LabWaiting";
const Lab = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [currentLab, setCurrentLab] = useState(null);
  const { id } = useParams();
  const { labs, loading, errors } = useSelector(labsSelector);
  const {
    subjects,
    loading: loadingSub,
    errors: errorSub,
  } = useSelector(subjectsSelector);
  useEffect(() => {
    const fetchData = async () => {
      // if (labs === [] || labs === null) {
      listLabs(dispatch);
      // }
    };
    const fetchSubjectData = async () => {
      if (!subjects || subjects === [] || subjects === null) {
        listSubjects(dispatch);
      }
      // listCategories(dispatch);
    };
    fetchSubjectData();
    fetchData();
    setCurrentLab(labs?.products?.filter((lab) => lab._id === id)[0]);
  }, []);
  useEffect(() => {
    setCurrentLab(labs?.products?.filter((lab) => lab._id === id)[0]);
  }, [labs]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <LabWaiting />
      </div>
    );
  }
  return (
    <div>
      <div className="lab__iframe">
        <iframe
          src={currentLab?.resourceUrl}
          title={currentLab?._id}
          scrolling="no"
          allowfullscreen></iframe>
      </div>

      <div className="lab__header">
        <MdKeyboardBackspace onClick={() => history.goBack()} />

        <img
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          alt="logo"
          className="logo"
          height="50px"
        />
      </div>
      <div className="draggable__glossary"></div>
    </div>
  );
};

export default Lab;
