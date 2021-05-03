import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { MdPlayArrow, MdShare, MdBookmark, MdPause } from "react-icons/md";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#15204a",
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
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
      {console.log()}
      <CardMedia
        className={classes.cover}
        image={image || "https://source.unsplash.com/random"}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{ color: "#fffffa" }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" style={{ color: "#d4d4d3" }}>
            {author}
          </Typography>
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
            <IconButton aria-label="previous" style={{ color: "#fffffa" }}>
              {theme.direction === "rtl" ? <MdBookmark /> : <MdShare />}
            </IconButton>

            <IconButton aria-label="next" style={{ color: "#fffffa" }}>
              {theme.direction === "rtl" ? <MdShare /> : <MdBookmark />}
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
