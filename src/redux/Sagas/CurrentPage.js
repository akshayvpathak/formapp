import * as ActionTypes from '../ActionTypes/CurrentPage';
import {takeLatest,fork} from 'redux-saga/effects';

function* doNothing(action){
    try{
        //console.log(action);
        //yield put(ActionCreators.addAnswer(action));
    }
    catch(err){
        //console.log(err);
    }
}

export function* incrementpage(){
    takeLatest(ActionTypes.INCREMENT_PAGE_NUMBER,doNothing)
}
export function* decrementpage(){
    takeLatest(ActionTypes.DECREMENT_PAGE_NUMBER,doNothing)
}
export function* setpage(){
    takeLatest(ActionTypes.SET_PAGE_NUMBER,doNothing)
}
export function* CurrentPage() {
    yield fork(incrementpage);
    yield fork(decrementpage);
    yield fork(setpage);
}
