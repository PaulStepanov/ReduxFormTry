import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'reducers';
import logger from 'redux-logger';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, logger)
);

export default store;
