import React from "react";
/*import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";*/
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { MdShare } from "react-icons/md";
import "./ContentItemBox.css";
import Img from "react-cool-img";
//for share button
import Button from "@material-ui/core/Button";

//import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import Popup from "../../utils/popup/Popup";
import { clientApi } from "../../api/api";

const ContentItemBox = ({
  name,
  title,
  englishUrl,
  tamilUrl,
  imageUrl,
  id,
}) => {
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
        <div className="card__head">
          <p
            className="content__item__box_p"
            onClick={() => {
              history.push(`/labs/lab/${id}`);
            }}>
            {name}
          </p>
        </div>

        <div className="card__content__image">
          <Img
            src={imageUrl}
            alt={`${title}-image`}
            style={{ border: "none", borderRadius: "20px", width: "100%" }}
            onClick={() => {
              history.push(`/labs/lab/${id}`);
            }}
          />
        </div>
        <div className="card__content__desc">
          <Typography
            variant="caption"
            display="block"
            className="content__item__box_text"
            style={{
              color: "#fffffa",
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "center",
            }}>
            <div className="card__content__icons">
              {tamilUrl && (
                <Button
                  className="lang__btn"
                  onClick={() => {
                    history.push(`/labs/lab/${id}?lng=ta`);
                  }}
                  size="small"
                  variant="contained"
                  color="primary">
                  {" "}
                  Tamil
                </Button>
              )}
              {englishUrl && (
                <Button
                  className="lang__btn"
                  onClick={() => {
                    history.push(`/labs/lab/${id}`);
                  }}
                  size="small"
                  variant="contained"
                  color="secondary">
                  {" "}
                  English
                </Button>
              )}

              {/* <IconButton aria-label="add to bookmark" className="icon__btn">
                <MdBookmark />
              </IconButton> */}

              <IconButton
                aria-label="share"
                className="icon__btn"
                onClick={handleClickOpen}>
                <MdShare />
              </IconButton>
            </div>
          </Typography>
          <Popup
            name={name}
            // handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            title={`Hey😎 Check this amazing lab \n ____________*******************________ \n ${name} \n -------------_________________-------------`}
            url={`${clientApi}/labs/lab/${id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentItemBox;
