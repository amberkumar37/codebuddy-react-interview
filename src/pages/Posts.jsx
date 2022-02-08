import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(data => data?.json())
      .then(val => setPosts([...val.data.posts]));
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {Array.isArray(posts) && posts.length ? (
          posts.map(val => (
            <Col>
              <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title>{`${val.firstName} ${val.lastName}`}</Card.Title>
                  <Card.Text>{val.writeup}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <>LOading...</>
        )}
      </Row>
    </Container>
  );
};

export default Posts;
