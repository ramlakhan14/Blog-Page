

// // src/App.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Container, Row, Col, Navbar, Nav, Table, Tabs, Tab,
//   Card, Button, Form
// } from 'react-bootstrap';

// function App() {
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment('');
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">Note<span className="text-primary">Book.</span></Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse>
//             <Nav className="me-auto">
//               <Nav.Link href="#">Homepages</Nav.Link>
//               <Nav.Link href="#">About</Nav.Link>
//               <Nav.Link href="#">Categories</Nav.Link>
//               <Nav.Link href="#">Pages</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className="my-5">
//         <Row>
//           {/* Main Content */}
//           <Col md={8}>
//             <p className="text-muted">Travel</p>
//             <h2>I Created A Developer Rap Video – Here's What I Learned</h2>
//             <p><small>Jessica Kall | 08 December 2022</small></p>
//             <div className="bg-light mb-4" style={{ height: '300px' }}></div>

//             <p>Did you come here for something in particular or just general Riker-bashing?</p>

//             <Table striped bordered className="my-4">
//               <thead>
//                 <tr>
//                   <th>First</th>
//                   <th>Last</th>
//                   <th>Handle</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td>Row1 Cell1</td><td>Row1 Cell2</td><td>Row1 Cell3</td></tr>
//                 <tr><td>Row2 Cell1</td><td>Row2 Cell2</td><td>Row2 Cell3</td></tr>
//               </tbody>
//             </Table>

//             <blockquote className="blockquote p-3 bg-light">
//               <p className="mb-0"><em>“Did you come here for something in particular or just general Riker-bashing?”</em></p>
//             </blockquote>

//             <h5 className="mt-5">Steps</h5>
//             <Tabs defaultActiveKey="step1" className="mb-3">
//               <Tab eventKey="step1" title="Step 1">
//                 <p>Content for Step 1</p>
//               </Tab>
//               <Tab eventKey="step2" title="Step 2">
//                 <p>Content for Step 2</p>
//               </Tab>
//               <Tab eventKey="step3" title="Step 3">
//                 <p>Content for Step 3</p>
//               </Tab>
//             </Tabs>

//             <h5 className="mt-5">See Related Posts</h5>
//             <Row>
//               {[1, 2].map((_, idx) => (
//                 <Col md={6} key={idx}>
//                   <Card className="mb-3">
//                     <div className="bg-light" style={{ height: '150px' }}></div>
//                     <Card.Body>
//                       <Card.Title>Set Video Playback Speed With Javascript</Card.Title>
//                       <Card.Text><small>Jessica Kall | 3 Min Read</small></Card.Text>
//                       <Card.Text>Did you come here for something in particular or just general Riker-bashing?</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>

//             <h5 className="mt-5">Comments</h5>
//             <Card>
//               <Card.Body>
//                 <Form onSubmit={handleCommentSubmit}>
//                   <Form.Group className="mb-3">
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       placeholder="Leave a comment..."
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Button variant="primary" type="submit">Submit</Button>
//                 </Form>
//                 {comments.length > 0 && (
//                   <div className="mt-4">
//                     <h6>Submitted Comments</h6>
//                     <ul className="list-unstyled">
//                       {comments.map((c, i) => (
//                         <li key={i} className="border-bottom py-2">{c}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Sidebar */}
//           <Col md={4}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Top Authors</Card.Title>
//                 <p>Jenny Kia – Fashion Blogger</p>
//                 <p>Andreas Rasel – Content Creator</p>
//               </Card.Body>
//             </Card>

//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Want To Travel Sikkim By Car?</Card.Title>
//                 <p>Enter your email for updates.</p>
//                 <Form>
//                   <Form.Control type="email" placeholder="Email" className="mb-2" />
//                   <Button variant="primary" type="submit">Subscribe</Button>
//                 </Form>
//               </Card.Body>
//             </Card>

//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Categories</Card.Title>
//                 <ul className="list-unstyled mb-0">
//                   <li>Lifestyle <span className="float-end">60</span></li>
//                   <li>Travel <span className="float-end">82</span></li>
//                   <li>Food <span className="float-end">25</span></li>
//                   <li>Healthcare <span className="float-end">38</span></li>
//                   <li>Technology <span className="float-end">68</span></li>
//                 </ul>
//               </Card.Body>
//             </Card>

//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Today's Update</Card.Title>
//                 <ul className="list-unstyled mb-0">
//                   <li>14 New Posts</li>
//                   <li>480 Total Visitors</li>
//                   <li>29 New Subscribers</li>
//                   <li>138 Blog Read</li>
//                 </ul>
//               </Card.Body>
//             </Card>

//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tags</Card.Title>
//                 <div className="d-flex flex-wrap gap-2">
//                   {['Travel', 'Lifestyle', 'Fashion', 'Technology', 'Design'].map(tag => (
//                     <Button key={tag} variant="outline-secondary" size="sm">{tag}</Button>
//                   ))}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer */}
//       <footer className="bg-light py-4 mt-5">
//         <Container>
//           <Row>
//             <Col md={4}>
//               <h5>NoteBook.</h5>
//               <p>Did you come here for something in particular or just general Riker...</p>
//             </Col>
//             <Col md={4}>
//               <h6>Quick Links</h6>
//               <ul className="list-unstyled">
//                 <li><a href="#">FAQ</a></li>
//                 <li><a href="#">Support</a></li>
//                 <li><a href="#">Privacy Policy</a></li>
//               </ul>
//             </Col>
//             <Col md={4}>
//               <h6>Subscribe</h6>
//               <Form>
//                 <Form.Control type="email" placeholder="Your Email" className="mb-2" />
//                 <Button variant="primary" type="submit">Subscribe</Button>
//               </Form>
//               <div className="mt-2">
//                 <a href="#" className="me-2">Facebook</a>
//                 <a href="#" className="me-2">Twitter</a>
//                 <a href="#">Instagram</a>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/blogs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;

