import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import icon from '../../images/boomtown-logo.svg';

import SelectArea from '../SelectField/';
import './style.css';

const Header = () => (
    <AppBar
        style={{ 'background-color': 'white' }}
        iconElementLeft={
            <div className="logo-select">
                <Link to={'/'} >
                    <img src={icon} alt="boomtown logo" className="logo" />
                </Link>
                <SelectArea />
            </div>
        }
        iconElementRight={
            <div className="buttons">
                <RaisedButton
                    label="My Profile"
                    backgroundColor="rgb(129, 212, 250)"
                    labelColor="white"
                />
                <RaisedButton
                    label="Logout"
                    backgroundColor="rgb(38, 50, 56)"
                    labelColor="white"
                />
            </div>
        }
    />
);

export default Header;
