import React from "react";
import { connect } from "react-redux";
import { PostState, UserByIdResponce, UserHeaderType } from "../AppTypes";

//TODO add type
//class UserHeader extends React.Component<UserHeaderType> {
class UserHeader extends React.Component<any> {
    render() {
        if (
            this.props.user !== undefined &&
            this.props.user.userById !== undefined &&
            this.props.user.userById.data !== undefined
        ) {
            const user = this.props.user.userById.data;
            return <div className="header">{user.name}</div>;
        } else {
            return <div className="header">Problem z userem!</div>;
        }
    }
}

const mapStateToProps = (
    state: {
        postsReducer: PostState;
        usersReducer: [];
    },
    props: {
        userId: number;
        user: {
            userById: UserByIdResponce;
        };
    }
) => {
    let user = null;
    let postsReducer = state.postsReducer;
    let usersReducer = state.usersReducer;

    function checkId(user: { userById: UserByIdResponce }) {
        if (user.userById.data.id === props.userId) {
            return user;
        }
    }

    if (state.usersReducer !== undefined) {
        user = state.usersReducer.find(checkId);
    }
    return { user, postsReducer, usersReducer };
};

export default connect(mapStateToProps)(UserHeader);
