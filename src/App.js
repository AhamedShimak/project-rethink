import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import LabList from "./screens/LabAndGame/LabsList";
import LabView from "./screens/LabAndGame/LabView";
import PapersList from "./screens/Paper/PapersList";
import PaperView from "./screens/Paper/PaperView";
import LessonsList from "./screens/Lessons/LessonsList";
import LessonView from "./screens/Lessons/LessonView";

import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* List items */}
          <Layout>
            <Route path="/papers">
              <PapersList />
            </Route>
            <Route path="/lessons">
              <LessonsList />
            </Route>
            <Route path="/labs">
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
          <Route path="/lessons/:id">
            <LessonView />
          </Route>
          <Route path="/labs/:id">
            <LabView />
          </Route>
          <Route path="/games/:id">
            <LabView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
