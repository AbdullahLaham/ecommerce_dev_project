import { Navigate } from "react-router-dom";
import {  LOGOUT, LOGIN, SIGNUP } from "../constants";
const reducer = (state={authData: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}}, action) => {
    switch(action.type) {

        case  SIGNUP, LOGIN: {
            localStorage.setItem('user', JSON.stringify(action?.payload?.user));
            localStorage.setItem('token', action?.payload?.token.slice(action?.payload?.token.indexOf('|')+1));
            localStorage.setItem('tokenNumber', action?.payload?.token.slice(0, action?.payload?.token.indexOf('|')));
            console.log('current token', action?.payload?.token.slice(2))
            return {...state, authData: action?.payload}
        }

        case LOGOUT: {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('tokenNumber');
            return {...state, authData: {}}
        }
        default: {
            return state;
        }
    }
}
export default reducer;