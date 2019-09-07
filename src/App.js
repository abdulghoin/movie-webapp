import React, {Suspense, lazy} from 'react';

// route implementaion
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// REDUX implementation
import {Provider} from 'react-redux';
import store from './store';

import Loader from './components/Loader';

// Pages
// import MovieList from './pages/MovieList';
const MovieList = lazy(() => import('./pages/MovieList'));
// import MovieDetail from './pages/MovieDetail';
const MovieDetail = lazy(() => import('./pages/MovieDetail'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route path="/:id" component={MovieDetail} />
            <Route path="/" component={MovieList} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
