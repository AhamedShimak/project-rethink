import React from "react";
/*import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";*/
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { MdShare, MdBookmark } from "react-icons/md";
import "./ContentItemBox.css";

//for share button
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import Popup from "./Popup";

const ContentItemBox = ({ image, title }) => {
  //share button
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  return (
    <div className={` content__item__box`}>
      <div className="card__content" style={{ margin: "0" }}>
        <Typography
          variant="caption"
          display="block"
          style={{
            color: "#fffffa",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <p className="content__item__box_p" onClick={() => history.push("/labs/lab")}>Test</p>

          <div className="card__content__icons">
            <IconButton aria-label="add to bookmark" className="icon__btn">
              <MdBookmark />
            </IconButton>
            
            <IconButton aria-label="share" className="icon__btn" onClick={handleClickOpen}>
              <MdShare />
            </IconButton>
          

          </div>
        </Typography>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Share This Platform"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          If you like this share amoung others
          </DialogContentText>
        <Popup/>

        </DialogContent>
       
        
      </Dialog>
      </div>
    </div>
  );
};

export default ContentItemBox;
