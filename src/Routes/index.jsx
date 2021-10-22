import SearchGroups from "../Pages/SearchGroups";
import { Route, Switch } from "react-router";
import Dashboard from "../Pages/Dashboard";
import InfoGroup from "../Pages/InfoGroup";
import Register from "../Pages/Register";
import MyGroups from "../Pages/MyGroups";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import React from "react";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route isPrivate path="/dashboard">
        <Dashboard />
      </Route>
      <Route isPrivate path="/mygroups">
        <MyGroups />
      </Route>
      <Route isPrivate exact path="/searchgroups">
        <SearchGroups />
      </Route>
      <Route isPrivate exact path="/group/:id">
        <InfoGroup />
      </Route>
    </Switch>
  );
};
export default Routes;