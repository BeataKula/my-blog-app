import {
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "../actions/actionsTypes";
import { UserAction } from "../AppTypes";

export default (state = [], action: UserAction) => {
    switch (action.type) {
        case GET_USERS_BY_ID_REQUEST:
            return [
                ...state,
                {
                    userById: {
                        isLoading: true,
                        error: true,
                        data: {},
                    },
                },
            ];
        case GET_USERS_BY_ID_SUCCESS:
            return [
                ...state,
                {
                    userById: {
                        isLoading: false,
                        error: false,
                        data: action.payload,
                    },
                },
            ];
        case GET_USERS_BY_ID_FAIL:
            return [
                ...state,
                {
                    userById: {
                        isLoading: false,
                        error: true,
                        data: action.payload,
                    },
                },
            ];
        default:
            return state;
    }
};
