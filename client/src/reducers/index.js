import { combineReducers } from 'redux';
import autyhReducer from './authReducer';

export default combineReducers({
    auth: autyhReducer
})