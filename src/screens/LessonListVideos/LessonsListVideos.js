import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { listLessons } from "../../actions/lessonsActions";
import LessonVideos from "../../components/lesson_video/LessonVideo";
import YoutubePlayer from "../../components/youtube__player/YoutubePlayer";
import { lessonsSelector } from "../../features/lessons/lessonSlice";
import "./LessonListVideos.css";
const LessonsListVideos = ({ match }) => {
  const { id } = useParams();

  const [currentVideo, setCurrentVideo] = useState("");
  const dispatch = useDispatch();
  const { lessons, loading, errors } = useSelector(lessonsSelector);
  useEffect(() => {
    const fetchData = async () => {
      listLessons(dispatch, id);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      listLessons(dispatch, id);
    };
    fetchData();
  }, [id]);
  return (
    <div className="lessonsListVideos">
      {/* {console.log(lessons.products)} */}

      <div
        className={`lessonsListVideos__player ${
          currentVideo ? "desktop__playing__player" : ""
        }`}>
        {currentVideo && <YoutubePlayer url={currentVideo.url} />}
      </div>
      <div
        className={`lessonsListVideos__list ${
          currentVideo ? "desktop__playing__list" : ""
        }`}>
        {lessons?.products?.map((lesson) => (
          <div
            className="lessonsListVideos__video"
            key={lesson._id}
            onClick={() =>
              setCurrentVideo({ id: lesson._id, url: lesson.resourceUrl })
            }>
            <LessonVideos
              description={lesson.description}
              duration={lesson.duration}
              image={lesson.image}
              name={lesson.name}
              resourceUrl={lesson.resourceUrl}
              current={currentVideo.id === lesson._id}
              unit={lesson.unit}
              author={lesson.author}
            />
          </div>
        ))}

        {/* <div className="lessonsListVideos__video">
          <LessonVideos current={true} />
        </div>
        <div className="lessonsListVideos__video">
          <LessonVideos />
        </div>
        <div className="lessonsListVideos__video">
          <LessonVideos />
        </div> */}
      </div>
    </div>
  );
};

export default LessonsListVideos;
