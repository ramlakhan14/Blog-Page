import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/postsActions'; // Assuming you have this action

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();

  const initialValues = { comment: '' };
  const validationSchema = Yup.object({
    comment: Yup.string().required('Comment is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newComment = {
      id: Date.now(),
      body: values.comment,
      user: { username: 'Anonymous' },
    };
    dispatch(addComment(newComment));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <BootstrapForm.Group className="mb-3">
          <Field as="textarea" name="comment" className="form-control" placeholder="Leave a comment..." />
          <ErrorMessage name="comment" component="div" className="text-danger" />
        </BootstrapForm.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Formik>
  );
};

export default CommentForm;
