import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import "./backButton.css";
const BackButton = () => {
  return (
    <div className="navigation_button">
      <MdKeyboardBackspace className="navigation__icon " />
    </div>
  );
};

export default BackButton;
