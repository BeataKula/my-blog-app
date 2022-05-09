import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    postsReducer: postsReducer,
    usersReducer: usersReducer,
});
