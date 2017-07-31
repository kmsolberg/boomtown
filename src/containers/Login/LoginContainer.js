import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FirebaseAuth } from '../../config/firebase';

import Login from './Login';
import { showSignUp, loginError } from '../../redux/modules/authentication';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = ({ email, password }) => {
        // callback for authenticating user
        FirebaseAuth.signInWithEmailAndPassword(email, password)
            // if error & incorrect user, catch these errors
            // TODO move into a thunk, then import action creator
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    this.props.dispatch(showSignUp(true));
                } else {
                    this.props.dispatch(loginError(true));
                }
            });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated, signUp, ...props } = this.props;

        if (authenticated) {
            return (
                <Redirect to={from} />
            );
        }

        if (signUp) {
            return (
                <Redirect to="/signup" />
            );
        }

        return (
            <div>
                <Login
                    {...props}
                    login={(e) => {
                        e.preventDefault();
                        this.login({ email: `${this.props.values.values.email}`, password: `${this.props.values.values.password}` });
                    }}
                />
            </div>
        );
    }
}

LoginContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.oneOfType([PropTypes.object]).isRequired,
    authenticated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    signUp: PropTypes.bool.isRequired,
    values: PropTypes.oneOfType([
        PropTypes.object
    ]).isRequired
};

const mapStateToProps = state => ({
    authenticated: state.auth.userLogin,
    values: state.form.login,
    signUp: state.auth.userExist
});

export default connect(mapStateToProps)(LoginContainer);
