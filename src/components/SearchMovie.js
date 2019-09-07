import React from 'react';
import {MdSearch} from 'react-icons/md';

import './SearchMovie.css';

import {API} from '../config';

const SearchMovie = () => {
	console.log(API)
  return (
    <form className="search-movie">
      <input placeholder="movie name" />
      <div>
        <button type="submit">
          <MdSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchMovie;
