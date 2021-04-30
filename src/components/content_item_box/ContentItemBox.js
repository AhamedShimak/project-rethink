import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { MdShare, MdBookmark } from "react-icons/md";
import "./ContentItemBox.css";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";

const ContentItemBox = ({ image, title }) => {
  let history = useHistory();
  return (
    <Card
      className={` content__item__box`}
      onClick={() => history.push("/labs/lab")}>
      <div style={{ position: "relative", width: "200px", height: " 200px" }}>
        <img
          src="https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale-600.png"
          alt="pH Scale"
          style={{ border: "none" }}
          width="300"
          height="200"
        />
        <div
          style={{
            position: " absolute",
            width: "200px",
            height: "80px",
            left: "50px",
            top: "60px",
            backgroundColor: "#FFF",
            opacity: "0.6",
            filter: "alpha(opacity = 60)",
          }}></div>
      </div>
      <CardContent className="card__content">
        <Typography variant="caption" display="block">
          This impressive paella
          <div className="card__content__icons">
            <IconButton aria-label="add to bookmark" className="icon__btn">
              <MdBookmark />
            </IconButton>
            <IconButton aria-label="share" className="icon__btn">
              <MdShare />
            </IconButton>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentItemBox;
