const LOAD_ITEMS = 'LOAD_ITEMS';
const ITEM_TAGS = 'ITEM_TAGS';

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

export function itemCategories(itemTags) {
    return {
        type: ITEM_TAGS,
        payload: itemTags
    };
}

export function fetchCategories() {
    return function(dispatch) {
        fetch('http://localhost:3001/items')
        .then(response => response.json())
        .then(json => {
            const itemTags = json.reduce(function(prev, curr) {
                return [...prev, ...curr.tags];
            });
            dispatch(itemCategories(itemTags));
        });
    };
}

// var allbooks = friends.reduce(function(prev, curr) {
//   return [...prev, ...curr.books];
// }, ['Alphabet'])

const initialState = {
    loading: true,
    itemsData: [],
    itemTags: []
};

export function itemsReducer(state = initialState, action) {
    switch (action.type) {

    case LOAD_ITEMS:
        return {
            loading: false,
            itemsData: action.payload
        };

    case ITEM_TAGS:
        return {
            itemTags: action.payload
        };

    default:
        return state;
    }
}
