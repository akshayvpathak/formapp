import * as ActionTypes from '../ActionTypes/LoginUser';

export const loginUser = (user,history) =>({
    type: ActionTypes.LOGIN_USER,
    payload: user,
    history: history
})

export const loginUserSuccess = (user) => ({
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: user,
})

export const loginUserFailure = (error) =>({
    type: ActionTypes.LOGIN_USER_FAILURE,
    payload: error
})