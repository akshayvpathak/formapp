import * as ActionTypes from '../ActionTypes/Answers';
import * as ActionCreators from '../ActionCreators/Answers';
import {call, put,takeLatest} from 'redux-saga/effects';

function* createAnswer(action){
    try{
        console.log(action);
        //yield put(ActionCreators.addAnswer(action));
    }
    catch(err){
        console.log(err);
    }
}

export function* AddAnswer() {
    yield takeLatest(ActionTypes.ADD_ANSWER, createAnswer)
}
