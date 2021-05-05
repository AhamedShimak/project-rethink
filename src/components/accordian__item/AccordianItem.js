import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { MdExpandMore } from "react-icons/md";
import AccordianListItem from "../accordian_list_items/AccordianListItem";
import "./AccordianItem.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bolder",
    flexBasis: "100%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const AccordianItem = ({
  expanded,
  handleChange,
  panelName,
  heading,

  headings,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* {details} */}
          <Typography variant="caption" display="block" gutterBottom>
            {/* {details} */}

            <AccordianListItem key={heading._id} headings={headings} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordianItem;
