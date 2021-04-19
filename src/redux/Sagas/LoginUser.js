import * as ActionTypes from '../ActionTypes/LoginUser';
import * as ActionCreators from '../ActionCreators/LoginUser';
import {call, put,takeLatest} from 'redux-saga/effects';
import { AsyncStorage,Platform } from 'react-native';

async function storeToken(refreshtoken,token){
  if(Platform.OS === 'web'){
    localStorage.setItem('refreshtoken',refreshtoken);
    localStorage.setItem('token',token);
  }
  else{
    await AsyncStorage.setItem(
      'refreshtoken',
      refreshtoken
    );
    await AsyncStorage.setItem(
      'token',
      token
    );
  }
 
}
import axios from 'axios';
function* createUser(action) {
    try {
      let users = yield call(() => axios.post('https://questionanswerapplication.herokuapp.com/user/login',action.payload));
      yield put(ActionCreators.loginUserSuccess(users.data));
      storeToken(users.data.refreshtoken,users.data.token);
      action.history.navigate('Home');
    } catch (error) {
      error.message = 'Username Or Password Is Incorrect';
      yield put(ActionCreators.loginUserFailure(error.message))
    }
}
export function* LoginUser() {
    yield takeLatest(ActionTypes.LOGIN_USER, createUser)
}