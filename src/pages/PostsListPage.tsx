import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { IPost, PostsListPageType } from "../AppTypes";
import Post from "../components/Post";

class PostsListPage extends React.Component<PostsListPageType> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        const ListOfPosts = this.props.posts.map((post: IPost) => {
            return <Post key={post["id"]} {...post} />;
        });

        return (
            <>
                <ul className="post-list">{ListOfPosts}</ul>
            </>
        );
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state: { posts: IPost[] }) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsListPage);
