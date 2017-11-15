import { combineReducers } from 'redux';
import { photos, photosHasErrored, photosIsLoading } from './photos';
import { tags, tagsHasErrored, tagsIsLoading } from './tags';
import { modalIsOpen, currentPhoto } from './modal';

export default combineReducers({
  photos,
  photosHasErrored,
  photosIsLoading,
  tags,
  tagsHasErrored,
  tagsIsLoading,
  modalIsOpen,
  currentPhoto
});
