import { fetchImagesBegin, fetchImagesSuccess, fetchImagesFailure } from ".";
import axios from 'axios';
import SERVICE_URL from '../constants/action-types.js'

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