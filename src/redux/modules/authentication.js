const LOGIN_ERROR = 'LOGIN_ERROR';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILES';

export function loginError(show) {
    return {
        type: LOGIN_ERROR,
        payload: show
    };
}

export function updateUserProfile(userProfile) {
    return {
        type: UPDATE_USER_PROFILE,
        payload: userProfile
    };
}

const initialState = {
    userLogin: false,
    showLoginError: false
};

export function authReducer(state = initialState, action) {
    switch (action.type) {

    case LOGIN_ERROR:
        return { ...state, showLoginError: true };

    case UPDATE_USER_PROFILE:
        return { ...state, userLogin: action.payload };

    default:
        return state;
    }
}
