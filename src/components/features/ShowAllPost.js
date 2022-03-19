import { Card, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPost } from "../../redux/postsReducer";

const ShowAllPost = () => {

  const posts = useSelector(getAllPost);

  return (
    <Row>
    {posts.map(post =>(
      <Col key={post.id} md={4} sm={6}>
        <Card style={{marginBottom: '25px'}}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text><b>Author:</b> {post.author}</Card.Text>
            <Card.Text><b>Published:</b> {post.publishedDate}</Card.Text>
            <Card.Text>{post.shortDescription}</Card.Text> 
            <NavLink to={'/post/' + post.id}>
              <Button variant="primary">See more</Button>
            </NavLink>
          </Card.Body>    
        </Card>
      </Col>
      ))}
    </Row>
  )
}

export default ShowAllPost;