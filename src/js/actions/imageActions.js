import { getImages, fetchImagesBegin, fetchImagesSuccess, fetchImagesFailure, updateTitleSuccess, updateTitleBegin, updateTitleFailure } from ".";
import axios from 'axios';
import SERVICE_URL, { UPDATE_IMAGE_TITLE_FAILURE } from '../constants/action-types.js'

export function fetchImages(){
     console.log('in fetch images');
    return dispatch => {
        //console.log('in fetch images 2');
        dispatch(fetchImagesBegin());
        //console.log('in fetch images 3');
        return axios.get('http://localhost:8000/pics').then(
            response =>{
                console.log(response);
                dispatch(fetchImagesSuccess(response.data));
                return response;
            }).catch(error =>{
                dispatch(fetchImagesFailure(error));
                throw error;
            })
    }
}

export function updateImage(image){
    const { selectedImgId, selectedImgTit } = image;
    console.log('in updateImage');
    return dispatch =>{
        dispatch(updateTitleBegin());
        return axios.put('http://localhost:8000/pics/'+selectedImgId, {title:selectedImgTit}).then(
            response =>{
                dispatch(updateTitleSuccess());
                dispatch(getImages());
                return response;

            }).catch(
                error =>{
                    dispatch(updateTitleFailure(error));
                    throw error;

            })
    }
}