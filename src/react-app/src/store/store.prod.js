import { Map } from 'immutable';
import { createStore } from 'redux';
import { reducers } from './reducers';
import { enhancer, createReducer } from './store';


export default function configureStore(initialState = Map()) {
  const store = createStore(
    createReducer(reducers),
    Map().mergeDeep(initialState),
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

  // Return the modified store
  return store;
}
