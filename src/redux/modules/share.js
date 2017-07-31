// ACTION CONSTANTS
export const UPDATE_STEP_INDEX = 'UPDATE_STEP_INDEX';
export const UPDATE_FINISHED_STATE = 'UPDATE_FINISHED_STATE';
export const SET_ITEM_IMAGE_URL = 'SET_ITEM_IMAGE_URL';

// ACTION CREATORS
export function updateStepIndex(stepIndex) {
    return {
        type: UPDATE_STEP_INDEX,
        payload: stepIndex
    };
}

export function setItemImageUrl(url) {
    return {
        type: SET_ITEM_IMAGE_URL,
        payload: url
    };
}

// REDUCERS
const initialState = {
    stepIndex: 0,
    finished: false,
    imageUrl: ''
};

export function shareReducer(state = initialState, action) {
    switch (action.type) {

    case UPDATE_STEP_INDEX:
        return { ...state, stepIndex: action.payload };

    case SET_ITEM_IMAGE_URL:
        return { ...state, imageUrl: action.payload };

    default:
        return state;
    }
}
