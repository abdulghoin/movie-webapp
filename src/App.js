import React from 'react';

// REDUX implementation
import {Provider} from 'react-redux';
import store from './store';

// Pages
import MovieList from './pages/MovieList';

function App() {
  return (
    <Provider store={store}>
      <MovieList />
    </Provider>
  );
}

export default App;
