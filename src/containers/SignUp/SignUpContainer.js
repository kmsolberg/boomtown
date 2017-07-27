import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
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
                fullname: 'Antony',
                bio: 'word',
                email: 'antony@rome.com',
                password: 'password'
            }
        })
            .then(({ data }) => {
                this.login({ email: 'antony@rome.com', password: 'password' });
                console.log('got data', data);
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            });
    }

    render() {
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
        }
        }
`;

const SignUpWithData = graphql(addUser)(SignUpContainer);

export default SignUpWithData;
