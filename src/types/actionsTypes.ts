export interface IPost{
    userId: number,
    id: number,
    title: string,
    body: string
};
export interface IComment{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface ICommentCollection{
    [key:string]:IComment[]
} 

export interface getPostsSuccess {
    type: typeof GET_POSTS_SUCCESS,
    posts: IPost[]
}
export interface getPostsAction{
    type: typeof GET_POSTS_ACTION
}
export interface getPostsRequests{
    type: typeof GET_POSTS_REQUEST
}
export interface getPostsError{
    type: typeof GET_POSTS_ERROR,
    error: string | Error
}

export interface saveCommentSuccess{
    type: typeof SAVE_COMMENT_SUCCESS,
    comment: IComment

}
export interface saveCommentError{
    type: typeof SAVE_COMMENT_ERROR,
    error: string | Error
}
export interface saveCommentAction{
    type: typeof SAVE_COMMENT_ACTION,
    comment: IComment
}

export interface getCommentsByPostSuccess{
    type: typeof GET_COMMENTS_BY_POST_SUCCESS
    comments: IComment[]
}
export interface getCommentsByPostError{
    type: typeof GET_COMMENTS_BY_POST_ERROR,
    error: string | Error
}
export interface getCommentsByPostRequest{
    type: typeof GET_COMMENTS_BY_POST_REQUEST
}
export interface getCommentsByPostAction{
    type: typeof GET_COMMENTS_BY_POST_ACTION,
    id: number
}

export interface getCommentsSuccess{
    type: typeof GET_COMMENTS_SUCCESS,
    comments: IComment[]
}
export interface getCommentsRequest{
    type: typeof GET_COMMENTS_REQUEST
}
export interface getCommentsError{
    type: typeof GET_COMMENTS_ERROR,
    error: string | Error
}
export interface getCommentsAction{
    type: typeof GET_COMMENTS_ACTION
}

export interface getCommentsByIdSuccess{
    type: typeof GET_COMMENTS_BY_ID_SUCCESS,
    commentsById: ICommentCollection
}
export const SAVE_COMMENT_ACTION = 'SAVE_COMMENT_ACTION';
export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_ERROR = 'SAVE_COMMENT_ERROR';

export const GET_COMMENTS_BY_POST_REQUEST = 'GET_COMMENTS_BY_POST_REQUEST'
export const GET_COMMENTS_BY_POST_ERROR = 'GET_COMMENTS_BY_POST_ERROR';
export const GET_COMMENTS_BY_POST_SUCCESS = 'GET_COMMENTS_BY_POST_SUCCESS';
export const GET_COMMENTS_BY_POST_ACTION = 'GET_COMMENTS_BY_POST_ACTION';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUESTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';
export const GET_COMMENTS_ACTION = 'GET_COMMENTS_ACTION';

export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS:';
export const GET_POSTS_ACTION = 'GET_POSTS_ACTION'
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'

export const GET_COMMENTS_BY_ID_SUCCESS= 'GET_COMMENTS_BY_ID_SUCCESS'
export type PostActions =
    | getCommentsAction
    | getCommentsSuccess
    | getCommentsError
    | saveCommentError
    | saveCommentSuccess
    | saveCommentAction
    | getCommentsByPostRequest
    | getCommentsByPostAction
    | getCommentsByPostSuccess
    | getCommentsByPostError
    | getPostsAction
    | getPostsRequests
    | getPostsSuccess
    | getPostsError
    | getCommentsByIdSuccess