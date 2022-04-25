import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchPosts } from "../actions";
import { PostState, IPost, PostsListPageType } from "../AppTypes";
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

class PostsListPage extends React.Component<PostsListPageType> {
    componentDidMount() {
        console.log("________________ componentDidMount __________________");
        this.props.fetchPosts();
        console.log(this.props);
        console.log("________________ componentDidMount END__________________");
    }

    renderList() {
        console.log("________________ renderList __________________");
        console.log(this.props.postsReducer);
        console.log("________________ renderList END__________________");

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
        //return null;
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

//const mapStateToProps = (state: { posts: IPost[] }) => {
//    return { posts: state.posts };
//};

const mapStateToProps = (state: { postsReducer: PostState }) => {
    console.log("________________ mapStateToProps __________________");
    console.log(state);
    console.log("________________ mapStateToProps END__________________");
    return state;
};

export default connect(mapStateToProps, { fetchPosts })(PostsListPage);
