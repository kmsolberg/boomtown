const LOAD_ITEMS = 'LOAD_ITEMS';

export function loadItems(itemsWithOwners) {
    return {
        type: LOAD_ITEMS,
        payload: itemsWithOwners
    };
}

// THIS IS A THUNK
export function fetchItems() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                return item;
            });
            dispatch(loadItems(itemsWithOwners));
        });
    };
}

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
        return stateWithItems;

    default:
        return state;
    }
}
