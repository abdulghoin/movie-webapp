import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = applyMiddleware(thunk)(createStore);

export default store(
  reducers,
  window.__REDUX_DEVTOOLS_EXENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
