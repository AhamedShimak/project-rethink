import "./App.css";
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import Home from "./screens/Home/Home";
import LabList from "./screens/LabAndGame/LabsList";
import LabView from "./screens/LabAndGame/LabView";
import PapersList from "./screens/Paper/PapersList";
import PaperView from "./screens/Paper/PaperView";
import LessonsList from "./screens/Lessons/LessonsList";
import LessonsListVideos from "./screens/LessonListVideos/LessonsListVideos";
import LessonView from "./screens/Lessons/LessonView";
import MuiTheme from "./theme";
import Layout from "./layout/Layout";
// import { GlobalContext } from "./context/context";
import Lab from "./screens/Lab/Lab";

// import Starter from "./starter/starter";
import { listSubjects } from "./actions/subjectActions";
import { listCategories } from "./actions/categoryActions";
function App() {
  // const { advertisements, fetchAdvertisements } = useContext(GlobalContext);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      listSubjects(dispatch);
      listCategories(dispatch);
    };
    fetchData();
  }, []);
  //
  return (
    <div className="App">
      <ThemeProvider theme={MuiTheme}>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/labs/lab">
              <Lab />
            </Route>
            {/* List items */}
            <Layout>
              <Route path="/papers">
                <PapersList />
              </Route>
              <Route exact path="/lessons">
                <LessonsList />
              </Route>
              <Route path="/lessons/:id">
                <LessonsListVideos />
              </Route>
              <Route exact path="/labs">
                <LabList />
              </Route>
              <Route path="/games">
                <LabList />
              </Route>
            </Layout>
            {/* view single items */}
            <Route path="/papers/:id">
              <PaperView />
            </Route>

            <Route exact path="/labs/:id">
              <LabView />
            </Route>
            <Route path="/games/:id">
              <LabView />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
