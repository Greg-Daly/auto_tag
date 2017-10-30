export function openModal(bool, photoUrl) {
    return {
        type: 'OPEN_MODAL',
        modalIsopen: bool
        modalPhoto: photoUrl
    };
}

export function closeModal(bool) {
    return {
        type: 'CLOSE_MODAL',
        hasErrored: bool
    };
}
