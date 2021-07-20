import "./App.css";

import React, { lazy, useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import ReactPWAInstallProvider, { useReactPWAInstall } from "react-pwa-install";

import MuiTheme from "./theme";
import Layout from "./layout/Layout";

import { listSubjects } from "./actions/subjectActions";
import { listCategories } from "./actions/categoryActions";
import { checkLocalStorageVersion } from "./localStorage/index";
import Logo from "./assets/logo.svg";

import LeptonWaiting from "./components/lapton_waiting_room/LeptonWaiting";
import DownloadBtn from "./components/buttons/download_button/DownloadBtn";
const Home = lazy(() => import("./screens/Home1/Home"));
const RegisterPage = lazy(() => import("./screens/auth/register/Register"));
const CoursePage = lazy(() => import("./screens/course__page/CoursePage"));
const CourseList = lazy(() => import("./screens/Course/CourseList"));
const Lab = lazy(() => import("./screens/Lab/Lab"));
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
const QuizList = lazy(() => import("./screens/quiz_list/QuizList"));

function App() {
  //installation
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "Install Lepton",
      logo: Logo,
      features: (
        <ul>
          <li>Install once</li>
          <li>Works offline</li>
          <li>High Quality Labs</li>
          <li>Entertaining Quizzes</li>
        </ul>
      ),
      description: "Download Lepton, Enjoy Learning",
    })
      .then(() => alert("App installed successfully"))
      .catch(() => alert("App installation cancelled"));
  };

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
    // setTimeout(function () {
    checkLocalStorageVersion();
    fetchDynamicData();
    fetchStaticData();
    // }, 1000);
  }, []);
  //
  return (
    <div className="App">
      <div className="app__install__div">
        {supported() && !isInstalled() && (
          <div
            type="button"
            className="app__install__btn"
            onClick={handleClick}>
            <DownloadBtn />
          </div>
        )}
      </div>
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

              <Route exact path="/quiz/:id">
                <QuizApp />
              </Route>

              {/* List items */}
              <Route exact path="/courses/:id">
                <CoursePage />
              </Route>
              <Route exact path="/labs/lab/:id">
                <Lab />
              </Route>
              <Route exact path="/register">
                <RegisterPage />
              </Route>
              <Layout>
                <Route exact path="/quiz">
                  <QuizList />
                </Route>
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
