const { applyMiddleware, compose, combineReducers } = require('redux');
//const thunk = require('redux-thunk');
const createHistory = require('history').createMemoryHistory;
//const createHistory = require('history').createBrowserHistory;
//const { connectRouter, routerMiddleware } = require('connected-react-router');
const { forwardToRenderer, triggerAlias } = require('electron-redux');


const history = createHistory({
  //basename: `${process.env.PUBLIC_URL}`, //store.app.base;
});
module.exports.history = history;

const staticReducers = {
  //router: connectRouter(history),
};

const middleware = [];
module.exports.middleware = middleware;
//middleware.push(triggerAlias); // optional, see below
//middleware.push(thunk); // optional, see below

//middleware.push(routerMiddleware(history));

let devTools = false;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger').createLogger());
  //devTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
  //  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //  : null;
}


middleware.push(forwardToRenderer); // IMPORTANT! This goes last
const enhancer = devTools
  ? compose(applyMiddleware(...middleware), devTools)
  : compose(applyMiddleware(...middleware));
module.exports.enhancer = enhancer;

const createReducer = (asyncReducers) => {
  return combineReducers(
    {
      ...staticReducers,
      ...asyncReducers,
    },
    {}
  );
}
module.exports.createReducer = createReducer;
