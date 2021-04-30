import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { MdLibraryBooks } from "react-icons/md";
import Typography from "@material-ui/core/Typography";

import "./AccordiaListItem.css";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AccordianListItem() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <List className={classes.root}>
      <div
        className="accordian__list__item"
        onClick={() => history.push("/lessons/videos")}>
        <div className="accordian__list__item__icon">
          <MdLibraryBooks></MdLibraryBooks>
        </div>
        <div className="accordian__list__item__title">
          <Typography variant="caption" display="block" gutterBottom>
            Sub unit1
          </Typography>
        </div>
      </div>
      <div className="accordian__list__item">
        <div className="accordian__list__item__icon">
          <MdLibraryBooks></MdLibraryBooks>
        </div>
        <div className="accordian__list__item__title">
          <Typography variant="caption" display="block" gutterBottom>
            Sub unit2
          </Typography>
        </div>
      </div>
      <div className="accordian__list__item">
        <div className="accordian__list__item__icon">
          <MdLibraryBooks></MdLibraryBooks>
        </div>
        <div className="accordian__list__item__title">
          <Typography variant="caption" display="block" gutterBottom>
            Sub unit3
          </Typography>
        </div>
      </div>
      <div className="accordian__list__item">
        <div className="accordian__list__item__icon">
          <MdLibraryBooks></MdLibraryBooks>
        </div>
        <div className="accordian__list__item__title">
          <Typography variant="caption" display="block" gutterBottom>
            Sub unit4
          </Typography>
        </div>
      </div>
    </List>
  );
}
