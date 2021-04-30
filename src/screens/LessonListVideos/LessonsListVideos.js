import React from "react";
import LessonVideos from "../../components/lesson_video/LessonVideo";
import YoutubePlayer from "../../components/youtube__player/YoutubePlayer";
import "./LessonListVideos.css";
const LessonsListVideos = () => {
  return (
    <div className="lessonsListVideos">
      <div className="lessonsListVideos__player">
        <YoutubePlayer />
      </div>
      <div className="lessonsListVideos__list">
        <div className="lessonsListVideos__video">
          <LessonVideos />
        </div>
        <div className="lessonsListVideos__video">
          <LessonVideos current={true} />
        </div>
        <div className="lessonsListVideos__video">
          <LessonVideos />
        </div>
        <div className="lessonsListVideos__video">
          <LessonVideos />
        </div>
      </div>
    </div>
  );
};

export default LessonsListVideos;
