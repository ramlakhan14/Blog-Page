import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postsActions';
import { Container, Row, Col, Card, Spinner, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const featuredPosts = posts.slice(0, 2);
  const popularPosts = posts.slice(2, 4);
  const recentPosts = posts.slice(4, 7);
  const moreRecent = posts.slice(7, 13);

  return (
    <Container fluid className="my-4">
      <Row>
        <Col md={9}>
          <h5 className="mb-3">📌 Featured This Month</h5>
          <Row>
            {featuredPosts.map((post) => (
              <Col md={6} key={post.id} className="mb-3">
                <Card>
                  <div className="ratio ratio-16x9 bg-light" />
                  <Card.Body>
                    <Link to={`/post/${post.id}`} className="text-decoration-none text-dark">
                      <Card.Title>{post.title}</Card.Title>
                    </Link>
                    <Card.Text>{post.body.slice(0, 80)}...</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <h5 className="mb-3">🔥 Popular Posted</h5>
          {popularPosts.map((post) => (
            <div key={post.id} className="mb-3">
              <Link to={`/post/${post.id}`} className="text-decoration-none">
                <h6>{post.title}</h6>
              </Link>
              <p className="text-muted small">{post.body.slice(0, 60)}...</p>
            </div>
          ))}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={9}>
          <h5 className="mb-3">🆕 Recently Posted</h5>
          {recentPosts.map((post) => (
            <Card className="mb-3" key={post.id}>
              <Card.Body>
                <Link to={`/post/${post.id}`} className="text-decoration-none text-dark">
                  <Card.Title>{post.title}</Card.Title>
                </Link>
                <Card.Text>{post.body.slice(0, 120)}...</Card.Text>
              </Card.Body>
            </Card>
          ))}

          <Card className="text-center my-5 p-5 bg-light">
            <Card.Body>
              <h5>Share Your Knowledge With Our Readers</h5>
              <Button variant="outline-primary" className="mt-2">Write On Notebook</Button>
            </Card.Body>
          </Card>

          <Row>
            {moreRecent.map((post) => (
              <Col md={6} key={post.id} className="mb-3">
                <Card>
                  <div className="ratio ratio-16x9 bg-light" />
                  <Card.Body>
                    <Link to={`/post/${post.id}`} className="text-decoration-none text-dark">
                      <Card.Title>{post.title}</Card.Title>
                    </Link>
                    <Card.Text>{post.body.slice(0, 80)}...</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={3}>
          <h6>👥 Top Authors</h6>
          <ul className="list-unstyled">
            <li>Jenny Koo</li>
            <li>Andreas Ravel</li>
            <li>Ravi Dev</li>
          </ul>

          <Card className="my-4">
            <Card.Body>
              <h6>Want To Travel Sikkim By Car?</h6>
              <p className="text-muted small">Did you search for something in particular or just general filter browsing?</p>
              <Button variant="primary" size="sm">Read More</Button>
            </Card.Body>
          </Card>

          <h6>📂 Categories</h6>
          <ul className="list-unstyled">
            <li>Lifestyle (15)</li>
            <li>Travel (12)</li>
            <li>Food (8)</li>
            <li>Freelance (17)</li>
            <li>Technology (9)</li>
          </ul>

          <h6>📊 Today's Update</h6>
          <ul className="list-unstyled small">
            <li>New Posts: 14</li>
            <li>Total Visitors: 480</li>
            <li>New Subscribers: 29</li>
            <li>Blog Read: 138</li>
          </ul>

          <h6>📷 Instagram Posts</h6>
          <div className="d-flex flex-wrap gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-light ratio ratio-1x1" style={{ width: '30%' }}></div>
            ))}
          </div>

          <h6 className="mt-4">🔖 Search With Tags</h6>
          <div className="d-flex flex-wrap gap-1">
            {['Technology', 'Review', 'Fashion', 'Health', 'UI', 'Design'].map((tag, i) => (
              <Badge key={i} bg="light" text="dark" className="border">{tag}</Badge>
            ))}
          </div>
        </Col>
      </Row>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      )}
    </Container>
  );
};

export default Home;