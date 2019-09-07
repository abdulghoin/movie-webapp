import React, {useState} from 'react';

// redux implementation
import {connect} from 'react-redux';
import {getMovieList} from '../actions';

// Icons
import {MdSearch} from 'react-icons/md';

// Component Style
import './SearchMovie.css';

const SearchMovie = ({getMovieList}) => {
  const [search, setSearch] = useState('');

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    getMovieList({search});
  };

  return (
    <form className="search-movie" onSubmit={onSearch}>
      <input placeholder="movie name" value={search} onChange={onInputChange} />
      <div>
        <button type="submit">
          <MdSearch />
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  {getMovieList},
)(SearchMovie);
