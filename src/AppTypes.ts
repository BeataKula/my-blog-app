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

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostPayload = {
    posts: IPost[],
    status: number,
    text: string;
    error: boolean,
    headerMessageText: string,
    messageText: string,
    showMessage: boolean,
    categoryMessage: categoryType,
};

export type PostState = {
    isLoading: boolean,
    error: boolean,
    allList: {
        isLoading: boolean,
        error: boolean,
        data: PostPayload;
    }
} 

export type PostAction = {
    type: string;
    payload: PostPayload;
};

export interface PostsListPageType {
    fetchPosts: FetchPostType;
    postsReducer: PostState;
}

export type DispatchType = (args: PostAction) => PostAction;
export type FetchPostType = () => PostPayload;
