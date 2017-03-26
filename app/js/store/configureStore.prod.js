import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
export default applyMiddleware(thunk);
//import {defaultBackboneMiddleware} from '../middleware/DefaultBackboneMiddleware';
//import {rexBackboneMiddleware} from '../middleware/REXMiddleware';
//export default applyMiddleware(thunk, rexBackboneMiddleware, defaultBackboneMiddleware);


