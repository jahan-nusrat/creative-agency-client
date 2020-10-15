const { LOGIN_USER, SIGNOUT_USER, SELECTED_SERVICE } = require('./action');

const initialState = {
    userInfo: {},
    service:{}
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
        case SELECTED_SERVICE:
            return{
                ...state,
                service:action.payload
            }
        default:
            return state;
    }
};

export default reducer;