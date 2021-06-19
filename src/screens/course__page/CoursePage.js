import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MdEventNote, MdVideoLibrary, MdInsertDriveFile } from "react-icons/md";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Data from "./data";
import YoutubePlayer from "../../components/youtube__player/YoutubePlayer";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbarDesign: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
  },
  toolbar__left: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CoursePage(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [content, setContent] = useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setContent(Data.contents[0]);
  }, []);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {Data.contents.map((resource, index) => (
          <ListItem button key={index} onClick={() => setContent(resource)}>
            <ListItemIcon>
              {resource.type === "TEXT" ? (
                <MdEventNote />
              ) : resource.type === "VIDEO" ? (
                <MdVideoLibrary />
              ) : (
                <MdInsertDriveFile />
              )}
            </ListItemIcon>
            <ListItemText primary={resource.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const contentDisplay = (inputContent) => {
    switch (inputContent.type) {
      case "VIDEO":
        // console.log(inputContent.url);
        return <YoutubePlayer url={inputContent.url} />;
      //   case "TEXT":
      //     return (
      //       <div
      //         style={{ color: "white" }}
      //         dangerouslySetInnerHTML={{ __html: inputContent.content }}></div>
      //     );
      default:
        return null;
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.toolbarDesign}>
            <div className={classes.toolbar__left}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}>
                📋 👈 ||
              </IconButton>
              <Typography variant="h6" noWrap>
                {Data.about.name}
              </Typography>
            </div>
            <div>
              <Link to="/">
                <div className="header__logo">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                    alt="logo"
                    className="logo"
                  />
                </div>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: content?.title }}></div>
        <br />
        {content && contentDisplay(content)}
        <br />
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: content?.content }}></div>
      </main>
    </div>
  );
}

export default CoursePage;
