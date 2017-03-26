import {createStore} from 'redux';
import createReducer from '../reducers';

// static store ok because redux uses singleton for all state
let store;
export default function configureStore(initialState) {
  let middleware;

  if (process.env.NODE_ENV === 'production') {
    middleware = require('./configureStore.prod');
  } else {
    middleware = require('./configureStore.dev');
  }

  store = createStore(
      createReducer(),
      initialState,
      middleware.default
  );
  store.asyncReducers = {};
  return store;
}
// TODO: Consider using this approach instead:
// https://github.com/erikras/ducks-modular-redux
// Enables full module lazy loading rather than just
// reducers.
export function injectAsyncReducer(name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}