const LOAD_ITEMS = 'LOAD_ITEMS';
const FILTER_ITEMS = 'FILTER_ITEMS';

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
                if (item.borrower) {
                    const borrower = users.filter(user => user.id === item.borrower);
                    item.borrower = borrower[0];
                }
                return item;
            });
            if (userId) {
                itemsWithOwners = itemsWithOwners.filter(item => item.itemOwner.id === userId);
            }
            dispatch(loadItems(itemsWithOwners));
        });
    };
}

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

    case LOAD_ITEMS:
        return {
            ...state,
            loading: false,
            itemsData: action.payload
        };

    case FILTER_ITEMS:
        return {
            ...state,
            filterTags: action.payload
        };

    default:
        return state;
    }
}
