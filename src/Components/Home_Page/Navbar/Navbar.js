import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import app_icon  from '../../../Assets/utils/images/app_icon.png'

function NavScrollExample() {
    const [value, setValue] = useState(true);
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={app_icon}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Brand href="#" style={{color:'white'}}>Exam Study</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/examstudy/#/translate" style={{color:'white'}}>Translate</Nav.Link>

            {/* भारत के प्रशन */}

            <NavDropdown title="India" id="navbarScrollingDropdown" className="homelink">
              <NavDropdown.Item href="/examstudy/#/india_gk" className="link">भारत का इतिहास</NavDropdown.Item>
              <NavDropdown.Item href="/examstudy/#/msword" className="link">भारत का भूगोल</NavDropdown.Item>
              <NavDropdown.Item href="/examstudy/#/india_gknotes" className="link">भारत की राजनीतिक अर्थव्यवस्था</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">भारतीय संविधान</NavDropdown.Item>
              <NavDropdown.Item href="/examstudy/#/india_knowledge" className="link">अन्य भारत के बारे में</NavDropdown.Item>
              <NavDropdown.Divider />
              <Nav.Link href="/examstudy/#/india_gknotes" style={{fontSize:'14px'}}>
                अन्य महत्वपूरण् तथ्य
                </Nav.Link>
            </NavDropdown>

            {/* हिमाचल के प्रशन */}

            <NavDropdown title="Himachal" id="navbarScrollingDropdown" className="homelink">
                <NavDropdown.Item href="/examstudy/#/himachal_gk" className="link">हिमाचल प्रदेश</NavDropdown.Item>
                <NavDropdown.Divider />
                <Nav.Link href="#" style={{fontSize:'14px'}}>
                अन्य महत्वपूरण तथ्य
                </Nav.Link>
            </NavDropdown>

            {/* कंप्युटर के प्रशन */}

            <NavDropdown title="Computer" id="navbarScrollingDropdown" className="homelink">
              <NavDropdown.Item href="/examstudy/#/msword" className="link">MS Word</NavDropdown.Item>
              <NavDropdown.Item href="/examstudy/#/msword" className="link">MS Excel</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Powerpoint</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Access</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">Computer Networking</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">DataBase</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">Computer Fundamental</NavDropdown.Item>
              <NavDropdown.Item href="/#/msword" className="link">MS Access</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
            

            
            <Nav.Link href="/examstudy/#/dashboard" onClick={() => setValue(false)} className="homelink" style={{color:'white'}}>
              login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor:'lightgreen'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;