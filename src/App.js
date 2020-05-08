import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Common/Header";
import Quiz from "./Components/Quiz/Quiz";
import Orcamento from "./Components/Orcamento/orcamento3";
import Home from "./Components/Home/Home";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/painel" component={Header} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/orcexpress" component={Orcamento} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
