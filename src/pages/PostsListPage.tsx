import React, { Component } from "react";
import Loader from "../components/Loader";
import Message, { categoryType } from "../components/Message";
import Post from "../components/Post";

export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type PostsListPageState = {
    posts: PostType[];
    isloaded: boolean;
    isError: boolean;
    headerMessageText: String;
    messageText: String;
    showMessage: boolean;
    categoryMessage: categoryType;
};

class PostsListPage extends Component<{}, PostsListPageState> {
    state = {
        posts: [],
        isloaded: false,
        isError: false,
        headerMessageText: "",
        messageText: "",
        showMessage: false,
        categoryMessage: "info" as categoryType,
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    this.setState({
                        posts: [],
                        isloaded: false,
                        isError: true,
                        headerMessageText:
                            "We're sorry we can't show you Blog!",
                        messageText:
                            "An error occurred while loading data: <br/>" +
                            response.text,
                        showMessage: true,
                        categoryMessage: "negative",
                    });

                    return [];
                }
            })
            .then((json) => {
                this.setState({
                    posts: json,
                    isloaded: true,
                });
            });
    }

    render() {
        const PostsList = this.state.posts.map((post) => {
            return <Post key={post["id"]} {...post} />;
        });

        return (
            <>
                <Loader isActive={!this.state.isloaded} />
                <Message
                    showMessage={this.state.showMessage}
                    category={this.state.categoryMessage}
                    headerText={this.state.headerMessageText}
                    text={this.state.messageText}
                    color="red"
                    size="large"
                />
                <ul className="post-list">{PostsList}</ul>
            </>
        );
    }
}

export default PostsListPage;
