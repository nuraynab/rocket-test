import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const addImages = (images) => ({
    type: ActionTypes.ADD_IMAGES,
    payload: images
});

export const fetchImages = () => (dispatch) =>{
    const apiRoot = 'https://api.pexels.com';
    const apikey = '563492ad6f91700001000001baa918fdd5ac4aa88f68cf6fb2b293cc';
    axios
        .get(`${apiRoot}/v1/curated?per_page=30`, {
            headers: {
                'Authorization' : apikey
            }
        })
        .then(dishes => dispatch(addImages(dishes.data.photos)))
}


export const addLikedImage = (image) => ({
    type: ActionTypes.ADD_LIKED_IMAGE,
    payload: image
});

export const addSearchedImage = (image) => ({
    type: ActionTypes.ADD_SEARCHED_IMAGE,
    payload: image
});

