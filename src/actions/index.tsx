import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "./actionsTypes";

import { getPosts, getUserById } from "../apis/jsonPlaceholder";
import {
    categoryType,
    DispatchType,
    DispatchUserType,
    PostPayload,
    UserPayload,
} from "../AppTypes";

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

export const fetchUserById: any =
    (id: number) => async (dispatch: DispatchUserType) => {
        let payload: UserPayload;

        payload = {
            user: {
                id: id,
                name: "",
                username: "",
                email: "",
                address: {},
                phone: "",
                website: "",
                company: {},
            },
            status: 0,
            error: false,
        };

        dispatch({
            type: GET_USERS_BY_ID_REQUEST,
            payload: payload,
        });

        try {
            let isError = true;
            const response = await getUserById(id);

            if (response.status === 200) {
                isError = false;
            }
            console.log("fetchUserById, getUserById, id: " + id);

            payload = {
                user: {
                    id: id,
                    name: response.data.name,
                    username: response.data.username,
                    email: response.data.email,
                    address: {},
                    phone: response.data.phone,
                    website: "",
                    company: response.data.website,
                },
                status: response.status,
                error: isError,
            };

            dispatch({ type: GET_USERS_BY_ID_SUCCESS, payload: payload });
        } catch (error: any) {
            dispatch({ type: GET_USERS_BY_ID_FAIL, payload: payload });
        }
    };
