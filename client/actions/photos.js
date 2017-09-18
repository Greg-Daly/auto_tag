import axios from 'axios';

export function photosHasErrored(bool) {
    return {
        type: 'PHOTOS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function photosIsLoading(bool) {
    return {
        type: 'PHOTOS_IS_LOADING',
        isLoading: bool
    };
}

export function photosFetchDataSuccess(photos) {
    return {
        type: 'PHOTOS_FETCH_DATA_SUCCESS',
        photos
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(photosHasErrored(true));
        }, 5000);
    };
}

export function photosFetchData(url) {
    return (dispatch) => {
        dispatch(photosIsLoading(true));

        axios.get(url)
          .then(response => {
            console.log(response);
            if (response.statusText != "OK") {
                throw Error(response.statusText);
            }
            dispatch(photosIsLoading(false));
            return response;
          })
          .then((response) => response.data)
          .then((photos) => dispatch(photosFetchDataSuccess(photos)))
          .catch(error => {
            console.log('Error fetching and parsing data', error);
            dispatch(photosHasErrored(true));
          });
          
    };
}
