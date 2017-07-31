import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { FirebaseAuth } from '../../config/firebase';

import SignUp from './SignUp';

class SignUpContainer extends Component {

    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error);
        });
    }

    signUpUser = (event) => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                fullname: `${this.props.values.values.fullName}`,
                bio: `${this.props.values.values.bio}`,
                email: `${this.props.values.values.email}`,
                password: `${this.props.values.values.password}`
            }
        })
            .then(({ data }) => {
                this.login({ email: `${this.props.values.values.email}`, password: `${this.props.values.values.password}` });
                console.log('got data', data);
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            });
    }

    render() {
        if (this.props.authenticated) {
            return (
                <Redirect to="/" />
            );
        }
        return (
            <SignUp signUpUser={(event) => this.signUpUser(event)} />
        );
    }
}

const addUser = gql`
    mutation addUser (
        $fullname: String!
        $email: String!
        $bio: String
        $password: String!
        ) {
        addUser(
            fullname: $fullname
            email: $email
            bio: $bio
            password: $password
        ) {
            fullname
            email
            bio
            password
        }
        }
`;

function mapStateToProps(state) {
    return {
        values: state.form.signup,
        authenticated: state.auth.userLogin
    };
}

const SignUpWithData = graphql(addUser)(SignUpContainer);

export default connect(mapStateToProps)(SignUpWithData);
