import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Items from '../containers/Items';
import Login from '../containers/Login';
import Share from '../containers/Share';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';
import SignUp from '../containers/SignUp/';


// import all the components you're rendering in the routes


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Items} />
        <Route path="/login" component={Login} />
        <Route path="/share" component={Share} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
