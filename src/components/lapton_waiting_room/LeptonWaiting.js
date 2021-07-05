import React from "react";
import "./LeptonWaiting.css";
const LeptonWaiting = () => {
  return (
    <div className="lebwaiting__container">
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.svg"}
        alt="logo"
        className="logo__waiting"
      />
      <div className="loader">
        <div className="shadow"></div>
        <div className="box"></div>
      </div>
      <h6 className="waiting__text">
        Getting<br></br> Resources
      </h6>
    </div>
  );
};

export default LeptonWaiting;
