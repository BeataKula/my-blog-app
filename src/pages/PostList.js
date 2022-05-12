import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchPostsAndUsers } from "../actions";
import Post from "../components/Post";
import Loader from "../components/Loader";
import Message from "../components/Message";

export const PostsListStyle = styled.ul`
    padding: 15px;
    padding-top: 0px;
    list-style-type: none;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
`;

class PostList extends React.Component {
    state = {
        posts: [],
        isloaded: false,
    };

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    componentDidUpdate() {
        if (
            !this.props.postsReducer.allList.error &&
            !this.props.postsReducer.allList.isLoading &&
            this.props.postsReducer.allList.data != null &&
            !this.state.isloaded
        ) {
            this.setState({
                posts: this.props.postsReducer.allList.data,
                isloaded: true,
            });
        } else {
            if (this.props.postsReducer.allList.error && !this.state.isloaded) {
                this.setState({
                    isloaded: true,
                });
            }
        }
    }

    renderMessage() {
        if (this.state.isloaded) {
            return (
                <Message
                    showMessage={
                        this.props.postsReducer.allList.data.showMessage
                    }
                    category={
                        this.props.postsReducer.allList.data.categoryMessage
                    }
                    headerText={
                        this.props.postsReducer.allList.data.headerMessageText
                    }
                    text={this.props.postsReducer.allList.data.messageText}
                    color="red"
                    size="large"
                />
            );
        }
    }

    renderList() {
        if (this.state.posts === []) {
            return <></>;
        }

        //console.log("renderList/ state and props");
        //console.log("state");
        //console.log(this.state);
        //console.log("props");
        //console.log(this.props);

        const ListOfPosts = this.state.posts.map((post) => {
            return <Post key={post["id"]} {...post} />;
        });

        return (
            <>
                <PostsListStyle>{ListOfPosts}</PostsListStyle>
            </>
        );
    }

    render() {
        return (
            <>
                <Loader isActive={!this.state.isloaded} />
                <div className="ui relaxed divided list">
                    {this.renderMessage()}
                    {this.renderList()}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("renderList/ state and props");
    //console.log(state);
    //console.log(state.postsReducer);
    //console.log(state.users);

    return {
        postsReducer: state.postsReducer,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
