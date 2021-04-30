import React from "react";

import { MdKeyboardBackspace } from "react-icons/md";
import Draggable from "react-draggable";
import "./Lab.css";
import { useHistory } from "react-router";

const Lab = () => {
  let history = useHistory();
  return (
    <div>
      <div className="lab__iframe">
        <iframe
          src="https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html"
          scrolling="no"
          allowfullscreen></iframe>
      </div>
      <div className="lab__header">
        <MdKeyboardBackspace onClick={() => history.goBack()} />

        <img
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="logo"
          className="logo"
        />
      </div>
      <div className="draggable__glossary">
        <div className="draggable__glossary__hand">
          <Draggable
            // axis="x,y"
            handle=".handle"
            defaultPosition={{ x: 100, y: 100 }}
            position={null}
            grid={[25, 25]}
            scale={1}>
            <div
              style={{ background: "blue", width: "100px", padding: "10px" }}>
              <div className="handle">Tamil translations draggable</div>
              <div>This readme is really dragging on...</div>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Lab;
