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
        this.props.fetchUserById(this.props.userId);
    }

    componentDidUpdate() {
        if (
            !this.props.userReducer.userById.error &&
            !this.props.userReducer.userById.isLoading &&
            this.props.userReducer.userById.data != null &&
            !this.state.isloaded
        ) {
            const user = this.props.userReducer.userById.data.user;

            console.log(this.props.userId);

            this.setState({
                user: {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: {},
                    phone: user.phone,
                    website: user.website,
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
        console.log(this.state.user.id);

        return (
            <>
                <span>{this.state.user.name}</span>
            </>
        );
    }
}

const mapStateToProps = (state: { userReducer: UserState }) => {
    return state;
};

export default connect(mapStateToProps, { fetchUserById })(User);
