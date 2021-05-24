import React from "react";
import "./SubjectElipse.css";
const SubjectElipse = ({ icon, title, active, bottomHeading }) => {
  return (
    <div className="subject__ellipse__container">
      <div className={`subject__ellipse ${active ? "elipse__active" : ""}`}>
        <span className="subject__ellipse__icon">{icon}</span>

        {bottomHeading ? "" : <h5>{title}</h5>}
      </div>
      {bottomHeading ? <h5 className="heading__bottom">{title}</h5> : ""}
    </div>
  );
};

export default SubjectElipse;
