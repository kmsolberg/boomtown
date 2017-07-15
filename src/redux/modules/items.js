const LOAD_ITEMS = 'LOAD_ITEMS';

export function loadItems(itemsWithOwners) {
    return {
        type: LOAD_ITEMS,
        payload: itemsWithOwners
    };
}

// THIS IS A THUNK
export function fetchItems(userId) {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            let itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                return item;
            });
            if (userId) {
                itemsWithOwners = itemsWithOwners.filter(item => {
                    return item.itemOwner.id === userId;
                });
            }
             //TODO filter our items with userId
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
        return {
            loading: false,
            itemsData: action.payload
        };
    default:
        return state;
    }
}
