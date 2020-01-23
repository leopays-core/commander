import { createStore } from 'redux';
import { reducers } from './reducers';
import { enhancer, createReducer } from './store';
//import { replayActionRenderer, getInitialStateRenderer } from '../electron-redux';


//const initialState = getInitialStateRenderer();

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(reducers),
    initialState,
    enhancer
  );

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  }

  //replayActionRenderer(store);
  // Return the modified store
  return store;
}
