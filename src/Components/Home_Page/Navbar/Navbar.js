import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../../App'
function NavScrollExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Computer Study</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">signup</Nav.Link>
            <Nav.Link href="#action2">login</Nav.Link>
            <NavDropdown title="MCQ" id="navbarScrollingDropdown" className="homelink">
              <NavDropdown.Item href="/#/msword" className="link">MS Word</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Excel</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Powerpoint</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Access</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">Computer Networking</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">DataBase</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">Computer Fundamental</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Access</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              logout 
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;