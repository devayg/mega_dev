import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";

const NewsEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <img
        src="https://eventspassstorage7539.blob.core.windows.net/ocs-public/Marketplace/1364/themeImage-638309963851394299.jpg"
        alt=""
        className="img-fluid"
      />

      <Container fluid>
        <Row className="g-3 py-3">
          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://www.miamiboatshow.com/content/markets/na/discover-boating-miami-international-boat-show/en/home/_jcr_content/root/content/content/responsivegrid_16755_1893687323/image.coreimg.100.768.png/1701269952121/dbmibs-24-website-video-text.png"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Feb 14-18, 2024</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    Miami International Boat Show
                  </Card.Title>
                  <Button
                    variant=""
                    href="https://www.miamiboatshow.com/en/home.html"
                  >
                    Book Now <i class="fa-solid fa-angles-right"></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://americanyachtgroup.com/wp-content/uploads/2023/08/GX010033.MP4.10_24_50_09.Still001-1024x576.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">August 3, 2023</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    HCB 39′ SPECIALE TURNS HEADS AT THE 24TH ANNUAL MBGFC
                    BILLFISH LIMITED TOURNAMENT
                  </Card.Title>
                  <Link to={`/newsDetails/aug3`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://americanyachtgroup.com/wp-content/uploads/2023/08/hurricane-season.jpeg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Aug 28, 2023</Card.Text>
                  <Card.Title className="text-primary-emphasis">
                    PREPARING YOUR BOAT FOR HURRICANE
                  </Card.Title>
                  <Link to={`/newsDetails/aug28`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsEvents;
