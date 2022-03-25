import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom";
import ShowPostByCategory from "../features/ShowPostByCategory";

const CategoriesPost = () => {

  const {category} = useParams();

  return (
    <Container>
      <Row>
        <Col><h1>Category: {category}</h1></Col>
      </Row>
      <Row>
        <Col>
          <ShowPostByCategory category={category}/>
        </Col>
      </Row>
    </Container>
  )
}

export default CategoriesPost;