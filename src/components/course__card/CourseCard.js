import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SeriesImage from "./Series.png";
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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SeriesImage}
          title="Series"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Series
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor
            lorem Lorem ipsum dolor
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn Now
        </Button>
      </CardActions>
    </Card>
  );
}
