import * as api from '../api'
import {LOGOUT, LOGIN, SIGNUP} from '../constants'
export const loginUser = (user, navigate) => async (dispatch) => {
    const {data} = await api.login(user);
    console.log('current user', data);
    if (data) {
        navigate('/');
    }
    dispatch({type: LOGIN, payload: data});
    // window.location.reload();
}


export const logoutUser = (navigate) => async (dispatch) => {
    const {data} = await api.logoutUser();
    console.log(data);
    if (data) {
        navigate('/login', {replace: true});
    }
    dispatch({type: LOGOUT});
}


export const signupUser = (user, navigate) => async (dispatch) => {
    const {data} = await api.signup(user);
    console.log('current user' ,data);
    if (data) {
        navigate('/');
    }
    dispatch({type: SIGNUP, payload: data});
    // window.location.reload();
}
