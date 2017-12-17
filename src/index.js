import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import App from './containers/App';
import reducer from './reducers'
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import store from "./store";

const middleware = [ thunk, logger ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// registerServiceWorker();
