import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './combine-reducers';
import client from '../config/apolloClient';

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        logger,
        thunk,
        client.middleware()
    ))
);
