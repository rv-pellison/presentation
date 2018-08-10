import { UPDATE_IMAGE_TITLE_BEGIN, UPDATE_IMAGE_TITLE_FAILURE, UPDATE_IMAGE_TITLE_SUCCESS, ADD_ARTICLE, FETCH_IMAGES_BEGIN, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "../constants/action-types";
const initialState = {
  articles: [],
  image_items: [],
  loadingImages: false,
  loadingPut: false,
  error: null
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case FETCH_IMAGES_BEGIN:
    //console.log('begin:', action.payload);
      return {...state, loadingImages: true, error: null};
    case FETCH_IMAGES_SUCCESS:
    //console.log(action.payload);
      return {...state, loadingImages: false, error: null, image_items: action.payload.images};
    case FETCH_IMAGES_FAILURE:
      return {...state, loadingImages: false, error: action.payload.error}
    case UPDATE_IMAGE_TITLE_BEGIN:
      return {...state, loadingPut: true, error: null};
    case UPDATE_IMAGE_TITLE_SUCCESS:
      return {...state, loadingPut: false, error: null};
    case UPDATE_IMAGE_TITLE_FAILURE:
      return {...state, loadingPut: false, error: action.payload.error};
    default:
      return state;
  }
};
export default rootReducer;