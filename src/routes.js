import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hall from "./pages/Hall";
import MainMenu from "./pages/MainMenu";
import BreakMenu from "./pages/BreakMenu";
import Kitchen from "./pages/Kitchen";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/salao' component={Hall} />
            <PrivateRoute path='/salao' component={Hall} />
            <Route exact path='/menu-principal' component={MainMenu} />
            <Route exact path='/menu-matinal' component={BreakMenu} />
            <Route exact path='/cozinha' component={Kitchen} />
        </Switch>
    </BrowserRouter>

    );

    

export default Routes;