import { applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { forwardToMain } from './electron-redux';


export const history = createHistory({
  basename: `${process.env.PUBLIC_URL}`, //store.app.base;
});
const staticReducers = {
  router: connectRouter(history),
};

export const middleware = [];
middleware.push(forwardToMain); // IMPORTANT! This goes first // forwardToMain // forwardToMainWithParams()
middleware.push(thunk);
middleware.push(routerMiddleware(history));

let devTools = false;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger').createLogger());
  devTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;
}

export const enhancer = devTools
  ? compose(applyMiddleware(...middleware), devTools)
  : compose(applyMiddleware(...middleware));

export const createReducer = (asyncReducers) => {
  return combineReducers(
    {
      ...staticReducers,
      ...asyncReducers,
    },
    {}
  );
}
