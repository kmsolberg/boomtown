const LOAD_USERS = 'LOAD_USERS';

export function loadUsers(userData) {
    return {
        type: LOAD_USERS,
        payload: userData
    };
}

export function fetchProfile() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const userData = users.map(user => {
                return user;
            });
            dispatch(loadUsers(userData));
        });
    };
}

const initialState = {
    loading: true,
    usersData: []
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {

    case LOAD_USERS:
        return {
            loading: false,
            usersData: action.payload
        };
    default:
        return state;
    }
}
