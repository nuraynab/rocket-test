import {createStore, combineReducers, applyMiddleware} from "redux";
import {Images} from "./images";
import {LikedImages} from "./likedImages";
import {SearchedImages} from "./searchedImages";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            images: Images,
            likedImages: LikedImages,
            searchedImages: SearchedImages
        }),
        applyMiddleware(thunk)
    );

    return store;
}