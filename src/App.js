import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import Home from "./screens/Home1/Home";
import LabList from "./screens/LabAndGame/LabsList";
import LabView from "./screens/LabAndGame/LabView";
import CourseList from "./screens/Course/CourseList";
import PaperView from "./screens/Course/PaperView";
import LessonsList from "./screens/Lessons/LessonsList";
import LessonsListVideos from "./screens/LessonListVideos/LessonsListVideos";
import SearchResluts from "./screens/search_reusults/SearchResults";
//import LessonView from "./screens/Lessons/LessonView";
import MuiTheme from "./theme";
import Layout from "./layout/Layout";
// import { GlobalContext } from "./context/context";
import Lab from "./screens/Lab/Lab";

// import Starter from "./starter/starter";
import { listSubjects } from "./actions/subjectActions";
import { listCategories } from "./actions/categoryActions";
import { checkLocalStorageVersion } from "./localStorage/index";
import CoursePage from "./screens/course__page/CoursePage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchStaticData = async () => {
      //only this should be stored in local storage
      listSubjects(dispatch);
      listCategories(dispatch);
    };
    const fetchDynamicData = () => {
      // fetch ads
    };

    //TODO: Need to remove data from local storage if versions are not equal
    //TODO: Need to fetch dynamic data
    checkLocalStorageVersion();
    fetchDynamicData();
    fetchStaticData();
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

            {/* List items */}
            <Route exact path="/courses/:id">
              <CoursePage />
            </Route>
            <Layout>
              <Route exact path="/courses">
                <CourseList />
              </Route>

              <Route exact path="/lessons">
                <LessonsList />
              </Route>
              <Route path="/lessons/:id">
                <LessonsListVideos />
              </Route>
              <Route exact path="/labs/lab/:id">
                <Lab />
              </Route>
              <Route exact path="/labs">
                <LabList />
              </Route>
              <Route path="/games">
                <LabList />
              </Route>
              <Route path="/search">
                <SearchResluts />
              </Route>
            </Layout>
            {/* view single items */}
            <Route path="/papers/:id">
              <PaperView />
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
