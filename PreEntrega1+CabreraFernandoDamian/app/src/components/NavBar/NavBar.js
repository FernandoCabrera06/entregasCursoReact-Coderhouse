import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Rocco Alimentos® 🐕</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Perros</Nav.Link>
              <Nav.Link href="#">Aves</Nav.Link>
              <Nav.Link href="#">Gatos</Nav.Link>
              <Nav.Link href="#">Reptiles</Nav.Link>
              <Nav.Link href="#">Peces</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget className="card-widget" />
      </Navbar>
    </>
  );
};

export default NavBar;
