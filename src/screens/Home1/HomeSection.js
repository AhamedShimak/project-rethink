import React from "react";

import "./Home.css";
import labs from "../../assets/logo_lab.svg";
import lessons from "../../assets/logo_lessons.svg";
import quiz from "../../assets/logo_quiz.svg";

import papers from "../../assets/logo_course.svg";

import { useHistory } from "react-router";
import YoutubePlayer from "../../components/youtube__player/YoutubePlayer";

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

        <div className="home__content__container__items">
          <div
            className="home__content__container__item item-1"
            onClick={() => history.push("/labs")}>
            <div className="home__content__container__item__column column-1">
              <h2 className="column-1__heading">LABS</h2>
              <p className="column-1__content">
                உயர் தொழில்நுட்பத்தில் வடிவமைக்கப்பட்ட Labs{" "}
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
            className="home__content__container__item item-1"
            onClick={() => history.push("/quiz")}>
            <div className="home__content__container__item__column column-1">
              <h2 className="column-1__heading">Quiz</h2>
              <p className="column-1__content">
                உங்களில் யார் மகா லட்சாதிபதி?{" "}
              </p>
            </div>
            <div className="home__content__container__item__column column-2">
              <img
                className="column-2__image column-2__image-4"
                src={quiz}
                alt="free courses"
              />
            </div>
          </div>
          <div
            className="home__content__container__item item-1"
            onClick={() => history.push("/lessons")}>
            <div className="home__content__container__item__column column-1">
              <h2 className="column-1__heading">LESSONS</h2>
              <p className="column-1__content">
                ஒழுங்கு படுத்தப்பட்ட free YouTube videos{" "}
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
            onClick={() => history.push("/courses")}>
            <div className="home__content__container__item__column column-1">
              <h2 className="column-1__heading">FREE COURSES</h2>
              <p className="column-1__content">இலவச பாட விளக்கங்கள் </p>
            </div>
            <div className="home__content__container__item__column column-2">
              <img
                className="column-2__image column-2__image-4"
                src={papers}
                alt="free courses"
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "0 10px" }}>
          <YoutubePlayer url="https://www.youtube.com/embed/1NSWr06usBo" />
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
