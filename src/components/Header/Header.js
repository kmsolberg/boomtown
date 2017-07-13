import React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import icon from '../../images/boomtown-logo.svg';
import SvgIcon from 'material-ui/SvgIcon';

import './style.css';

// const HomeIcon = (props) => (
//     <SvgIcon {...props}>
//         <icon />
//     </SvgIcon>
// );

const Header = () => (
    <AppBar
        style={{ 'background-color': 'white' }}
        iconElementLeft={
            <div>
                <img src={icon} alt="boomtown logo" className="logo" />
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
