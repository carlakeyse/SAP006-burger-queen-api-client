import React from "react";
import { Router, Switch, Route} from 'react-router-dom';
import { History } from "../history";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Hall from "../pages/hall";
import MainMenu from "../pages/mainMenu";
import BreakMenu from "../pages/breakMenu";
import Kitchen from "../pages/kitchen";
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