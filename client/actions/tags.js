import axios from 'axios';

export function tagsHasErrored(bool) {
    return {
        type: 'TAGS_HAS_ERRORED',
        tagsHasErrored: bool
    };
}

export function tagsIsLoading(bool) {
    return {
        type: 'TAGS_IS_LOADING',
        tagsIsLoading: bool
    };
}

export function tagsFetchDataSuccess(tags) {
    return {
        type: 'TAGS_FETCH_DATA_SUCCESS',
        tags
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(tagsHasErrored(true));
        }, 5000);
    };
}

export function tagsFetchData(photoURL) {
    return (dispatch) => {
        dispatch(tagsIsLoading(true));

        axios.get('/api/findtags?img_url='+photoURL)
          .then(response => {
            if (response.statusText != "OK") {
                throw Error(response.statusText);
            }
            dispatch(tagsIsLoading(false));
            return response;
          })
          .then((response) => response.data)
          .then((tags) => dispatch(tagsFetchDataSuccess(tags)))
          .catch(error => {
            console.log('Error fetching and parsing data', error);
            dispatch(tagsHasErrored(true));
          });

    };
}
