import {applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
//import {defaultBackboneMiddleware} from '../middleware/DefaultBackboneMiddleware';
//import {rexBackboneMiddleware} from '../middleware/REXMiddleware';


//noinspection JSUnresolvedVariable - resolved in browser with https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default composeEnhancers(
    //applyMiddleware(thunk, reduxImmutableStateInvariant(), rexBackboneMiddleware, defaultBackboneMiddleware)
    applyMiddleware(thunk, reduxImmutableStateInvariant())
);
