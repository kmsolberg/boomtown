import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Header from '../Header/Header';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
        </div>
        <div className="appContent">
            {children}
            <FloatingActionButton
                backgroundColor="rgb(38, 50, 56)"
                className="share-button"
                href="/share"
            >
                <ContentAdd />
            </FloatingActionButton>
        </div>
        <p className="footer-text">
            © 2017 Boomtown Corp. All Rights Reserved
        </p>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
