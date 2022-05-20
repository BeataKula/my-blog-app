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
        const allList = this.props.postsReducer.allList;
        if (
            !allList.error &&
            !allList.isLoading &&
            allList.data != null &&
            !this.state.isloaded
        ) {
            this.setState({
                posts: allList.data,
                isloaded: true,
            });
        } else {
            if (allList.error && !this.state.isloaded) {
                this.setState({
                    isloaded: true,
                });
            }
        }
    }

    renderMessage() {
        if (this.state.isloaded) {
            const allList = this.props.postsReducer.allList;
            return (
                <Message
                    showMessage={allList.data.showMessage}
                    category={allList.data.categoryMessage}
                    headerText={allList.data.headerMessageText}
                    text={allList.data.messageText}
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
    return {
        postsReducer: state.postsReducer,
        usersReducer: state.usersReducer,
    };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
