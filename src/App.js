import "./App.css";

import React, { lazy, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Home from "./screens/Home1/Home";

//import LessonView from "./screens/Lessons/LessonView";
import MuiTheme from "./theme";
import Layout from "./layout/Layout";
// import { GlobalContext } from "./context/context";
import Lab from "./screens/Lab/Lab";
import LeptonWaiting from "./components/lapton_waiting_room/LeptonWaiting";
// import Starter from "./starter/starter";
import { listSubjects } from "./actions/subjectActions";
import { listCategories } from "./actions/categoryActions";
import { checkLocalStorageVersion } from "./localStorage/index";
import CoursePage from "./screens/course__page/CoursePage";
import { Suspense } from "react";
import CourseList from "./screens/Course/CourseList";

const LabView = lazy(() => import("./screens/LabAndGame/LabView"));
const PaperView = lazy(() => import("./screens/Course/PaperView"));
const LessonsListVideos = lazy(() =>
  import("./screens/LessonListVideos/LessonsListVideos")
);
const SearchResluts = lazy(() =>
  import("./screens/search_reusults/SearchResults")
);
const LabList = lazy(() => import("./screens/LabAndGame/LabsList"));
const LessonsList = lazy(() => import("./screens/Lessons/LessonsList"));
const QuizApp = lazy(() => import("./apps/quiz__APP/main/QuizMain"));
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
          {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Lepton-Empowring Education</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
          <Suspense fallback={<LeptonWaiting />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/quiz">
                <QuizApp />
              </Route>

              {/* List items */}
              <Route exact path="/courses/:id">
                <CoursePage />
              </Route>
              <Route exact path="/labs/lab/:id">
                <Lab />
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
          </Suspense>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
