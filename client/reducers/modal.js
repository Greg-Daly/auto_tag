export function openModal(state = false, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.openModal;

    default:
      return state;
  }
}

export function closeModal(state = false, action) {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return action.closeModal;

    default:
      return state;
  }
}
