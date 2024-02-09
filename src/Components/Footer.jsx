import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import my_logo from "../Images/my_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{ padding: "0 16px", backgroundColor: "#1d355e", color: "#fff" }}
    >
      <Container fluid className="col-lg-11">
        <Row className="pt-4 py-lg-2">
          <Col lg={2} className="py-lg-4">
            <div>
              <img
                src={my_logo}
                alt="Megasails"
                className="img-fluid"
                style={{
                  width: "120px",
                  height: "25px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </Col>
          <Col xs={12} lg={10} className="m-0">
            <ul className="m-0 p-0 d-flex flex-column flex-lg-row footer-items">
              <li>
                <div>
                  <div className="p-lg-4">
                    <h6 className="text-white mb-3">About</h6>
                    <p
                      className="m-0 w-60 width-lg-100"
                      style={{ color: "#F8F6F4", fontSize: "12px" }}
                    >
                      We co-broker for American Yacht Group.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <Link to={`/news&events`}>
                  <div className="p-lg-4">
                    <h6 className="text-white mb-3">Events</h6>
                    <p
                      className="m-0 w-60 width-lg-100"
                      style={{ color: "#F8F6F4", fontSize: "12px" }}
                    >
                      Browse for Trending News and Events
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/services`}>
                  <div className="p-lg-4">
                    <h6 className="text-white mb-3">Services</h6>
                    <p
                      className="m-0 w-60 width-lg-100"
                      style={{ color: "#F8F6F4", fontSize: "12px" }}
                    >
                      Browse our wide range of Yacht services.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/contact-us`}>
                  <div className="p-lg-4">
                    <h6 className="text-white mb-3">Contact us</h6>
                    <p
                      className="m-0 w-60 width-lg-100"
                      style={{ color: "#F8F6F4", fontSize: "12px" }}
                    >
                      Need anything? Get in touch and we can help.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div class="d-none d-lg-block border-footer"></div>
      <Container fluid className="col-lg-11">
        <Row className="justify-content-between align-items-center pb-3 py-lg-3">
          <Col xs={12} lg={6}>
            <div
              className="d-flex flex-column flex-lg-row align-items-lg-center mb-4 mb-lg-0"
              style={{ gap: "12px" }}
            >
              <h6 className="m-0" style={{ fontSize: "14px" }}>
                Copyright © 2023 Megasails
              </h6>
              <a
                href="/privacy-policy"
                className="m-0 text-white"
                style={{ fontSize: "14px" }}
              >
                Privacy Policy
              </a>
              <Link
                to={`/marketing-policy`}
                className="m-0 text-white"
                style={{ fontSize: "14px" }}
              >
                Marketing Policy
              </Link>
            </div>
          </Col>

          <Col xs={12} lg={6} className="text-end">
            <div
              className="d-flex justify-content-lg-end c-footer-links"
              style={{ gap: "48px" }}
            >
              <a
                href="https://www.instagram.com/megasails_yacht/"
                className="footer-links"
              >
                <svg height="16" viewBox="0 0 16 16" width="16" fill="#fff">
                  <path d="m7.9365485 4.00948853c2.1378796 0 3.8773322 1.74591892 3.8773322 3.89174604 0 2.14582713-1.7394526 3.89174603-3.8773322 3.89174603-2.13787961 0-3.87703593-1.7459189-3.87703593-3.89174603 0-2.14582712 1.73915632-3.89174604 3.87703593-3.89174604zm0 1.39893537c-1.36946341 0-2.48357803 1.11825631-2.48357803 2.49281067 0 1.37455435 1.11411462 2.49281063 2.48357803 2.49281063 1.36975965 0 2.483578-1.11825628 2.483578-2.49281063 0-1.37455436-1.11381835-2.49281067-2.483578-2.49281067zm4.1036506-2.58676679c.5095127 0 .9227511.41477468.9227511.92618144 0 .5117041-.4132384.92647878-.9227511.92647878-.5098089 0-.9230474-.41477468-.9230474-.92647878 0-.51140676.4132385-.92618144.9230474-.92618144zm-7.31121058-1.33500953c-1.79099628 0-3.24784704 1.46226656-3.24784704 3.25992082v6.3093323c0 1.7976543 1.45685076 3.2599209 3.24784704 3.2599209h6.28566818c1.7909963 0 3.2481433-1.4622666 3.2481433-3.2599209v-6.3093323c0-1.79765426-1.457147-3.25992082-3.2481433-3.25992082zm6.28566818 14.31582152h-6.28566818c-2.60740146 0-4.72898852-2.1291766-4.72898852-4.7465684v-6.3093323c0-2.61739173 2.12158706-4.7465684 4.72898852-4.7465684h6.28566818c2.6076977 0 4.7292848 2.12917667 4.7292848 4.7465684v6.3093323c0 2.6173918-2.1215871 4.7465684-4.7292848 4.7465684z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089061875797"
                className="footer-links"
              >
                <svg height="16" viewBox="0 0 8 16" width="8" fill="#fff">
                  <path d="m1.61157724 7.96343677v7.63998533c0 .1097869.08892957.199047.19830983.199047h2.82684468c.10938027 0 .19799997-.0892601.19799997-.199047v-7.76438973h2.04940817c.10287322 0 .1887042-.07930781.19738025-.18225245l.1970704-2.33942478c.00991549-.1160071-.08118309-.21584163-.19738026-.21584163h-2.24647856v-1.65986573c0-.38876376.31419714-.70412892.70183089-.70412892h1.57935189c.10969013 0 .19830983-.08926016.19830983-.19904704v-2.33942478c0-.11009789-.0886197-.19904704-.19830983-.19904704h-2.66850667c-1.56602795 0-2.83583059 1.27421209-2.83583059 2.8460617v2.25545181h-1.41326741c-.10938026 0-.19830983.08926015-.19830983.19904704v2.33942477c0 .10978689.08892957.19904705.19830983.19904705h1.41326741z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCbe2S_k7gguSyKszTRl6tHQ"
                className="footer-links"
              >
                <svg height="14" viewBox="0 0 20 14" width="20" fill="#fff">
                  <path d="m12.6695433 7.17708642-4.43152592 2.43950617c-.19286329.10469136-.36604664-.03555555-.36604664-.25520987v-5.00740741c0-.22281482.17869373-.36266667.37155701-.25244445l4.46183305 2.56790124c.1971928.11259259.163737.39901234-.0358175.50765432zm7.0103835-2.87683951c0-2.37511111-1.9180056-4.30024691-4.2839264-4.30024691h-11.11168033c-2.3659208 0-4.28432007 1.9251358-4.28432007 4.30024691v5.22666667c0 2.37511112 1.91839927 4.30024692 4.28432007 4.30024692h11.11168033c2.3659208 0 4.2839264-1.9251358 4.2839264-4.30024692z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/megasails-llc-00b54b25b/"
                className="footer-links"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="white"
                >
                  <path d="M2 2v20h20V2H2zm14.5 16.5h-2.3v-3.6c0-1.1-.4-1.9-1.3-1.9s-1.5.7-1.5 1.8v3.7H7.2V8.4h2.2v1.1c.3-.5 1-.9 1.7-.9 1.3 0 2.4 1 2.4 3.1l.1 3.4z" />
                  <path d="M4.3 7.2c-1.1 0-1.9.7-1.9 1.7 0 1 .7 1.7 1.8 1.7h.1c1.1 0 1.9-.7 1.9-1.7s-.8-1.7-1.9-1.7zm-2.2 9.3h4.4v-12H2.1v12z" />
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
