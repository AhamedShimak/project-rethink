import { useRef } from "react";
import { useHistory } from "react-router-dom";

import BackButton from "../../../components/buttons/back_button/BackButton";
import { handleEnterKeypress } from "../../../utils/EnterKey";
export default function Start({ setUsername }) {
  const inputRef = useRef();
  let history = useHistory();
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.svg"}
        alt="logo"
        className="logo__quiz"
        onClick={() => history.push("/")}
      />

      <div onClick={() => history.goBack()} className="back__btn">
        <BackButton />
      </div>

      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
        onKeyPress={(e) => {
          handleEnterKeypress(e, handleClick);
        }}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
