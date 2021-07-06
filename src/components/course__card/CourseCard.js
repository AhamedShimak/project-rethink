import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SeriesImage from "./Series.jpg";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
});

export default function CourseCard() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Card className={classes.root} onClick={() => history.push("/courses/1")}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SeriesImage}
          title="Series"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Series || தொடர்கள்
          </Typography>
          <Typography gutterBottom variant="p" component="small">
            😎By: M.U Mus'ab (University of Moratuwa, Faculty of Engineering)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button
          size="small"
          color="primary"
          onClick={() => history.push("/courses/1")}>
          Learn Now
        </Button>
      </CardActions>
    </Card>
  );
}
