import { Navigate } from "react-router-dom";
import {  LOGOUT, LOGIN, SIGNUP } from "../constants";
const reducer = (state={authData: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}}, action) => {
    switch(action.type) {

        case  SIGNUP, LOGIN: {
            localStorage.setItem('user', JSON.stringify(action?.payload?.user));
            localStorage.setItem('token', action?.payload?.token.slice(2));
            console.log('current token', action?.payload?.token.slice(2))
            return {...state, authData: action?.payload?.user}
        }

        case LOGOUT: {
            localStorage.setItem('user', null);
            return {...state, authData: null}
        }
        default: {
            return state;
        }
    }
}
export default reducer;