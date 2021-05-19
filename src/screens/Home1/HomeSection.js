import React from "react";

import "./Home.css";
import labs from "../../assets/labs.svg";
import lessons from "../../assets/lessons.svg";
import games from "../../assets/games.svg";
import papers from "../../assets/papers.svg";
import { useHistory } from "react-router";
const HomeSection = () => {
  let history = useHistory();
  return (
    <>
      <div className="home__content__container">
        {/*  <img src={process.env.PUBLIC_URL + '/assets/homeback.svg'} alt="container" className="container"/>*/}
        <div
          className="home__content__container__item item-2"
          onClick={() => history.push("/lessons")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">LESSONS</h2>
            <p className="column-1__content">
              Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{" "}
            </p>
          </div>
          <div className="home__content__container__item__column column-2">
            <img
              className="column-2__image column-2__image-2"
              src={lessons}
              alt="lessons"
            />
          </div>
        </div>
        <div
          className="home__content__container__item item-1"
          onClick={() => history.push("/labs")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">LABS</h2>
            <p className="column-1__content">
              Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{" "}
            </p>
          </div>
          <div className="home__content__container__item__column column-2">
            <img
              className="column-2__image column-2__image-1"
              src={labs}
              alt="labs"
            />
          </div>
        </div>

        <div
          className="home__content__container__item item-4"
          onClick={() => history.push("/papers")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">PAPERS</h2>
            <p className="column-1__content">
              Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{" "}
            </p>
          </div>
          <div className="home__content__container__item__column column-2">
            <img
              className="column-2__image column-2__image-4"
              src={papers}
              alt="papers"
            />
          </div>
        </div>
        <div
          className="home__content__container__item item-3"
          onClick={() => history.push("/games")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">GAMES</h2>
            <p className="column-1__content">Coming soon </p>
          </div>
          <div className="home__content__container__item__column column-2">
            <img
              className="column-2__image column-2__image-3"
              src={games}
              alt="games"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
