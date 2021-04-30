import React from "react";
import ReactPlayer from "react-player";
import "./YoutubePlayer.css";
const YoutubePlayer = () => {
  return (
    <div className="youtubePlayer">
      <ReactPlayer
        width="100%"
        controls
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
};

export default YoutubePlayer;
