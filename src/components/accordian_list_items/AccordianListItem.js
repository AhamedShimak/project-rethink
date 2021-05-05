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
    cursor: "pointer",
  },
}));

export default function AccordianListItem({ headings }) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <List className={classes.root}>
      {headings?.map((heading) => (
        <div
          key={heading._id}
          className="accordian__list__item"
          onClick={() => history.push(`/lessons/${heading._id}`)}>
          <div className="accordian__list__item__icon">
            <MdLibraryBooks></MdLibraryBooks>
          </div>
          <div className="accordian__list__item__title">
            <Typography variant="caption" display="block" gutterBottom>
              {heading.name}
            </Typography>
          </div>
        </div>
      ))}
    </List>
  );
}
