import { Container, Row, Col } from "react-bootstrap";
import ShowAllCategories from "../features/ShowAllCategories";
const Categories = () => {
  return (
    <Container>
      <Row>
        <Col><h1>Categories</h1></Col>  
      </Row>
      <Row>
        <Col>
          <ShowAllCategories />
        </Col>
      </Row>
    </Container>
  )
}

export default Categories;