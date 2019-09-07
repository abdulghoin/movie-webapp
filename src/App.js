import React from 'react';

// route implementaion
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// REDUX implementation
import {Provider} from 'react-redux';
import store from './store';

// Pages
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:id" component={MovieDetail} />
          <Route path="/" component={MovieList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
