export const LOGIN_USER = 'LOGIN_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const SELECTED_SERVICE = 'SELECTED_SERVICE';

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

export const selectedService = (info) => {
    return {
        type: SELECTED_SERVICE,
        payload: info
    }
}