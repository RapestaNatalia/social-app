
import * as actions from "../types/actionsTypes";
import { IPost, IComment, ICommentCollection } from '../types/actionsTypes';

export interface PostState{
	posts: IPost[],
	comments: IComment[],
	commentsById: ICommentCollection
}

const initialState: PostState = {
	posts: [],
	comments: [],
	commentsById: {}
}

export default function postReducer (
	state : PostState = initialState,
	action: actions.PostActions
) : PostState{
	switch (action.type) {
		case actions.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts,
				comments: state.comments,
				commentsById: state.commentsById
			}
		case actions.GET_POSTS_ERROR:
			return {
				...state,
				posts: [],
				comments: [],
				commentsById:{}
			}
		case actions.GET_COMMENTS_SUCCESS:
			return {
				...state,
				posts: state.posts,
				comments: action.comments,
				commentsById: {}
		}
		case actions.GET_COMMENTS_ERROR:
			return {
				...state,
				posts: [],
				comments: [],
				commentsById:{}
			}
		case actions.GET_COMMENTS_BY_ID_SUCCESS:
			return {
				...state,
				posts:state.posts,
				comments: state.comments,
				commentsById:action.commentsById
			}
		case actions.SAVE_COMMENT_SUCCESS:
			const comment = action.comment
			const comments = state.comments
			comments.push(comment)
			state.commentsById[comment.postId].push(comment)
			return {
				...state,
				posts:[...state.posts],
				comments: comments,
				commentsById: { ...state.commentsById }
			}
		default:
			return state;
	}
};


