import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import icon from '../../images/home-tr.svg';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <AppBar
                iconElementLeft={<SelectField />}
                iconElementRight={<FlatButton label="Logout" />}
            />
        </div>
        <div className="appContent">
            {children}
        </div>
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
