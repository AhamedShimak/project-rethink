import React from "react";
import CourseCard from "../../components/course__card/CourseCard";
import "./Paper.css";
const CourseList = () => {
  return (
    <div className="Courses">
      <p style={{ marginBottom: "10px", textAlign: "center" }}>
        ஆசிரியர்கள் மற்றும் பல்கலைக்கழக மானவ்ரகளால் தயாரிக்கப்பட்ட இலவச பாட
        விளக்கங்கள்<br></br>
        <small style={{ color: "yellow" }}>
          😇இவ்வாறான இலவச பாட விளக்கங்களை வழங்க விரும்பும்
          ஆசிரியர்கள்/பல்கலைக்கழக மானவ்ரகள் எங்களை தொடர்பு கொள்ளலாம்🐱‍🏍
        </small>
      </p>

      <CourseCard />
    </div>
  );
};

export default CourseList;
