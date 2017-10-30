export function tagsHasErrored(state = false, action) {
  switch (action.type) {
    case 'TAGS_HAS_ERRORED':
      return action.tagsHasErrored;

    default:
      return state;
  }
}

export function tagsIsLoading(state = false, action) {
  switch (action.type) {
    case 'TAGS_IS_LOADING':
      return action.tagsIsLoading;

    default:
      return state;
  }
}

export function tags(state = [], action) {
  switch (action.type) {
    case 'TAGS_FETCH_DATA_SUCCESS':
      return action.tags;

    default:
      return state;
  }
}
