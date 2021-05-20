import React from "react";
/*import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";*/
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { MdShare, MdBookmark } from "react-icons/md";
import "./ContentItemBox.css";
//import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";

const ContentItemBox = ({ image, title }) => {
  let history = useHistory();
  return (
    <div className={` content__item__box`}>
      <div className="card__content" style={{ margin: "0" }}>
        <Typography
          variant="caption"
          display="block"
          style={{
            color: "#fffffa",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <p className="content__item__box_p" onClick={() => history.push("/labs/lab")}>Test</p>

          <div className="card__content__icons">
            <IconButton aria-label="add to bookmark" className="icon__btn">
              <MdBookmark />
            </IconButton>
            <IconButton aria-label="share" className="icon__btn">
              <MdShare />
            </IconButton>
          </div>
        </Typography>
      </div>
    </div>
  );
};

export default ContentItemBox;
