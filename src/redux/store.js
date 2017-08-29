import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './combine-reducers';
import client from '../config/apolloClient';

const history = createHistory();
const middleware = routerMiddleware(history);

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        logger,
        thunk,
        client.middleware(),
        middleware
    ))
);
