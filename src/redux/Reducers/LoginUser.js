import * as ActionTypes from '../ActionTypes/LoginUser';

export const LoginUser = (
    state = {
        isFetching: false,
        users: [],
        error: null,
        isAuthenticated: false
    }, action
) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                users: action.payload,
                isFetching: false,
                error: null
            };
        case ActionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                    error: action.payload,
                    isFetching: false,
            }
            default:
                return state
    }
}