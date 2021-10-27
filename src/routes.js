import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from "./pages/UserLogin/index";
import Register from "./pages/Register";
import Salon from "./pages/Salon";
import Kitchen from "./pages/Kitchen";
import Orders from "./pages/Salon/Order";
import ServeOrder from "./pages/Salon/ServeOrder";
import NotFound from "./pages/NotFound/notFound";


const Routes = (user) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/salao'> {user ? <Salon /> : <Redirect to="/"/>}</Route>
            <Route exact path='/cozinha'> {user ? <Kitchen /> : <Redirect to="/" />}</Route>
            <Route exact path='/pedidos'> {user ? <Orders /> : <Redirect to="/" />}</Route>
            <Route exact path='/servir'> {user ? <ServeOrder /> : <Redirect to="/" />}</Route>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

    );

    

export default Routes;
