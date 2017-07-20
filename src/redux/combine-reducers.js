import { combineReducers } from 'redux';
import { itemsReducer } from './modules/items';
import { profileReducer } from './modules/profile';
// import { borrowerReducer } from './modules/borrowed';

import client from '../config/apolloClient';

export default combineReducers({
    items: itemsReducer,
    profiles: profileReducer,
    apollo: client.reducer()
    // borrowedItems: borrowerReducer
});
