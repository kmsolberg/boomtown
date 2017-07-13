import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
    } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items/';
import NotFound from './containers/NotFound/';
import Profile from './containers/Profile/';
import Share from './containers/Share/';
import Routes from './routes/Routes';

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
            {/*<Items />*/}
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </Provider>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
