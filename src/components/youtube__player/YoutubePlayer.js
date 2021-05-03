import React from "react";
import ReactPlayer from "react-player";
import "./YoutubePlayer.css";
const YoutubePlayer = ({ url }) => {
  return (
    <div className="youtubePlayer">
      <ReactPlayer width="100%" controls url={url} />
    </div>
  );
};

export default YoutubePlayer;
