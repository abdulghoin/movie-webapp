// Integration w API
import {API, APIKEY} from '../config';
import axios from 'axios';

// Action Types
import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './actionTypes';

const fetchMovieList = () => ({type: FETCH_MOVIE_LIST});

const fetchMovieListSuccess = data => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload: data,
});

export const getMovieList = ({search: s = '', page = 1}) => dispatch => {
  dispatch(fetchMovieList());

  axios
    .get(API, {
      params: {
        apikey: APIKEY,
        s,
        page,
      },
    })
    .then(({data}) => {
      console.log(data);
      data = {...data, s, page};
      dispatch(fetchMovieListSuccess(data));
    });
};

const fetchMovieDetail = () => ({type: FETCH_MOVIE_DETAIL});

const fetchMovieDetailSuccess = data => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload: data,
});

export const getMovieDetail = id => dispatch => {
  dispatch(fetchMovieDetail());

  axios
    .get(API, {params: {apikey: APIKEY, i: id}})
    .then(({data}) => dispatch(fetchMovieDetailSuccess(data)));
};
