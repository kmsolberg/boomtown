import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';
import client from './config/apolloClient';
import { FirebaseAuth } from './config/firebase';
import { updateUserProfile } from './redux/modules/authentication';

import Layout from './components/Layout';
import Routes from './routes/Routes';

FirebaseAuth.onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch(updateUserProfile(user.uid));
    } else {
        store.dispatch(updateUserProfile(false));
    }
});

const history = createHistory();

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Routes />
                </Layout>
            </ConnectedRouter>
        </ApolloProvider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
