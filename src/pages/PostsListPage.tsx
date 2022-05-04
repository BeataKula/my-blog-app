/* eslint-disable eqeqeq */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchPosts } from "../actions";
import { IPost, PostsListPageType, PostState } from "../AppTypes";
import Post from "../components/Post";
import Loader from "../components/Loader";
import Message from "../components/Message";
import User from "../components/User";

export const PostsListStyle = styled.ul`
    padding: 15px;
    padding-top: 0px;
    list-style-type: none;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
`;

class PostsListPage extends React.Component<PostsListPageType> {
    state = {
        posts: [],
        isloaded: false,
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate() {
        if (
            !this.props.postsReducer.allPostsList.error &&
            !this.props.postsReducer.allPostsList.isLoading &&
            this.props.postsReducer.allPostsList.data != null &&
            !this.state.isloaded
        ) {
            this.setState({
                posts: this.props.postsReducer.allPostsList.data.posts,
                isloaded: true,
            });
        } else {
            if (
                this.props.postsReducer.allPostsList.error &&
                !this.state.isloaded
            ) {
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
                        this.props.postsReducer.allPostsList.data.showMessage
                    }
                    category={
                        this.props.postsReducer.allPostsList.data
                            .categoryMessage
                    }
                    headerText={
                        this.props.postsReducer.allPostsList.data
                            .headerMessageText
                    }
                    text={this.props.postsReducer.allPostsList.data.messageText}
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

        const ListOfPosts = this.state.posts.map((post: IPost) => {
            const userId: number = post["userId"];
            //console.log("ListOfPosts - userId: " + userId);

            return (
                <>
                    <Post key={post["id"]} {...post} />
                </>
            );
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

const mapStateToProps = (state: { postsReducer: PostState }) => {
    return state;
};

export default connect(mapStateToProps, { fetchPosts })(PostsListPage);
