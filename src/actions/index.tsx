import jsonPlaceholder from "../apis/jsonPlaceholder";
import { FETCH_POSTS } from "./actionsTypes";
import { DispatchType, PostAction } from "../AppTypes";

export const fetchPosts: any = () => async (dispatch: DispatchType) => {
    setTimeout(async function () {
        console.log("fetchPosts");

        try {
            let isError = true;
            const response = await jsonPlaceholder.get("/posts");

            if (response.status === 200) {
                isError = false;
            }

            const payload = {
                posts: response.data,
                status: response.status,
                text: response.statusText,
                error: isError,
            };
            const action: PostAction = {
                type: FETCH_POSTS,
                payload: payload,
            };

            dispatch(action);
        } catch (error: any) {
            const payload = {
                posts: [],
                status: 404,
                text: error.toJSON().message,
                error: true,
            };

            const action: PostAction = {
                type: FETCH_POSTS,
                payload: payload,
            };

            dispatch(action);
        }
    }, 2000);
};
