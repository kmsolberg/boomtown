import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { itemsReducer } from './modules/items';
import { profileReducer } from './modules/profile';
import { authReducer } from './modules/authentication';
import { shareReducer } from './modules/share';

import client from '../config/apolloClient';

export default combineReducers({
    items: itemsReducer,
    profiles: profileReducer,
    apollo: client.reducer(),
    auth: authReducer,
    share: shareReducer,
    form: formReducer,
});
