import React from 'react';

// redux implementation
import {connect} from 'react-redux';
import {getMovieList} from '../actions';

// route link
import {Link} from 'react-router-dom';

// Component Style
import './MovieList.css';

import Loader from './Loader';

const MovieList = ({movieList, getMovieList}) => {
  const {data: movies, search, page, total, isLoading} = movieList;

  const onLoadMore = () => getMovieList({search, page: page + 1});

  if (page < 1 && isLoading) return <Loader />;

  if (movies.length === 0)
    return (
      <div className="empty">
        <span>Search your movie</span>
      </div>
    );

  return (
    <ul>
      {movies.map(({Title, Year, imdbID: id, Type, Poster}) => (
        <li key={id}>
          <Link to={`/${id}`}>
            <div className="poster">
              <img src={Poster} alt={Title} />
            </div>
            <div className="text">
              <div>
                <h4 className="title">{Title}</h4>
                <p>{Type}</p>
              </div>
              <p>{Year}</p>
            </div>
          </Link>
        </li>
      ))}
      {movies.length < total && (
        <li className="load-more" onClick={onLoadMore}>
          {isLoading ? <Loader /> : <span>more</span>}
        </li>
      )}
    </ul>
  );
};

export default connect(
  ({movieList}) => ({movieList}),
  {getMovieList},
)(MovieList);
