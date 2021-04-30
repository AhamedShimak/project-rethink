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
          style={{ border: "none", margin: "0" }}
          width="200"
          height="150"
        />
      </div>
      <CardContent className="card__content" style={{ margin: "0" }}>
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
