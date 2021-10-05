import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { isAuthenticated } from "./auth";
import StoreProvider from "./pages/Store/Provider";
import RoutesPrivate from "./pages/RoutesPrivate/Private/Private";
import Login from "./pages/UserLogin/index";
import Register from "./pages/Register";
import Salon from "./pages/Salon";
import MainMenu from "./pages/MainMenu";
import BreakMenu from "./pages/BreakMenu";
import Kitchen from "./pages/Kitchen";



const Routes = () => (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <RoutesPrivate path='/salao' component={Salon} />
            <Route exact path='/menu-principal' component={MainMenu} />
            <Route exact path='/menu-matinal' component={BreakMenu} />
            <Route exact path='/cozinha' component={Kitchen} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>

    );

    

export default Routes;

/* const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
); */