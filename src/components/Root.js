import React from "react";
import { Router, Switch, Route} from 'react-router-dom';
import { History } from "../history";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Hall from "../pages/Hall";
import MainMenu from "../pages/MainMenu";
import BreakMenu from "../pages/BreakMenu";
import Kitchen from "../pages/Kitchen";
import PrivateRoute from "./PrivateRoute";

const Root = () => (
    <Router history={History} >
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/salao' component={Hall} />
            <Route exact path='/menu-principal' component={MainMenu} />
            <Route exact path='/menu-matinal' component={BreakMenu} />
            <Route exact path='/cozinha' component={Kitchen} />
        </Switch>
    </Router>
)

export default Root;