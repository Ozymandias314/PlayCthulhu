import React from "react";
import "./styles.css";

import IndexPage from "./pages/IndexPage";
import RulesPage from "./pages/RulesPage";
import LobbyPage from "./pages/LobbyPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/lobby" component={LobbyPage} />
      </Switch>
    </Router>
  );
}
