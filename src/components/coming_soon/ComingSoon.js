import React from "react";
import { FcCalendar } from "react-icons/fc";
import LinearProgress from "@material-ui/core/LinearProgress";
const ComingSoon = () => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",

        width: "80%",
        margin: "auto",
        paddingTop: "20px",
      }}>
      <h5
        style={{
          fontSize: "2em",
          marginBottom: "20px",
          textAlign: "center",
        }}>
        💎Coming soon...
      </h5>
      <div
        style={{
          height: "50px",
        }}>
        <LinearProgress />
      </div>
      <p
        style={{
          fontSize: "5em",
          margin: "auto",
          textAlign: "center",
        }}>
        <FcCalendar></FcCalendar>
      </p>
    </div>
  );
};

export default ComingSoon;
