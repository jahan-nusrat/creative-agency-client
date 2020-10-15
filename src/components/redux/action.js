export const LOGIN_USER = 'LOGIN_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const loggedInUser = (info) => {
    return {
        type: LOGIN_USER,
        payload: info
    };
};

export const signedOutUser = () => {
    return {
        type: SIGNOUT_USER
    };
};