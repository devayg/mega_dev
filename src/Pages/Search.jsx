import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Alert,
  Card,
} from "react-bootstrap";
import { makeStringNames } from "../Components/MakeStringCollection";
import { classNames } from "../Components/ClassNameCollections";
import NavBar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Express_URL from "../Components/Express_URL";

function Search() {
  const location = useLocation();
  const initialMake = new URLSearchParams(location.search).get("make") || "All";
  const [yachts, setYachts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [make, setMake] = useState(initialMake);
  const [condition, setCondition] = useState("All");
  const initialClassName =
    new URLSearchParams(location.search).get("className") || "";
  const [className, setClassName] = useState(initialClassName);

  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `${Express_URL}/documents/?start=${start}&rows=${rows}`;

    // Append selected parameters to the API URL
    if (make !== "All") {
      apiUrl += `&make=${make}`;
    }

    if (condition !== "All") {
      apiUrl += `&condition=${conditionParam}`;
    }

    if (className !== "All") {
      apiUrl += `&boatClass=${className}`;
    }

    if (minLength && maxLength) {
      apiUrl += `&length=${minLength}:${maxLength}|feet`;
    }

    if (minYear && maxYear) {
      apiUrl += `&year=${minYear}:${maxYear}`;
    }

    if (minPrice && maxPrice) {
      apiUrl += `&price=${minPrice}:${maxPrice}|USD`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
        setTotalPages(Math.ceil(data.data.numResults / rows));
      })
      .catch((error) => console.error(error));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData(0, 24);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(0, 24);
    setPage(1);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * 24;
    fetchData(start, 24);
    setPage(nextPage);
    handleClick();
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    const start = (prevPage - 1) * 24;
    fetchData(start, 24);
    setPage(prevPage);
    handleClick();
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Display advertisement after every 6 yachts
  const adInterval = 6;
  const advertisementCol = (
    <Col key="advertisement" xs={12}>
      <Card
        className="border-0"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Card.Body className="p-2">
          <Card.Text>
            <div className="text-center">
              {/* Mobile: Display Image 1 */}
              <Row className="d-md-none">
                <Col>
                  <img
                    src="https://tpc.googlesyndication.com/simgad/15743011134259623845"
                    alt="Mobile"
                    className="img-fluid"
                  />
                </Col>
              </Row>

              {/* Tablet: Display Image 2 */}
              <Row className="d-none d-md-flex d-lg-none">
                <Col>
                  <img
                    src="http://3.20.179.147/src/images/Explore%20Travel.gif"
                    alt="Tablet"
                    className="img-fluid"
                  />
                </Col>
              </Row>

              {/* Desktop: Display Image 3 */}
              <Row className="d-none d-lg-flex">
                <Col>
                  <img
                    src="http://3.20.179.147/src/images/Explore%20Travel.gif"
                    alt="Desktop"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <div className="px-2 py-4" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Row className="g-1">
              <Col xs={12} md={4} lg={2}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0">Make</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                      setClassName("All");
                    }}
                  >
                    <option value="All">All</option>
                    {makeStringNames.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Condition</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="All">All</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Class Names</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={className}
                    onChange={(e) => {
                      setClassName(e.target.value);
                      setMake("All");
                    }}
                  >
                    <option value="All">All</option>
                    {classNames.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Length</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Year</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minYear}
                        onChange={(e) => setMinYear(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxYear}
                        onChange={(e) => setMaxYear(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="mb-0">Price</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                className="btn-sm custom-contact-btn p-2 text-white"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i> Advanced Search
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Container fluid className="col-lg-11">
        <Row className="g-3 mt-4">
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
                    loading="lazy"
                    alt="..."
                    height={"260px"}
                  />
                  <div class="card-body p-2">
                    <div className="text-start">
                      <h5 class="fw-bold mb-1">
                        {truncateText(`${yacht.MakeString} `, 15)}{" "}
                        <span className="text-dark">
                          {truncateText(yacht.Model, 12)}
                        </span>
                      </h5>
                    </div>
                    <p class="text-dark mb-0 ">
                      {truncateText(
                        `${yacht.ModelYear} | ${yacht.BoatLocation.BoatCityName}, ${yacht.BoatLocation.BoatStateCode}, ${yacht.BoatLocation.BoatCountryID}`,
                        30
                      )}
                    </p>
                    <div class="d-flex justify-content-between">
                      <div>
                        <p className="mb-0 fw-bold">
                          {yacht.Price ? `${yacht.Price}` : "$ Call For Price"}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/yachtdetails/${yacht.DocumentID}`}
                          className="text-dark fw-bold"
                          onClick={handleClick}
                        >
                          View Details{"  "}
                          <i class="fa-solid fa-angles-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {(index + 1) % adInterval === 0 &&
                index !== yachts.length - 1 &&
                advertisementCol}
            </>
          ))}
        </Row>
        {yachts.length === 0 && (
          <Alert variant="warning">No yachts found.</Alert>
        )}
        <div className="d-flex justify-content-center py-4">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              class="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <i class="fa-solid fa-angles-left"></i> Prev
            </button>
            <button type="button" class="btn custom-contact-btn  p-2 fs-6">
              Page {page} of {totalPages}
            </button>
            <button
              type="button"
              class="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Next <i class="fa-solid fa-angles-right "></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
