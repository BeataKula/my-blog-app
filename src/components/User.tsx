import React from "react";
import { connect } from "react-redux";
import { fetchUserById } from "../actions";
import { IUser, UserComponentType, UserState } from "../AppTypes";

class User extends React.Component<
    UserComponentType,
    { user: IUser; isloaded: boolean }
> {
    constructor(props: UserComponentType) {
        super(props);
    }

    state = {
        user: {
            id: this.props.userId,
            name: "",
            username: "",
            email: "",
            address: {},
            phone: "",
            website: "",
            company: {},
        },
        isloaded: false,
    };

    componentDidMount() {
        console.log("componentDidMount");
        console.log("____________________ fetchUserById _______________");
        fetchUserById(this.props.userId);
        console.log("____________________ fetchUserById END _______________");
        console.log(this.props);
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        console.log(this.props);
        console.log(this.state.user);
        if (!this.state.isloaded) {
            this.setState({
                user: {
                    id: this.props.userId,
                    name: "",
                    username: "",
                    email: "",
                    address: {},
                    phone: "",
                    website: "",
                    company: {},
                },
                isloaded: true,
            });
        } else {
            if (this.props.userReducer?.error && !this.state.isloaded) {
                this.setState({
                    isloaded: true,
                });
            }
        }
    }

    render() {
        //console.log(this.props);
        return (
            <>
                <span>User Id: {this.state.user.id}</span>
                <span>User name: {this.state.user.name}</span>
                <span>User phone: {this.state.user.phone}</span>
            </>
        );
    }
}

const mapStateToProps = (state: { userReducer: UserState }) => {
    return state;
};

export default connect(mapStateToProps, { fetchUserById })(User);
