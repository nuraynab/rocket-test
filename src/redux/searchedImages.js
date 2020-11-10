import * as ActionTypes from './ActionTypes';

export const SearchedImages = (state = { images: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SEARCHED_IMAGE:
            return {...state, images: action.payload};
        default:
            return state;
    }
}