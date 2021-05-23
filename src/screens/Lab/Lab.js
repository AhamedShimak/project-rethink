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

  return (
    <div>
      {console.log(currentLab)}
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
      <div className="draggable__glossary">
        <div className="draggable__glossary__hand">
          <Draggable
            // axis="x,y"
            handle=".handle"
            defaultPosition={{ x: 100, y: 100 }}
            position={null}
            grid={[25, 25]}
            scale={1}>
            <div
              style={{ background: "blue", width: "100px", padding: "10px" }}>
              <div className="handle">Tamil translations draggable</div>
              <div>This readme is really dragging on...</div>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Lab;
