import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ticketera</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#search">Buscador🔎</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;