import * as api from './../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: 'AUTH', data });
        history.push(`/${data.result._id}`);
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {

    try {
        await api.signup(formData);
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        await api.forgotPassword(email);
    } catch (error) {
        console.log(error);
    }
}

export const activeLink = (id, history) => async (dispatch) => {
    try {
        const { data } = await api.activeLink(id);
        dispatch({ type: 'AUTH', data });
        history.push(`/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = (data, id, history) => async (dispatch) => {
    try {
        await api.resetPassword(data, id);
        history.push('/auth');
    } catch (error) {
        console.log(error);
    }
}