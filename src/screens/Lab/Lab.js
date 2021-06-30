import React, { useEffect, useState } from "react";
import { FcRotateToLandscape } from "react-icons/fc";
// <DraggableCore>
import Draggable, { DraggableCore } from "react-draggable";
import "./Lab.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { labsSelector } from "../../features/labs/labsSlice";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
import { listLabs } from "../../actions/labsActions";
import { listSubjects } from "../../actions/subjectActions";
import LabWaiting from "../../components/lab__waiting/LabWaiting";
import { Button } from "@material-ui/core";
// import BackButton from "../../components/buttons/Lab_back/LabBack";
// import { MdCamera } from "react-icons/md";
import { RiDragMove2Line } from "react-icons/ri";

import Laback from "../../components/buttons/Lab_back/LabBack";

const Lab = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [currentLab, setCurrentLab] = useState(null);
  const { id } = useParams();
  const lang = window.location.search?.split("=")[1] === "ta";

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
    setCurrentLab(labs?.labs?.filter((lab) => lab._id === id)[0]);
  }, []);
  useEffect(() => {
    setCurrentLab(labs?.labs?.filter((lab) => lab._id === id)[0]);
  }, [labs]);

  //dragging
  const [position, setPosition] = useState({
    x: 100,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {}, [isDragging]);
  const handleDrag = (e) => {
    setPosition({
      x: e.x,
      y: e.y,
    });
    console.log(e.x);
  };
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
        {/* {lang ? console.log(currentLab) : console.log(currentLab)} */}
        <iframe
          src={lang ? currentLab?.tamilUrl : currentLab?.englishUrl}
          title={currentLab?._id}
          scrolling="no"
          allowfullscreen></iframe>
      </div>

      <Draggable bounds="body">
        <div className="lab__header">
          <div className="lep_container">
            <div className="logoAndBack">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                alt="logo"
                className="logo_lab"
                onClick={() => history.push("/")}
              />

              <div onClick={() => history.goBack()} className="lab__back">
                <Laback />
              </div>
            </div>

            {currentLab?.tamilUrl && (
              <div className="lang__btns">
                <Button
                  className="lang__btn"
                  onClick={() => {
                    history.push(`/labs/lab/${id}?lng=ta`);
                  }}
                  variant="contained"
                  color={lang ? "primary" : "secondary"}>
                  {" "}
                  Tamil
                </Button>

                <Button
                  onClick={() => {
                    history.push(`/labs/lab/${id}`);
                  }}
                  width="60px"
                  variant="contained"
                  color={lang ? "secondary" : "primary"}>
                  {" "}
                  English
                </Button>
              </div>
            )}

            <RiDragMove2Line className="camera__icon" />
          </div>
        </div>
      </Draggable>
      <h5 className="toolbar">
        {" "}
        <FcRotateToLandscape style={{ fontSize: "30px" }} /> Please rotate your
        device for better experience(சிறந்த பாவனைக்கு phone ஐ திருப்புங்கள்)
      </h5>

      {/* <div className="draggable__glossary"></div> */}
    </div>
  );
};

export default Lab;
