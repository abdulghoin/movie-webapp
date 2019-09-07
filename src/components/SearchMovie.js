import React, {useState, useEffect} from 'react';
import {MdSearch} from 'react-icons/md';

import './SearchMovie.css';

import {API, APIKEY} from '../config';
import axios from 'axios';

const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();

    axios
      .get(API, {
        params: {
          apikey: APIKEY,
          s: search,
        },
      })
      .then(res => {
        console.log(res);
        const {Search = []} = res.data || {};

        setData(Search);
      });
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

export default SearchMovie;
