import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './style.css';

const validate = values => {
    const errors = {};
    const requiredFields = [
        'name',
        'bio',
        'email',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

let SignUp = ({ signUpUser }) => (
    <div className="signup-form">
        <form onSubmit={signUpUser} >
            <Paper >
                <div className="signup-info">
                    <h2>No Account With this Email.</h2>
                    <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
                </div>
                <Field
                    name="fullName"
                    label="Your Name"
                    component={renderTextField}
                /><br />
                <Field
                    name="bio"
                    label="Tell us about yourself!"
                    component={renderTextField}
                /><br />
                <Field
                    name="email"
                    label="Your Email"
                    component={renderTextField}
                /><br />
                <Field
                    name="password"
                    label="Your Password"
                    component={renderTextField}
                /><br />
                <div className="signup-buttons">
                    <Link to={'/login'} >
                        <RaisedButton
                            label="NO THANKS!"
                            type="submit"
                            backgroundColor="black"
                            labelColor="rgb(129, 212, 250)"
                        />
                    </Link>
                    <RaisedButton
                        label="JOIN!"
                        type="submit"
                        backgroundColor="rgb(129, 212, 250)"
                        labelColor="white"
                    />
                </div>
            </Paper>
        </form>
    </div>
);

SignUp.propTypes = {
    input: PropTypes.oneOfType([PropTypes.object]).isRequired,
    signUpUser: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        values: state.form.signup
    };
}

SignUp = reduxForm({
    form: 'signup',
    validate
})(SignUp);

export default connect(mapStateToProps)(SignUp);
