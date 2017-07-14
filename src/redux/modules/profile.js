const LOAD_USERS = 'LOAD_USERS';

export function loadUsers(users) {
    return {
        type: LOAD_USERS,
        payload: users
    };
}

export function fetchProfile() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const users = json;
            dispatch(loadUsers(users));
        });
    };
}
