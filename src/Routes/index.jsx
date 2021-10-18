import SearchGroups from "../Pages/SearchGroups/index";
import React from "react";
import Home from "../Pages/Home/index";
import { Route, Switch} from "react-router";
import Register from "../Pages/Register/index";
import Login from "../Pages/Login/index";
import Dashboard from "../Pages/Dashboard/index";
import MyGroups from "../Pages/MyGroups/index";

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