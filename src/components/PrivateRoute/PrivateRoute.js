import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest, loadingUser }) => (
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
    authenticated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    component: PropTypes.func.isRequired,
    location: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
