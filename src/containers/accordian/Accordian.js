import React from "react";
import { makeStyles } from "@material-ui/core/styles";
/*import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";
*/
import AccordianItem from "../../components/accordian__item/AccordianItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > *": {
      margin: "7px 0",
    },
    "& > :first-child": {
      margin: "0 0 0 0",
    },
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
        {accordianItems?.units?.map((unit) => (
          <AccordianItem
            expanded={expanded}
            handleChange={handleChange}
            panelName={unit._id}
            heading={unit.name}
            key={unit._id}
            headings={unit.headings}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
