import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import { itemsReducer } from './reducer';

export default createStore(
    combineReducers({ items: itemsReducer }),
    composeWithDevTools(applyMiddleware(
        logger,
        thunk
    ))
);
