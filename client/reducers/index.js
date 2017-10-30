import { combineReducers } from 'redux';
import { photos, photosHasErrored, photosIsLoading } from './photos';
import { tags, tagsHasErrored, tagsIsLoading } from './tags';
import { openModal, closeModal } from './modal';

export default combineReducers({
  photos,
  photosHasErrored,
  photosIsLoading,
  tags,
  tagsHasErrored,
  tagsIsLoading,
  openModal,
  closeModal
});
