import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) {
            return <div className="header">Problem z userem!</div>;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    let user = null;

    //console.log("src/components/UserHeader.js/mapStateToProps/state");
    //console.log(state);
    //console.log(ownProps);

    if (state.usersReducer !== undefined) {
        user = state.usersReducer.find((user) => user.id === ownProps.userId);
    }
    return { user };
};

export default connect(mapStateToProps)(UserHeader);
