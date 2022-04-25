export interface IArticle {
    id: number;
    title: string;
    body: string;
}

export type ButtonType = {
    id: string;
    name: string;
    about: "commentPrimary" | "commentHover";
    onClick: () => void;
};

export type LinkProps = {
    to: string;
    className: string;
    children: string;
};

export type LinkPropsWithoutClassName = {
    to: string;
    children: string;
};

export type categoryType = "info" | "positive" | "negative" | "warning";

export type MessageProps = {
    showMessage: boolean;
    category: categoryType;
    headerText: String;
    text: String;
    color: String;
    size: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive";
};

export interface PostsListPageType {
    fetchPosts: FetchPostType;
    postsReducer: {
        posts: IPost[];
        status: number;
    }
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostType = {
    PostType: IPost;
};

export type PostState = {
    posts: IPost[],
    status: number
} 

export type PostAction = {
    type: string;
    //payload: IPost[];
    payload: PostState;
};

export type DispatchType = (args: PostAction) => PostAction;
export type FetchPostType = () => PostState;

export type PostsListPageState = {
    posts: IPost[];
    isloaded: boolean;
    isError: boolean;
    headerMessageText: String;
    messageText: String;
    showMessage: boolean;
    categoryMessage: categoryType;
};
