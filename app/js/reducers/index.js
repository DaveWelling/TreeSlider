import {combineReducers} from 'redux';
import login from './loginReducer';

export default function createReducer(asyncReducers) {
    //noinspection Eslint
    return combineReducers({
        login,
        ...asyncReducers
    });
}
