import React from 'react';

import './MovieList.css';

let movies = [
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
];

movies = [];

const MovieList = () => {
  if (movies.length === 0)
    return (
      <div className="empty">
        <span>Search your movie</span>
      </div>
    );

  return (
    <ul>
      {movies.map(({Title, Year, imdbID, Type, Poster}) => (
        <li key={imdbID}>
          <a href="#">
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
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
