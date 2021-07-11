import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaDownload } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
  },
}));
const DownloadBtn = () => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<FaDownload />}>
      Download App
    </Button>
  );
};

export default DownloadBtn;
