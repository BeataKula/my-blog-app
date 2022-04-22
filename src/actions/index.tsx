import jsonPlaceholder from "../apis/jsonPlaceholder";
import { FETCH_POSTS } from "./actionsTypes";
import { DispatchType, PostAction } from "../AppTypes";

export const fetchPosts: any = () => async (dispatch: DispatchType) => {
    const response = await jsonPlaceholder.get("/posts");
    const action: PostAction = {
        type: FETCH_POSTS,
        payload: response.data,
    };

    dispatch(action);
};
