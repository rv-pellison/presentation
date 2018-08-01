// src/js/actions/index.js
import {fetchImages} from './imageActions.js';
import { ADD_ARTICLE, FETCH_IMAGES_BEGIN, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "../constants/action-types";


export const addArticle = article => ({ 
    type: ADD_ARTICLE,
    payload: article 
});
export const fetchImagesBegin = () => ({
    type: FETCH_IMAGES_BEGIN,
    //todo: add loading flag
});
export const fetchImagesSuccess = images => ({
    type: FETCH_IMAGES_SUCCESS,
    payload: { images }
});
export const fetchImagesFailure = error => ({
    type: FETCH_IMAGES_FAILURE,
    payload: { error }
});

export const getImages = () =>{
    console.log('in getimages1');
    return (dispatch) =>{
        console.log('in getimages');
        return dispatch(fetchImages());
    }
};