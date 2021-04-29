import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";

import AccordianItem from "../../components/accordian__item/AccordianItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const Accordian = ({ accordianItems }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="lessons">
      <div className={classes.root}>
        <AccordianItem
          expanded={expanded}
          handleChange={handleChange}
          panelName="panel1"
          heading="head1"
          description="describe"
          details="details"
        />
      </div>
    </div>
  );
};

export default Accordian;
