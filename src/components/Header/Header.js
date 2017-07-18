import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import icon from '../../images/boomtown-logo.svg';

import { filterItems } from '../../redux/modules/items';
import SelectField from '../SelectField/';
import './style.css';

const Header = ({ dispatch, filterTags }) => (
    <AppBar
        style={{ 'background-color': 'white' }}
        iconElementLeft={
            <div className="logo-select">
                <Link to={'/'} >
                    <img src={icon} alt="boomtown logo" className="logo" />
                </Link>
                <SelectField
                    dispatch={dispatch}
                    onChangeAction={filterItems}
                    filterTags={filterTags}
                />
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

function mapStateToProps(state) {
    return {
        filterTags: state.items.filterTags
    };
}

export default connect(mapStateToProps)(Header);
