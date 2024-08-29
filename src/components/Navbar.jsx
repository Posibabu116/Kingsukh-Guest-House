import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

const NavigationBar = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=919007062180';

  return (
    <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={HashLink} to="/" className="navbar-brand">Kingfish Guest House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <HashLink smooth to="/home">Home</HashLink>
            <HashLink smooth to="/#about">About</HashLink>
            <HashLink smooth to="/#services">Services</HashLink>
            <HashLink smooth to="/#living-room">Living Room</HashLink>
            <HashLink smooth to="/#gallery">Gallery</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-link ms-5">
              Book Now
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
