import { combineReducers } from 'redux';
import userReducer from './users';
import generalReducer from './general'
export default combineReducers({
    // posts,
    userReducer,
    generalReducer,
});
