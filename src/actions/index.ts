import * as actions from '../types/actionsTypes'

export function getCommentsByIdSuccess(
	commentsById: actions.ICommentCollection
): actions.getCommentsByIdSuccess{
	return {
		type: actions.GET_COMMENTS_BY_ID_SUCCESS,
		commentsById
	}
}

export function saveCommentAction(comment: actions.IComment): actions.saveCommentAction{
	return {
		type: actions.SAVE_COMMENT_ACTION,
		comment
	}
}
export function saveCommentSuccess(comment: actions.IComment): actions.saveCommentSuccess{
	return {
		type: actions.SAVE_COMMENT_SUCCESS,
		comment
	}
}
export function saveCommentsError(
	error: string
): actions.saveCommentError{
	return {
		type: actions.SAVE_COMMENT_ERROR,
		error
	}
}
export function getCommentsAction(): actions.getCommentsAction{
	return {
		type: actions.GET_COMMENTS_ACTION
	}
}
export function getCommentsRequest(): actions.getCommentsRequest {
	return {
		type: actions.GET_COMMENTS_REQUEST
	}
}
export function getCommentsSuccess(
	comments: actions.IComment[]
): actions.getCommentsSuccess{
	return {
		type: actions.GET_COMMENTS_SUCCESS,
		comments
	}
}
export function getCommentsError(
	error: string
): actions.getCommentsError{
	return {
		type: actions.GET_COMMENTS_ERROR,
		error
	}
}

export function getPostsAction(): actions.getPostsAction{
	return {
		type: actions.GET_POSTS_ACTION
	}
}
export function getPostsRequest(): actions.getPostsRequests {
	return {
		type: actions.GET_POSTS_REQUEST
	}
}
export function getPostsSuccess(
	posts: actions.IPost[]
): actions.getPostsSuccess{
	return {
		type: actions.GET_POSTS_SUCCESS,
		posts
	}
}
export function getPostsError(
	error: string
): actions.getPostsError{
	return {
		type: actions.GET_POSTS_ERROR,
		error
	}
}