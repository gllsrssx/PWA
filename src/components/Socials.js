import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";

export function Socials() {
  return (
    <Container className="socialsContainer">
      <Row className="socialsRow justify-content-md-center">
        <Col xs={12} md={8} className="socialsCol">
          <h2 className="text-center">Connect with us:</h2>
          <p className="socialsInfo">
            <span className="d-block">
              <FaEnvelope /> LunaMovies@outlook.com
            </span>
            <br />
            <br />
            <span className="d-block">
              <FaPhone /> +32 468 13 35 22
            </span>
            <br />
            <br />
            <span className="d-block">
              <FaInstagram /> @LunaMovies
            </span>
            <br />
            <br />
            <span className="d-block">
              <FaFacebook /> LunaMovies
            </span>
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Socials;
