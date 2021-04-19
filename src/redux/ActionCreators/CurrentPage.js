import * as ActionTypes from '../ActionTypes/CurrentPage';

export const incrementPageNumber = () => ({
    type: ActionTypes.INCREMENT_PAGE_NUMBER
})

export const decrementPageNumber = () => ({
    type: ActionTypes.DECREMENT_PAGE_NUMBER
})

export const setPageNumber = (page) => ({
    type: ActionTypes.SET_PAGE_NUMBER,
    payload: page
})