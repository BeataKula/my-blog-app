import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
} from "../actions/actionsTypes";
import { PostAction } from "../AppTypes";

export default (
    state = {
        isLoading: null,
        error: null,
        data: null,
    },
    action: PostAction
) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                allList: {
                    isLoading: true,
                    error: null,
                    data: null,
                },
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                allList: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                },
            };
        case GET_POSTS_FAIL:
            return {
                ...state,
                allList: {
                    isLoading: false,
                    error: true,
                    data: action.payload,
                },
            };
        default:
            return state;
    }
};
