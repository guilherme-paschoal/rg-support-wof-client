import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import api from './middleware/api';
import reducer from './reducers/rootReducer';

const middleware = applyMiddleware(logger, thunk, api);

export default createStore(reducer, middleware);

