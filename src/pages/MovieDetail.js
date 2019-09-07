import React, {useState, useEffect} from 'react';

// route link
import {Link} from 'react-router-dom';

// redux implementation
import {connect} from 'react-redux';
import {getMovieDetail} from '../actions';

// Component Style
import './MovieDetail.css';

import Loader from '../components/Loader';
import {Dialog} from '@material-ui/core';
import {IoIosArrowBack} from 'react-icons/io';

const MovieDetail = ({
  match: {
    params: {id},
  },
  getMovieDetail,
  movieDetail,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {isLoading, data} = movieDetail;

  useEffect(() => getMovieDetail(id), [id]);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  if (isLoading) return <Loader />;

  const {
    Poster,
    Title,
    Production,
    Plot,
    Type,
    Released,
    Runtime,
    Language,
    Country,
    Rated,
    imdbRating,
    imdbVotes,
    Genre,
    Director,
    Writer,
    Actors,
    Awards,
  } = data || {};
  const list = {
    Type,
    Released,
    Runtime,
    Language,
    Country,
    Rated,
    'imdb Rating': imdbRating,
    'imdb Votes': imdbVotes,
  };
  const longList = {Genre, Director, Writer, Actors, Awards};
  return (
    <section className="movie-detail">
      <Link to="/" className="back">
        <span>
          <IoIosArrowBack />
        </span>
        <span>Back</span>
      </Link>
      <div className="top">
        <div className="poster-img">
          <img src={Poster} alt={Title} onClick={toggleDialog} />
        </div>
        <div className="top-right">
          <div>
            <h4 className="title">{Title}</h4>
            <h5 className="sub-title">{Production}</h5>
          </div>

          {renderList({list, listClass: 'short-list top'})}

          <p>{Plot}</p>
        </div>
      </div>

      {renderList({list, listClass: 'short-list bottom'})}

      {renderList({list: longList, listClass: 'long-list'})}

      <Dialog onClose={toggleDialog} open={isDialogOpen}>
        <img src={Poster} alt={Title} />
      </Dialog>
    </section>
  );
};

const renderList = ({list, listClass}) => (
  <ul className={listClass}>
    {Object.keys(list).map(k => (
      <li key={k}>
        <b className="list-title">{k}</b>
        <p>{list[k]}</p>
      </li>
    ))}
  </ul>
);

export default connect(
  ({movieDetail}) => ({movieDetail}),
  {getMovieDetail},
)(MovieDetail);
