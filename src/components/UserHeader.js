import { isArray } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { UserByIdResponce } from "../AppTypes";

class UserHeader extends React.Component {
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

const mapStateToProps = (state, ownProps) => {
    let user = null;

    function checkId(user) {
        if (user.userById.data.id === ownProps.userId) {
            return user;
        }
    }

    if (state.usersReducer !== undefined) {
        user = state.usersReducer.find(checkId);
    }
    return { user };
};

export default connect(mapStateToProps)(UserHeader);
