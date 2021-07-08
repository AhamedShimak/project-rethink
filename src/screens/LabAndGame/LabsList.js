import React, { useEffect, useState } from "react";
import "./Lab.css";
// import gameImg from "../../assets/gameimg.png";
//import { BsGridFill } from "react-icons/bs";
import { BiAtom, BiDna } from "react-icons/bi";
import { IoFlask } from "react-icons/io5";
import { MdFunctions } from "react-icons/md";
import SubjectElipse from "../../components/subject__elipse/SubjectElipse";
import ContentItemBox from "../../components/content_item_box/ContentItemBox";
import SwipeableViews from "react-swipeable-views";

import { useDispatch, useSelector } from "react-redux";
import { labsSelector } from "../../features/labs/labsSlice";
import { listLabs } from "../../actions/labsActions";
import { listSubjects } from "../../actions/subjectActions";
import { subjectsSelector } from "../../features/subjects/subjectSlice";
import LabWaiting from "../../components/lab__waiting/LabWaiting";

import Skeletonloader from "../../components/skeleton/SkeletonLoader";


const Lab = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const [physicsLabs, setPhysicsLabs] = useState([]);
  const [chemLabs, setChemLabs] = useState([]);
  const [bioLabs, setBioLabs] = useState([]);
  const [mathLab, setMathLab] = useState([]);
  const [subjectId, setSubjectId] = useState({});
  /*const handleChange = (value) => {
    setIndex(value);
  };*/
  const { labs, loading, errors } = useSelector(labsSelector);
  const {
    subjects,
    loading: loadingSub,
    errors: errorSub,
  } = useSelector(subjectsSelector);
  useEffect(() => {
    const fetchData = async () => {
      if (!labs.labs) {
        listLabs(dispatch);
      }
    };
    const fetchSubjectData = async () => {
      if (!subjects || subjects === [] || subjects === null) {
        listSubjects(dispatch);
      }
      // listCategories(dispatch);
    };
    fetchSubjectData();
    fetchData();
  }, []);

  useEffect(() => {
    setMathLab(
      labs?.labs?.filter((lab) => lab.subject === "608e32294f468a0015bc67cf")
    );
    setChemLabs(
      labs?.labs?.filter((lab) => lab.subject === "608e5d234f468a0015bc6859")
    );
    setBioLabs(
      labs?.labs?.filter((lab) => lab.subject === "608e42504f468a0015bc67e4")
    );
    setPhysicsLabs(
      labs?.labs?.filter((lab) => lab.subject === "608e54604f468a0015bc6837")
    );
  }, [labs]);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  const loader = [];
  for (let i = 0; i < 10 ; i++){
    loader.push(<Skeletonloader/>);
  }
  
  return (
    <div className="lab">
      {/* <div className="lab__text">
        <p style={{ color: "white" }}> */}
      {/* உயர் தொழில்நுட்பத்தில் வடிவமைக்கப்பட்ட Labs🎉🎉✨ */}
      {/* </p>
      </div> */}
      <div className="lab__container">
        <div className="lab__ellipses">
          <div onClick={() => setIndex(0)}>
            <SubjectElipse icon={<BiAtom />} title="P6" active={index === 0} />
          </div>
          <div onClick={() => setIndex(1)}>
            <SubjectElipse
              icon={<IoFlask />}
              title="Chem"
              active={index === 1}
            />
          </div>
          <div onClick={() => setIndex(2)}>
            <SubjectElipse
              icon={<MdFunctions />}
              title="Math"
              active={index === 2}
            />
          </div>
          <div onClick={() => setIndex(3)}>
            <SubjectElipse icon={<BiDna />} title="Bio" active={index === 3} />
          </div>
        </div>
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div>
            <div className="lab__content">
              {loading ? (<>
                <div className="lab__content__loader">
                 {loader}
                </div>
                
               
              
              </>
              ) : (
                <>
                  {physicsLabs?.map((lab) => (
                    <ContentItemBox
                      name={lab.name}
                      title={lab.name}
                      englishUrl={lab.englishUrl}
                      tamilUrl={lab.tamilUrl}
                      imageUrl={lab.imageUrl}
                      key={lab._id}
                      id={lab._id}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div>
            <div className="lab__content">
              {loading ? (
                <div className="lab__content__loader">
                {loader}
               </div>
              ) : (
                <>
                  {chemLabs?.map((lab) => (
                    <>
                      <ContentItemBox
                        name={lab.name}
                        title={lab.name}
                        englishUrl={lab.englishUrl}
                        tamilUrl={lab.tamilUrl}
                        imageUrl={lab.imageUrl}
                        key={lab._id}
                        id={lab._id}
                      />
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
          <div>
            <div className="lab__content">
              {loading ? (
                <div className="lab__content__loader">
                {loader}
               </div>
              ) : (
                <>
                  {mathLab?.map((lab) => (
                    <ContentItemBox
                      name={lab.name}
                      title={lab.name}
                      englishUrl={lab.englishUrl}
                      tamilUrl={lab.tamilUrl}
                      imageUrl={lab.imageUrl}
                      key={lab._id}
                      id={lab._id}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div>
            <div className="lab__content">
              {loading ? (
                 <div className="lab__content__loader">
                 {loader}
                </div>
              ) : (
                <>
                  {bioLabs?.map((lab) => (
                    <ContentItemBox
                      name={lab.name}
                      title={lab.name}
                      englishUrl={lab.englishUrl}
                      tamilUrl={lab.tamilUrl}
                      imageUrl={lab.imageUrl}
                      key={lab._id}
                      id={lab._id}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Lab;
