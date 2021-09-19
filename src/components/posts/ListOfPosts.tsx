import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction, getPostsAction } from "../../actions";
import { IPost } from "../../types/actionsTypes";
import { Container, Row, Col } from "reactstrap";
import { Post } from "./Post";
import { getPostsSelectors } from "../../sagas/selectors";

export const ListOfPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelectors);

  useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getCommentsAction());
  }, []);
  return (
    <Container>
      {posts.map((value: IPost) => {
        return (
          <Row key={value.id}>
            <Col>
              <Post post={value} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
