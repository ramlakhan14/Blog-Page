import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import { fetchPostDetail, fetchComments } from '../redux/actions/postsActions'; // Assuming you have these actions

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postDetail, comments, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostDetail(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!postDetail) return <div>Post not found</div>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{postDetail.title}</Card.Title>
          <Card.Text>{postDetail.body}</Card.Text>
        </Card.Body>
      </Card>
      <h5 className="mt-4">Comments</h5>
      {comments.map((comment) => (
        <Card key={comment.id} className="mb-2">
          <Card.Body>
            <Card.Text>{comment.body}</Card.Text>
            <Card.Subtitle className="text-muted">- {comment.user.username}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
      <CommentForm postId={id} />
    </Container>
  );
};

export default BlogDetail;
