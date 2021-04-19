import {combineReducers} from 'redux'
import { LoginUser } from "./LoginUser";
import {CurrentPage} from './CurrentPage';
import {Answers} from './Answers';
const reducer = combineReducers({
    LoginUser: LoginUser,
    CurrentPage: CurrentPage,
    Answers:Answers
});
  
  
export default reducer;