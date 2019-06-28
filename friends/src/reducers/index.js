import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions";

const initialState = {
    friends: [],
    isLoggingIn: false,
    loginError: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                loginError: ''
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                loginError: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                loginError: 'Login Failed'
            }
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;