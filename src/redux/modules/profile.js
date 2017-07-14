const LOAD_USERS = 'LOAD_USERS';

export function loadUsers(userData) {
    return {
        type: LOAD_USERS,
        payload: userData
    };
}

export function fetchProfile(userId) {
    return function (dispatch) {
        fetch(`http://localhost:3001/users/${userId}`)
        .then(response => response.json())
        .then(userData => {
            dispatch(loadUsers(userData));
        });
    };
}


// .then((response) => response.json())
//       .then((responseJson) => {
//         return responseJson.movies;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

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
