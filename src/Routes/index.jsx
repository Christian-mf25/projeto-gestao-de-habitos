import React from "react";
import { Route, Switch} from "react-router";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import SearchGroups from "../Pages/SearchGroups";
import MyGroups from "../Pages/MyGroups";

const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" >
            <Home/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route isPrivate path="/dashboard">
            <Dashboard/>
        </Route>
        <Route isPrivate path="/mygroups">
            <MyGroups/>
        </Route>
        <Route isPrivate exact path="/searchgroups">
            <SearchGroups/>
        </Route>
    </Switch>
    );
}

export default Routes; 