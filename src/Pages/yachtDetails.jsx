import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NavBar from "../Components/Navbar";
import SimilarYacht from "../Components/SimilarYacht";
import YachtDetailsContact from "../Components/YachtDetailsContact";
import Express_URL from "../Components/Express_URL";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const YachtDetails = () => {
  const { id } = useParams();

  const [fullScreenView, setFullScreenView] = useState(false);

  // Fetch details based on the document ID (id)
  const [yachts, setYachts] = useState([]);

  console.log(yachts);
  const fetchData = () => {
    let apiUrl = `${Express_URL}/documents/?DocumentID=${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 24);
  });

  const openFullScreenView = () => {
    setFullScreenView(true);
  };

  const closeFullScreenView = () => {
    setFullScreenView(false);
  };

  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <NavBar />
      {yachts.map((yacht) => (
        <div key={yacht.DocumentID}>
          {/* Displaying images and first data */}
          <section
            style={{ backgroundColor: "#eeeeee" }}
            className="py-5 details-banner"
          >
            <Container fluid className="col-lg-11">
              <Row>
                <Col xs={12} lg={4} className="d-flex align-items-center">
                  <div>
                    <h1
                      className="mb-2 hero-h fw-bold"
                      style={{ fontFamily: "Roboto" }}
                    >
                      {yacht.MakeString} {yacht.Model}
                    </h1>
                    <p className="fs-5 fw-bold mb-1">
                      <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                      {yacht.BoatLocation.BoatCityName},{" "}
                      {yacht.BoatLocation.BoatStateCode},{" "}
                      {yacht.BoatLocation.BoatCountryID}
                    </p>
                    <p className="fs-5  mb-1">
                      <i class="fa-solid fa-dollar-sign text-warning"></i>{" "}
                      {yacht.Price ? `$${yacht.Price}` : "Call For Price"}
                    </p>
                    <button
                      type="button"
                      class="btn btn-sm text-white btn-info my-3"
                      onClick={() => openFullScreenView(yacht.Images)}
                    >
                      <i class="fa-solid fa-image"></i> Gallery
                    </button>
                  </div>
                </Col>
                {/* Modal for displaying images in full-screen view */}
                <Modal
                  open={fullScreenView}
                  onClose={closeFullScreenView}
                  center
                  classNames={{
                    modal: "custom-modal",
                  }}
                  closeIcon={
                    <i
                      className="fa-solid fa-times text-warning"
                      style={{
                        zIndex: "10",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    />
                  }
                >
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper details-popup"
                  >
                    {yachts[0].Images.map((image, index) => (
                      <SwiperSlide key={index} className="text-center">
                        <img
                          src={image.Uri}
                          alt={"..."}
                          className="detailed-swiper-popup"
                        />
                      </SwiperSlide>
                    ))}
                    <div
                      className="swiper-button-next"
                      style={{ color: "#E4A11B" }}
                    ></div>
                    <div
                      className="swiper-button-prev"
                      style={{ color: "#E4A11B" }}
                    ></div>
                    <div
                      className="swiper-pagination text-warning"
                      style={{ backgroundColor: "#E4A11B" }}
                    ></div>
                  </Swiper>
                </Modal>
                <Col xs={12} lg={8}>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {yacht.Images.map((image, index) => (
                      <SwiperSlide
                        className="detailed-swiper-slide"
                        key={index}
                      >
                        <img src={image.Uri} alt={"..."} />
                      </SwiperSlide>
                    ))}
                    <div
                      className="swiper-button-next"
                      style={{ color: "#E4A11B" }}
                    ></div>
                    <div
                      className="swiper-button-prev"
                      style={{ color: "#E4A11B" }}
                    ></div>
                    <div
                      className="swiper-pagination"
                      style={{ backgroundColor: "#E4A11B" }}
                    ></div>
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Displaying spec and contact */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <Row className="spec">
                <Col xs={12} lg={6}>
                  <h4 className="fw-bold text-primary-emphasis">
                    Specification Overview
                  </h4>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Year :{" "}
                          </span>
                          {yacht.ModelYear}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Make :{" "}
                          </span>
                          {yacht.MakeString}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            LOA :{" "}
                          </span>
                          {yacht.LengthOverall}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Model :{" "}
                          </span>
                          {yacht.Model}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Name :{" "}
                          </span>
                          {yacht.BoatName}
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="col">
                        <ul>
                          <li>
                            <span class="text-primary-emphasis fs-5 fw-bold">
                              Condition :{" "}
                            </span>
                            {yacht.SaleClassCode}
                          </li>
                          <li>
                            <span class="text-primary-emphasis fs-5 fw-bold">
                              Price :{" "}
                            </span>
                            {yacht.Price ? `$${yacht.Price}` : "Call For Price"}
                          </li>
                          <li>
                            <span class="text-primary-emphasis fs-5 fw-bold">
                              Engines :{" "}
                            </span>
                            {yacht.NumberOfEngines}
                          </li>
                          <li>
                            <span class="text-primary-emphasis fs-5 fw-bold">
                              HP :{" "}
                            </span>
                            {yacht.TotalEnginePowerQuantity}
                          </li>
                          <li>
                            <span class="text-primary-emphasis fs-5 fw-bold">
                              Location :{" "}
                            </span>
                            {yacht.BoatLocation.BoatCityName},{" "}
                            {yacht.BoatLocation.BoatStateCode},{" "}
                            {yacht.BoatLocation.BoatCountryID}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <h4 className="fw-bold text-primary-emphasis">
                    Contact Info
                  </h4>
                  <hr />
                  <YachtDetailsContact yachtId={yacht.DocumentID} />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Displaying Description */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">
                General Description
              </h4>
              <hr />
              <Row className="border-bottom border-1">
                <Col xs={12} md={12} lg={8}>
                  <div className="Featured-scroll-container">
                    {/* Rendering HTML content */}
                    <div
                      className="boat-description"
                      dangerouslySetInnerHTML={{
                        __html: yacht.GeneralBoatDescription,
                      }}
                    />
                    <div
                      className="boat-description"
                      dangerouslySetInnerHTML={{
                        __html: yacht.AdditionalDetailDescription,
                      }}
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={12}
                  lg={4}
                  style={{ backgroundColor: "#eeeeee" }}
                  className="py-5"
                >
                  <div className="text-center">
                    <img
                      src="http://3.20.179.147/src/images/Explore%2065'%20Estrella.gif"
                      alt="..."
                      class="img-fluid mb-3"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/*Disclaimer */}
          <section className="my-5">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">Disclaimer</h4>
              <hr />
              <p className="">
                The Company offers the details of this vessel in good faith but
                cannot guarantee or warrant the accuracy of this information nor
                warrant the condition of the vessel. A buyer should instruct his
                agents, or his surveyors, to investigate such details as the
                buyer desires validated. This vessel is offered subject to prior
                sale, price change, or withdrawal without notice.
              </p>
            </Container>
          </section>

          {/*Similar Yachts For Sale */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">
                Similar Yachts For Sale
              </h4>
              <hr />
              <SimilarYacht />
            </Container>
          </section>
        </div>
      ))}
    </>
  );
};

export default YachtDetails;
