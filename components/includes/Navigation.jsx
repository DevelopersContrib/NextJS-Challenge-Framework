"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="tw-bg-transparent">
      <div className='container'>
        <Navbar.Brand href="#"><span className="d-none">javapoint.com</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className='tw-text-[#fff!important] tw-font-[500!important]'>Play</Nav.Link>
            <Nav.Link href="#" className='tw-text-[#fff!important] tw-font-[500!important]'>Sponsor</Nav.Link>
            <Nav.Link href="#" className='tw-text-[#fff!important] tw-font-[500!important]'>Earn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation