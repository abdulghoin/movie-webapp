import React from 'react';
import {MdSearch} from 'react-icons/md';

import './SearchMovie.css';

const SearchMovie = () => (
  <form className="search-movie">
    <input placeholder='movie name' />
    <div>
      <button type="submit">
        <MdSearch />
      </button>
    </div>
  </form>
);

export default SearchMovie;
