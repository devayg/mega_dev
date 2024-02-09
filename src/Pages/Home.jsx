import React from "react";
import Navbar from "../Components/Navbar";
import HomeHCB from "../Components/HomeHCB";
//import HomeIKON from "../Components/HomeIKON";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../Components/PopUP";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Navbar />
      <Popup />
      <div>
        {/* HCB Content  */}
        <HomeHCB />
        {/* IKON Content  */}
        {/* <HomeIKON /> */}
      </div>
      <section>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-0">
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://www.megasails.com/images/ikon2023-3.webp"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link to={`/ikon`} className="text-white fs-5">
                    <h2>FISHING BOATS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/93/93/8079393_20211022103127672_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Catamaran`}
                    className="text-white fs-5"
                  >
                    <h2>CATAMARANS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/4/52/9090452_20231116171616857_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link to={`/search?make=HCB`} className="text-white fs-5">
                    <h2>HCB YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/40/72/9134072_20231130084733155_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Center Consoles`}
                    className="text-white fs-5"
                  >
                    <h2>CENTER CONSOLE</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/81/99/9018199_950373073_0_280820230947_0.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?className=Motor Yachts`}
                    className="text-white fs-5"
                  >
                    <h2>MOTOR YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/7/33/8660733_20230120054239615_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/search?make=Sailfish`}
                    className="text-white fs-5"
                  >
                    <h2>SAILFISH</h2>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="container-fluid col-lg-11 py-5">
        <div class="col-lg-12 hr-line">
          <div class="d-flex justify-content-start">
            <h5 className="text-dark fw-bold ">Our Yacht Services</h5>
          </div>
        </div>
        <div class="row mt-3 g-2">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-handshake"></i> Brokerage
              </h5>
              <p class="mb-1">
                With AYG: Experience Your premier yacht brokerage for seamless
                buying and selling.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-money-bill"></i> Financing
              </h5>
              <p class="mb-1">
                AYG secures flexible yacht financing through premier financial
                partnerships for you.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-shield-alt"></i> Insurance
              </h5>
              <p class="mb-1">
                Insure your yacht seamlessly with tailored marine insurance from
                AYG Broker.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-truck"></i> Transportation
              </h5>
              <p class="mb-1">
                We offers expert Yacht Transportation: land or water, your
                choice.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-wind"></i> Hurricane Storage
              </h5>
              <p class="mb-1">
                Secure yacht hurricane storage available at AYG. Reserve your
                space!
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-exchange-alt"></i> Trade-In
              </h5>
              <p class="mb-1">
                Effortless yacht upgrade: trade-in your boat for a better
                vessel.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services#trade-in`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
