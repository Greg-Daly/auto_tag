import * as PhotoActionTypes from '../actiontypes/photoActions';

const initialState = [];

export defualt function Photo(state=initialState, action){
  switch (action.type) {
    case PlayerActionTypes.LOAD_PHOTOS:
      return [
        ...state,
        {}
      ]
      break;
    default:

  }
}
