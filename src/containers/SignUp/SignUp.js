import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SignUp = ({ signUpUser }) => (
    <div>
        <form onSubmit={signUpUser} >
            <Paper >
                <h2>No Account With this Email.</h2>
                <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
                <TextField
                    hintText="Your Name"
                    floatingLabelText="Your Name"
                    errorText="This field is required"
                /> <br />
                <TextField
                    hintText="Tell Us About Yourself!"
                    floatingLabelText="Tell Us About Yourself!"
                    errorText="This field is required"
                />
                <RaisedButton
                    label="JOIN!"
                    type="submit"
                />
            </Paper>
        </form>
    </div>
);

export default SignUp;
