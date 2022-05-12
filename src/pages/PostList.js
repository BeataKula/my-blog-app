import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchPostsAndUsers } from "../actions";
import Post from "../components/Post";

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
            console.log("if");
            this.setState({
                posts: this.props.postsReducer.allList.data,
                isloaded: true,
            });
        } else {
            console.log("else");
            if (this.props.postsReducer.allList.error && !this.state.isloaded) {
                this.setState({
                    isloaded: true,
                });
            }
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
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postsReducer: state.postsReducer,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
