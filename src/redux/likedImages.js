import * as ActionTypes from './ActionTypes';

export const LikedImages = (state = { images: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LIKED_IMAGE:
            return {...state, images: action.payload};
        default:
            return state;
    }
}