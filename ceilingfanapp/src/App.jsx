import "./scss/custom.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/confirmation';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import Contact from './components/contact';
import AboutUs from './components/about';
import {Container, Nav, Navbar, Stack, Row, Col} from 'react-bootstrap';
import logoUrl from '/src/assets/fan-logo-neon.svg';

function App() {
  return (
    <Container id="PageContainer" className="App" fluid={true}>
      <Navbar id="TopNavbar">
        <Container>
          <Navbar.Brand>
            <Stack direction="horizontal" gap={2}>
            <img
              alt=""
              src={logoUrl}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h3 className="brand-text">{' '}Ceiling Fan App</h3>
            </Stack>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/purchase"><b>Shop</b></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about"><b>About Us</b></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contact"><b>Contact</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={2}>
        <Router>
          <Container className="content" fluid={true}>
            <Routes>
              <Route path ="/" element={<Navigate to="/purchase" />} />
              <Route path="/purchase" element={<Purchase/>} />
              <Route path="/purchase/viewOrder" element={<ViewOrder/>} />
              <Route path="/purchase/viewConfirmation" element={<ViewConfirmation/>} />
              <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
              <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Router>
        <Container></Container>
      </Stack>
      <footer id="CeilingFanFooter">
        <Container id="FooterLinks">
          <Row>
            <Col>
              <Nav.Link href="/purchase">Store</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Col>
          </Row>
        </Container>
        <Container id="FooterInformation">
          <Row>
          <Col>
          {'\u00A9'} All Rights Reserved 2024
          </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default App;
