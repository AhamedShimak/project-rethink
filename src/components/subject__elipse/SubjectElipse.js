import React from "react";
import "./SubjectElipse.css";
const SubjectElipse = ({ icon, title }) => {
  return (
    <div className="subject__ellipse">
      <span className="subject__ellipse__icon">{icon}</span>
      <h5>{title}</h5>
    </div>
  );
};

export default SubjectElipse;
