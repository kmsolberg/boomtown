const FILTER_ITEMS = 'FILTER_ITEMS';

// THIS IS A THUNK

export function filterItems(filterTags) {
    return {
        type: FILTER_ITEMS,
        payload: filterTags
    };
}

const initialState = {
    loading: true,
    itemsData: [],
    filterTags: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {

    case FILTER_ITEMS:
        return {
            ...state,
            filterTags: action.payload
        };

    default:
        return state;
    }
}
