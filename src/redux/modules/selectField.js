// initial state is empty
// on change from select menu, state changes to that tag
// only the cards with that tag are visible

const FILTER_ITEMS = 'FILTER_ITEMS';

export function filterItems() {
    return {
        type: FILTER_ITEMS
    };
}

const initialState = {
    tags: ''
};

export function filterReducer(state = initialState, action) {
    switch (action.type) {

    default:
        return state;
    }
}
