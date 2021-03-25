<<<<<<< HEAD
import React from "react";
import "./Lab.css";
import { BsGridFill } from "react-icons/bs";
import { BiAtom } from "react-icons/bi";
import { IoFlask } from "react-icons/io5";
import { MdFunctions } from "react-icons/md";
=======
import React from 'react';
import './Lab.css';
import gameImg from '../../assets/gameimg.png';
import { BsGridFill } from 'react-icons/bs';
import { BiAtom } from 'react-icons/bi';
import { IoFlask } from 'react-icons/io5';
import { MdFunctions } from 'react-icons/md';
>>>>>>> 81fa766c5dedb5cf44ef1891e578500ead249fab

const Lab = () => {
  return (
    <div className="lab">
      <div className="lab__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit
          amet, consectetur adipisicing elit. Excepturi{" "}
        </p>
      </div>
<<<<<<< HEAD
      <div className="lab__container">
        <div className="lab__ellipses">
          <div className="lab__ellipses__ellipse ellipse-1">
            <span>
              <BsGridFill />
            </span>
          </div>
          <div className="lab__ellipses__ellipse ellipse-2">
            <span>
              <BiAtom />
            </span>
          </div>
          <div className="lab__ellipses__ellipse ellipse-3">
            <span>
              <IoFlask />
            </span>
          </div>
          <div className="lab__ellipses__ellipse ellipse-4">
            <span>
              <MdFunctions />
            </span>
          </div>
        </div>
        <div className="lab__content">
          fdfghfhj Lorem ipsum dolor s Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Sed recusandae necessitatibus enim cupiditate
          distinctio accusamus nulla incidunt saepe ex! Nulla porro asperiores
          aliquid fugiat dolorum qui in earum alias eius? it amet consectetur
          adipisicing elit. Illo, reprehenderit odit, recusandae neque veniam
          iure esse omnis magni tempore nihil exercitationem repellendus impedit
          nulla quo fugit optio soluta, voluptates sequi!
        </div>
=======

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
      </div>
      <div className="lab__content">
        <div className="lab__content__item">
          <img
            className="lab__content__item__image"
            src={gameImg}
            alt="gameImg"
          />
          <p className="lab__content__item__title">string dogy yalu strong</p>{/**2 lines maximum */}
        </div>
       
>>>>>>> 81fa766c5dedb5cf44ef1891e578500ead249fab
      </div>
    </div>
  );
};

export default Lab;
