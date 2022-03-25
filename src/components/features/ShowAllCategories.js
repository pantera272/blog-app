import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../redux/categoriesReducer";

const ShowAllCategories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <Container style={{textAlign: 'center'}}>
      <Nav className="flex-column">
      {categories.map(category => 
        <Nav.Link key={category} as={NavLink} to={'/categories/' + category}>{category}</Nav.Link>
      )}
      </Nav>
    </Container>  
  )
}

export default ShowAllCategories;