import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Form from "../src/Components/Form/Form";
import Edit from "../src/Components/Edit/Edit";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/add" component={Form} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
