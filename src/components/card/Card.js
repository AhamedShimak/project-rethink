import React from "react";

const Card = () => {
  return (
    <button
      className="add_new"
      style={{
        height: "120px",
        width: "120px",
        borderRadius: "10px",
        border: "solid 2px #333399",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        flexDirection: "column",
        background: "#ffa",
      }}>
      <img
        src="https://source.unsplash.com/random"
        alt="quiz_img"
        style={{
          height: "60px",
          width: "60px",

          color: "blue",
        }}
      />
      Random Questions By:Lepton
    </button>
  );
};

export default Card;
