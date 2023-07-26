
"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ScrollToTop from "react-scroll-to-top";

const Navigation = () => {
  const handleClick = (e) => {
    const id = e.target.name;
    const targetDiv = document.getElementById(id);

    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar expand="lg" className="tw-bg-transparent">
      <ScrollToTop smooth />
      <div className='container'>
        <Navbar.Brand href="#"><span className="d-none">javapoint.com</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#play-section" onClick={handleClick} className='tw-text-[#fff!important] tw-font-[500!important]' name="play-section">Play</Nav.Link>
            <Nav.Link href="#sponsor-section" onClick={handleClick} className='tw-text-[#fff!important] tw-font-[500!important]' name="sponsor-section">Sponsor</Nav.Link>
            <Nav.Link href="#earn-section" onClick={handleClick} className='tw-text-[#fff!important] tw-font-[500!important]' name="earn-section">Earn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation