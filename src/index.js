import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';
import client from './config/apolloClient';

import Layout from './components/Layout';
import Routes from './routes/Routes';

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </ApolloProvider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
