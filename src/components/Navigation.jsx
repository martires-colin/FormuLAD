import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="mb-0 h1">
              <img
                src=".\assets\icons\favicon-32x32.png"
                alt="Website Icon"
                width="30"
                height="30"
                className="d-inline-block align-top mx-2"
              />
              FormuLAD
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <LinkContainer to="/driver-standings">
                <Nav.Link>Driver Standings</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/constructor-standings">
                <Nav.Link>Constructor Standings</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation