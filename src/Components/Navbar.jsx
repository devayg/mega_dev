// Navbar.js
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import my_logo from "../Images/my-logo-white.png";

const NavBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`navbar ${scrolling ? "scrolling" : ""}`}>
        <Container fluid className="col-lg-11">
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={handleClick}
            className="text-white fw-500 "
          >
            <img
              src={my_logo}
              alt="Megasails"
              className="img-fluid"
              style={{
                width: "auto",
                height: "35px",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNav"
            className="text-white border-white"
          >
            <i class="fa-solid fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto ">
              <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/search?make=HCB"
                className="text-white fw-500 fs-20px "
              >
                Yacht For Sale
              </Nav.Link>
              <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/services"
                className="text-white fw-500 fs-20px "
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/news&events"
                className="text-white fw-500 fs-20px "
              >
                News & Events
              </Nav.Link>
              <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/contact-us"
                className="text-white fw-500 fs-20px "
              >
                Contact Us
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/hcb"
                className="text-white fw-500 "
              >
                <img
                  src="https://americanyachtgroup.com/wp-content/uploads/2022/10/hcb-logo.svg"
                  alt=""
                  width="60"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Nav.Link>
              <Nav.Link
                as={Link}
                onClick={handleClick}
                to="/ikon"
                className="text-white fw-500 "
              >
                <img
                  src="https://ikonboats.com/wp-content/uploads/2023/01/iKon_logo.svg"
                  alt=""
                  width="70"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div
          style={{
            position: "fixed",
            top: "77px",
            right: "-5px",
            zIndex: "10",
          }}
        >
          <Nav className="ms-auto flex-column">
            <Nav.Link
              as={Link}
              onClick={handleClick}
              to="/hcb"
              className="text-white fw-500 gradient-c1 rounded-start-2 mb-2"
            >
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2022/10/hcb-logo.svg"
                alt=""
                width="70"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={handleClick}
              to="/ikon"
              className="text-white fw-500 gradient-c1 rounded-start-2"
            >
              <img
                src="https://ikonboats.com/wp-content/uploads/2023/01/iKon_logo.svg"
                alt=""
                width="70"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
