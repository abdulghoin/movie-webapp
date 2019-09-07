// Action Types
import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from '../actions/actionTypes';

// default state
const initialState = {
  isLoading: false,
  data: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_MOVIE_DETAIL:
      return {...state, isLoading: true};
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {...state, isLoading: false, data: payload};
    default:
      return state;
  }
};
