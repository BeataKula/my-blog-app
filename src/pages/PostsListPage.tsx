/* eslint-disable eqeqeq */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchPosts } from "../actions";
import { PostState, IPost, PostsListPageType, categoryType } from "../AppTypes";
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

class PostsListPage extends React.Component<PostsListPageType> {
    state = {
        isloaded: false,
        isError: false,
        headerMessageText: "",
        messageText: "",
        showMessage: false,
        categoryMessage: "info" as categoryType,
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate() {
        console.log(this.props.postsReducer);

        if (this.props.postsReducer.error === true && !this.state.isloaded) {
            this.setState({
                isloaded: true,
                isError: true,
                headerMessageText: "We're sorry we can't show you Blog!",
                messageText:
                    "An error occurred while loading data: " +
                    this.props.postsReducer.text,
                showMessage: true,
                categoryMessage: "negative",
            });
        } else {
            if (
                this.props.postsReducer.status === 200 &&
                !this.state.isloaded
            ) {
                this.setState({
                    isloaded: true,
                });
            }
        }
    }

    renderList() {
        if (!this.props.postsReducer.posts) {
            return <></>;
        }

        const ListOfPosts = this.props.postsReducer.posts.map((post: IPost) => {
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
                    <Message
                        showMessage={this.state.showMessage}
                        category={this.state.categoryMessage}
                        headerText={this.state.headerMessageText}
                        text={this.state.messageText}
                        color="red"
                        size="large"
                    />
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
