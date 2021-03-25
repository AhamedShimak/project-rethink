import React from "react";
import "./Lab.css";
import gameImg from "../../assets/gameimg.png";
import { BsGridFill } from "react-icons/bs";
import { BiAtom,BiDna } from "react-icons/bi";
import { IoFlask } from "react-icons/io5";
import { MdFunctions } from "react-icons/md";

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
          <div className="lab__ellipses__ellipse">
            <span>
              <BsGridFill />
            </span>
          </div>
          <div className="lab__ellipses__ellipse">
            <span>
              <BiAtom />
            </span>
          </div>
          <div className="lab__ellipses__ellipse">
            <span>
              <IoFlask />
            </span>
          </div>
          <div className="lab__ellipses__ellipse">
            <span>
              <MdFunctions />
            </span>
          </div>
          <div className="lab__ellipses__ellipse">
            <span>
              <BiDna />
            </span>
          </div>
        </div>
        <div className="lab__content">
          <div className="lab__content__item">
            <img
              className="lab__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <p className="lab__content__item__title">string dogy yalu strong</p>
            {/**2 lines maximum */}
          </div>
          <div className="lab__content__item">
            <img
              className="lab__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <p className="lab__content__item__title">string dogy yalu strong</p>
            {/**2 lines maximum */}
          </div>
          <div className="lab__content__item">
            <img
              className="lab__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <p className="lab__content__item__title">string dogy yalu strong</p>
            {/**2 lines maximum */}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Lab;
