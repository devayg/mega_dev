import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Express_URL from "../Components/Express_URL";

import Navbar from "../Components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Estrella = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "All";
  const minLength = "62";
  const maxLength = "66";
  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `${Express_URL}/documents/?{start}&rows=${rows}&make=${make}&condition=${conditionParam}&length=${minLength}:${maxLength}|feet`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 5);
  }, [make]);
  return (
    <div style={{ backgroundColor: "#ebf0f7" }}>
      {/* #f4f4f4 */}
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>

      <div>
        <img
          src="http://3.20.179.147/src/images/yachts-for-sale-hero.webp"
          alt=""
          className="img-fluid"
        />
      </div>

      <div>
        <Container fluid className="col-lg-11 py-5">
          <Row className="g-0 ">
            <Col lg={6} className="d-flex flex-column justify-content-center ">
              <div className="text-center">
                <h4 className="mb-3 fw-bold">65 ESTRELLA</h4>
              </div>
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png"
                alt=""
                className="img-fluid"
              />
              {/* https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png */}
              {/* https://hcbyachts.com/wp-content/uploads/2023/05/39A4Z23456-scaled.jpg */}
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <div class="row">
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">Length</h6>
                  <p class="fw-bold">65'0"</p>
                  <hr />
                </div>
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">Beam</h6>
                  <p class="fw-bold">16'0"</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">Weight</h6>
                  <p class="fw-bold">60,000 lbs</p>
                  <hr />
                </div>
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">Fuel Capacity:</h6>
                  <p class="fw-bold">1730 Gallons</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">
                    Livewell Capacity
                  </h6>
                  <p class="fw-bold">2 @ 80 Gallons</p>
                  <hr />
                </div>
                <div class="col-md-6">
                  <h6 class="text-primary-emphasis fw-bold">
                    Freshwater Capacity
                  </h6>
                  <p class="fw-bold">58 Gallons</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h6 class="text-primary-emphasis fw-bold">Engine</h6>
                  <p class="fw-bold">
                    Sextet 450 Mercury, Sextet 600 Mercury, or Quint 425 Yamaha
                  </p>
                  <hr />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-4" style={{ backgroundColor: "white" }}>
        {/* #ebf0f7 */}
        <Container fluid className="col-lg-11  details-banner">
          <h5 class="fw-bold fs-4 lh-sm py-3">MEDIA GALLERY</h5>
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {[
              "https://hcbyachts.com/wp-content/uploads/2021/12/6500000-scaled-1.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/11/65-Teak-Covering-Coaming-Boards.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2018/07/2018-HCY-6500-Estrella-00000375-1800x900-1.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/zxKMWhHY.jpg",
              "https://hcbyachts.com/wp-content/uploads/2021/11/65-Helm-Dining.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/11/65-COCKPIT-COUNTER-TOPS-HIGH-GLOSS-TEAK-scaled-1.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/12/6500001-scaled-1.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0043.jpg",
              "https://hcbyachts.com/wp-content/uploads/2021/11/65-Engine-Room.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/4AJR30NQ.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/zxKMWhHY.jpg",
            ].map((imageSrc, index) => (
              <SwiperSlide key={index} className="detailed-swiper-slide">
                <img src={imageSrc} alt="estrella" />
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
        </Container>
      </div>

      <div className="py-4" style={{ backgroundColor: "white" }}>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-3">
            {/* <Col
              xs={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/05/39A4Z23456-scaled.jpg"
                alt=""
                className="img-fluid"
              />
            </Col> */}
            <Col
              xs={12}
              md={12}
              lg={12}
              className="d-flex flex-column justify-content-center "
            >
              <h4 className="fw-bold">UNMATCHED IN EVERY WAY</h4>
              <p className="fs-18px ">
                Presenting the 65’ Estrella, the world’s largest Mega Center
                Console Yacht™. Combining comfort and styling with unmatched
                versatility, it boasts a vast cockpit, a cabin twice the size of
                others, standard bow and stern thrusters, a 1,730-gallon fuel
                capacity, and customizable seating areas. Explore in luxury.
              </p>
              <div>
                <button
                  className="btn custom-contact-btn fs-18px text-white"
                  type="submit"
                >
                  <i class="fa-solid fa-image"></i> Gallery
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Container fluid className="col-lg-11 py-4">
          <h4 className="fw-bold py-3">65 ESTRELLA INVENTORY</h4>
          <Row className="g-3">
            {yachts.map((yacht, index) => (
              <>
                <Col xs={12} md={6} lg={4}>
                  <div
                    class="card border-0"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                  >
                    <img
                      src={yacht.Images[0].Uri}
                      class="card-img-top"
                      alt="..."
                      loading="lazy"
                      height={"260px"}
                    />
                    <div class="card-body p-2">
                      <div className="text-start">
                        <h5 class="fw-bold mb-1">
                          {yacht.MakeString}{" "}
                          <span className="text-dark">{yacht.Model}</span>
                        </h5>
                      </div>
                      <p class="text-dark mb-0 ">
                        {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                        {yacht.ModelYear} | {yacht.BoatLocation.BoatCityName},{" "}
                        {yacht.BoatLocation.BoatStateCode},{" "}
                        {yacht.BoatLocation.BoatCountryID}
                      </p>
                      <div class="d-flex justify-content-between">
                        <div>
                          <p className="mb-0 fw-bold">
                            {yacht.Price
                              ? `${yacht.Price}`
                              : "$ Call For Price"}
                          </p>
                        </div>
                        <div>
                          <Link
                            to={`/yachtdetails/${yacht.DocumentID}`}
                            className="text-dark fw-bold"
                          >
                            View Details{"  "}
                            <i class="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* Display advertisement after the 3rd card */}
                {index === 2 && (
                  <Col xs={12} md={6} lg={4} key="advertisement">
                    <div
                      class="border-0 py-4 rounded-2 bg-white"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="https://www.megasails.com/home-src/images/Megasaila_iKon-01.gif"
                          alt="Advertisement"
                          height={"305px"} // Adjust the height of the image as needed
                        />
                      </div>
                    </div>
                  </Col>
                )}
              </>
            ))}
          </Row>
          {yachts.length === 0 && (
            <Alert variant="warning">No yachts found.</Alert>
          )}
        </Container>
      </div>

      <div>
        <Container fluid>
          <h5 class="fw-bold fs-4 lh-sm py-3">EXPLORE OTHER HCB MODELS</h5>
          <Row className="g-3">
            <Col xs={12} md={6} lg={3}>
              <img
                class="img-fluid"
                src="https://hcbyachts.com/wp-content/uploads/2021/12/siesta3.jpeg"
                alt="39"
              />
              <Link onClick={handleClick} to={`/39-speciale`}>
                <p class="fw-bold py-2 text-primary-emphasis">39 SPECIALE</p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img
                class="img-fluid"
                src="https://hcbyachts.com/wp-content/uploads/2022/02/s-QfSWeg.jpg"
                alt="48"
              />
              <Link onClick={handleClick} to={`/42-lujo`}>
                <p class="fw-bold py-2 text-primary-emphasis">42 LUJO</p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img
                class="img-fluid"
                src="https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0075.jpg"
                alt="53"
              />
              <Link onClick={handleClick} to={`/48-campeon`}>
                <p class="fw-bold py-2 text-primary-emphasis">48 CAMPEON</p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img
                class="img-fluid"
                src="https://hcbyachts.com/wp-content/uploads/2021/12/6500001-scaled-1.jpeg"
                alt="65"
              />
              <Link onClick={handleClick} to={`/53-suenos`}>
                <p class="fw-bold py-2 text-primary-emphasis">53 SUENOS</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Estrella;
