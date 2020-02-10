import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Form from "../src/Components/Form/Form";
import Edit from "../src/Components/Edit/Edit";
import Dashboard from "../src/Components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={Form} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
