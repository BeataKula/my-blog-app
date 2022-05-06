import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    //TODO - tak nie działa
    //postsReducer: postsReducer,
    posts: postsReducer,
    users: usersReducer,
});
