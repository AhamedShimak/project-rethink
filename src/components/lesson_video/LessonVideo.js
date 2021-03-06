import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { MdPlayArrow, MdShare, MdBookmark, MdPause } from "react-icons/md";
import { Avatar } from "@material-ui/core";

import "./LessonVideo.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fffffa",
  },
  details: {
    display: "flex",
    flexDirection: "column",

    width: "70%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    // height: "50px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    maxWidth: "380px",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: 0,
    padding: "0 !important",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  avatar: {
    backgroundColor: "red",
  },
  avatarPlay: {
    backgroundColor: "green",
  },
}));

export default function LessonListVideo({
  current,
  description,
  duration,
  image,
  name,
  resourceUrl,
  unit,
  author,
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      {/* {console.log()} */}
      <CardMedia
        className={classes.cover}
        image={image || "https://source.unsplash.com/random"}
        title={name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h6"
            variant="h6"
            style={{
              color: "#6b3e3c",
              fontSize: ".9rem",
              lineHeight: "0.95rem",
              marginBottom: "5px",
            }}>
            {name}
          </Typography>
          <div className="video__duration">
            <Typography
              variant="caption"
              style={{
                color: "#B59D9C",
                fontSize: ".8rem",
                lineHeight: "0.85rem",
                marginBottom: "5px",
                padding: "0",
              }}>
              Author: {author}
            </Typography>
            <Typography
              variant="caption"
              style={{
                color: "#B59D9C",
                fontSize: ".8rem",
                lineHeight: "0.85rem",
                marginBottom: "5px",
                padding: "0",
              }}>
              {duration}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <Avatar className={current ? classes.avatarPlay : classes.avatar}>
              {current ? (
                <MdPause className={classes.playIcon} />
              ) : (
                <MdPlayArrow className={classes.playIcon} />
              )}
            </Avatar>
          </IconButton>
          <div>
            <IconButton aria-label="previous" style={{ color: "#56A6A2" }}>
              {theme.direction === "rtl" ? <MdBookmark /> : <MdShare />}
            </IconButton>

            {/* <IconButton aria-label="next" style={{ color: "#fffffa" }}>
              {theme.direction === "rtl" ? <MdShare /> : <MdBookmark />}
            </IconButton> */}
          </div>
        </div>
      </div>
    </Card>
  );
}
