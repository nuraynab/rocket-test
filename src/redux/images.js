import * as ActionTypes from './ActionTypes';

export const Images = (state = { images: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_IMAGES:
            return {...state, images: action.payload};
        default:
            return state;
    }
}