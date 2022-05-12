import _ from "lodash";
import { getPosts, getUserById } from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().postsReducer)
        .map("userId")
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async (dispatch) => {
    const response = await getPosts();

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await getUserById(id);

    dispatch({ type: "GET_USERS_BY_ID_SUCCESS", payload: response.data });
};
