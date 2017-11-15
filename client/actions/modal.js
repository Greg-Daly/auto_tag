export function modalIsOpen(bool) {
    return {
        type: 'MODAL_IS_OPEN',
        modalIsOpen: bool
    };
}

export function currentPhoto(currentPhoto) {
    return {
        type: 'CURRENT_PHOTO',
        currentPhoto
    };
}

export function toggleModel(bool, photo) {
    return (dispatch) => {
        dispatch(modalIsOpen(bool));
        dispatch(currentPhoto(photo));
    };
}
