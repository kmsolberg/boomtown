import { LOAD_ITEMS } from './actions';

const initialState = {
    loading: true,
    itemsData: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {

        case LOAD_ITEMS:
            const stateWithItems = {
                loading: false,
                itemsData: action.payload
            };
            console.log('its working');
            return stateWithItems;

        default:
            return state;
    }
}
