import React from "react";

import { RiAddCircleFill } from "react-icons/ri";
const AddNew = () => {
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
      }}>
      <RiAddCircleFill
        style={{
          height: "60px",
          width: "60px",

          color: "blue",
        }}
      />
      Add New
    </button>
  );
};

export default AddNew;
