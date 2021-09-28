import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../Utils/auth';

const PrivateRoute = props => isLogged()
    ? <Route { ...props } />
    : <Redirect to='/login' />

export default PrivateRoute