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
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        const ListOfPosts = this.props.posts.map((post) => {
            return <Post key={post.id} {...post} />;
        });

        return (
            <>
                <PostsListStyle>{ListOfPosts}</PostsListStyle>
            </>
        );
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
