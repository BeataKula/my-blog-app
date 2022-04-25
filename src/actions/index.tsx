import jsonPlaceholder from "../apis/jsonPlaceholder";
import { FETCH_POSTS } from "./actionsTypes";
import { DispatchType, PostAction } from "../AppTypes";

export const fetchPosts: any = () => async (dispatch: DispatchType) => {
    const response = await jsonPlaceholder.get("/posts");
    const data = response.data;
    const payload = {
        posts: data,
        status: response.status,
    };
    console.log("fetchPosts: ");
    console.log(payload);
    const action: PostAction = {
        type: FETCH_POSTS,
        //payload: data,
        payload: payload,
    };

    dispatch(action);
};
