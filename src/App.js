import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Lab from "./screens/Lab_and_game/Lab";
import Lessons from "./screens/Lessons/Lessons";
import List from "./screens/List/List";
import Paper from "./screens/Paper/Paper";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Layout>
            <Route path="/list/:id">
              <List />
            </Route>
            <Route path="/paper/:id">
              <Paper />
            </Route>
            <Route path="/lab/:id">
              <Lab />
            </Route>
            <Route path="/lesson/:id">
              <Lessons />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
