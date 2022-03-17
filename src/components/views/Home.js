import { Button, Container, Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShowAllPost from "../features/ShowAllPost";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col><h1>All Posts</h1></Col>
        <Col style={{textAlign:'end'}}>
          <NavLink to='/post/add'>
            <Button variant="outline-primary">Add Post</Button>
          </NavLink>
        </Col>
      </Row>
      <ShowAllPost />
    </Container>
  )
}

export default Home;