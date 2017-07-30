import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import icon from '../../images/boomtown-logo.svg';

import { filterItems } from '../../redux/modules/items';
import SelectField from '../SelectField/';
import './style.css';
import { FirebaseAuth } from '../../config/firebase';

const Header = ({ dispatch, filterTags, authenticated }) => (
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
                    containerElement={<Link to={`/profile/${authenticated}`} />}
                />
                <RaisedButton
                    label="Logout"
                    onTouchTap={() => FirebaseAuth.signOut()}
                    backgroundColor="rgb(38, 50, 56)"
                    labelColor="white"
                />
            </div>
        }
    />
);

function mapStateToProps(state) {
    return {
        filterTags: state.items.filterTags,
        authenticated: state.auth.userLogin
    };
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
