import { createSelector } from "reselect";

import { RootState } from "../reducers/index";

export const getCommentsById = (id: number) => (state: RootState) =>
  state.posts.commentsById[id];

export const getPosts = (state: RootState) => state.posts.posts;

export const getCommentsByIdSelector = createSelector(
  getCommentsById,
  (commentsById) => commentsById
);

export const getPostsSelectors = createSelector(getPosts, (posts) => posts);
