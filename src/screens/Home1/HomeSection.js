import React from "react";

import "./Home.css";
import labs from "../../assets/labs.svg";
import lessons from "../../assets/lessons.svg";
import games from "../../assets/games.svg";
import papers from "../../assets/papers.svg";
import SubjectElipse from "../../components/subject__elipse/SubjectElipse";
import { useHistory } from "react-router";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiCelebrationFire, GiNewspaper, GiTeacher } from "react-icons/gi";
const HomeSection = () => {
  let history = useHistory();
  return (
    <>
      <div className="home__content__container">
        {/*  <img src={process.env.PUBLIC_URL + '/assets/homeback.svg'} alt="container" className="container"/>*/}
        {/* <div
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
        </div> */}
        <div
          className="home__content__container__item item-1"
          onClick={() => history.push("/labs")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">LABS</h2>
            <p className="column-1__content">
              Learn with interactive simulations{" "}
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
          className="home__content__container__item item-4"
          onClick={() => history.push("/courses")}>
          <div className="home__content__container__item__column column-1">
            <h2 className="column-1__heading">Free Courses</h2>
            <p className="column-1__content">
              Free courses by expert teachers and institutes{" "}
            </p>
          </div>
          <div className="home__content__container__item__column column-2">
            <img
              className="column-2__image column-2__image-4"
              src={papers}
              alt="free courses"
            />
          </div>
        </div>
        {/* <div className="home__content__container__subServices home__content__container__item item-3">
          <div>
            <SubjectElipse
              icon={<BsFillPeopleFill />}
              title="Seminars"
              bottomHeading={true}
            />
          </div>
          <div>
            <SubjectElipse
              icon={<GiTeacher />}
              title="Find tutor"
              bottomHeading={true}
            />
          </div>
          <div>
            <SubjectElipse
              icon={<GiNewspaper />}
              title="Online Exams"
              bottomHeading={true}
            />
          </div>
          <div>
            <SubjectElipse
              icon={<GiCelebrationFire />}
              title="Motivation"
              bottomHeading={true}
            />
          </div>
        </div> */}
        {/* <h3>Coming soon..</h3>
        <div className="home__content__container__soon">
          <div>
            <SubjectElipse
              icon={<BsFillPeopleFill />}
              title="AI exams"
              bottomHeading={true}
            />
          </div>
          <div>
            <SubjectElipse
              icon={<BsFillPeopleFill />}
              title="Games"
              bottomHeading={true}
            />
          </div>
          {/* <div>Find tutor</div>
          <div>Motivation</div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default HomeSection;
