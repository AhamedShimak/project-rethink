import React, { useEffect, useState } from "react";
import "./Lab.css";
import gameImg from "../../assets/gameimg.png";
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
const Lab = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  /*const handleChange = (value) => {
    setIndex(value);
  };*/
  const { labs, loading, errors } = useSelector(labsSelector);

  useEffect(() => {
    const fetchData = async () => {
      // if (!labs || labs === [] || labs === null) {
      listLabs(dispatch);
      // }

      // listCategories(dispatch);
    };
    fetchData();
  }, []);
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="lab">
      {console.log("Labs:", labs)}
      <div className="lab__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit
          amet, consectetur adipisicing elit. Excepturi{" "}
        </p>
      </div>

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
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
            </div>
          </div>
          <div>
            <div className="lab__content">
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
            </div>
          </div>
          <div>
            <div className="lab__content">
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
            </div>
          </div>
          <div>
            <div className="lab__content">
              <ContentItemBox image={gameImg} title="string dogy yalu strong" />
            </div>
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Lab;
