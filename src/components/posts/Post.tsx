import React, { useState, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IPost, IComment } from "../../types/actionsTypes";
import "./PostStyle.css";
import { Button } from "reactstrap";
import { Comment } from "../comments/Comment";
import { AddComment } from "../comments/AddComment";
import { getCommentsByIdSelector } from "../../sagas/selectors";

export interface Props {
  post: IPost;
}
export const Post: FunctionComponent<Props> = (props) => {
  const { post } = props;
  const { body, title, id } = post;
  const comments = useSelector(getCommentsByIdSelector(id));
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="post-container">
      <h1 className="title-post" data-testid="title">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
      <div className="body-post" data-testid="body">
        {body}
      </div>
      {comments && !showMore && (
        <Comment comment={comments[comments.length - 1]} />
      )}

      <div className="list-comments" data-testid="list-comment">
        {comments &&
          comments.length > 1 &&
          showMore &&
          comments.map((value: IComment) => {
            return <Comment comment={value} key={value.id} />;
          })}
      </div>
      <div className="link-showmore" data-testid="link-showmore">
        {comments && comments.length > 1 && (
          <Button
            onClick={() => {
              setShowMore(!showMore);
            }}
            color="link"
          >
            {showMore ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
      <AddComment data-testid="add-comment" postId={id} />
    </div>
  );
};
