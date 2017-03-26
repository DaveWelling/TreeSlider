import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
    switch (action.type) {
    case types.GET_TOKEN_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_UNNECESSARY:
        return {...state, token: action.token, isAuthenticated: true};
    case types.LOGOUT:
        return {...state, isAuthenticated: false};
    case types.LOGIN_FAILURE:
        return {...state, token: action.error, isAuthenticated: false, loginError: action.error.err || 'There was an error logging in.'};
    case types.PW_RESET_SUCCESS:
        return {...state, resetEmailRequested: true};
    case types.PW_RESET_FAILURE:
        return {...state, resetEmailRequested: true, resetError: action.error.message};
    default:
        return state;
    }
}
