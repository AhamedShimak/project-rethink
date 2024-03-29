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
import { MdCamera, MdCameraAlt } from "react-icons/md";
//import { RiDragMove2Line } from "react-icons/ri";
import Camera from "../../components/camera/Camera";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '@material-ui/core/Switch';
import { FcWebcam } from "react-icons/fc";
import Laback from "../../components/buttons/Lab_back/LabBack";
import LeptonWaiting from "../../components/lapton_waiting_room/LeptonWaiting";
import { render } from "@testing-library/react";

const Lab = () => {
  const [state, setState] = useState({
    checkedB: false,
  });
  //camera icon toggle
  let className1 = "lab__camera__icon";
  if (state.checkedB) {
    className1 = "lab__camera__icon1"
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [showCamera, setShowCamera] = useState(false);

  const onCameraClick = () => setShowCamera(!showCamera);
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
  useEffect(() => { }, [isDragging]);
  const handleDrag = (e) => {
    setPosition({
      x: e.x,
      y: e.y,
    });
    console.log(e.x);
  };
  if (loading) {
    return <LeptonWaiting />;
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

      <Draggable bounds="body" handle=".logo_lab">
        <div className="lab__header">
          <div className="lep_container">
            <div className="logoAndBack">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                alt="logo"
                draggable="false"
                className="logo_lab"

              />

              <div onClick={() => history.goBack()} className="lab__back">
                <Laback />
              </div>
            </div>
            <div className="lab__camera_Switch">
              <div className="lab_camera_container_Switch">
                <MdCameraAlt
                  className={className1}
                />
                <FormControlLabel
                  className="lab__control__switch"
                  control={
                    <Switch

                      size="small"
                      checked={state.checkedB}
                      onChange={handleChange}
                      onClick={onCameraClick}
                      name="checkedB"
                      color="primary"
                    />
                  }

                  labelPlacement="left"
                />



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



          </div>
        </div>
      </Draggable>

      <Draggable bounds="body" handle=".lab__camera">
        <div className="lab__camera">
          <div className="lab_camera_container">

            {showCamera ? <Camera /> : null}


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
