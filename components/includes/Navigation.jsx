
"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ScrollToTop from "react-scroll-to-top";

const Navigation = () => {
  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("name");
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navBtnClass =
    "tw-text-white tw-font-semibold tw-px-5 tw-py-2.5 tw-rounded-full tw-border tw-border-white/50 tw-bg-white/15 hover:tw-bg-white/25 hover:tw-border-white/70 tw-transition-all tw-duration-200 tw-no-underline tw-inline-block tw-shadow-sm hover:tw-shadow-md";

  return (
    <Navbar expand="lg" className="tw-bg-transparent">
      <ScrollToTop smooth />
      <div className="container">
        <Navbar.Brand href="#"><span className="d-none">javapoint.com</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto tw-flex tw-flex-wrap tw-gap-2 tw-items-center">
            <Nav.Link href="#play-section" onClick={handleClick} className={navBtnClass} name="play-section">Play</Nav.Link>
            <Nav.Link href="#sponsor-section" onClick={handleClick} className={navBtnClass} name="sponsor-section">Sponsor</Nav.Link>
            <Nav.Link href="#earn-section" onClick={handleClick} className={navBtnClass} name="earn-section">Earn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation