import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="mb-0 h1">
            <img
              src="assets\icons\favicon-32x32.png"
              alt="Website Icon"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
            />
            FormuLAD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/driver-standings">Driver Standings</Nav.Link>
              <Nav.Link href="/constructor-standings">Constructor Standings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation