import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col><h2>Our Mission</h2></Col>
        <Col><h2>Our Vision</h2></Col>
      </Row>
      <Row>
        <Col><p>To sell ceiling fans of the highest quality at the best price.</p></Col>
        <Col><p>A world of cool people enjoying cool air.</p></Col>
      </Row>
      <Row>
        <Col>
          <h2>Meet Our Executives!</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>(insert image here)</p>
          <h4>Aidan Limle</h4>
          <h5>Chief Financial Officer</h5>
        </Col>
        <Col>
          <p>(insert image here)</p>
          <h4>Cole Parker</h4>
          <h5>Chief Executive Officer</h5>
        </Col>
        <Col>
          <p>(insert image here)</p>
          <h4>Ricky Wu</h4>
          <h5>Chief Technical Officer</h5>
        </Col>
      </Row>
    </Container>
  )
};

export default AboutUs;