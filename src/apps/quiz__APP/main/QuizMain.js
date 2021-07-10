import "./QuizMain.css";
import { useEffect, useMemo, useState, useRef } from "react";
import Start from "../components/Start";
import Timer from "../components/Timer";
import Trivia from "../components/Trivia";
import { useHistory } from "react-router-dom";
import BackButton from "../../../components/buttons/back_button/BackButton";
import { data } from "../data/testQuestions";
import { monyPyramid } from "../data/moneyPyramid";
import shuffle from "shuffle-array";

function QuizApp() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [questions, setQuestions] = useState(null);
  let history = useHistory();
  const myRef = useRef(null);

  useEffect(() => {
    questionNumber > 1 &&
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        // inline: "nearest",
      });
  }, [questionNumber]);
  useEffect(() => {
    setQuestions(shuffle.pick(data, { picks: 15 }));
  }, [timeOut]);

  const moneyPyramid = useMemo(() => monyPyramid, []);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <div className="quiz__container">
          <div onClick={() => history.goBack()} className="back__btn">
            <BackButton />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.svg"}
            alt="logo"
            className="logo__quiz__main"
            onClick={() => history.push("/")}
          />

          <div className="main">
            {timeOut ? (
              <>
                <div className="retry">
                  <h1 className="endText">You earned: {earned}</h1>
                  <button
                    className="startButton"
                    onClick={() => {
                      setQuestionNumber(1);
                      setEarned("$ 0");
                      setTimeOut(false);
                    }}>
                    Try Again
                  </button>
                </div>
              </>
            ) : (
              <div className="travia_details">
                <div className="top">
                  <h3>Question Number : {questionNumber} of 15</h3>
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={questions}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="pyramid">
            <h6 className="moneyHead">Money Pyramid</h6>
            <ul className="moneyList">
              {moneyPyramid.map((m) => {
                return (
                  <>
                    <li
                      ref={questionNumber === m.id ? myRef : null}
                      className={
                        questionNumber === m.id
                          ? "moneyListItem active"
                          : "moneyListItem"
                      }>
                      <span className="moneyListItemNumber">{m.id}</span>
                      <span className="moneyListItemAmount">{m.amount}</span>
                    </li>
                    {questionNumber === m.id && (
                      <div style={{ height: "0.001px", width: "100%" }}></div>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
