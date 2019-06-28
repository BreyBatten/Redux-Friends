import { LOGIN_SUCCESS } from "../actions";

const initialState = {
    friends: [],
    isLoggedIn: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default rootReducer;