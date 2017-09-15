import { combineReducers } from 'redux';
import { photos, photosHasErrored, photosIsLoading } from './photos';

export default combineReducers({
  photos,
  photosHasErrored,
  photosIsLoading
});
