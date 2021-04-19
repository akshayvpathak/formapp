import {LoginUser} from './LoginUser';
import {CurrentPage} from './CurrentPage';
import {AddAnswer} from './Answers';
import { fork } from 'redux-saga/effects';
export function* rootSaga() {
  yield fork(LoginUser);
  yield fork(AddAnswer);
  yield fork(CurrentPage);
}
