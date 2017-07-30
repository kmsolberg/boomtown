import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute/';
import Items from '../containers/Items';
import Login from '../containers/Login';
import Share from '../containers/Share';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';
import SignUp from '../containers/SignUp/';


// import all the components you're rendering in the routes


const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Items} />
        <PrivateRoute path="/share" component={Share} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
