import React from "react";
import Home from "./components/Home";
import Albums from "./components/Albums";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";

export const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user/:id/albums" component={Albums} />
    <Route component={NotFound} />
  </Switch>
);
