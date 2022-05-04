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
            id: 0,
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
        /* if (this.props.userId === 1 || this.props.userId === 2) {
            console.log(
                "User, componentDidMount: " +
                    "props.userId: " +
                    this.props.userId +
                    " , state.userId: " +
                    this.state.user.id +
                    " , state.isloaded: " +
                    this.state.isloaded
            );
        }*/
    }

    componentDidUpdate() {
        if (this.props.userId === 1 || this.props.userId === 2) {
            console.log(
                "User, componentDidUpdate START: " +
                    "props.userId: " +
                    this.props.userId +
                    ", props.isLoading:" +
                    this.props.userReducer.userById.isLoading +
                    " , state.userId: " +
                    this.state.user.id +
                    " , state.isloaded: " +
                    this.state.isloaded
            );
        }

        if (
            !this.props.userReducer.userById.error &&
            !this.props.userReducer.userById.isLoading &&
            this.props.userReducer.userById.data != null &&
            //TODO Czemu to nie działa????
            !this.state.isloaded
        ) {
            if (this.props.userId !== this.state.user.id) {
                const user = this.props.userReducer.userById.data.user;
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
                });

                if (this.props.userId === 1 || this.props.userId === 2) {
                    console.log(
                        "User, componentDidUpdate IF (props.userId !== state.user.id): " +
                            "props.userId: " +
                            this.props.userId +
                            ", props.isLoading:" +
                            this.props.userReducer.userById.isLoading +
                            " , state.userId: " +
                            this.state.user.id +
                            " , state.isloaded: " +
                            this.state.isloaded
                    );
                    console.log(user);
                }
            } else {
                if (
                    this.state.user.id !== 0 &&
                    this.props.userId === this.state.user.id
                ) {
                    this.setState({
                        isloaded: true,
                    });
                }
            }

            if (this.props.userId === 1 || this.props.userId === 2) {
                console.log(
                    "User, componentDidUpdate IF " +
                        "props.userId: " +
                        this.props.userId +
                        ", props.isLoading:" +
                        this.props.userReducer.userById.isLoading +
                        " , state.userId: " +
                        this.state.user.id +
                        " , state.isloaded: " +
                        this.state.isloaded
                );
            }
        } else {
            if (this.props.userReducer?.error && !this.state.isloaded) {
                this.setState({
                    isloaded: true,
                });
            }
        }

        if (this.props.userId === 1 || this.props.userId === 2) {
            console.log(
                "User, componentDidUpdate END, " +
                    ", props.userId: " +
                    this.props.userId +
                    ", props.isLoading:" +
                    this.props.userReducer.userById.isLoading +
                    " , state.userId: " +
                    this.state.user.id +
                    " , state.isloaded: " +
                    this.state.isloaded
            );
        }
    }

    render() {
        if (this.state.user.id === 1 || this.props.userId === 2) {
            console.log("User, render state: ");
            console.log(this.state);
        }

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
