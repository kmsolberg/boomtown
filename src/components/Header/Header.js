import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import icon from '../../images/boomtown-logo.svg';

import './style.css';

const Header = () => (
    <AppBar
        style={{ 'background-color': 'white' }}
        iconElementLeft={
            <div>
                <Link to={'/'} >
                    <img src={icon} alt="boomtown logo" className="logo" />
                </Link>
                <SelectField />
            </div>
        }
        iconElementRight={
            <div className="buttons">
                <RaisedButton
                    label="Profile"
                    backgroundColor="rgb(129, 212, 250)"
                    labelColor="white"
                />
                <RaisedButton
                    label="Logout"
                    backgroundColor="black"
                    labelColor="white"
                />
            </div>
        }
    />
);

export default Header;
