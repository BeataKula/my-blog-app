import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
} from "./actionsTypes";

import { getPosts } from "../apis/jsonPlaceholder";
import { categoryType, DispatchType, PostPayload } from "../AppTypes";

export const fetchPosts: any = () => async (dispatch: DispatchType) => {
    setTimeout(async function () {
        let payload: PostPayload;

        dispatch({
            type: GET_POSTS_REQUEST,
            payload: {
                posts: [],
                status: 0,
                text: "",
                error: false,
                headerMessageText: "",
                messageText: "",
                showMessage: false,
                categoryMessage: "info" as categoryType,
            },
        });

        try {
            let isError = true;
            const response = await getPosts();

            if (response.status === 200) {
                isError = false;
            }

            payload = {
                posts: response.data,
                status: response.status,
                text: response.statusText,
                error: isError,
                headerMessageText: "",
                messageText: "",
                showMessage: false,
                categoryMessage: "info" as categoryType,
            };

            dispatch({ type: GET_POSTS_SUCCESS, payload: payload });
        } catch (error: any) {
            payload = {
                posts: [],
                status: 404,
                text: error.toJSON().message,
                error: true,
                headerMessageText: "We're sorry we can't show you posts!",
                messageText:
                    "An error occurred while loading data: " +
                    error.toJSON().message,
                showMessage: true,
                categoryMessage: "negative",
            };

            dispatch({ type: GET_POSTS_FAIL, payload: payload });
        }
    }, 1000);
};
