import { getCommentsService, getPostsService } from "../api";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../types/actionsTypes";
import * as actions_creators from "../actions";

export function* getComments() {
  try {
    yield put(actions_creators.getCommentsRequest());

    const result: actions.IComment[] = yield call(getCommentsService);
    yield put(actions_creators.getCommentsSuccess(result));
    let dict: actions.ICommentCollection = {};
    result.forEach((e) => {
      if (Object.keys(dict).includes(e.postId.toString())) {
        dict[e.postId.toString()].push(e);
      } else {
        dict[e.postId.toString()] = [e];
      }
    });

    yield put(actions_creators.getCommentsByIdSuccess(dict));
  } catch (e) {
    yield put(
      actions_creators.getCommentsError(
        "Ha ocurrido un error al traer los comentarios."
      )
    );
  }
}

export function* getPosts() {
  try {
    yield put(actions_creators.getPostsRequest());
    const result: actions.IPost[] = yield call(getPostsService);
    yield put(actions_creators.getPostsSuccess(result));
  } catch (e) {
    yield put(
      actions_creators.getPostsError("Ha ocurrido un error al traer los posts.")
    );
  }
}

export function* saveComment({ comment }: actions.saveCommentAction) {
  try {
    yield put(actions_creators.saveCommentSuccess(comment));
  } catch (e) {
    yield put(
      actions_creators.saveCommentsError(
        "Ha ocurrido un error al guardar el comentario."
      )
    );
  }
}

export function* postSagas() {
  yield takeLatest(actions.SAVE_COMMENT_ACTION, saveComment);
  yield takeLatest(actions.GET_POSTS_ACTION, getPosts);
  yield takeLatest(actions.GET_COMMENTS_ACTION, getComments);
}
