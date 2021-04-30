import React from "react";
import "./Lab.css";
import gameImg from "../../assets/gameimg.png";
import { BsGridFill } from "react-icons/bs";
import { BiAtom, BiDna } from "react-icons/bi";
import { IoFlask } from "react-icons/io5";
import { MdFunctions } from "react-icons/md";

import SubjectElipse from "../../components/subject__elipse/SubjectElipse";
import ContentItemBox from "../../components/content_item_box/ContentItemBox";
const Lab = () => {
  return (
    <div className="lab">
      <div className="lab__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit
          amet, consectetur adipisicing elit. Excepturi{" "}
        </p>
      </div>

      <div className="lab__container">
        <div className="lab__ellipses">
          <div>
            <SubjectElipse icon={<BsGridFill />} title="All" />
          </div>

          <div>
            <SubjectElipse icon={<BiAtom />} title="P6" />
          </div>
          <div>
            <SubjectElipse icon={<IoFlask />} title="Chem" />
          </div>
          <div>
            <SubjectElipse icon={<MdFunctions />} title="Math" />
          </div>
          <div>
            <SubjectElipse icon={<BiDna />} title="Bio" />
          </div>
        </div>
        <div className="lab__content">
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
          <ContentItemBox image={gameImg} title="string dogy yalu strong" />
        </div>
      </div>
    </div>
  );
};

export default Lab;
