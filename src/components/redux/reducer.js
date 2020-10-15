const { LOGIN_USER, SIGNOUT_USER } = require('./action');

const initialState = {
    userInfo: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: action.payload
            };
        case SIGNOUT_USER:
            return {
                ...state,
                userInfo: {}
            };
        default:
            return state;
    }
};

export default reducer;