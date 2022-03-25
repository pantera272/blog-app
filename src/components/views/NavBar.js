import { Navbar, NavbarBrand, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded space-beetwen">
      <Container>
        <NavbarBrand as={NavLink} to="/">Blog app</NavbarBrand>     
        <Nav>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;