import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FirebaseAuth, FirebaseDB } from '../../config/firebase';

import Login from './Login';

// TODO


//         FirebaseDB.ref(`/users/${userID}`)
//         .once('value')
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
// });

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
                    console.log('User not found');
                    // this.props.dispatch(showJoinModal(true));
                    // TODO write action
                } else {
                    console.log('Well done!');
                    // this.props.dispatch(showLoginError(true));
                    // TODO write action
                }
            });
    }

    // join = () => {
    // TODO write the sign-up form
    // capture email, first name, last name, bio, password
    // }

    render() {
        // const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated, loginFormValues, ...props } = this.props;

        if (authenticated) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div>
                <Login
                    {...props}
                    login={(e) => {
                        e.preventDefault();
                        this.login({ email: 'kat@email.com', password: 'password' });
                    }}
                />
            </div>
        );
    }
}

// PropTypes
// TODO authenticated

const mapStateToProps = state => ({
    authenticated: state.auth.userLogin
});

export default connect(mapStateToProps)(LoginContainer);
