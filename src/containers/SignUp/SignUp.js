import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
    <div>
        <form onSubmit={signUpUser} >
            <Paper >
                <h2>No Account With this Email.</h2>
                <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
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
                <RaisedButton
                    label="NO THANKS!"
                    type="submit"
                    href="/login"
                />
                <RaisedButton
                    label="JOIN!"
                    type="submit"
                />
            </Paper>
        </form>
    </div>
);

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
