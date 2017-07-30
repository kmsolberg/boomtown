import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

const validate = values => {
    const errors = {};
    const requiredFields = [
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

let Login = ({ login }) => (
    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form onSubmit={login} autoComplete="off">
                        <div>
                            <Field
                                name="email"
                                label="Your Email"
                                component={ValidatedTextField}
                                type="email"
                            />
                        </div>
                        <div>
                            <Field
                                name="password"
                                label="Your Password"
                                component={ValidatedTextField}
                                type="password"
                            />
                        </div>
                        <RaisedButton className="enterButton" primary fullWidth type="submit">
                            Enter
                        </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
);

function mapStatetoProps(state) {
    return {
        values: state.form.login
    };
}

Login = reduxForm({
    form: 'login',
    validate
})(Login);

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(mapStatetoProps)(Login);
