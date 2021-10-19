import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./pages/UserLogin/index";
import Register from "./pages/Register";
import Salon from "./pages/Salon";
import MainMenu from "./pages/MainMenu";
import BreakMenu from "./pages/BreakMenu";
import Kitchen from "./pages/Kitchen";
import NotFound from "./pages/NotFound/notFound";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/salao' component={Salon} />
            <Route exact path='/menu-principal' component={MainMenu} />
            <Route exact path='/menu-matinal' component={BreakMenu} />
            <Route exact path='/cozinha' component={Kitchen} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

    );

    

export default Routes;
