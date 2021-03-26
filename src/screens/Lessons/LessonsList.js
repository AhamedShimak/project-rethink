import React from 'react';
import './Lessons.css';
import gameImg from '../../assets/gameimg.png';
import { BsGridFill } from 'react-icons/bs';
import { BiAtom, BiDna } from 'react-icons/bi';
import { IoFlask } from 'react-icons/io5';
import { MdFunctions } from 'react-icons/md';
const Lessons = () => {
  return (
    <div className="lesson">
      <div className="lesson__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit
          amet, consectetur adipisicing elit. Excepturi{' '}
        </p>
      </div>

      <div className="lesson__container">
        <div className="lesson__ellipses">
          <div className="lesson__ellipses__ellipse">
            <span>
              <BsGridFill />
            </span>
          </div>
          <div className="lesson__ellipses__ellipse">
            <span>
              <BiAtom />
            </span>
          </div>
          <div className="lesson__ellipses__ellipse">
            <span>
              <IoFlask />
            </span>
          </div>
          <div className="lesson__ellipses__ellipse">
            <span>
              <MdFunctions />
            </span>
          </div>
          <div className="lesson__ellipses__ellipse">
            <span>
              <BiDna />
            </span>
          </div>
        </div>
        <div className="lesson__content">
          <div className="lesson__content__tobBar">
            <span className="lesson__content__tobBar__item">Unit 1</span>
            <span className="lesson__content__tobBar__item">Unit 2</span>
            <span className="lesson__content__tobBar__item">Unit 3</span>
            <span className="lesson__content__tobBar__item">Unit 4</span>
            <span className="lesson__content__tobBar__item">Unit 5</span>
            <span className="lesson__content__tobBar__item">Unit 1</span>
            <span className="lesson__content__tobBar__item">Unit 2</span>
            <span className="lesson__content__tobBar__item">Unit 3</span>
            <span className="lesson__content__tobBar__item">Unit 4</span>
            <span className="lesson__content__tobBar__item">Unit 5</span>
          </div>
          <div className="lesson__content__item">
            <img
              className="lesson__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="lesson__content__item__content">
              <p className="lesson__content__item__content__title">
                Title of Link
              </p>
              <p className="lesson__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
              <p className="lesson__content__item__content__time">30min</p>
            </div>
            {/**2 lines maximum */}
          </div>
          <div className="lesson__content__item">
            <img
              className="lesson__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="lesson__content__item__content">
              <p className="lesson__content__item__content__title">
                Title of Link
              </p>
              <p className="lesson__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
              <p className="lesson__content__item__content__time">30min</p>
            </div>
            {/**2 lines maximum */}
          </div>
          <div className="lesson__content__item">
            <img
              className="lesson__content__item__image"
              src={gameImg}
              alt="gameImg"
            />
            <div className="lesson__content__item__content">
              <p className="lesson__content__item__content__title">
                Title of Link
              </p>
              <p className="lesson__content__item__content__text">
                string dogy yalu strong string dogy yalu strong
              </p>
              <p className="lesson__content__item__content__time">30min</p>
            </div>
            {/**2 lines maximum */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
