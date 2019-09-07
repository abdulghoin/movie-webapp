// Action Types
import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
} from '../actions/actionTypes';

// default state
const initialState = {
  isLoading: false,
  search: '',
  page: 0,
  data: [],
  total: 0,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_MOVIE_LIST:
      return {...state, isLoading: true};
    case FETCH_MOVIE_LIST_SUCCESS:
      let {Search: data, totalResults: total, s: search, page} = payload;
      console.log(data, page);
      if (page > 1) data = [...state.data, ...data];
      return {...state, isLoading: false, data, total, search, page};
    default:
      return state;
  }
};
