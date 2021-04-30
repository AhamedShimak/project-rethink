import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { MdKeyboardBackspace } from "react-icons/md";
import "./Lab.css";
import { useHistory } from "react-router";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
    </div>
  );
};

export default Lab;
