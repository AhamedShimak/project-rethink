import React from 'react';
import './Paper.css';
import gameImg from '../../assets/gameimg.png';
import { BsGridFill } from 'react-icons/bs';
import { BiAtom, BiDna } from 'react-icons/bi';
import { IoFlask } from 'react-icons/io5';
import { MdFunctions } from 'react-icons/md';
const Paper = () => {
  return (
    <div className="paper">
      <div className="paper__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit
          amet, consectetur adipisicing elit. Excepturi{' '}
        </p>
      </div>

      <div className="paper__container">
        <div className="paper__ellipses">
          <div className="paper__ellipses__ellipse">
            <span>
              <BsGridFill />
            </span>
          </div>
          <div className="paper__ellipses__ellipse">
            <span>
              <BiAtom />
            </span>
          </div>
          <div className="paper__ellipses__ellipse">
            <span>
              <IoFlask />
            </span>
          </div>
          <div className="paper__ellipses__ellipse">
            <span>
              <MdFunctions />
            </span>
          </div>
          <div className="paper__ellipses__ellipse">
            <span>
              <BiDna />
            </span>
          </div>
        </div>
        <div className="paper__content">
         
          <div className="paper__content__item">
            <img
              className="paper__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="paper__content__item__content">
              <p className="paper__content__item__content__title">
                Title of Link
              </p>
              <p className="paper__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
            </div>
            {/**2 lines maximum */}
          </div>
          <div className="paper__content__item">
            <img
              className="paper__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="paper__content__item__content">
              <p className="paper__content__item__content__title">
                Title of Link
              </p>
              <p className="paper__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
            </div>
            {/**2 lines maximum */}
          </div>
          <div className="paper__content__item">
            <img
              className="paper__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="paper__content__item__content">
              <p className="paper__content__item__content__title">
                Title of Link
              </p>
              <p className="paper__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
            </div>
            {/**2 lines maximum */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
