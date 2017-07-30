const LOGIN_ERROR = 'LOGIN_ERROR';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILES';
const SHOW_SIGN_UP = 'SHOW_SIGN_UP';

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

export function showSignUp() {
    return {
        type: SHOW_SIGN_UP,
        payload: true
    };
}

const initialState = {
    userLogin: false,
    showLoginError: false,
    userExist: false
};

export function authReducer(state = initialState, action) {
    switch (action.type) {

    case LOGIN_ERROR:
        return { ...state, showLoginError: true };

    case UPDATE_USER_PROFILE:
        return { ...state, userLogin: action.payload };

    case SHOW_SIGN_UP:
        return { ...state, userExist: true };

    default:
        return state;
    }
}
