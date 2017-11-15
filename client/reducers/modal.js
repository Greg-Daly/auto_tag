export function modalIsOpen(state = false, action) {
  switch (action.type) {
    case 'MODAL_IS_OPEN':
      return action.modalIsOpen;

    default:
      return state;
  }
}

export function currentPhoto(state = false, action) {
  switch (action.type) {
    case 'CURRENT_PHOTO':
      return action.currentPhoto;

    default:
      return state;
  }
}
