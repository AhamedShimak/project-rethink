import React from "react";
import CourseCard from "../../components/course__card/CourseCard";
import "./Paper.css";
const CourseList = () => {
  return (
    <div className="Courses">
      <h1>Lepton courses</h1>
      <p>Free coursed by leading teachers in Srilanka</p>
      <CourseCard />
    </div>
  );
};

export default CourseList;
