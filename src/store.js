import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import applicationReducers from './reducers/applicationReducers';

const middleware = applyMiddleware(logger, thunk, promise);

export default createStore(applicationReducers, middleware);