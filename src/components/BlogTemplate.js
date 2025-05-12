import React from 'react';
import { Card } from 'react-bootstrap';

const BlogTemplate = ({ title, body }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card.Body>
  </Card>
);

export default BlogTemplate;
