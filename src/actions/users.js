import * as api from '../api'
import {LOGOUT, LOGIN, SIGNUP, START_LOADING, END_LOADING} from '../constants'

export const loginUser = (user, navigate, enqueueSnackbar) => async (dispatch) => {
    dispatch({type: START_LOADING})
    const data = await api.login(user, dispatch, enqueueSnackbar);
    console.log('current user', data);
    if (data?.data) {
        navigate('/');
    }
    dispatch({type: LOGIN, payload: data?.data});
    
    window.location.reload();
}


export const logoutUser = (navigate) => async (dispatch) => {
    const {data} = await api.logoutUser();
    console.log(data);
    if (data) {
        navigate('/login', {replace: true});
    }
    dispatch({type: LOGOUT});
}


export const signupUser = (user, navigate, enqueueSnackbar) => async (dispatch) => {
    dispatch({type: START_LOADING})
    const {data} = await api.signup(user, dispatch, enqueueSnackbar);
    console.log('current user' ,data);
    if (data) {
        navigate('/');
    }
    dispatch({type: SIGNUP, payload: data});
    window.location.reload();
}
