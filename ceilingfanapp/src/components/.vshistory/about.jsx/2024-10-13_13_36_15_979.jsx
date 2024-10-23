import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="PageTitle">About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col><h2>Our Mission</h2></Col>
        <Col><h2>Our Vision</h2></Col>
      </Row>
      <Row>
        <Col>
          <p>
            At Ceiling Fan App we are on a mission to revolutionize comfort and elevate spaces with 
            cutting-edge ceiling fans that are both stylish and energy-efficient. As absolute legends in
            the industry, we deliver unparalleled quality, top-notch customer service, and innovation that
            keeps you cool-literally and figuratively. We aim to create an effortless, breezy experience
            from the moment you shop to long after installation.
          </p>
        </Col>
        <Col>
           <p>
             Our vision is to lead the ceiling fan market by becoming the go-to name for legendary comfort,
             design, and energy efficiency. We aspire to set new standards in home climate solutions, blending
             technology and aesthetics seamlessly, while continuously inspiring our customers to create spaces
             they love. With every spin, we aim to leave a lasting impact-one fan at a time.
           </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Strategy</h2>
          <p>
            We aim to simplify the ceiling fan shopping experience for our customers 
            by providing a sleek, simple interface and responsive service.
          </p>
        </Col>
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
          <img 
            className="bio-pic"
            alt=""
            src="/src/assets/cole_bio_pic.jpg" 
            width="134"
            height="150"
            
          />
          <h4>Cole Parker</h4>
          <h5>Chief Executive Officer</h5>
          <p>
            Cole is a second-year Master's student in Ohio State's 
            Department of Computer Science and Engineering.  
            He graduated with a Bachelor's of Science in Computer Science 
            from the University of Alabama in 2022.  
            He has interests in databases, distributed systems, and data analytics.<br/>  
            In his free time, Cole enjoys cheering on the Buckeyes and playing volleyball.  O-H!
          </p>
        </Col>
        <Col>
          <img
            className="bio-pic"
            alt=""
            src="/src/assets/ricky_bio_pic.jpg"
            width="134"
             height="150"
          />
          <h4>Ricky Wu</h4>
          <h5>Chief Technical Officer</h5>
        </Col>
      </Row>
    </Container>
  )
};

export default AboutUs;