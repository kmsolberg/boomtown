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
        email = 'kat@email.com';
        password = 'password';

        // callback for authenticating user
        FirebaseAuth.signInWithEmailAndPassword(email, password)
        // if error & incorrect user, catch these errors
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

    render() {
        this.login({ email: 'kat@email.com', password: 'password' });

        if (this.props.authenticated) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            // TODO use rerouter from authentication to go to items
            <Login login={this.login} />
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.userLogin
});

export default connect(mapStateToProps)(LoginContainer);
