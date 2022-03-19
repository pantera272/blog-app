import { Container, Row, Col } from "react-bootstrap"
import AddPostForm from "../features/AddPostForm";

const PostAdd = () => {
  return (
    <Container style={{width: "500px"}}>
      <Row>
        <Col><h1>Add post</h1></Col>
      </Row>
      <Row>
        <Col>
          <AddPostForm />
        </Col>
      </Row>
    </Container>
  )
}

export default PostAdd;