import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            authenticated
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
        )}
    />
);

const mapStateToProps = state => ({
    authenticated: state.auth.userLogin,
});

PrivateRoute.propTypes = {
    authenticated: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
    location: PropTypes.element.isRequired
};
// TODO PROPTYPES component, authenticated, location

export default connect(mapStateToProps)(PrivateRoute);
